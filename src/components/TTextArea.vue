<template>
    <div :class="[textAreaClass, modifierClass, { [`${textAreaClass}--error`]: error }]">
        <textarea
            v-model="modelValue"
            :id="id"
            :class="[`${textAreaClass}__item`]"
            :placeholder="placeholder"
            :rows="rows"
            @input="handleChange"
            :required="required"
            :aria-required="required"
            :aria-invalid="error"
            :disabled="disabled"
            v-bind="extraAttrs"
        ></textarea>
    </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
    modelValue: String,
    id: String,
    textAreaClass: String,
    modifierClass: {
        type: String,
        default: "",
    },
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
    disabled: {
        type: Boolean,
        default: false,
    },
    error: {
        type: Boolean,
        default: false,
    },
    extraAttrs: {
        type: Object,
        default: () => ({}),
    },
})

const modelValue = ref(props.modelValue)

const emit = defineEmits()
const handleChange = (event) => {
    modelValue.value = event.target.value
    emit("update:modelValue", modelValue.value)
}
</script>
