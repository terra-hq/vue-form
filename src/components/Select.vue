<template>
    <div :class="[selectClass, { [`${selectClass}--error`]: error }]">
        <select
            :id="id"
            :required="required"
            :class="[`${selectClass}__item`]"
            v-model="selectedOption"
            @input="handleSelectChange"
            :aria-required="required"
            :aria-invalid="error"
        >
            <option
                v-for="option in options"
                :key="option.id"
                :value="option.id"
                :disabled="option.disabled"
                :selected="option.selected"
            >
                {{ option.label }}
            </option>
        </select>
    </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
    id: String,
    selectClass: String,
    options: Array,
    modelValue: String,
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

const emit = defineEmits(["update:modelValue"])

const handleSelectChange = (event) => {
    selectedOption.value = event.target.value
    emit("update:modelValue", selectedOption.value)
}
</script>
