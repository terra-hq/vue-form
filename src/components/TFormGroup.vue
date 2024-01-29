<template>
    <div :class="[formClass, modifierClass]">
        <slot />
    </div>
</template>

<script setup>
const props = defineProps({
    formClass: String,
    modifierClass: {
        type: String,
        default: "",
    },
})
</script>
