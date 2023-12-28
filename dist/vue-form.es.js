import { openBlock as u, createElementBlock as s, normalizeClass as n, renderSlot as $, toDisplayString as h, createCommentVNode as g, ref as f, watch as x, createElementVNode as m, createVNode as q, withDirectives as V, vModelText as k, Fragment as C, renderList as y, vModelSelect as B, reactive as T, createBlock as L } from "vue";
const I = {
  __name: "TFormGroup",
  props: {
    formClass: String
  },
  setup(e) {
    return (a, i) => (u(), s("div", {
      class: n([e.formClass])
    }, [
      $(a.$slots, "default")
    ], 2));
  }
}, A = ["for"], v = {
  __name: "TLabel",
  props: {
    textLabel: {
      type: String,
      default: ""
    },
    forId: String,
    labelClass: String
  },
  setup(e) {
    return (a, i) => e.textLabel ? (u(), s("label", {
      key: 0,
      for: e.forId,
      class: n(e.labelClass)
    }, h(e.textLabel), 11, A)) : g("", !0);
  }
}, M = ["type", "value", "id", "maxlength", "placeholder", "required", "aria-required", "aria-invalid", "disabled"], F = {
  __name: "TInputField",
  props: {
    type: {
      type: String,
      default: "text"
    },
    modelValue: String,
    id: String,
    inputClass: String,
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
    }
  },
  setup(e, { emit: a }) {
    const i = e, l = f(i.modelValue), o = a, t = (d) => {
      l.value = d.target.value, o("update:modelValue", l.value);
    };
    return x(
      () => i.modelValue,
      (d) => {
        l.value = d;
      }
    ), (d, c) => (u(), s("div", {
      class: n([e.inputClass, { [`${e.inputClass}--error`]: e.error }])
    }, [
      m("input", {
        type: e.type,
        value: l.value,
        id: e.id,
        class: n([`${e.inputClass}__item`]),
        onInput: t,
        maxlength: e.maxlength,
        placeholder: e.placeholder,
        required: e.required,
        "aria-required": e.required,
        "aria-invalid": e.error,
        disabled: e.disabled
      }, null, 42, M)
    ], 2));
  }
}, w = ["id", "accept", "multiple", "required", "aria-required", "aria-invalid", "disabled"], G = {
  __name: "TUploadFile",
  props: {
    id: String,
    uploadClass: String,
    modelValue: {
      type: [String],
      default: String
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
    }
  },
  setup(e, { emit: a }) {
    const i = a, l = (o) => {
      const t = o.target.files, c = o.target.multiple ? t : t[0];
      i("update:modelValue", c);
    };
    return (o, t) => (u(), s("div", {
      class: n([e.uploadClass, { [`${e.uploadClass}--error`]: e.error }])
    }, [
      m("input", {
        type: "file",
        id: e.id,
        class: n([`${e.uploadClass}__item`]),
        accept: e.accept,
        onChange: l,
        multiple: e.multiple,
        required: e.required,
        "aria-required": e.required,
        "aria-invalid": e.error,
        disabled: e.disabled
      }, null, 42, w)
    ], 2));
  }
}, U = ["id", "required", "checked", "value", "aria-required", "aria-invalid", "disabled"], S = {
  __name: "TCheckbox",
  props: {
    id: String,
    checkboxClass: String,
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
    }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (a, i) => (u(), s("div", {
      class: n([e.checkboxClass, { [`${e.checkboxClass}--error`]: e.error }])
    }, [
      m("input", {
        id: e.id,
        type: "checkbox",
        class: n([`${e.checkboxClass}__item`]),
        required: e.required,
        checked: e.modelValue,
        value: e.modelValue,
        onChange: i[0] || (i[0] = (l) => a.$emit("update:modelValue", !e.modelValue)),
        "aria-required": e.required,
        "aria-invalid": e.error,
        disabled: e.disabled
      }, null, 42, U),
      q(v, {
        forId: e.id,
        labelClass: `${e.checkboxClass}__title`,
        textLabel: e.textLabel
      }, null, 8, ["forId", "labelClass", "textLabel"])
    ], 2));
  }
}, E = {
  __name: "TError",
  props: {
    errorMessage: {
      type: String,
      default: null
    },
    errorClass: String
  },
  setup(e) {
    return (a, i) => e.errorMessage ? (u(), s("p", {
      key: 0,
      class: n(e.errorClass)
    }, h(e.errorMessage), 3)) : g("", !0);
  }
}, N = {
  __name: "THint",
  props: {
    hintMessage: {
      type: String,
      default: null
    },
    hintClass: String
  },
  setup(e) {
    return (a, i) => e.hintMessage ? (u(), s("p", {
      key: 0,
      class: n(e.hintClass)
    }, h(e.hintMessage), 3)) : g("", !0);
  }
}, D = ["id", "placeholder", "rows", "required", "aria-required", "aria-invalid", "disabled"], H = {
  __name: "TTextArea",
  props: {
    modelValue: String,
    id: String,
    textAreaClass: String,
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
    }
  },
  setup(e, { emit: a }) {
    const l = f(e.modelValue), o = a, t = (d) => {
      l.value = d.target.value, o("update:modelValue", l.value);
    };
    return (d, c) => (u(), s("div", {
      class: n([e.textAreaClass, { [`${e.textAreaClass}--error`]: e.error }])
    }, [
      V(m("textarea", {
        "onUpdate:modelValue": c[0] || (c[0] = (r) => l.value = r),
        id: e.id,
        class: n([`${e.textAreaClass}__item`]),
        placeholder: e.placeholder,
        rows: e.rows,
        onInput: t,
        required: e.required,
        "aria-required": e.required,
        "aria-invalid": e.error,
        disabled: e.disabled
      }, null, 42, D), [
        [k, l.value]
      ])
    ], 2));
  }
}, O = ["id", "required", "aria-required", "aria-invalid"], R = ["value", "disabled", "selected"], z = {
  __name: "TSelect",
  props: {
    id: String,
    selectClass: String,
    options: Array,
    modelValue: String,
    error: {
      type: Boolean,
      default: !1
    },
    required: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: a }) {
    const l = f(e.modelValue), o = a, t = (d) => {
      l.value = d.target.value, o("update:modelValue", l.value);
    };
    return (d, c) => (u(), s("div", {
      class: n([e.selectClass, { [`${e.selectClass}--error`]: e.error }])
    }, [
      V(m("select", {
        id: e.id,
        required: e.required,
        class: n([`${e.selectClass}__item`]),
        "onUpdate:modelValue": c[0] || (c[0] = (r) => l.value = r),
        onInput: t,
        "aria-required": e.required,
        "aria-invalid": e.error
      }, [
        (u(!0), s(C, null, y(e.options, (r) => (u(), s("option", {
          key: r.id,
          value: r.id,
          disabled: r.disabled,
          selected: r.selected
        }, h(r.label), 9, R))), 128))
      ], 42, O), [
        [B, l.value]
      ])
    ], 2));
  }
}, j = {
  __name: "TGroupCheckbox",
  props: {
    options: Array,
    // { id: string; label: string }[]
    modelValue: Array,
    // string[]
    checkboxClass: String,
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
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: a }) {
    const i = e, l = T(
      i.options.map((t) => {
        var d;
        return {
          ...t,
          checked: f((d = i.modelValue) == null ? void 0 : d.includes(t.id)) || !1
        };
      })
    ), o = a;
    return x(l, () => {
      o(
        "update:modelValue",
        l.filter((t) => t.checked).map((t) => t.id)
      );
    }), (t, d) => (u(!0), s(C, null, y(e.options, (c, r) => (u(), L(S, {
      key: r,
      modelValue: l[r].checked,
      "onUpdate:modelValue": (b) => l[r].checked = b,
      id: c.id,
      checkboxClass: e.checkboxClass,
      error: e.error,
      required: e.required,
      textLabel: c.label,
      disabled: e.disabled
    }, null, 8, ["modelValue", "onUpdate:modelValue", "id", "checkboxClass", "error", "required", "textLabel", "disabled"]))), 128));
  }
}, J = ["id", "required", "checked", "onChange", "aria-required", "aria-invalid", "disabled"], K = {
  __name: "TGroupRadio",
  props: {
    options: Array,
    // { id: string; label: string }[]
    modelValue: String,
    radioClass: String,
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
    }
  },
  setup(e, { emit: a }) {
    const l = f(e.modelValue), o = a, t = (d) => {
      l.value = d, o("update:modelValue", l.value);
    };
    return (d, c) => (u(!0), s(C, null, y(e.options, (r, b) => (u(), s("div", {
      key: b,
      class: n([e.radioClass, { [`${e.radioClass}--error`]: e.error }])
    }, [
      m("input", {
        id: r.id,
        type: "radio",
        class: n([`${e.radioClass}__item`]),
        required: e.required,
        checked: r.id === l.value,
        onChange: (P) => t(r.id),
        "aria-required": e.required,
        "aria-invalid": e.error,
        disabled: e.disabled
      }, null, 42, J),
      q(v, {
        forId: r.id,
        labelClass: `${e.radioClass}__title`,
        textLabel: r.label
      }, null, 8, ["forId", "labelClass", "textLabel"])
    ], 2))), 128));
  }
}, W = {
  install: (e, a) => {
    e.component("TFormGroup", I), e.component("TLabel", v), e.component("TInputField", F), e.component("TUploadFile", G), e.component("TCheckbox", S), e.component("TError", E), e.component("THint", N), e.component("TTextArea", H), e.component("TSelect", z), e.component("TGroupCheckbox", j), e.component("TGroupRadio", K);
  }
};
export {
  W as default
};
