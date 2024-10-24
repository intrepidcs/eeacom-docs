---
title: "Secured PDU Configuration: Enhanced Communication Security in AUTOSAR"
description: Configure secured PDUs in AUTOSAR ARXML by defining names, lengths, and metadata. Specify cryptographic properties and manage payload and freshness for secure communication in automotive networks.
keywords: [Secured PDU, AUTOSAR ARXML, Short Name, Length, Meta Data Length, Cryptographic PDU, Secure Communication, Authentication, Freshness Properties]
sidebar_position: 9
sidebar_label: "Secured I PDUs"
---

# 5.9 Secured I PDUs

1. Add  Secured I PDU→ Short Name → Length → Meta DataLength → Has Dynamic Length(True and False)→ Use As Cryptographic I PDU(True and False) → Use Secured PDU Header→ Save.

2. Secure Communication Props

3. Payload  
    Add Payload→ Select Payload → Select Cluster → Select Channel  → Select PDU→ Save.

4. Authentication Props  
    Add → Select Secure Authentication Props→ Category → Auth Algorithm → Auth Info Tx Length → Save.

5. Freshness Props  
    Add→ Select Secure Freshness Props→ Category → Freshness Counter Sync Attempts→ Freshness Time Stamp Time Period Factor→ Freshness Value Length → Freshness Value Tx Length → Use Freshness Timestamp → Save.

<div class="text--center">

<figure>

![Secured I PDUs](../assets/image1.webp "- Secured I PDUs")
<figcaption>Fig. Secured I PDUs</figcaption>
</figure>
</div> 

<div class="text--center">

<figure>

![Payload in Secured I PDUs](../assets/image52.webp "- Payload in Secured I PDUs")
<figcaption>Payload in Secured I PDUs</figcaption>
</figure>
</div>

<div class="text--center">

<figure>

![Freshness Props In Secured I PDUs](../assets/image34.webp "- Freshness Props In Secured I PDUs")
<figcaption>Fig. Freshness Props In Secured I PDUs</figcaption>
</figure>
</div>