<template>
  <div>
    <VSelect v-model="selectedCountries" :options="COUNTRIES" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VSelect } from "shared/ui";

import { COUNTRIES } from "shared/constants";

const selectedCountries = ref<{ name: string; code: string }[]>([]);
</script>
