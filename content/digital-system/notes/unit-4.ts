import type { TopicNote } from "@/content/types";

export const unit4Notes: Record<string, TopicNote> = {
  "Introduction to Sequential Logic": {
    selfTest: [
      "What is the main difference between a combinational and a sequential circuit?",
      "Why does a sequential circuit need memory elements?",
      "What is the difference between synchronous and asynchronous sequential circuits?",
    ],
    body: `**Definition.** A **sequential logic circuit** is a digital circuit whose output depends not only on the present inputs but also on the **past history** of inputs, which is stored as the circuit's **present state**. It consists of a combinational circuit plus **memory elements** (flip-flops) connected in a feedback path.

**Explanation.** In a combinational circuit (adder, multiplexer, decoder), the output is decided only by the current inputs, so it has no memory. A sequential circuit remembers what has happened before. The memory elements store binary information, and this stored information is fed back to the combinational part together with the external inputs. The combinational part then produces the outputs and the **next state** of the memory elements.

| Point | Combinational circuit | Sequential circuit |
|---|---|---|
| Output depends on | Present inputs only | Present inputs and present state |
| Memory | None | Flip-flops / latches |
| Feedback path | No | Yes |
| Clock | Not needed | Usually needed |
| Examples | Adder, MUX, decoder | Flip-flop, register, counter |

Sequential circuits are divided into two types:

- **Synchronous sequential circuits.** The state changes only at discrete instants controlled by a common **clock** signal. They are easy to design and free of timing hazards, so almost all practical systems (processors, counters, registers) are synchronous.
- **Asynchronous sequential circuits.** The state can change at any moment the inputs change, without a clock. They can be faster, but they suffer from race conditions and are harder to design.

**Example.** A digital clock is a sequential circuit. When it shows 10:59 and the next clock pulse arrives, it moves to 11:00. It must remember that it was at 10:59 to know what comes next, which a combinational circuit cannot do.

**How it's asked in exams.** *"What is a sequential circuit? Differentiate between combinational and sequential circuits"* or *"Differentiate synchronous and asynchronous sequential circuits"* (4–6 marks). Write the definition, draw the block diagram (combinational circuit with memory elements in the feedback path, inputs on the left, outputs on the right), give a 4–5 point comparison table, and end with one line on why synchronous circuits are preferred in practice.`,
  },

  "Flip-Flops (Basic, RS, D, JK, T)": {
    selfTest: [
      "What happens in a basic NOR-gate SR latch when S = R = 1?",
      "How does the JK flip-flop remove the invalid state of the SR flip-flop?",
      "Write the characteristic equation of the T flip-flop.",
    ],
    body: `**Definition.** A **flip-flop** is a 1-bit memory element (bistable multivibrator) that has two stable states, 0 and 1, and stays in one of them until an input signal forces it to change. It has two complementary outputs, Q and Q'.

**1. Basic flip-flop (SR latch).** It is made from two cross-coupled NOR gates (or NAND gates). The output of each gate is fed back to an input of the other, which gives the circuit memory. It has no clock, so it responds immediately to its inputs.

| S | R | Q (NOR latch) | Action |
|---|---|---|---|
| 0 | 0 | No change | Hold (memory) |
| 0 | 1 | 0 | Reset |
| 1 | 0 | 1 | Set |
| 1 | 1 | Invalid (Q = Q' = 0) | Not allowed |

In the NAND latch the inputs are active-LOW, so S' = R' = 0 is the invalid condition.

**2. Clocked RS (SR) flip-flop.** Two AND/NAND gates are added in front of the latch so that S and R reach it only when the clock (CLK) is 1. When CLK = 0 the flip-flop holds its state.

| S | R | Q(t+1) | Action |
|---|---|---|---|
| 0 | 0 | Q | No change |
| 0 | 1 | 0 | Reset |
| 1 | 0 | 1 | Set |
| 1 | 1 | ? | Invalid |

Characteristic equation: **Q(t+1) = S + R'Q**, with the condition S·R = 0.

**3. D (Data/Delay) flip-flop.** A single input D is connected to S, and D' (through an inverter) to R. Because S and R are always complements, the invalid state can never occur. The output simply copies D at the clock edge.

| D | Q(t+1) | Action |
|---|---|---|
| 0 | 0 | Reset |
| 1 | 1 | Set |

Characteristic equation: **Q(t+1) = D**.

**4. JK flip-flop.** It is an SR flip-flop with the outputs fed back to the input gates (Q' to the J gate, Q to the K gate). This feedback turns the invalid state into a useful **toggle**.

| J | K | Q(t+1) | Action |
|---|---|---|---|
| 0 | 0 | Q | No change |
| 0 | 1 | 0 | Reset |
| 1 | 0 | 1 | Set |
| 1 | 1 | Q' | Toggle |

Characteristic equation: **Q(t+1) = JQ' + K'Q**.

**5. T (Toggle) flip-flop.** It is a JK flip-flop with J and K tied together as one input T.

| T | Q(t+1) | Action |
|---|---|---|
| 0 | Q | No change |
| 1 | Q' | Toggle |

Characteristic equation: **Q(t+1) = TQ' + T'Q = T ⊕ Q**.

**Example.** A JK flip-flop starts with Q = 0. If J = K = 1 is applied for three clock pulses, Q goes 0 → 1 → 0 → 1. This toggling is why T and JK flip-flops are used to build counters, while D flip-flops are used to build registers.

**How it's asked in exams.** Very common: *"What is a flip-flop? Explain the JK flip-flop with its logic diagram and truth table"* or *"Explain SR, D, JK and T flip-flops"* (6–12 marks). For each flip-flop write the definition, draw the logic diagram (NAND-gate based, with clock), give the characteristic table and characteristic equation, and state its main use. For JK, mention the race-around condition and how master-slave or edge-triggering solves it. Conclude that the JK flip-flop is the most versatile because it can work as SR, D or T.`,
  },

  "Triggering of Flip-Flops": {
    selfTest: [
      "What is the difference between level triggering and edge triggering?",
      "What is the race-around condition in a JK flip-flop?",
      "How does a master-slave flip-flop avoid the race-around condition?",
    ],
    body: `**Definition.** **Triggering** is the method by which the clock signal causes a flip-flop to change its state. A momentary change in the clock that allows the flip-flop to respond to its inputs is called a **trigger**.

**Explanation.** There are two main types of triggering.

**1. Level triggering.** The flip-flop responds to its inputs for the whole time the clock stays at a particular level.

- **Positive (high) level triggering:** active while CLK = 1.
- **Negative (low) level triggering:** active while CLK = 0.

A level-triggered device is really a **latch**. Its problem is that if the inputs change while the clock is high, the output changes too, and the output may change several times during one pulse.

**2. Edge triggering.** The flip-flop responds only at the instant the clock changes level, and ignores the inputs at all other times.

- **Positive edge triggering (↑):** at the rising edge, when CLK goes 0 → 1. Shown in the symbol by a small triangle (>) at the clock input.
- **Negative edge triggering (↓):** at the falling edge, when CLK goes 1 → 0. Shown by a triangle with a bubble (small circle) at the clock input.

Edge triggering is used in almost all modern circuits because the state changes exactly once per clock cycle.

**Race-around condition.** In a level-triggered JK flip-flop with J = K = 1, the output toggles. If the clock pulse width (tₚ) is longer than the propagation delay (Δt) of the flip-flop, the new output is fed back to the inputs while the clock is still high, so the output toggles again and again. At the end of the pulse the final state is unpredictable. This is the **race-around condition**. It can be avoided by:

- keeping tₚ < Δt < T (clock period), which is hard to guarantee,
- using **edge triggering**, or
- using a **master-slave JK flip-flop**.

**Master-slave flip-flop.** Two flip-flops are connected in series. The **master** is enabled when CLK = 1 and the **slave** is enabled when CLK = 0 (it receives the inverted clock). While CLK is high, the master reads J and K but the slave, and therefore the output, is frozen. When CLK falls, the master is locked and the slave copies it. Because the output changes only once per cycle, feedback cannot cause repeated toggling.

**Example.** A positive-edge-triggered D flip-flop with D = 1 sets Q = 1 only at the rising edge of the clock. Even if D changes to 0 while the clock is still high, Q stays 1 until the next rising edge.

**How it's asked in exams.** *"What is triggering? Explain level and edge triggering"*, *"What is the race-around condition? How is it eliminated?"* or *"Explain the master-slave JK flip-flop"* (4–8 marks). Define triggering, explain each type with a clock waveform (draw the timing diagram showing the rising and falling edges and where the output changes), explain race-around with the condition tₚ > Δt, and end with the remedy (master-slave or edge-triggered design).`,
  },

  "Flip-Flop Excitation Tables": {
    selfTest: [
      "What is the difference between a characteristic table and an excitation table?",
      "What values of J and K are needed to take a JK flip-flop from Q = 1 to Q = 0?",
      "Write the T input needed for each of the four transitions 0→0, 0→1, 1→0, 1→1.",
    ],
    body: `**Definition.** An **excitation table** of a flip-flop lists the input values that are required to cause each possible transition from the present state Q(t) to the next state Q(t+1). It is the reverse of the characteristic table: the characteristic table says "given these inputs, what is the next state?", while the excitation table says "given the desired change of state, what inputs are needed?".

**Explanation.** Excitation tables are the key tool in **designing** sequential circuits (counters, state machines). After the designer decides the sequence of states, the excitation table tells what must be applied to each flip-flop input. An **X** means *don't care*: the transition happens whether that input is 0 or 1, and these don't cares help simplify the K-maps.

**1. SR flip-flop**

| Q(t) | Q(t+1) | S | R |
|---|---|---|---|
| 0 | 0 | 0 | X |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | X | 0 |

**2. JK flip-flop**

| Q(t) | Q(t+1) | J | K |
|---|---|---|---|
| 0 | 0 | 0 | X |
| 0 | 1 | 1 | X |
| 1 | 0 | X | 1 |
| 1 | 1 | X | 0 |

**3. D flip-flop**

| Q(t) | Q(t+1) | D |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

(D is always equal to the next state: D = Q(t+1).)

**4. T flip-flop**

| Q(t) | Q(t+1) | T |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

(T = 1 whenever the state must change, so T = Q(t) ⊕ Q(t+1).)

**Example (how the JK row is derived).** For the transition 0 → 1, the flip-flop must end at 1. From the JK characteristic table, J = 1, K = 0 (set) gives 1, and J = 1, K = 1 (toggle from 0) also gives 1. Since K can be 0 or 1, the entry is J = 1, K = X. The same reasoning gives the other rows. JK has the most don't cares of all flip-flops, which is why JK designs usually give the simplest input logic.

**How it's asked in exams.** *"What is an excitation table? Write the excitation tables of SR, JK, D and T flip-flops"* (4–8 marks), or as the first step of a counter-design question. Define the term, contrast it with the characteristic table in one sentence, write all four tables neatly, explain the meaning of X, and conclude that these tables are used to find flip-flop input equations in the design procedure.`,
  },

  "Analysis of Sequential Circuits (State Table, State Diagram, State Equations, Flip-Flop Input Functions)": {
    selfTest: [
      "What is the difference between a state table and a state diagram?",
      "What is a flip-flop input function (input equation)?",
      "For a D flip-flop with D_A = Ax + Bx, what is A(t+1)?",
    ],
    body: `**Definition.** **Analysis** of a clocked sequential circuit means starting from its logic diagram and finding out how it behaves, that is, obtaining the sequence of states and outputs as a function of inputs. The behaviour is described with **input equations, state equations, a state table and a state diagram**.

**Explanation.** The four tools used are:

- **Flip-flop input functions (input equations).** Boolean expressions for the signals that drive each flip-flop input, read directly from the combinational logic. Example: D_A = Ax + Bx, or J_A = B, K_A = Bx'.
- **State equations.** Expressions for the next state of each flip-flop, written as A(t+1) = … . For D flip-flops the state equation equals the input equation. For JK or T flip-flops, substitute the input equations into the characteristic equation (Q(t+1) = JQ' + K'Q or Q(t+1) = T ⊕ Q).
- **State table (transition table).** A table listing every combination of present state and input, and the resulting next state and output. With m flip-flops and n inputs it has 2ᵐ⁺ⁿ rows.
- **State diagram.** A graphical form of the state table. Each state is a circle, and each transition is a directed arrow labelled *input/output* (Mealy) or with the output written inside the circle (Moore).

**Analysis steps:**

1. Identify the flip-flops, inputs and outputs.
2. Write the flip-flop input equations and the output equation.
3. Derive the state equations.
4. Build the state table.
5. Draw the state diagram and describe the behaviour.

**Example.** A circuit has two D flip-flops A and B, input x and output y, with:

- D_A = Ax + Bx, D_B = A'x, y = (A + B)x'
- State equations: A(t+1) = Ax + Bx, B(t+1) = A'x

| Present A | Present B | x | Next A | Next B | y |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 | 0 | 1 |
| 0 | 1 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 0 | 1 |
| 1 | 0 | 1 | 1 | 0 | 0 |
| 1 | 1 | 0 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 0 | 0 |

In the state diagram there are four circles (00, 01, 10, 11). For example, from 00 an arrow labelled 1/0 goes to 01, and from 01 an arrow labelled 1/0 goes to 11. Whenever x = 0 every state returns to 00, with output y = 1 from any state except 00. This is a Mealy circuit, because y depends on both the state and the input x.

**How it's asked in exams.** *"Explain the analysis procedure of a clocked sequential circuit with an example"* or *"Define state table and state diagram"* (8–12 marks). Define each term, list the analysis steps, then work a full example: input equations, state equations, a complete state table, and the state diagram (draw circles for each state with labelled arrows). Finish with one sentence describing what the circuit does.`,
  },

  "Design Procedure": {
    selfTest: [
      "List the main steps in designing a clocked sequential circuit.",
      "Which table is used to find the flip-flop inputs once the state table is known?",
      "Design the J and K inputs for a 2-bit synchronous up counter.",
    ],
    body: `**Definition.** The **design procedure** of a sequential circuit is the reverse of analysis. It starts from a word description of the required behaviour and ends with a logic diagram made of flip-flops and gates that performs it.

**Explanation.** The standard steps are:

1. **Understand the problem** and draw the **state diagram** from the word description.
2. **Reduce the number of states** if some states are equivalent (state reduction).
3. **Assign binary codes** to each state (state assignment). With n flip-flops you can have up to 2ⁿ states.
4. **Choose the type of flip-flop** (D, JK or T) and build the **state table**.
5. Extend the state table into an **excitation table**, adding the flip-flop input columns using the flip-flop excitation table.
6. **Simplify** each flip-flop input function and each output function using **K-maps**.
7. **Draw the logic diagram**.

**Example.** Design a 2-bit synchronous up counter (00 → 01 → 10 → 11 → 00) using JK flip-flops A (MSB) and B (LSB).

| Present A | Present B | Next A | Next B | J_A | K_A | J_B | K_B |
|---|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 0 | X | 1 | X |
| 0 | 1 | 1 | 0 | 1 | X | X | 1 |
| 1 | 0 | 1 | 1 | X | 0 | 1 | X |
| 1 | 1 | 0 | 0 | X | 1 | X | 1 |

Each input column is filled using the JK excitation table. For example, A goes 0 → 1 in the second row, so J_A = 1, K_A = X.

Simplifying with K-maps (using the don't cares):

- **J_A = B, K_A = B**
- **J_B = 1, K_B = 1**

So flip-flop B toggles on every clock pulse, and flip-flop A toggles only when B = 1. Both flip-flops share the same clock. Draw the logic diagram with B's J and K tied to logic 1 and A's J and K both connected to output B.

**How it's asked in exams.** *"Explain the design procedure of a sequential circuit"* or *"Design a 3-bit synchronous counter using JK (or T) flip-flops"* (8–12 marks). List every step with one explanatory sentence each, then work the example completely: state diagram, state table with excitation columns, a K-map for each input, the simplified equations, and the logic diagram. Conclude by stating the final input equations clearly, since markers look for them.`,
  },

  "Registers (4-bit register)": {
    selfTest: [
      "What is a register, and how many flip-flops does an n-bit register need?",
      "Why are D flip-flops normally used to build registers?",
      "What is the purpose of the load control input in a register?",
    ],
    body: `**Definition.** A **register** is a group of flip-flops used to store a binary word, with one flip-flop for each bit. An **n-bit register** contains n flip-flops and can store any n-bit binary value. It may also contain gates that control when new data is loaded.

**Explanation.** Registers are the basic storage units inside a CPU (accumulator, instruction register, program counter). D flip-flops are preferred because a D flip-flop simply copies its input at the clock edge, which is exactly what storage requires.

**4-bit register (simple).** Four D flip-flops share a **common clock** and a **common clear** input.

- Data inputs I₀, I₁, I₂, I₃ are connected to the D inputs.
- Outputs are A₀, A₁, A₂, A₃.
- At every rising clock edge (↑), all four inputs are transferred into the flip-flops at the same time. This is called **parallel loading**.
- The asynchronous **clear** input, when active, resets all flip-flops to 0 regardless of the clock.

**4-bit register with parallel load.** In a real system the register should not load new data on every clock pulse. A **Load** control input is added, using a 2-to-1 multiplexer (or AND-OR gates) in front of each D input:

- **Load = 1:** D = I, so the new data is loaded at the next clock edge.
- **Load = 0:** D = Q, so each output is fed back to its own input and the content is kept unchanged.

For each bit: **Dᵢ = Load · Iᵢ + Load' · Aᵢ**.

| Clear | Load | Clock | Operation |
|---|---|---|---|
| 1 (active) | X | X | All outputs reset to 0000 |
| 0 | 0 | ↑ | No change (hold) |
| 0 | 1 | ↑ | Load I₃I₂I₁I₀ |

**Example.** The register holds 0000. With I₃I₂I₁I₀ = 1010 and Load = 1, one rising clock edge makes A₃A₂A₁A₀ = 1010. If the inputs change to 0111 but Load = 0, the register still shows 1010 after the next edge.

**How it's asked in exams.** *"What is a register? Explain a 4-bit register with parallel load"* (4–8 marks). Define a register, draw the logic diagram (four D flip-flops with common clock and clear, and the Load-controlled gates in front of each), write the function table above, and explain what happens when Load = 0 and Load = 1. Conclude with the uses of registers in a computer.`,
  },

  "Shift Registers": {
    selfTest: [
      "Name the four types of shift registers based on input and output.",
      "How many clock pulses are needed to load 4 bits into a 4-bit SISO register?",
      "Show the contents of a 4-bit shift-right register after each clock when 1011 is shifted in.",
    ],
    body: `**Definition.** A **shift register** is a register whose stored bits can be moved (shifted) one position to the left or right on each clock pulse. It is built from D flip-flops connected in a chain, where the output of each flip-flop is connected to the input of the next, and all flip-flops share a common clock.

**Explanation.** Shift registers are used for serial-to-parallel and parallel-to-serial data conversion, temporary storage, time delay, and multiplication or division by 2. Based on how data enters and leaves, there are four types:

- **SISO (Serial-In Serial-Out).** Data enters one bit per clock and leaves one bit per clock. An n-bit SISO needs n clock pulses to load and n more to read out, so it acts as a delay line.
- **SIPO (Serial-In Parallel-Out).** Data enters serially, and all bits are available at the outputs at once. Used for serial-to-parallel conversion (for example, receiving data from a serial port).
- **PISO (Parallel-In Serial-Out).** All bits are loaded at once, then shifted out one by one. Used for parallel-to-serial conversion (for example, sending data over a single line).
- **PIPO (Parallel-In Parallel-Out).** Data is loaded and read in parallel. This is the ordinary storage register.

A **bidirectional shift register** can shift left or right under a control input, and a **universal shift register** can shift left, shift right, parallel load and hold, selected by two control lines through a 4-to-1 multiplexer at each flip-flop.

Shifting a binary number one place left multiplies it by 2, and shifting one place right divides it by 2.

**Example.** A 4-bit shift-right register (Q₃ → Q₂ → Q₁ → Q₀) starts at 0000. The number 1011 is entered serially at Q₃, LSB first, so the bits enter in the order 1, 1, 0, 1.

| Clock pulse | Serial input | Q₃ | Q₂ | Q₁ | Q₀ |
|---|---|---|---|---|---|
| Initial | – | 0 | 0 | 0 | 0 |
| 1 | 1 | 1 | 0 | 0 | 0 |
| 2 | 1 | 1 | 1 | 0 | 0 |
| 3 | 0 | 0 | 1 | 1 | 0 |
| 4 | 1 | 1 | 0 | 1 | 1 |

After 4 clock pulses the register holds **1011**. In a SIPO register it can now be read in parallel. In a SISO register four more clock pulses would push it out at Q₀.

**How it's asked in exams.** *"What is a shift register? Explain the types of shift registers"* or *"Explain a 4-bit SISO/SIPO shift register with a timing diagram"* (6–12 marks). Define the shift register, explain all four types with a sentence on the use of each, draw the logic diagram (four D flip-flops in a chain with common clock), show a shifting table like the one above, and draw the timing diagram showing the clock and each Q output. Conclude with the applications.`,
  },

  "Ripple Counters": {
    selfTest: [
      "Why is a ripple counter called an asynchronous counter?",
      "How many flip-flops are needed for a mod-8 counter, and what is its count range?",
      "What is the main disadvantage of a ripple counter?",
    ],
    body: `**Definition.** A **counter** is a sequential circuit that goes through a fixed sequence of states when clock pulses are applied. A **ripple counter** (asynchronous counter) is a counter in which only the first flip-flop is driven by the external clock, and each following flip-flop is clocked by the output of the previous one. The change of state therefore "ripples" through the flip-flops one after another.

**Explanation.** A ripple counter is built from T flip-flops, or JK flip-flops with J = K = 1, so that each flip-flop toggles every time it receives a clock edge.

- An **n-bit** counter has n flip-flops and counts 2ⁿ states, from 0 to 2ⁿ − 1. It is called a **mod-2ⁿ** counter.
- The first flip-flop (Q₀, the LSB) toggles on every clock pulse. Each higher flip-flop toggles when the flip-flop before it goes from 1 to 0.
- With **negative-edge-triggered** flip-flops, connecting Q of each stage to the clock of the next gives an **up counter**. Connecting Q' instead gives a **down counter**.
- Each flip-flop divides the frequency by 2, so Q₀ = f/2, Q₁ = f/4, Q₂ = f/8. Counters are therefore also used as **frequency dividers**.

**Advantages:** simple, needs few gates. **Disadvantages:** each flip-flop adds a propagation delay, so the total delay is n × tpd. This limits the maximum clock frequency and causes brief false (glitch) states while the ripple is in progress.

**Example.** A 3-bit (mod-8) ripple up counter using negative-edge-triggered JK flip-flops with J = K = 1:

| Clock pulse | Q₂ | Q₁ | Q₀ | Decimal |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 |
| 2 | 0 | 1 | 0 | 2 |
| 3 | 0 | 1 | 1 | 3 |
| 4 | 1 | 0 | 0 | 4 |
| 5 | 1 | 0 | 1 | 5 |
| 6 | 1 | 1 | 0 | 6 |
| 7 | 1 | 1 | 1 | 7 |
| 8 | 0 | 0 | 0 | 0 (repeats) |

**Ripple BCD (decade) counter.** A 4-bit ripple counter normally counts 0–15. To make it count 0–9, a NAND gate detects the state 1010 (Q₃ = 1 and Q₁ = 1) and immediately clears all flip-flops to 0000. So the counter goes 0000 → … → 1001 → 0000.

**How it's asked in exams.** *"What is a ripple counter? Explain a 3-bit (or 4-bit) asynchronous up counter with a timing diagram"* or *"Differentiate between asynchronous and synchronous counters"* (6–8 marks). Define counter and ripple counter, draw the logic diagram (clock to the first flip-flop only, each Q driving the next clock), write the count table, and draw the timing diagram showing the clock, Q₀, Q₁ and Q₂ waveforms with each output at half the frequency of the previous one. Conclude with the propagation delay disadvantage.`,
  },

  "Synchronous Counters (Binary and BCD counter)": {
    selfTest: [
      "How does a synchronous counter differ from a ripple counter?",
      "Write the J and K inputs for each flip-flop of a 4-bit synchronous binary counter.",
      "In a synchronous BCD counter, what state follows 1001?",
    ],
    body: `**Definition.** A **synchronous counter** is a counter in which the **same clock pulse is applied to all flip-flops at the same time**. Whether each flip-flop changes state is decided by combinational logic at its inputs, so all outputs change together.

**Explanation.** Because every flip-flop is triggered simultaneously, there is no ripple delay. The total delay is only one flip-flop delay plus one gate delay, so synchronous counters work at much higher speeds and produce no glitch states. The price is extra gating logic.

| Point | Ripple (asynchronous) | Synchronous |
|---|---|---|
| Clock | Only first flip-flop | All flip-flops together |
| Delay | n × tpd (adds up) | One flip-flop + gate delay |
| Speed | Slow | Fast |
| Circuit | Simple | Needs extra AND gates |
| Glitches | Yes | No |

**1. 4-bit synchronous binary counter (0 to 15).** Using JK flip-flops, a flip-flop must toggle only when all lower bits are 1.

- J₀ = K₀ = 1 (Q₀ toggles every pulse)
- J₁ = K₁ = Q₀
- J₂ = K₂ = Q₀Q₁
- J₃ = K₃ = Q₀Q₁Q₂

AND gates produce these products. For example, from 0111 all lower bits are 1, so on the next pulse all four flip-flops toggle to give 1000.

**2. Synchronous BCD (decade) counter (0 to 9).** It counts 0000 to 1001 and then returns to 0000. Designed with T flip-flops, the input equations are:

- T₀ = 1
- T₁ = Q₃'Q₀
- T₂ = Q₁Q₀
- T₃ = Q₃Q₀ + Q₂Q₁Q₀

The states 1010 to 1111 are unused and are treated as don't cares in the K-maps.

**Example (BCD count sequence).**

| Clock | Q₃ | Q₂ | Q₁ | Q₀ | Decimal |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 |
| 2 | 0 | 0 | 1 | 0 | 2 |
| 3 | 0 | 0 | 1 | 1 | 3 |
| 4 | 0 | 1 | 0 | 0 | 4 |
| 5 | 0 | 1 | 0 | 1 | 5 |
| 6 | 0 | 1 | 1 | 0 | 6 |
| 7 | 0 | 1 | 1 | 1 | 7 |
| 8 | 1 | 0 | 0 | 0 | 8 |
| 9 | 1 | 0 | 0 | 1 | 9 |
| 10 | 0 | 0 | 0 | 0 | 0 (reset) |

Check at 1001: T₀ = 1 so Q₀ → 0; T₁ = Q₃'Q₀ = 0 so Q₁ stays 0; T₂ = 0 so Q₂ stays 0; T₃ = Q₃Q₀ = 1 so Q₃ → 0. The next state is 0000, as required.

**How it's asked in exams.** *"Design a 4-bit synchronous binary counter"*, *"Design a synchronous BCD counter using T (or JK) flip-flops"* or *"Differentiate between synchronous and asynchronous counters"* (8–12 marks). Define the counter, write the state table with excitation columns, show the K-map for each input (using 1010–1111 as don't cares for BCD), write the simplified equations, and draw the logic diagram with a common clock line to all flip-flops. Conclude that synchronous counters are preferred where speed matters.`,
  },
};
