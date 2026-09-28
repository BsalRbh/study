import type { TopicNote } from "@/content/types";

export const unit1Notes: Record<string, TopicNote> = {
  "Introduction to Data and Data Types": {
    selfTest: [
      "What is the difference between data and information?",
      "Name four primitive data types in C.",
      "Is an array a primitive or a non-primitive (derived) data type?",
    ],
    body: `**Definition.** **Data** is a collection of raw facts and figures, such as numbers, characters or symbols, that has not yet been processed. When data is processed and organized so that it becomes meaningful, it is called **information**. A **data type** is a classification that tells the compiler what kind of value a variable can hold, how much memory it needs, and which operations can be performed on it.

**Explanation.** For example, the numbers 45, 67 and 82 on their own are data. When we say "the average mark of the class is 64.7", that is information. Every programming language needs data types, because the computer must know how many bytes to reserve and how to interpret the bit pattern stored there. A data type therefore defines two things: a **set of values** and a **set of operations** on those values. For example, the int type allows whole numbers and supports +, −, ×, / and %.

Data types are usually classified into the following groups:

- **Primitive (built-in / basic) data types.** These are provided directly by the language and are operated on directly by machine instructions. In C these are int, float, double, char and void (pointers are also treated as basic).
- **Derived data types.** These are built from primitive types, such as arrays, pointers and functions.
- **User-defined data types.** These are created by the programmer, such as structure, union, enum and typedef (and classes in C++).

| Data type | Stores | Typical size in C | Example |
|---|---|---|---|
| char | a single character | 1 byte | 'A' |
| int | whole numbers | 4 bytes (2 in old Turbo C) | 25 |
| float | single-precision real numbers | 4 bytes | 3.14 |
| double | double-precision real numbers | 8 bytes | 3.14159265 |

**Example.** In a student record, the roll number is stored as int (101), the name as an array of char ("Ram"), the percentage as float (78.5), and the whole record can be grouped using a user-defined structure called Student that contains all three fields.

**How it's asked in exams.** Usually the opening part of a question or a short note: *"What is data? Explain different data types with examples"* (4–6 marks). Define data and information, define data type as "values + operations", classify into primitive, derived and user-defined with one example each, add the size table, and conclude that choosing the right data type saves memory and prevents errors.`,
  },

  "Data Structure (DS)": {
    selfTest: [
      "Define data structure in one sentence.",
      "Classify the following as linear or non-linear: stack, tree, queue, graph.",
      "What is the difference between a static and a dynamic data structure?",
    ],
    body: `**Definition.** A **data structure** is a particular way of organizing, storing and managing data in a computer's memory so that it can be accessed and modified efficiently. It describes both the logical arrangement of the data and the operations allowed on it. Niklaus Wirth summarized the idea as: *Algorithms + Data Structures = Programs*.

**Explanation.** The same data can be stored in different ways, and the choice affects how fast a program runs and how much memory it uses. Data structures are classified as follows:

- **Primitive data structures** are the basic types operated on directly by machine instructions: int, float, char, pointer.
- **Non-primitive data structures** are built from primitive ones. They are divided into:
  - **Linear**, where elements form a sequence and each element has a unique predecessor and successor: array, stack, queue, linked list.
  - **Non-linear**, where elements are arranged in a hierarchy or network: tree, graph.
- **Static** structures have a size fixed at compile time (array), while **dynamic** structures grow and shrink at run time (linked list).

| Basis | Linear DS | Non-linear DS |
|---|---|---|
| Arrangement | Sequential, one after another | Hierarchical or network |
| Traversal | All elements in a single run | Needs multiple paths (e.g. tree traversals) |
| Levels | Single level | Multiple levels |
| Examples | Array, stack, queue, linked list | Tree, graph |

**Common operations** performed on any data structure are: **traversing** (visiting each element once), **searching** (finding an element), **insertion**, **deletion**, **sorting** (arranging in order) and **merging** (combining two structures).

**Importance.** The right data structure reduces running time (for example, binary search on a sorted array takes O(log n) instead of O(n)), uses memory efficiently, makes programs easier to maintain, and forms the foundation of operating systems, compilers, databases and networks.

**Example.** A bank counter queue follows FIFO order, so it is modelled by a queue. The undo feature of a text editor removes the most recent action first, so it is modelled by a stack. A road map between cities is modelled by a graph, and the folder system of a computer is modelled by a tree.

**How it's asked in exams.** Very frequent: *"What is data structure? Define its types with example"*, *"Explain data structure with its type and importance"* or *"Explain the importance of this subject in your syllabus"* (6 marks, sometimes part of a 12-mark question). Write the definition, draw or describe the classification (primitive / non-primitive → linear / non-linear), give one real example per type, list the operations, add 3–4 points of importance, and end with a concluding sentence that a good choice of data structure is the key to efficient programs.`,
  },

  "Abstract Data Type (ADT) and Applications": {
    selfTest: [
      "What does an ADT specify, and what does it deliberately hide?",
      "List the operations of the Stack ADT.",
      "Give two real applications of the Queue ADT.",
    ],
    body: `**Definition.** An **Abstract Data Type (ADT)** is a logical (mathematical) model of a data type that is defined by a set of values and a set of operations on those values, **without specifying how** the values are stored or how the operations are implemented. It tells *what* the data type does, not *how* it does it.

**Explanation.** An ADT separates the **interface** (the list of operations the user can call) from the **implementation** (the actual code and memory layout). This idea is called **data abstraction**, and hiding the internal details is called **encapsulation**. Because users depend only on the interface, the implementation can be changed, for example from an array to a linked list, without changing the programs that use it.

An ADT specification usually has three parts:

1. **Data / values:** the elements the type holds.
2. **Operations:** the functions allowed, with their inputs and outputs.
3. **Conditions (axioms):** rules such as "pop is not allowed on an empty stack".

**Advantages of ADTs:** abstraction (users need not know internal details), encapsulation (data is protected from misuse), modularity (each ADT can be developed and tested separately), reusability (the same ADT can be used in many programs) and easy maintenance.

**Example: Stack as an ADT.**

- **Values:** an ordered collection of elements where insertion and deletion happen only at one end called TOP (LIFO order).
- **Operations:** CreateStack() creates an empty stack; Push(S, x) inserts x at the top; Pop(S) removes and returns the top element; Peek(S) returns the top element without removing it; IsEmpty(S) returns true if the stack has no elements; IsFull(S) returns true if no more elements can be added.
- **Conditions:** Pop and Peek on an empty stack cause **underflow**; Push on a full stack causes **overflow**.

The same Stack ADT can be implemented with an array or a linked list, and the user program calling Push and Pop does not change.

**Applications of common ADTs:**

| ADT | Key operations | Applications |
|---|---|---|
| Stack | push, pop, peek | function calls, undo, expression evaluation, recursion, browser back button |
| Queue | enqueue, dequeue | printer spooling, CPU scheduling, ticket counters, BFS |
| List | insert, delete, search | playlists, polynomial representation, dynamic records |
| Tree / Graph | insert, traverse, search | file systems, maps, networks |

**How it's asked in exams.** Common as a 6-mark question or short note: *"What is an Abstract Data Type? Describe stack as an ADT with some applications"* or *"Short note: Abstract Data Type (ADT)"*. Define ADT, explain interface vs implementation and abstraction/encapsulation, write the Stack (or Queue) ADT with values, operations and conditions, list 3–4 applications, and conclude that ADTs make programs modular and implementation-independent.`,
  },
};
