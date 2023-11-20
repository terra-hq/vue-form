<template>
    <InputTextField
        type="number"
        v-model="firstName"
        formClass="g--form-input-01"
        id="firstName"
        labelText="First Name"
        labelClass="g--form-label-01"
        placeholder="First Name"
    />
</template>

<script setup>
import { ref } from "vue"
import InputTextField from "./components/InputTextField.vue"

const firstName = ref("")
</script>
