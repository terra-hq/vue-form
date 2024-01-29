<template>
    <div :class="[toggleClass, modifierClass, { [`${toggleClass}--error`]: error }]">
        <input
            :id="id"
            type="checkbox"
            :class="[`${toggleClass}__item`]"
            :required="required"
            :checked="modelValue"
            :value="modelValue"
            @change="$emit('update:modelValue', !modelValue)"
            :aria-required="required"
            :aria-invalid="error"
            :disabled="disabled"
            v-bind="extraAttrs"
        />
        <label :for="id" :class="[`${toggleClass}__content`]">
            <span :class="[`${toggleClass}__item-primary`]">{{ textLabelPrimary }}</span>
            <span :class="[`${toggleClass}__item-secondary`]">{{ textLabelSecondary }}</span>
        </label>
        <span :class="[`${toggleClass}__artwork`]" role="presentation"></span>
    </div>
</template>

<script setup>
import { ref, watch } from "vue"

const props = defineProps({
    id: String,
    toggleClass: String,
    modifierClass: {
        type: String,
        default: "",
    },
    modelValue: Boolean,
    textLabelPrimary: {
        type: String,
        default: "",
    },
    textLabelSecondary: {
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
