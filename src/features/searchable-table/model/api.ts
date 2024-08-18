import { api } from "shared/api";
import type { User } from "./types";

export const fetchUsers = async (): Promise<User[]> => {
  const { data } = await api.get("users");

  return data;
};
