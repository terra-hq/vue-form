<template>
    <div :class="{ formClass, formErrorClass }">
        <label :for="id" :class="labelClass">{{ labelText }}</label>
        <input
            :type="type"
            :value="modelValue"
            :id="id"
            class="c--form-field-a__item"
            :required="required"
            :disabled="disabled"
            @input="handleChange"
            :maxlength="+maxlength"
            :placeholder="placeholder"
        />
        <span v-if="errorText" :class="errorClass">{{ errorText }}</span>
    </div>
</template>

<script setup>
import { ref, watch } from "vue"

const props = defineProps({
    formClass: String,
    id: String,
    labelText: String,
    labelClass: String,
    type: String,
    modelValue: String,
    required: Boolean,
    disabled: Boolean,
    formErrorClass: String,
    errorText: String,
    errorClass: String,
    maxlength: String,
    placeholder: String,
})

const modelValue = ref(props.modelValue)

const emit = defineEmits()
const handleChange = (event) => {
    modelValue.value = event.target.value
    emit("update:modelValue", modelValue.value)
}

watch(
    () => props.modelValue,
    (newValue) => {
        modelValue.value = newValue
    }
)
</script>
