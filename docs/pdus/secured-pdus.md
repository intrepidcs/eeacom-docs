---
title: Secured PDU Configuration in AUTOSAR ARXML - Enhanced Communication Security
description: Configure Secured Protocol Data Units (PDUs) in AUTOSAR ARXML files, defining parameters such as short names, lengths, and metadata lengths. Specify cryptographic properties, secure communication settings, and authentication algorithms to enhance data security. Manage payload and freshness properties to ensure secure and reliable communication across automotive networks.
keywords: [Secured PDU, AUTOSAR ARXML, Short Name, Length, Meta Data Length, Cryptographic PDU, Secure Communication, Authentication, Freshness Properties]
sidebar_position: 9
sidebar_label: "Secured | PDUs"
---

# 5.9 Secured | PDUs

1. Add  Secured I PDU→ Short Name → Length → Meta DataLength → Has Dynamic Length(True and False)→ Use As Cryptographic I PDU(True and False) → Use Secured PDU Header→ Save.

2. Secure Communication Props

3. Payload  
    Add Payload→ Select Payload → Select Cluster → Select Channel  → Select PDU→ Save.

4. Authentication Props  
    Add → Select Secure Authentication Props→ Category → Auth Algorithm → Auth Info Tx Length → Save.

5. Freshness Props  
    Add→ Select Secure Freshness Props→ Category → Freshness Counter Sync Attempts→ Freshness Time Stamp Time Period Factor→ Freshness Value Length → Freshness Value Tx Length → Use Freshness Timestamp → Save.

fig 

fig

fig