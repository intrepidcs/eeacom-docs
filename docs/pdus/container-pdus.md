---
title: "Container PDU Configuration: Metadata & Trigger Management in AUTOSAR"
description: Configure Container PDUs in AUTOSAR ARXML by defining parameters like names, lengths, metadata, and timeouts. Manage triggers and ECUs for optimal communication and use collection semantics for efficient data handling.
keywords: [Container, PDU, AUTOSAR ARXML, Short Name, Length, Meta Data Length, Container Timeout, Container Trigger, Header Type, Rx ECU, Tx ECU, Collection Semantics]
sidebar_position: 3
sidebar_label: "Container I PDUs"
---

# 5.3 Container I PDUs

1. Add Container I PDU → Short Name → Length → Meta Data Length → Container Timeout → Container Trigger → Header Type → Rx Accept Contained I PDU → Threshold Size → Save.
   
2. Add → Select PDU→ Select Cluster →Select RxECUs → Select TxECUs →Select PDUs → Cluster Name → Channel Name → PDU Name → Long Header → Short Header → Timeout → Trigger(ALWAYS and NEVER)→Collection Semantics (LAST BEST and QUEUED) → Save.

<div class="text--center">

<figure>

![Container I PDUs](../assets/image6.webp "- Container I PDUs")
<figcaption>Fig. Container I PDUs</figcaption>
</figure>
</div>