<template>
  <div :class="styles.field">
    <span>Выбранное время {{ preparedTime }}</span>
    <VDateTimePicker v-model="time" show-icon show-button-bar />
  </div>
</template>

<script setup lang="ts">
import { VDateTimePicker } from "shared/ui";
import { computed, ref } from "vue";

import { prepareTime } from "shared/utils/time";

import styles from "./styles.module.scss";

const time = ref<Date | null>(null);
const preparedTime = computed((): string => {
  return !!time.value ? prepareTime(time.value) : "";
});
</script>
