---
title: Switch Configuration in AUTOSAR
description: Learn to configure switches in AUTOSAR using Coupling Elements that connect ECU Instances to Ethernet Channels (VLANs). Define switch types, configure Coupling Ports, and manage VLAN memberships for optimal communication in Ethernet Clusters.
keywords: [AUTOSAR, Switch Configuration, Coupling Elements, Ethernet Clusters, VLANs, ECU Communication]
sidebar_position: 11
sidebar_label: Switches
---

# Switches

## 10.1 Coupling Elements {#coupling-elements}

A CouplingElement is used to connect EcuInstances via CouplingPorts to EthernetPhysicalChannels (VLANs) that are defined within an EthernetCluster. 

CouplingElements can reach from a simple hub to a complex managed switch or even devices with functionalities in higher layers.

A CouplingElement references the EthernetCluster and contains a collection of available CouplingPorts. The couplingType identifies the CouplingElement as a switch, hub or router.

1. Add Number of  Switches→ Short Name →  Switch Type( HUB,ROUTER,SWITCH) → Cluster Name → Select Ethernet Cluster→ ECU Name → Select ECU → Save.

2. Add Number of Coupling Ports→  Short Name→ Connection Negotiation Behavior (AUTO, MASTER,SLAVE)→Coupling Port Role (HOSTPORT, STANDARD PORT, UPLINK PORT)→ Coupling Port Speed → MAC Layer Type(XMII, XGMII, XXGMII)→Physical Layer Type→ Receive Activity(DROP UNTAGGED, FORWARDASIS) → Save.

3. Add Number of VLAN Memberships → Select VLAN Channel → Default Priority (0 to 7) → Send Activity ( NOTSENT, SENT TAGGED, SENTUNTAGGED)→ Channel Name → VLAN Identifier → Save.

<div class="text--center">

<figure>

![Switches(Coupling Elements)](./assets/image62.webp "- Switches (Coupling Elements)")
<figcaption>Fig. Switches(Coupling Elements) </figcaption>
</figure>
</div>