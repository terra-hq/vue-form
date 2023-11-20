<template>
    <TextField
        type="text"
        v-model="firstName"
        formClass="g--form-input-01"
        id="firstName"
        labelText="First Name"
        labelClass="g--form-label-01"
        placeholder="First Name"
    />

    <TextArea
        v-model="message"
        formClass="g--form-textarea-01"
        id="message"
        labelText="Write something"
        labelClass="g--form-label-01"
        placeholder="Write your messsage here"
        rows="3"
    />
</template>

<script setup>
import { ref } from "vue"
import TextField from "./components/TextField.vue"
import TextArea from "./components/TextArea.vue"

const firstName = ref("")
const message = ref("")
</script>
