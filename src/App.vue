<template>
    <TFormGroup formClass="g--form-group-01">
        <TLabel forId="firstName" labelClass="g--form-label-01" textLabel="First Name" />

        <THint :hintMessage="hintMessage" hintClass="g--form-hint-01" />

        <TInputField
            type="text"
            v-model="firstName"
            id="firstName"
            inputClass="g--form-input-01"
            placeholder="First Name"
            :error="error"
            :required="required"
            :maxlength="8"
            :disabled="disabled"
        />

        <TToggle
            v-model="toggleSwitch"
            id="toggle"
            toggleClass="g--toggle-01"
            textLabelPrimary="Show Completed Tasks"
            textLabelSecondary="Hide Completed Tasks"
            :error="error"
            :required="required"
            :disabled="disabled"
        />

        <TCheckbox
            v-model="terms"
            id="terms"
            checkboxClass="g--form-checkbox-01"
            textLabel="Accept Terms and conditions"
            :error="error"
            :required="required"
            :disabled="disabled"
        />

        <TGroupCheckbox
            :options="checkboxOptions"
            v-model="optionsChecked"
            checkboxClass="g--form-checkbox-01"
            :error="error"
            :required="required"
            :disabled="disabled"
        />

        <TGroupRadio
            :options="radioOptions"
            v-model="radioSelected"
            radioClass="g--form-radio-01"
            :error="error"
            :required="required"
            :disabled="disabled"
        />

        <TSelect
            id="cars"
            selectClass="g--form-select-01"
            :options="selectOptions"
            v-model="optionSelected"
            :required="required"
            :error="error"
        />

        <TTextarea
            v-model="textAreaValue"
            id="comments"
            textAreaClass="g--form-textarea-01"
            rows="5"
            placeholder="Comments"
            :required="required"
            :error="error"
            :disabled="disabled"
        />

        <TUploadFile
            id="uploadFile"
            uploadClass="g--form-upload-01"
            :modelValue="selectedFile"
            :multiple="multipleFiles"
            :error="error"
            :required="required"
            :disabled="disabled"
            accept="image/png, image/jpeg"
        />

        <TError :errorMessage="errorMessage" errorClass="g--form-error-01" />
    </TFormGroup>
</template>
<script setup>
import { ref } from "vue"
import TFormGroup from "./components/TFormGroup.vue"
import TLabel from "./components/TLabel.vue"
import TInputField from "./components/TInputField.vue"
import TUploadFile from "./components/TUploadFile.vue"
import TCheckbox from "./components/TCheckbox.vue"
import TError from "./components/TError.vue"
import THint from "./components/THint.vue"
import TTextarea from "./components/TTextarea.vue"
import TSelect from "./components/TSelect.vue"
import TGroupCheckbox from "./components/TGroupCheckbox.vue"
import TGroupRadio from "./components/TGroupRadio.vue"
import TToggle from "./components/TToggle.vue"

// TInputField
const firstName = ref("")

// TToggle
const toggleSwitch = ref(true)

// TCheckbox
const terms = ref(true)

// TGroup of checkboxes
const checkboxOptions = ref([
    { id: "one", label: "One" },
    { id: "two", label: "Two" },
    { id: "three", label: "Three" },
    { id: "four", label: "Four" },
    { id: "five", label: "Five" },
])
const optionsChecked = ref(["three", "four"])

// TGroup of radio
const radioOptions = ref([
    { id: "six", label: "Six" },
    { id: "seven", label: "Seven" },
    { id: "eight", label: "Eight" },
    { id: "nine", label: "Nine" },
    { id: "ten", label: "Ten" },
])
const radioSelected = ref("")

// TSelect
const selectOptions = ref([
    { id: "one", label: "One", disabled: false },
    { id: "two", label: "Two", disabled: true },
    { id: "three", label: "Three", disabled: false },
    { id: "four", label: "Four", disabled: false },
    { id: "five", label: "Five", disabled: false },
])
const optionSelected = ref("one")

// TTextarea
const textAreaValue = ref("")

// TUploadFile
const multipleFiles = ref(false)
const selectedFile = ref(null)

// Error for inputs
const error = ref(false)

// Required for inputs
const required = ref(true)

// Disabled for inputs
const disabled = ref(false)

// Error and Hint
const hintMessage = ref("")
const errorMessage = ref("Debes completar todos los campos requeridos")
</script>
