<template>
    <label v-if="textLabel" :for="forId" :class="labelClass">{{ textLabel }}</label>
</template>

<script setup>
import { defineProps } from "vue"

const { textLabel, forId, labelClass } = defineProps({
    textLabel: {
        type: String,
        default: "",
    },
    forId: String,
    labelClass: String,
})
</script>
