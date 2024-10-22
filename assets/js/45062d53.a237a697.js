"use strict";(self.webpackChunkeeacom_docs=self.webpackChunkeeacom_docs||[]).push([[5322],{1435:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=r(4848),i=r(8453);const s={title:"FlexRay Cluster Configuration: Channels, Frame Triggering, & ECU Connectors",description:"Learn how to configure FlexRay Clusters in AUTOSAR ARXML files using EEA COM. Define FlexRay channels, manage frame triggering, set ECU connectors, and configure communication cycles for efficient FlexRay communication.",keywords:["FlexRay Cluster","AUTOSAR ARXML","FlexRay Channels","Frame Triggering","ECU Connector","Message ID","Communication Cycle","Tx ECU","Rx ECU","Baudrate","Protocol Version"],sidebar_position:4,sidebar_label:"FlexRay Cluster"},l="2.4 FlexRay Cluster",a={id:"clusters/flexray-cluster",title:"FlexRay Cluster Configuration: Channels, Frame Triggering, & ECU Connectors",description:"Learn how to configure FlexRay Clusters in AUTOSAR ARXML files using EEA COM. Define FlexRay channels, manage frame triggering, set ECU connectors, and configure communication cycles for efficient FlexRay communication.",source:"@site/docs/clusters/flexray-cluster.md",sourceDirName:"clusters",slug:"/clusters/flexray-cluster",permalink:"/clusters/flexray-cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/intrepidcs/eeacom-docs/blob/main/docs/clusters/flexray-cluster.md",tags:[],version:"current",lastUpdatedAt:1729594159e3,sidebarPosition:4,frontMatter:{title:"FlexRay Cluster Configuration: Channels, Frame Triggering, & ECU Connectors",description:"Learn how to configure FlexRay Clusters in AUTOSAR ARXML files using EEA COM. Define FlexRay channels, manage frame triggering, set ECU connectors, and configure communication cycles for efficient FlexRay communication.",keywords:["FlexRay Cluster","AUTOSAR ARXML","FlexRay Channels","Frame Triggering","ECU Connector","Message ID","Communication Cycle","Tx ECU","Rx ECU","Baudrate","Protocol Version"],sidebar_position:4,sidebar_label:"FlexRay Cluster"},sidebar:"tutorialSidebar",previous:{title:"LIN Cluster",permalink:"/clusters/lin-cluster"},next:{title:"J1939 Cluster",permalink:"/clusters/j1939-cluster"}},o={},c=[{value:"2.4.1 Channels",id:"channels",level:2}];function d(e){const n={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"24-flexray-cluster",children:"2.4 FlexRay Cluster"})}),"\n",(0,t.jsx)(n.p,{children:"FlexRay Cluster A system consists of a set of nodes that concurrently execute a distributed real-time application. The nodes communicate by sending and receiving messages over a dedicated communication channel. The nodes and the communication channel form a cluster."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Add FlexRay Cluster\u2192 Short Name \u2192 Baudrate(bits/s) \u2192 Protocol Name\u2192 Protocol Version \u2192 Speed \u2013> Save."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"channels",children:"2.4.1 Channels"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add channel1 and channel2\u2192 Channel Name (Channel A and B) \u2192 Save."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add Frame Triggering \u2192  Select FlexRay Frame \u2192 Message ID \u2192 Tx ECU \u2192 Rx ECU \u2192 Save."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Frame Triggering Details \u2192 Message ID \u2192 Allow Dynamic L SDU Length (True or false) \u2192 Payload Preamble Indicator (True or False) \u2192 Add Scheduling Timing \u2192 Communication Cycle Type (Counter or Repetition) \u2192 Slot ID \u2192 Cycle Counter\u2192Base Cycle \u2192 Cycle Repetition \u2192 Save."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"ECU PORT \u2192 Add Tx ECU \u2192 Rx ECU  \u2192 Save"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"All the information of the frame is available in the Frame Details Section."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add ECU Connector \u2192 Select ECU \u2192 Channel \u2192Connector and Controller Fill the details \u2192  Save it."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("div",{class:"text--center",children:(0,t.jsx)("figure",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"FlexRay Cluster",src:r(9961).A+"",title:"- FlexRay Cluster",width:"1551",height:"422"}),"\r\n",(0,t.jsx)("figcaption",{children:"Fig. FlexRay Cluster"})]})})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},9961:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/image59-d3d8d430fd8005f5d1f6642e3b0188b3.webp"},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var t=r(6540);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);