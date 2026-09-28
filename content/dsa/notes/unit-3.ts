import type { TopicNote } from "@/content/types";

export const unit3Notes: Record<string, TopicNote> = {
  "Stack as an Abstract Data Type": {
    selfTest: [
      "What does ADT stand for, and what does an ADT hide from the user?",
      "What principle does a stack follow, and at which end do insertion and deletion happen?",
      "Name three real applications of a stack inside a computer.",
    ],
    body: `**Definition.** An **Abstract Data Type (ADT)** is a logical model of a data type that specifies *what* values it holds and *what* operations can be performed on them, without saying *how* those operations are implemented. A **stack** is a linear data structure in which insertion and deletion take place at only one end, called the **TOP**. It follows the **LIFO (Last In, First Out)** principle: the element inserted last is the first one removed.

**Explanation.** When we describe a stack as an ADT, we only list its data and its behaviour. The same stack ADT can later be implemented with an array or with a linked list, and the user of the stack does not need to know which one was chosen. This separation of the interface from the implementation is the main idea of an ADT.

**Stack ADT specification.**

- **Data:** an ordered collection of elements of the same type, with a pointer or index TOP marking the most recently inserted element.
- **CreateStack():** creates an empty stack (TOP = −1 in an array implementation).
- **PUSH(S, x):** inserts element x at the top of stack S.
- **POP(S):** removes and returns the top element of S.
- **PEEK(S) / TOP(S):** returns the top element without removing it.
- **isEmpty(S):** returns true if the stack has no elements.
- **isFull(S):** returns true if no more elements can be inserted (array implementation only).
- **Error conditions:** PUSH on a full stack gives **overflow**; POP or PEEK on an empty stack gives **underflow**.

**Applications of stack.**

- **Function calls and recursion:** the system stack stores return addresses and local variables of each active call.
- **Expression conversion and evaluation:** infix to postfix/prefix conversion and postfix evaluation.
- **Undo/Redo** in text editors and the **Back** button of a web browser.
- **Parenthesis matching** in compilers, e.g. checking that every "(" has a matching ")".
- **Reversing** a string or a list.

**Example.** A pile of plates in a canteen is a stack. Plates are PUSHed on top and POPped from the top. If we push 10, 20, 30 in that order, the top is 30, and the first POP returns 30, then 20, then 10.

**How it's asked in exams.** *"What is an Abstract Data Type? Describe stack as an ADT with some applications"* (12 marks) or *"What is stack? Define stack operations"* (6 marks). Define ADT first, then define stack with LIFO and a real example, list every operation with a one-line meaning, mention overflow and underflow, and give 4–5 applications with a sentence each. Conclude that the stack ADT separates behaviour from implementation, so it can be built with either an array or a linked list.`,
  },

  "Array Representation/Implementation of Stack": {
    selfTest: [
      "In an array stack of size MAX, what is the initial value of TOP?",
      "Write the condition for a full array stack.",
      "Stack size is 5. After PUSH 4, PUSH 7, POP, PUSH 9, what is TOP and which element is on top?",
    ],
    body: `**Definition.** In the **array representation** of a stack, the elements are stored in a one-dimensional array STACK[0 … MAX − 1] of fixed size MAX, and an integer variable **TOP** holds the index of the topmost element. An empty stack has TOP = −1.

**Explanation.** The bottom of the stack is at index 0 and the stack grows towards higher indices. PUSH first increases TOP and then stores the element; POP first reads the element at TOP and then decreases TOP. Because the array size is fixed, the stack can become full, so PUSH must check for **overflow** (TOP = MAX − 1), and POP must check for **underflow** (TOP = −1).

**Algorithm PUSH(STACK, TOP, MAX, ITEM):**

1. If TOP = MAX − 1, print "Stack Overflow" and stop.
2. TOP ← TOP + 1.
3. STACK[TOP] ← ITEM.
4. Stop.

**Algorithm POP(STACK, TOP):**

1. If TOP = −1, print "Stack Underflow" and stop.
2. ITEM ← STACK[TOP].
3. TOP ← TOP − 1.
4. Return ITEM and stop.

**Algorithm PEEK(STACK, TOP):**

1. If TOP = −1, print "Stack is empty" and stop.
2. Return STACK[TOP].

**Example.** Let MAX = 4 and the stack be empty (TOP = −1).

| Operation | TOP after | Array contents (index 0 → 3) | Remark |
|---|---|---|---|
| PUSH 10 | 0 | 10, –, –, – | |
| PUSH 20 | 1 | 10, 20, –, – | |
| PUSH 30 | 2 | 10, 20, 30, – | |
| POP | 1 | 10, 20, –, – | returns 30 |
| PUSH 40 | 2 | 10, 20, 40, – | |
| PUSH 50 | 3 | 10, 20, 40, 50 | stack now full |
| PUSH 60 | 3 | unchanged | Overflow, since TOP = MAX − 1 |

**Merits and demerits.** The array stack is simple, fast (every operation is O(1)) and needs no pointer memory. Its drawback is the fixed size: memory is wasted if the stack is mostly empty, and overflow occurs if more elements arrive than MAX.

**How it's asked in exams.** *"Implement a stack using an array checking the condition of underflow and overflow errors"* (12 marks) or *"Write the algorithm to implement PUSH and POP operations in Stack using Array"* (6 marks). Define the stack, describe the array and TOP variable, write both numbered algorithms with their overflow/underflow checks, show a trace table like the one above, and conclude with the O(1) efficiency and the fixed-size limitation.`,
  },

  "Primitive Stack Operations and Algorithm Efficiency": {
    selfTest: [
      "What is the time complexity of PUSH and POP in an array stack?",
      "What is the difference between POP and PEEK?",
      "Why does the time of PUSH not depend on how many elements are already in the stack?",
    ],
    body: `**Definition.** The **primitive operations** of a stack are the basic operations from which all stack-based algorithms are built: **PUSH**, **POP**, **PEEK (TOP)**, **isEmpty** and **isFull**. **Algorithm efficiency** measures how much time and memory each operation needs as the number of elements n grows, usually written in Big-O notation.

**Explanation of each operation.**

- **PUSH(x):** checks for overflow, increases TOP by one and stores x at STACK[TOP]. For example, pushing 5 onto a stack holding 2, 8 makes 5 the new top.
- **POP():** checks for underflow, returns STACK[TOP] and decreases TOP by one. The element is logically removed.
- **PEEK():** returns STACK[TOP] without changing TOP. It is used when we only want to look at the top, as in operator-precedence checks during infix-to-postfix conversion.
- **isEmpty():** returns true when TOP = −1.
- **isFull():** returns true when TOP = MAX − 1.
- **Traverse/Display:** prints elements from STACK[TOP] down to STACK[0].

**Efficiency.** Every primitive operation touches only the element at TOP, so it performs a fixed number of steps no matter how large the stack is.

| Operation | Time complexity | Reason |
|---|---|---|
| PUSH | O(1) | one comparison, one increment, one assignment |
| POP | O(1) | one comparison, one read, one decrement |
| PEEK | O(1) | one comparison and one read |
| isEmpty / isFull | O(1) | a single comparison |
| Display (traverse) | O(n) | every element is visited once |
| Search for a value | O(n) | may need to check every element |

The **space complexity** of an array stack is O(MAX), because the whole array is reserved in advance even if few elements are used. A linked-list stack uses O(n) space, only for the elements actually present, plus one pointer per node.

**Example.** A stack holds 3 elements or 3 million elements; a PUSH in both cases does exactly the same three steps (check, increment, store). That is why stacks are used inside the CPU for function calls, where speed matters.

**How it's asked in exams.** *"Explain different operations of stack with algorithm"* (6 marks) or *"Explain stack with its different operations with example"*. Define each operation in a full sentence, write the PUSH and POP algorithms as numbered steps, show a small push/pop example, and finish with the complexity table and a concluding line that all primitive stack operations run in constant time O(1).`,
  },

  "Stack Overflow and Underflow Conditions": {
    selfTest: [
      "Write the overflow condition and the underflow condition for an array stack.",
      "Can a linked-list stack overflow? When?",
      "MAX = 3. Which operation causes the error in: PUSH A, PUSH B, POP, POP, POP?",
    ],
    body: `**Definition.** **Stack overflow** is the error condition that occurs when we try to PUSH an element into a stack that is already full. **Stack underflow** is the error condition that occurs when we try to POP (or PEEK) from a stack that is empty.

**Explanation.** For an array stack STACK[0 … MAX − 1] with TOP initially −1:

- **Overflow condition:** TOP = MAX − 1. All MAX positions are occupied, so there is no index left for the new element.
- **Underflow condition:** TOP = −1. There is no element to remove.

A correct PUSH algorithm must test for overflow *before* incrementing TOP, and a correct POP algorithm must test for underflow *before* reading STACK[TOP]. Without these checks the program would write beyond the array boundary or read garbage, which can crash the program or corrupt other data.

For a **linked-list stack**, there is no fixed MAX, so overflow happens only when the system cannot allocate memory for a new node (the free-storage list AVAIL is empty, or malloc returns NULL). Underflow occurs when TOP = NULL.

| Condition | Array stack | Linked-list stack | Caused by |
|---|---|---|---|
| Overflow | TOP = MAX − 1 | new node cannot be allocated (AVAIL = NULL) | PUSH |
| Underflow | TOP = −1 | TOP = NULL | POP or PEEK |

**Example.** Let MAX = 3.

| Operation | TOP before | Check | Result | TOP after |
|---|---|---|---|---|
| PUSH A | −1 | −1 ≠ 2 | A stored | 0 |
| PUSH B | 0 | 0 ≠ 2 | B stored | 1 |
| PUSH C | 1 | 1 ≠ 2 | C stored | 2 |
| PUSH D | 2 | 2 = MAX − 1 | **Overflow** | 2 |
| POP ×3 | 2, 1, 0 | not −1 | returns C, B, A | −1 |
| POP | −1 | TOP = −1 | **Underflow** | −1 |

A familiar real case is the "stack overflow" error in programming, which appears when a recursive function has no proper base case and keeps calling itself until the system call stack is full.

**How it's asked in exams.** Usually part of a 6- or 12-mark stack question: *"Implement a stack using an array checking the condition of underflow and overflow errors."* Define both terms, state the exact conditions (TOP = MAX − 1, TOP = −1), place the checks as step 1 of PUSH and POP, show a trace that triggers both errors, and conclude that these checks make the stack safe and reliable.`,
  },

  "Prefix, Infix and Postfix Expression using Stack": {
    selfTest: [
      "Convert A + B × C to postfix.",
      "Evaluate the postfix expression 2 3 × 4 +.",
      "Why does a postfix expression need no parentheses?",
    ],
    body: `**Definition.** An arithmetic expression can be written in three notations, depending on where the operator is placed relative to its operands:

- **Infix:** operator between operands, e.g. A + B. This is how humans write, but it needs precedence rules and parentheses.
- **Prefix (Polish notation):** operator before operands, e.g. + A B.
- **Postfix (Reverse Polish notation):** operator after operands, e.g. A B +.

**Explanation.** Prefix and postfix expressions need no parentheses, because the position of each operator already fixes the order of evaluation. A computer can therefore evaluate a postfix expression in a single left-to-right scan with a stack. Compilers first convert infix to postfix and then evaluate the postfix form.

Operator precedence (highest first): **^** (exponent, right-associative), then **× /** , then **+ −** (all left-associative).

**Algorithm: Infix to Postfix.**

1. Create an empty stack and an empty output string. Scan the infix expression from left to right.
2. If the symbol is an operand, add it to the output.
3. If the symbol is "(", push it onto the stack.
4. If the symbol is ")", pop and add operators to the output until "(" is found; pop and discard the "(".
5. If the symbol is an operator, pop and add to the output every operator on top of the stack that has higher or equal precedence (for ^, only higher), then push the scanned operator.
6. When the expression ends, pop all remaining operators to the output.

**Worked example.** Convert A + (B × C − D) / E.

| Symbol | Stack | Postfix output |
|---|---|---|
| A | empty | A |
| + | + | A |
| ( | + ( | A |
| B | + ( | A B |
| × | + ( × | A B |
| C | + ( × | A B C |
| − | + ( − | A B C × |
| D | + ( − | A B C × D |
| ) | + | A B C × D − |
| / | + / | A B C × D − |
| E | + / | A B C × D − E |
| end | empty | A B C × D − E / + |

Postfix = **A B C × D − E / +**. The prefix form of the same expression is **+ A / − × B C D E** (for prefix by hand, fully bracket the expression and move each operator in front of its pair of operands).

**Algorithm: Evaluation of Postfix.**

1. Create an empty stack. Scan the postfix expression from left to right.
2. If the symbol is an operand, push it.
3. If the symbol is an operator, pop the top element as B, pop the next element as A, compute A operator B, and push the result.
4. At the end, the single value left on the stack is the result.

**Worked example.** Evaluate 6 5 2 3 + 8 × + 3 + ×.

| Symbol | Action | Stack (bottom → top) |
|---|---|---|
| 6, 5, 2, 3 | push each | 6, 5, 2, 3 |
| + | 2 + 3 = 5 | 6, 5, 5 |
| 8 | push | 6, 5, 5, 8 |
| × | 5 × 8 = 40 | 6, 5, 40 |
| + | 5 + 40 = 45 | 6, 45 |
| 3 | push | 6, 45, 3 |
| + | 45 + 3 = 48 | 6, 48 |
| × | 6 × 48 = 288 | 288 |

The result is **288**. Note that the order matters for − and /: in "8 2 /" we pop B = 2 and A = 8 and compute 8 / 2 = 4, not 2 / 8.

**How it's asked in exams.** *"Write an algorithm to convert an infix expression to postfix expression as an application of a stack"* (6 marks), *"Evaluate 2 3 × 6 4 − / using stack"* (6 marks) or as part of a 12-mark stack question. Define the three notations with an example each, write the algorithm as numbered steps, show a full symbol/stack/output table, box the final answer, and conclude that postfix is preferred by computers because it needs no parentheses or precedence checks during evaluation.`,
  },

  "Queue as an Abstract Data Type": {
    selfTest: [
      "What principle does a queue follow, and at which ends are insertion and deletion done?",
      "Name the two main queue operations.",
      "Give two differences between a stack and a queue.",
    ],
    body: `**Definition.** A **queue** is a linear data structure in which insertion is done at one end, called the **REAR**, and deletion is done at the other end, called the **FRONT**. It follows the **FIFO (First In, First Out)** principle: the element inserted first is the first one removed. As an **ADT**, the queue is described by its data and operations, independent of whether it is implemented with an array or a linked list.

**Queue ADT specification.**

- **Data:** an ordered collection of elements with two markers, FRONT (first element) and REAR (last element).
- **CreateQueue():** creates an empty queue (FRONT = REAR = −1 in an array implementation).
- **ENQUEUE(Q, x):** inserts x at the rear.
- **DEQUEUE(Q):** removes and returns the element at the front.
- **PEEK / FRONT(Q):** returns the front element without removing it.
- **isEmpty(Q)** and **isFull(Q):** test for the empty and full states.
- **Error conditions:** ENQUEUE on a full queue gives **overflow**; DEQUEUE on an empty queue gives **underflow**.

**Applications.** CPU and process scheduling, printer spooling (documents print in the order sent), keyboard buffers, customer service systems, and breadth-first search (BFS) in graphs.

**Stack vs Queue.**

| Basis | Stack | Queue |
|---|---|---|
| Principle | LIFO | FIFO |
| Ends used | one end (TOP) | two ends (FRONT and REAR) |
| Insertion | PUSH at TOP | ENQUEUE at REAR |
| Deletion | POP at TOP | DEQUEUE at FRONT |
| Pointers | one (TOP) | two (FRONT, REAR) |
| Example | pile of plates, undo | ticket counter line, printer jobs |

**Example.** People waiting at a bank counter form a queue. The person who arrived first is served first; a new customer joins at the back. If we ENQUEUE 10, 20, 30, the first DEQUEUE returns 10.

**How it's asked in exams.** *"Differentiate stack and queue with examples"* (6 marks), or a short note *"Queue operations"* (3 marks). Define the queue with FIFO and a real example, list its ADT operations, give 3–4 applications, and add a comparison table when stack is mentioned. End with a concluding line on why FIFO order suits scheduling problems.`,
  },

  "Array Representation/Implementation of Queue": {
    selfTest: [
      "What are the initial values of FRONT and REAR in an array queue?",
      "In ENQUEUE, which variable changes: FRONT or REAR?",
      "MAX = 5. After ENQUEUE 1, 2, 3 and one DEQUEUE, what are FRONT and REAR?",
    ],
    body: `**Definition.** In the **array representation** of a queue, elements are stored in a one-dimensional array QUEUE[0 … MAX − 1] with two integer variables: **FRONT**, the index of the first element, and **REAR**, the index of the last element. An empty queue has FRONT = REAR = −1.

**Explanation.** A new element is always stored at REAR + 1, and elements are always removed from FRONT. As a result, both FRONT and REAR only move forward (towards higher indices). When the last element is removed, both are reset to −1 so the queue becomes empty again.

**Algorithm ENQUEUE(QUEUE, MAX, FRONT, REAR, ITEM):**

1. If REAR = MAX − 1, print "Queue Overflow" and stop.
2. If FRONT = −1, set FRONT ← 0.
3. REAR ← REAR + 1.
4. QUEUE[REAR] ← ITEM.
5. Stop.

**Algorithm DEQUEUE(QUEUE, FRONT, REAR):**

1. If FRONT = −1 (or FRONT > REAR), print "Queue Underflow" and stop.
2. ITEM ← QUEUE[FRONT].
3. If FRONT = REAR (only one element), set FRONT ← −1 and REAR ← −1; otherwise set FRONT ← FRONT + 1.
4. Return ITEM and stop.

**Example.** Let MAX = 5.

| Operation | FRONT | REAR | Queue contents (index 0 → 4) |
|---|---|---|---|
| start | −1 | −1 | –, –, –, –, – |
| ENQUEUE 10 | 0 | 0 | 10, –, –, –, – |
| ENQUEUE 20 | 0 | 1 | 10, 20, –, –, – |
| ENQUEUE 30 | 0 | 2 | 10, 20, 30, –, – |
| DEQUEUE (returns 10) | 1 | 2 | –, 20, 30, –, – |
| ENQUEUE 40 | 1 | 3 | –, 20, 30, 40, – |
| DEQUEUE (returns 20) | 2 | 3 | –, –, 30, 40, – |

Notice that positions 0 and 1 are now free but can never be reused in this simple linear queue, because REAR only moves forward. Once REAR reaches MAX − 1, the queue reports overflow even though space exists at the front. This problem is solved by the **circular queue**.

**How it's asked in exams.** *"How can you insert and delete an item in a queue? Explain with an example"* (6 marks) or *"Write an algorithm to delete an element in linear queue"*. Define the queue and the FRONT/REAR variables, write ENQUEUE and DEQUEUE as separate numbered algorithms with their overflow and underflow checks, draw a trace table, and conclude by pointing out the wasted-space limitation that motivates circular queues.`,
  },

  "Primitive Queue Operations": {
    selfTest: [
      "List the primitive operations of a queue.",
      "What is the time complexity of ENQUEUE and DEQUEUE in an array queue?",
      "Which operation returns the front element without removing it?",
    ],
    body: `**Definition.** The **primitive operations** of a queue are the basic operations used to build every queue-based algorithm: **ENQUEUE (insert)**, **DEQUEUE (delete)**, **PEEK/FRONT**, **isEmpty** and **isFull**.

**Explanation of each operation.**

- **ENQUEUE(x):** checks for overflow and inserts x at the REAR. If the queue was empty, FRONT is also set to the first position. For example, enqueuing 50 into a queue 10, 20 gives 10, 20, 50.
- **DEQUEUE():** checks for underflow, removes the element at FRONT and moves FRONT one step forward. Dequeuing from 10, 20, 50 returns 10.
- **PEEK() / FRONT():** returns QUEUE[FRONT] without removing it, useful when a scheduler wants to see the next job.
- **isEmpty():** true when FRONT = −1 (or FRONT > REAR).
- **isFull():** true when REAR = MAX − 1 in a linear queue, or (REAR + 1) % MAX = FRONT in a circular queue.
- **Display:** prints elements from FRONT to REAR.

**Algorithm PEEK:**

1. If FRONT = −1, print "Queue is empty" and stop.
2. Return QUEUE[FRONT].

**Algorithm DISPLAY:**

1. If FRONT = −1, print "Queue is empty" and stop.
2. For I ← FRONT to REAR, print QUEUE[I].
3. Stop.

**Efficiency.**

| Operation | Time complexity |
|---|---|
| ENQUEUE | O(1) |
| DEQUEUE | O(1) |
| PEEK, isEmpty, isFull | O(1) |
| Display | O(n) |

ENQUEUE and DEQUEUE are constant time because they only use the FRONT or REAR index; no element is ever shifted. (A naive implementation that shifts all elements left after every deletion would make DEQUEUE O(n), which is why FRONT is moved instead.)

**Example.** A printer queue receives Doc1, Doc2, Doc3 (three ENQUEUEs). The printer calls PEEK to see Doc1, then DEQUEUE to print it; Doc2 becomes the new front.

**How it's asked in exams.** A short note *"Queue operations"* or *"Enqueue"* (3 marks), or part of a 6-mark question. For a short note, write one solid paragraph: definition, how the operation changes FRONT/REAR, the overflow/underflow check and one example. For longer answers, add the numbered algorithms and the complexity table, and conclude that all core queue operations run in O(1) time.`,
  },

  "Queue Overflow and Underflow Conditions": {
    selfTest: [
      "Write the overflow condition for a linear queue and for a circular queue.",
      "Write the underflow condition for an array queue.",
      "What is 'false overflow' in a linear queue?",
    ],
    body: `**Definition.** **Queue overflow** occurs when we try to ENQUEUE an element into a queue that is full. **Queue underflow** occurs when we try to DEQUEUE (or PEEK) from a queue that is empty.

**Explanation.** The exact conditions depend on the kind of queue.

| Queue type | Overflow condition | Underflow condition |
|---|---|---|
| Linear array queue | REAR = MAX − 1 | FRONT = −1 or FRONT > REAR |
| Circular array queue | (REAR + 1) % MAX = FRONT | FRONT = −1 |
| Linked-list queue | new node cannot be allocated | FRONT = NULL |

The ENQUEUE algorithm must test the overflow condition as its first step, and the DEQUEUE algorithm must test the underflow condition as its first step, so that the program never writes outside the array or returns a meaningless value.

**False overflow in a linear queue.** In a linear queue, REAR only moves forward. After some deletions, the front cells are empty, but once REAR = MAX − 1 the queue still reports overflow. This is called **false (or virtual) overflow**: the queue is not really full, it just cannot reuse the freed cells.

**Example.** MAX = 4.

| Operation | FRONT | REAR | Result |
|---|---|---|---|
| ENQUEUE A, B, C, D | 0 | 3 | queue full |
| ENQUEUE E | 0 | 3 | **Overflow** (REAR = MAX − 1) |
| DEQUEUE, DEQUEUE | 2 | 3 | A and B removed; cells 0 and 1 are free |
| ENQUEUE E | 2 | 3 | **Overflow again** in a linear queue (false overflow) |
| DEQUEUE, DEQUEUE | −1 | −1 | C and D removed; queue empty |
| DEQUEUE | −1 | −1 | **Underflow** (FRONT = −1) |

In a circular queue, the second "ENQUEUE E" would succeed: REAR becomes (3 + 1) % 4 = 0, and E is stored in cell 0.

**How it's asked in exams.** Usually inside a queue algorithm question (6 marks) or *"Discuss the disadvantage of linear queue over circular queue with example"*. Define both conditions, state the exact formulas in a table, explain false overflow with a trace, and conclude that the circular queue removes false overflow by reusing freed cells.`,
  },

  "Linear, Circular & Priority Queue": {
    selfTest: [
      "Which condition means a circular queue is full?",
      "MAX = 5, REAR = 4, FRONT = 2. Where will the next element be inserted in a circular queue?",
      "In a priority queue, which element is deleted first, and how are equal priorities handled?",
    ],
    body: `**Definition.**

- A **linear queue** is a FIFO queue stored in an array where FRONT and REAR only move forward; once REAR reaches the last cell, no more insertions are possible.
- A **circular queue** is a FIFO queue in which the last position of the array is logically connected back to the first, so the cells form a circle. Indices wrap around using the modulo operation: next position = (index + 1) % MAX.
- A **priority queue** is a queue in which every element has a priority, and the element with the **highest priority is deleted first**. Elements with equal priority are served in FIFO order.

**Circular queue algorithms.** Initially FRONT = REAR = −1.

**ENQUEUE (circular):**

1. If (REAR + 1) % MAX = FRONT, print "Queue Overflow" and stop.
2. If FRONT = −1, set FRONT ← 0 and REAR ← 0.
3. Otherwise, REAR ← (REAR + 1) % MAX.
4. CQUEUE[REAR] ← ITEM and stop.

**DEQUEUE (circular):**

1. If FRONT = −1, print "Queue Underflow" and stop.
2. ITEM ← CQUEUE[FRONT].
3. If FRONT = REAR, set FRONT ← −1 and REAR ← −1 (queue becomes empty).
4. Otherwise, FRONT ← (FRONT + 1) % MAX.
5. Return ITEM and stop.

**Example (circular queue, MAX = 5).** After ENQUEUE 10, 20, 30, 40, 50 we have FRONT = 0, REAR = 4. Two DEQUEUEs remove 10 and 20, so FRONT = 2. Now ENQUEUE 60: (4 + 1) % 5 = 0 ≠ FRONT, so REAR = 0 and 60 is stored in cell 0. ENQUEUE 70 goes to cell 1. Now (1 + 1) % 5 = 2 = FRONT, so the queue is truly full. A linear queue would have reported overflow as soon as REAR reached 4.

**Priority queue.** Types: an **ascending** priority queue deletes the smallest-priority-number element first (e.g. priority 1 is most urgent), and a **descending** one deletes the largest first. It can be implemented with a sorted array or linked list (insert in order, delete from front), an unsorted list (insert at end, search for highest priority when deleting), or most efficiently with a **heap** (O(log n) insertion and deletion). Example: in a hospital emergency room, patients (A, priority 3), (B, 1), (C, 2) arrive in that order, but they are treated in the order B, C, A.

**Comparison.**

| Basis | Linear queue | Circular queue | Priority queue |
|---|---|---|---|
| Order of deletion | FIFO | FIFO | highest priority first |
| Structure | straight line of cells | cells connected in a circle | ordered by priority |
| Reuse of freed cells | no | yes | depends on implementation |
| Full condition | REAR = MAX − 1 | (REAR + 1) % MAX = FRONT | array full or no memory |
| Memory use | wastes cells (false overflow) | efficient | efficient with heap |
| Example use | simple buffers | CPU round-robin, keyboard buffer | OS task scheduling, Dijkstra, emergency room |

**How it's asked in exams.** Very common: *"What is circular queue? With example write advantages of circular queue over linear queue"* (6 marks), *"Explain the concept of priority queue. How is it different from normal queue?"* (6 marks), and a short note *"Priority Queue"* (3 marks). Define each queue, write the circular ENQUEUE/DEQUEUE algorithms with the modulo formula, trace an example showing wrap-around, list advantages (no false overflow, better memory use, fixed-size buffers), give the comparison table, and conclude which queue suits which application.`,
  },
};
