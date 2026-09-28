import type { TopicNote } from "@/content/types";

export const unit1Notes: Record<string, TopicNote> = {
  "Introduction to Analog and Digital Systems": {
    selfTest: [
      "What is the key difference between an analog and a digital signal?",
      "Give two reasons digital systems have replaced analog ones in computers.",
      "Name one real device that is analog and one that is digital.",
    ],
    body: `**Definition.** A *system* processes signals. An **analog system** works with continuous signals that can take any value within a range, while a **digital system** works with discrete signals that take only a limited set of values, usually just two (0 and 1).

**Explanation.** An analog signal changes smoothly over time. Examples are the voltage from a microphone or the height of mercury in a thermometer. Between any two values there are infinitely many others. A digital signal jumps between fixed levels. In a computer these are a LOW voltage (logic 0) and a HIGH voltage (logic 1).

Digital systems are preferred in computing for several reasons:

- **Noise immunity.** Small disturbances do not change a 0 into a 1, so the data stays exact.
- **Easy storage and copying.** Binary data can be stored in memory and copied any number of times without loss.
- **Easy to design.** Circuits are built from simple, repeatable logic gates.
- **Programmability.** The same hardware can perform different tasks by changing the program.

The main drawback is that real-world quantities (sound, temperature) are analog. They must be converted with an ADC (analog-to-digital converter) before processing, and back with a DAC (digital-to-analog converter) for output.

**Example.** An old vinyl record stores sound as a continuous groove (analog). A music file on a phone stores the same sound as a long sequence of binary numbers (digital).

**How it's asked in exams.** Usually a short note or the opening part of a longer question: *"Differentiate between analog and digital systems"* (4–6 marks). Write the definitions, then a comparison of 4–5 points (nature of signal, noise, accuracy, storage, examples), and finish with one concluding sentence on why digital dominates computing.`,
  },

  "Number Systems (Binary, Octal, Decimal, Hexadecimal)": {
    selfTest: [
      "What is the base (radix) of the octal and hexadecimal systems?",
      "Which digits are allowed in hexadecimal?",
      "What is the place value of the leftmost digit in the binary number 1011?",
    ],
    body: `**Definition.** A **number system** is a way of representing numbers using a fixed set of symbols (digits). The number of distinct digits is called the **base** or **radix**. In a positional number system, each digit's value depends on its position.

**The four systems used in digital electronics:**

| System | Base | Digits | Example |
|---|---|---|---|
| Binary | 2 | 0, 1 | 1011₂ |
| Octal | 8 | 0–7 | 157₈ |
| Decimal | 10 | 0–9 | 245₁₀ |
| Hexadecimal | 16 | 0–9, A–F (A=10 … F=15) | 2F₁₆ |

**Explanation.** In any positional system, the value of a number is the sum of each digit multiplied by the base raised to the power of its position. Positions count from 0 on the right.

For example, in decimal: 245 = 2×10² + 4×10¹ + 5×10⁰.

- **Binary** is the natural language of computers, because each bit maps directly to an OFF/ON transistor state.
- **Octal and hexadecimal** are used as a compact shorthand for binary. One octal digit represents exactly 3 bits, and one hex digit represents exactly 4 bits. For example, a memory address like 1111 0010₂ is much easier to read as F2₁₆.

**Example.** The decimal value 11 is written as 1011 in binary, 13 in octal, and B in hexadecimal. It is the same quantity written in four different notations.

**How it's asked in exams.** *"What is a number system? Explain the different number systems used in digital computers"* (6–8 marks). Define base/radix, describe each system with its digits and an example, and explain why octal/hex are used alongside binary.`,
  },

  "Number Base Conversion": {
    selfTest: [
      "Convert 25₁₀ to binary.",
      "Convert 1101₂ to decimal.",
      "How many binary digits make up one hexadecimal digit?",
    ],
    body: `**Definition.** **Base conversion** means rewriting a number from one number system into another without changing its value.

**1. Decimal → any base (repeated division).** Divide the number by the target base and record the remainder. Keep dividing the quotient until it becomes 0. Then read the remainders from bottom to top.

Example: 25₁₀ to binary:

- 25 ÷ 2 = 12, remainder **1**
- 12 ÷ 2 = 6, remainder **0**
- 6 ÷ 2 = 3, remainder **0**
- 3 ÷ 2 = 1, remainder **1**
- 1 ÷ 2 = 0, remainder **1**

Reading bottom to top gives **25₁₀ = 11001₂**.

**2. Any base → decimal (positional weights).** Multiply each digit by the base raised to the power of its position, then add the results.

Example: 1101₂ = 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8 + 4 + 0 + 1 = **13₁₀**.

**3. Decimal fractions → binary (repeated multiplication).** Multiply the fraction by 2 and record the integer part (0 or 1). Repeat with the fractional part. Read the recorded bits from top to bottom.

Example: 0.625 → 0.625×2 = 1.25 (1), 0.25×2 = 0.5 (0), 0.5×2 = 1.0 (1), so **0.625₁₀ = 0.101₂**.

**4. Binary ↔ octal / hexadecimal (grouping).** Group the bits from the right, in 3s for octal or 4s for hex, padding with leading zeros if needed. Then replace each group with one digit.

Example: 110101₂ → 110 101 → **65₈**; 110101₂ → 0011 0101 → **35₁₆**.

To go from octal or hex to hex or octal, convert through binary first.

**How it's asked in exams.** Almost always a numeric question: *"Convert (156.75)₁₀ into binary, octal and hexadecimal."* Show every division or multiplication step in a table and box the final answer for each base. Markers give marks for the working, not just the answer.`,
  },

  "1's and 2's Complements": {
    selfTest: [
      "Find the 1's complement of 10110.",
      "Find the 2's complement of 10110.",
      "Why do computers use 2's complement instead of 1's complement?",
    ],
    body: `**Definition.** A **complement** is a way of representing the negative of a binary number so that subtraction can be done using addition circuits.

- The **1's complement** of a binary number is formed by inverting every bit (0 → 1, 1 → 0).
- The **2's complement** is formed by taking the 1's complement and adding 1.

**Explanation.** Designing separate hardware for subtraction would be costly. With complements, A − B can be calculated as A + (complement of B), so the same adder handles both.

**Why 2's complement is preferred:**

- **One zero.** 1's complement has two representations of zero (+0 = 0000 and −0 = 1111). 2's complement has only one (0000), which makes comparison logic simpler.
- **No end-around carry.** In 1's complement arithmetic, a carry out of the MSB must be added back to the result. 2's complement just discards it.
- **Wider range.** An n-bit 2's complement number covers −2ⁿ⁻¹ to +(2ⁿ⁻¹ − 1). For 8 bits, that is −128 to +127.

**Example.** Take the number 10110:

- 1's complement: invert every bit to get **01001**
- 2's complement: 01001 + 1 = **01010**

A useful shortcut for 2's complement: copy the bits from the right up to and including the first 1, then invert all the remaining bits to its left.

**How it's asked in exams.** *"Find the 1's and 2's complement of (10110100)₂"* (2–4 marks). Or combined with subtraction. Always write out the inverted number and the +1 step separately.`,
  },

  "Subtraction using 1's and 2's Complements": {
    selfTest: [
      "Subtract 0101 from 1001 using 2's complement.",
      "In 1's complement subtraction, what do you do with the end-around carry?",
      "How do you know the result is negative when using 2's complement subtraction?",
    ],
    body: `**Definition.** **Complement subtraction** computes A − B by adding A to the complement of B, instead of performing direct binary subtraction with borrows.

**Using 2's complement (A − B):**

1. Make both numbers the same length.
2. Find the 2's complement of B (the subtrahend).
3. Add it to A.
4. **If there is a carry** out of the MSB, discard it. The result is positive and is the answer.
5. **If there is no carry**, the result is negative. Take the 2's complement of the sum and put a minus sign in front.

Example: 1001 − 0101 (9 − 5):

- 2's complement of 0101 = 1010 + 1 = 1011
- 1001 + 1011 = **1**0100
- There is a carry, so discard it. Result = **0100 = 4** ✔

Example: 0101 − 1001 (5 − 9):

- 2's complement of 1001 = 0110 + 1 = 0111
- 0101 + 0111 = 1100
- There is no carry, so the result is negative. 2's complement of 1100 = 0100, so the answer is **−0100 = −4** ✔

**Using 1's complement (A − B):**

1. Find the 1's complement of B and add it to A.
2. **If there is a carry**, add it back to the least significant bit (**end-around carry**). The result is positive.
3. **If there is no carry**, the result is negative. Take the 1's complement of the sum and add a minus sign.

Example: 1001 − 0101 → 1's complement of 0101 = 1010. 1001 + 1010 = **1**0011. Add the carry back: 0011 + 1 = **0100 = 4** ✔

**How it's asked in exams.** *"Perform (1011)₂ − (1101)₂ using 1's and 2's complement methods"* (4–6 marks). Show each step on a separate line and state clearly whether a carry occurred. Finish with a line checking the answer in decimal. That verification line is an easy extra mark.`,
  },

  "Binary Codes (BCD, Excess-3, Gray Code, ASCII codes)": {
    selfTest: [
      "Write 47₁₀ in BCD.",
      "How is the Excess-3 code of a digit obtained?",
      "What is special about consecutive Gray code values?",
    ],
    body: `**Definition.** A **binary code** is a group of bits used to represent numbers, letters or symbols in a form that a digital system can store and process. Codes are chosen for different needs, such as easy decimal display, error-free transitions, or text representation.

**1. BCD (Binary Coded Decimal, 8421 code).** Each decimal digit is written separately as its own 4-bit binary number. It is a **weighted code**: the bit weights are 8, 4, 2, 1. Only 0000–1001 are valid; 1010–1111 are unused.

- Example: 47₁₀ → 4 = 0100, 7 = 0111 → **0100 0111**.
- Used in calculators, digital clocks and meters, where numbers are shown in decimal.

**2. Excess-3 (XS-3).** Add 3 (0011) to each decimal digit, then write the result in 4-bit binary. It is **non-weighted** and **self-complementing**: inverting all the bits gives the 9's complement, which simplifies decimal subtraction.

- Example: 4 → 4 + 3 = 7 → **0111**.

**3. Gray code (reflected binary code).** Two consecutive values differ in **only one bit**. This avoids false intermediate readings when several bits would otherwise change at the same moment. It is used in rotary/shaft encoders and in Karnaugh-map cell ordering.

- Binary to Gray: keep the MSB, then XOR each pair of neighbouring bits. Example: 1011₂ → 1, 1⊕0 = 1, 0⊕1 = 1, 1⊕1 = 0 → **1110** (Gray).

**4. ASCII (American Standard Code for Information Interchange).** A **7-bit alphanumeric code** that represents 128 characters: letters, digits, punctuation and control characters.

- Example: 'A' = 65 = 1000001, 'a' = 97, '0' = 48.
- It lets computers from different makers exchange text.

**How it's asked in exams.** *"Write short notes on BCD, Excess-3 and Gray code"* or *"Convert (1011)₂ into Gray code"*. For short notes, give the definition, how the code is formed, one worked example and one use for each. For conversions, show the XOR step bit by bit.`,
  },
};
