<template>
    <div :class="[checkboxClass, { [`${checkboxClass}--error`]: error }]">
        <input
            :id="id"
            type="checkbox"
            :class="[`${checkboxClass}__item`]"
            :required="required"
            :checked="modelValue"
            :value="modelValue"
            @change="$emit('update:modelValue', !modelValue)"
        />
        <Label :forId="id" :labelClass="[`${checkboxClass}__title`]" :textLabel="textLabel" />
    </div>
</template>

<script setup>
import Label from "./Label.vue"

const props = defineProps({
    id: String,
    checkboxClass: String,
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
})

defineEmits(["update:modelValue"])
</script>
