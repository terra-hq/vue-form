<template>
    <div :class="[selectClass, modifierClass, { [`${selectClass}--error`]: error }]">
        <select
            :id="id"
            :required="required"
            :class="[`${selectClass}__item`]"
            v-model="selectedOption"
            @input="handleSelectChange"
            :aria-required="required"
            :aria-invalid="error"
            v-bind="extraAttrs"
        >
            <option
                v-for="option in options"
                :key="option.id"
                :value="option.id"
                :disabled="option.disabled"
                :selected="option.selected"
                v-bind="optionsAttrs"
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
    modifierClass: {
        type: String,
        default: "",
    },
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
    extraAttrs: {
        type: Object,
        default: () => ({}),
    },
    optionsAttrs: {
        type: Object,
        default: () => ({}),
    },
})

const selectedOption = ref(props.modelValue)

const emit = defineEmits(["update:modelValue"])

const handleSelectChange = (event) => {
    selectedOption.value = event.target.value
    emit("update:modelValue", selectedOption.value)
}
</script>
