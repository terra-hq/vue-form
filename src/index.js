import TFormGroup from "./components/TFormGroup.vue"
import TLabel from "./components/TLabel.vue"
import TInputField from "./components/TInputField.vue"
import TUploadFile from "./components/TUploadFile.vue"
import TCheckbox from "./components/TCheckbox.vue"
import TError from "./components/TError.vue"
import THint from "./components/THint.vue"
import TTextArea from "./components/TTextArea.vue"
import TSelect from "./components/TSelect.vue"
import TGroupCheckbox from "./components/TGroupCheckbox.vue"
import TGroupRadio from "./components/TGroupRadio.vue"

export default {
    install: (app, options) => {
        app.component("TFormGroup", TFormGroup)
        app.component("TLabel", TLabel)
        app.component("TInputField", TInputField)
        app.component("TUploadFile", TUploadFile)
        app.component("TCheckbox", TCheckbox)
        app.component("TError", TError)
        app.component("THint", THint)
        app.component("TTextArea", TTextArea)
        app.component("TSelect", TSelect)
        app.component("TGroupCheckbox", TGroupCheckbox)
        app.component("TGroupRadio", TGroupRadio)
    },
}
