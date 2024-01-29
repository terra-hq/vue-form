<template>
    <p v-if="hintMessage" :class="[hintClass, modifierClass]">
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
    modifierClass: {
        type: String,
        default: "",
    },
})
</script>
