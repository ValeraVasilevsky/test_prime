<template>
  <main :class="styles.container">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import styles from "./styles.module.scss";
</script>
