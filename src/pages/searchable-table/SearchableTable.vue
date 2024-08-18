<template>
  <VSearchableTable
    v-if="!userStore.isLoading"
    :header="usersHeader"
    :value="userStore.users"
    :loading="userStore.isLoading"
    filtered
    with-select
    :select-options="userColumns"
    v-model:select-value="selectedColumns"
  />
</template>

<script setup lang="ts">
import {
  VSearchableTable,
  MultiSelectModelValue,
  VDataTableHeader,
} from "shared/ui";
import { USERS_HEADER } from "shared/constants";

import { useUserStore } from "features/searchable-table";
import { computed, onMounted, ref } from "vue";

const userStore = useUserStore();

const getUsersColumns = (): MultiSelectModelValue[] => {
  return USERS_HEADER.map(
    (field) =>
      ({
        name: field.header,
        code: field.field,
      } as MultiSelectModelValue)
  );
};
const userColumns = ref<MultiSelectModelValue[]>(getUsersColumns());
const selectedColumns = ref<MultiSelectModelValue[]>(getUsersColumns());

const usersHeader = computed((): VDataTableHeader[] => {
  if (!selectedColumns.value.length) return USERS_HEADER;

  return USERS_HEADER.filter((item) =>
    selectedColumns.value.map((column) => column.name).includes(item.header)
  );
});

onMounted(async () => {
  await userStore.getUsers();
});
</script>
