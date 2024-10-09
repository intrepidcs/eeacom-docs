---
title: Multiplexed PDU Configuration in AUTOSAR ARXML - Advanced Data Handling
description: Configure Multiplexed Protocol Data Units (PDUs) in AUTOSAR ARXML files with detailed parameters such as short names, lengths, and selector field configurations. Define trigger modes and manage both dynamic and static parts to enhance data handling efficiency. Set segment byte orders and lengths for precise multiplexing, ensuring effective communication across automotive networks.
keywords: [Multiplexed PDU, AUTOSAR ARXML, Short Name, Length, Selector Field, Trigger Mode, Dynamic Part, Static Part, Segment Length, Signal Management]
sidebar_position: 6
sidebar_label: "Multiplexed | PDUs"
---

# 5.6 Multiplexed | PDUs

fig

1. Add Multiplexed I PDU → Short Name → Length(bytes)→ Selector Field Byte Order( MOST SIGNIFICANT BIT FIRST, MOST SIGNIFICANT BYTE LAST and OPAQUE) →  Selector Field  Length(bits) →  Selector Field  start Position →Trigger Mode (DYNAMIC PART TRIGGER,STATIC OR DYNAMICPORT 
TRIGGER, STATIC PORT TRIGGER and NONE) → Dynamic part and Static Part.Dynamic Part  Number of Segment Byte Order( MOST SIGNIFICANT BIT FIRST, MOST SIGNIFICANT BYTE LAST and OPAQUE) →  Segment Length(bits) → Segment Position → Save.

2. Add Number of Alternative → Select I Signal I PDU →Initial Dynamic part → Selector Field Code -> PDU → Save. 

3. Static Part Number of Segment Byte Order( MOST SIGNIFICANT BIT FIRST, MOST SIGNIFICANT BYTE LAST and OPAQUE)→  Segment Length(bits) →Segment Position → Select PDU→ Select I Signal I PDU → Save.