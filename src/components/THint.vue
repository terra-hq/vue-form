<template>
    <div v-if="hintMessage" :class="[hintClass, modifierClass]" v-html="hintMessage"></div>
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
