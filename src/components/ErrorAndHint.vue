<template>
    <p v-if="errorMessage" :class="errorClass">{{ errorMessage }}</p>
    <p v-else-if="hintMessage" :class="hintClass">
        {{ hintMessage }}
    </p>
</template>

<script setup>
const props = defineProps({
    errorMessage: {
        type: String,
        default: null,
    },
    errorClass: String,
    hintMessage: {
        type: String,
        default: null,
    },
    hintClass: String,
})
</script>
