---
title: Gateway Configuration in AUTOSAR
description: Discover how to configure gateways in AUTOSAR, which facilitate communication between multiple Communication Clusters through Frame Mapping, IPDU Mapping, and ISignal Mapping functions. Learn the steps to add gateways, set PDU mappings, and manage configurations for optimal data transfer between source and target channels. Enhance your knowledge of communication architectures in the AUTOSAR framework.
keywords: [AUTOSAR, Gateway Configuration, Frame Mapping, IPDU Mapping, ISignal Mapping, Communication Clusters]
sidebar_position: 12
sidebar_label: Gateway
---

# Gateway

A gateway is a function within an EcuInstance that performs as a FrameMapping, IPduMapping or ISignalMapping function between two or more CommunicationClusters.

1. Add Number of Gateways → Short Name → Select ECU→ Save Number of Gateways.

2. Add → Select PDU Mapping→ PDU Max Length → PDUR TP Chunk Size →Select Source Cluster → Select Source Channel →Select Source PDU→ Select Target Cluster→ Select Target Channel → Select Target PDU → Save Number of Contained | PDUs.

<div class="text--center">

<figure>

![Gateway](./assets/image45.webp "- Gateway")
<figcaption>Fig. Gateway</figcaption>
</figure>
</div>
