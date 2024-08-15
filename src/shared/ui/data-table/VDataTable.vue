<template>
  <DataTable :value="props.value">
    <Column
      v-for="column of props.header"
      :key="column.field"
      :field="column.field"
      :header="column.header"
    />
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

const props = defineProps<VDataTableProps>();
</script>
