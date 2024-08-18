<template>
  <InputGroup>
    <div v-if="$slots['menu']" :class="styles.menu">
      <slot name="menu" />
    </div>
    <InputText v-model="modelValue" @update:model-value="onInput" />
    <Button
      v-if="showClearIcon"
      icon="pi pi-times"
      outlined
      severity="secondary"
      @click="onClear"
    />
    <Button
      v-if="props.searchable"
      label="Search"
      severity="info"
      @click="onSearch"
    />
  </InputGroup>
</template>

<script setup lang="ts">
import InputGroup from "primevue/inputgroup";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { computed, ref } from "vue";

import styles from "./styles.module.scss";

type VInputEmits = {
  "update:model-value": [value: string];
  search: [value: void];
  clear: [value: void];
};
interface VInputProps {
  modelValue: string;
  placeholder: string;
  clearable?: boolean;
  searchable?: boolean;
}

defineSlots<{
  default(props: object): never;
  menu(props: object): never;
}>();
const emits = defineEmits<VInputEmits>();
const props = withDefaults(defineProps<VInputProps>(), {
  clearable: false,
  searchable: false,
});

const modelValue = ref<string>(props.modelValue);

const showClearIcon = computed(
  (): boolean => props.clearable && !!modelValue.value.length
);

const onInput = (): void => {
  emits("update:model-value", modelValue.value);
};
const onClear = (): void => {
  modelValue.value = "";
  onInput();
  emits("clear");
};

const onSearch = (): void => {
  emits("search");
};
</script>
