import { openBlock as u, createElementBlock as s, normalizeClass as a, renderSlot as C, toDisplayString as c, createCommentVNode as f, ref as g, watch as y, createElementVNode as m, withDirectives as x, vModelText as S } from "vue";
const v = {
  __name: "FormGroup",
  props: {
    formClass: String
  },
  setup(e) {
    return (t, n) => (u(), s("div", {
      class: a([e.formClass])
    }, [
      C(t.$slots, "default")
    ], 2));
  }
}, V = ["for"], p = {
  __name: "Label",
  props: {
    textLabel: String,
    forId: String,
    labelClass: String
  },
  setup(e) {
    return (t, n) => e.textLabel ? (u(), s("label", {
      key: 0,
      for: e.forId,
      class: a(e.labelClass)
    }, c(e.textLabel), 11, V)) : f("", !0);
  }
}, $ = ["type", "value", "id", "maxlength", "placeholder", "required"], b = {
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
  setup(e, { emit: t }) {
    const n = e, l = g(n.modelValue), o = t, i = (r) => {
      l.value = r.target.value, o("update:modelValue", l.value);
    };
    return y(
      () => n.modelValue,
      (r) => {
        l.value = r;
      }
    ), (r, d) => (u(), s("div", {
      class: a([e.inputClass, { [`${e.inputClass}--error`]: e.error }])
    }, [
      m("input", {
        type: e.type,
        value: l.value,
        id: e.id,
        class: a([e.inputClass + "__item"]),
        onInput: i,
        maxlength: e.maxlength,
        placeholder: e.placeholder,
        required: e.required
      }, null, 42, $)
    ], 2));
  }
}, k = ["id", "required", "checked", "value"], q = {
  __name: "Checkbox",
  props: {
    id: String,
    inputClass: String,
    modelValue: Boolean,
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
    return (t, n) => (u(), s("div", {
      class: a([e.inputClass, { [`${e.inputClass}--error`]: e.error }])
    }, [
      m("input", {
        id: e.id,
        type: "checkbox",
        class: a([e.inputClass + "__item"]),
        required: e.required,
        checked: e.modelValue,
        value: e.modelValue,
        onChange: n[0] || (n[0] = (l) => t.$emit("update:modelValue", !e.modelValue))
      }, null, 42, k)
    ], 2));
  }
}, B = {
  __name: "ErrorAndHint",
  props: {
    errorMessage: {
      type: String,
      default: null
    },
    errorClass: {
      type: String,
      default: null
    },
    hintMessage: {
      type: String,
      default: null
    },
    hintClass: {
      type: String,
      default: null
    }
  },
  setup(e) {
    return (t, n) => e.errorMessage ? (u(), s("p", {
      key: 0,
      class: a(e.errorClass)
    }, c(e.errorMessage), 3)) : e.hintMessage ? (u(), s("p", {
      key: 1,
      class: a(e.hintClass)
    }, c(e.hintMessage), 3)) : f("", !0);
  }
}, M = ["id", "placeholder", "rows"], w = {
  __name: "TextArea",
  props: {
    modelValue: String,
    id: String,
    inputClass: String,
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
  setup(e, { emit: t }) {
    const l = g(e.modelValue), o = t, i = (r) => {
      l.value = r.target.value, o("update:modelValue", l.value);
    };
    return (r, d) => (u(), s("div", {
      class: a([e.inputClass, { [`${e.inputClass}--error`]: e.error }])
    }, [
      x(m("textarea", {
        "onUpdate:modelValue": d[0] || (d[0] = (h) => l.value = h),
        id: e.id,
        class: a([e.inputClass + "__item"]),
        placeholder: e.placeholder,
        rows: e.rows,
        onInput: i
      }, null, 42, M), [
        [S, l.value]
      ])
    ], 2));
  }
}, T = {
  install: (e, t) => {
    e.component("TextField", b), e.component("FormGroup", v), e.component("Label", p), e.component("Checkbox", q), e.component("ErrorAndHint", B), e.component("TextArea", w);
  }
};
export {
  T as default
};
