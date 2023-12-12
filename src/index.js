import FormGroup from "./components/FormGroup.vue"
import Label from "./components/Label.vue"
import TextField from "./components/TextField.vue"
import UploadFile from "./components/UploadFile.vue"
import Checkbox from "./components/Checkbox.vue"
import Error from "./components/Error.vue"
import Hint from "./components/Hint.vue"
import TextArea from "./components/TextArea.vue"
import Select from "./components/Select.vue"
import GroupCheckbox from "./components/GroupCheckbox.vue"
import GroupRadio from "./components/GroupRadio.vue"

import { createApp } from "vue"
import App from "./App.vue"

createApp(App).mount("#app")

export default {
    install: (app, options) => {
        app.component("FormGroup", FormGroup)
        app.component("Label", Label)
        app.component("TextField", TextField)
        app.component("UploadFile", UploadFile)
        app.component("Checkbox", Checkbox)
        app.component("Error", Error)
        app.component("Hint", Hint)
        app.component("TextArea", TextArea)
        app.component("Select", Select)
        app.component("GroupCheckbox", GroupCheckbox)
        app.component("GroupRadio", GroupRadio)
    },
}
