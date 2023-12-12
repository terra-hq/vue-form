<template>
    <FormGroup formClass="g--form-group-01">
        <Label forId="firstName" labelClass="g--form-label-01" textLabel="First Name" />

        <Hint :hintMessage="hintMessage" hintClass="g--form-hint-01" />

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

        <UploadFile
            v-model="selectedFile"
            id="fileInput"
            uploadClass="g--form-upload-01"
            :error="error"
            :required="required"
            accept="image/*"
            :multiple="true"
        />

        <Checkbox
            v-model="terms"
            id="terms"
            checkboxClass="g--form-checkbox-01"
            textLabel="Accept Terms and conditions"
            :error="error"
            :required="required"
        />

        <GroupCheckbox
            :options="checkboxOptions"
            v-model="optionsChecked"
            checkboxClass="g--form-checkbox-01"
            :error="error"
            :required="required"
        />

        <GroupRadio
            :options="radioOptions"
            v-model="radioSelected"
            radioClass="g--form-radio-01"
            :error="error"
            :required="required"
        />

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

        <Error :errorMessage="errorMessage" errorClass="g--form-error-01" />
    </FormGroup>
</template>

<script setup>
import FormGroup from "./components/FormGroup.vue"
import Label from "./components/Label.vue"
import TextField from "./components/TextField.vue"
import UploadFile from "./components/UploadFile.vue"
import Checkbox from "./components/Checkbox.vue"
import Select from "./components/Select.vue"
import TextArea from "./components/TextArea.vue"
import GroupCheckbox from "./components/GroupCheckbox.vue"
import GroupRadio from "./components/GroupRadio.vue"
import Error from "./components/Error.vue"
import Hint from "./components/Hint.vue"
import { ref } from "vue"

const firstName = ref("")

const selectedFile = ref("")

const terms = ref(true)

const checkboxOptions = ref([
    { id: "one", label: "One" },
    { id: "two", label: "Two" },
    { id: "three", label: "Three" },
    { id: "four", label: "Four" },
    { id: "five", label: "Five" },
])
const optionsChecked = ref(["three", "four"])

const radioOptions = ref([
    { id: "six", label: "Six" },
    { id: "seven", label: "Seven" },
    { id: "eight", label: "Eight" },
    { id: "nine", label: "Nine" },
    { id: "ten", label: "Ten" },
])
const radioSelected = ref("")

const selectOptions = ref([
    { id: "volvo", label: "Volvo", disabled: false },
    { id: "audi", label: "Audi", disabled: true },
    { id: "mercedes", label: "Mercedes", disabled: false },
    { id: "seat", label: "Seat", disabled: false },
    { id: "bmw", label: "BMW", disabled: false },
])
const optionSelected = ref("seat")

const textAreaValue = ref("")

const error = ref(false)
const required = ref(false)

const hintMessage = ref("")
const errorMessage = ref("Debes completar todos los campos requeridos")
</script>
