---
title: "Configuring Compute Methods: Linear, State Encoded & Scale-Linear in EEA COM"
description: Configure compute methods in EEA COM to transform raw ECU data into physical values. Use methods like Identical, Linear, State Encoded, and Scale Linear for customized data conversion.
keywords: [Compute Method, Linear Transformation, State Encoded, Scale Linear, Bit Field State Encode, AUTOSAR, EEA COM, ECU Data Conversion, Raw to Physical Values]
sidebar_position: 3
sidebar_label: "Compute Method"
---

# 7.3 Compute Method

Compute method or computation method in short is used to transform the fixed point values in software into physical values which can be floating point values.

There are mainly three categories of compute methods:
(Identical,Linear,state encoded,Scale linear,Scale linear and state encoded Bit field state encode and Rat function)
1. Linear: This type of Compu method is used when the value to be converted is of linear type. During configuration, we have to give ranges of raw values. Like minimum this value can be, maximum this value can go,Factor (which is the multiplication factor or its also called gain),Offset value.
   
2. Text Table: It is the most simple type of compute method. It is a table of numerical values which represent some text which has some meaning.

3. Scale-Linear: It is a table of linear compute methods.  
Add Compute Method→ Short Name→ Type (Identical, Linear, State Encoded, Scale Linear, Scale Linear and State Encoded, Bit Field State Encode and Rat Function) → Unit →Save.

<div class="text--center">

<figure>

![Compute Methods](../assets/image54.webp "- Compute Methods")
<figcaption>Fig. Compute Methods</figcaption>
</figure>
</div>

