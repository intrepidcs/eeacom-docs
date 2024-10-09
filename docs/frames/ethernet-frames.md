---
title: Ethernet Frame Configuration in AUTOSAR ARXML - PDU and Data Structure Management
description: Configure Ethernet Frames in AUTOSAR ARXML files by defining short names and lengths. Manage PDUs by selecting types, specifying packing byte orders, and updating indication positions. Understand the structure of Ethernet frames, including headers, data, and Frame Check Sequence (FCS), for effective communication in networked environments.
keywords: [Ethernet Frames, AUTOSAR ARXML, MAC Addresses, Frame Check Sequence, PDU, Packing Byte Order, Short Name, Frame Length]
sidebar_position: 6
sidebar_label: Ethernet Frames
---

# 4.6 Ethernet Frames

An Ethernet frame starts with a header, which contains the source and destination MAC addresses, among other data. The middle part of the frame is the actual data. The frame ends with a field called Frame Check Sequence (FCS).

1. Add Ethernet Frame → Short Name → Length(bytes)→ Save.
2. Create PDU or Select PDU →  Select  PDU Type → Short Name →Packing Byte Order (MOST SIGNIFICANT BIT FIRST, MOST SIGNIFICANT BYTE LAST and OPAQUE)→ Start Position → Update Indication → Save.

fig