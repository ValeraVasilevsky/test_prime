<template>
  <div :class="styles.app">
    <div :class="styles.field">
      <span>Выбранное время {{ preparedTime }}</span>
      <VDateTimePicker v-model="time" show-icon show-button-bar />
    </div>

    <div :class="styles.field">
      <VSelect v-model="selectedCountries" :options="COUNTRIES" />
    </div>

    <div :class="styles.field">
      <VDataTable :value="dataTableValue" :header="tableHeader" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import {
  VDateTimePicker,
  VSelect,
  VDataTable,
  type VDataTableHeader,
} from "shared/ui";
import { COUNTRIES } from "shared/constants";

import { prepareTime } from "shared/utils/time";
import { prepareApiString } from "shared/utils/string";

import styles from "./styles.module.scss";

const time = ref<Date | null>(null);
const selectedCountries = ref<{ name: string; code: string }[]>([]);

const tableHeader = ref<VDataTableHeader[]>([
  {
    field: "time",
    header: "Время",
  },
  {
    field: "value",
    header: "Значение",
  },
]);

const dataTableValue = prepareApiString();
const preparedTime = computed((): string => {
  return !!time.value ? prepareTime(time.value) : "";
});
</script>
