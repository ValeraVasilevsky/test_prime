import { defineStore } from "pinia";
import { ref } from "vue";

import type { User } from "./types";
import type { VDataTableItem } from "shared/ui";
import { fetchUsers } from "./api";

export const useUserStore = defineStore("user", () => {
  const users = ref<VDataTableItem[]>([]);
  const isLoading = ref<boolean>(false);

  const prepareUsers = (usersResponse: User[]): VDataTableItem[] => {
    return usersResponse.map((user) => ({
      ...user,
    }));
  };

  const getUsers = async (): Promise<void> => {
    isLoading.value = true;

    try {
      const usersResponse = await fetchUsers();
      users.value = prepareUsers(usersResponse);
    } catch (error) {
      users.value = [];
    } finally {
      isLoading.value = false;
    }
  };

  return {
    users,
    isLoading,
    getUsers,
  };
});
