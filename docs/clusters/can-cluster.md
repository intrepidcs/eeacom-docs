---
title: "CAN/CAN FD Cluster Management in AUTOSAR ARXML Files - ECU Connectors and Frame Triggering"
description: Learn how to manage CAN/CAN FD Cluster information in AUTOSAR ARXML files using EEA COM. Add, edit, and delete clusters, configure ECU connectors, set frame triggering, and manage CAN frame identifiers with ease.
keywords: [CAN, CAN FD, CAN Cluster, AUTOSAR ARXML, ECU Connectors, Frame Triggering, Baud Rate, CAN Frames, PNC Gateway Type, EEA COM, automotive communication]
sidebar_position: 1
sidebar_label: CAN/CAN FD Cluster
---

# 2.1 CAN/CAN FD Cluster

To view the CAN Cluster information, select CAN, and EEA COM will display all the related details as shown in the screenshot below. EEA COM provides the ability to add, edit, and delete cluster information in AUTOSAR ARXML files.

fig

We can add multiple clusters and assign values to the following parameters: short name, Baud Rate (bits/s), protocol names (e.g., TCP and UDP), speed, and CAN FD Baud Rate (bits/s).

## 2.1.1  ECU Connectors {#ecu-connectors}

We can add ECUs and fill in the information related to them. There are two parts: the connector and the controller. Please select the PNC Gateway Type (Active, Passive, or None).

fig

## 2.1.2 Frame Triggerings {#frame-triggerings} 

Add CAN frames and select CAN frames. For frame triggering details, assign the identifier in hexadecimal format (for example, 0x164). Choose the CAN frames that meet the specified requirements. In the ECU ports, select both Tx and Rx ECUs. Ensure that all information related to the frame is available in the Frame Details section. 

fig