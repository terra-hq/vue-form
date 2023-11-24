<template>
    <div :class="[inputClass, { [`${inputClass}--error`]: error }]">
        <input
            :type="type"
            :value="modelValue"
            :id="id"
            :class="[`${inputClass}__item`]"
            @input="handleChange"
            :maxlength="maxlength"
            :placeholder="placeholder"
            :required="required"
        />
    </div>
</template>

<script setup>
import { ref, watch } from "vue"

const props = defineProps({
    type: {
        type: String,
        default: "text",
    },
    modelValue: String,
    id: String,
    inputClass: String,
    error: {
        type: Boolean,
        default: false,
    },
    maxlength: {
        type: Number,
        default: null,
    },
    placeholder: {
        type: String,
        default: null,
    },
    required: {
        type: Boolean,
        default: false,
    },
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
