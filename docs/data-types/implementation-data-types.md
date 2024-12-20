---
title: Creating and Defining Implementation Data Types in EEA COM
description: Define Implementation Data Types in EEA COM. Choose from types like Value, Array, and Structure, referencing Base Types and applying Compute Methods for refined ECU data handling.
keywords: [Implementation Data Type, Base Type, Data Constraints, Compute Method, Array, Structure, Type Reference, EEA COM, Linear Equation, Raw Value, Denominator]
sidebar_position: 5
sidebar_label: "Implementation Data Type"
---

# 7.5 Implementation Data Type

Implementation Data Types is a very generic container and can define almost any data type.In its simplest form, an implementation data type is just a reference to a Base Type with optional data constraint and compute Method.

1. Add Implementation Data Type → Short Name → Type (Value,  Array,Structure and Type_Reference ) → We select Value.

2. Base Type   Select Base Type → All The details are shown → Save.

3. Compute Method  Create Compute Method or Select Compute Method → Short Name→ Type (We select Linear)→ Unit → Linear Equation → Raw Value → Denominator(*) → Save.

4. Data Constraint  Select Data Constraint or Select Data Constraint → All the  details of Selected Data Constraint is available (Displayed) → Save.

5. If we select Array Type  Short Name -> Size Semantic -> Dimension Type→        Array Size→ Data Type → Referenced Data Type → Save.

6.  If we select STRUCTURE → Short Name → Type → Elements → Add Value Element → Add Array Element → Add Struct Element → Add Type Reference Element → Save.

<div class="text--center">

<figure>

![Implementation Data Type](../assets/image61.webp "- Implementation Data Type")
<figcaption>Fig. Implementation Data Type</figcaption>
</figure>
</div>