<template>
    <div :class="[inputClass, { [`${inputClass}--error`]: error }]">
        <textarea
            v-model="modelValue"
            :id="id"
            :class="[inputClass + '__item']"
            :placeholder="placeholder"
            :rows="rows"
            @input="handleChange"
        ></textarea>
    </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
    modelValue: String,
    id: String,
    inputClass: String,
    rows: {
        type: String,
        default: "3",
    },
    placeholder: {
        type: String,
        default: null,
    },
    required: {
        type: Boolean,
        default: false,
    },
    error: {
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
</script>
