# Vue Form

`vue-form` is a collection of Vue.js components designed to simplify form creation and management in your Vue projects. These components provide a consistent and customizable set of form elements, including form groups, labels, text fields, text areas, checkboxes, and error/hint messages.

## Installation

```sh
npm install @terrahq/vue-form
```

## Globally import

#### Astro Project with Vue

For projects using Astro with embedded Vue, create a file named `\_app.ts` and include the following code:

```sh
import type { App } from "vue";
import TFormGroup from "@terrahq/vue-form";
import TLabel from "@terrahq/vue-form";
import TInputField from "@terrahq/vue-form";
import TCheckbox from "@terrahq/vue-form";
import TGroupCheckbox from "@terrahq/vue-form";
import TGroupRadio from "@terrahq/vue-form";
import TSelect from "@terrahq/vue-form";
import TTextArea from "@terrahq/vue-form";
import TError from "@terrahq/vue-form";
import THint from "@terrahq/vue-form";

export default (app: App) => {
    app.use(TFormGroup);
    app.use(TLabel);
    app.use(TInputField);
    app.use(TCheckbox);
    app.use(TGroupCheckbox);
    app.use(TGroupRadio);
    app.use(TSelect);
    app.use(TTextArea);
    app.use(TError);
    app.use(THint);
};
```

Then, integrate the file in your astro.config.mjs specifying the path to your file:

```sh
export default defineConfig({
    integrations: [
        vue({ appEntrypoint: "/src/pages/_app" }),
    ],
});

```

Now, you can use the components in any .vue file.

#### Nuxt Project

For Nuxt projects, create a 'Plugins' folder at the root, and within it, create a file (e.g., "form.js"). Inside the file, add the following code:

```sh
import TFormGroup from "@terrahq/vue-form"
import TLabel from "@terrahq/vue-form"
import TInputField from "@terrahq/vue-form"
import TUploadFile from "@terrahq/vue-form"
import TCheckbox from "@terrahq/vue-form"
import TGroupCheckbox from "@terrahq/vue-form"
import TGroupRadio from "@terrahq/vue-form"
import TSelect from "@terrahq/vue-form"
import TTextArea from "@terrahq/vue-form"
import TError from "@terrahq/vue-form"
import THint from "@terrahq/vue-form"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(
        TFormGroup,
        TLabel,
        TInputField,
        TUploadFile,
        TCheckbox,
        TGroupCheckbox,
        TGroupRadio,
        TSelect,
        TTextArea,
        TError,
        THint
    )
})
```

Now, you can use the components in any .vue file.

## Usage

```sh
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

    <GroupRadio
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

    <TTextArea
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
        :id="id"
        uploadClass="g--form-upload-01"
        :modelValue="uploadFile"
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

// TInputField
const firstName = ref("")

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

// TTextArea
const textAreaValue = ref("")

// TUploadFile
const multipleFiles = ref(false)

// Error for inputs
const error = ref(true)

// Required for inputs
const required = ref(false)

// Disabled for inputs
const disabled = ref(false)

// Error and Hint
const hintMessage = ref("")
const errorMessage = ref("Debes completar todos los campos requeridos")
</script>

```

## Components

-   **TFormGroup**
    The TFormGroup component is used to wrap other form components. It allows you to apply a common styling to the entire form group.

    -   Props:
        -   **formClass**: (Required) CSS class for styling the form group - [String].

-   **TLabel**
    The TLabel component represents the label for an input element.

    -   Props:
        -   **forId**: (Required) ID of the associated input element - (String).
        -   **labelClass**: (Required) CSS class for styling the label - (String).
        -   **textLabel**: Text content of the label (Optional - If not provided, label will not be displayed) - (String).

-   **THint**
    The THint component displays a clue message.

    -   Props:
        -   **hintClass**: (Required) CSS class for styling the hint - (String).
        -   **hintMessage**: Text content of the hint (Optional - If not provided, hint will not be displayed) - (String).

-   **TInputField**
    The TInputField component represents a text input.

    -   Props:
        -   **type**: Input type (Optional - Default is "text") - (String).
        -   **v-model**: (Required) Two-way binding for the input value - (String).
        -   **id**: (Required) ID of the input element - (String).
        -   **inputClass**: (Required) CSS class for styling the input - (String).
        -   **maxlength**: Maximum number of characters allowed in the input (Optional) - (Number).
        -   **placeholder**: Placeholder text for the input (Optional - If not provided, placeholder will not be displayed) - (String).
        -   **required**: Boolean value indicating whether the input is required (Optional - Default is false) - (Boolean).
        -   **disabled**: Boolean value indicating whether the input is disabled (Optional - Default is false) - (Boolean).
        -   **error**: Boolean value indicating whether there is an error. If true, the "--error" class is automatically added (Optional - Default is false) - (Boolean).

-   **TCheckbox**
    The TCheckbox component represents a checkbox input.

    -   Props:
        -   **v-model**: (Required) Two-way binding for the checkbox value - (Boolean).
        -   **id**: (Required) ID of the checkbox input - (String).
        -   **checkboxClass**: (Required) CSS class for styling the checkbox - (String).
        -   **textLabel**: Text content of the label (Optional - If not provided, label will not be displayed) - (String).
        -   **required**: Boolean value indicating whether the checkbox is required (Optional - Default is false) - (Boolean).
        -   **disabled**: Boolean value indicating whether the checkbox is disabled (Optional - Default is false) - (Boolean).
        -   **error**: Boolean value indicating whether there is an error. If true, the "--error" class is automatically added (Optional - Default is false) - (Boolean).

-   **Group of checkbox**
    The TGroupCheckbox component allows users to select multiple options from a list.

    -   Props:
        -   **options**: (Required) An array of objects representing the options in the checkbox group. Each object should have the properties id (value of the option) and label (display label of the option) - ({id: String, label: String}[ ]).
        -   **v-model**: (Required) Two-way binding for the selected options' values - (String[ ]).
        -   **groupClass**: (Required) CSS class for styling the checkbox group - (String).
        -   **required**: Boolean value indicating whether the textarea is required (Optional - Default is false) - (Boolean).
        -   **disabled**: Boolean value indicating whether the textarea is disabled (Optional - Default is false) - (Boolean).
        -   **error**: Boolean value indicating whether there is an error. If true, the "--error" class is automatically added to each checkbox individually (Optional - Default is false) - (Boolean).

-   **Group of radio buttons**
    The TGroupRadio component allows users to select a single option from a list of radio buttons.

    -   Props:
        -   **options**: (Required) An array of objects representing the options in the radio button group. Each object should have the properties `id` (value of the option) and `label` (display label of the option) - [{id: String, label: String}[]].
        -   **v-model**: (Required) Two-way binding for the selected option's value - (String).
        -   **radioClass**: (Required) CSS class for styling the radio button group - (String).
        -   **required**: Boolean value indicating whether the radio button group is required (Optional - Default is false) - (Boolean).
        -   **disabled**: Boolean value indicating whether the radio button group is disabled (Optional - Default is false) - (Boolean).
        -   **error**: Boolean value indicating whether there is an error. If true, the "--error" class is automatically added (Optional - Default is false) - Boolean.

-   **TSelect**
    The TSelect component represents a dropdown selection.

    -   Props:
        -   **id**: (Required) ID of the select element - (String).
        -   **selectClass**: (Required) CSS class for styling the select - (String).
        -   **options**: (Required) An array of objects representing the options in the select dropdown. Each object should have the properties `id` (value of the option), `label` (display label of the option) and `disabled` (optional - indicates if the option is disabled) - [{id: String, label: String, disabled: Boolean}[]].
        -   **v-model**: (Required) Two-way binding for the selected option's value - (String).
        -   **required**: Boolean value indicating whether the select is required (Optional - Default is false) - (Boolean).
        -   **error**: Boolean value indicating whether there is an error. If true, the "--error" class is automatically added (Optional - Default is false) - (Boolean).

-   **TTextArea**
    The TTextArea component represents a multiline text input.

    -   Props:
        -   **id**: (Required) ID of the textarea element - (String).
        -   **textAreaClass**: (Required) CSS class for styling the textarea - (String).
        -   **v-model**: (Required) Two-way binding for the textarea value - (String).
        -   **rows**: Number of rows for the textarea (Optional - Default is 3) - (Number).
        -   **placeholder**: Placeholder text for the textarea (Optional - If not provided, placeholder will not be displayed) - (String).
        -   **required**: Boolean value indicating whether the textarea is required (Optional - Default is false) - (Boolean).
        -   **disabled**: Boolean value indicating whether the textarea is disabled (Optional - Default is false) - (Boolean).
        -   **error**: Boolean value indicating whether there is an error. If true, the "--error" class is automatically added (Optional - Default is false) - (Boolean).

-   **TUploadFile**
    The TUploadFile component allows users to upload files.

    -   Props:
        -   **id**: (Required) ID of the file input element - (String).
        -   **textAreaClass**: (Required) CSS class for styling the file upload - (String).
        -   **v-model**: (Required) Two-way binding for the uploaded file's value - ([File, String]).
        -   **multiple**: Boolean value indicating whether multiple file selection is allowed (Optional - Default is false) - (Boolean).
        -   **accept**: File types that can be selected. Specified using MIME types, separated by commas (Optional - Default is an empty string) - (String).
        -   **required**: Boolean value indicating whether the file upload is required (Optional - Default is false) - (Boolean).
        -   **disabled**: Boolean value indicating whether the file upload is disabled (Optional - Default is false) - (Boolean).
        -   **error**: Boolean value indicating whether there is an error. If true, the "--error" class is automatically added (Optional - Default is false) - (Boolean).

-   **TError**
    The TError component displays an error message.

    -   Props:
        -   **errorMessage**: Error message to be displayed (Optional - If not provided, error message will not be displayed) - (String).
        -   **errorClass**: (Required) CSS class for styling the error message - (String).

#### Note:

-   **Messages (error, hint, label)** are conditionally displayed. If the message is an empty string "", nothing will be displayed.
