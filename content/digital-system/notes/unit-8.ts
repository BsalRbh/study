import type { TopicNote } from "@/content/types";

export const unit8Notes: Record<string, TopicNote> = {
  Introduction: {
    selfTest: [
      "What is the difference between a microprocessor and a microcomputer?",
      "Name the three buses in a microcomputer system.",
      "Give two advantages of designing with a microprocessor instead of random logic.",
    ],
    body: `**Definition.** A **microprocessor** is a complete central processing unit (CPU) fabricated on a single integrated circuit chip using LSI/VLSI technology. A **microcomputer** is a small digital computer built around a microprocessor, together with memory chips (RAM and ROM) and input-output interface chips, all connected by a system bus.

**Explanation.** Before microprocessors, every digital system had to be designed with its own gates, flip-flops and control logic (**random logic** or hardwired design). A microprocessor changes this approach. The hardware stays general-purpose and the specific task is defined by a **program stored in memory**. The same chip can control a washing machine, a traffic light or a calculator just by changing the program in ROM.

Advantages of microcomputer-based design:

- **Flexibility.** A change in the function only needs a change in the program, not new wiring.
- **Fewer components.** One microprocessor replaces hundreds of gates and flip-flops, so the circuit board is smaller and cheaper.
- **Reliability.** Fewer chips and connections mean fewer failure points.
- **Shorter design time.** The designer writes and tests software instead of building new hardware.

The main limitation is speed: a program executes step by step, so for very fast dedicated tasks hardwired logic can still be faster.

**Example.** Intel 8085 is a typical 8-bit microprocessor with an 8-bit data bus and a 16-bit address bus, so it can address 2¹⁶ = 64K bytes of memory. A microcomputer built around it would add a ROM chip for the program, a RAM chip for data, and an interface chip such as the 8255 for keyboard and display.

**How it's asked in exams.** *"Define microprocessor and microcomputer. What are the advantages of microcomputer-based design over conventional digital design?"* (4–8 marks). Give both definitions in separate sentences, then explain 4–5 advantages each in a full sentence, mention one limitation, and give an 8085-based example. Conclude that the microprocessor made digital design a programming task rather than a wiring task.`,
  },

  "Microcomputer Organization": {
    selfTest: [
      "Name the main blocks of a microcomputer and how they are connected.",
      "What does each of the address, data and control buses carry, and which are unidirectional?",
      "Why are bus buffers needed?",
    ],
    body: `**Definition.** **Microcomputer organization** describes how the microprocessor (CPU), memory (RAM and ROM) and input-output interface units are connected together through a common **system bus** to form a complete working computer.

**Explanation.** A microcomputer has four main blocks:

1. **Microprocessor (CPU).** Fetches and executes instructions. Internally it has an ALU, registers (accumulator, general-purpose registers, PC, SP, flags) and a control unit.
2. **ROM.** Holds the fixed program and constants. It is non-volatile.
3. **RAM.** Holds temporary data, variables and the stack. It is volatile.
4. **I/O interface.** Connects external devices (keyboard, display, printer) to the bus.

These blocks are connected by three buses:

| Bus | Carries | Direction | Typical width |
|---|---|---|---|
| Address bus | Address of the memory word or I/O port | Unidirectional (CPU → out) | 16 bits (64K locations) |
| Data bus | Instructions and data | Bidirectional | 8 bits |
| Control bus | Timing and control signals (RD, WR, IO/M, interrupt, bus request/grant, reset) | Mixed | Several lines |

**Bus buffers.** A microprocessor output can drive only a limited number of chips. **Bus buffers** (three-state drivers) are placed between the CPU and the bus to increase driving current and to allow the CPU to disconnect itself (high-impedance state), for example during DMA. The data bus uses **bidirectional** buffers.

**Memory and I/O selection.** Each memory chip has a **chip select (CS)** input. The higher-order address lines go to a decoder whose outputs drive the CS inputs, so each chip responds only to its own address range. This is called **address decoding** and is shown in a **memory address map**.

**Example.** For a 16-bit address bus with a 1K ROM and 1K RAM: address lines A₉–A₀ go to both chips to select a word inside the chip, while a higher line such as A₁₀ selects ROM (A₁₀ = 0, addresses 0000–03FF) or RAM (A₁₀ = 1, addresses 0400–07FF).

**How it's asked in exams.** *"Explain the organization of a microcomputer with a block diagram"* (8–12 marks). Draw the block diagram showing the microprocessor connected through bus buffers to the address bus, data bus and control bus, with ROM, RAM and I/O interface connected below. Explain each block and each bus in its own paragraph, include the bus table, and mention chip select and address decoding with a small memory map. Conclude that the common bus lets any component talk to the CPU using the same set of wires.`,
  },

  "Instructions (Basic Sets of Microprocessor Instructions) and Addressing Modes": {
    selfTest: [
      "Name the five basic categories of microprocessor instructions with one example each.",
      "What is the difference between immediate, direct and indirect addressing?",
      "How is the effective address calculated in relative and indexed addressing?",
    ],
    body: `**Definition.** The **instruction set** of a microprocessor is the list of all operations it can perform. An **addressing mode** is the rule that specifies how the operand of an instruction is located, that is, how the **effective address (EA)** is computed from the address field of the instruction.

**Basic sets of microprocessor instructions.** Instructions are grouped into these categories (8085 mnemonics used as examples):

| Category | Purpose | Examples |
|---|---|---|
| Data transfer | Copy data between registers, memory and I/O without changing it | MOV, MVI, LDA, STA, LXI, IN, OUT, PUSH, POP |
| Arithmetic | Add, subtract, increment, decrement | ADD, ADI, SUB, INR, DCR, DAA |
| Logical | Bitwise operations, compare, rotate, complement | ANA, ORA, XRA, CMP, RLC, RRC, CMA |
| Branch (program control) | Change the sequence of execution | JMP, JZ, JC, JNZ, CALL, RET, RST |
| Machine control | Control the processor itself | HLT, NOP, EI, DI |

Arithmetic and logical instructions update the **status flags** (carry, zero, sign, parity, auxiliary carry), and conditional branch instructions test these flags.

**Addressing modes.**

1. **Implied (implicit).** The operand is implied by the opcode itself. Example: CMA (complement accumulator); the operand is always A. STC (set carry) is another.
2. **Immediate.** The operand is part of the instruction. Example: MVI A, 25H loads the value 25H itself into A. No memory access for data is needed.
3. **Register.** The operand is in a CPU register named in the instruction. Example: MOV A, B copies register B into A.
4. **Direct (absolute).** The instruction contains the memory address of the operand. Example: LDA 2050H loads A from memory location 2050H; EA = 2050H.
5. **Register indirect.** A register pair holds the address of the operand. Example: MOV A, M with HL = 2050H reads M[2050H]; EA = contents of HL.
6. **Indirect.** The address field gives the location in memory where the effective address is stored. EA = M[address]. It needs two memory accesses.
7. **Relative.** EA = PC + offset, where the offset is a signed number in the instruction. Used by short branch instructions. Example: if PC = 1000H after fetch and the offset is 08H, the branch goes to 1008H.
8. **Indexed.** EA = contents of the index register + address field. Used for accessing arrays. Example: if the base address is 3000H and the index register holds 05H, the operand is at 3005H.

**Summary table.**

| Mode | Where the operand is | Example |
|---|---|---|
| Implied | Fixed by opcode | CMA |
| Immediate | In the instruction | MVI A, 25H |
| Register | In a CPU register | MOV A, B |
| Direct | M[address] | LDA 2050H |
| Register indirect | M[register pair] | MOV A, M (HL) |
| Indirect | M[M[address]] | Load via pointer word |
| Relative | M[PC + offset] | Short branch |
| Indexed | M[index + address] | Array access |

**How it's asked in exams.** *"What is an addressing mode? Explain different addressing modes with examples"* (8–12 marks) or *"Explain the basic sets of microprocessor instructions."* Define addressing mode and effective address, then write each mode in its own paragraph with an example instruction and a sentence saying exactly where the operand comes from. For the instruction-set question, explain each category with 2–3 examples and mention the flags. Conclude that multiple addressing modes give the programmer flexibility (pointers, arrays, relocatable code) and reduce the number of bits in the address field.`,
  },

  "Stack, Subroutines and Interrupt": {
    selfTest: [
      "What happens to SP during PUSH and POP in the 8085?",
      "Describe what CALL and RET do to the stack.",
      "Differentiate between maskable and non-maskable, and vectored and non-vectored interrupts.",
    ],
    body: `**Definition.** A **stack** is a portion of memory used as a **last-in first-out (LIFO)** list, whose top is pointed to by the **stack pointer (SP)** register. A **subroutine** is a self-contained group of instructions that can be called from any point in the main program and returns control to the point of call. An **interrupt** is an external or internal signal that causes the processor to suspend the current program temporarily and execute an **interrupt service routine (ISR)**.

**Stack.** In the 8085 the stack grows towards lower addresses. SP always points to the last byte stored.

- **PUSH** (for example PUSH B): SP ← SP − 1, M[SP] ← B; SP ← SP − 1, M[SP] ← C. SP decreases by 2.
- **POP** (for example POP B): C ← M[SP], SP ← SP + 1; B ← M[SP], SP ← SP + 1. SP increases by 2.

**Subroutines.** Subroutines save memory, because a repeated task is written once, and make programs modular. They use two instructions:

- **CALL address.** Pushes the return address (the address of the next instruction) onto the stack, then loads PC with the subroutine address.
- **RET.** Pops the return address from the stack into PC, so execution continues after the CALL.

**Example (CALL/RET with SP changes).** Let SP = 2000H. The instruction CALL 4000H is at address 1000H; it is 3 bytes, so the return address is 1003H.

| Step | Action | SP |
|---|---|---|
| Before CALL | — | 2000H |
| CALL 4000H | M[1FFFH] ← 10H (PC high), M[1FFEH] ← 03H (PC low), PC ← 4000H | 1FFEH |
| Subroutine runs | Instructions from 4000H | 1FFEH |
| RET | PC low ← M[1FFEH] = 03H, PC high ← M[1FFFH] = 10H, PC = 1003H | 2000H |

Because the stack is LIFO, subroutines can be **nested**: each CALL pushes a new return address and each RET pops the most recent one.

**Interrupts.** An interrupt is like a subroutine call triggered by hardware. The processor finishes the current instruction, pushes PC onto the stack, disables further interrupts and jumps to the ISR. The ISR saves registers (PUSH), services the device, restores registers (POP), enables interrupts (EI) and returns with RET.

Types of interrupts:

- **Maskable** (can be disabled with DI) vs **non-maskable** (cannot be disabled, used for emergencies like power failure). In the 8085, TRAP is non-maskable; RST 7.5, RST 6.5, RST 5.5 and INTR are maskable.
- **Vectored** (the ISR address is fixed by hardware, e.g. TRAP → 0024H, RST 7.5 → 003CH) vs **non-vectored** (the device supplies the address, e.g. INTR).
- **Hardware** (from pins) vs **software** (RST 0–7 instructions).

**Priority.** When several devices interrupt together, priority is resolved by **polling** (software checks each device in order) or by a **daisy-chain** (hardware passes the acknowledge signal from device to device; the nearest device has the highest priority). The 8085 priority order is TRAP, RST 7.5, RST 6.5, RST 5.5, INTR.

**How it's asked in exams.** *"What is a stack? Explain how it is used in subroutine call and return"* or *"What is an interrupt? Explain types of interrupts and interrupt priority"* (8–12 marks). Define each term, show PUSH/POP with SP changes, work the CALL/RET example with actual addresses, explain nested subroutines, then list interrupt types with 8085 examples and priority methods. Draw the diagram of main program → interrupt → ISR → return. Conclude that the stack is what makes both subroutines and interrupts return to the right place.`,
  },

  "Input-Output Interface": {
    selfTest: [
      "Why can't peripherals be connected directly to the system bus?",
      "Differentiate between memory-mapped I/O and isolated (I/O-mapped) I/O.",
      "What is handshaking?",
    ],
    body: `**Definition.** An **input-output interface** is the hardware unit that connects a peripheral device (keyboard, printer, display) to the system bus of the microcomputer, so that data can be transferred between the device and the CPU or memory.

**Explanation.** Peripherals cannot be connected directly to the bus for several reasons:

- They are often **electromechanical** and work very differently from electronic CPU circuits.
- Their **data transfer rate** is much slower than the CPU, so synchronization is needed.
- They use **different data codes and formats** (serial, parallel, ASCII).
- Their **operating modes** differ, and each must be controlled without disturbing the others.

An interface solves this. It contains **I/O ports** (registers), usually a **data register**, a **control register** and a **status register**, plus address decoding and control logic. Each port has an address so the CPU can select it.

**Addressing of I/O.**

| Feature | Isolated (I/O-mapped) I/O | Memory-mapped I/O |
|---|---|---|
| Address space | Separate for I/O and memory | Shared; ports use memory addresses |
| Instructions | Special IN and OUT | Any memory instruction (MOV, LDA, STA) |
| Control signal | IO/M line distinguishes | No separate signal needed |
| Address size (8085) | 8-bit port address, 256 ports | 16-bit, uses part of 64K memory |

**Asynchronous data transfer.** Because the CPU and device have independent clocks, transfers use:

- **Strobe control.** One control line (strobe) tells the other unit when data is valid. It is simple, but the source never knows if the data was received.
- **Handshaking.** Two control lines are used: the source raises *data valid*, and the destination replies with *data accepted*. Both units confirm every transfer.

**Modes of transfer.**

| Feature | Programmed I/O | Interrupt-driven I/O | DMA |
|---|---|---|---|
| Who controls the transfer | CPU, by program | CPU, when device interrupts | DMA controller |
| CPU waiting | CPU keeps polling the status flag | CPU does other work until interrupted | CPU is free, only gives up the bus |
| Speed | Slow | Medium | Fastest |
| Data path | Device → CPU → memory | Device → CPU → memory | Device → memory directly |
| Best for | Simple, slow devices | Keyboard, printer | Disk, bulk block transfer |

**Example.** A programmable peripheral interface such as the Intel **8255 PPI** provides three 8-bit ports (A, B, C) and a control register. The CPU writes a control word to set port A as input for a keyboard and port B as output for an LED display, then uses IN and OUT instructions with the port addresses.

**How it's asked in exams.** *"What is an I/O interface? Why is it needed?"*, *"Differentiate memory-mapped and isolated I/O"*, or *"Compare programmed I/O, interrupt-initiated I/O and DMA"* (8–12 marks). Give the definition and all four reasons for needing an interface, draw the block diagram of an interface unit showing data bus, address bus and control lines entering the port registers and the device lines leaving it, and include the relevant comparison table. Conclude with which method suits which kind of device.`,
  },

  "Direct Memory Access": {
    selfTest: [
      "What problem does DMA solve compared with programmed and interrupt I/O?",
      "What do the BR and BG signals do?",
      "Name the registers inside a DMA controller.",
    ],
    body: `**Definition.** **Direct memory access (DMA)** is a method of transferring a block of data directly between a high-speed I/O device and memory **without passing it through the CPU**. During the transfer the CPU gives up control of the buses, and a special circuit called the **DMA controller** manages the transfer.

**Explanation.** In programmed and interrupt-driven I/O every byte goes through the CPU (device → CPU register → memory), which wastes CPU time and limits speed. For fast devices such as magnetic disks, DMA lets the device and memory talk directly while the CPU is idle on the bus or doing internal work.

The CPU has two control signals for DMA (called HOLD and HLDA in the 8085):

- **BR (bus request).** Input from the DMA controller asking the CPU to release the buses.
- **BG (bus grant).** Output from the CPU telling the DMA controller that the buses are released. The CPU puts its address bus, data bus and RD/WR lines in the **high-impedance state**.

**DMA controller registers.**

- **Address register:** holds the memory address for the next word; incremented after each transfer.
- **Word count register:** holds the number of words to transfer; decremented after each transfer. When it reaches 0 the transfer is complete.
- **Control register:** specifies the mode of transfer (read or write).

**DMA transfer sequence.**

1. The CPU initialises the DMA controller through the data bus: starting memory address, word count, and read/write control.
2. The I/O device sends a **DMA request** to the DMA controller.
3. The DMA controller activates **BR = 1**.
4. The CPU finishes the current bus cycle, releases the buses and activates **BG = 1**.
5. The DMA controller places the address on the address bus and sends a **DMA acknowledge** to the device. Data moves directly between the device and memory using RD/WR.
6. After each word, the address register is incremented and the word count is decremented.
7. When the word count reaches 0, the DMA controller removes BR, the CPU sets BG = 0 and resumes control of the buses. The controller usually sends an **interrupt** to tell the CPU the block is done.

**Modes of DMA transfer.**

- **Burst (block) transfer.** The whole block is transferred in one continuous burst while the CPU waits. Fastest, used for disks.
- **Cycle stealing.** The DMA controller takes the bus for one word at a time, "stealing" one memory cycle from the CPU, then returns it. The CPU is slowed but not stopped.
- **Transparent (hidden) DMA.** Transfers happen only when the CPU is not using the bus, so the CPU is not slowed at all, but the transfer is slower.

**Example.** To read 512 bytes from a disk into memory starting at 3000H, the CPU loads address register = 3000H, word count = 512 and control = write-to-memory. The DMA controller then transfers bytes to 3000H, 3001H, … until the count reaches 0, and finally interrupts the CPU. The CPU executed no instruction per byte.

**How it's asked in exams.** *"What is DMA? Explain DMA transfer with a block diagram"* (8–12 marks) or a short note (4 marks). Draw the block diagram showing the CPU with BR and BG lines, the DMA controller with its address register, word count register and control register, the memory and the I/O device, all on the common address and data buses, with the DMA request and DMA acknowledge lines to the device. Explain BR/BG, write the transfer steps in order, describe burst and cycle-stealing modes, and include the programmed I/O vs interrupt I/O vs DMA comparison. Conclude that DMA gives the highest transfer speed for block devices while freeing the CPU for other work.`,
  },
};
