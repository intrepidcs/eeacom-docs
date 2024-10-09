---
title: LIN Sporadic Frame Configuration in AUTOSAR ARXML - Dynamic Behavior and Signal Management
description: Configure LIN Sporadic Frames in AUTOSAR ARXML files to introduce dynamic behavior in your LIN communication. Add frames with specific short names and lengths, and manage frame IDs to ensure proper data handling. Utilize options to add or remove frames while maintaining accurate signal transmission.
keywords: [LIN Sporadic Frames, AUTOSAR ARXML, Dynamic Behavior, Signal Management, Short Name, Frame Length, Slave Task, Master Node, Frame ID]
sidebar_position: 2
sidebar_label: LIN Sporadic Frames
---

# 4.2 LIN Sporadic Frames
Sporadic frames attempt to provide some dynamic behavior to LIN. Sporadic frames always carry signals (data), and their IDs. Only the slave task associated with the master node can send sporadic frames.

In the figure below, you can add frames, giving each frame a short name and assigning a Length (in bytes) value. Options to add or remove frames are available. After selecting the frame, ensure to save your changes.

fig
