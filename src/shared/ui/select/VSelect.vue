<template>
  <MultiSelect
    v-model="modelValue"
    optionLabel="name"
    :options="props.options"
    :class="styles.container"
    :show-toggle-all="props.showToggleAll"
    @update:modelValue="onChange"
  >
    <template #header>
      <div v-if="showClearButton" :class="styles.clear" @click="onClear">
        Очистить
      </div>
    </template>
    <template #option="slotProps">
      <div>{{ slotProps.option.name }}</div>
    </template>
  </MultiSelect>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import MultiSelect from "primevue/multiselect";

import type { MultiSelectModelValue } from "./model";

import styles from "./styles.module.scss";

type MultiSelectEmits = {
  "update:model-value": [value: MultiSelectModelValue[]];
};
interface MultiSelectProps {
  modelValue: MultiSelectModelValue[];
  options: MultiSelectModelValue[];
  showToggleAll?: boolean;
}

const props = withDefaults(defineProps<MultiSelectProps>(), {
  showToggleAll: false,
});
const emits = defineEmits<MultiSelectEmits>();

const modelValue = ref<MultiSelectModelValue[]>(props.modelValue);

const showClearButton = computed((): boolean => !!props.modelValue.length);

const onChange = (): void => {
  emits("update:model-value", modelValue.value);
};

const onClear = (): void => {
  modelValue.value = [];
  onChange();
};
</script>
