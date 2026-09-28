import type { TopicNote } from "@/content/types";

export const unit7Notes: Record<string, TopicNote> = {
  "Introduction to Computer Design": {
    selfTest: [
      "Name the three major parts of a digital computer.",
      "What does the control unit do that the processor registers cannot do by themselves?",
      "What is a micro-operation?",
    ],
    body: `**Definition.** **Computer design** is the process of specifying the hardware of a digital computer: which registers it has, how they are connected, which instructions it understands, and how the control unit generates the timing signals that make each instruction happen. It brings together everything studied earlier (gates, flip-flops, registers, counters, decoders and memory) into one working system.

**Explanation.** A digital computer can be described at the **register-transfer level**. At this level we do not look at individual gates. Instead we describe the system as a set of registers and the **micro-operations** performed on the data stored in them. A micro-operation is an elementary operation done in one clock pulse, such as a transfer (AR ← PC), an increment (PC ← PC + 1), a clear (AC ← 0) or an addition (AC ← AC + DR).

Every computer design has three major parts:

- **Memory unit.** Stores both the program (instructions) and the data. Each location has an address.
- **Processor unit (datapath).** Contains the registers, the arithmetic logic unit (ALU) and the paths (a common bus) that move data between them.
- **Control unit.** Reads each instruction, decodes it and generates the sequence of control signals that tells the processor which micro-operation to perform at each clock pulse.

The design procedure followed in the textbook (Mano) is:

1. Decide the **system configuration**: memory size, word length and the list of registers.
2. Define the **instruction set** and instruction formats.
3. Design the **timing and control** (sequence counter, decoder, timing signals T₀, T₁, …).
4. List the micro-operations for **fetching and executing** each instruction.
5. Derive the logic for each register and the control gates from that list.

**Example.** In Mano's basic computer, memory has 4096 words of 16 bits each. The processor has registers such as AC (accumulator), DR (data register), AR (address register), PC (program counter) and IR (instruction register), all joined by a 16-bit common bus. The control unit uses a 4-bit sequence counter and a decoder to produce timing signals T₀ to T₁₅.

**How it's asked in exams.** Usually as the opening part of a long question: *"What is computer design? Explain the major components of a digital computer"* (4–8 marks). Define computer design and the register-transfer level, explain memory, processor and control unit in separate paragraphs, list the design steps, and draw a simple block diagram showing memory, processor registers and the control unit connected by the bus. End with a line saying that the control unit is what turns a set of registers into a stored-program computer.`,
  },

  "System Configuration": {
    selfTest: [
      "List the registers of Mano's basic computer with their bit sizes.",
      "Why is AR 12 bits while AC is 16 bits?",
      "What is the purpose of the common bus and how is a register selected onto it?",
    ],
    body: `**Definition.** The **system configuration** of a computer is the specification of its memory unit, its processor registers, the flip-flops and the way these are interconnected (normally a common bus). It is the first step of computer design because instructions and control are defined in terms of these registers.

**Explanation.** Mano's basic computer has a memory of **4096 words × 16 bits**. Since 4096 = 2¹², an address needs **12 bits**. The registers are:

| Register | Bits | Name | Function |
|---|---|---|---|
| DR | 16 | Data register | Holds the memory operand |
| AR | 12 | Address register | Holds the memory address |
| AC | 16 | Accumulator | Processor register for results |
| IR | 16 | Instruction register | Holds the instruction code |
| PC | 12 | Program counter | Holds the address of the next instruction |
| TR | 16 | Temporary register | Holds temporary data |
| INPR | 8 | Input register | Holds an input character |
| OUTR | 8 | Output register | Holds an output character |

There are also single-bit flip-flops: **I** (indirect bit), **E** (extended accumulator bit, the carry), **S** (start/stop), **R** (interrupt), **IEN** (interrupt enable), **FGI** and **FGO** (input and output flags).

**Common bus.** Connecting every register to every other register with separate wires would need a huge number of lines. Instead all registers share one **16-bit common bus**. Three select lines **S₂S₁S₀** drive a multiplexer that chooses which register (or memory) places its data on the bus: 1 = AR, 2 = PC, 3 = DR, 4 = AC, 5 = IR, 6 = TR, 7 = memory. The destination register loads the bus data when its **LD** (load) input is enabled at the clock edge. Registers AR, PC, DR, AC and TR also have **INR** (increment) and **CLR** (clear) inputs. The AC is loaded through an **adder and logic circuit** rather than directly from the bus.

**Example.** To perform AR ← PC, the control sets S₂S₁S₀ = 010 (PC on the bus) and enables LD of AR. On the next clock pulse the 12-bit content of PC is copied into AR.

**How it's asked in exams.** *"Explain the system configuration of a basic computer with the help of a block diagram"* (8–12 marks). Draw the block diagram showing memory and all registers connected to the 16-bit common bus with the S₂S₁S₀ select lines, the LD/INR/CLR inputs, and the adder/logic circuit feeding AC. Then give the register table above, explain the flip-flops, and explain how one transfer happens through the bus. Conclude that the common bus reduces wiring while allowing any register-to-register transfer in one clock pulse.`,
  },

  "Computer Instructions": {
    selfTest: [
      "Draw the 16-bit instruction format of the basic computer and label its fields.",
      "What is the difference between a direct and an indirect address?",
      "Name the three types of instruction codes and how the control unit recognises each.",
    ],
    body: `**Definition.** A **computer instruction** is a binary code that specifies an operation for the computer to perform, together with the operand or its address. The complete collection of instructions a computer understands is its **instruction set**. An instruction code is divided into an **operation code (opcode)** part and an **address** part.

**Explanation.** In Mano's basic computer every instruction is 16 bits long:

- Bit 15: **I**, the addressing mode bit (0 = direct, 1 = indirect).
- Bits 14–12: **opcode** (3 bits).
- Bits 11–0: **address** (12 bits).

With a **direct address** the address part is the actual location of the operand. With an **indirect address** the address part points to a memory word that holds the address of the operand, so one extra memory read is needed.

There are three types of instructions:

1. **Memory-reference instructions** (opcode 000 to 110). They use the address part. Examples: AND, ADD, LDA (load AC), STA (store AC), BUN (branch unconditionally), BSA (branch and save return address), ISZ (increment and skip if zero).
2. **Register-reference instructions** (opcode 111, I = 0, code 7xxx). The remaining 12 bits select an operation on AC or E. Examples: CLA (clear AC), CLE, CMA (complement AC), CME, CIR and CIL (circulate right/left), INC, SPA, SNA, SZA, SZE (skip tests), HLT (halt).
3. **Input-output instructions** (opcode 111, I = 1, code Fxxx). Examples: INP, OUT, SKI, SKO, ION (interrupt on), IOF (interrupt off).

**Instruction set completeness.** A useful set must cover all of these categories:

| Category | Purpose | Basic computer examples |
|---|---|---|
| Data transfer | Move data between memory and registers | LDA, STA |
| Arithmetic | Numeric computation | ADD, INC, CMA (for 2's complement) |
| Logical and shift | Bit manipulation | AND, CMA, CIR, CIL |
| Program control (branch) | Change the sequence of execution | BUN, BSA, ISZ, SPA, SZA |
| Input-output and control | Talk to devices, stop the machine | INP, OUT, ION, IOF, HLT |

**Example.** The instruction 0 010 0000 0100 0101 (hex 2045) has I = 0 and opcode 010 = LDA, so it means *load AC with the word at address 045*. The code 7800 is CLA and F800 is INP.

**How it's asked in exams.** *"Explain the instruction format and the types of instructions of a basic computer"* or *"What is meant by a complete instruction set?"* (8–12 marks). Draw the three instruction formats (memory-reference, register-reference, I/O) as labelled boxes, explain direct vs indirect addressing with an example, list examples of each type, and add the completeness table. End with one sentence on why these five categories are enough to write any program.`,
  },

  "Timing and Control": {
    selfTest: [
      "What is the job of the sequence counter (SC) and the 4 × 16 decoder?",
      "When does the SC get cleared to 0?",
      "Differentiate between hardwired and microprogrammed control.",
    ],
    body: `**Definition.** **Timing and control** is the part of the computer that produces the sequence of control signals needed to fetch, decode and execute each instruction. The timing of all registers is controlled by a single **master clock**, but a register changes only when its control input (LD, INR, CLR) is enabled by the control unit.

**Explanation.** There are two ways to build a control unit:

- **Hardwired control.** The control logic is built from gates, flip-flops, decoders and other digital circuits. It is fast, but changing it means rewiring.
- **Microprogrammed control.** The control information is stored in a control memory as microinstructions. It is slower but easy to modify.

Mano's basic computer uses **hardwired control**, made up of:

1. The **instruction register (IR)**. Bits 14–12 go to a **3 × 8 decoder** giving D₀ to D₇ (one line per opcode). Bit 15 goes to flip-flop **I**. Bits 11–0 go to the control logic gates.
2. A **4-bit sequence counter (SC)** that counts in binary from 0 to 15.
3. A **4 × 16 decoder** that converts the SC count into **timing signals T₀ to T₁₅**. Only one T is active at a time.
4. The **control logic gates**, which combine D₀–D₇, I, T₀–T₁₅ and the IR bits to generate every control signal.

The SC increments on every clock pulse, so T₀, T₁, T₂, … become active one after another. When an instruction finishes, the control clears SC (SC ← 0), so the next clock pulse starts again at T₀ for the next instruction.

**Example.** Suppose at time T₄ the SC must be cleared if the decoder output D₃ is active (the STA instruction). The control function is written D₃T₄: SC ← 0. The timing diagram shows T₀, T₁, T₂, T₃, T₄ as successive pulses; when D₃T₄ is true, CLR of SC is enabled and the next pulse is T₀ again, not T₅.

**How it's asked in exams.** *"Explain the control unit of a basic computer with a block diagram and timing diagram"* (8–12 marks). Draw the block diagram showing IR feeding the 3 × 8 decoder and I flip-flop, SC feeding the 4 × 16 decoder, and all outputs entering the control logic gates. Draw the timing diagram of the clock with T₀ to T₄ and show SC being cleared at D₃T₄. Also compare hardwired and microprogrammed control in a short table. Conclude that the sequence counter plus decoder is what lets one control unit step through every instruction in order.`,
  },

  "Execution of Instructions": {
    selfTest: [
      "Write the register transfers for the fetch cycle (T₀, T₁, T₂).",
      "Write the micro-operations for ADD and STA.",
      "How does BSA save the return address?",
    ],
    body: `**Definition.** **Execution of instructions** is the step-by-step sequence of micro-operations, controlled by the timing signals, by which the computer carries out a program. Each instruction passes through an **instruction cycle**: (1) fetch the instruction from memory, (2) decode it, (3) read the effective address if it is indirect, and (4) execute it. After this, control returns to fetch the next instruction.

**Fetch and decode.** PC is loaded with the address of the first instruction and SC is cleared to 0.

- T₀: AR ← PC
- T₁: IR ← M[AR], PC ← PC + 1
- T₂: D₀ … D₇ ← Decode IR(12–14), AR ← IR(0–11), I ← IR(15)

**Determine the type (at T₃).**

- D₇′IT₃: AR ← M[AR] (memory-reference, indirect: fetch the effective address)
- D₇′I′T₃: nothing (memory-reference, direct)
- D₇I′T₃: execute a register-reference instruction
- D₇IT₃: execute an input-output instruction

**Execution of memory-reference instructions (from T₄).**

| Instruction | Micro-operations |
|---|---|
| AND | D₀T₄: DR ← M[AR]; D₀T₅: AC ← AC ∧ DR, SC ← 0 |
| ADD | D₁T₄: DR ← M[AR]; D₁T₅: AC ← AC + DR, E ← Cout, SC ← 0 |
| LDA | D₂T₄: DR ← M[AR]; D₂T₅: AC ← DR, SC ← 0 |
| STA | D₃T₄: M[AR] ← AC, SC ← 0 |
| BUN | D₄T₄: PC ← AR, SC ← 0 |
| BSA | D₅T₄: M[AR] ← PC, AR ← AR + 1; D₅T₅: PC ← AR, SC ← 0 |
| ISZ | D₆T₄: DR ← M[AR]; D₆T₅: DR ← DR + 1; D₆T₆: M[AR] ← DR, if (DR = 0) then PC ← PC + 1, SC ← 0 |

Register-reference instructions finish at T₃, for example CLA: AC ← 0, INC: AC ← AC + 1, HLT: S ← 0. Every instruction ends with SC ← 0.

**Interrupt cycle.** If interrupts are enabled (IEN = 1) and a flag (FGI or FGO) is set, the flip-flop R is set to 1 outside T₀–T₂. Instead of a normal fetch, the computer then performs:

- RT₀: AR ← 0, TR ← PC
- RT₁: M[AR] ← TR, PC ← 0
- RT₂: PC ← PC + 1, IEN ← 0, R ← 0, SC ← 0

This saves the return address at location 0 and branches to location 1, where the interrupt service routine begins.

**Example.** Suppose PC = 100 and M[100] = 1200 in hex (I = 0, opcode 001 = ADD, address 200), with M[200] = 5 and AC = 3. T₀: AR = 100. T₁: IR = ADD 200, PC = 101. T₂: decode gives D₁, AR = 200, I = 0. T₃: nothing (direct). T₄: DR = 5. T₅: AC = 3 + 5 = 8, SC ← 0. The next fetch starts at address 101.

**How it's asked in exams.** *"Explain the instruction cycle with a flowchart"* or *"Write the micro-operations for the execution of ADD, LDA, STA, BUN, BSA and ISZ"* (8–12 marks). Draw the flowchart of the instruction cycle: start with SC ← 0, then T₀, T₁, T₂, then the decision on D₇ and I, branching to indirect fetch, register-reference or I/O execution, and back to T₀. Write every micro-operation with its control condition (such as D₁T₅), and for BSA or ISZ explain in a sentence *why* each step is needed. Conclude that every instruction, however complex, is just a fixed sequence of simple register transfers timed by T₀, T₁, T₂, ….`,
  },
};
