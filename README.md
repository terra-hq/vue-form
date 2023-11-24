# Vue Form

`vue-form` is a collection of Vue.js components designed to simplify form creation and management in your Vue projects. These components provide a consistent and customizable set of form elements, including form groups, labels, text fields, text areas, checkboxes, and error/hint messages.

## Installation

```sh
npm install @terrahq/vue-form
```

## Globally import

#### Astro Project with Vue

For projects using Astro with embedded Vue, create a file named \_app.ts and include the following code:

```sh
import type { App } from "vue";
import FormGroup from "@terra-hq/vue-form";
import TextField from "@terra-hq/vue-form";
import Label from "@terra-hq/vue-form";
import Checkbox from "@terra-hq/vue-form";
import ErrorAndHint from "@terra-hq/vue-form";
import TextArea from "@terra-hq/vue-form";

export default (app: App) => {
    app.use(VueLazyload);
    app.use(Label);
    app.use(FormGroup);
    app.use(TextField);
    app.use(Checkbox);
    app.use(ErrorAndHint);
    app.use(TextArea);
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
import FormGroup from "@terra-hq/vue-form"
import TextField from "@terra-hq/vue-form"
import Label from "@terra-hq/vue-form"
import Checkbox from "@terra-hq/vue-form"
import ErrorAndHint from "@terra-hq/vue-form"
import TextArea from "@terra-hq/vue-form"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(FormGroup)
    nuxtApp.vueApp.use(Label)
    nuxtApp.vueApp.use(TextField)
    nuxtApp.vueApp.use(Checkbox)
    nuxtApp.vueApp.use(ErrorAndHint)
    nuxtApp.vueApp.use(TextArea)
})
```

Now, you can use the components in any .vue file.

## Usage

```sh
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
</template>

```

## Components

-   **FormGroup**
    The FormGroup component is used to wrap other form components. It allows you to apply a common styling to the entire form group.

    -   Props:
        -   **formClass**: (Required) CSS class for styling the form group.

-   **Label**
    The Label component represents the label for an input element.

    -   Props:
        -   **forId**: (Required) ID of the associated input element.
        -   **labelClass**: (Required) CSS class for styling the label.
        -   **textLabel**: Text content of the label (Optional - If not provided, label will not be displayed).

-   **TextField**
    The TextField component represents a text input.

    -   Props:
        -   **type**: Input type (Optional - Default is "text").
        -   **v-model**: (Required) Two-way binding for the input value.
        -   **id**: (Required) ID of the input element.
        -   **inputClass**: (Required) CSS class for styling the input.
        -   **placeholder**: Placeholder text for the input (Optional - If not provided, placeholder will not be displayed).
        -   **error**: Boolean value indicating whether there is an error. If true, the "--error" class is automatically added (Optional - Default is false).

-   **Checkbox**
    The Checkbox component represents a checkbox input.

    -   Props:
        -   **v-model**: (Required) Two-way binding for the checkbox value.
        -   **id**: (Required) ID of the checkbox input.
        -   **inputClass**: (Required) CSS class for styling the checkbox.
        -   **error**: Boolean value indicating whether there is an error. If true, the "--error" class is automatically added (Optional - Default is false).

-   **ErrorAndHint**
    The ErrorAndHint component displays an error message and/or a hint message.

    -   Props:
        -   **errorMessage**: Error message to be displayed (Optional - If not provided, error message will not be displayed).
        -   **errorClass**: (Required) CSS class for styling the error message.
        -   **hintMessage**: Hint message to be displayed (Optional - If not provided, hint message will not be displayed).
        -   **hintClass**: (Required) CSS class for styling the hint message.

#### Note:

-   **Messages (error, hint, label)** are conditionally displayed. If the message is an empty string "", nothing will be displayed.
-   **Error messages** take precedence over hint messages. If an error message is present, it will be displayed even if a hint message exists.
