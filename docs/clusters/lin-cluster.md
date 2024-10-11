---
title: "LIN Cluster Configuration in AUTOSAR ARXML - ECU Connector, Frame Triggering, and Schedule Tables"
description: Configure LIN Clusters in AUTOSAR ARXML files using EEA COM. Define LIN nodes, set ECU connectors, and manage frame triggering (sporadic, unconditional, and event-triggered) along with schedule tables for optimized LIN communication.
keywords: [LIN Cluster, AUTOSAR ARXML, LIN Nodes, LIN Master, LIN Slave, LIN Bus, LIN Frame Triggering, ECU Connector, Schedule Tables, Baudrate, PNC Gateway, LDF, LIN Checksum]
sidebar_position: 3
sidebar_label: LIN Cluster
---

# 2.3 LIN Cluster

A LIN cluster is defined as a number of LIN nodes connected through a physical cable. LIN clusters consist of 1 master and up to 16 slave nodes.The LIN bus connects a single master device (ECU/node) and one or more slave devices (ECU/nodes) together in a LIN cluster. All Signals in a LIN Cluster are defined in the LIN Description File(LDF).

1. Add LIN cluster→ Short Name → Baudrate(Bits/s) → Protocol Name → Protocol Version → Speed → Save.

2. LIN Cluster sub points ECU connector, Frame Triggerings and Schedule Table.

<div class="text--center">

<figure>

![LIN Cluster](../assets/image25.webp "- LIN Cluster")
<figcaption>Fig. LIN Cluster</figcaption>
</figure>
</div>

## 2.3.1 ECU Connector {#ecu-connector}

1. Add ECU → Connector Type (Master or slave) → Connector → PNC Gateway Type(Active,None and Passive)→ Initial Nad → Save.

2. Connector and controller two parts are there. Controller part Controller Type → Wakeup By Controller Supported (True or false) → Protocol version –> Configured Nad –> Function Id → Supplier Id → variant Id → Save.

<div class="text--center">

<figure>

![ECU Connector in LIN Cluster](../assets/image37.webp "- ECU Connector in LIN Cluster")
<figcaption>Fig. ECU Connector in LIN Cluster</figcaption>
</figure>
</div>

## 2.3.2 Frame Triggering {#frame-triggering} 

1. Add Frame or select Frames (LIN Sporadic Frames, LIN Unconditional Frames and LIN Event Triggered Frames) → Short Name → Frame Type → Identifier → LIN Checksum(Classic and Enhanced) → Tx ECU → Rx ECU →Save.

2. Frame Triggering Details → ECU Port(Here we select Tx and Rx ECUs) → Frame Details available.

<div class="text--center">

<figure>

![Frame Triggering in  LIN Cluster](../assets/image43.webp "Frame Triggering in - LIN Cluster")
<figcaption>Fig. Frame Triggering in  LIN Cluster</figcaption>
</figure>
</div> 

## 2.3.3 Schedule Tables {#schedule-tables}

1. Add schedule table → Short Name → Resume Position→ Run mode→ Save. Add Entry→ Select LIN Frame Triggering→ Enter Type→ Position in Table→ Delay → Save.

<div class="text--center">

<figure>

![Schedule Table in  LIN Cluster](../assets/image22.webp "Schedule Table in - LIN Cluster")
<figcaption>Fig. Schedule Table in LIN Cluster</figcaption>
</figure>
</div> 