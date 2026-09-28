import type { TopicNote } from "@/content/types";

export const unit5Notes: Record<string, TopicNote> = {
  "Principle of Recursion": {
    selfTest: [
      "What are the two essential parts of every recursive function?",
      "What happens if a recursive function has no base case?",
      "Trace FACT(3) and state the value it returns.",
    ],
    body: `**Definition.** **Recursion** is a technique in which a function calls itself, directly or indirectly, to solve a problem by breaking it into smaller sub-problems of the same type. A function that calls itself is called a **recursive function**.

**Principle (rules) of recursion.** Every correct recursive algorithm must satisfy three rules:

1. **Base case (terminating condition):** at least one case is solved directly without a recursive call. It stops the recursion.
2. **Recursive case:** the function calls itself on a **smaller** version of the problem.
3. **Progress toward the base case:** each recursive call must move closer to the base case, otherwise the recursion never ends. Infinite recursion keeps pushing frames onto the stack until a **stack overflow** occurs.

**How recursion works internally.** Each call creates an **activation record** (stack frame) holding its parameters, local variables and return address, and pushes it onto the **system stack**. When the base case is reached, the calls return one by one in reverse (LIFO) order, and each pending calculation is completed.

**Types of recursion:** **direct** (A calls A), **indirect** (A calls B and B calls A), **tail** (the recursive call is the last operation, so nothing is left to do after it returns) and **tree** recursion (the function makes more than one recursive call, as in Fibonacci).

**Example: factorial.** n! = 1 if n = 0 or 1, and n! = n × (n − 1)! otherwise.

1. Start FACT(n).
2. If n = 0 or n = 1, return 1. (base case)
3. Otherwise, return n × FACT(n − 1). (recursive case)
4. Stop.

Trace for FACT(4): FACT(4) = 4 × FACT(3) → FACT(3) = 3 × FACT(2) → FACT(2) = 2 × FACT(1) → FACT(1) = 1 (base case). Returning: FACT(2) = 2, FACT(3) = 6, FACT(4) = **24**.

| Basis | Recursion | Iteration |
|---|---|---|
| Method | function calls itself | loop (for / while) repeats statements |
| Termination | base case | loop condition becomes false |
| Memory | extra stack space for each call | no extra stack space |
| Speed | slower (call overhead) | faster |
| Code | short, elegant | often longer |
| Failure | stack overflow | infinite loop |

**Advantages:** short and readable code; natural for problems defined recursively (factorial, Fibonacci, TOH); ideal for trees and divide-and-conquer (merge sort, quick sort, binary search). **Disadvantages:** extra memory for the stack, slower because of function-call overhead, risk of stack overflow, and harder to trace and debug.

**How it's asked in exams.** *"Discuss the advantages of recursion. Write an algorithm to calculate factorial of given number using recursion"* or *"What is recursion? Differentiate recursion and iteration"* (6 marks). Define recursion, state the base case and recursive case rules, explain the system stack, write the numbered algorithm, trace a small value, add the recursion-vs-iteration table, and conclude with its main advantage and drawback.`,
  },

  "Applications: Fibonacci Sequence, Tower of Hanoi (TOH), Multiplication of Natural Numbers": {
    selfTest: [
      "How many moves are needed to solve the Tower of Hanoi with 4 disks?",
      "Using fib(0) = 0 and fib(1) = 1, what is fib(6)?",
      "Write the recursive definition of a × b for natural numbers using only addition.",
    ],
    body: `**Definition.** Recursion is best suited to problems whose solution can be expressed in terms of smaller instances of the same problem. Three classic applications are the Fibonacci sequence, the Tower of Hanoi and the multiplication of natural numbers.

**1. Fibonacci sequence.** Each term is the sum of the two previous terms: 0, 1, 1, 2, 3, 5, 8, 13, … It is defined as fib(n) = n if n ≤ 1, and fib(n) = fib(n − 1) + fib(n − 2) if n > 1. (Some books start with 1, 1; state the convention you use.)

Algorithm FIB(n):

1. If n ≤ 1, return n. (base cases fib(0) = 0, fib(1) = 1)
2. Otherwise, return FIB(n − 1) + FIB(n − 2).
3. Stop.

*Trace for fib(4):*

- fib(4) = fib(3) + fib(2)
- fib(3) = fib(2) + fib(1)
- fib(2) = fib(1) + fib(0) = 1 + 0 = 1
- so fib(3) = 1 + 1 = 2
- fib(2) (computed again) = 1
- so fib(4) = 2 + 1 = **3**

This makes **9 function calls** in total, and fib(2) is calculated twice. Because each call makes two more calls (tree recursion), the time complexity is **O(2ⁿ)** and the stack depth (space) is O(n).

**2. Tower of Hanoi (TOH).** There are three pegs (Source, Auxiliary, Destination) and n disks of different sizes stacked on Source with the largest at the bottom. The goal is to move all disks to Destination following three rules: only one disk is moved at a time; only the top disk of a peg can be moved; a larger disk can never be placed on a smaller one.

Algorithm TOH(n, Source, Aux, Dest):

1. If n = 1, move the disk from Source to Dest and return.
2. Move the top n − 1 disks from Source to Aux using Dest: TOH(n − 1, Source, Dest, Aux).
3. Move the nth (largest) disk from Source to Dest.
4. Move the n − 1 disks from Aux to Dest using Source: TOH(n − 1, Aux, Source, Dest).
5. Stop.

*Trace for TOH(3)* with pegs A (source), B (auxiliary), C (destination), disk 1 = smallest:

| Move | Disk | From → To |
|---|---|---|
| 1 | 1 | A → C |
| 2 | 2 | A → B |
| 3 | 1 | C → B |
| 4 | 3 | A → C |
| 5 | 1 | B → A |
| 6 | 2 | B → C |
| 7 | 1 | A → C |

Moves 1–3 shift the top two disks to B, move 4 places the largest disk on C, and moves 5–7 bring the two disks from B to C. The number of moves satisfies T(n) = 2T(n − 1) + 1 with T(1) = 1, which gives **T(n) = 2ⁿ − 1**. So 3 disks need 2³ − 1 = **7** moves and 4 disks need 2⁴ − 1 = 15 moves. The time complexity is **O(2ⁿ)**.

**3. Multiplication of natural numbers.** Multiplication can be defined as repeated addition: a × b = a if b = 1, and a × b = a + a × (b − 1) if b > 1.

Algorithm MUL(a, b):

1. If b = 1, return a. (base case)
2. Otherwise, return a + MUL(a, b − 1).
3. Stop.

*Trace for 4 × 3:* MUL(4, 3) = 4 + MUL(4, 2) = 4 + (4 + MUL(4, 1)) = 4 + (4 + 4) = **12**. The function is called b times, so the time complexity is O(b).

**How it's asked in exams.** *"Explain Tower of Hanoi with recursive algorithm for 3 disks"*, *"Write a recursive algorithm to generate the Fibonacci series"* or *"Write a recursive algorithm to multiply two natural numbers"* (6–12 marks). Write the definition of recursion, the recursive formula, the numbered algorithm, and a complete trace (the 7-move table for TOH(3), the call tree for fib(4)). Always state the total number of moves or calls and the complexity (2ⁿ − 1 moves, O(2ⁿ)), and conclude that recursion gives a short, elegant solution at the cost of extra stack memory.`,
  },
};
