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
import FormGroup from "@terrahq/vue-form";
import Label from "@terrahq/vue-form";
import TextField from "@terrahq/vue-form";
import Checkbox from "@terrahq/vue-form";
import GroupCheckbox from "@terrahq/vue-form";
import GroupRadio from "@terrahq/vue-form";
import Select from "@terrahq/vue-form";
import TextArea from "@terrahq/vue-form";
import Error from "@terrahq/vue-form";
import Hint from "@terrahq/vue-form";

export default (app: App) => {
    app.use(FormGroup);
    app.use(Label);
    app.use(TextField);
    app.use(Checkbox);
    app.use(GroupCheckbox);
    app.use(GroupRadio);
    app.use(Select);
    app.use(TextArea);
    app.use(Error);
    app.use(hint);
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
import FormGroup from "@terrahq/vue-form"
import Label from "@terrahq/vue-form"
import TextField from "@terrahq/vue-form"
import Checkbox from "@terrahq/vue-form"
import GroupCheckbox from "@terrahq/vue-form"
import GroupRadio from "@terrahq/vue-form"
import Select from "@terrahq/vue-form"
import TextArea from "@terrahq/vue-form"
import Error from "@terrahq/vue-form"
import Hint from "@terrahq/vue-form"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(FormGroup)
    nuxtApp.vueApp.use(Label)
    nuxtApp.vueApp.use(TextField)
    nuxtApp.vueApp.use(Checkbox)
    nuxtApp.vueApp.use(GroupCheckbox)
    nuxtApp.vueApp.use(GroupRadio)
    nuxtApp.vueApp.use(Select)
    nuxtApp.vueApp.use(TextArea)
    nuxtApp.vueApp.use(Error)
    nuxtApp.vueApp.use(Hint)
})
```

Now, you can use the components in any .vue file.

## Usage

```sh
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
      :disabled="disabled"
    />

     <Checkbox
        v-model="terms"
        id="terms"
        checkboxClass="g--form-checkbox-01"
        textLabel="Accept Terms and conditions"
        :error="error"
        :required="required"
        :disabled="disabled"
     />

     <GroupCheckbox
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
        :disabled="disabled"
    />

    <Error :errorMessage="errorMessage" errorClass="g--form-error-01" />
  </FormGroup>
</template>

<script setup>
import { ref } from "vue"

// TextField
const firstName = ref("")

// Checkbox
const terms = ref(true)

// Group of checkboxes
const checkboxOptions = ref([
    { id: "one", label: "One" },
    { id: "two", label: "Two" },
    { id: "three", label: "Three" },
    { id: "four", label: "Four" },
    { id: "five", label: "Five" },
])
const optionsChecked = ref(["three", "four"])

// Group of radio
const radioOptions = ref([
    { id: "six", label: "Six" },
    { id: "seven", label: "Seven" },
    { id: "eight", label: "Eight" },
    { id: "nine", label: "Nine" },
    { id: "ten", label: "Ten" },
])
const radioSelected = ref("")

// Select
const selectOptions = ref([
    { id: "one", label: "One", disabled: false },
    { id: "two", label: "Two", disabled: true },
    { id: "three", label: "Three", disabled: false },
    { id: "four", label: "Four", disabled: false },
    { id: "five", label: "Five", disabled: false },
])
const optionSelected = ref("one")

// TextArea
const textAreaValue = ref("")

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

-   **FormGroup**
    The FormGroup component is used to wrap other form components. It allows you to apply a common styling to the entire form group.

    -   Props:
        -   **formClass**: (Required) CSS class for styling the form group - [String].

-   **Label**
    The Label component represents the label for an input element.

    -   Props:
        -   **forId**: (Required) ID of the associated input element - (String).
        -   **labelClass**: (Required) CSS class for styling the label - (String).
        -   **textLabel**: Text content of the label (Optional - If not provided, label will not be displayed) - (String).

-   **Hint**
    The Hint component displays a clue message.

    -   Props:
        -   **hintClass**: (Required) CSS class for styling the hint - (String).
        -   **hintMessage**: Text content of the hint (Optional - If not provided, hint will not be displayed) - (String).

-   **TextField**
    The TextField component represents a text input.

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

-   **Checkbox**
    The Checkbox component represents a checkbox input.

    -   Props:
        -   **v-model**: (Required) Two-way binding for the checkbox value - (Boolean).
        -   **id**: (Required) ID of the checkbox input - (String).
        -   **checkboxClass**: (Required) CSS class for styling the checkbox - (String).
        -   **textLabel**: Text content of the label (Optional - If not provided, label will not be displayed) - (String).
        -   **required**: Boolean value indicating whether the checkbox is required (Optional - Default is false) - (Boolean).
        -   **disabled**: Boolean value indicating whether the checkbox is disabled (Optional - Default is false) - (Boolean).
        -   **error**: Boolean value indicating whether there is an error. If true, the "--error" class is automatically added (Optional - Default is false) - (Boolean).

-   **Group of checkbox**
    The GroupCheckbox component allows users to select multiple options from a list.

    -   Props:
        -   **options**: (Required) An array of objects representing the options in the checkbox group. Each object should have the properties id (value of the option) and label (display label of the option) - ({id: String, label: String}[ ]).
        -   **v-model**: (Required) Two-way binding for the selected options' values - (String[ ]).
        -   **groupClass**: (Required) CSS class for styling the checkbox group - (String).
        -   **required**: Boolean value indicating whether the textarea is required (Optional - Default is false) - (Boolean).
        -   **disabled**: Boolean value indicating whether the textarea is disabled (Optional - Default is false) - (Boolean).
        -   **error**: Boolean value indicating whether there is an error. If true, the "--error" class is automatically added to each checkbox individually (Optional - Default is false) - (Boolean).

-   **Group of radio buttons**
    The GroupRadio component allows users to select a single option from a list of radio buttons.

    -   Props:
        -   **options**: (Required) An array of objects representing the options in the radio button group. Each object should have the properties `id` (value of the option) and `label` (display label of the option) - [{id: String, label: String}[]].
        -   **v-model**: (Required) Two-way binding for the selected option's value - (String).
        -   **radioClass**: (Required) CSS class for styling the radio button group - (String).
        -   **required**: Boolean value indicating whether the radio button group is required (Optional - Default is false) - (Boolean).
        -   **disabled**: Boolean value indicating whether the radio button group is disabled (Optional - Default is false) - (Boolean).
        -   **error**: Boolean value indicating whether there is an error. If true, the "--error" class is automatically added (Optional - Default is false) - Boolean.

-   **Select**
    The Select component represents a dropdown selection.

    -   Props:
        -   **id**: (Required) ID of the select element - (String).
        -   **selectClass**: (Required) CSS class for styling the select - (String).
        -   **options**: (Required) An array of objects representing the options in the select dropdown. Each object should have the properties `id` (value of the option), `label` (display label of the option) and `disabled` (optional - indicates if the option is disabled) - [{id: String, label: String, disabled: Boolean}[]].
        -   **v-model**: (Required) Two-way binding for the selected option's value - (String).
        -   **required**: Boolean value indicating whether the select is required (Optional - Default is false) - (Boolean).
        -   **error**: Boolean value indicating whether there is an error. If true, the "--error" class is automatically added (Optional - Default is false) - (Boolean).

-   **TextArea**
    The TextArea component represents a multiline text input.

    -   Props:
        -   **id**: (Required) ID of the textarea element - (String).
        -   **textAreaClass**: (Required) CSS class for styling the textarea - (String).
        -   **v-model**: (Required) Two-way binding for the textarea value - (String).
        -   **rows**: Number of rows for the textarea (Optional - Default is 3) - (Number).
        -   **placeholder**: Placeholder text for the textarea (Optional - If not provided, placeholder will not be displayed) - (String).
        -   **required**: Boolean value indicating whether the textarea is required (Optional - Default is false) - (Boolean).
        -   **disabled**: Boolean value indicating whether the textarea is disabled (Optional - Default is false) - (Boolean).
        -   **error**: Boolean value indicating whether there is an error. If true, the "--error" class is automatically added (Optional - Default is false) - (Boolean).

-   **Error**
    The Error component displays an error message.

    -   Props:
        -   **errorMessage**: Error message to be displayed (Optional - If not provided, error message will not be displayed) - (String).
        -   **errorClass**: (Required) CSS class for styling the error message - (String).

#### Note:

-   **Messages (error, hint, label)** are conditionally displayed. If the message is an empty string "", nothing will be displayed.
