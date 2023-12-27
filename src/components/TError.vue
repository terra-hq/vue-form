<template>
    <p v-if="errorMessage" :class="errorClass">{{ errorMessage }}</p>
</template>

<script setup>
const props = defineProps({
    errorMessage: {
        type: String,
        default: null,
    },
    errorClass: String,
})
</script>
