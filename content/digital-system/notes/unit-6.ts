import type { TopicNote } from "@/content/types";

export const unit6Notes: Record<string, TopicNote> = {
  "Introduction to Processor Logic Design": {
    selfTest: [
      "What are the three main parts of a processor unit?",
      "What is the function of the ALU?",
      "Why does a processor need a status register?",
    ],
    body: `**Definition.** **Processor logic design** is the design of the part of a computer that performs data-processing operations. The processor unit (also called the **data path**) is made of a set of **registers**, an **arithmetic logic unit (ALU)** and the **buses** that connect them. Together with the control unit it forms the **CPU (Central Processing Unit)**.

**Explanation.** A computer is divided into the processor unit, the control unit and memory. The processor unit carries out the micro-operations; the control unit decides which micro-operation to perform and when. The main components of the processor are:

1. **Processor registers:** fast storage for operands, intermediate results and addresses (for example R1–R7, the accumulator). Using registers avoids slow memory accesses.
2. **Arithmetic Logic Unit (ALU):** a combinational circuit that performs arithmetic micro-operations (add, subtract, increment, decrement) and logic micro-operations (AND, OR, XOR, complement). Its operation is selected by function-select lines.
3. **Shifter:** shifts the ALU output left or right, performing the shift micro-operations.
4. **Status register:** holds status bits (flags) produced by the ALU: **C** (carry), **Z** (zero), **S** (sign) and **V** (overflow). These are tested by conditional branch instructions.
5. **Buses and multiplexers:** paths that select which registers supply the ALU inputs and which register receives the result.

The designer's job is to choose the organization of these parts, design the ALU and shifter circuits, and define the **control word** (the set of select bits) that specifies one micro-operation per clock pulse.

**Example.** To perform R1 ← R2 + R3, the control unit selects R2 on bus A and R3 on bus B, sets the ALU function to ADD, sets the shifter to "no shift", and enables the load of R1. All of this is one control word applied during one clock pulse.

**How it's asked in exams.** *"What is processor logic design? Explain the components of a processor unit"* (4–6 marks). Write the definition, describe each component (registers, ALU, shifter, status register, buses) in its own sentence, mention the four status bits, and conclude that the processor unit executes the micro-operations while the control unit sequences them.`,
  },

  "Processor Organization (Bus Organization only)": {
    selfTest: [
      "Why is a bus organization used instead of direct connections between every pair of registers?",
      "Name the fields of the control word in a bus-organized processor with 7 registers.",
      "Which fields must be set to perform R1 ← R2 + R3?",
    ],
    body: `**Definition.** A **bus-organized processor** connects its registers to the ALU through **common buses**. Multiplexers select which registers are placed on the buses, the ALU operates on them, and a decoder selects which register receives the result. This is the most common processor organization.

**Explanation.** If every register had its own wires to every other register and to the ALU, the number of connections would be huge. Instead, all registers share a small number of buses. In the typical organization with **seven registers R1–R7**:

1. The outputs of all registers go to **two multiplexers (MUX A and MUX B)**. The select lines of each MUX choose one register to place on **bus A** and **bus B**. An external input can also be selected.
2. Bus A and bus B feed the two inputs of the **ALU**. The ALU function-select lines choose the operation.
3. The ALU output passes through a **shifter** and goes onto the **output bus**, which is connected to the inputs of all registers.
4. A **destination decoder** activates the load input of exactly one register, so only that register receives the result on the clock pulse.
5. Status bits (C, Z, S, V) are updated from the ALU.

**Control word.** Each micro-operation is specified by a control word made of fields:

| Field | Bits | Purpose |
|---|---|---|
| A | 3 | Selects source register for bus A |
| B | 3 | Selects source register for bus B |
| D | 3 | Selects destination register |
| F | 4–5 | Selects ALU operation |
| H | 2–3 | Selects shifter operation |

With 3-bit select fields, code 000 means external input (for A and B) or no destination (for D), and 001–111 select R1–R7.

**Example.** To perform **R1 ← R2 + R3**:

- A = 010 (R2 onto bus A)
- B = 011 (R3 onto bus B)
- F = ADD code
- H = no shift
- D = 001 (load R1)

All five fields are applied together, so the whole micro-operation completes in one clock pulse.

Some processors also use a **scratchpad memory** (a small fast RAM) in place of individual registers, with an address field replacing the MUX select lines, and an **accumulator** organization where one register is always one ALU input and the destination.

**How it's asked in exams.** *"Explain the bus organization of a processor unit with a block diagram"* (6–8 marks). Draw the block diagram showing seven registers feeding MUX A and MUX B, the ALU, the shifter, the output bus returning to the registers and the destination decoder controlling the loads. Then explain each block, give the control-word table and work through one micro-operation such as R1 ← R2 + R3. Conclude that the bus organization greatly reduces wiring while still allowing any register-to-register micro-operation in one clock cycle.`,
  },

  "Introduction to Control Logic Design": {
    selfTest: [
      "What is the function of the control unit in a digital system?",
      "What are the two main methods of implementing a control unit?",
      "What inputs does a control unit receive, and what outputs does it produce?",
    ],
    body: `**Definition.** **Control logic design** is the design of the **control unit**, the part of a digital system that generates the **control signals** needed to activate the micro-operations of the processor unit in the correct sequence. The processor unit does the work; the control unit decides what work is done and when.

**Explanation.** A digital system has two parts: the **data processor** (registers, ALU, buses) and the **control unit**. The control unit behaves like a sequential circuit:

- **Inputs:** the clock, the instruction (opcode) from the instruction register, external commands, and **status conditions** from the processor (carry, zero, sign, overflow).
- **Outputs:** control signals (control functions) such as register load enables, MUX select lines, ALU function codes and memory read/write signals.
- **State:** the control unit must know which step of the operation it is in. This is kept by a sequence register, a counter with a decoder, or flip-flops.

Timing is provided by a **master clock**. At each clock pulse the control unit issues the control signals for one set of micro-operations and moves to its next state, which may depend on status conditions (this is how decisions and branches are made).

**Methods of control organization:**

1. **Hard-wired control:** the control logic is built from gates, flip-flops, decoders and counters. Common forms are the *one flip-flop per state* method, the *sequence register and decoder* method, and the *PLA control* method.
2. **Microprogrammed control:** the control signals are stored as **microinstructions** in a control memory (ROM) and are read out one at a time.

The design procedure typically follows these steps: write the algorithm in RTL or draw an **ASM (algorithmic state machine) chart** or flowchart, identify the states and control functions, then implement them with the chosen method.

**Example.** In a simple computer, the control unit uses a sequence counter and decoder to produce T₀, T₁, T₂ … During T₀ it issues MAR ← PC, during T₁ MBR ← M and PC ← PC + 1, and so on, based on the decoded opcode.

**How it's asked in exams.** *"What is control logic? Explain the role of the control unit in a digital system"* (4–6 marks). Define the control unit, draw the block diagram showing the control unit sending control signals to the processor unit and receiving status bits back, list its inputs and outputs, and name the two implementation methods. Conclude that the control unit is the "brain" that coordinates every micro-operation.`,
  },

  "Microprogram Control and Hard-Wired Control (Definitions, Block Diagram, Comparison and Differences)": {
    selfTest: [
      "What is a microinstruction and where is it stored?",
      "Which control method is faster, and which is easier to modify? Why?",
      "What is the role of the control address register (CAR)?",
    ],
    body: `**Definition.**

- **Hard-wired control** is a control unit in which the control signals are generated by fixed logic circuits (gates, flip-flops, decoders, counters). The control logic is "wired in", so changing the behaviour means redesigning the circuit.
- **Microprogrammed control** is a control unit in which the control signals are stored as binary words called **microinstructions** in a special memory called the **control memory** (usually ROM). A sequence of microinstructions is called a **microprogram**. This idea was proposed by M. V. Wilkes in 1951.

**Hard-wired control: block diagram in words.** The instruction register (IR) holds the opcode, which goes to an **instruction decoder**. A **sequence counter** driven by the clock feeds a **timing decoder** that produces T₀, T₁, T₂ …. The decoded instruction, the timing signals and the **status flags** all enter a **control logic gate network** (AND/OR gates or a PLA), which outputs the control signals to the processor. Each control signal is a Boolean function of these inputs.

**Microprogrammed control: block diagram in words.**

1. The **Control Address Register (CAR)** holds the address of the next microinstruction.
2. The **control memory (ROM)** is read at that address.
3. The microinstruction is placed in the **Control Data Register (CDR)**, also called the pipeline register.
4. Part of the microinstruction (the **control word**) goes to the processor as control signals.
5. The other part (next-address information) goes to the **next-address generator (sequencer)**, which also looks at status bits and the opcode. It loads CAR with the next address: increment CAR, branch to a given address, or map the opcode to the start of its microroutine.

The external input (opcode) is **mapped** to the first address of the microprogram for that instruction.

**Example.** For the fetch cycle, a hard-wired unit has gates producing "load MAR from PC" when T₀ = 1. A microprogrammed unit has a microinstruction at, say, control address 0 whose bits turn on exactly the same signal, followed by a microinstruction at address 1 for MBR ← M, PC ← PC + 1.

**Comparison of hard-wired and microprogrammed control:**

| Basis | Hard-wired control | Microprogrammed control |
|---|---|---|
| Implementation | Fixed logic: gates, flip-flops, decoders | Microinstructions stored in control memory |
| Speed | Faster, signals come directly from logic | Slower, each step needs a control-memory read |
| Flexibility | Difficult to modify; needs rewiring | Easy to modify; change the microprogram |
| Design complexity | Complex for large instruction sets | Systematic and simpler to design |
| Cost | Cheaper for small, simple control units | Cheaper for large, complex instruction sets |
| Error correction | Difficult, needs redesign | Easy, rewrite the microprogram |
| Instruction set | Suited to small sets (RISC processors) | Suited to large sets (CISC processors) |
| Control memory | Not required | Required (ROM) |
| Adding new instructions | Very difficult | Easy, add new microroutines |
| Examples | Intel 8085 control section, most RISC CPUs | IBM System/360, Intel x86 (many instructions) |

**How it's asked in exams.** This is one of the most frequently asked long questions: *"Differentiate between hard-wired and microprogrammed control units"* or *"What is microprogrammed control? Explain with a block diagram"* (8–12 marks). Write both definitions, draw the block diagram of each: for hard-wired, show IR → instruction decoder, sequence counter → timing decoder, and both plus flags feeding the control logic gates; for microprogrammed, show CAR → control memory → CDR, with the next-address generator taking status bits and the opcode mapping. Explain each block in a sentence, then give the comparison table with at least 6–8 points. Conclude that hard-wired control is chosen for speed and microprogrammed control for flexibility.`,
  },
};
