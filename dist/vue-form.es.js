import { openBlock as u, createElementBlock as f, normalizeClass as n, renderSlot as D, toDisplayString as V, createCommentVNode as p, ref as o, watch as B, createElementVNode as x, createVNode as g, withDirectives as A, vModelText as H, Fragment as S, renderList as k, vModelSelect as R, reactive as z, createBlock as M, withCtx as W, createApp as j } from "vue";
const L = {
  __name: "FormGroup",
  props: {
    formClass: String
  },
  setup(e) {
    return (r, d) => (u(), f("div", {
      class: n([e.formClass])
    }, [
      D(r.$slots, "default")
    ], 2));
  }
}, J = ["for"], q = {
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
    return (r, d) => e.textLabel ? (u(), f("label", {
      key: 0,
      for: e.forId,
      class: n(e.labelClass)
    }, V(e.textLabel), 11, J)) : p("", !0);
  }
}, K = ["type", "value", "id", "maxlength", "placeholder", "required", "aria-required", "aria-invalid"], F = {
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
  setup(e, { emit: r }) {
    const d = e, l = o(d.modelValue), s = r, a = (i) => {
      l.value = i.target.value, s("update:modelValue", l.value);
    };
    return B(
      () => d.modelValue,
      (i) => {
        l.value = i;
      }
    ), (i, c) => (u(), f("div", {
      class: n([e.inputClass, { [`${e.inputClass}--error`]: e.error }])
    }, [
      x("input", {
        type: e.type,
        value: l.value,
        id: e.id,
        class: n([`${e.inputClass}__item`]),
        onInput: a,
        maxlength: e.maxlength,
        placeholder: e.placeholder,
        required: e.required,
        "aria-required": e.required,
        "aria-invalid": e.error
      }, null, 42, K)
    ], 2));
  }
}, P = ["id", "accept", "multiple", "required", "aria-required", "aria-invalid"], U = {
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
  setup(e, { emit: r }) {
    const d = r, l = (s) => {
      const a = s.target.files, c = s.target.multiple ? a : a[0];
      d("update:modelValue", c);
    };
    return (s, a) => (u(), f("div", {
      class: n([e.uploadClass, { [`${e.uploadClass}--error`]: e.error }])
    }, [
      x("input", {
        type: "file",
        id: e.id,
        class: n([`${e.uploadClass}__item`]),
        accept: e.accept,
        onChange: l,
        multiple: e.multiple,
        required: e.required,
        "aria-required": e.required,
        "aria-invalid": e.error
      }, null, 42, P)
    ], 2));
  }
}, Q = ["id", "required", "checked", "value", "aria-required", "aria-invalid"], $ = {
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
    return (r, d) => (u(), f("div", {
      class: n([e.checkboxClass, { [`${e.checkboxClass}--error`]: e.error }])
    }, [
      x("input", {
        id: e.id,
        type: "checkbox",
        class: n([`${e.checkboxClass}__item`]),
        required: e.required,
        checked: e.modelValue,
        value: e.modelValue,
        onChange: d[0] || (d[0] = (l) => r.$emit("update:modelValue", !e.modelValue)),
        "aria-required": e.required,
        "aria-invalid": e.error
      }, null, 42, Q),
      g(q, {
        forId: e.id,
        labelClass: `${e.checkboxClass}__title`,
        textLabel: e.textLabel
      }, null, 8, ["forId", "labelClass", "textLabel"])
    ], 2));
  }
}, w = {
  __name: "ErrorAndHint",
  props: {
    errorMessage: {
      type: String,
      default: null
    },
    errorClass: String,
    hintMessage: {
      type: String,
      default: null
    },
    hintClass: String
  },
  setup(e) {
    return (r, d) => e.errorMessage ? (u(), f("p", {
      key: 0,
      class: n(e.errorClass)
    }, V(e.errorMessage), 3)) : e.hintMessage ? (u(), f("p", {
      key: 1,
      class: n(e.hintClass)
    }, V(e.hintMessage), 3)) : p("", !0);
  }
}, X = ["id", "placeholder", "rows", "required", "aria-required", "aria-invalid"], I = {
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
  setup(e, { emit: r }) {
    const l = o(e.modelValue), s = r, a = (i) => {
      l.value = i.target.value, s("update:modelValue", l.value);
    };
    return (i, c) => (u(), f("div", {
      class: n([e.textAreaClass, { [`${e.textAreaClass}--error`]: e.error }])
    }, [
      A(x("textarea", {
        "onUpdate:modelValue": c[0] || (c[0] = (t) => l.value = t),
        id: e.id,
        class: n([`${e.textAreaClass}__item`]),
        placeholder: e.placeholder,
        rows: e.rows,
        onInput: a,
        required: e.required,
        "aria-required": e.required,
        "aria-invalid": e.error
      }, null, 42, X), [
        [H, l.value]
      ])
    ], 2));
  }
}, Y = ["id", "required", "aria-required", "aria-invalid"], Z = ["value", "disabled", "selected"], N = {
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
  setup(e, { emit: r }) {
    const l = o(e.modelValue), s = r, a = (i) => {
      l.value = i.target.value, s("update:modelValue", l.value);
    };
    return (i, c) => (u(), f("div", {
      class: n([e.selectClass, { [`${e.selectClass}--error`]: e.error }])
    }, [
      A(x("select", {
        id: e.id,
        required: e.required,
        class: n([`${e.selectClass}__item`]),
        "onUpdate:modelValue": c[0] || (c[0] = (t) => l.value = t),
        onInput: a,
        "aria-required": e.required,
        "aria-invalid": e.error
      }, [
        (u(!0), f(S, null, k(e.options, (t) => (u(), f("option", {
          key: t.id,
          value: t.id,
          disabled: t.disabled,
          selected: t.selected
        }, V(t.label), 9, Z))), 128))
      ], 42, Y), [
        [R, l.value]
      ])
    ], 2));
  }
}, T = {
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
  setup(e, { emit: r }) {
    const d = e, l = z(
      d.options.map((a) => {
        var i;
        return {
          ...a,
          checked: o((i = d.modelValue) == null ? void 0 : i.includes(a.id)) || !1
        };
      })
    ), s = r;
    return B(l, () => {
      s(
        "update:modelValue",
        l.filter((a) => a.checked).map((a) => a.id)
      );
    }), (a, i) => (u(!0), f(S, null, k(e.options, (c, t) => (u(), M($, {
      key: t,
      modelValue: l[t].checked,
      "onUpdate:modelValue": (C) => l[t].checked = C,
      id: c.id,
      checkboxClass: e.checkboxClass,
      error: e.error,
      required: e.required,
      textLabel: c.label
    }, null, 8, ["modelValue", "onUpdate:modelValue", "id", "checkboxClass", "error", "required", "textLabel"]))), 128));
  }
}, _ = ["id", "required", "checked", "onChange", "aria-required", "aria-invalid"], G = {
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
  setup(e, { emit: r }) {
    const l = o(e.modelValue), s = r, a = (i) => {
      l.value = i, s("update:modelValue", l.value);
    };
    return (i, c) => (u(!0), f(S, null, k(e.options, (t, C) => (u(), f("div", {
      key: C,
      class: n([e.radioClass, { [`${e.radioClass}--error`]: e.error }])
    }, [
      x("input", {
        id: t.id,
        type: "radio",
        class: n([`${e.radioClass}__item`]),
        required: e.required,
        checked: t.id === l.value,
        onChange: (y) => a(t.id),
        "aria-required": e.required,
        "aria-invalid": e.error
      }, null, 42, _),
      g(q, {
        forId: t.id,
        labelClass: `${e.radioClass}__title`,
        textLabel: t.label
      }, null, 8, ["forId", "labelClass", "textLabel"])
    ], 2))), 128));
  }
}, ee = {
  __name: "App",
  setup(e) {
    const r = o(""), d = o(""), l = o(!0), s = o([
      { id: "one", label: "One" },
      { id: "two", label: "Two" },
      { id: "three", label: "Three" },
      { id: "four", label: "Four" },
      { id: "five", label: "Five" }
    ]), a = o(["three", "four"]), i = o([
      { id: "six", label: "Six" },
      { id: "seven", label: "Seven" },
      { id: "eight", label: "Eight" },
      { id: "nine", label: "Nine" },
      { id: "ten", label: "Ten" }
    ]), c = o(""), t = o([
      { id: "volvo", label: "Volvo", disabled: !1 },
      { id: "audi", label: "Audi", disabled: !0 },
      { id: "mercedes", label: "Mercedes", disabled: !1 },
      { id: "seat", label: "Seat", disabled: !1 },
      { id: "bmw", label: "BMW", disabled: !1 }
    ]), C = o("seat"), y = o(""), h = o(!1), b = o(!1), O = o(""), E = o("");
    return (le, m) => (u(), M(L, { formClass: "g--form-group-01" }, {
      default: W(() => [
        g(q, {
          forId: "firstName",
          labelClass: "g--form-label-01",
          textLabel: "First Name"
        }),
        g(F, {
          type: "text",
          modelValue: r.value,
          "onUpdate:modelValue": m[0] || (m[0] = (v) => r.value = v),
          id: "firstName",
          inputClass: "g--form-input-01",
          placeholder: "First Name",
          error: h.value,
          required: b.value,
          maxlength: 8
        }, null, 8, ["modelValue", "error", "required"]),
        g(U, {
          modelValue: d.value,
          "onUpdate:modelValue": m[1] || (m[1] = (v) => d.value = v),
          id: "fileInput",
          uploadClass: "g--form-upload-01",
          error: h.value,
          required: b.value,
          accept: "image/*",
          multiple: !0
        }, null, 8, ["modelValue", "error", "required"]),
        g($, {
          modelValue: l.value,
          "onUpdate:modelValue": m[2] || (m[2] = (v) => l.value = v),
          id: "terms",
          checkboxClass: "g--form-checkbox-01",
          textLabel: "Accept Terms and conditions",
          error: h.value,
          required: b.value
        }, null, 8, ["modelValue", "error", "required"]),
        g(T, {
          options: s.value,
          modelValue: a.value,
          "onUpdate:modelValue": m[3] || (m[3] = (v) => a.value = v),
          checkboxClass: "g--form-checkbox-01",
          error: h.value,
          required: b.value
        }, null, 8, ["options", "modelValue", "error", "required"]),
        g(G, {
          options: i.value,
          modelValue: c.value,
          "onUpdate:modelValue": m[4] || (m[4] = (v) => c.value = v),
          radioClass: "g--form-radio-01",
          error: h.value,
          required: b.value
        }, null, 8, ["options", "modelValue", "error", "required"]),
        g(N, {
          id: "cars",
          selectClass: "g--form-select-01",
          options: t.value,
          modelValue: C.value,
          "onUpdate:modelValue": m[5] || (m[5] = (v) => C.value = v),
          required: b.value,
          error: h.value
        }, null, 8, ["options", "modelValue", "required", "error"]),
        g(I, {
          modelValue: y.value,
          "onUpdate:modelValue": m[6] || (m[6] = (v) => y.value = v),
          id: "comments",
          textAreaClass: "g--form-textarea-01",
          rows: "5",
          placeholder: "Comments",
          required: b.value,
          error: h.value
        }, null, 8, ["modelValue", "required", "error"]),
        g(w, {
          errorMessage: E.value,
          errorClass: "g--form-error-01",
          hintMessage: O.value,
          hintClass: "g--form-hint-01"
        }, null, 8, ["errorMessage", "hintMessage"])
      ]),
      _: 1
    }));
  }
};
j(ee).mount("#app");
const re = {
  install: (e, r) => {
    e.component("FormGroup", L), e.component("Label", q), e.component("TextField", F), e.component("UploadFile", U), e.component("Checkbox", $), e.component("ErrorAndHint", w), e.component("TextArea", I), e.component("Select", N), e.component("GroupCheckbox", T), e.component("GroupRadio", G);
  }
};
export {
  re as default
};
