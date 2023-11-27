<template>
    <div v-for="(option, index) in options" :key="index" :class="groupClass">
        <Checkbox
            v-model="selectedValues[index].checked"
            :id="option.id"
            checkboxClass="g--form-checkbox-01"
            :error="error"
            :required="required"
        />

        <Label :forId="option.id" labelClass="g--form-label-01" :textLabel="option.label" />
    </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue"
import Checkbox from "./Checkbox.vue"
import Label from "./Label.vue"

const props = defineProps({
    options: Array, // { id: string; label: string }[]
    modelValue: Array, // string[]
    groupClass: String,
    error: {
        type: Boolean,
        default: false,
    },
    required: {
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
