import type { TopicNote } from "@/content/types";

export const unit2Notes: Record<string, TopicNote> = {
  "Basic Definitions": {
    selfTest: [
      "What are the two values a Boolean variable can take?",
      "Name the three basic operations of Boolean algebra.",
      "What is meant by the complement of a variable?",
    ],
    body: `**Definition.** **Boolean algebra** is an algebraic system, introduced by George Boole in 1854, that deals with variables that can take only two values: 0 (false/LOW) and 1 (true/HIGH). It gives us a mathematical way to describe, analyse and simplify digital logic circuits.

**Explanation.** Like ordinary algebra, Boolean algebra is built from a set of elements, a set of operators and a set of postulates (axioms). The basic terms are:

- **Boolean variable.** A symbol such as A, B, x or y that can have the value 0 or 1 only.
- **Boolean constant.** The fixed values 0 and 1.
- **Literal.** A variable or its complement, for example A or A'.
- **Complement (NOT).** The inverse of a variable. If A = 1 then A' = 0, and if A = 0 then A' = 1.
- **AND operation (·).** A·B = 1 only when both A and B are 1. It behaves like logical multiplication.
- **OR operation (+).** A + B = 1 when at least one of A or B is 1. It behaves like logical addition.
- **Boolean expression.** A combination of variables, constants and operators, for example F = AB + A'C.

**Huntington's postulates.** Boolean algebra is formally defined on a set B = {0, 1} with two binary operators (+ and ·) satisfying these postulates:

1. **Closure.** The result of + or · on elements of B is also in B.
2. **Identity elements.** A + 0 = A and A · 1 = A.
3. **Commutative.** A + B = B + A and A · B = B · A.
4. **Distributive.** A · (B + C) = AB + AC and A + BC = (A + B)(A + C).
5. **Complement.** For every A there is an A' such that A + A' = 1 and A · A' = 0.
6. **Distinct elements.** There are at least two elements, 0 and 1, with 0 ≠ 1.

**Principle of duality.** Every valid Boolean identity remains valid if we interchange + with · and 0 with 1. For example, the dual of A + 0 = A is A · 1 = A.

**Example.**

| A | B | A' | A·B | A + B |
|---|---|---|---|---|
| 0 | 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 0 | 1 |
| 1 | 1 | 0 | 1 | 1 |

**How it's asked in exams.** *"What is Boolean algebra? State Huntington's postulates"* or *"Explain the principle of duality with an example"* (4–6 marks). Start with the definition and who introduced it, list the basic terms, write all six postulates in both + and · forms, and give one duality example. End with one line saying Boolean algebra is the mathematical foundation for designing and simplifying digital circuits.`,
  },

  "Basic Theorems and Properties of Boolean Algebra": {
    selfTest: [
      "Simplify A + AB.",
      "State De Morgan's two theorems.",
      "Prove that A + A'B = A + B.",
    ],
    body: `**Definition.** The **theorems of Boolean algebra** are rules derived from the basic postulates. They are used to manipulate and simplify Boolean expressions, which directly reduces the number of gates needed in a circuit.

**Explanation.** Each theorem has a dual form, obtained by swapping + with · and 0 with 1.

| Theorem | OR form | AND form (dual) |
|---|---|---|
| Identity | A + 0 = A | A · 1 = A |
| Null (dominance) | A + 1 = 1 | A · 0 = 0 |
| Idempotent | A + A = A | A · A = A |
| Complement | A + A' = 1 | A · A' = 0 |
| Involution | (A')' = A | (A')' = A |
| Commutative | A + B = B + A | AB = BA |
| Associative | A + (B + C) = (A + B) + C | A(BC) = (AB)C |
| Distributive | A + BC = (A + B)(A + C) | A(B + C) = AB + AC |
| Absorption | A + AB = A | A(A + B) = A |
| Redundancy | A + A'B = A + B | A(A' + B) = AB |
| De Morgan | (A + B)' = A'B' | (AB)' = A' + B' |

**De Morgan's theorems** are the most important in practice:

- **First theorem.** The complement of a sum equals the product of the complements: (A + B)' = A' · B'. So a NOR gate is equivalent to an AND gate with inverted inputs.
- **Second theorem.** The complement of a product equals the sum of the complements: (A · B)' = A' + B'. So a NAND gate is equivalent to an OR gate with inverted inputs.

**Example 1 (proof by truth table of (A + B)' = A'B').**

| A | B | A + B | (A + B)' | A' | B' | A'B' |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 1 | 1 | 1 |
| 0 | 1 | 1 | 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 0 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 | 0 | 0 | 0 |

The columns (A + B)' and A'B' are identical, so the theorem is proved.

**Example 2 (algebraic proof of A + A'B = A + B).**

- A + A'B = (A + A')(A + B) (distributive law)
- = 1 · (A + B) (complement law)
- = **A + B** (identity law)

**Example 3 (simplification).** F = AB + AB' + A'B = A(B + B') + A'B = A + A'B = **A + B**.

**How it's asked in exams.** *"State and prove De Morgan's theorems"* (4–6 marks) or *"Simplify the Boolean expression using Boolean laws"* (4–6 marks). For proofs, state the theorem in words and in symbols, then prove it with a full truth table and a sentence comparing the columns. For simplification, write the law used beside each line. Markers give marks for naming the law at every step.`,
  },

  "Boolean Functions": {
    selfTest: [
      "What is the difference between a minterm and a maxterm?",
      "Express F = A + B'C in sum-of-minterms form.",
      "What is the complement of F = AB + C?",
    ],
    body: `**Definition.** A **Boolean function** is an expression made of binary variables, the operators AND, OR and NOT, parentheses and an equals sign. For each combination of input values, the function gives an output of 0 or 1. A Boolean function can be shown as an algebraic expression, a truth table or a logic diagram.

**Explanation.** A function of n variables has 2ⁿ rows in its truth table. Two standard ways of writing it are important:

- **Minterm (standard product).** A product (AND) term that contains all n variables, each either complemented or not. A variable is complemented when its value is 0. For three variables, m₀ = A'B'C' and m₅ = AB'C. Each minterm is 1 for exactly one row.
- **Maxterm (standard sum).** A sum (OR) term that contains all n variables. A variable is complemented when its value is 1. For example, M₀ = A + B + C and M₅ = A' + B + C'. Each maxterm is 0 for exactly one row. Note that Mᵢ = (mᵢ)'.
- **Canonical SOP (sum of minterms).** The OR of all minterms for which F = 1, written F = Σm(...).
- **Canonical POS (product of maxterms).** The AND of all maxterms for which F = 0, written F = ΠM(...).
- **Standard (simplified) forms.** SOP and POS expressions whose terms do not need to contain every variable, such as F = AB + C.

**Complement of a function.** F' is obtained by applying De Morgan's theorem, or simply by taking the dual of F and complementing each literal. For example, if F = AB + C then F' = (A' + B')C'.

**Example.** F = A + B'C

| Row | A | B | C | F |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 |
| 2 | 0 | 1 | 0 | 0 |
| 3 | 0 | 1 | 1 | 0 |
| 4 | 1 | 0 | 0 | 1 |
| 5 | 1 | 0 | 1 | 1 |
| 6 | 1 | 1 | 0 | 1 |
| 7 | 1 | 1 | 1 | 1 |

- Sum of minterms: F = Σm(1, 4, 5, 6, 7) = A'B'C + AB'C' + AB'C + ABC' + ABC
- Product of maxterms: F = ΠM(0, 2, 3) = (A + B + C)(A + B' + C)(A + B' + C')
- Complement: F' = A'(B + C') = Σm(0, 2, 3)

**How it's asked in exams.** *"Express the Boolean function F = A + B'C in sum of minterms and product of maxterms"* or *"Define minterm and maxterm with examples"* (4–8 marks). Define both terms, draw the truth table, pick out the rows with F = 1 for Σm and F = 0 for ΠM, and write both the shorthand and the expanded form. Close by noting that Σm and ΠM of the same function always use complementary row numbers.`,
  },

  "Digital Logic Gates (Name, Graphic Symbol, Algebraic Function, Truth Table)": {
    selfTest: [
      "Which gates are called universal gates, and why?",
      "What is the output of an XOR gate when both inputs are 1?",
      "Write the algebraic function of a NOR gate.",
    ],
    body: `**Definition.** A **logic gate** is an electronic circuit that performs a basic Boolean operation on one or more binary inputs and produces a single binary output. Gates are the building blocks of every digital system.

**Explanation.** There are eight standard gates. For each one, the exam expects the name, graphic symbol, algebraic function and truth table.

| Gate | Graphic symbol (describe/draw) | Algebraic function | Output is 1 when |
|---|---|---|---|
| AND | D-shaped body, flat input side | F = A · B | all inputs are 1 |
| OR | Curved shield shape, pointed output | F = A + B | at least one input is 1 |
| NOT (inverter) | Triangle with a small bubble at the output | F = A' | input is 0 |
| Buffer | Triangle without a bubble | F = A | input is 1 |
| NAND | AND symbol with a bubble at the output | F = (AB)' | at least one input is 0 |
| NOR | OR symbol with a bubble at the output | F = (A + B)' | all inputs are 0 |
| XOR | OR symbol with an extra curved line at the input side | F = A ⊕ B = A'B + AB' | inputs are different |
| XNOR | XOR symbol with a bubble at the output | F = (A ⊕ B)' = AB + A'B' | inputs are the same |

**Combined truth table (two inputs).**

| A | B | AND | OR | NAND | NOR | XOR | XNOR |
|---|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 |

NOT gate: A = 0 gives 1, and A = 1 gives 0.

**Universal gates.** NAND and NOR are called **universal gates** because any Boolean function, and therefore any other gate, can be built using only NAND gates or only NOR gates. This makes chip manufacturing cheaper, since one gate type can be mass-produced.

**Example (NAND as a universal gate).**

- **NOT from NAND.** Tie both inputs together: (A · A)' = A'.
- **AND from NAND.** A NAND gate followed by a NAND used as an inverter: ((AB)')' = AB.
- **OR from NAND.** Invert A and B with two NAND inverters, then feed them to a third NAND: (A' · B')' = A + B (by De Morgan).

**How it's asked in exams.** *"Explain the basic logic gates with their symbol, algebraic function and truth table"* (8–12 marks), or *"Why are NAND and NOR called universal gates? Realise AND, OR and NOT using only NAND gates"* (6–8 marks). Take each gate in turn: a one-line definition, draw the graphic symbol, write the equation and give its truth table. For universal gates, draw the logic diagram of each realisation and write the Boolean proof beneath it. Finish with a concluding sentence on the importance of NAND/NOR in IC design.`,
  },

  "Simplification of Boolean Functions using K-Map Method (two and three variable maps)": {
    selfTest: [
      "Why are K-map columns ordered 00, 01, 11, 10 instead of 00, 01, 10, 11?",
      "How many variables are removed by a group of 4 cells?",
      "Simplify F(A, B) = Σm(1, 2, 3) using a K-map.",
    ],
    body: `**Definition.** A **Karnaugh map (K-map)** is a graphical method, introduced by Maurice Karnaugh in 1953, for simplifying Boolean functions. It is a grid of 2ⁿ cells for n variables, where each cell represents one minterm, and adjacent cells differ in only one variable.

**Explanation.** The rows and columns are labelled in **Gray code order** (00, 01, 11, 10), so that any two neighbouring cells differ by only one bit. When two adjacent cells both contain 1, the variable that changes between them cancels out (because X + X' = 1). This lets us remove variables visually instead of by long algebra.

**Layout of the maps.**

- **Two-variable map.** 4 cells. A labels the rows (0, 1), B labels the columns (0, 1). Cells: m₀ = A'B', m₁ = A'B, m₂ = AB', m₃ = AB.
- **Three-variable map.** 8 cells. A labels the rows (0, 1), BC labels the columns in the order 00, 01, 11, 10. Top row: m₀, m₁, m₃, m₂. Bottom row: m₄, m₅, m₇, m₆.

**Rules for grouping.**

1. Group only cells containing 1 (for SOP).
2. Each group must contain 1, 2, 4 or 8 cells (a power of 2).
3. Groups must be rectangles of adjacent cells. The map wraps around: the leftmost and rightmost columns are adjacent.
4. Make each group as large as possible. A group of 2 removes 1 variable, and a group of 4 removes 2 variables.
5. Use the fewest groups needed to cover every 1. Cells may be shared between groups.
6. For each group, write the product of the variables that stay constant across it. OR all the group terms together.

**Example 1 (two variables).** F(A, B) = Σm(1, 2, 3)

| A ↓ / B → | B = 0 | B = 1 |
|---|---|---|
| A = 0 | 0 | 1 |
| A = 1 | 1 | 1 |

- Bottom row (m₂, m₃): A stays 1 → **A**
- Right column (m₁, m₃): B stays 1 → **B**
- Result: **F = A + B**

**Example 2 (three variables).** F(A, B, C) = Σm(0, 2, 4, 5, 6)

| A ↓ / BC → | 00 | 01 | 11 | 10 |
|---|---|---|---|---|
| A = 0 | 1 (m₀) | 0 (m₁) | 0 (m₃) | 1 (m₂) |
| A = 1 | 1 (m₄) | 1 (m₅) | 0 (m₇) | 1 (m₆) |

- **Quad** of m₀, m₂, m₄, m₆ (the two end columns wrap around): only C = 0 stays constant → **C'**
- **Pair** of m₄, m₅: A = 1 and B = 0 stay constant → **AB'**
- Result: **F = C' + AB'**

Check: m₅ = 101 gives AB' = 1, and m₇ = 111 gives C' = 0 and AB' = 0, so F = 0. Both match the table. The original five-term expression with 15 literals is reduced to 2 terms with 3 literals.

**POS simplification.** Group the 0s instead of the 1s, write each group as a sum term (complementing variables that stay 1), and AND the groups together.

**How it's asked in exams.** Almost always a numeric question: *"Simplify F(A, B, C) = Σm(0, 2, 4, 5, 6) using a K-map and draw the logic diagram"* (6–8 marks). Write a one-paragraph definition, draw the labelled map with Gray-code headings, fill in the 1s, circle each group clearly, write the term for every group separately, then give the final simplified expression. Draw the logic diagram of the result using AND/OR/NOT gates. End with a sentence stating how many literals were saved. Many students lose marks by forgetting wrap-around groups or using a non-Gray column order.`,
  },
};
