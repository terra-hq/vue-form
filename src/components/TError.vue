<template>
    <div v-if="errorMessage" :class="[errorClass, modifierClass]" v-html="errorMessage"></div>
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
