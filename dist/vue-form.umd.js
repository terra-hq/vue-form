(function(e,C){typeof exports=="object"&&typeof module<"u"?module.exports=C(require("vue")):typeof define=="function"&&define.amd?define(["vue"],C):(e=typeof globalThis<"u"?globalThis:e||self,e["vue-form"]=C(e.Vue))})(this,function(e){"use strict";const C={__name:"FormGroup",props:{formClass:String},setup(l){return(o,r)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([l.formClass])},[e.renderSlot(o.$slots,"default")],2))}},$=["for"],h={__name:"Label",props:{textLabel:{type:String,default:""},forId:String,labelClass:String},setup(l){return(o,r)=>l.textLabel?(e.openBlock(),e.createElementBlock("label",{key:0,for:l.forId,class:e.normalizeClass(l.labelClass)},e.toDisplayString(l.textLabel),11,$)):e.createCommentVNode("",!0)}},N=["type","value","id","maxlength","placeholder","required","aria-required","aria-invalid"],k={__name:"TextField",props:{type:{type:String,default:"text"},modelValue:String,id:String,inputClass:String,error:{type:Boolean,default:!1},maxlength:{type:Number,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1}},setup(l,{emit:o}){const r=l,a=e.ref(r.modelValue),d=o,t=n=>{a.value=n.target.value,d("update:modelValue",a.value)};return e.watch(()=>r.modelValue,n=>{a.value=n}),(n,s)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([l.inputClass,{[`${l.inputClass}--error`]:l.error}])},[e.createElementVNode("input",{type:l.type,value:a.value,id:l.id,class:e.normalizeClass([`${l.inputClass}__item`]),onInput:t,maxlength:l.maxlength,placeholder:l.placeholder,required:l.required,"aria-required":l.required,"aria-invalid":l.error},null,42,N)],2))}},E=["id","accept","multiple","required","aria-required","aria-invalid"],x={__name:"UploadFile",props:{id:String,uploadClass:String,modelValue:{type:[File,FileList,String],default:String},multiple:{type:Boolean,default:!1},error:{type:Boolean,default:!1},required:{type:Boolean,default:!1},accept:{type:String,default:""}},setup(l,{emit:o}){const r=o,a=d=>{const t=d.target.files,s=d.target.multiple?t:t[0];r("update:modelValue",s)};return(d,t)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([l.uploadClass,{[`${l.uploadClass}--error`]:l.error}])},[e.createElementVNode("input",{type:"file",id:l.id,class:e.normalizeClass([`${l.uploadClass}__item`]),accept:l.accept,onChange:a,multiple:l.multiple,required:l.required,"aria-required":l.required,"aria-invalid":l.error},null,42,E)],2))}},L=["id","required","checked","value","aria-required","aria-invalid"],V={__name:"Checkbox",props:{id:String,checkboxClass:String,modelValue:Boolean,textLabel:{type:String,default:""},error:{type:Boolean,default:!1},required:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(l){return(o,r)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([l.checkboxClass,{[`${l.checkboxClass}--error`]:l.error}])},[e.createElementVNode("input",{id:l.id,type:"checkbox",class:e.normalizeClass([`${l.checkboxClass}__item`]),required:l.required,checked:l.modelValue,value:l.modelValue,onChange:r[0]||(r[0]=a=>o.$emit("update:modelValue",!l.modelValue)),"aria-required":l.required,"aria-invalid":l.error},null,42,L),e.createVNode(h,{forId:l.id,labelClass:`${l.checkboxClass}__title`,textLabel:l.textLabel},null,8,["forId","labelClass","textLabel"])],2))}},q={__name:"ErrorAndHint",props:{errorMessage:{type:String,default:null},errorClass:String,hintMessage:{type:String,default:null},hintClass:String},setup(l){return(o,r)=>l.errorMessage?(e.openBlock(),e.createElementBlock("p",{key:0,class:e.normalizeClass(l.errorClass)},e.toDisplayString(l.errorMessage),3)):l.hintMessage?(e.openBlock(),e.createElementBlock("p",{key:1,class:e.normalizeClass(l.hintClass)},e.toDisplayString(l.hintMessage),3)):e.createCommentVNode("",!0)}},A=["id","placeholder","rows","required","aria-required","aria-invalid"],y={__name:"TextArea",props:{modelValue:String,id:String,textAreaClass:String,rows:{type:String,default:"3"},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},error:{type:Boolean,default:!1}},setup(l,{emit:o}){const r=l,a=e.ref(r.modelValue),d=o,t=n=>{a.value=n.target.value,d("update:modelValue",a.value)};return(n,s)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([l.textAreaClass,{[`${l.textAreaClass}--error`]:l.error}])},[e.withDirectives(e.createElementVNode("textarea",{"onUpdate:modelValue":s[0]||(s[0]=i=>a.value=i),id:l.id,class:e.normalizeClass([`${l.textAreaClass}__item`]),placeholder:l.placeholder,rows:l.rows,onInput:t,required:l.required,"aria-required":l.required,"aria-invalid":l.error},null,42,A),[[e.vModelText,a.value]])],2))}},M=["id","required","aria-required","aria-invalid"],F=["value","disabled","selected"],B={__name:"Select",props:{id:String,selectClass:String,options:Array,modelValue:String,error:{type:Boolean,default:!1},required:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(l,{emit:o}){const r=l,a=e.ref(r.modelValue),d=o,t=n=>{a.value=n.target.value,d("update:modelValue",a.value)};return(n,s)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([l.selectClass,{[`${l.selectClass}--error`]:l.error}])},[e.withDirectives(e.createElementVNode("select",{id:l.id,required:l.required,class:e.normalizeClass([`${l.selectClass}__item`]),"onUpdate:modelValue":s[0]||(s[0]=i=>a.value=i),onInput:t,"aria-required":l.required,"aria-invalid":l.error},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.options,i=>(e.openBlock(),e.createElementBlock("option",{key:i.id,value:i.id,disabled:i.disabled,selected:i.selected},e.toDisplayString(i.label),9,F))),128))],42,M),[[e.vModelSelect,a.value]])],2))}},S={__name:"GroupCheckbox",props:{options:Array,modelValue:Array,checkboxClass:String,error:{type:Boolean,default:!1},required:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(l,{emit:o}){const r=l,a=e.reactive(r.options.map(t=>{var n;return{...t,checked:e.ref((n=r.modelValue)==null?void 0:n.includes(t.id))||!1}})),d=o;return e.watch(a,()=>{d("update:modelValue",a.filter(t=>t.checked).map(t=>t.id))}),(t,n)=>(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.options,(s,i)=>(e.openBlock(),e.createBlock(V,{key:i,modelValue:a[i].checked,"onUpdate:modelValue":g=>a[i].checked=g,id:s.id,checkboxClass:l.checkboxClass,error:l.error,required:l.required,textLabel:s.label},null,8,["modelValue","onUpdate:modelValue","id","checkboxClass","error","required","textLabel"]))),128))}},z=["id","required","checked","onChange","aria-required","aria-invalid"],p={__name:"GroupRadio",props:{options:Array,modelValue:String,radioClass:String,error:{type:Boolean,default:!1},required:{type:Boolean,default:!1}},setup(l,{emit:o}){const r=l,a=e.ref(r.modelValue),d=o,t=n=>{a.value=n,d("update:modelValue",a.value)};return(n,s)=>(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.options,(i,g)=>(e.openBlock(),e.createElementBlock("div",{key:g,class:e.normalizeClass([l.radioClass,{[`${l.radioClass}--error`]:l.error}])},[e.createElementVNode("input",{id:i.id,type:"radio",class:e.normalizeClass([`${l.radioClass}__item`]),required:l.required,checked:i.id===a.value,onChange:b=>t(i.id),"aria-required":l.required,"aria-invalid":l.error},null,42,z),e.createVNode(h,{forId:i.id,labelClass:`${l.radioClass}__title`,textLabel:i.label},null,8,["forId","labelClass","textLabel"])],2))),128))}},w={__name:"App",setup(l){const o=e.ref(""),r=e.ref(""),a=e.ref(!0),d=e.ref([{id:"one",label:"One"},{id:"two",label:"Two"},{id:"three",label:"Three"},{id:"four",label:"Four"},{id:"five",label:"Five"}]),t=e.ref(["three","four"]),n=e.ref([{id:"six",label:"Six"},{id:"seven",label:"Seven"},{id:"eight",label:"Eight"},{id:"nine",label:"Nine"},{id:"ten",label:"Ten"}]),s=e.ref(""),i=e.ref([{id:"volvo",label:"Volvo",disabled:!1},{id:"audi",label:"Audi",disabled:!0},{id:"mercedes",label:"Mercedes",disabled:!1},{id:"seat",label:"Seat",disabled:!1},{id:"bmw",label:"BMW",disabled:!1}]),g=e.ref("seat"),b=e.ref(""),m=e.ref(!1),f=e.ref(!1),U=e.ref(""),I=e.ref("");return(D,c)=>(e.openBlock(),e.createBlock(C,{formClass:"g--form-group-01"},{default:e.withCtx(()=>[e.createVNode(h,{forId:"firstName",labelClass:"g--form-label-01",textLabel:"First Name"}),e.createVNode(k,{type:"text",modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=u=>o.value=u),id:"firstName",inputClass:"g--form-input-01",placeholder:"First Name",error:m.value,required:f.value,maxlength:8},null,8,["modelValue","error","required"]),e.createVNode(x,{modelValue:r.value,"onUpdate:modelValue":c[1]||(c[1]=u=>r.value=u),id:"fileInput",uploadClass:"g--form-upload-01",error:m.value,required:f.value,accept:"image/*",multiple:!0},null,8,["modelValue","error","required"]),e.createVNode(V,{modelValue:a.value,"onUpdate:modelValue":c[2]||(c[2]=u=>a.value=u),id:"terms",checkboxClass:"g--form-checkbox-01",textLabel:"Accept Terms and conditions",error:m.value,required:f.value},null,8,["modelValue","error","required"]),e.createVNode(S,{options:d.value,modelValue:t.value,"onUpdate:modelValue":c[3]||(c[3]=u=>t.value=u),checkboxClass:"g--form-checkbox-01",error:m.value,required:f.value},null,8,["options","modelValue","error","required"]),e.createVNode(p,{options:n.value,modelValue:s.value,"onUpdate:modelValue":c[4]||(c[4]=u=>s.value=u),radioClass:"g--form-radio-01",error:m.value,required:f.value},null,8,["options","modelValue","error","required"]),e.createVNode(B,{id:"cars",selectClass:"g--form-select-01",options:i.value,modelValue:g.value,"onUpdate:modelValue":c[5]||(c[5]=u=>g.value=u),required:f.value,error:m.value},null,8,["options","modelValue","required","error"]),e.createVNode(y,{modelValue:b.value,"onUpdate:modelValue":c[6]||(c[6]=u=>b.value=u),id:"comments",textAreaClass:"g--form-textarea-01",rows:"5",placeholder:"Comments",required:f.value,error:m.value},null,8,["modelValue","required","error"]),e.createVNode(q,{errorMessage:I.value,errorClass:"g--form-error-01",hintMessage:U.value,hintClass:"g--form-hint-01"},null,8,["errorMessage","hintMessage"])]),_:1}))}};return e.createApp(w).mount("#app"),{install:(l,o)=>{l.component("FormGroup",C),l.component("Label",h),l.component("TextField",k),l.component("UploadFile",x),l.component("Checkbox",V),l.component("ErrorAndHint",q),l.component("TextArea",y),l.component("Select",B),l.component("GroupCheckbox",S),l.component("GroupRadio",p)}}});
