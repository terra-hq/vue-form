<template>
    <div :class="[formClass]">
        <slot />
    </div>
</template>

<script setup>
const props = defineProps({
    formClass: String,
})
</script>
