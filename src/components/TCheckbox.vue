<template>
    <div :class="[checkboxClass, modifierClass, { [`${checkboxClass}--error`]: error }]">
        <input
            :id="id"
            type="checkbox"
            :class="[`${checkboxClass}__item`]"
            :required="required"
            :checked="modelValue"
            :value="modelValue"
            @change="$emit('update:modelValue', !modelValue)"
            :aria-required="required"
            :aria-invalid="error"
            :disabled="disabled"
            v-bind="extraAttrs"
        />
        <TLabel :forId="id" :labelClass="`${checkboxClass}__title`" :textLabel="textLabel" />
    </div>
</template>

<script setup>
import TLabel from "./TLabel.vue"

const props = defineProps({
    id: String,
    checkboxClass: String,
    modifierClass: {
        type: String,
        default: "",
    },
    modelValue: Boolean,
    textLabel: {
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

defineEmits(["update:modelValue"])
</script>
