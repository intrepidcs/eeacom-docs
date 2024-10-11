"use strict";(self.webpackChunkeeacom_docs=self.webpackChunkeeacom_docs||[]).push([[289],{1297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(4848),a=n(8453);const r={title:"LIN Event Triggered Frame Configuration in AUTOSAR ARXML - Efficient Data Handling",description:"Configure LIN Event Triggered Frames in AUTOSAR ARXML files to optimize data communication from multiple slave nodes without overloading the bus. Assign short names and lengths to event-triggered frames, select LIN Unconditional frames, and manage data updates efficiently while handling potential collisions.",keywords:["LIN Event Triggered Frames","AUTOSAR ARXML","Slave Nodes","Data Update","Frame Collision","Master Node","LIN Unconditional Frame","Short Name","Frame Length"],sidebar_position:4,sidebar_label:"LIN Event Triggered Frames"},s="4.4 LIN Event Triggered Frames",o={id:"frames/lin-event-triggered-frames",title:"LIN Event Triggered Frame Configuration in AUTOSAR ARXML - Efficient Data Handling",description:"Configure LIN Event Triggered Frames in AUTOSAR ARXML files to optimize data communication from multiple slave nodes without overloading the bus. Assign short names and lengths to event-triggered frames, select LIN Unconditional frames, and manage data updates efficiently while handling potential collisions.",source:"@site/docs/frames/lin-event-triggered-frames.md",sourceDirName:"frames",slug:"/frames/lin-event-triggered-frames",permalink:"/frames/lin-event-triggered-frames",draft:!1,unlisted:!1,editUrl:"https://github.com/intrepidcs/eeacom-docs/blob/main/docs/frames/lin-event-triggered-frames.md",tags:[],version:"current",lastUpdatedAt:1728649695e3,sidebarPosition:4,frontMatter:{title:"LIN Event Triggered Frame Configuration in AUTOSAR ARXML - Efficient Data Handling",description:"Configure LIN Event Triggered Frames in AUTOSAR ARXML files to optimize data communication from multiple slave nodes without overloading the bus. Assign short names and lengths to event-triggered frames, select LIN Unconditional frames, and manage data updates efficiently while handling potential collisions.",keywords:["LIN Event Triggered Frames","AUTOSAR ARXML","Slave Nodes","Data Update","Frame Collision","Master Node","LIN Unconditional Frame","Short Name","Frame Length"],sidebar_position:4,sidebar_label:"LIN Event Triggered Frames"},sidebar:"tutorialSidebar",previous:{title:"LIN Unconditional Frames",permalink:"/frames/lin-unconditional-frames"},next:{title:"FlexRay Frames",permalink:"/frames/flexray-frames"}},d={},l=[];function m(e){const t={h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"44-lin-event-triggered-frames",children:"4.4 LIN Event Triggered Frames"})}),"\n",(0,i.jsx)(t.p,{children:"The purpose of this method is to receive as much information from the slave nodes without overloading the bus with frames."}),"\n",(0,i.jsx)(t.p,{children:"An event triggered frame can be filled with the data from more than one slave node. A slave only updates the data in an event-triggered frame when the value has changed. If more than one slave wants to update data in the frame a collision occurs."}),"\n",(0,i.jsx)(t.p,{children:"The master should then send the frames to each of the slaves starting with the one with the highest priority.\r\nIn the below figure add the frames and assign a short name to the frame. Add and select the LIN Unconditional frame and save frame."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Add LIN Event Triggered Frames\u2192 Short Name \u2192 Length(Bytes) \u2192 Save."}),"\n",(0,i.jsx)(t.li,{children:"Add Frame \u2192 Select Frame \u2192 LIN Unconditional Frame \u2192 Save.(Remove Frame option is also available)"}),"\n"]}),"\n",(0,i.jsx)("div",{class:"text--center",children:(0,i.jsx)("figure",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"LIN Event Triggered Frame",src:n(5675).A+"",title:"- LIN Event Triggered Frame",width:"1449",height:"286"}),"\r\n",(0,i.jsx)("figcaption",{children:"Fig. LIN Event Triggered Frame"})]})})})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},5675:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/image40-e560de6efacb0e4303e37b5574869518.webp"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(6540);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);