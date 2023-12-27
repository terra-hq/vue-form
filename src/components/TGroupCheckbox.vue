<template>
    <Checkbox
        v-for="(option, index) in options"
        :key="index"
        v-model="selectedValues[index].checked"
        :id="option.id"
        :checkboxClass="checkboxClass"
        :error="error"
        :required="required"
        :textLabel="option.label"
        :disabled="disabled"
    />
</template>

<script setup>
import { reactive, ref, watch } from "vue"
import Checkbox from "./TCheckbox.vue"

const props = defineProps({
    options: Array, // { id: string; label: string }[]
    modelValue: Array, // string[]
    checkboxClass: String,
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
})

const selectedValues = reactive(
    props.options.map((option) => ({
        ...option,
        checked: ref(props.modelValue?.includes(option.id)) || false,
    }))
)

const emit = defineEmits(["update:modelValue"])
watch(selectedValues, () => {
    emit(
        "update:modelValue",
        selectedValues.filter((value) => value.checked).map((value) => value.id)
    )
})
</script>
