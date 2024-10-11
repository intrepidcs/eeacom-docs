---
title: Configuring Data Constraints in EEA COM - AUTOSAR Data Constraints Setup
description: Configure data constraints in EEA COM for AUTOSAR systems. Define physical and internal constraints for data types, including upper and lower limits and validity parameters. Efficiently manage data integrity and system constraints to optimize ECU communication and performance.
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

