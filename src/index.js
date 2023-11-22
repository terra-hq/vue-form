import FormGroup from "./components/FormGroup.vue"
import Label from "./components/Label.vue"
import TextField from "./components/TextField.vue"
import Checkbox from "./components/Checkbox.vue"
import ErrorAndHint from "./components/ErrorAndHint.vue"
import TextArea from "./components/TextArea.vue"
import TextField from "./components/TextField.vue"

export default {
    install: (app, options) => {
        app.component("TextField", TextField)
        app.component("FormGroup", FormGroup)
        app.component("Label", Label)
        app.component("Checkbox", Checkbox)
        app.component("TextField", TextField)
        app.component("ErrorAndHint", ErrorAndHint)
        app.component("TextArea", TextArea)
    },
}
