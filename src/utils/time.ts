import { format } from "date-fns";
import { ru } from "date-fns/locale";

export const prepareTime = (date: Date): string => {
  return format(new Date(date), "HH:mm", { locale: ru });
};
