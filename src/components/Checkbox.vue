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
    </div>
</template>

<script setup>
const props = defineProps({
    id: String,
    checkboxClass: String,
    modelValue: Boolean,
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
