---
title: "Ethernet Cluster Configuration in AUTOSAR ARXML Files - VLANs, MAC Multicast, and SOME/IP Service"
description: Configure Ethernet Clusters in AUTOSAR ARXML files with EEA COM, including MAC Multicast Addresses, VLANs, Network Endpoints, Socket Connections, and SOME/IP Services. Add ECUs, setup socket addresses, and manage PDU details for optimal network performance.
keywords: [Ethernet Cluster, AUTOSAR ARXML, MAC Multicast Address, VLANs, Network Endpoint, ECU Connectors, Socket Connections, SOME/IP Service, multicast, PDU, ECU, IP Address, Baudrate, IEEE 802.3]
sidebar_position: 2
sidebar_label: Ethernet Cluster
---

# 2.2 Ethernet Cluster

Ethernet cluster is a group of ECUs interconnected via ethernet protocol (IEEE 802.3).
To access the Ethernet Cluster window, click on Ethernet →  Ethernet Cluster → Short Name → Baudrate(bits/s)→ Protocol Name→ Protocol Version → Speed →  Save.

fig

## 2.2.1 MAC Multicast Address {#mac-multicast-address}

An Ethernet multicast MAC address identifies receivers that belong to the same multicast group at the data link layer. Let’s assign a short name to the MAC multicast address.

Short Name: MulticastAddr1 <br/>
MAC Multicast Address: 01:22:96:45:12:06 <br/>
This multicast address is now saved as MulticastAddr1 with the value 01:22:96:45:12:06.

## 2.2.2 Coupling Port Connections {#coupling-port-connections}

Add and select the first and second coupling ports. All the parameter details are provided for both the first and second ports. Please note that the Connection Negotiation Behavior of the first and second ports cannot be the same.

## 2.2.3 VLANs {#vlans}

VLANs (Virtual LAN) can be created by assigning a VLAN ID (which is a valid hexadecimal value) and a VLAN name. 

### 2.2.3.1 Network Endpoint {#network-endpoint}

An “endpoint” is a logical point that communicates back and forth with a network to which it is connected. In a network, it represents the endpoint for traffic associated with a specific protocol layer. An IP endpoint sends and receives packets to and from specific IP addresses.    

fig

1. Assign a short name to the address type (IPv4 or IPv6) → IP address (for example IPv4 → 192.0.2.146 or IPv6 →  2001:db8:3333:4444:CCCC:DDDD:EEEE:FFFF) → Save it.

2. Network Endpoint required parameters are Short Name → Type(IPv4 and IPv6) → IPv4Address → IPv4addresssource (AUTOIP, AUTOIPDOIP, AUTOIPDHCPV4 , DHCPV4,FIXED) –> Network Mask → TTL → IP address Keep Behavior(FORGET,STORPERSISTENTLY) → Default Gateway → Assignment Priority(0 to 7 in between) → Save.

### 2.2.3.2 ECU Connectors {#ecu-connectors}

fig

We can add multiple ECUs. ECU → Connector →  PNC Gateway Type(Active,None and Passive) → Maximum Transmission Unit → Path MTU Timeout→ Save it.

### 2.2.3.3 Socket Addresses {#socket-addresses}

1. Add Socket Address → Short Name → Port Type → Type(Unicast or Multicast) →  Port Number → ECUs → Address Type → IP Address →Save.
   
2.  Select Unicast ECU or Select Multicast ECU→ Select Network Endpoint → save.

fig

### 2.2.3.4 Socket Connections {#socket-connections}

1. Add Socket Connections → Select Server Port → Port Type (UDP, TCP, HTTP, IEEE1722, GENERIC) → Cast Type → Port Number → ECUs → Address Type→ IP Address → Save.

2. PDUs → Select PDU → Header Id –> PDU Collection Semantics (LASTISBEST or QUEUED) → PDU collection   Trigger (ALWAYS or NEVER)→ Select ECU Tx Port → Select ECU Rx Port → All the PDU Details available in PDU Details section.

3. Client Ports  Add Client Port → Select Client Port → Short Name → Port Type → Port Number → ECU →Address Type → IP Address → Provided Services → Save PDUs → Select PDU → PDU Header Details→Header Id → PDU Collection Semantics → PDU Collection Trigger → ECU Port → Select Tx and Rx ECU Port → PDU Details are available → Save it. 

##### 2.2.3.4.1 Service Discovery {#service-discovery}

1. Add → ECU Name → SD Type → IP Address → Port Address → Save Number of Service Discoveries.

fig

## 2.2.4 SOME/IP Service {#some-ip-service}

1. ECU→ Service  Add Number of consumed Service Instances → Select Consumer → Save.

2. Consumer Service Details  
    Add Method→ Method Name → Method ID → Select Method Type → Select Request PDU→Select Response PDU → Select Provider Port → Select Required Port →Save. 

fig

3. Method Details→ Min value → Max Value → Enter Value→ Simulation (Python vspyx someip simulation).(Note   Please Connect Devices and Fill the required Details).

4. Add Event→ Name→ Event ID → Event Handler → Select PDU → Select   Provider   Port → Select Required Port→ Save. 

fig

5. Event Details→  Min value→ Max Value → Enter Value → Simulation (Python vspyx someip simulation).(Note   Please Connect Devices and Fill the required Details).

6. Event Group → Add→ Name → Event Group Identifier→ Instance Identifier → Priority → Events → Save .	
