<template>
    <FormGroup formClass="g--form-group-01">
        <Label forId="firstName" labelClass="g--form-label-01" textLabel="First Name" />

        <TextField
            type="text"
            v-model="firstName"
            id="firstName"
            inputClass="g--form-input-01"
            placeholder="First Name"
            :error="inputError"
        />

        <Checkbox v-model="terms" id="terms" inputClass="g--form-checkbox-01" />

        <ErrorAndHint
            :errorMessage="errorMessage"
            errorClass="g--form-error-01"
            :hintMessage="hintMessage"
            hintClass="g--form-hint-01"
        />
    </FormGroup>

    <FormGroup formClass="g--form-group-01">
        <Label forId="firstName" labelClass="g--form-label-01" />

        <TextArea
            v-model="message"
            formClass="g--form-textarea-01"
            id="message"
            placeholder="Write your messsage here"
        />

        <ErrorAndHint
            :errorMessage="errorMessage"
            errorClass="g--form-error-01"
            :hintMessage="hintMessage"
            hintClass="g--form-hint-01"
        />
    </FormGroup>
</template>

<script setup>
import { ref } from "vue"
import FormGroup from "./components/FormGroup.vue"
import Label from "./components/Label.vue"
import TextField from "./components/TextField.vue"
import Checkbox from "./components/Checkbox.vue"
import ErrorAndHint from "./components/ErrorAndHint.vue"
import TextArea from "./components/TextArea.vue"

const firstName = ref("")
const message = ref("")
const inputError = ref(false)
const hintMessage = ref("")
const errorMessage = ref("")
const terms = ref(true)
</script>
