<template>
    <div :class="[uploadClass, { [`${uploadClass}--error`]: error }]">
        <input
            type="file"
            :id="id"
            :class="[`${uploadClass}__item`]"
            :accept="accept"
            @input="handleFileChange"
            :multiple="multiple"
            :required="required"
            :aria-required="required"
            :aria-invalid="error"
            :disabled="disabled"
        />
    </div>
</template>

<script setup>
import { watch } from "vue"
const props = defineProps({
    id: String,
    uploadClass: String,
    modelValue: {
        type: Object,
        default: null,
    },
    multiple: {
        type: Boolean,
        default: false,
    },
    error: {
        type: Boolean,
        default: false,
    },
    required: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    accept: {
        type: String,
        default: "",
    },
})

const emit = defineEmits()

const handleFileChange = (event) => {
    const files = event.target.files
    const isMultiple = event.target.multiple

    const fileValue = isMultiple ? files : files[0]

    emit("update:modelValue", fileValue)
}
</script>
