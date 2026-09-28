import type { TopicNote } from "@/content/types";

export const unit3Notes: Record<string, TopicNote> = {
  "Introduction to Combinational Logic": {
    selfTest: [
      "What does the output of a combinational circuit depend on?",
      "How is a combinational circuit different from a sequential circuit?",
      "A combinational circuit has 3 inputs. How many rows does its truth table have?",
    ],
    body: `**Definition.** A **combinational logic circuit** is a digital circuit whose outputs at any instant depend **only on the present combination of inputs**. It has no memory, so past inputs have no effect on the current output.

**Explanation.** A combinational circuit is built from logic gates connected without any feedback paths. It can be shown as a block with n input variables and m output variables. Since each input can be 0 or 1, there are 2ⁿ possible input combinations, and for each combination there is exactly one output value. So the circuit can be fully described by a truth table with 2ⁿ rows, or by m Boolean functions (one for each output).

Key characteristics:

- **No memory elements.** It contains only gates, not flip-flops or latches.
- **No feedback.** Outputs are not connected back to inputs.
- **Instant response.** The output changes as soon as the inputs change, apart from a small propagation delay through the gates.
- **Fully described by a truth table** or a set of Boolean equations.

**Combinational vs sequential circuits.**

| Point | Combinational | Sequential |
|---|---|---|
| Output depends on | Present inputs only | Present inputs and past state |
| Memory | None | Has memory (flip-flops) |
| Feedback | No | Yes |
| Clock | Not needed | Usually needed |
| Examples | Adder, MUX, decoder, encoder | Flip-flop, counter, register |

**Example.** A half adder is combinational: whenever A = 1 and B = 1 are applied, the outputs are always Sum = 0 and Carry = 1, no matter what inputs were applied before. Other common combinational circuits are full adders, subtractors, comparators, code converters, multiplexers, demultiplexers, encoders and decoders.

**How it's asked in exams.** *"What is a combinational circuit? Differentiate it from a sequential circuit"* (4–6 marks). Give the definition, draw the block diagram with n inputs and m outputs and explain it, list the characteristics, then write a 4–5 point comparison table with examples. End with a sentence noting that combinational circuits form the arithmetic and data-routing parts of every computer.`,
  },

  "Design Procedure": {
    selfTest: [
      "List the steps for designing a combinational circuit.",
      "Why is a K-map used during the design procedure?",
      "Design a circuit with three inputs whose output is 1 when the majority of inputs are 1.",
    ],
    body: `**Definition.** The **design procedure** of a combinational circuit is the systematic sequence of steps used to go from a word statement of a problem to a final logic diagram.

**Explanation.** The standard steps are:

1. **State the problem** clearly in words.
2. **Determine the number of inputs and outputs** required, and assign a letter symbol to each.
3. **Derive the truth table** that defines the relationship between inputs and outputs for all 2ⁿ combinations.
4. **Obtain the simplified Boolean function** for each output, using a K-map or Boolean algebra.
5. **Draw the logic diagram** from the simplified expressions.
6. **Verify** the design by checking the circuit against the truth table (by analysis or simulation).

Simplification in step 4 matters because it reduces the number of gates and inputs, which lowers cost, power use and propagation delay.

**Example (3-input majority circuit).**

Step 1–2: Inputs A, B, C; output F. F = 1 when two or more inputs are 1.

Step 3: Truth table

| A | B | C | F |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |

So F = Σm(3, 5, 6, 7).

Step 4: On the three-variable K-map, three pairs cover all the 1s:

- m₃ and m₇ → **BC**
- m₅ and m₇ → **AC**
- m₆ and m₇ → **AB**

Simplified function: **F = AB + BC + AC**

Step 5: The logic diagram uses three 2-input AND gates (producing AB, BC and AC) whose outputs feed one 3-input OR gate producing F.

Step 6: Checking row 101: AC = 1, so F = 1, which matches the table.

**How it's asked in exams.** *"Explain the design procedure of a combinational circuit with a suitable example"* (6–8 marks). Write the definition, list all six steps with one explanatory sentence each, then work a full example: problem statement, truth table, K-map with groups, simplified equation, and "draw the logic diagram showing the AND gates feeding the OR gate". Conclude that following the procedure guarantees a correct and minimal circuit.`,
  },

  "Adders": {
    selfTest: [
      "Write the Sum and Carry equations of a half adder.",
      "Why can't a half adder be used to add multi-bit numbers?",
      "What are the outputs of a full adder when A = 1, B = 1, Cin = 1?",
    ],
    body: `**Definition.** An **adder** is a combinational circuit that performs the arithmetic addition of binary numbers. The two basic types are the **half adder**, which adds two bits, and the **full adder**, which adds three bits (two bits and a carry from the previous stage).

**1. Half adder.** It has two inputs (A, B) and two outputs: Sum (S) and Carry (C).

| A | B | S | C |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

- **S = A'B + AB' = A ⊕ B**
- **C = AB**

Circuit: inputs A and B feed an XOR gate producing S, and the same inputs feed an AND gate producing C.

**Limitation.** A half adder has no input for a carry coming from a lower bit position, so it can only add the least significant bits. It cannot be cascaded for multi-bit addition.

**2. Full adder.** It has three inputs (A, B and carry-in Cin) and two outputs: Sum (S) and carry-out (Cout).

| A | B | Cin | S | Cout |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

- S = Σm(1, 2, 4, 7) = A'B'Cin + A'BCin' + AB'Cin' + ABCin = **A ⊕ B ⊕ Cin**
- Cout = Σm(3, 5, 6, 7). From the K-map: **Cout = AB + BCin + ACin**, which can also be written **Cout = AB + Cin(A ⊕ B)**

**Full adder from two half adders.** The first half adder adds A and B, giving A ⊕ B and AB. The second half adder adds (A ⊕ B) and Cin, giving the final S = A ⊕ B ⊕ Cin and a carry Cin(A ⊕ B). An OR gate combines the two carries: Cout = AB + Cin(A ⊕ B).

**Example.** A = 1, B = 1, Cin = 1: S = 1 ⊕ 1 ⊕ 1 = 1 and Cout = 1·1 + 1·(1 ⊕ 1) = 1. In decimal, 1 + 1 + 1 = 3 = 11₂, which matches.

**Related circuit (subtractors).** A half subtractor gives Difference D = A ⊕ B and Borrow = A'B. A full subtractor gives D = A ⊕ B ⊕ Bin and Bout = A'B + Bin(A ⊕ B)'.

**How it's asked in exams.** *"What is a half adder and a full adder? Design a full adder with its truth table, K-map and logic diagram"* or *"Implement a full adder using two half adders"* (8–12 marks). Define each adder, give its truth table, derive S and Cout with K-maps, and draw the logic diagram showing the XOR, AND and OR gates. State the limitation of the half adder, show the two-half-adder construction, and finish with a sentence on how full adders are cascaded to build a parallel adder.`,
  },

  "Binary Parallel Adder": {
    selfTest: [
      "How many full adders are needed for a 4-bit parallel adder?",
      "What is carry propagation delay?",
      "Add 1011 and 0110 using a 4-bit parallel adder, showing the carry at each stage.",
    ],
    body: `**Definition.** A **binary parallel adder** is a combinational circuit that adds two n-bit binary numbers at the same time, using n full adders connected in cascade. The carry-out of each full adder is connected to the carry-in of the next higher-order full adder. Because the carry "ripples" from stage to stage, it is also called a **ripple carry adder**.

**Explanation.** For a 4-bit adder, the inputs are A₃A₂A₁A₀ and B₃B₂B₁B₀, and the outputs are the sum bits S₃S₂S₁S₀ and a final carry C₄.

- Full adder FA₀ adds A₀, B₀ and C₀ (C₀ is 0, or the first stage can be a half adder).
- Its carry C₁ goes to FA₁, which adds A₁, B₁ and C₁, and so on.
- The last carry C₄ is the overflow bit of the result.

Standard ICs: **7483 / 74283** are 4-bit binary parallel adders.

**Carry propagation delay.** Each stage must wait for the carry from the previous stage before its outputs become correct. For n bits, the worst-case delay is about n times the carry delay of one full adder. This makes ripple adders slow for large word sizes.

**Carry look-ahead adder (solution).** It computes all carries directly from the inputs. For each stage define:

- Carry generate: Gᵢ = AᵢBᵢ
- Carry propagate: Pᵢ = Aᵢ ⊕ Bᵢ
- Then Sᵢ = Pᵢ ⊕ Cᵢ and Cᵢ₊₁ = Gᵢ + PᵢCᵢ

Expanding, C₂ = G₁ + P₁G₀ + P₁P₀C₀, so every carry is produced after only two gate levels, without waiting for a ripple.

**Parallel adder as a subtractor.** Adding an XOR gate on each B input with a control line M gives an adder-subtractor. When M = 0 the B bits pass unchanged (A + B). When M = 1 the B bits are inverted and C₀ = 1, which adds the 2's complement of B (A − B).

**Example.** A = 1011 (11), B = 0110 (6), C₀ = 0:

| Stage | Aᵢ | Bᵢ | Cᵢ (in) | Sᵢ | Cᵢ₊₁ (out) |
|---|---|---|---|---|---|
| FA₀ | 1 | 0 | 0 | 1 | 0 |
| FA₁ | 1 | 1 | 0 | 0 | 1 |
| FA₂ | 0 | 1 | 1 | 0 | 1 |
| FA₃ | 1 | 0 | 1 | 0 | 1 |

Result: C₄S₃S₂S₁S₀ = **10001₂ = 17₁₀**, and 11 + 6 = 17, which is correct.

**How it's asked in exams.** *"Explain a 4-bit binary parallel adder with a neat diagram"* (6–8 marks), often with *"What is its main disadvantage?"* Define the circuit, then draw the logic diagram showing four full adders with each carry-out feeding the next carry-in. Explain the operation stage by stage with a worked addition like the one above, describe carry propagation delay as the drawback, and briefly mention the carry look-ahead adder as the remedy. Conclude that parallel adders form the core of the ALU in a processor.`,
  },

  "Encoders": {
    selfTest: [
      "How many outputs does an encoder with 8 inputs have?",
      "What problem does a priority encoder solve?",
      "Write the output equations of an octal-to-binary encoder.",
    ],
    body: `**Definition.** An **encoder** is a combinational circuit that converts information from one of 2ⁿ input lines into an n-bit binary code on its output lines. It performs the reverse operation of a decoder. At any time only one input is assumed to be active (HIGH).

**Explanation.** Common types are the 4-to-2 encoder, the 8-to-3 (octal-to-binary) encoder and the decimal-to-BCD (10-to-4) encoder. Each output is the OR of all inputs whose binary code has a 1 in that bit position, so an encoder is built from OR gates only.

**Example (8-to-3 octal-to-binary encoder).** Inputs D₀ to D₇, outputs A₂A₁A₀.

| Active input | A₂ | A₁ | A₀ |
|---|---|---|---|
| D₀ | 0 | 0 | 0 |
| D₁ | 0 | 0 | 1 |
| D₂ | 0 | 1 | 0 |
| D₃ | 0 | 1 | 1 |
| D₄ | 1 | 0 | 0 |
| D₅ | 1 | 0 | 1 |
| D₆ | 1 | 1 | 0 |
| D₇ | 1 | 1 | 1 |

- **A₂ = D₄ + D₅ + D₆ + D₇**
- **A₁ = D₂ + D₃ + D₆ + D₇**
- **A₀ = D₁ + D₃ + D₅ + D₇**

The circuit is three 4-input OR gates, one for each output.

**Limitations of a simple encoder.**

- If two inputs are active at once (say D₃ and D₆), the output is 111, which is wrong.
- When no input is active the output is 000, the same as when D₀ is active.

**Priority encoder.** It solves these problems by giving each input a priority. If several inputs are active, the output code is that of the highest-priority input. A **valid output V** indicates whether any input is active. For a 4-to-2 priority encoder with D₃ having the highest priority:

- x = D₂ + D₃
- y = D₃ + D₁D₂'
- V = D₀ + D₁ + D₂ + D₃

**Uses.** Keyboard encoders (converting a key press into a code), interrupt priority handling in processors, and converting decimal inputs into BCD.

**How it's asked in exams.** *"What is an encoder? Design an octal-to-binary encoder"* or *"Explain a priority encoder"* (6–8 marks). Define the encoder, draw the block diagram with 2ⁿ inputs and n outputs, give the truth table, derive the OR equations and draw the logic diagram showing the OR gates. Explain the limitations and the priority encoder, and end with one or two real applications.`,
  },

  "Decoders": {
    selfTest: [
      "How many output lines does a 3-to-8 decoder have?",
      "Why is a decoder called a minterm generator?",
      "Write the output equations of a 2-to-4 decoder.",
    ],
    body: `**Definition.** A **decoder** is a combinational circuit that converts an n-bit binary input code into a maximum of 2ⁿ unique output lines. For each input combination, exactly one output is activated. Common examples are the 2-to-4, 3-to-8 and BCD-to-decimal (4-to-10) decoders.

**Explanation.** Each output of an n-to-2ⁿ decoder corresponds to one minterm of the n input variables, so a decoder is often called a **minterm generator**. It is built from NOT gates (to make the complemented inputs) and AND gates (one for each output). Many decoders include an **enable (E)** input. When E = 0 all outputs stay inactive; when E = 1 the decoder works normally.

**Example (2-to-4 decoder with enable).** Inputs A, B and E, outputs D₀ to D₃.

| E | A | B | D₀ | D₁ | D₂ | D₃ |
|---|---|---|---|---|---|---|
| 0 | x | x | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 1 | 0 | 0 |
| 1 | 1 | 0 | 0 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 | 0 | 0 | 1 |

- D₀ = E·A'B'
- D₁ = E·A'B
- D₂ = E·AB'
- D₃ = E·AB

Circuit: two NOT gates produce A' and B', and four 3-input AND gates produce D₀ to D₃.

**3-to-8 decoder.** Inputs A, B, C give eight outputs D₀ = A'B'C' up to D₇ = ABC. Two 3-to-8 decoders with enables can be combined to form a 4-to-16 decoder.

**Implementing Boolean functions with a decoder.** Since every minterm is available, any function can be built by ORing the required decoder outputs. For example, a full adder uses one 3-to-8 decoder (inputs A, B, Cin) and two OR gates:

- S = Σm(1, 2, 4, 7) → OR together D₁, D₂, D₄, D₇
- Cout = Σm(3, 5, 6, 7) → OR together D₃, D₅, D₆, D₇

**Uses.** Memory address decoding (selecting one memory chip or location), instruction decoding in the CPU, BCD-to-7-segment display drivers, and as a demultiplexer when the enable is used as the data input.

**How it's asked in exams.** *"What is a decoder? Explain a 3-to-8 decoder with truth table and logic diagram"* or *"Implement a full adder using a decoder"* (6–8 marks). Define the decoder, give the block diagram, the truth table and the output equations, and draw the logic diagram showing the NOT and AND gates. For function implementation, list the minterms of each output and draw the decoder with the OR gates attached. End by stating the main applications.`,
  },

  "Multiplexers": {
    selfTest: [
      "How many select lines does an 8-to-1 multiplexer need?",
      "Write the output equation of a 4-to-1 multiplexer.",
      "Why is a multiplexer called a data selector?",
    ],
    body: `**Definition.** A **multiplexer (MUX)** is a combinational circuit that selects one of many input data lines and passes it to a single output line. The selection is controlled by a set of **select lines**. A MUX with 2ⁿ data inputs needs n select lines. Because it chooses one input from many, it is also called a **data selector** (many-to-one).

**Explanation.** The binary value on the select lines decides which input is connected to the output. Internally, each data input goes to an AND gate together with the matching combination of select lines, and all AND outputs feed one OR gate. Common sizes are 2-to-1, 4-to-1, 8-to-1 and 16-to-1 (ICs 74153 dual 4-to-1 and 74151 8-to-1).

**Example 1 (4-to-1 MUX).** Data inputs I₀ to I₃, select lines S₁ and S₀, output Y.

| S₁ | S₀ | Y |
|---|---|---|
| 0 | 0 | I₀ |
| 0 | 1 | I₁ |
| 1 | 0 | I₂ |
| 1 | 1 | I₃ |

**Y = S₁'S₀'I₀ + S₁'S₀I₁ + S₁S₀'I₂ + S₁S₀I₃**

Circuit: two NOT gates give S₁' and S₀'. Four 3-input AND gates each combine one data input with its select combination, and a 4-input OR gate combines them into Y. For example, if S₁S₀ = 10, only the third AND gate is enabled, so Y = I₂.

**Example 2 (implementing a Boolean function with a MUX).** Implement F(A, B, C) = Σm(1, 3, 5, 6) with a 4-to-1 MUX. Use A and B as the select lines and express each data input in terms of C:

| A | B | F when C = 0 | F when C = 1 | Data input |
|---|---|---|---|---|
| 0 | 0 | 0 (m₀) | 1 (m₁) | I₀ = C |
| 0 | 1 | 0 (m₂) | 1 (m₃) | I₁ = C |
| 1 | 0 | 0 (m₄) | 1 (m₅) | I₂ = C |
| 1 | 1 | 1 (m₆) | 0 (m₇) | I₃ = C' |

So connect A → S₁, B → S₀, C to I₀, I₁ and I₂, and C' to I₃. A function of n variables can always be built with a 2ⁿ⁻¹-to-1 MUX in this way. Using an 8-to-1 MUX instead, you would connect A, B, C to the select lines and tie I₁, I₃, I₅, I₆ to 1 and the rest to 0.

**Uses.** Data routing in the CPU (selecting which register feeds the ALU), time-division multiplexing in communication systems, parallel-to-serial conversion, and building logic functions without separate gates.

**How it's asked in exams.** *"What is a multiplexer? Explain a 4-to-1 multiplexer with truth table and logic diagram"* (6–8 marks) or *"Implement F = Σm(1, 3, 5, 6) using a 4-to-1 MUX"* (4–6 marks). Define the MUX and relate inputs to select lines (2ⁿ and n), draw the block diagram, give the function table and the output equation, and draw the logic diagram showing the AND gates feeding the OR gate. For implementation questions, show the table that derives each data input and the final connection diagram. End with applications.`,
  },

  "Demultiplexers": {
    selfTest: [
      "What is the main difference between a multiplexer and a demultiplexer?",
      "Write the output equations of a 1-to-4 demultiplexer.",
      "How can a decoder be used as a demultiplexer?",
    ],
    body: `**Definition.** A **demultiplexer (DEMUX)** is a combinational circuit that takes a single data input and sends it to one of many output lines. The chosen output is decided by the **select lines**. A DEMUX with 2ⁿ outputs needs n select lines. It performs the reverse of a multiplexer and is also called a **data distributor** (one-to-many).

**Explanation.** The data input D is connected to every AND gate, along with one combination of select lines. Only the AND gate whose select combination matches the current select value is enabled, so D appears on that output and all other outputs stay 0. Common sizes are 1-to-2, 1-to-4, 1-to-8 and 1-to-16.

**Example (1-to-4 DEMUX).** Data input D, select lines S₁ and S₀, outputs Y₀ to Y₃.

| S₁ | S₀ | Y₀ | Y₁ | Y₂ | Y₃ |
|---|---|---|---|---|---|
| 0 | 0 | D | 0 | 0 | 0 |
| 0 | 1 | 0 | D | 0 | 0 |
| 1 | 0 | 0 | 0 | D | 0 |
| 1 | 1 | 0 | 0 | 0 | D |

- Y₀ = D·S₁'S₀'
- Y₁ = D·S₁'S₀
- Y₂ = D·S₁S₀'
- Y₃ = D·S₁S₀

Circuit: two NOT gates give S₁' and S₀', and four 3-input AND gates each combine D with one select combination. For example, with S₁S₀ = 01 and D = 1, only Y₁ = 1.

**Decoder as a demultiplexer.** A 2-to-4 decoder with an enable input behaves exactly like a 1-to-4 DEMUX: the decoder inputs act as the select lines and the enable input acts as the data line D. That is why ICs such as the 74155 and 74138 are sold as "decoder/demultiplexers".

**MUX vs DEMUX.**

| Point | Multiplexer | Demultiplexer |
|---|---|---|
| Function | Many inputs → one output | One input → many outputs |
| Other name | Data selector | Data distributor |
| Inputs / outputs | 2ⁿ data inputs, 1 output | 1 data input, 2ⁿ outputs |
| Select lines | n | n |
| Use | At the transmitting end | At the receiving end |

**Uses.** At the receiving end of a time-division multiplexed link to send each signal to its destination, serial-to-parallel conversion, and routing data from a bus to one of several registers or devices.

**How it's asked in exams.** *"Explain a 1-to-4 demultiplexer with truth table and logic diagram"* or *"Differentiate between multiplexer and demultiplexer"* (4–8 marks). Define the DEMUX, draw the block diagram, give the function table and output equations, and draw the logic diagram showing the NOT and AND gates. Add the comparison table with the MUX and a sentence on using a decoder with enable as a DEMUX. Conclude that MUX and DEMUX together allow many signals to share one communication line.`,
  },
};
