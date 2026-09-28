import type { TopicNote } from "@/content/types";

export const unit2Notes: Record<string, TopicNote> = {
  "The RAM Model": {
    selfTest: [
      "In the RAM model, how many time steps does a simple operation such as an addition or an assignment take?",
      "Does the RAM model allow two instructions to run at the same time?",
      "Count the steps of: sum ← 0, then for i ← 1 to n do sum ← sum + A[i]. Is it O(1), O(n) or O(n²)?",
    ],
    body: `**Definition.** The **RAM (Random Access Machine) model** is a simple, hypothetical model of a computer used to analyze algorithms independently of any real machine, language or compiler. It lets us measure an algorithm's running time by **counting the number of basic steps** it performs.

**Explanation.** Real computers differ in processor speed, memory and compiler, so measuring time in seconds is not fair for comparing algorithms. The RAM model removes these differences by making the following assumptions:

- **Single processor, sequential execution.** Instructions are executed one after another; there is no parallelism.
- **Each simple operation takes exactly one time step.** Arithmetic (+, −, ×, /), comparison, assignment, array indexing, reading a variable and a function call/return each cost 1 step.
- **Loops and subroutines are not simple operations.** Their cost is the cost of their body multiplied by the number of times it runs.
- **Each memory access takes one step,** whether the data is in cache or RAM (hence "random access"), and memory is assumed to be unlimited.

Under these rules, the running time T(n) of an algorithm is the total number of steps expressed as a function of the input size n.

**Example.** Summing an array A of n elements:

1. sum ← 0 → 1 step
2. for i ← 1 to n → the loop test runs n + 1 times and the increment runs n times → 2n + 1 steps
3. sum ← sum + A[i] → runs n times → n steps
4. return sum → 1 step

Total T(n) = 1 + (2n + 1) + n + 1 = **3n + 3**. The exact constants do not matter much; what matters is that T(n) grows linearly with n, so the algorithm is **O(n)**.

**Limitations.** The model is a simplification: in reality multiplication may be slower than addition, cache access is faster than disk access, and memory is finite. Even so, the RAM model predicts real performance very well for comparing algorithms, which is why it is the standard basis of algorithm analysis.

**How it's asked in exams.** Usually a short note or the first part of an algorithm-analysis question: *"Explain the RAM model of computation"* (4–6 marks). Define it, list the 3–4 assumptions as full sentences, show a small step-counting example like the one above, state one limitation, and conclude that it gives a machine-independent way to compare algorithms.`,
  },

  "Algorithm Analysis": {
    selfTest: [
      "What are the best-case, worst-case and average-case numbers of comparisons for linear search on n elements?",
      "What is the time complexity of two nested loops, each running from 1 to n?",
      "What is the difference between time complexity and space complexity?",
    ],
    body: `**Definition.** An **algorithm** is a finite sequence of well-defined steps that solves a problem. **Algorithm analysis** is the process of determining the amount of resources, mainly **time** and **memory**, an algorithm needs as a function of the input size n, so that different algorithms for the same problem can be compared.

**Properties of a good algorithm.** Input (zero or more), output (at least one), definiteness (each step is clear), finiteness (it must terminate) and effectiveness (each step is basic enough to be carried out).

**Explanation.** Two measures are used:

- **Time complexity** is the amount of time (number of basic steps) an algorithm takes to run, as a function of n.
- **Space complexity** is the amount of memory it needs, made up of a **fixed part** (code, simple variables, constants) and a **variable part** (dynamically allocated memory, recursion stack). For example, an in-place sort needs O(1) extra space, while merge sort needs O(n).

Because the running time depends not only on n but also on the arrangement of the input, we analyze three cases:

- **Best case:** the minimum time over all inputs of size n (the most favourable input). It gives a lower bound and is usually described with Ω.
- **Worst case:** the maximum time over all inputs of size n. It gives a guarantee that the algorithm will never be slower, so it is the most commonly reported case (Big-O).
- **Average case:** the expected time over all possible inputs, assuming they are equally likely. It is often the most realistic but the hardest to calculate.

**Example 1: Linear search** for a key in an array of n elements.

| Case | Situation | Comparisons | Complexity |
|---|---|---|---|
| Best | key is at the first position | 1 | O(1) |
| Worst | key is at the last position or absent | n | O(n) |
| Average | key equally likely at any position | (1 + 2 + … + n) ÷ n = (n + 1) ÷ 2 | O(n) |

**Example 2: Counting a nested loop.**

1. for i ← 1 to n
2. for j ← 1 to n
3. count ← count + 1

The outer loop runs n times, and for each outer iteration the inner loop runs n times, so line 3 executes n × n = **n²** times. Therefore T(n) = O(n²). If instead the inner loop runs from 1 to i, line 3 executes 1 + 2 + … + n = n(n + 1) ÷ 2 times, which is still **O(n²)**. A loop in which i doubles each time (i ← i × 2 until i > n) runs about log₂ n times, giving **O(log n)**.

**Rules for counting:** consecutive statements add; nested loops multiply; for an if-else take the larger branch; drop constants and lower-order terms at the end.

**How it's asked in exams.** *"What is algorithm analysis? Explain best, worst and average case with example"* or *"Short note: Time Complexity vs Space Complexity"* (6 marks). Define algorithm and analysis, explain time vs space complexity, describe the three cases in full sentences, use linear search as the worked example with the comparison counts, and conclude that worst-case analysis is preferred because it gives a guaranteed upper limit.`,
  },

  "Asymptotic Notations: big O, sigma, theta, omega": {
    selfTest: [
      "Show that f(n) = 3n + 2 is O(n) by finding suitable values of c and n₀.",
      "Which notation gives a tight bound (both upper and lower)?",
      "Arrange in increasing order of growth: n², log n, 2ⁿ, n log n, n, 1.",
    ],
    body: `**Definition.** **Asymptotic notations** are mathematical tools used to describe the running time (or space) of an algorithm as the input size n grows very large (n → ∞). They ignore machine-dependent constants and lower-order terms and focus only on the **rate of growth** of the function.

**Explanation.** For large n, the highest-order term dominates. For example, in f(n) = 3n² + 5n + 20, the term 3n² dominates, so we say the growth is of order n². The main notations are as follows (f(n) is the algorithm's running time, g(n) is a simple comparison function, c is a positive constant and n₀ is a starting point):

**1. Big-O (O) — upper bound.** f(n) = O(g(n)) if there exist positive constants c and n₀ such that 0 ≤ f(n) ≤ c·g(n) for all n ≥ n₀. It means f grows **no faster** than g, and is used for the **worst case**.

*Example:* f(n) = 3n + 2. For n ≥ 2, 3n + 2 ≤ 3n + n = 4n. So with c = 4 and n₀ = 2, f(n) ≤ 4n, and therefore **3n + 2 = O(n)**.

**2. Big-Omega (Ω) — lower bound.** f(n) = Ω(g(n)) if there exist positive constants c and n₀ such that 0 ≤ c·g(n) ≤ f(n) for all n ≥ n₀. It means f grows **at least as fast** as g, and is used for the **best case**.

*Example:* 3n + 2 ≥ 3n for all n ≥ 1. So with c = 3 and n₀ = 1, **3n + 2 = Ω(n)**.

**3. Big-Theta (Θ) — tight bound.** f(n) = Θ(g(n)) if there exist positive constants c₁, c₂ and n₀ such that 0 ≤ c₁·g(n) ≤ f(n) ≤ c₂·g(n) for all n ≥ n₀. It means f grows **at exactly the same rate** as g. f(n) = Θ(g(n)) holds if and only if f(n) = O(g(n)) and f(n) = Ω(g(n)).

*Example:* combining the two results above, 3n ≤ 3n + 2 ≤ 4n for all n ≥ 2. So with c₁ = 3, c₂ = 4 and n₀ = 2, **3n + 2 = Θ(n)**.

**4. Little-o and little-omega (ω) — strict bounds.** (The syllabus word "sigma" refers to these.) f(n) = o(g(n)) means f grows **strictly slower** than g: f(n) < c·g(n) for **every** c > 0 once n is large enough. For example, n = o(n²), but n² is not o(n²). f(n) = ω(g(n)) means f grows **strictly faster** than g: for example, n² = ω(n).

| Notation | Bound | Meaning (rough analogy) | Used for | Example |
|---|---|---|---|---|
| O | upper | f ≤ g | worst case | 3n + 2 = O(n) |
| Ω | lower | f ≥ g | best case | 3n + 2 = Ω(n) |
| Θ | tight | f = g | exact growth | 3n + 2 = Θ(n) |
| o | strict upper | f < g | — | n = o(n²) |
| ω | strict lower | f > g | — | n² = ω(n) |

**Common complexity classes** (in increasing order of growth):

| Complexity | Name | Example algorithm |
|---|---|---|
| O(1) | constant | accessing A[i], push/pop on a stack |
| O(log n) | logarithmic | binary search |
| O(n) | linear | linear search, traversing a list |
| O(n log n) | linearithmic | merge sort, heap sort, average quick sort |
| O(n²) | quadratic | bubble, selection, insertion sort |
| O(n³) | cubic | simple matrix multiplication |
| O(2ⁿ) | exponential | naive recursive Fibonacci, Tower of Hanoi |

**Importance of Big-O.** It lets us compare algorithms independently of hardware, predicts how an algorithm scales to large inputs, and gives a guaranteed upper limit on running time. For n = 1000, an O(n²) algorithm needs about 1,000,000 steps while an O(n log n) one needs only about 10,000.

**How it's asked in exams.** Very frequent: *"Short note: Big O Notation"*, *"Explain the importance of a Big O notation. Explain the usage of theta notation"* (6 marks) or *"Explain asymptotic notations with examples"* (up to 12 marks). For each notation write the formal definition with c and n₀, say what bound it gives, and prove one example (3n + 2) by finding c and n₀. Add the comparison table and the complexity-class table, and conclude that asymptotic notation gives a machine-independent way to compare algorithm efficiency.`,
  },
};
