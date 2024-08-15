<template>
  <Calendar
    v-model="inputValue"
    time-only
    :hour-format="props.hourFormat"
    @update:model-value="onChange"
    :show-button-bar="props.showButtonBar"
    :show-icon="props.showIcon"
    :manual-input="false"
  >
    <template #inputicon="{ clickCallback }">
      <InputIcon class="pi pi-clock cursor-pointer" @click="clickCallback" />
    </template>
  </Calendar>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Calendar from "primevue/calendar";
import InputIcon from "primevue/inputicon";

type VDateTimePickerEmits = {
  "update:modelValue": [value: Date | null];
};
interface VDateTimePickerProps {
  modelValue: Date | null;
  hourFormat?: "12" | "24";
  showIcon?: boolean;
  showButtonBar?: boolean;
}

const props = withDefaults(defineProps<VDateTimePickerProps>(), {
  hourFormat: "24",
  showIcon: false,
  showButtonBar: false,
});
const emits = defineEmits<VDateTimePickerEmits>();
const inputValue = ref<Date | null>(props.modelValue);

const onChange = (): void => {
  emits("update:modelValue", inputValue.value);
};
</script>
