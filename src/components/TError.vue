<template>
    <p v-if="errorMessage" :class="[errorClass, modifierClass]">{{ errorMessage }}</p>
</template>

<script setup>
const props = defineProps({
    errorMessage: {
        type: String,
        default: null,
    },
    errorClass: String,
    modifierClass: {
        type: String,
        default: "",
    },
})
</script>
