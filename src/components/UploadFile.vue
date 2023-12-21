<template>
    <div :class="[uploadClass, { [`${uploadClass}--error`]: error }]">
        <input
            type="file"
            :id="id"
            :class="[`${uploadClass}__item`]"
            :accept="accept"
            @change="handleFileChange"
            :multiple="multiple"
            :required="required"
            :aria-required="required"
            :aria-invalid="error"
            :disabled="disabled"
        />
    </div>
</template>

<script setup>
const props = defineProps({
    id: String,
    uploadClass: String,
    modelValue: {
        type: [File, FileList, String],
        default: String,
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
