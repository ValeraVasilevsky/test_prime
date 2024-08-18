<template>
  <DataTable v-bind="$attrs" :value="props.value">
    <Column
      v-for="column of props.header"
      :key="column.field"
      :field="column.field"
      :header="column.header"
    />

    <template #header v-if="$slots.header">
      <slot name="header" />
    </template>
  </DataTable>
</template>

<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";

import type { VDataTableHeader, VDataTableItem } from "./model";

interface VDataTableProps {
  header: VDataTableHeader[];
  value: VDataTableItem[];
}

defineSlots<{
  default(props: object): never;
  header(props: object): never;
}>();
const props = defineProps<VDataTableProps>();
</script>
