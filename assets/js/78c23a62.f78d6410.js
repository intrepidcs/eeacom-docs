"use strict";(self.webpackChunkeeacom_docs=self.webpackChunkeeacom_docs||[]).push([[5421],{898:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=a(4848),t=a(8453);const o={title:"LIN Unconditional Frame Configuration in AUTOSAR ARXML - PDU and Signal Management",description:"Configure LIN Unconditional Frames in AUTOSAR ARXML files for standard data communication. Assign short names and lengths to frames, and manage PDUs by selecting the appropriate type, packing byte order, and updating indication bit positions. Ensure efficient data handling between master and slave nodes.",keywords:["LIN Unconditional Frames","AUTOSAR ARXML","Data Communication","Master Node","Slave Node","Frame Identifier","PDU","Packing Byte Order","Short Name","Frame Length"],sidebar_position:3,sidebar_label:"LIN Unconditional Frames"},r="4.3 LIN Unconditional Frames",s={id:"frames/lin-unconditional-frames",title:"LIN Unconditional Frame Configuration in AUTOSAR ARXML - PDU and Signal Management",description:"Configure LIN Unconditional Frames in AUTOSAR ARXML files for standard data communication. Assign short names and lengths to frames, and manage PDUs by selecting the appropriate type, packing byte order, and updating indication bit positions. Ensure efficient data handling between master and slave nodes.",source:"@site/docs/frames/lin-unconditional-frames.md",sourceDirName:"frames",slug:"/frames/lin-unconditional-frames",permalink:"/frames/lin-unconditional-frames",draft:!1,unlisted:!1,editUrl:"https://github.com/intrepidcs/eeacom-docs/blob/main/docs/frames/lin-unconditional-frames.md",tags:[],version:"current",lastUpdatedAt:1728649695e3,sidebarPosition:3,frontMatter:{title:"LIN Unconditional Frame Configuration in AUTOSAR ARXML - PDU and Signal Management",description:"Configure LIN Unconditional Frames in AUTOSAR ARXML files for standard data communication. Assign short names and lengths to frames, and manage PDUs by selecting the appropriate type, packing byte order, and updating indication bit positions. Ensure efficient data handling between master and slave nodes.",keywords:["LIN Unconditional Frames","AUTOSAR ARXML","Data Communication","Master Node","Slave Node","Frame Identifier","PDU","Packing Byte Order","Short Name","Frame Length"],sidebar_position:3,sidebar_label:"LIN Unconditional Frames"},sidebar:"tutorialSidebar",previous:{title:"LIN Sporadic Frames",permalink:"/frames/lin-sporadic-frames"},next:{title:"LIN Event Triggered Frames",permalink:"/frames/lin-event-triggered-frames"}},d={},l=[];function c(e){const n={h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"43-lin-unconditional-frames",children:"4.3 LIN Unconditional Frames"})}),"\n",(0,i.jsx)(n.p,{children:"This frame is the normal type of LIN message format for data communication. Basically, the master node will send this frame header in a scheduled frame slot and the designated slave node will receive and fill the data and send it back."}),"\n",(0,i.jsx)(n.p,{children:"This frame normally carries off the signals and the defined identifiers from 0-59 (0x00 to 0x3B).\r\nIn the LIN Unconditional frames, assign a short name and a value to the length (in bytes)."}),"\n",(0,i.jsx)(n.p,{children:"The options for creating a PDU and selecting a PDU are available. When selecting the PDU option, choose the PDU Type and frame. Additionally, select the Packing Byte Order options, provide a value for the start position, and update the indication bit position."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Add LIN Unconditional Frames\u2192 Short Name \u2192 Length (bytes) \u2192 Save"}),"\n",(0,i.jsx)(n.li,{children:"Create PDU or Select PDU \u2192  Select PDU \u2192 Type \u2192 All the details of PDU are displayed \u2192  Short Name \u2192 Packing Byte order \u2192 Start Position \u2192 Update Indication \u2192 Save."}),"\n"]}),"\n",(0,i.jsx)("div",{class:"text--center",children:(0,i.jsx)("figure",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"LIN Unconditional Frame",src:a(3057).A+"",title:"- LIN Unconditional Frame",width:"1550",height:"923"}),"\r\n",(0,i.jsx)("figcaption",{children:"Fig. LIN Unconditional Frame"})]})})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},3057:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/image46-2af5221a353ef494cd42924e55fe2a50.webp"},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>s});var i=a(6540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);