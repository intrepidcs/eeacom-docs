---
title: FlexRay Frame Configuration in AUTOSAR ARXML - PDU and Data Management
description: Configure FlexRay Frames in AUTOSAR ARXML files to leverage high data rates and fault tolerance. Assign short names and lengths to frames, and manage PDUs by selecting types, defining packing byte orders, and updating indication positions for effective communication in time-triggered and event-triggered scenarios.
keywords: [FlexRay Frames, AUTOSAR ARXML, Communication Bus, High Data Rates, Fault Tolerance, PDU, Packing Byte Order, Short Name, Frame Length]
sidebar_position: 5
sidebar_label: FlexRay Frames
---

# 4.5 FlexRay Frames

FlexRay is a communication bus designed to ensure high data rates, fault tolerance, operating on a time cycle, split into static and dynamic segments for event-triggered and time-triggered communications.

1. Add FlexRay Frame→ Short Name → Length(bytes)→  Save
2. Create PDU or Select PDU →  Select  PDU Type –> Short Name –> Packing Byte Order (MOST SIGNIFICANT BIT FIRST, MOST SIGNIFICANT BYTE LAST and OPAQUE)--> Start Position –> Update Indication –> Save.  

<div class="text--center">

<figure>

![FlexRay Frame](../assets/image7.webp "- FlexRay Frame")
<figcaption>Fig. FlexRay Frame</figcaption>
</figure>
</div> 



