import type { TopicNote } from "@/content/types";

export const unit5Notes: Record<string, TopicNote> = {
  "Introduction to Register Transfer Logic": {
    selfTest: [
      "What are the three things needed to describe a digital system at the register transfer level?",
      "What does the statement R2 ← R1 mean?",
      "Why is RTL preferred over gate-level description for large systems?",
    ],
    body: `**Definition.** **Register Transfer Logic (RTL)** is a method of describing the operation of a digital system in terms of its **registers**, the **operations performed on the data stored in them**, and the **control that decides when those operations happen**. The symbolic notation used to write these operations is called a **Register Transfer Language**.

**Explanation.** A large digital system such as a computer has thousands of gates and flip-flops. Describing it gate by gate is impractical. Instead, we treat the system as a set of registers and describe how data moves between them. A system is specified at this level by three things:

1. **The set of registers** in the system and their functions (for example, accumulator AC, program counter PC, memory address register MAR).
2. **The micro-operations** performed on the data stored in the registers. A *micro-operation* is an elementary operation completed in one clock pulse, such as transfer, add, clear, shift, increment or complement.
3. **The control functions** that initiate the sequence of micro-operations. A control function is a Boolean variable (or expression) that is 1 when the operation must happen and 0 otherwise.

Some basic notation conventions:

- Registers are written in capital letters: A, B, R1, PC, IR.
- Individual bits are shown in brackets or subscripts: R1(1–8), PC(H) for the high byte.
- The arrow **←** means transfer (replacement) of data.
- A colon separates the control function from the operation: **P: R2 ← R1**.
- A comma separates operations that happen at the same time: **T₁: A ← B, B ← A**.

**Example.** The statement **T₂: R3 ← R1 + R2** means: when the timing signal T₂ is 1, add the contents of R1 and R2 and load the sum into R3 at the next clock pulse. R1 and R2 are unchanged.

**How it's asked in exams.** *"What is register transfer logic? Explain the basic components of RTL"* (4–6 marks) or as the opening part of an 8-mark question. Write the definition, list the three components (registers, micro-operations, control functions) with a sentence each, show the notation (← , colon, comma) with one example statement, and conclude that RTL allows a complex system to be designed and understood at a higher level than individual gates.`,
  },

  "Inter-register Transfer": {
    selfTest: [
      "Write the RTL statement for: if control P = 1, copy R1 into R2.",
      "Is the content of the source register changed after a transfer?",
      "How can two registers exchange contents in one clock pulse?",
    ],
    body: `**Definition.** An **inter-register transfer** is a micro-operation that copies the binary information of one register (the *source*) into another register (the *destination*). It is written **R2 ← R1**.

**Explanation.** In a transfer, the destination register is loaded in parallel with the contents of the source register. The contents of the source register **do not change**; only the destination is overwritten. Normally the transfer must happen only under a certain condition, so it is written with a control function:

**P: R2 ← R1**

This means "if P = 1, transfer R1 to R2 at the next clock pulse".

**Hardware implementation.** The outputs of R1 are connected to the parallel inputs of R2. The control variable P is connected to the **load** input of R2. When P = 1 and the clock pulse arrives, R2 loads the data. When P = 0, R2 keeps its old value. In the block diagram, the control circuit produces P, which enables the load of R2, and n lines carry the n bits from R1 to R2.

Other useful forms:

- **Simultaneous transfer:** T₁: A ← B, B ← A. Both happen on the same clock edge, so A and B swap contents. This is possible because flip-flops are edge-triggered and read their inputs before they change.
- **Transfer to part of a register:** R2(1–4) ← R1(5–8).
- **Transfer with a common bus:** When many registers must transfer to each other, one set of shared lines (a **bus**) is used with multiplexers or three-state buffers selecting which register drives it. Example: BUS ← R3, R1 ← BUS.
- **Memory transfer:** Read: DR ← M[AR]; Write: M[AR] ← DR, where AR holds the address and DR holds the data word.

**Example.** A 4-bit register R1 = 1011 and R2 = 0000. After **P: R2 ← R1** with P = 1, R2 = 1011 and R1 is still 1011.

**How it's asked in exams.** *"Explain inter-register transfer with a block diagram"* (4–6 marks). Write the definition, the RTL statement with a control function, and draw the block diagram showing R1 outputs connected to R2 inputs, with the control P on the load input and a common clock. Mention simultaneous transfer and the bus method, and conclude that register transfer is the most basic micro-operation.`,
  },

  "Arithmetic, Logic and Shift Micro-operations": {
    selfTest: [
      "Write the RTL statement for subtraction R3 ← R1 − R2 using 2's complement.",
      "What is the difference between logical shift and arithmetic shift?",
      "If A = 1010 and B = 1100, find A ∧ B, A ∨ B and A ⊕ B.",
    ],
    body: `**Definition.** A **micro-operation** is an elementary operation performed on data stored in registers during one clock pulse. Besides simple transfers, they are grouped into **arithmetic**, **logic** and **shift** micro-operations.

**1. Arithmetic micro-operations.** These perform arithmetic on numeric data.

| RTL statement | Meaning |
|---|---|
| R3 ← R1 + R2 | Add R1 and R2, result in R3 |
| R3 ← R1 − R2 | Subtract R2 from R1 |
| R2 ← R2' | 1's complement of R2 |
| R2 ← R2' + 1 | 2's complement of R2 (negate) |
| R3 ← R1 + R2' + 1 | R1 + 2's complement of R2, i.e. subtraction |
| R1 ← R1 + 1 | Increment R1 |
| R1 ← R1 − 1 | Decrement R1 |

Subtraction is done by adding the 2's complement, so one **binary parallel adder** with complementing inputs handles both addition and subtraction. Increment is done with a counter or a binary incrementer. Multiplication and division are *not* basic micro-operations; they are carried out as a sequence of add and shift micro-operations.

**2. Logic micro-operations.** These treat each bit of a register as a separate binary variable (bitwise operations). The symbols ∧ (AND), ∨ (OR), ⊕ (XOR) and ' (complement) are used, so that the + sign stays reserved for arithmetic.

- **AND** (R1 ← R1 ∧ R2): used to **clear (mask)** selected bits.
- **OR** (R1 ← R1 ∨ R2): used to **set** selected bits to 1.
- **XOR** (R1 ← R1 ⊕ R2): used to **complement** selected bits.
- **NOT** (R1 ← R1'): complement all bits.

Example with A = 1010, B = 1100: A ∧ B = 1000, A ∨ B = 1110, A ⊕ B = 0110.

**3. Shift micro-operations.** These move bits of a register left or right.

- **Logical shift (shl, shr):** a 0 enters the vacated end. Example: shr 1010 → 0101.
- **Circular shift / rotate (cil, cir):** the bit shifted out re-enters at the other end. Example: cir 1011 → 1101.
- **Arithmetic shift (ashl, ashr):** shifts a signed number. Arithmetic shift right keeps the **sign bit unchanged** (divide by 2); arithmetic shift left inserts 0 at the right (multiply by 2) and overflow can occur if the sign bit changes. Example: ashr 1100 (−4) → 1110 (−2).

**Example.** T₁: A ← A + B; T₂: A ← shl A. With A = 0011 and B = 0001, after T₁ A = 0100, after T₂ A = 1000.

**How it's asked in exams.** *"Explain arithmetic, logic and shift micro-operations with examples"* (8–12 marks), frequently as a long question. Define micro-operation, then give each group its own paragraph with an RTL table and a worked bit example. For shifts, show logical, circular and arithmetic shifts on the same number side by side. Conclude that together these micro-operations form the complete instruction set of the hardware from which every machine instruction is built.`,
  },

  "Conditional Control Statements": {
    selfTest: [
      "Write the conditional statement 'if A > B then A ← A − B' in RTL control-function form.",
      "What is the role of a control function in RTL?",
      "How is an if-then-else converted into control functions?",
    ],
    body: `**Definition.** A **conditional control statement** is an RTL statement in which a micro-operation is executed only if a stated condition is true. It is written in the form **P: If (condition) then (micro-operation) else (micro-operation)**.

**Explanation.** In real systems, the operation performed often depends on the state of a status bit or the result of a comparison. For example, a register should be cleared only if it is not already zero, or a jump should happen only if a flag is set. RTL expresses this in two equivalent ways:

1. **As an if-then-else statement:**
   T₂: If (C = 0) then (F ← 1) else (F ← 0)

2. **As control functions (Boolean conditions):** the condition is ANDed with the timing signal.
   C'T₂: F ← 1
   CT₂: F ← 0

The second form maps directly to hardware. The control function **C'T₂** is produced by an AND gate whose inputs are the complement of C and the timing signal T₂. Its output drives the set/load input of F. So every conditional statement becomes an ordinary statement whose control function is a Boolean expression.

Key points:

- The condition is usually a status bit (carry, zero, sign, overflow) or a comparison.
- The **else** part is optional. If omitted, nothing happens when the condition is false.
- Several conditions can be combined: **T₃ Z': PC ← PC + 1** (increment PC at T₃ only if the zero flag is 0).

**Example.** "At T₁, if R1 is zero, load R2 into R1; otherwise decrement R1." Let Z = 1 when R1 = 0:

- ZT₁: R1 ← R2
- Z'T₁: R1 ← R1 − 1

**How it's asked in exams.** *"What are conditional control statements? Explain with an example"* (4 marks) or as part of an RTL question. Write the definition, the general if-then-else form, then show how it is converted into two control functions using the condition and its complement ANDed with the timing signal. Mention the AND gate implementation and conclude that conditional statements let the hardware make decisions.`,
  },

  "Fixed-point Binary Data (Signed Binary Numbers)": {
    selfTest: [
      "Represent −9 in 8 bits using signed-magnitude, 1's complement and 2's complement.",
      "What is the range of an 8-bit 2's complement number?",
      "Which signed representation has two zeros?",
    ],
    body: `**Definition.** **Fixed-point binary data** means binary numbers whose binary point is at a fixed position, usually at the extreme right (integers) or just after the sign bit (fractions). To represent **signed** numbers, the leftmost bit is used as the **sign bit**: 0 for positive, 1 for negative.

**Explanation.** Positive numbers are written the same way in all systems: sign bit 0 followed by the magnitude in binary. Negative numbers can be represented in three ways:

1. **Signed-magnitude:** sign bit 1, followed by the true magnitude.
2. **Signed 1's complement:** take the 1's complement of the whole positive number (invert all bits).
3. **Signed 2's complement:** take the 2's complement of the whole positive number (1's complement + 1).

**Example: +9 and −9 in 8 bits.** +9 = 0000 1001 in all three systems.

| Representation | −9 in 8 bits |
|---|---|
| Signed-magnitude | 1000 1001 |
| Signed 1's complement | 1111 0110 |
| Signed 2's complement | 1111 0111 |

**Comparison of the three systems (8 bits):**

| Feature | Signed-magnitude | 1's complement | 2's complement |
|---|---|---|---|
| Range | −127 to +127 | −127 to +127 | −128 to +127 |
| Zero | Two (+0, −0) | Two (0000 0000, 1111 1111) | One (0000 0000) |
| Addition hardware | Needs compare and subtract logic | Needs end-around carry | Plain adder, carry discarded |
| Used in | Floating-point mantissa, manual work | Rarely, some older machines | Almost all modern computers |

In general, an n-bit 2's complement number covers −2ⁿ⁻¹ to +(2ⁿ⁻¹ − 1).

Signed-magnitude is closest to how humans write numbers, but arithmetic is awkward because signs must be compared first. 1's complement is easy to form but has two zeros. **2's complement** is used in practice because addition and subtraction use the same simple adder and there is only one zero.

**How it's asked in exams.** *"Explain the different ways of representing signed binary numbers. Represent −9 (or −14) in all three forms"* (6–8 marks). Define fixed-point and sign bit, explain each representation in its own paragraph, show the worked 8-bit example in a table, add the comparison table (range, zeros, hardware), and conclude why 2's complement is the standard in computers.`,
  },

  "Arithmetic Addition and Subtraction": {
    selfTest: [
      "Add +6 and −13 in 8-bit signed 2's complement.",
      "How is subtraction performed using 2's complement?",
      "What happens to the carry out of the sign bit in 2's complement addition?",
    ],
    body: `**Definition.** **Arithmetic addition and subtraction** of signed fixed-point numbers is the process of computing A + B or A − B where the numbers are in signed representation. In computers this is done in **signed 2's complement**, because the same adder circuit handles every case.

**Explanation.**

**Addition rule (2's complement):** Add the two numbers **including their sign bits** as ordinary binary numbers. Discard any carry out of the sign-bit position. If the result is negative, it is automatically in 2's complement form.

**Subtraction rule:** Take the 2's complement of the subtrahend (including its sign bit) and **add** it to the minuend. Discard the carry out of the sign bit. So A − B = A + (B' + 1).

In RTL this is written as **A ← A + B' + 1**. The hardware is an **adder-subtractor**: a parallel adder with XOR gates on the B inputs. A mode line M = 0 passes B unchanged and Cin = 0 (addition); M = 1 complements B and makes Cin = 1 (subtraction).

In **signed-magnitude**, the process is more complex: if the signs are the same, add the magnitudes and keep the sign; if they differ, subtract the smaller magnitude from the larger and take the sign of the larger. This needs comparison logic, which is why 2's complement is preferred.

**Example 1: (+6) + (−13)** in 8 bits.

- +6 = 0000 0110
- −13 = 1111 0011
- Sum = 1111 1001, which is the 2's complement of 0000 0111, so the result is **−7** ✔

**Example 2: (−6) + (−13).**

- 1111 1010 + 1111 0011 = **1** 1110 1101. Discard the carry → 1110 1101 = **−19** ✔

**Example 3: (+13) − (+6).**

- 2's complement of +6 = 1111 1010
- 0000 1101 + 1111 1010 = **1** 0000 0111. Discard the carry → **+7** ✔

**How it's asked in exams.** *"Explain the addition and subtraction of signed binary numbers with examples"* or a numeric *"Perform (−25) + (+18) using 8-bit 2's complement"* (4–8 marks). State the rule, show each number in 8-bit 2's complement on its own line, do the addition column-wise, state what happens to the carry, and verify the answer in decimal. Draw the block diagram of the adder-subtractor if asked for hardware, and conclude that a single adder performs both operations.`,
  },

  Overflow: {
    selfTest: [
      "When can overflow occur in signed addition, and when can it never occur?",
      "Add +70 and +80 in 8-bit 2's complement. Is there overflow?",
      "Write the Boolean expression used by hardware to detect overflow.",
    ],
    body: `**Definition.** **Overflow** occurs when the result of an arithmetic operation on n-bit signed numbers is too large (or too small) to be represented in n bits. The result then has the wrong sign and is incorrect.

**Explanation.** An n-bit 2's complement register can hold values only from −2ⁿ⁻¹ to +(2ⁿ⁻¹ − 1); for 8 bits, −128 to +127. When the true answer goes outside this range, the extra bit spills into the sign position.

Important facts:

- Overflow **can only occur** when two numbers of the **same sign** are added (or numbers of opposite sign are subtracted).
- Overflow **can never occur** when adding a positive and a negative number, because the result is always smaller in magnitude than the larger operand.
- A carry out of the sign bit is **not** by itself overflow. In 2's complement, that carry is simply discarded.

**Detection rules:**

1. **Sign rule:** if two operands of the same sign produce a result of the **opposite sign**, overflow has occurred.
2. **Carry rule (used by hardware):** overflow occurs when the **carry into the sign bit ≠ the carry out of the sign bit**. With C₇ = carry into the MSB and C₈ = carry out of the MSB, the overflow flag is **V = C₇ ⊕ C₈**. One XOR gate on the last two carries of the adder does the job.

**Example 1 (overflow):** (+70) + (+80) = +150, which is more than +127.

- +70 = 0100 0110
- +80 = 0101 0000
- Sum = 1001 0110 (sign bit 1, looks negative: −106)
- Carry into sign bit C₇ = 1, carry out C₈ = 0, so V = 1 ⊕ 0 = **1 → overflow** ✔

**Example 2 (no overflow):** (−70) + (+80).

- 1011 1010 + 0101 0000 = **1** 0000 1010 = +10. C₇ = 1, C₈ = 1, V = 0 → no overflow; the carry is discarded.

**How it's asked in exams.** *"What is overflow? How is it detected? Explain with an example"* (4–6 marks). Write the definition with the 8-bit range, state when overflow can and cannot occur, give both detection rules including V = C₇ ⊕ C₈, and show one worked addition with the carries marked. Draw the XOR gate on the last two carries if hardware is asked. Conclude that the overflow flip-flop V is checked by the program after signed arithmetic.`,
  },

  "Instruction Codes": {
    selfTest: [
      "What are the two main parts of an instruction code?",
      "With a 4-bit opcode, how many different operations can be specified?",
      "What is the difference between direct and indirect addressing?",
    ],
    body: `**Definition.** An **instruction code** is a group of bits that tells the computer to perform a specific operation. It is divided into parts, the most basic being the **operation code (opcode)** and the **address (operand) part**.

**Explanation.** A computer program is a sequence of instructions stored in memory. The control unit fetches each instruction, decodes its opcode, and issues the micro-operations needed to execute it.

- **Operation code (opcode):** a group of bits that specifies the operation, such as ADD, LOAD, STORE or JUMP. An n-bit opcode can specify up to **2ⁿ distinct operations**. The opcode is really a *macro-operation*, because it is carried out by a sequence of micro-operations.
- **Address part:** specifies the memory location or register where the operand is found or where the result is stored.
- **Mode bit (I):** in many formats one bit indicates whether the address is **direct** (the address part is the operand's address) or **indirect** (the address part holds the address of the address).

**Common instruction formats:**

1. **Memory-reference instruction:** opcode + address of a memory operand.
2. **Register-reference instruction:** operates on a processor register; no memory address is needed, and the address bits are used to specify the operation (e.g. clear AC, complement AC).
3. **Input-output instruction:** communicates with I/O devices.

Some instructions also contain an **immediate operand** instead of an address, where the address field holds the data itself.

**Example.** In a 16-bit instruction word with a 4-bit opcode and a 12-bit address:

| Bits 15–12 | Bits 11–0 |
|---|---|
| Opcode | Address |
| 0010 (ADD) | 0000 0110 0100 (address 100) |

This means "add the word at memory address 100 to the accumulator": AC ← AC + M[100]. A 4-bit opcode gives 2⁴ = 16 operations and a 12-bit address reaches 2¹² = 4096 memory words.

**How it's asked in exams.** *"What is an instruction code? Explain the instruction format with an example"* (4–6 marks). Define instruction code, explain opcode and address with a sentence each, describe direct vs indirect addressing and the three instruction types, and draw the instruction format showing the bit fields. Conclude that the instruction code is the link between the program stored in memory and the micro-operations of the hardware.`,
  },

  Macrooperations: {
    selfTest: [
      "What is the difference between a micro-operation and a macro-operation?",
      "Give one example of a macro-operation and list its micro-operations.",
      "Why is an instruction called a macro-operation?",
    ],
    body: `**Definition.** A **macro-operation** is an operation specified by a single computer instruction that is carried out by a **sequence of micro-operations** over several clock pulses. Every machine instruction (ADD, LOAD, JUMP) is a macro-operation.

**Explanation.** A micro-operation is an elementary step completed in one clock pulse, such as a register transfer or an increment. A macro-operation is a higher-level task that the programmer sees. The control unit breaks each macro-operation into the necessary micro-operations and generates control signals in the correct timing order (T₀, T₁, T₂ …).

**Differences between micro- and macro-operations:**

| Micro-operation | Macro-operation |
|---|---|
| Elementary operation on register data | Operation specified by one instruction |
| Completed in one clock pulse | Takes several clock pulses |
| Seen by the hardware designer | Seen by the programmer |
| Examples: A ← B, A ← A + 1, shl A | Examples: ADD, LOAD, STORE, JUMP |
| Directly activated by control signals | Implemented by a sequence of micro-operations |

**Example.** The macro-operation **ADD X** (add memory word X to the accumulator) is executed as:

- T₀: MAR ← PC (send the instruction address to memory)
- T₁: MBR ← M[MAR], PC ← PC + 1 (read the instruction, advance PC)
- T₂: IR ← MBR(opcode), MAR ← MBR(address) (decode, prepare operand address)
- T₃: MBR ← M[MAR] (read the operand)
- T₄: A ← A + MBR (add), then return to T₀

Multiplication is another typical macro-operation, since it is done by repeated add and shift micro-operations.

**How it's asked in exams.** *"Differentiate between micro-operation and macro-operation"* (4 marks) or as part of a simple-computer question. Give both definitions, add the comparison table, and show one instruction broken into its micro-operation sequence with timing signals. Conclude that macro-operations are what make programming convenient while micro-operations are what the hardware actually executes.`,
  },

  "Design of a Simple Computer": {
    selfTest: [
      "List the main registers of Mano's simple computer and their functions.",
      "Write the micro-operations of the fetch cycle.",
      "What is the role of the sequence counter and timing decoder?",
    ],
    body: `**Definition.** The **design of a simple computer** shows how a complete computer is specified at the register transfer level: its registers, its instruction set, and the sequence of micro-operations (fetch and execute) generated by the control unit. It demonstrates how RTL is used to design a real processor.

**Explanation.** The simple computer in Mano's text consists of a memory unit, a set of registers, and a control unit.

**1. Memory.** A memory unit (for example, 256 words of 8 bits, or 4096 × 16) holds both the program and the data.

**2. Registers:**

| Register | Name | Function |
|---|---|---|
| MAR | Memory Address Register | Holds the address of the memory word to be read or written |
| MBR | Memory Buffer Register | Holds the data word read from or written to memory |
| A | Accumulator | Main processor register for arithmetic and logic |
| R | Operand register | Holds a second operand |
| PC | Program Counter | Holds the address of the next instruction |
| IR | Instruction Register | Holds the opcode of the current instruction |
| G | Sequence (timing) register / counter | Generates timing signals T₀, T₁, T₂ … through a decoder |

**3. Instruction set.** A small set of instructions such as NOP, CLRA (clear A), INCA (increment A), ADD, SUB, LDA (load A), STA (store A), JMP (jump) and AND. Each is decoded from the IR into signals q₁, q₂, q₃ …

**4. Control unit.** A sequence counter drives a **timing decoder** producing T₀, T₁, T₂ …, and an **operation decoder** turns the IR into instruction signals. The control logic ANDs these to produce control functions.

**5. Fetch cycle** (common to every instruction):

- T₀: MAR ← PC
- T₁: MBR ← M, PC ← PC + 1
- T₂: IR ← MBR

**6. Execute cycle** (examples, where q is the decoded instruction):

- q(CLRA) T₃: A ← 0, G ← 0
- q(INCA) T₃: A ← A + 1, G ← 0
- q(LDA) T₃: MAR ← PC; T₄: MBR ← M, PC ← PC + 1; T₅: MAR ← MBR; T₆: MBR ← M; T₇: A ← MBR, G ← 0
- q(JMP): … PC ← address, G ← 0

Clearing G returns the counter to T₀ so the next instruction is fetched.

**Example.** For ADD: after the fetch at T₀–T₂, the operand address is read into MAR, the operand is fetched into MBR, and finally A ← A + MBR with G ← 0.

**How it's asked in exams.** *"Explain the design of a simple computer with its registers, instructions and control"* (8–12 marks). Draw the block diagram showing memory connected to MAR and MBR, the registers A, R, PC, IR, and the control unit with timing decoder and instruction decoder. Then write the register table, the instruction list, the fetch-cycle micro-operations, and two or three execute sequences with their control functions. Conclude that the whole computer is fully specified by these register transfer statements.`,
  },
};
