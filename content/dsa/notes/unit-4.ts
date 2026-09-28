import type { TopicNote } from "@/content/types";

export const unit4Notes: Record<string, TopicNote> = {
  "List as an Abstract Data Type": {
    selfTest: [
      "What is a list, and how is it different from a set?",
      "Name four operations of the List ADT.",
      "Name the two common ways to implement a list.",
    ],
    body: `**Definition.** A **list** is a finite, ordered sequence of elements of the same type, written as (a₁, a₂, …, aₙ), where a₁ is the first element, aₙ is the last, and n is the length of the list. When n = 0 the list is empty. As an **Abstract Data Type (ADT)**, a list is defined by the values it holds and the operations allowed on it, without fixing how it is stored in memory.

**Explanation.** In a list, every element except the first has a unique predecessor and every element except the last has a unique successor. Order matters and duplicates are allowed, which makes a list different from a mathematical set. The same List ADT can be implemented with an **array** (a static, contiguous list) or with a **linked list** (a dynamic list of nodes connected by pointers).

**List ADT specification.**

- **CreateList():** creates an empty list.
- **Insert(L, pos, x):** inserts x at position pos, shifting later elements one place.
- **Delete(L, pos):** removes the element at position pos.
- **Retrieve(L, pos):** returns the element at position pos.
- **Search(L, x):** returns the position of x, or "not found".
- **Length(L):** returns the number of elements.
- **isEmpty(L)** and **isFull(L):** test whether the list is empty or full.
- **Traverse(L):** visits every element once, e.g. to print it.

**Example.** A class attendance list (Ram, Sita, Hari) is a list of length 3. Insert(L, 2, Gita) gives (Ram, Gita, Sita, Hari); Delete(L, 1) then gives (Gita, Sita, Hari); Search(L, Hari) returns position 3.

**How it's asked in exams.** Usually as part of a question on ADTs or linked lists, e.g. *"What is an ADT? Explain list as an ADT"* (6 marks) or a short note (3 marks). Define list and ADT, list every operation with a one-line meaning and a small example, mention the two implementations, and conclude that the ADT view lets programmers use a list without worrying about whether it is an array or a linked list underneath.`,
  },

  "Primary List Operations": {
    selfTest: [
      "Why is insertion in the middle of an array list O(n)?",
      "Insert 25 at index 2 of the array list 10, 20, 30, 40. Which elements must move?",
      "Name five primary list operations.",
    ],
    body: `**Definition.** The **primary list operations** are the basic operations performed on any list: **traversal, insertion, deletion, searching, sorting, and merging**. How costly each one is depends on whether the list is stored in an array or as a linked list.

**Explanation.**

- **Traversal:** visiting each element exactly once, from first to last, e.g. to print or count them.
- **Insertion:** adding a new element at the beginning, the end, or a given position.
- **Deletion:** removing an element from the beginning, the end, or a given position.
- **Searching:** finding the position of a given value (linear search in an unsorted list, binary search in a sorted array).
- **Sorting:** arranging elements in ascending or descending order.
- **Merging:** combining two lists into one list.

**Algorithm: Insert ITEM at position POS in an array list A of N elements (size MAX):**

1. If N = MAX, print "Overflow" and stop.
2. For I ← N − 1 down to POS, set A[I + 1] ← A[I] (shift elements right).
3. A[POS] ← ITEM.
4. N ← N + 1 and stop.

**Algorithm: Delete the element at position POS from an array list A of N elements:**

1. If N = 0, print "Underflow" and stop.
2. ITEM ← A[POS].
3. For I ← POS to N − 2, set A[I] ← A[I + 1] (shift elements left).
4. N ← N − 1, return ITEM and stop.

**Example.** Insert 25 at index 2 in 10, 20, 30, 40: move 40 to index 4, move 30 to index 3, then store 25 at index 2, giving 10, 20, 25, 30, 40. Deleting index 1 from this list shifts 25, 30, 40 one place left, giving 10, 25, 30, 40.

**Cost comparison.**

| Operation | Array list | Linked list |
|---|---|---|
| Access k-th element | O(1) | O(n) |
| Insert/delete at beginning | O(n) (shifting) | O(1) |
| Insert/delete at a known node | O(n) | O(1) |
| Search (unsorted) | O(n) | O(n) |
| Traversal | O(n) | O(n) |

**How it's asked in exams.** *"Discuss different operations of linked list"* (part of a 12-mark question) or a 6-mark question on list operations. Define each operation in a full sentence with an example, write the insertion and deletion algorithms as numbered steps, show the shifting example, and conclude with the cost table explaining why linked lists are preferred when insertions and deletions are frequent.`,
  },

  "Static and Dynamic List Structure": {
    selfTest: [
      "Is an array a static or a dynamic list structure? Why?",
      "When is memory allocated for a dynamic list?",
      "Give one advantage and one disadvantage of each.",
    ],
    body: `**Definition.** A **static list structure** is a list whose size is fixed when the program is compiled or the list is created, and whose elements are stored in contiguous memory locations. The array is the standard static list. A **dynamic list structure** is a list whose size can grow and shrink at run time, with memory allocated for each element only when needed. The linked list is the standard dynamic list.

**Explanation.** In a static list, the programmer must guess the maximum size in advance. If too much is reserved, memory is wasted; if too little, overflow occurs. However, because elements are contiguous, any element can be reached directly by its index in constant time.

In a dynamic list, each element is stored in a separate **node** that contains the data and a pointer to the next node. Nodes are created with dynamic memory allocation (malloc/new) and released (free/delete) when deleted, so the list uses exactly as much memory as it needs. Nodes may be scattered in memory, so to reach the k-th element we must follow pointers from the first node.

**Comparison.**

| Basis | Static list (array) | Dynamic list (linked list) |
|---|---|---|
| Size | fixed at creation | grows and shrinks at run time |
| Memory allocation | compile time / once, contiguous | run time, per node, non-contiguous |
| Memory usage | may be wasted or insufficient | only what is needed, plus pointer overhead |
| Access to k-th element | direct, O(1) | sequential, O(n) |
| Insertion/deletion | needs shifting, O(n) | pointer change, O(1) at a known node |
| Overflow | when array is full | only when system memory is exhausted |
| Extra space | none | one pointer (or two) per node |
| Example | int marks[50] | list of nodes linked by NEXT pointers |

**Example.** Storing the marks of exactly 50 students is well suited to a static array, because the number is known and fast index access is useful. Storing the list of customers currently waiting in a bank, whose number keeps changing, suits a dynamic linked list.

**How it's asked in exams.** *"What are the merits and demerits of contiguous lists (arrays) and linked lists? Explain with examples"* (6 marks) or *"What are advantages and drawbacks of linked list over array?"*. Define both structures, explain memory allocation for each, give the comparison table with at least 5–6 points, add one example of when each is best, and conclude that the choice depends on whether fast access (array) or frequent insertion/deletion (linked list) matters more.`,
  },

  "Linked List as an Abstract Data Type": {
    selfTest: [
      "What are the two fields of a singly linked list node?",
      "What does START (HEAD) point to, and what is its value for an empty list?",
      "How is the end of a singly linked list recognised?",
    ],
    body: `**Definition.** A **linked list** is a linear, dynamic data structure made of a sequence of **nodes**, where each node contains a **data (INFO) field** holding the value and a **link (NEXT) field** holding the address of the next node. A pointer called **START** (or HEAD) holds the address of the first node, and the NEXT field of the last node is **NULL**. As an ADT, a linked list is described by the operations it supports, independent of the programming language used.

**Explanation.** Unlike an array, the nodes of a linked list need not be stored next to each other in memory; the NEXT pointers give the logical order. A new node is created only when an element is inserted, and its memory is freed when it is deleted. The list is empty when START = NULL.

**Linked list ADT operations.**

- **Create:** create an empty list (START ← NULL).
- **Insert:** add a node at the beginning, at the end, or before/after a given node.
- **Delete:** remove the first node, the last node, or a given node.
- **Traverse:** visit every node from START to NULL.
- **Search:** find the node containing a given value.
- **Count/Length, Reverse, Concatenate, Sort.**

**Algorithm: Traverse a linked list.**

1. PTR ← START.
2. While PTR ≠ NULL, repeat steps 3 and 4.
3. Process (e.g. print) PTR→INFO.
4. PTR ← PTR→NEXT.
5. Stop.

**Example.** START → (10, next) → (20, next) → (30, NULL). Traversal prints 10, 20, 30. Searching for 20 starts at the first node, compares 10 (no), moves to the next node and finds 20.

**Types of linked list.** Singly linked list (one NEXT pointer), doubly linked list (PREV and NEXT pointers), circular linked list (last node points back to the first), and circular doubly linked list.

**Advantages and drawbacks.** Advantages: dynamic size, efficient insertion and deletion without shifting, no memory wasted on unused cells. Drawbacks: extra memory for pointers, no direct (random) access to the k-th node, and more complex code.

**How it's asked in exams.** *"Explain linked list"* as the opening part of a 6- or 12-mark question, e.g. *"Discuss different operations of linked list. Write an algorithm to add new node as first node."* Define the linked list with the node structure, draw or describe START, nodes and NULL, list the operations with one sentence each, give the traversal algorithm, and conclude with its advantages over arrays.`,
  },

  "Singly & Doubly Linear Linked List, Circular Linked List": {
    selfTest: [
      "How many pointer fields does a node of a doubly linked list have?",
      "In a circular singly linked list, what does the NEXT of the last node point to?",
      "How do you know you have finished traversing a circular list?",
    ],
    body: `**Definition.**

- A **singly linked list (SLL)** is a linked list in which each node has one data field and **one pointer, NEXT**, to the following node. The last node's NEXT is NULL. Traversal is possible only in the forward direction.
- A **doubly linked list (DLL)** is a linked list in which each node has **three fields: PREV, INFO and NEXT**. PREV points to the previous node and NEXT to the next node. The first node's PREV and the last node's NEXT are NULL. Traversal is possible in both directions.
- A **circular linked list (CLL)** is a linked list in which the last node does not contain NULL but **points back to the first node**, forming a circle. It can be singly circular (last→NEXT = first) or doubly circular (also first→PREV = last).

**Explanation.** "Linear" linked lists (singly and doubly) have a clear end marked by NULL. In a circular list there is no NULL, so traversal starts at a node and stops when it comes back to the same node. A circular list is often accessed through a pointer to the **last** node, because then both the last node and the first node (last→NEXT) are reachable in one step.

**Node structures and examples.**

| Type | Node fields | Example (values 10, 20, 30) |
|---|---|---|
| Singly linear | INFO, NEXT | START → 10 → 20 → 30 → NULL |
| Doubly linear | PREV, INFO, NEXT | NULL ← 10 ⇄ 20 ⇄ 30 → NULL |
| Circular singly | INFO, NEXT | 10 → 20 → 30 → back to 10 |
| Circular doubly | PREV, INFO, NEXT | 10 ⇄ 20 ⇄ 30 ⇄ back to 10 |

**Algorithm: Traverse a circular singly linked list (START ≠ NULL).**

1. PTR ← START.
2. Print PTR→INFO.
3. PTR ← PTR→NEXT.
4. If PTR ≠ START, go to step 2.
5. Stop.

**Applications.**

- **Singly:** simple dynamic lists, stacks and queues, polynomial representation.
- **Doubly:** browser back/forward navigation, music playlists with previous/next, undo/redo, LRU caches.
- **Circular:** round-robin CPU scheduling (each process gets a turn, then back to the first), multiplayer turn-based games, circular buffers.

**Comparison.**

| Basis | Singly | Doubly | Circular |
|---|---|---|---|
| Pointers per node | 1 | 2 | 1 (or 2 if doubly circular) |
| Direction of traversal | forward only | forward and backward | forward, loops continuously |
| Last node points to | NULL | NULL | first node |
| Memory per node | least | more | same as its base type |
| Deletion of a given node | needs predecessor search | direct via PREV | needs predecessor (singly circular) |

**How it's asked in exams.** *"Short note: Difference between singly and doubly linked list"* (3 marks), *"What is doubly linked list?"* (part of 12 marks), or short notes on circular linked list. Define each type with its node structure, show a small example of each, list applications, give the comparison table, and conclude which type suits which situation.`,
  },

  "Advantages of Doubly over Singly Linked List": {
    selfTest: [
      "Give three advantages of a doubly linked list over a singly linked list.",
      "What is the main disadvantage of a doubly linked list?",
      "Why is deleting a given node faster in a DLL?",
    ],
    body: `**Definition.** A **doubly linked list (DLL)** is a linked list in which each node has a PREV pointer to its predecessor, an INFO field, and a NEXT pointer to its successor, while a **singly linked list (SLL)** node has only INFO and NEXT. The extra PREV pointer gives the DLL several advantages.

**Advantages of DLL over SLL.**

1. **Two-way traversal.** A DLL can be traversed forward from the first node and backward from the last node. In an SLL we can only go forward; to go back we must restart from START.
2. **Easier deletion of a given node.** If we have a pointer to a node in a DLL, its predecessor is simply node→PREV, so the node can be unlinked in O(1). In an SLL we must traverse from START to find the predecessor, which takes O(n).
3. **Easy insertion before a given node.** Inserting before node X only needs X→PREV, so no search is required. In an SLL this again needs a traversal to find the node before X.
4. **Reverse operations are simple.** Printing the list in reverse or processing it from the end needs no extra stack or reversal.
5. **Basis for advanced structures.** Deques, LRU caches, and browser history are naturally built on DLLs.

**Disadvantages (trade-off).** Each node needs extra memory for the PREV pointer, and every insertion or deletion must update more links (up to four instead of two), so the code is more complex and error-prone.

**Comparison.**

| Basis | Singly linked list | Doubly linked list |
|---|---|---|
| Node fields | INFO, NEXT | PREV, INFO, NEXT |
| Traversal | forward only | forward and backward |
| Delete a given node | O(n), need predecessor | O(1), predecessor is PREV |
| Insert before a given node | O(n) | O(1) |
| Memory per node | less | more (extra pointer) |
| Pointer updates per insertion | 2 | 4 |
| Example | simple stack | browser back/forward history |

**Example.** In the DLL 10 ⇄ 20 ⇄ 30, to delete 20 we set 20→PREV→NEXT ← 30 and 20→NEXT→PREV ← 10, then free 20. No traversal from the start is needed. In the SLL 10 → 20 → 30, we must first walk from START to find 10 before we can bypass 20.

**How it's asked in exams.** *"What is doubly linked list (DLL)? Discuss advantages of Doubly Linked List over Singly Linked List"* (part of a 12-mark question, 2025) or *"Difference between singly and doubly linked list"* (3 marks). Define both, list 4–5 advantages each as a full explained sentence with a small example, mention the memory trade-off, add the table, and conclude that the DLL trades a little extra memory for flexibility and faster deletion.`,
  },

  "Insertion/Deletion of a Node: Front, Last, Before/After a Given Node": {
    selfTest: [
      "Write the steps to insert a new node at the beginning of a singly linked list.",
      "What condition means underflow when deleting from a linked list?",
      "To delete the last node of a singly linked list, which node's NEXT must become NULL?",
    ],
    body: `**Definition.** **Insertion** adds a new node to a linked list and **deletion** removes a node from it, by changing pointers instead of shifting elements. The common positions are the **front (beginning)**, the **last (end)**, and **before or after a given node**. Below, START points to the first node, each node has INFO and NEXT, and NEWNODE is created with dynamic allocation (if no memory is available, it is an overflow).

**Insert at the front:**

1. Create NEWNODE; if memory is not available, print "Overflow" and stop.
2. NEWNODE→INFO ← ITEM.
3. NEWNODE→NEXT ← START.
4. START ← NEWNODE and stop.

**Insert at the last (end):**

1. Create NEWNODE; if not possible, print "Overflow" and stop.
2. NEWNODE→INFO ← ITEM and NEWNODE→NEXT ← NULL.
3. If START = NULL, set START ← NEWNODE and stop.
4. PTR ← START. While PTR→NEXT ≠ NULL, set PTR ← PTR→NEXT.
5. PTR→NEXT ← NEWNODE and stop.

**Insert after a given node (containing KEY):**

1. PTR ← START. While PTR ≠ NULL and PTR→INFO ≠ KEY, set PTR ← PTR→NEXT.
2. If PTR = NULL, print "KEY not found" and stop.
3. Create NEWNODE and set NEWNODE→INFO ← ITEM.
4. NEWNODE→NEXT ← PTR→NEXT.
5. PTR→NEXT ← NEWNODE and stop.

**Insert before a given node (containing KEY):**

1. If START→INFO = KEY, insert at the front (as above) and stop.
2. PREPTR ← START and PTR ← START→NEXT.
3. While PTR ≠ NULL and PTR→INFO ≠ KEY, set PREPTR ← PTR and PTR ← PTR→NEXT.
4. If PTR = NULL, print "KEY not found" and stop.
5. Create NEWNODE, set NEWNODE→INFO ← ITEM, NEWNODE→NEXT ← PTR and PREPTR→NEXT ← NEWNODE. Stop.

**Delete from the front:**

1. If START = NULL, print "Underflow" and stop.
2. PTR ← START.
3. START ← START→NEXT.
4. Free PTR and stop.

**Delete from the last:**

1. If START = NULL, print "Underflow" and stop.
2. If START→NEXT = NULL (only one node), free START, set START ← NULL and stop.
3. PREPTR ← START and PTR ← START→NEXT. While PTR→NEXT ≠ NULL, set PREPTR ← PTR and PTR ← PTR→NEXT.
4. PREPTR→NEXT ← NULL.
5. Free PTR and stop.

**Delete the node after a given node (containing KEY):**

1. Find PTR with PTR→INFO = KEY (as in insertion). If PTR = NULL or PTR→NEXT = NULL, print "No node to delete" and stop.
2. TEMP ← PTR→NEXT.
3. PTR→NEXT ← TEMP→NEXT.
4. Free TEMP and stop.

**Delete a given node from a doubly linked list (PTR points to it):**

1. If PTR→PREV ≠ NULL, set PTR→PREV→NEXT ← PTR→NEXT; otherwise START ← PTR→NEXT.
2. If PTR→NEXT ≠ NULL, set PTR→NEXT→PREV ← PTR→PREV.
3. Free PTR and stop.

**Example.** Start with START → 20 → 30 → NULL.

| Operation | Resulting list |
|---|---|
| Insert 10 at front | 10 → 20 → 30 → NULL |
| Insert 40 at end | 10 → 20 → 30 → 40 → NULL |
| Insert 25 after 20 | 10 → 20 → 25 → 30 → 40 → NULL |
| Insert 15 before 20 | 10 → 15 → 20 → 25 → 30 → 40 → NULL |
| Delete from front | 15 → 20 → 25 → 30 → 40 → NULL |
| Delete from last | 15 → 20 → 25 → 30 → NULL |
| Delete node after 20 | 15 → 20 → 30 → NULL |

Insertion and deletion at the front take O(1); at the end or at a searched position they take O(n) because of the traversal, but no elements are ever shifted.

**How it's asked in exams.** Extremely common: *"Write an algorithm to insert a node in the beginning of singly linked list"*, *"Write an algorithm to delete an element in the beginning of a singly linked list"* (6 marks), *"Write an algorithm to delete an element from the middle of doubly linked list"*. Define the linked list and node, write the requested algorithm as numbered steps with the overflow/underflow check first, show a before-and-after example, state the time complexity, and conclude that linked lists insert and delete by changing pointers only.`,
  },

  "Linked List implementation of Stack and Queue": {
    selfTest: [
      "In a linked stack, at which end are PUSH and POP done?",
      "Which pointers does a linked queue keep, and where does ENQUEUE insert?",
      "What is the underflow condition for a linked stack and for a linked queue?",
    ],
    body: `**Definition.** In a **linked implementation**, a stack or queue is built from dynamically allocated nodes (INFO, NEXT) instead of a fixed-size array. A **linked stack** uses one pointer, **TOP**, pointing to the first node. A **linked queue** uses two pointers, **FRONT** (first node) and **REAR** (last node).

**Explanation.** Because nodes are created only when needed, the size is not fixed, and overflow happens only when the system runs out of memory. In a linked stack, PUSH and POP both work at the beginning of the list, so both are O(1). In a linked queue, ENQUEUE inserts at REAR and DEQUEUE deletes at FRONT, and keeping the REAR pointer makes both O(1).

**Linked stack PUSH(ITEM):**

1. Create NEWNODE; if memory is not available, print "Stack Overflow" and stop.
2. NEWNODE→INFO ← ITEM.
3. NEWNODE→NEXT ← TOP.
4. TOP ← NEWNODE and stop.

**Linked stack POP():**

1. If TOP = NULL, print "Stack Underflow" and stop.
2. PTR ← TOP and ITEM ← TOP→INFO.
3. TOP ← TOP→NEXT.
4. Free PTR, return ITEM and stop.

**Linked queue ENQUEUE(ITEM):**

1. Create NEWNODE; if memory is not available, print "Queue Overflow" and stop.
2. NEWNODE→INFO ← ITEM and NEWNODE→NEXT ← NULL.
3. If FRONT = NULL, set FRONT ← NEWNODE and REAR ← NEWNODE.
4. Otherwise, set REAR→NEXT ← NEWNODE and REAR ← NEWNODE.
5. Stop.

**Linked queue DEQUEUE():**

1. If FRONT = NULL, print "Queue Underflow" and stop.
2. PTR ← FRONT and ITEM ← FRONT→INFO.
3. FRONT ← FRONT→NEXT.
4. If FRONT = NULL, set REAR ← NULL (queue is now empty).
5. Free PTR, return ITEM and stop.

**Example.**

| Operation | Linked stack (TOP first) | Linked queue (FRONT → REAR) |
|---|---|---|
| insert 10 | TOP → 10 | 10 |
| insert 20 | TOP → 20 → 10 | 10 → 20 |
| insert 30 | TOP → 30 → 20 → 10 | 10 → 20 → 30 |
| delete | returns 30; TOP → 20 → 10 | returns 10; 20 → 30 |

The same three insertions give opposite deletion orders: LIFO for the stack and FIFO for the queue.

**Array vs linked implementation.**

| Basis | Array implementation | Linked implementation |
|---|---|---|
| Size | fixed (MAX) | dynamic |
| Overflow | TOP = MAX − 1 / REAR = MAX − 1 | only when memory is exhausted |
| Underflow | TOP = −1 / FRONT = −1 | TOP = NULL / FRONT = NULL |
| Memory | may waste unused cells | extra pointer per node |
| Time of operations | O(1) | O(1) |

**How it's asked in exams.** *"Implement stack/queue using linked list"* or as part of a stack/queue question (6–12 marks). Define the linked stack and queue with their pointers, write PUSH/POP or ENQUEUE/DEQUEUE as separate numbered algorithms with the underflow check, trace a small example, compare with the array version, and conclude that the linked version removes the fixed-size limit while keeping O(1) operations.`,
  },
};
