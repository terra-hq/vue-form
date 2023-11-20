<template>
    <label :for="id" :class="labelClass">{{ labelText }}</label>
    <div :class="formClass">
        <textarea
            v-model="modelValue"
            :id="id"
            class="g--form-textarea-01__item"
            :placeholder="placeholder"
            :rows="rows"
            @input="handleChange"
        ></textarea>
    </div>
    <span v-if="errorText" :class="errorClass">{{ errorText }}</span>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
    formClass: String,
    id: String,
    labelText: String,
    labelClass: String,
    modelValue: String,
    placeholder: String,
    rows: String,
    errorText: String,
    errorClass: String,
})

const modelValue = ref(props.modelValue)

const emit = defineEmits()
const handleChange = (event) => {
    modelValue.value = event.target.value
    emit("update:modelValue", modelValue.value)
}
</script>
