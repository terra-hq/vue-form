<template>
    <div
        v-for="(option, index) in options"
        :key="index"
        :class="[radioClass, { [`${radioClass}--error`]: error }]"
    >
        <input
            :id="option.id"
            type="radio"
            :class="[`${radioClass}__item`]"
            :required="required"
            :checked="option.id === selectedOption"
            @change="handleChange(option.id)"
        />
        <Label
            :forId="option.id"
            :labelClass="[`${radioClass}__title`]"
            :textLabel="option.label"
        />
    </div>
</template>

<script setup>
import { ref } from "vue"
import Label from "./Label.vue"

const props = defineProps({
    options: Array, // { id: string; label: string }[]
    modelValue: String,
    radioClass: String,
    error: {
        type: Boolean,
        default: false,
    },
    required: {
        type: Boolean,
        default: false,
    },
})

const selectedOption = ref(props.modelValue)

const emit = defineEmits()

const handleChange = (id) => {
    selectedOption.value = id
    emit("update:modelValue", selectedOption.value)
}
</script>
