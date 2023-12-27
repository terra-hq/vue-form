<template>
    <label v-if="textLabel" :for="forId" :class="labelClass">{{ textLabel }}</label>
</template>

<script setup>
const props = defineProps({
    textLabel: {
        type: String,
        default: "",
    },
    forId: String,
    labelClass: String,
})
</script>
