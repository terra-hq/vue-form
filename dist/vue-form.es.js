import { ref as i, watch as o, openBlock as c, createElementBlock as s, normalizeClass as u, createElementVNode as m } from "vue";
const h = ["type", "value", "id", "maxlength", "placeholder", "required"], p = {
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
    const n = e, l = i(n.modelValue), r = a, d = (t) => {
      l.value = t.target.value, r("update:modelValue", l.value);
    };
    return o(
      () => n.modelValue,
      (t) => {
        l.value = t;
      }
    ), (t, f) => (c(), s("div", {
      class: u([e.inputClass, { [`${e.inputClass}--error`]: e.error }])
    }, [
      m("input", {
        type: e.type,
        value: l.value,
        id: e.id,
        class: u([e.inputClass + "__item"]),
        onInput: d,
        maxlength: e.maxlength,
        placeholder: e.placeholder,
        required: e.required
      }, null, 42, h)
    ], 2));
  }
}, x = {
  install: (e, a) => {
    e.component("TextField", p);
  }
};
export {
  x as default
};
