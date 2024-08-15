import { VDataTableItem } from "../ui/data-table";
import { API_RESPONSE } from "../constants";

export const prepareApiString = (): VDataTableItem[] => {
  const regex = /\[[\d:]*\]/g;
  const match = API_RESPONSE.match(regex);
  const splitedString = API_RESPONSE.split(regex).filter((item) => item);

  const result: VDataTableItem[] = [];
  if (!match) return result;
  match.forEach((item, index) => {
    result.push({
      time: item,
      value: splitedString[index],
    });
  });

  return result;
};
