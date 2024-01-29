<template>
    <div
        v-for="(option, index) in options"
        :key="index"
        :class="[radioClass, modifierClass, { [`${radioClass}--error`]: error }]"
    >
        <input
            :id="option.id"
            type="radio"
            :class="[`${radioClass}__item`]"
            :required="required"
            :checked="option.id === selectedOption"
            @change="handleChange(option.id)"
            :aria-required="required"
            :aria-invalid="error"
            :disabled="disabled"
            v-bind="extraAttrs"
        />
        <TLabel :forId="option.id" :labelClass="`${radioClass}__title`" :textLabel="option.label" />
    </div>
</template>

<script setup>
import { ref } from "vue"
import TLabel from "./TLabel.vue"

const props = defineProps({
    options: Array, // { id: string; label: string }[]
    modelValue: String,
    radioClass: String,
    modifierClass: {
        type: String,
        default: "",
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
    extraAttrs: {
        type: Object,
        default: () => ({}),
    },
})

const selectedOption = ref(props.modelValue)

const emit = defineEmits()

const handleChange = (id) => {
    selectedOption.value = id
    emit("update:modelValue", selectedOption.value)
}
</script>
