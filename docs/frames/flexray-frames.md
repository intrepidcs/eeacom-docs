---
title: "FlexRay Frame Configuration: PDU & Data Management in AUTOSAR"
description: Configure FlexRay frames in AUTOSAR ARXML for high data rates and fault tolerance. Manage frame names, lengths, PDUs, byte orders, and indication positions for efficient time and event-triggered communication.
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



