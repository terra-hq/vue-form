import { openBlock as s, createElementBlock as u, normalizeClass as n, renderSlot as k, toDisplayString as C, createCommentVNode as y, ref as g, watch as S, createElementVNode as m, mergeProps as f, createVNode as q, withDirectives as $, vModelText as T, Fragment as h, renderList as x, vModelSelect as A, reactive as B, createBlock as L } from "vue";
const M = {
  __name: "TFormGroup",
  props: {
    formClass: String,
    modifierClass: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (a, l) => (s(), u("div", {
      class: n([e.formClass, e.modifierClass])
    }, [
      k(a.$slots, "default")
    ], 2));
  }
}, I = ["for"], v = {
  __name: "TLabel",
  props: {
    textLabel: {
      type: String,
      default: ""
    },
    forId: String,
    labelClass: String,
    modifierClass: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (a, l) => e.textLabel ? (s(), u("label", {
      key: 0,
      for: e.forId,
      class: n([e.labelClass, e.modifierClass])
    }, C(e.textLabel), 11, I)) : y("", !0);
  }
}, O = ["type", "value", "id", "maxlength", "placeholder", "required", "aria-required", "aria-invalid", "disabled"], j = {
  __name: "TInputField",
  props: {
    type: {
      type: String,
      default: "text"
    },
    modelValue: String,
    id: String,
    inputClass: String,
    modifierClass: {
      type: String,
      default: ""
    },
    error: {
      type: Boolean,
      default: !1
    },
    maxlength: {
      type: Number,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    extraAttrs: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e, { emit: a }) {
    const l = e, t = g(l.modelValue), o = a, r = (d) => {
      t.value = d.target.value, o("update:modelValue", t.value);
    };
    return S(
      () => l.modelValue,
      (d) => {
        t.value = d;
      }
    ), (d, c) => (s(), u("div", {
      class: n([e.inputClass, e.modifierClass, { [`${e.inputClass}--error`]: e.error }])
    }, [
      m("input", f({
        type: e.type,
        value: t.value,
        id: e.id,
        class: [`${e.inputClass}__item`],
        onInput: r,
        maxlength: e.maxlength,
        placeholder: e.placeholder,
        required: e.required,
        "aria-required": e.required,
        "aria-invalid": e.error,
        disabled: e.disabled
      }, e.extraAttrs), null, 16, O)
    ], 2));
  }
}, F = ["id", "accept", "multiple", "required", "aria-required", "aria-invalid", "disabled"], w = {
  __name: "TUploadFile",
  props: {
    id: String,
    uploadClass: String,
    modifierClass: {
      type: String,
      default: ""
    },
    modelValue: {
      type: Object,
      default: null
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    error: {
      type: Boolean,
      default: !1
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    accept: {
      type: String,
      default: ""
    },
    extraAttrs: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e, { emit: a }) {
    const l = a, t = (o) => {
      const r = o.target.files, c = o.target.multiple ? r : r[0];
      l("update:modelValue", c);
    };
    return (o, r) => (s(), u("div", {
      class: n([e.uploadClass, e.modifierClass, { [`${e.uploadClass}--error`]: e.error }])
    }, [
      m("input", f({
        type: "file",
        id: e.id,
        class: [`${e.uploadClass}__item`],
        accept: e.accept,
        onInput: t,
        multiple: e.multiple,
        required: e.required,
        "aria-required": e.required,
        "aria-invalid": e.error,
        disabled: e.disabled
      }, e.extraAttrs), null, 16, F)
    ], 2));
  }
}, G = ["id", "required", "checked", "value", "aria-required", "aria-invalid", "disabled"], V = {
  __name: "TCheckbox",
  props: {
    id: String,
    checkboxClass: String,
    modifierClass: {
      type: String,
      default: ""
    },
    modelValue: Boolean,
    textLabel: {
      type: String,
      default: ""
    },
    error: {
      type: Boolean,
      default: !1
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    extraAttrs: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (a, l) => (s(), u("div", {
      class: n([e.checkboxClass, e.modifierClass, { [`${e.checkboxClass}--error`]: e.error }])
    }, [
      m("input", f({
        id: e.id,
        type: "checkbox",
        class: [`${e.checkboxClass}__item`],
        required: e.required,
        checked: e.modelValue,
        value: e.modelValue,
        onChange: l[0] || (l[0] = (t) => a.$emit("update:modelValue", !e.modelValue)),
        "aria-required": e.required,
        "aria-invalid": e.error,
        disabled: e.disabled
      }, e.extraAttrs), null, 16, G),
      q(v, {
        forId: e.id,
        labelClass: `${e.checkboxClass}__title`,
        textLabel: e.textLabel
      }, null, 8, ["forId", "labelClass", "textLabel"])
    ], 2));
  }
}, H = ["innerHTML"], U = {
  __name: "TError",
  props: {
    errorMessage: {
      type: String,
      default: null
    },
    errorClass: String,
    modifierClass: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (a, l) => e.errorMessage ? (s(), u("div", {
      key: 0,
      class: n([e.errorClass, e.modifierClass]),
      innerHTML: e.errorMessage
    }, null, 10, H)) : y("", !0);
  }
}, E = ["innerHTML"], N = {
  __name: "THint",
  props: {
    hintMessage: {
      type: String,
      default: null
    },
    hintClass: String,
    modifierClass: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (a, l) => e.hintMessage ? (s(), u("div", {
      key: 0,
      class: n([e.hintClass, e.modifierClass]),
      innerHTML: e.hintMessage
    }, null, 10, E)) : y("", !0);
  }
}, P = ["id", "placeholder", "rows", "required", "aria-required", "aria-invalid", "disabled"], D = {
  __name: "TTextArea",
  props: {
    modelValue: String,
    id: String,
    textAreaClass: String,
    modifierClass: {
      type: String,
      default: ""
    },
    rows: {
      type: String,
      default: "3"
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    error: {
      type: Boolean,
      default: !1
    },
    extraAttrs: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e, { emit: a }) {
    const t = g(e.modelValue), o = a, r = (d) => {
      t.value = d.target.value, o("update:modelValue", t.value);
    };
    return (d, c) => (s(), u("div", {
      class: n([e.textAreaClass, e.modifierClass, { [`${e.textAreaClass}--error`]: e.error }])
    }, [
      $(m("textarea", f({
        "onUpdate:modelValue": c[0] || (c[0] = (i) => t.value = i),
        id: e.id,
        class: [`${e.textAreaClass}__item`],
        placeholder: e.placeholder,
        rows: e.rows,
        onInput: r,
        required: e.required,
        "aria-required": e.required,
        "aria-invalid": e.error,
        disabled: e.disabled
      }, e.extraAttrs), null, 16, P), [
        [T, t.value]
      ])
    ], 2));
  }
}, R = ["id", "required", "aria-required", "aria-invalid"], z = ["value", "disabled", "selected"], J = {
  __name: "TSelect",
  props: {
    id: String,
    selectClass: String,
    modifierClass: {
      type: String,
      default: ""
    },
    options: Array,
    modelValue: String,
    error: {
      type: Boolean,
      default: !1
    },
    required: {
      type: Boolean,
      default: !1
    },
    extraAttrs: {
      type: Object,
      default: () => ({})
    },
    optionsAttrs: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: a }) {
    const t = g(e.modelValue), o = a, r = (d) => {
      t.value = d.target.value, o("update:modelValue", t.value);
    };
    return (d, c) => (s(), u("div", {
      class: n([e.selectClass, e.modifierClass, { [`${e.selectClass}--error`]: e.error }])
    }, [
      $(m("select", f({
        id: e.id,
        required: e.required,
        class: [`${e.selectClass}__item`],
        "onUpdate:modelValue": c[0] || (c[0] = (i) => t.value = i),
        onInput: r,
        "aria-required": e.required,
        "aria-invalid": e.error
      }, e.extraAttrs), [
        (s(!0), u(h, null, x(e.options, (i) => (s(), u("option", f({
          key: i.id,
          value: i.id,
          disabled: i.disabled,
          selected: i.selected
        }, e.optionsAttrs), C(i.label), 17, z))), 128))
      ], 16, R), [
        [A, t.value]
      ])
    ], 2));
  }
}, K = {
  __name: "TGroupCheckbox",
  props: {
    options: Array,
    // { id: string; label: string }[]
    modelValue: Array,
    // string[]
    checkboxClass: String,
    modifierClass: {
      type: String,
      default: ""
    },
    error: {
      type: Boolean,
      default: !1
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    extraAttrs: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: a }) {
    const l = e, t = B(
      l.options.map((r) => {
        var d;
        return {
          ...r,
          checked: g((d = l.modelValue) == null ? void 0 : d.includes(r.id)) || !1
        };
      })
    ), o = a;
    return S(t, () => {
      o(
        "update:modelValue",
        t.filter((r) => r.checked).map((r) => r.id)
      );
    }), (r, d) => (s(!0), u(h, null, x(e.options, (c, i) => (s(), L(V, {
      key: i,
      modelValue: t[i].checked,
      "onUpdate:modelValue": (b) => t[i].checked = b,
      id: c.id,
      checkboxClass: e.checkboxClass,
      modifierClass: e.modifierClass,
      error: e.error,
      required: e.required,
      textLabel: c.label,
      disabled: e.disabled,
      extraAttrs: e.extraAttrs
    }, null, 8, ["modelValue", "onUpdate:modelValue", "id", "checkboxClass", "modifierClass", "error", "required", "textLabel", "disabled", "extraAttrs"]))), 128));
  }
}, Q = ["id", "required", "checked", "onChange", "aria-required", "aria-invalid", "disabled"], W = {
  __name: "TGroupRadio",
  props: {
    options: Array,
    // { id: string; label: string }[]
    modelValue: String,
    radioClass: String,
    modifierClass: {
      type: String,
      default: ""
    },
    error: {
      type: Boolean,
      default: !1
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    extraAttrs: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e, { emit: a }) {
    const t = g(e.modelValue), o = a, r = (d) => {
      t.value = d, o("update:modelValue", t.value);
    };
    return (d, c) => (s(!0), u(h, null, x(e.options, (i, b) => (s(), u("div", {
      key: b,
      class: n([e.radioClass, e.modifierClass, { [`${e.radioClass}--error`]: e.error }])
    }, [
      m("input", f({
        id: i.id,
        type: "radio",
        class: [`${e.radioClass}__item`],
        required: e.required,
        checked: i.id === t.value,
        onChange: (p) => r(i.id),
        "aria-required": e.required,
        "aria-invalid": e.error,
        disabled: e.disabled
      }, e.extraAttrs), null, 16, Q),
      q(v, {
        forId: i.id,
        labelClass: `${e.radioClass}__title`,
        textLabel: i.label
      }, null, 8, ["forId", "labelClass", "textLabel"])
    ], 2))), 128));
  }
}, X = ["id", "required", "checked", "value", "aria-required", "aria-invalid", "disabled"], Y = ["for"], Z = {
  __name: "TToggle",
  props: {
    id: String,
    toggleClass: String,
    modifierClass: {
      type: String,
      default: ""
    },
    modelValue: Boolean,
    textLabelPrimary: {
      type: String,
      default: ""
    },
    textLabelSecondary: {
      type: String,
      default: ""
    },
    error: {
      type: Boolean,
      default: !1
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    extraAttrs: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (a, l) => (s(), u("div", {
      class: n([e.toggleClass, e.modifierClass, { [`${e.toggleClass}--error`]: e.error }])
    }, [
      m("input", f({
        id: e.id,
        type: "checkbox",
        class: [`${e.toggleClass}__item`],
        required: e.required,
        checked: e.modelValue,
        value: e.modelValue,
        onChange: l[0] || (l[0] = (t) => a.$emit("update:modelValue", !e.modelValue)),
        "aria-required": e.required,
        "aria-invalid": e.error,
        disabled: e.disabled
      }, e.extraAttrs), null, 16, X),
      m("label", {
        for: e.id,
        class: n([`${e.toggleClass}__content`])
      }, [
        m("span", {
          class: n([`${e.toggleClass}__item-primary`])
        }, C(e.textLabelPrimary), 3),
        m("span", {
          class: n([`${e.toggleClass}__item-secondary`])
        }, C(e.textLabelSecondary), 3)
      ], 10, Y),
      m("span", {
        class: n([`${e.toggleClass}__artwork`]),
        role: "presentation"
      }, null, 2)
    ], 2));
  }
}, ee = {
  install: (e, a) => {
    e.component("TFormGroup", M), e.component("TLabel", v), e.component("TInputField", j), e.component("TUploadFile", w), e.component("TCheckbox", V), e.component("TError", U), e.component("THint", N), e.component("TTextarea", D), e.component("TSelect", J), e.component("TGroupCheckbox", K), e.component("TGroupRadio", W), e.component("TToggle", Z);
  }
};
export {
  ee as default
};
