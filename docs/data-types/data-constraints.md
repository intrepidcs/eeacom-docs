---
title: "Configuring Data Constraints: AUTOSAR Data Setup in EEA COM"
description: Configure data constraints in EEA COM for AUTOSAR systems. Set physical and internal limits to ensure data integrity and optimize ECU communication performance.
keywords: [Data Constraints, EEA COM, AUTOSAR, Physical Constraints, Internal Constraints, Data Type Limits, ECU Data Management]
sidebar_position: 1
sidebar_label: "Data Constraints"
---

# 7.1 Data Constraints

A Data Constraint is used to decorate other data types with one or more constraints. Use the dataConstraintRef property of the Application DataType or Implementation DataType classes to access the reference string.

1. Add Data Constraints → Short Name → In Physical Constraint  → Lower and Upper Limit → Lower and Upper Limit Interval→ Validity(NOTAVAILABLE, NOT DEFINED, NOT VALID, VALID)→ Save Physical Constraints.

2. Add Internal Constraints → Short Name  → Lower and Upper Limit→ Lower and Upper Limit Interval → Validity(NOTAVAILABLE, NOT DEFINED, NOT VALID, VALID) → Save Internal Constraints.

<div class="text--center">

<figure>

![Data Constraints](../assets/image2.webp "- Data Constraints")
<figcaption>Fig. Data Constraints</figcaption>
</figure>
</div>

