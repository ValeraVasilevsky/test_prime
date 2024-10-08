import type { MultiSelectModelValue } from "./ui/select";
import type { VDataTableHeader } from "./ui/data-table";

export const COUNTRIES: MultiSelectModelValue[] = [
  { name: "Australia", code: "AU" },
  { name: "Brazil", code: "BR" },
  { name: "China", code: "CN" },
  { name: "Egypt", code: "EG" },
  { name: "France", code: "FR" },
  { name: "Germany", code: "DE" },
  { name: "India", code: "IN" },
  { name: "Japan", code: "JP" },
  { name: "Spain", code: "ES" },
  { name: "United States", code: "US" },
];

export const API_RESPONSE =
  "[13:36:53] Расчетное время: 9 мин[13:36:58] Открыть клапан откачки К1[13:36:58] Включить вакуумный насос[13:36:58] Закрыть клапан К5[13:36:58] Закрыть клапан дистилляции К2[13:36:58] Ожидание: 8 с[13:37:06] Заливка 2.2мл. в испаритель[13:37:06] Заданно 26.50602409638554 шагов[13:37:09] Заливка перекиси завершена[13:37:09] Открыть клапан дистилляции К2[13:42:09] Включить нагрев испарителя[13:42:09] Закрыть клапан дистилляции К2[13:42:09] конечное давление1.0960040758227925 торр[13:42:09] Выпаривание через К2[13:42:09] Выпаривание длилось5 мин[13:42:09] Откачка до 1 торр[13:42:15] Закрыть клапан откачки К1[13:43:09] Открыть клапан откачки К1[13:43:14] Аппаратное смещение 0 денсит. = -0.313683180809021[13:43:14] Закрыть клапан дистилляции К2";

export enum PAGES_NAMES {
  DatePicker = "date-picker",
  Select = "select",
  DataTable = "data-table",
  SearchableTable = "searchable-table",
}

export const USERS_HEADER: VDataTableHeader[] = [
  {
    field: "id",
    header: "ID",
  },
  {
    field: "name",
    header: "Name",
  },
  {
    field: "email",
    header: "Email",
  },
  {
    field: "phone",
    header: "Phone",
  },
  {
    field: "website",
    header: "Website",
  },
];
