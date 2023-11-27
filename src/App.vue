<template>
    <FormGroup formClass="g--form-group-01">
        <Label forId="firstName" labelClass="g--form-label-01" textLabel="First Name" />

        <TextField
            type="text"
            v-model="firstName"
            id="firstName"
            inputClass="g--form-input-01"
            placeholder="First Name"
            :error="error"
            :required="required"
            :maxlength="8"
        />

        <Checkbox
            v-model="terms"
            id="terms"
            checkboxClass="g--form-checkbox-01"
            :error="error"
            required
        />
        {{ terms }}

        <Select
            id="cars"
            selectClass="g--form-select-01"
            :options="selectOptions"
            v-model="optionSelected"
            :required="required"
            :error="error"
        />

        <TextArea
            v-model="textAreaValue"
            id="comments"
            textAreaClass="g--form-textarea-01"
            rows="5"
            placeholder="Comments"
            :required="required"
            :error="error"
        />

        <GroupCheckbox
            :options="checkboxOptions"
            v-model="groupTest"
            groupClass="g--form-group-checkbox-01"
            :error="error"
            :required="required"
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
import FormGroup from "./components/FormGroup.vue"
import Label from "./components/Label.vue"
import TextField from "./components/TextField.vue"
import Checkbox from "./components/Checkbox.vue"
import Select from "./components/Select.vue"
import TextArea from "./components/TextArea.vue"
import GroupCheckbox from "./components/GroupCheckbox.vue"
import ErrorAndHint from "./components/ErrorAndHint.vue"
import { ref } from "vue"

const firstName = ref("")
const hintMessage = ref("")
const errorMessage = ref("")
const terms = ref(true)
const error = ref(true)
const required = ref(false)
const textAreaValue = ref("")

const selectOptions = ref([
    { id: "volvo", label: "Volvo", disabled: false },
    { id: "audi", label: "Audi", disabled: true },
    { id: "mercedes", label: "Mercedes", disabled: false },
    { id: "seat", label: "Seat", disabled: false },
    { id: "bmw", label: "BMW", disabled: false },
])

const checkboxOptions = ref([
    { id: "volvo", label: "Volvo" },
    { id: "audi", label: "Audi" },
    { id: "mercedes", label: "Mercedes" },
    { id: "seat", label: "Seat" },
    { id: "bmw", label: "BMW" },
])
const groupTest = ref(["volvo", "mercedes"])

const optionSelected = ref("seat")
</script>
