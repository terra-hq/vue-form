<template>
    <label v-if="textLabel" :for="forId" :class="[labelClass, modifierClass]">{{
        textLabel
    }}</label>
</template>

<script setup>
const props = defineProps({
    textLabel: {
        type: String,
        default: "",
    },
    forId: String,
    labelClass: String,
    modifierClass: {
        type: String,
        default: "",
    },
})
</script>
