import { openBlock as u, createElementBlock as s, normalizeClass as a, renderSlot as S, toDisplayString as f, createCommentVNode as h, ref as g, watch as q, createElementVNode as m, createVNode as x, withDirectives as V, vModelText as k, Fragment as C, renderList as y, vModelSelect as B, reactive as T, createBlock as L } from "vue";
const I = {
  __name: "TFormGroup",
  props: {
    formClass: String
  },
  setup(e) {
    return (t, r) => (u(), s("div", {
      class: a([e.formClass])
    }, [
      S(t.$slots, "default")
    ], 2));
  }
}, M = ["for"], v = {
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
    return (t, r) => e.textLabel ? (u(), s("label", {
      key: 0,
      for: e.forId,
      class: a(e.labelClass)
    }, f(e.textLabel), 11, M)) : h("", !0);
  }
}, A = ["type", "value", "id", "maxlength", "placeholder", "required", "aria-required", "aria-invalid", "disabled"], F = {
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
  setup(e, { emit: t }) {
    const r = e, l = g(r.modelValue), o = t, d = (n) => {
      l.value = n.target.value, o("update:modelValue", l.value);
    };
    return q(
      () => r.modelValue,
      (n) => {
        l.value = n;
      }
    ), (n, c) => (u(), s("div", {
      class: a([e.inputClass, { [`${e.inputClass}--error`]: e.error }])
    }, [
      m("input", {
        type: e.type,
        value: l.value,
        id: e.id,
        class: a([`${e.inputClass}__item`]),
        onInput: d,
        maxlength: e.maxlength,
        placeholder: e.placeholder,
        required: e.required,
        "aria-required": e.required,
        "aria-invalid": e.error,
        disabled: e.disabled
      }, null, 42, A)
    ], 2));
  }
}, w = ["id", "accept", "multiple", "required", "aria-required", "aria-invalid", "disabled"], G = {
  __name: "TUploadFile",
  props: {
    id: String,
    uploadClass: String,
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
    }
  },
  setup(e, { emit: t }) {
    const r = t, l = (o) => {
      const d = o.target.files, c = o.target.multiple ? d : d[0];
      r("update:modelValue", c);
    };
    return (o, d) => (u(), s("div", {
      class: a([e.uploadClass, { [`${e.uploadClass}--error`]: e.error }])
    }, [
      m("input", {
        type: "file",
        id: e.id,
        class: a([`${e.uploadClass}__item`]),
        accept: e.accept,
        onInput: l,
        multiple: e.multiple,
        required: e.required,
        "aria-required": e.required,
        "aria-invalid": e.error,
        disabled: e.disabled
      }, null, 42, w)
    ], 2));
  }
}, U = ["id", "required", "checked", "value", "aria-required", "aria-invalid", "disabled"], $ = {
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
    return (t, r) => (u(), s("div", {
      class: a([e.checkboxClass, { [`${e.checkboxClass}--error`]: e.error }])
    }, [
      m("input", {
        id: e.id,
        type: "checkbox",
        class: a([`${e.checkboxClass}__item`]),
        required: e.required,
        checked: e.modelValue,
        value: e.modelValue,
        onChange: r[0] || (r[0] = (l) => t.$emit("update:modelValue", !e.modelValue)),
        "aria-required": e.required,
        "aria-invalid": e.error,
        disabled: e.disabled
      }, null, 42, U),
      x(v, {
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
    return (t, r) => e.errorMessage ? (u(), s("p", {
      key: 0,
      class: a(e.errorClass)
    }, f(e.errorMessage), 3)) : h("", !0);
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
    return (t, r) => e.hintMessage ? (u(), s("p", {
      key: 0,
      class: a(e.hintClass)
    }, f(e.hintMessage), 3)) : h("", !0);
  }
}, O = ["id", "placeholder", "rows", "required", "aria-required", "aria-invalid", "disabled"], D = {
  __name: "TTextarea",
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
  setup(e, { emit: t }) {
    const l = g(e.modelValue), o = t, d = (n) => {
      l.value = n.target.value, o("update:modelValue", l.value);
    };
    return (n, c) => (u(), s("div", {
      class: a([e.textAreaClass, { [`${e.textAreaClass}--error`]: e.error }])
    }, [
      V(m("textarea", {
        "onUpdate:modelValue": c[0] || (c[0] = (i) => l.value = i),
        id: e.id,
        class: a([`${e.textAreaClass}__item`]),
        placeholder: e.placeholder,
        rows: e.rows,
        onInput: d,
        required: e.required,
        "aria-required": e.required,
        "aria-invalid": e.error,
        disabled: e.disabled
      }, null, 42, O), [
        [k, l.value]
      ])
    ], 2));
  }
}, H = ["id", "required", "aria-required", "aria-invalid"], P = ["value", "disabled", "selected"], R = {
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
  setup(e, { emit: t }) {
    const l = g(e.modelValue), o = t, d = (n) => {
      l.value = n.target.value, o("update:modelValue", l.value);
    };
    return (n, c) => (u(), s("div", {
      class: a([e.selectClass, { [`${e.selectClass}--error`]: e.error }])
    }, [
      V(m("select", {
        id: e.id,
        required: e.required,
        class: a([`${e.selectClass}__item`]),
        "onUpdate:modelValue": c[0] || (c[0] = (i) => l.value = i),
        onInput: d,
        "aria-required": e.required,
        "aria-invalid": e.error
      }, [
        (u(!0), s(C, null, y(e.options, (i) => (u(), s("option", {
          key: i.id,
          value: i.id,
          disabled: i.disabled,
          selected: i.selected
        }, f(i.label), 9, P))), 128))
      ], 42, H), [
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
  setup(e, { emit: t }) {
    const r = e, l = T(
      r.options.map((d) => {
        var n;
        return {
          ...d,
          checked: g((n = r.modelValue) == null ? void 0 : n.includes(d.id)) || !1
        };
      })
    ), o = t;
    return q(l, () => {
      o(
        "update:modelValue",
        l.filter((d) => d.checked).map((d) => d.id)
      );
    }), (d, n) => (u(!0), s(C, null, y(e.options, (c, i) => (u(), L($, {
      key: i,
      modelValue: l[i].checked,
      "onUpdate:modelValue": (b) => l[i].checked = b,
      id: c.id,
      checkboxClass: e.checkboxClass,
      error: e.error,
      required: e.required,
      textLabel: c.label,
      disabled: e.disabled
    }, null, 8, ["modelValue", "onUpdate:modelValue", "id", "checkboxClass", "error", "required", "textLabel", "disabled"]))), 128));
  }
}, z = ["id", "required", "checked", "onChange", "aria-required", "aria-invalid", "disabled"], J = {
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
  setup(e, { emit: t }) {
    const l = g(e.modelValue), o = t, d = (n) => {
      l.value = n, o("update:modelValue", l.value);
    };
    return (n, c) => (u(!0), s(C, null, y(e.options, (i, b) => (u(), s("div", {
      key: b,
      class: a([e.radioClass, { [`${e.radioClass}--error`]: e.error }])
    }, [
      m("input", {
        id: i.id,
        type: "radio",
        class: a([`${e.radioClass}__item`]),
        required: e.required,
        checked: i.id === l.value,
        onChange: (X) => d(i.id),
        "aria-required": e.required,
        "aria-invalid": e.error,
        disabled: e.disabled
      }, null, 42, z),
      x(v, {
        forId: i.id,
        labelClass: `${e.radioClass}__title`,
        textLabel: i.label
      }, null, 8, ["forId", "labelClass", "textLabel"])
    ], 2))), 128));
  }
}, K = ["id", "required", "checked", "value", "aria-required", "aria-invalid", "disabled"], Q = ["for"], W = {
  __name: "TToggle",
  props: {
    id: String,
    toggleClass: String,
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
    }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, r) => (u(), s("div", {
      class: a([e.toggleClass, { [`${e.toggleClass}--error`]: e.error }])
    }, [
      m("input", {
        id: e.id,
        type: "checkbox",
        class: a([`${e.toggleClass}__item`]),
        required: e.required,
        checked: e.modelValue,
        value: e.modelValue,
        onChange: r[0] || (r[0] = (l) => t.$emit("update:modelValue", !e.modelValue)),
        "aria-required": e.required,
        "aria-invalid": e.error,
        disabled: e.disabled
      }, null, 42, K),
      m("label", {
        for: e.id,
        class: a([`${e.toggleClass}__content`])
      }, [
        m("span", {
          class: a([`${e.toggleClass}__item-primary`])
        }, f(e.textLabelPrimary), 3),
        m("span", {
          class: a([`${e.toggleClass}__item-secondary`])
        }, f(e.textLabelSecondary), 3)
      ], 10, Q),
      m("span", {
        class: a([`${e.toggleClass}__artwork`]),
        role: "presentation"
      }, null, 2)
    ], 2));
  }
}, Z = {
  install: (e, t) => {
    e.component("TFormGroup", I), e.component("TLabel", v), e.component("TInputField", F), e.component("TUploadFile", G), e.component("TCheckbox", $), e.component("TError", E), e.component("THint", N), e.component("TTextarea", D), e.component("TSelect", R), e.component("TGroupCheckbox", j), e.component("TGroupRadio", J), e.component("TToggle", W);
  }
};
export {
  Z as default
};
