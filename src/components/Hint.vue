<template>
    <p v-if="hintMessage" :class="hintClass">
        {{ hintMessage }}
    </p>
</template>

<script setup>
const props = defineProps({
    hintMessage: {
        type: String,
        default: null,
    },
    hintClass: String,
})
</script>
