<template>
  <div :class="styles.app">
    <VMainHeader />
    <div :class="styles.content">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { VMainHeader } from "widgets/main-header";

import styles from "./styles.module.scss";
</script>
