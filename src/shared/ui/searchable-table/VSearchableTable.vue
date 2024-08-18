<template>
  <div :class="styles.container">
    <VDataTable
      v-if="!props.loading"
      :value="filteredColumns"
      :header="props.header"
      :class="styles.table"
    >
      <template #header v-if="showHeader">
        <div :class="styles.header">
          <VInput
            v-model="search"
            searchable
            clearable
            placeholder="Поиск..."
            :class="styles.input"
            @update:model-value="onInputSearch"
            @search="filterTableRecords"
            @clear="onClear"
          >
            <template #menu>
              <Button
                ref="listButton"
                icon="pi pi-sliders-h"
                @click="toggleList"
              />
              <ListBox
                ref="listBox"
                v-if="showList"
                v-model="selectedFilteredColumns"
                optionLabel="name"
                multiple
                :class="styles.list"
                :options="tableColumns"
              />
            </template>
          </VInput>
          <VSelect
            v-model="selectValue"
            :options="props.selectOptions"
            :class="styles.select"
            @update:model-value="onSelectValueChange"
          />
        </div>
      </template>
    </VDataTable>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { onClickOutside } from "@vueuse/core";

import { VDataTable, VDataTableHeader, VDataTableItem } from "../data-table";
import { VSelect, MultiSelectModelValue } from "../select";
import { VInput } from "../base-input";
import Button from "primevue/button";
import ListBox from "primevue/listbox";

import styles from "./styles.module.scss";

type VSearchableTableEmits = {
  "update:selectValue": [value: MultiSelectModelValue[]];
  "update:search": [value: string];
};
interface VSearchableTableProps {
  value: VDataTableItem[];
  header: VDataTableHeader[];
  loading?: boolean;
  withSelect?: boolean;
  filtered?: boolean;
  selectOptions?: MultiSelectModelValue[];
  selectValue?: MultiSelectModelValue[];
  search?: string;
}

const props = withDefaults(defineProps<VSearchableTableProps>(), {
  loading: false,
  withSelect: false,
  filtered: false,
  selectValue: () => [],
  selectOptions: () => [],
  search: "",
});
const emits = defineEmits<VSearchableTableEmits>();

const selectValue = ref<MultiSelectModelValue[]>(props.selectValue || []);
const selectedFilteredColumns = ref<MultiSelectModelValue[]>([]);
const search = ref<string>(props.search || "");
const showList = ref<boolean>(false);
const listBox = ref<HTMLElement | null>(null);
const listButton = ref<HTMLElement | null>();
const filteredColumns = ref<VDataTableItem[]>(props.value || []);

const showHeader = computed((): boolean => props.filtered || props.withSelect);
const tableColumns = computed((): MultiSelectModelValue[] => {
  if (!selectValue.value.length) return props.selectOptions;
  return selectValue.value;
});

const toggleList = (): void => {
  showList.value = !showList.value;
};
const onSelectValueChange = (): void => {
  emits("update:selectValue", selectValue.value);
};
const onInputSearch = (): void => {
  emits("update:search", search.value);
};
const onClear = (): void => {
  filteredColumns.value = props.value;
};
const filterTableRecords = (): void => {
  if (!search.value) filteredColumns.value = props.value;

  const result: Set<VDataTableItem> = new Set([]);
  const selectedColumns: VDataTableHeader["field"][] =
    selectedFilteredColumns.value.map(({ code }) => code);

  if (!selectedFilteredColumns.value.length) {
    props.value.forEach((item) => {
      tableColumns.value.forEach(({ code }) => {
        if (
          String(item[code]).toLowerCase().includes(search.value.toLowerCase())
        ) {
          result.add(item);
        }
      });
    });
  } else {
    props.value.forEach((item) => {
      selectedColumns.forEach((code) => {
        if (String(item[code]).toLowerCase().includes(search.value)) {
          result.add(item);
        }
      });
    });
  }

  filteredColumns.value = [...result];
};

onClickOutside(
  listBox,
  () => {
    showList.value = false;
  },
  {
    ignore: [listButton],
  }
);
</script>
