;(function (l, c) {
    typeof exports == "object" && typeof module < "u"
        ? (module.exports = c(require("vue")))
        : typeof define == "function" && define.amd
        ? define(["vue"], c)
        : ((l = typeof globalThis < "u" ? globalThis : l || self), (l["vue-form"] = c(l.Vue)))
})(this, function (l) {
    "use strict"
    const c = {
            __name: "TFormGroup",
            props: { formClass: String },
            setup(e) {
                return (r, t) => (
                    l.openBlock(),
                    l.createElementBlock(
                        "div",
                        { class: l.normalizeClass([e.formClass]) },
                        [l.renderSlot(r.$slots, "default")],
                        2
                    )
                )
            },
        },
        C = ["for"],
        u = {
            __name: "TLabel",
            props: { textLabel: { type: String, default: "" }, forId: String, labelClass: String },
            setup(e) {
                return (r, t) =>
                    e.textLabel
                        ? (l.openBlock(),
                          l.createElementBlock(
                              "label",
                              { key: 0, for: e.forId, class: l.normalizeClass(e.labelClass) },
                              l.toDisplayString(e.textLabel),
                              11,
                              C
                          ))
                        : l.createCommentVNode("", !0)
            },
        },
        h = [
            "type",
            "value",
            "id",
            "maxlength",
            "placeholder",
            "required",
            "aria-required",
            "aria-invalid",
            "disabled",
        ],
        b = {
            __name: "TInputField",
            props: {
                type: { type: String, default: "text" },
                modelValue: String,
                id: String,
                inputClass: String,
                error: { type: Boolean, default: !1 },
                maxlength: { type: Number, default: null },
                placeholder: { type: String, default: null },
                required: { type: Boolean, default: !1 },
                disabled: { type: Boolean, default: !1 },
            },
            setup(e, { emit: r }) {
                const t = e,
                    a = l.ref(t.modelValue),
                    o = r,
                    i = (d) => {
                        ;(a.value = d.target.value), o("update:modelValue", a.value)
                    }
                return (
                    l.watch(
                        () => t.modelValue,
                        (d) => {
                            a.value = d
                        }
                    ),
                    (d, s) => (
                        l.openBlock(),
                        l.createElementBlock(
                            "div",
                            {
                                class: l.normalizeClass([
                                    e.inputClass,
                                    { [`${e.inputClass}--error`]: e.error },
                                ]),
                            },
                            [
                                l.createElementVNode(
                                    "input",
                                    {
                                        type: e.type,
                                        value: a.value,
                                        id: e.id,
                                        class: l.normalizeClass([`${e.inputClass}__item`]),
                                        onInput: i,
                                        maxlength: e.maxlength,
                                        placeholder: e.placeholder,
                                        required: e.required,
                                        "aria-required": e.required,
                                        "aria-invalid": e.error,
                                        disabled: e.disabled,
                                    },
                                    null,
                                    42,
                                    h
                                ),
                            ],
                            2
                        )
                    )
                )
            },
        },
        g = ["id", "accept", "multiple", "required", "aria-required", "aria-invalid", "disabled"],
        k = {
            __name: "TUploadFile",
            props: {
                id: String,
                uploadClass: String,
                modelValue: { type: FileList, default: String },
                multiple: { type: Boolean, default: !1 },
                error: { type: Boolean, default: !1 },
                required: { type: Boolean, default: !1 },
                disabled: { type: Boolean, default: !1 },
                accept: { type: String, default: "" },
            },
            setup(e, { emit: r }) {
                const t = r,
                    a = (o) => {
                        const i = o.target.files,
                            s = o.target.multiple ? i : i[0]
                        t("update:modelValue", s)
                    }
                return (o, i) => (
                    l.openBlock(),
                    l.createElementBlock(
                        "div",
                        {
                            class: l.normalizeClass([
                                e.uploadClass,
                                { [`${e.uploadClass}--error`]: e.error },
                            ]),
                        },
                        [
                            l.createElementVNode(
                                "input",
                                {
                                    type: "file",
                                    id: e.id,
                                    class: l.normalizeClass([`${e.uploadClass}__item`]),
                                    accept: e.accept,
                                    onInput: a,
                                    multiple: e.multiple,
                                    required: e.required,
                                    "aria-required": e.required,
                                    "aria-invalid": e.error,
                                    disabled: e.disabled,
                                },
                                null,
                                42,
                                g
                            ),
                        ],
                        2
                    )
                )
            },
        },
        y = ["id", "required", "checked", "value", "aria-required", "aria-invalid", "disabled"],
        f = {
            __name: "TCheckbox",
            props: {
                id: String,
                checkboxClass: String,
                modelValue: Boolean,
                textLabel: { type: String, default: "" },
                error: { type: Boolean, default: !1 },
                required: { type: Boolean, default: !1 },
                disabled: { type: Boolean, default: !1 },
            },
            emits: ["update:modelValue"],
            setup(e) {
                return (r, t) => (
                    l.openBlock(),
                    l.createElementBlock(
                        "div",
                        {
                            class: l.normalizeClass([
                                e.checkboxClass,
                                { [`${e.checkboxClass}--error`]: e.error },
                            ]),
                        },
                        [
                            l.createElementVNode(
                                "input",
                                {
                                    id: e.id,
                                    type: "checkbox",
                                    class: l.normalizeClass([`${e.checkboxClass}__item`]),
                                    required: e.required,
                                    checked: e.modelValue,
                                    value: e.modelValue,
                                    onChange:
                                        t[0] ||
                                        (t[0] = (a) => r.$emit("update:modelValue", !e.modelValue)),
                                    "aria-required": e.required,
                                    "aria-invalid": e.error,
                                    disabled: e.disabled,
                                },
                                null,
                                42,
                                y
                            ),
                            l.createVNode(
                                u,
                                {
                                    forId: e.id,
                                    labelClass: `${e.checkboxClass}__title`,
                                    textLabel: e.textLabel,
                                },
                                null,
                                8,
                                ["forId", "labelClass", "textLabel"]
                            ),
                        ],
                        2
                    )
                )
            },
        },
        B = {
            __name: "TError",
            props: { errorMessage: { type: String, default: null }, errorClass: String },
            setup(e) {
                return (r, t) =>
                    e.errorMessage
                        ? (l.openBlock(),
                          l.createElementBlock(
                              "p",
                              { key: 0, class: l.normalizeClass(e.errorClass) },
                              l.toDisplayString(e.errorMessage),
                              3
                          ))
                        : l.createCommentVNode("", !0)
            },
        },
        x = {
            __name: "THint",
            props: { hintMessage: { type: String, default: null }, hintClass: String },
            setup(e) {
                return (r, t) =>
                    e.hintMessage
                        ? (l.openBlock(),
                          l.createElementBlock(
                              "p",
                              { key: 0, class: l.normalizeClass(e.hintClass) },
                              l.toDisplayString(e.hintMessage),
                              3
                          ))
                        : l.createCommentVNode("", !0)
            },
        },
        V = ["id", "placeholder", "rows", "required", "aria-required", "aria-invalid", "disabled"],
        q = {
            __name: "TTextarea",
            props: {
                modelValue: String,
                id: String,
                textAreaClass: String,
                rows: { type: String, default: "3" },
                placeholder: { type: String, default: null },
                required: { type: Boolean, default: !1 },
                disabled: { type: Boolean, default: !1 },
                error: { type: Boolean, default: !1 },
            },
            setup(e, { emit: r }) {
                const t = e,
                    a = l.ref(t.modelValue),
                    o = r,
                    i = (d) => {
                        ;(a.value = d.target.value), o("update:modelValue", a.value)
                    }
                return (d, s) => (
                    l.openBlock(),
                    l.createElementBlock(
                        "div",
                        {
                            class: l.normalizeClass([
                                e.textAreaClass,
                                { [`${e.textAreaClass}--error`]: e.error },
                            ]),
                        },
                        [
                            l.withDirectives(
                                l.createElementVNode(
                                    "textarea",
                                    {
                                        "onUpdate:modelValue":
                                            s[0] || (s[0] = (n) => (a.value = n)),
                                        id: e.id,
                                        class: l.normalizeClass([`${e.textAreaClass}__item`]),
                                        placeholder: e.placeholder,
                                        rows: e.rows,
                                        onInput: i,
                                        required: e.required,
                                        "aria-required": e.required,
                                        "aria-invalid": e.error,
                                        disabled: e.disabled,
                                    },
                                    null,
                                    42,
                                    V
                                ),
                                [[l.vModelText, a.value]]
                            ),
                        ],
                        2
                    )
                )
            },
        },
        S = ["id", "required", "aria-required", "aria-invalid"],
        $ = ["value", "disabled", "selected"],
        T = {
            __name: "TSelect",
            props: {
                id: String,
                selectClass: String,
                options: Array,
                modelValue: String,
                error: { type: Boolean, default: !1 },
                required: { type: Boolean, default: !1 },
            },
            emits: ["update:modelValue"],
            setup(e, { emit: r }) {
                const t = e,
                    a = l.ref(t.modelValue),
                    o = r,
                    i = (d) => {
                        ;(a.value = d.target.value), o("update:modelValue", a.value)
                    }
                return (d, s) => (
                    l.openBlock(),
                    l.createElementBlock(
                        "div",
                        {
                            class: l.normalizeClass([
                                e.selectClass,
                                { [`${e.selectClass}--error`]: e.error },
                            ]),
                        },
                        [
                            l.withDirectives(
                                l.createElementVNode(
                                    "select",
                                    {
                                        id: e.id,
                                        required: e.required,
                                        class: l.normalizeClass([`${e.selectClass}__item`]),
                                        "onUpdate:modelValue":
                                            s[0] || (s[0] = (n) => (a.value = n)),
                                        onInput: i,
                                        "aria-required": e.required,
                                        "aria-invalid": e.error,
                                    },
                                    [
                                        (l.openBlock(!0),
                                        l.createElementBlock(
                                            l.Fragment,
                                            null,
                                            l.renderList(
                                                e.options,
                                                (n) => (
                                                    l.openBlock(),
                                                    l.createElementBlock(
                                                        "option",
                                                        {
                                                            key: n.id,
                                                            value: n.id,
                                                            disabled: n.disabled,
                                                            selected: n.selected,
                                                        },
                                                        l.toDisplayString(n.label),
                                                        9,
                                                        $
                                                    )
                                                )
                                            ),
                                            128
                                        )),
                                    ],
                                    42,
                                    S
                                ),
                                [[l.vModelSelect, a.value]]
                            ),
                        ],
                        2
                    )
                )
            },
        },
        E = {
            __name: "TGroupCheckbox",
            props: {
                options: Array,
                modelValue: Array,
                checkboxClass: String,
                error: { type: Boolean, default: !1 },
                required: { type: Boolean, default: !1 },
                disabled: { type: Boolean, default: !1 },
            },
            emits: ["update:modelValue"],
            setup(e, { emit: r }) {
                const t = e,
                    a = l.reactive(
                        t.options.map((i) => {
                            var d
                            return {
                                ...i,
                                checked:
                                    l.ref((d = t.modelValue) == null ? void 0 : d.includes(i.id)) ||
                                    !1,
                            }
                        })
                    ),
                    o = r
                return (
                    l.watch(a, () => {
                        o(
                            "update:modelValue",
                            a.filter((i) => i.checked).map((i) => i.id)
                        )
                    }),
                    (i, d) => (
                        l.openBlock(!0),
                        l.createElementBlock(
                            l.Fragment,
                            null,
                            l.renderList(
                                e.options,
                                (s, n) => (
                                    l.openBlock(),
                                    l.createBlock(
                                        f,
                                        {
                                            key: n,
                                            modelValue: a[n].checked,
                                            "onUpdate:modelValue": (m) => (a[n].checked = m),
                                            id: s.id,
                                            checkboxClass: e.checkboxClass,
                                            error: e.error,
                                            required: e.required,
                                            textLabel: s.label,
                                            disabled: e.disabled,
                                        },
                                        null,
                                        8,
                                        [
                                            "modelValue",
                                            "onUpdate:modelValue",
                                            "id",
                                            "checkboxClass",
                                            "error",
                                            "required",
                                            "textLabel",
                                            "disabled",
                                        ]
                                    )
                                )
                            ),
                            128
                        )
                    )
                )
            },
        },
        L = ["id", "required", "checked", "onChange", "aria-required", "aria-invalid", "disabled"],
        z = {
            __name: "TGroupRadio",
            props: {
                options: Array,
                modelValue: String,
                radioClass: String,
                error: { type: Boolean, default: !1 },
                required: { type: Boolean, default: !1 },
                disabled: { type: Boolean, default: !1 },
            },
            setup(e, { emit: r }) {
                const t = e,
                    a = l.ref(t.modelValue),
                    o = r,
                    i = (d) => {
                        ;(a.value = d), o("update:modelValue", a.value)
                    }
                return (d, s) => (
                    l.openBlock(!0),
                    l.createElementBlock(
                        l.Fragment,
                        null,
                        l.renderList(
                            e.options,
                            (n, m) => (
                                l.openBlock(),
                                l.createElementBlock(
                                    "div",
                                    {
                                        key: m,
                                        class: l.normalizeClass([
                                            e.radioClass,
                                            { [`${e.radioClass}--error`]: e.error },
                                        ]),
                                    },
                                    [
                                        l.createElementVNode(
                                            "input",
                                            {
                                                id: n.id,
                                                type: "radio",
                                                class: l.normalizeClass([`${e.radioClass}__item`]),
                                                required: e.required,
                                                checked: n.id === a.value,
                                                onChange: (N) => i(n.id),
                                                "aria-required": e.required,
                                                "aria-invalid": e.error,
                                                disabled: e.disabled,
                                            },
                                            null,
                                            42,
                                            L
                                        ),
                                        l.createVNode(
                                            u,
                                            {
                                                forId: n.id,
                                                labelClass: `${e.radioClass}__title`,
                                                textLabel: n.label,
                                            },
                                            null,
                                            8,
                                            ["forId", "labelClass", "textLabel"]
                                        ),
                                    ],
                                    2
                                )
                            )
                        ),
                        128
                    )
                )
            },
        }
    return {
        install: (e, r) => {
            e.component("TFormGroup", c),
                e.component("TLabel", u),
                e.component("TInputField", b),
                e.component("TUploadFile", k),
                e.component("TCheckbox", f),
                e.component("TError", B),
                e.component("THint", x),
                e.component("TTextarea", q),
                e.component("TSelect", T),
                e.component("TGroupCheckbox", E),
                e.component("TGroupRadio", z)
        },
    }
})
