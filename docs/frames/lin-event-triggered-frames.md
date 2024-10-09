---
title: LIN Event Triggered Frame Configuration in AUTOSAR ARXML - Efficient Data Handling
description: Configure LIN Event Triggered Frames in AUTOSAR ARXML files to optimize data communication from multiple slave nodes without overloading the bus. Assign short names and lengths to event-triggered frames, select LIN Unconditional frames, and manage data updates efficiently while handling potential collisions.
keywords: [LIN Event Triggered Frames, AUTOSAR ARXML, Slave Nodes, Data Update, Frame Collision, Master Node, LIN Unconditional Frame, Short Name, Frame Length]
sidebar_position: 4
sidebar_label: LIN Event Triggered Frames
---

# 4.4 LIN Event Triggered Frames

The purpose of this method is to receive as much information from the slave nodes without overloading the bus with frames. 

An event triggered frame can be filled with the data from more than one slave node. A slave only updates the data in an event-triggered frame when the value has changed. If more than one slave wants to update data in the frame a collision occurs. 

The master should then send the frames to each of the slaves starting with the one with the highest priority.
In the below figure add the frames and assign a short name to the frame. Add and select the LIN Unconditional frame and save frame.

1. Add LIN Event Triggered Frames→ Short Name → Length(Bytes) → Save.
2. Add Frame → Select Frame → LIN Unconditional Frame → Save.(Remove Frame option is also available)

fig