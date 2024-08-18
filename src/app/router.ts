import type { Component } from "vue";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { PAGES_NAMES } from "shared/constants";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "",
      component: (): Component => import("pages/layout.vue"),
      children: [
        {
          path: "",
          name: PAGES_NAMES.DatePicker,
          component: (): Component =>
            import("pages/date-time-picker/DateTimePicker.vue"),
        },
        {
          path: "select",
          name: PAGES_NAMES.Select,
          component: (): Component => import("pages/select/Select.vue"),
        },
        {
          path: "data-table",
          name: PAGES_NAMES.DataTable,
          component: (): Component => import("pages/data-table/DataTable.vue"),
        },
        {
          path: "searchable-table",
          name: PAGES_NAMES.SearchableTable,
          component: (): Component =>
            import("pages/searchable-table/SearchableTable.vue"),
        },
      ],
    },
  ] as RouteRecordRaw[],
});
