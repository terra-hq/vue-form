import { openBlock as u, createElementBlock as s, normalizeClass as d, renderSlot as $, toDisplayString as h, createCommentVNode as C, ref as f, watch as y, createElementVNode as m, createVNode as b, withDirectives as V, vModelText as k, Fragment as x, renderList as v, vModelSelect as B, reactive as L, createBlock as A } from "vue";
const F = {
  __name: "FormGroup",
  props: {
    formClass: String
  },
  setup(e) {
    return (a, n) => (u(), s("div", {
      class: d([e.formClass])
    }, [
      $(a.$slots, "default")
    ], 2));
  }
}, M = ["for"], q = {
  __name: "Label",
  props: {
    textLabel: {
      type: String,
      default: ""
    },
    forId: String,
    labelClass: String
  },
  setup(e) {
    return (a, n) => e.textLabel ? (u(), s("label", {
      key: 0,
      for: e.forId,
      class: d(e.labelClass)
    }, h(e.textLabel), 11, M)) : C("", !0);
  }
}, I = ["type", "value", "id", "maxlength", "placeholder", "required", "aria-required", "aria-invalid"], w = {
  __name: "TextField",
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
    }
  },
  setup(e, { emit: a }) {
    const n = e, l = f(n.modelValue), o = a, t = (i) => {
      l.value = i.target.value, o("update:modelValue", l.value);
    };
    return y(
      () => n.modelValue,
      (i) => {
        l.value = i;
      }
    ), (i, c) => (u(), s("div", {
      class: d([e.inputClass, { [`${e.inputClass}--error`]: e.error }])
    }, [
      m("input", {
        type: e.type,
        value: l.value,
        id: e.id,
        class: d([`${e.inputClass}__item`]),
        onInput: t,
        maxlength: e.maxlength,
        placeholder: e.placeholder,
        required: e.required,
        "aria-required": e.required,
        "aria-invalid": e.error
      }, null, 42, I)
    ], 2));
  }
}, G = ["id", "accept", "multiple", "required", "aria-required", "aria-invalid"], U = {
  __name: "UploadFile",
  props: {
    id: String,
    uploadClass: String,
    modelValue: {
      type: [File, FileList, String],
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
    accept: {
      type: String,
      default: ""
    }
  },
  setup(e, { emit: a }) {
    const n = a, l = (o) => {
      const t = o.target.files, c = o.target.multiple ? t : t[0];
      n("update:modelValue", c);
    };
    return (o, t) => (u(), s("div", {
      class: d([e.uploadClass, { [`${e.uploadClass}--error`]: e.error }])
    }, [
      m("input", {
        type: "file",
        id: e.id,
        class: d([`${e.uploadClass}__item`]),
        accept: e.accept,
        onChange: l,
        multiple: e.multiple,
        required: e.required,
        "aria-required": e.required,
        "aria-invalid": e.error
      }, null, 42, G)
    ], 2));
  }
}, T = ["id", "required", "checked", "value", "aria-required", "aria-invalid"], S = {
  __name: "Checkbox",
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
    }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (a, n) => (u(), s("div", {
      class: d([e.checkboxClass, { [`${e.checkboxClass}--error`]: e.error }])
    }, [
      m("input", {
        id: e.id,
        type: "checkbox",
        class: d([`${e.checkboxClass}__item`]),
        required: e.required,
        checked: e.modelValue,
        value: e.modelValue,
        onChange: n[0] || (n[0] = (l) => a.$emit("update:modelValue", !e.modelValue)),
        "aria-required": e.required,
        "aria-invalid": e.error
      }, null, 42, T),
      b(q, {
        forId: e.id,
        labelClass: `${e.checkboxClass}__title`,
        textLabel: e.textLabel
      }, null, 8, ["forId", "labelClass", "textLabel"])
    ], 2));
  }
}, E = {
  __name: "Error",
  props: {
    errorMessage: {
      type: String,
      default: null
    },
    errorClass: String
  },
  setup(e) {
    return (a, n) => e.errorMessage ? (u(), s("p", {
      key: 0,
      class: d(e.errorClass)
    }, h(e.errorMessage), 3)) : C("", !0);
  }
}, N = {
  __name: "Hint",
  props: {
    hintMessage: {
      type: String,
      default: null
    },
    hintClass: String
  },
  setup(e) {
    return (a, n) => e.hintMessage ? (u(), s("p", {
      key: 0,
      class: d(e.hintClass)
    }, h(e.hintMessage), 3)) : C("", !0);
  }
}, D = ["id", "placeholder", "rows", "required", "aria-required", "aria-invalid"], H = {
  __name: "TextArea",
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
    error: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { emit: a }) {
    const l = f(e.modelValue), o = a, t = (i) => {
      l.value = i.target.value, o("update:modelValue", l.value);
    };
    return (i, c) => (u(), s("div", {
      class: d([e.textAreaClass, { [`${e.textAreaClass}--error`]: e.error }])
    }, [
      V(m("textarea", {
        "onUpdate:modelValue": c[0] || (c[0] = (r) => l.value = r),
        id: e.id,
        class: d([`${e.textAreaClass}__item`]),
        placeholder: e.placeholder,
        rows: e.rows,
        onInput: t,
        required: e.required,
        "aria-required": e.required,
        "aria-invalid": e.error
      }, null, 42, D), [
        [k, l.value]
      ])
    ], 2));
  }
}, O = ["id", "required", "aria-required", "aria-invalid"], R = ["value", "disabled", "selected"], z = {
  __name: "Select",
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
    const l = f(e.modelValue), o = a, t = (i) => {
      l.value = i.target.value, o("update:modelValue", l.value);
    };
    return (i, c) => (u(), s("div", {
      class: d([e.selectClass, { [`${e.selectClass}--error`]: e.error }])
    }, [
      V(m("select", {
        id: e.id,
        required: e.required,
        class: d([`${e.selectClass}__item`]),
        "onUpdate:modelValue": c[0] || (c[0] = (r) => l.value = r),
        onInput: t,
        "aria-required": e.required,
        "aria-invalid": e.error
      }, [
        (u(!0), s(x, null, v(e.options, (r) => (u(), s("option", {
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
  __name: "GroupCheckbox",
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
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: a }) {
    const n = e, l = L(
      n.options.map((t) => {
        var i;
        return {
          ...t,
          checked: f((i = n.modelValue) == null ? void 0 : i.includes(t.id)) || !1
        };
      })
    ), o = a;
    return y(l, () => {
      o(
        "update:modelValue",
        l.filter((t) => t.checked).map((t) => t.id)
      );
    }), (t, i) => (u(!0), s(x, null, v(e.options, (c, r) => (u(), A(S, {
      key: r,
      modelValue: l[r].checked,
      "onUpdate:modelValue": (g) => l[r].checked = g,
      id: c.id,
      checkboxClass: e.checkboxClass,
      error: e.error,
      required: e.required,
      textLabel: c.label
    }, null, 8, ["modelValue", "onUpdate:modelValue", "id", "checkboxClass", "error", "required", "textLabel"]))), 128));
  }
}, J = ["id", "required", "checked", "onChange", "aria-required", "aria-invalid"], K = {
  __name: "GroupRadio",
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
    }
  },
  setup(e, { emit: a }) {
    const l = f(e.modelValue), o = a, t = (i) => {
      l.value = i, o("update:modelValue", l.value);
    };
    return (i, c) => (u(!0), s(x, null, v(e.options, (r, g) => (u(), s("div", {
      key: g,
      class: d([e.radioClass, { [`${e.radioClass}--error`]: e.error }])
    }, [
      m("input", {
        id: r.id,
        type: "radio",
        class: d([`${e.radioClass}__item`]),
        required: e.required,
        checked: r.id === l.value,
        onChange: (P) => t(r.id),
        "aria-required": e.required,
        "aria-invalid": e.error
      }, null, 42, J),
      b(q, {
        forId: r.id,
        labelClass: `${e.radioClass}__title`,
        textLabel: r.label
      }, null, 8, ["forId", "labelClass", "textLabel"])
    ], 2))), 128));
  }
}, W = {
  install: (e, a) => {
    e.component("FormGroup", F), e.component("Label", q), e.component("TextField", w), e.component("UploadFile", U), e.component("Checkbox", S), e.component("Error", E), e.component("Hint", N), e.component("TextArea", H), e.component("Select", z), e.component("GroupCheckbox", j), e.component("GroupRadio", K);
  }
};
export {
  W as default
};
