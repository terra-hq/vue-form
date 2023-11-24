import { openBlock as n, createElementBlock as u, normalizeClass as o, renderSlot as A, toDisplayString as p, createCommentVNode as y, ref as i, watch as N, createElementVNode as V, withDirectives as b, vModelText as w, Fragment as M, renderList as I, vModelSelect as L, resolveComponent as F, createVNode as s, withCtx as x, createApp as E } from "vue";
const h = {
  __name: "FormGroup",
  props: {
    formClass: String
  },
  setup(e) {
    return (t, a) => (n(), u("div", {
      class: o([e.formClass])
    }, [
      A(t.$slots, "default")
    ], 2));
  }
}, T = ["for"], v = {
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
    return (t, a) => e.textLabel ? (n(), u("label", {
      key: 0,
      for: e.forId,
      class: o(e.labelClass)
    }, p(e.textLabel), 11, T)) : y("", !0);
  }
}, U = ["type", "value", "id", "maxlength", "placeholder", "required"], $ = {
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
    const a = e, l = i(a.modelValue), m = t, c = (r) => {
      l.value = r.target.value, m("update:modelValue", l.value);
    };
    return N(
      () => a.modelValue,
      (r) => {
        l.value = r;
      }
    ), (r, f) => (n(), u("div", {
      class: o([e.inputClass, { [`${e.inputClass}--error`]: e.error }])
    }, [
      V("input", {
        type: e.type,
        value: l.value,
        id: e.id,
        class: o([e.inputClass + "__item"]),
        onInput: c,
        maxlength: e.maxlength,
        placeholder: e.placeholder,
        required: e.required
      }, null, 42, U)
    ], 2));
  }
}, D = ["id", "required", "checked", "value", "error"], q = {
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
    return (t, a) => (n(), u("div", {
      class: o([e.inputClass, { [`${e.inputClass}--error`]: e.error }])
    }, [
      V("input", {
        id: e.id,
        type: "checkbox",
        class: o([e.inputClass + "__item"]),
        required: e.required,
        checked: e.modelValue,
        value: e.modelValue,
        error: e.error,
        onChange: a[0] || (a[0] = (l) => t.$emit("update:modelValue", !e.modelValue))
      }, null, 42, D)
    ], 2));
  }
}, S = {
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
    return (t, a) => e.errorMessage ? (n(), u("p", {
      key: 0,
      class: o(e.errorClass)
    }, p(e.errorMessage), 3)) : e.hintMessage ? (n(), u("p", {
      key: 1,
      class: o(e.hintClass)
    }, p(e.hintMessage), 3)) : y("", !0);
  }
}, G = ["id", "placeholder", "rows"], B = {
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
  setup(e, { emit: t }) {
    const l = i(e.modelValue), m = t, c = (r) => {
      l.value = r.target.value, m("update:modelValue", l.value);
    };
    return (r, f) => (n(), u("div", {
      class: o([e.textAreaClass, { [`${e.textAreaClass}--error`]: e.error }])
    }, [
      b(V("textarea", {
        "onUpdate:modelValue": f[0] || (f[0] = (d) => l.value = d),
        id: e.id,
        class: o([e.textAreaClass + "__item"]),
        placeholder: e.placeholder,
        rows: e.rows,
        onInput: c
      }, null, 42, G), [
        [w, l.value]
      ])
    ], 2));
  }
}, H = ["id", "required", "multiple"], W = ["value"], z = {
  __name: "Select",
  props: {
    id: String,
    selectClass: String,
    options: [],
    modelValue: String,
    error: {
      type: Boolean,
      default: !1
    },
    required: {
      type: Boolean,
      default: !1
    },
    multiple: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = i(e.modelValue), m = t, c = (r) => {
      l.value = r.target.value, m("update:modelValue", l.value);
    };
    return (r, f) => (n(), u("div", {
      class: o([e.selectClass, { [`${e.selectClass}--error`]: e.error }])
    }, [
      b(V("select", {
        id: e.id,
        required: e.required,
        multiple: e.multiple,
        class: o([e.selectClass + "__item"]),
        "onUpdate:modelValue": f[0] || (f[0] = (d) => l.value = d),
        onInput: c
      }, [
        (n(!0), u(M, null, I(e.options, (d) => (n(), u("option", {
          key: d._id,
          value: d._id
        }, p(d.label), 9, W))), 128))
      ], 42, H), [
        [L, l.value]
      ])
    ], 2));
  }
}, O = {
  __name: "App",
  setup(e) {
    const t = i(""), a = i(""), l = i(!1), m = i(""), c = i(""), r = i(!0), f = i([
      {
        id: "volvo",
        label: "Volvo"
      },
      {
        id: "audi",
        label: "Audi"
      },
      {
        id: "mercedes",
        label: "Mercedes"
      },
      {
        id: "seat",
        label: "Seat"
      },
      {
        id: "bmw",
        label: "BMW"
      }
    ]);
    return (d, g) => {
      const k = F("Select");
      return n(), u(M, null, [
        s(h, { formClass: "g--form-group-01" }, {
          default: x(() => [
            s(v, {
              forId: "firstName",
              labelClass: "g--form-label-01",
              textLabel: "First Name"
            }),
            s($, {
              type: "text",
              modelValue: t.value,
              "onUpdate:modelValue": g[0] || (g[0] = (C) => t.value = C),
              id: "firstName",
              inputClass: "g--form-input-01",
              placeholder: "First Name",
              error: l.value
            }, null, 8, ["modelValue", "error"]),
            s(q, {
              modelValue: r.value,
              "onUpdate:modelValue": g[1] || (g[1] = (C) => r.value = C),
              id: "terms",
              inputClass: "g--form-checkbox-01"
            }, null, 8, ["modelValue"]),
            s(S, {
              errorMessage: c.value,
              errorClass: "g--form-error-01",
              hintMessage: m.value,
              hintClass: "g--form-hint-01"
            }, null, 8, ["errorMessage", "hintMessage"])
          ]),
          _: 1
        }),
        s(h, { formClass: "g--form-group-01" }, {
          default: x(() => [
            s(v, {
              forId: "firstName",
              labelClass: "g--form-label-01"
            }),
            s(B, {
              modelValue: a.value,
              "onUpdate:modelValue": g[2] || (g[2] = (C) => a.value = C),
              textAreaClass: "g--form-textarea-01",
              id: "message",
              placeholder: "Write your messsage here"
            }, null, 8, ["modelValue"]),
            s(S, {
              errorMessage: c.value,
              errorClass: "g--form-error-01",
              hintMessage: m.value,
              hintClass: "g--form-hint-01"
            }, null, 8, ["errorMessage", "hintMessage"])
          ]),
          _: 1
        }),
        s(h, { formClass: "g--form-group-01" }, {
          default: x(() => [
            s(v, {
              textLabel: "Selecciona una marca de auto",
              forId: "cards",
              labelClass: "g--form-label-01"
            }),
            s(k, {
              id: "cars",
              selectClass: "g--form-select-01",
              options: f.value,
              modelValue: d.test,
              required: ""
            }, null, 8, ["options", "modelValue"])
          ]),
          _: 1
        })
      ], 64);
    };
  }
};
E(O).mount("#app");
const J = {
  install: (e, t) => {
    e.component("FormGroup", h), e.component("Label", v), e.component("TextField", $), e.component("Checkbox", q), e.component("ErrorAndHint", S), e.component("TextArea", B), e.component("Select", z);
  }
};
export {
  J as default
};
