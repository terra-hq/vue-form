import { openBlock as o, createElementBlock as u, normalizeClass as d, renderSlot as F, toDisplayString as v, createCommentVNode as M, ref as n, watch as T, createElementVNode as b, withDirectives as A, vModelText as E, Fragment as C, renderList as x, vModelSelect as G, createBlock as p, unref as $, withCtx as O, createVNode as h, createApp as D } from "vue";
const B = {
  __name: "FormGroup",
  props: {
    formClass: String
  },
  setup(e) {
    return (a, r) => (o(), u("div", {
      class: d([e.formClass])
    }, [
      F(a.$slots, "default")
    ], 2));
  }
}, H = ["for"], y = {
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
    return (a, r) => e.textLabel ? (o(), u("label", {
      key: 0,
      for: e.forId,
      class: d(e.labelClass)
    }, v(e.textLabel), 11, H)) : M("", !0);
  }
}, W = ["type", "value", "id", "maxlength", "placeholder", "required"], w = {
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
    const r = e, l = n(r.modelValue), i = a, s = (t) => {
      l.value = t.target.value, i("update:modelValue", l.value);
    };
    return T(
      () => r.modelValue,
      (t) => {
        l.value = t;
      }
    ), (t, m) => (o(), u("div", {
      class: d([e.inputClass, { [`${e.inputClass}--error`]: e.error }])
    }, [
      b("input", {
        type: e.type,
        value: l.value,
        id: e.id,
        class: d([`${e.inputClass}__item`]),
        onInput: s,
        maxlength: e.maxlength,
        placeholder: e.placeholder,
        required: e.required
      }, null, 42, W)
    ], 2));
  }
}, z = ["id", "required", "checked", "value", "error"], S = {
  __name: "Checkbox",
  props: {
    id: String,
    checkboxClass: String,
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
    return (a, r) => (o(), u("div", {
      class: d([e.checkboxClass, { [`${e.checkboxClass}--error`]: e.error }])
    }, [
      b("input", {
        id: e.id,
        type: "checkbox",
        class: d([`${e.checkboxClass}__item`]),
        required: e.required,
        checked: e.modelValue,
        value: e.modelValue,
        error: e.error,
        onChange: r[0] || (r[0] = (l) => a.$emit("update:modelValue", !e.modelValue))
      }, null, 42, z)
    ], 2));
  }
}, L = {
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
    return (a, r) => e.errorMessage ? (o(), u("p", {
      key: 0,
      class: d(e.errorClass)
    }, v(e.errorMessage), 3)) : e.hintMessage ? (o(), u("p", {
      key: 1,
      class: d(e.hintClass)
    }, v(e.hintMessage), 3)) : M("", !0);
  }
}, j = ["id", "placeholder", "rows"], N = {
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
    const l = n(e.modelValue), i = a, s = (t) => {
      l.value = t.target.value, i("update:modelValue", l.value);
    };
    return (t, m) => (o(), u("div", {
      class: d([e.textAreaClass, { [`${e.textAreaClass}--error`]: e.error }])
    }, [
      A(b("textarea", {
        "onUpdate:modelValue": m[0] || (m[0] = (c) => l.value = c),
        id: e.id,
        class: d([`${e.textAreaClass}__item`]),
        placeholder: e.placeholder,
        rows: e.rows,
        onInput: s
      }, null, 42, j), [
        [E, l.value]
      ])
    ], 2));
  }
}, J = ["id", "required"], K = ["value", "disabled", "selected"], U = {
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
    const l = n(e.modelValue), i = a, s = (t) => {
      l.value = t.target.value, i("update:modelValue", l.value);
    };
    return (t, m) => (o(), u("div", {
      class: d([e.selectClass, { [`${e.selectClass}--error`]: e.error }])
    }, [
      A(b("select", {
        id: e.id,
        required: e.required,
        class: d([`${e.selectClass}__item`]),
        "onUpdate:modelValue": m[0] || (m[0] = (c) => l.value = c),
        onInput: s
      }, [
        (o(!0), u(C, null, x(e.options, (c) => (o(), u("option", {
          key: c.id,
          value: c.id,
          disabled: c.disabled,
          selected: c.selected
        }, v(c.label), 9, K))), 128))
      ], 42, J), [
        [G, l.value]
      ])
    ], 2));
  }
}, I = {
  __name: "GroupCheckbox",
  props: {
    options: Array,
    // { id: string; label: string }[]
    modelValue: Array,
    // string[]
    groupClass: String,
    error: {
      type: Boolean,
      default: !1
    },
    required: Boolean
  },
  setup(e) {
    const a = e, r = ref(
      a.options.map((l) => {
        var i;
        return {
          ...l,
          checked: ((i = a.modelValue) == null ? void 0 : i.includes(l.id)) || !1
        };
      })
    );
    return watch(r, () => {
      emit(
        "update:modelValue",
        r.value.filter((l) => l.checked).map((l) => l.id)
      );
    }), (l, i) => (o(), u("div", {
      class: d(e.groupClass)
    }, [
      (o(!0), u(C, null, x(e.options, (s, t) => (o(), p(S, {
        key: t,
        modelValue: $(r)[t].checked,
        "onUpdate:modelValue": (m) => $(r)[t].checked = m,
        id: s.id,
        checkboxClass: "g--form-checkbox-01",
        error: e.error,
        required: ""
      }, null, 8, ["modelValue", "onUpdate:modelValue", "id", "error"]))), 128)),
      (o(!0), u(C, null, x(e.options, (s, t) => (o(), p(y, {
        key: t,
        forId: s.id,
        labelClass: "g--form-label-01",
        textLabel: s.label
      }, null, 8, ["forId", "textLabel"]))), 128))
    ], 2));
  }
}, P = {
  __name: "App",
  setup(e) {
    const a = n(""), r = n(""), l = n(""), i = n(!0), s = n(!0), t = n(""), m = n([
      { id: "volvo", label: "Volvo", disabled: !1 },
      { id: "audi", label: "Audi", disabled: !0 },
      { id: "mercedes", label: "Mercedes", disabled: !1 },
      { id: "seat", label: "Seat", disabled: !1 },
      { id: "bmw", label: "BMW", disabled: !1 }
    ]), c = n([
      { id: "volvo", label: "Volvo" },
      { id: "audi", label: "Audi" },
      { id: "mercedes", label: "Mercedes" },
      { id: "seat", label: "Seat" },
      { id: "bmw", label: "BMW" }
    ]), k = n([]), q = n("seat");
    return (V, f) => (o(), p(B, { formClass: "g--form-group-01" }, {
      default: O(() => [
        h(y, {
          forId: "firstName",
          labelClass: "g--form-label-01",
          textLabel: "First Name"
        }),
        h(w, {
          type: "text",
          modelValue: a.value,
          "onUpdate:modelValue": f[0] || (f[0] = (g) => a.value = g),
          id: "firstName",
          inputClass: "g--form-input-01",
          placeholder: "First Name",
          error: s.value,
          required: V.required,
          maxlength: 8
        }, null, 8, ["modelValue", "error", "required"]),
        h(S, {
          modelValue: i.value,
          "onUpdate:modelValue": f[1] || (f[1] = (g) => i.value = g),
          id: "terms",
          checkboxClass: "g--form-checkbox-01",
          error: s.value,
          required: ""
        }, null, 8, ["modelValue", "error"]),
        h(U, {
          id: "cars",
          selectClass: "g--form-select-01",
          options: m.value,
          modelValue: q.value,
          "onUpdate:modelValue": f[2] || (f[2] = (g) => q.value = g),
          required: V.required,
          error: s.value
        }, null, 8, ["options", "modelValue", "required", "error"]),
        h(N, {
          modelValue: t.value,
          "onUpdate:modelValue": f[3] || (f[3] = (g) => t.value = g),
          id: "comments",
          textAreaClass: "g--form-textarea-01",
          rows: "5",
          placeholder: "Comments",
          required: V.required,
          error: s.value
        }, null, 8, ["modelValue", "required", "error"]),
        h(I, {
          options: c.value,
          modelValue: k.value,
          "onUpdate:modelValue": f[4] || (f[4] = (g) => k.value = g),
          groupClass: "g--form-group-checkbox-01"
        }, null, 8, ["options", "modelValue"]),
        h(L, {
          errorMessage: l.value,
          errorClass: "g--form-error-01",
          hintMessage: r.value,
          hintClass: "g--form-hint-01"
        }, null, 8, ["errorMessage", "hintMessage"])
      ]),
      _: 1
    }));
  }
};
D(P).mount("#app");
const R = {
  install: (e, a) => {
    e.component("FormGroup", B), e.component("Label", y), e.component("TextField", w), e.component("Checkbox", S), e.component("ErrorAndHint", L), e.component("TextArea", N), e.component("Select", U), e.component("GroupCheckbox", I);
  }
};
export {
  R as default
};
