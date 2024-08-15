<template>
  <div :class="styles.app">
    <div :class="styles.field">
      <span>Выбранное время {{ preparedTime }}</span>
      <VDateTimePicker v-model="time" show-icon show-button-bar />
    </div>

    <div :class="styles.field">
      <VSelect v-model="selectedCountries" :options="countries" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { VDateTimePicker, VSelect } from "shared/ui";

import { prepareTime } from "shared/utils/time";

import styles from "./styles.module.scss";

const time = ref<Date | null>(null);
const selectedCountries = ref<{ name: string; code: string }[]>([]);
const countries = ref<{ name: string; code: string }[]>([
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
]);

const preparedTime = computed((): string => {
  return !!time.value ? prepareTime(time.value) : "";
});
</script>
