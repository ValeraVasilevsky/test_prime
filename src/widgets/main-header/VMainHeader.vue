<template>
  <header :class="styles.header">
    <span
      v-for="link of links"
      :key="link.to"
      :class="styles.link"
      @click="navigateTo(link.to)"
    >
      {{ link.title }}
    </span>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import styles from "./styles.module.scss";

import { PAGES_NAMES } from "shared/constants";

const router = useRouter();
const links: { title: string; to: PAGES_NAMES }[] = [
  {
    title: "DatePicker",
    to: PAGES_NAMES.DatePicker,
  },
  {
    title: "Select",
    to: PAGES_NAMES.Select,
  },
  {
    title: "DataTable",
    to: PAGES_NAMES.DataTable,
  },
  {
    title: "SearchableTable",
    to: PAGES_NAMES.SearchableTable,
  },
];

const navigateTo = (to: PAGES_NAMES): void => {
  router.push({ name: to });
};
</script>
