---
title: "LIN Sporadic Frame Configuration: Dynamic Behavior & Signal Management"
description: Configure LIN sporadic frames in AUTOSAR ARXML with dynamic behavior. Add frames, manage IDs, and ensure accurate signal transmission for efficient LIN communication.
keywords: [LIN Sporadic Frames, AUTOSAR ARXML, Dynamic Behavior, Signal Management, Short Name, Frame Length, Slave Task, Master Node, Frame ID]
sidebar_position: 2
sidebar_label: LIN Sporadic Frames
---

# 4.2 LIN Sporadic Frames
Sporadic frames attempt to provide some dynamic behavior to LIN. Sporadic frames always carry signals (data), and their IDs. Only the slave task associated with the master node can send sporadic frames.

In the figure below, you can add frames, giving each frame a short name and assigning a Length (in bytes) value. Options to add or remove frames are available. After selecting the frame, ensure to save your changes.

<div class="text--center">

<figure>

![LIN Sporadic Frame](../assets/image20.webp "- LIN Sporadic Frame")
<figcaption>Fig. LIN Sporadic Frame</figcaption>
</figure>
</div> 
