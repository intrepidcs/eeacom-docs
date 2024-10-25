"use strict";(self.webpackChunkeeacom_docs=self.webpackChunkeeacom_docs||[]).push([[3685],{7430:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(4848),n=t(8453);const r={title:"Configuring Application Data Type (Array): AUTOSAR Arrays in EEA COM",description:"Configure Application Data Types (Array) in EEA COM for AUTOSAR systems. Define fixed or variable array sizes, set dimensions, and manage ECU data with flexible array structures.",keywords:["Application Data Type","Array","EEA COM","AUTOSAR","Array Size Semantics","Multidimensional Array","Primitive Type","ECU Data Management"],sidebar_position:2,sidebar_label:"Application Data Type (Array)"},s="7.2 Application Data Type (Array)",o={id:"data-types/application-data-type",title:"Configuring Application Data Type (Array): AUTOSAR Arrays in EEA COM",description:"Configure Application Data Types (Array) in EEA COM for AUTOSAR systems. Define fixed or variable array sizes, set dimensions, and manage ECU data with flexible array structures.",source:"@site/docs/data-types/application-data-type.md",sourceDirName:"data-types",slug:"/data-types/application-data-type",permalink:"/data-types/application-data-type",draft:!1,unlisted:!1,editUrl:"https://github.com/intrepidcs/eeacom-docs/blob/main/docs/data-types/application-data-type.md",tags:[],version:"current",lastUpdatedAt:1729859286e3,sidebarPosition:2,frontMatter:{title:"Configuring Application Data Type (Array): AUTOSAR Arrays in EEA COM",description:"Configure Application Data Types (Array) in EEA COM for AUTOSAR systems. Define fixed or variable array sizes, set dimensions, and manage ECU data with flexible array structures.",keywords:["Application Data Type","Array","EEA COM","AUTOSAR","Array Size Semantics","Multidimensional Array","Primitive Type","ECU Data Management"],sidebar_position:2,sidebar_label:"Application Data Type (Array)"},sidebar:"tutorialSidebar",previous:{title:"Data Constraints",permalink:"/data-types/data-constraints"},next:{title:"Compute Method",permalink:"/data-types/compute-method"}},p={},l=[];function A(a){const e={h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",...(0,n.R)(),...a.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"72-application-data-type-array",children:"7.2 Application Data Type (Array)"})}),"\n",(0,i.jsx)(e.p,{children:"The Application Data Type (Array) allows the creation, editing, and deletion of array types based on a specific application base type."}),"\n",(0,i.jsx)(e.p,{children:'This data type describes an array of objects. The number of objects in the array is determined by setting a value for the "Max number of elements" attribute. Whether the array can vary in size is defined by the "Array size semantics" attribute. The actual content of an Application Array Data Type is specified by the component known as the Application Array Element (ARAF).'}),"\n",(0,i.jsx)(e.p,{children:"Create Array Data Type:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"To create array type for any primitive or defined type, click on Add button. Fill the required details and save the type by clicking on save button."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Sample steps to create Array type is shown in below snap -"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Add Application Data Types(Array) \u2192 Short Name \u2192 Size semantic (Fixed Size, Variable Size(Old) and Variable Size (New)), Dimension (One Dimensional and Multidimensional) \u2192Save"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("div",{class:"text--center",children:(0,i.jsx)("figure",{children:(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.img,{alt:"Application Data Type(Array)",src:t(8585).A+"",title:"- Application Data Type(Array)",width:"1310",height:"440"}),"\r\n",(0,i.jsx)("figcaption",{children:"Fig. Application Data Type(Array)"})]})})}),"\n",(0,i.jsx)("div",{class:"text--center",children:(0,i.jsx)("figure",{children:(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.img,{alt:"Arxml File",src:t(4455).A+"",title:"- Arxml File",width:"1688",height:"345"}),"\r\n",(0,i.jsx)("figcaption",{children:"Fig. Arxml File"})]})})})]})}function d(a={}){const{wrapper:e}={...(0,n.R)(),...a.components};return e?(0,i.jsx)(e,{...a,children:(0,i.jsx)(A,{...a})}):A(a)}},4455:(a,e,t)=>{t.d(e,{A:()=>i});const i="data:image/webp;base64,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"},8585:(a,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/image8-4b233f8edc0e924445c3dc241cd19ade.webp"},8453:(a,e,t)=>{t.d(e,{R:()=>s,x:()=>o});var i=t(6540);const n={},r=i.createContext(n);function s(a){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function o(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(n):a.components||n:s(a.components),i.createElement(r.Provider,{value:e},a.children)}}}]);