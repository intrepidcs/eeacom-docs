---
title: "Configuring Application Data Type (Array): AUTOSAR Arrays in EEA COM"
description: Configure Application Data Types (Array) in EEA COM for AUTOSAR systems. Define fixed or variable array sizes, set dimensions, and manage ECU data with flexible array structures.
keywords: [Application Data Type, Array, EEA COM, AUTOSAR, Array Size Semantics, Multidimensional Array, Primitive Type, ECU Data Management]
sidebar_position: 2
sidebar_label: "Application Data Type (Array)"
---

# 7.2 Application Data Type (Array)

The Application Data Type (Array) allows the creation, editing, and deletion of array types based on a specific application base type.

This data type describes an array of objects. The number of objects in the array is determined by setting a value for the "Max number of elements" attribute. Whether the array can vary in size is defined by the "Array size semantics" attribute. The actual content of an Application Array Data Type is specified by the component known as the Application Array Element (ARAF).
 
Create Array Data Type:
1. To create array type for any primitive or defined type, click on Add button. Fill the required details and save the type by clicking on save button.

2. Sample steps to create Array type is shown in below snap -

3. Add Application Data Types(Array) → Short Name → Size semantic (Fixed Size, Variable Size(Old) and Variable Size (New)), Dimension (One Dimensional and Multidimensional) →Save

<div class="text--center">

<figure>

![Application Data Type(Array)](../assets/image8.webp "- Application Data Type(Array)")
<figcaption>Fig. Application Data Type(Array)</figcaption>
</figure>
</div>


<div class="text--center">

<figure>

![Arxml File](../assets/image31.webp "- Arxml File")
<figcaption>Fig. Arxml File</figcaption>
</figure>
</div>