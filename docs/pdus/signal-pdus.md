---
title: "Signal & PDU Configuration: Creation & Management in AUTOSAR"
description: Create and manage signals and PDUs in AUTOSAR ARXML. Define names, lengths, and delays, and manage signal properties like base types, data constraints, and transformations for effective communication.
keywords: [Signal, PDU, AUTOSAR ARXML, Short Name, Length, Minimum Delay, Base Type, Compute Method, Data Constraint, Implementation Data Type, Data Transformation]
sidebar_position: 1
sidebar_label: "Signal I PDUs"
---

# 5.1 Signal I PDUs 

The Signal I PDUs assembled and disassembled in AUTOSAR COM consists of one or more signals. In case no multiplexing is performed this I PDU is routed to/from the Interface Layer.

A maximum of one dynamic length signal per IPdu is allowed.

Steps to create I Signals I PDU is shown in below snap -

<div class="text--center">

<figure>

![Signal I PDUs](../assets/image44.webp "- Signal I PDUs")
<figcaption>Fig. Signal I PDUs</figcaption>
</figure>
</div> 

1. Add I Signal I PDUs → Short Name → Length(Bytes) → Minimum Delay (seconds)  –>  Save.
2. Create Signal or Select Signal → Short Name → Length(bits) → Description→ Unit →Save.
3. Base Type,Compute Method, Data Constraint, Implementation Data Type and Data Transformation Select one and fill the data accordingly.

