<template>
  <VDataTable :value="dataTableValue" :header="tableHeader" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VDataTable, type VDataTableHeader } from "shared/ui";

import { prepareApiString } from "shared/utils/string";

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
</script>
