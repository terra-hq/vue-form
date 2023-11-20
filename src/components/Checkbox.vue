<template>
    <div :class="[inputClass, { [`${inputClass}--error`]: error }]">
        <input
            :id="id"
            type="checkbox"
            :class="[inputClass + '__item']"
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
    inputClass: String,
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
