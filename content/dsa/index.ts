import type { SubjectContent } from "@/content/types";

export const dsaContent: SubjectContent = {
  flashcards: [
    // Unit 1: Introduction
    {
      id: "fc-1",
      unit: "Unit 1: Introduction",
      tier: "hedge",
      front: "What is Data?",
      back: "Data is a raw, unorganized collection of facts, figures, or symbols (numbers, characters, images) that has no meaning on its own until it is processed into information.",
    },
    {
      id: "fc-2",
      unit: "Unit 1: Introduction",
      tier: "hedge",
      front: "What are the main Data Types in programming?",
      back: "Primitive/built-in types (int, float, char, boolean) that are directly supported by the language, and derived/composite types (arrays, structures, pointers) built from primitive types.",
    },
    {
      id: "fc-3",
      unit: "Unit 1: Introduction",
      tier: "core",
      front: "What is a Data Structure?",
      back: "A Data Structure is a systematic way of organizing, storing, and managing data in memory so that it can be accessed and modified efficiently, e.g. arrays, linked lists, stacks, queues, trees, and graphs.",
    },
    {
      id: "fc-4",
      unit: "Unit 1: Introduction",
      tier: "hedge",
      front: "What is an Abstract Data Type (ADT)?",
      back: "An ADT is a mathematical/logical model of a data structure that defines its behavior (the operations it supports) without specifying how those operations are implemented internally.",
    },
    {
      id: "fc-5",
      unit: "Unit 1: Introduction",
      tier: "hedge",
      front: "Give two real-world applications of ADTs.",
      back: "A Stack ADT is used to implement 'undo' functionality in editors; a Queue ADT is used to manage print jobs sent to a shared printer in order.",
    },
    {
      id: "fc-6",
      unit: "Unit 1: Introduction",
      tier: "hedge",
      front: "Linear vs Non-linear data structures?",
      back: "Linear structures (array, stack, queue, linked list) arrange elements sequentially, one after another. Non-linear structures (tree, graph) arrange elements in a hierarchical or networked fashion.",
    },

    // Unit 2: Algorithm Efficiency and Complexity
    {
      id: "fc-7",
      unit: "Unit 2: Algorithm Efficiency and Complexity",
      tier: "hedge",
      front: "What is the RAM Model?",
      back: "The Random Access Machine (RAM) model is a theoretical computer model used to analyze algorithms, assuming each simple operation (add, compare, assign) takes exactly one unit of time and memory access is O(1).",
    },
    {
      id: "fc-8",
      unit: "Unit 2: Algorithm Efficiency and Complexity",
      tier: "core",
      front: "What is Algorithm Analysis?",
      back: "The process of determining the amount of time (time complexity) and memory (space complexity) an algorithm needs as a function of its input size, usually in best, average, and worst cases.",
    },
    {
      id: "fc-9",
      unit: "Unit 2: Algorithm Efficiency and Complexity",
      tier: "core",
      front: "What does Big O notation represent?",
      back: "Big O, O(f(n)), gives the asymptotic upper bound on an algorithm's growth rate — the worst-case behavior — describing how running time grows as input size n increases.",
    },
    {
      id: "fc-10",
      unit: "Unit 2: Algorithm Efficiency and Complexity",
      tier: "core",
      front: "What is Theta (Θ) notation?",
      back: "Theta notation gives a tight bound, describing an algorithm's running time from both above and below — i.e., the average-case or exact asymptotic growth rate.",
    },
    {
      id: "fc-11",
      unit: "Unit 2: Algorithm Efficiency and Complexity",
      tier: "hedge",
      front: "What is Omega (Ω) notation?",
      back: "Omega notation gives the asymptotic lower bound of an algorithm — the best-case running time, i.e. the minimum time the algorithm will ever take.",
    },
    {
      id: "fc-12",
      unit: "Unit 2: Algorithm Efficiency and Complexity",
      tier: "hedge",
      front: "What is Sigma notation used for in complexity analysis?",
      back: "Sigma (Σ) notation is used to express summations that arise when counting the total number of operations performed across loops, e.g. summing 1 to n for a nested loop's iteration count.",
    },

    // Unit 3: Linear Static Data Structures (Stack, Queue)
    {
      id: "fc-13",
      unit: "Unit 3: Linear Static Data Structures",
      tier: "core",
      front: "What is a Stack?",
      back: "A Stack is a linear data structure that follows LIFO (Last In First Out) order, where insertion (push) and deletion (pop) both happen only at one end called the top.",
    },
    {
      id: "fc-14",
      unit: "Unit 3: Linear Static Data Structures",
      tier: "core",
      front: "What causes Stack Overflow?",
      back: "Stack Overflow occurs when a push operation is attempted on a stack that is already full (top has reached the maximum allocated size, e.g. top == MAX-1).",
    },
    {
      id: "fc-15",
      unit: "Unit 3: Linear Static Data Structures",
      tier: "core",
      front: "What causes Stack Underflow?",
      back: "Stack Underflow occurs when a pop operation is attempted on an empty stack (top == -1), meaning there is nothing left to remove.",
    },
    {
      id: "fc-16",
      unit: "Unit 3: Linear Static Data Structures",
      tier: "core",
      front: "What is Infix, Prefix, and Postfix notation?",
      back: "Infix places the operator between operands (A+B). Prefix (Polish) places the operator before operands (+AB). Postfix (Reverse Polish) places the operator after operands (AB+); stacks are used to convert and evaluate these.",
    },
    {
      id: "fc-17",
      unit: "Unit 3: Linear Static Data Structures",
      tier: "core",
      front: "What is a Queue?",
      back: "A Queue is a linear data structure that follows FIFO (First In First Out) order, where insertion happens at the rear and deletion happens at the front.",
    },
    {
      id: "fc-18",
      unit: "Unit 3: Linear Static Data Structures",
      tier: "core",
      front: "What is a Circular Queue?",
      back: "A Circular Queue connects the last position back to the first position, forming a circle, so that empty slots freed at the front after dequeues can be reused, avoiding the false-full problem of a linear queue.",
    },
    {
      id: "fc-19",
      unit: "Unit 3: Linear Static Data Structures",
      tier: "hedge",
      front: "What is a Priority Queue?",
      back: "A Priority Queue is a queue where each element has an associated priority, and elements are dequeued in order of priority (highest first) rather than strictly by arrival order.",
    },
    {
      id: "fc-20",
      unit: "Unit 3: Linear Static Data Structures",
      tier: "core",
      front: "Why does a Linear Queue face a 'false overflow' problem?",
      back: "In a linear (array-based) queue, once rear reaches the last index, no more elements can be inserted even if front has advanced and slots at the beginning are free, wasting space — solved by making the queue circular.",
    },

    // Unit 4: Linear Dynamic Data Structure
    {
      id: "fc-21",
      unit: "Unit 4: Linear Dynamic Data Structure",
      tier: "hedge",
      front: "What is a List ADT?",
      back: "A List is an ordered collection of elements supporting operations like insert, delete, traverse, and search, without fixing a maximum size the way a static array does.",
    },
    {
      id: "fc-22",
      unit: "Unit 4: Linear Dynamic Data Structure",
      tier: "hedge",
      front: "Static vs Dynamic list structures?",
      back: "A static list (array-based) has a fixed pre-allocated size in contiguous memory. A dynamic list (linked-list based) grows and shrinks at runtime by allocating nodes individually as needed.",
    },
    {
      id: "fc-23",
      unit: "Unit 4: Linear Dynamic Data Structure",
      tier: "core",
      front: "What is a Linked List?",
      back: "A Linked List is a linear data structure made of nodes, where each node stores data plus a pointer/reference to the next node, allowing dynamic memory allocation without requiring contiguous storage.",
    },
    {
      id: "fc-24",
      unit: "Unit 4: Linear Dynamic Data Structure",
      tier: "core",
      front: "Singly vs Doubly Linked List?",
      back: "A Singly Linked List node has one pointer to the next node only (forward traversal). A Doubly Linked List node has two pointers, next and previous, allowing traversal in both directions.",
    },
    {
      id: "fc-25",
      unit: "Unit 4: Linear Dynamic Data Structure",
      tier: "core",
      front: "What is a Circular Linked List?",
      back: "A Circular Linked List is one where the last node's next pointer points back to the first node instead of null, forming a loop that allows continuous traversal.",
    },
    {
      id: "fc-26",
      unit: "Unit 4: Linear Dynamic Data Structure",
      tier: "core",
      front: "One key advantage of Doubly over Singly Linked List?",
      back: "A doubly linked list allows backward traversal and O(1) deletion of a given node (since its previous node is directly reachable), whereas a singly linked list must be traversed from the head to find the predecessor.",
    },

    // Unit 5: Recursion
    {
      id: "fc-27",
      unit: "Unit 5: Recursion",
      tier: "core",
      front: "What is Recursion?",
      back: "Recursion is a technique where a function calls itself, directly or indirectly, to solve smaller instances of the same problem until a base case is reached that stops further calls.",
    },
    {
      id: "fc-28",
      unit: "Unit 5: Recursion",
      tier: "core",
      front: "What is a Base Case in recursion?",
      back: "The base case is the terminating condition of a recursive function that does not make a further recursive call, preventing infinite recursion (e.g. fact(0) = 1).",
    },
    {
      id: "fc-29",
      unit: "Unit 5: Recursion",
      tier: "hedge",
      front: "What is the Tower of Hanoi problem?",
      back: "A classic recursive puzzle moving n disks from a source peg to a destination peg (using an auxiliary peg), never placing a larger disk on a smaller one; requires 2^n - 1 moves.",
    },
    {
      id: "fc-30",
      unit: "Unit 5: Recursion",
      tier: "hedge",
      front: "How is the Fibonacci sequence defined recursively?",
      back: "fib(n) = fib(n-1) + fib(n-2), with base cases fib(0) = 0 and fib(1) = 1; each term is the sum of the two preceding terms.",
    },

    // Unit 6: Hierarchical Data Structure (Trees & Graphs)
    {
      id: "fc-31",
      unit: "Unit 6: Hierarchical Data Structure",
      tier: "core",
      front: "What is a Tree?",
      back: "A Tree is a hierarchical, non-linear data structure consisting of nodes connected by edges, with one designated root node and no cycles, where every node except the root has exactly one parent.",
    },
    {
      id: "fc-32",
      unit: "Unit 6: Hierarchical Data Structure",
      tier: "core",
      front: "What is a Binary Tree?",
      back: "A Binary Tree is a tree in which each node has at most two children, conventionally referred to as the left child and the right child.",
    },
    {
      id: "fc-33",
      unit: "Unit 6: Hierarchical Data Structure",
      tier: "core",
      front: "Explain the three standard Binary Tree traversals.",
      back: "In-order (Left, Root, Right) visits nodes in sorted order for a BST; Pre-order (Root, Left, Right) is used to copy a tree; Post-order (Left, Right, Root) is used to delete a tree or evaluate expression trees.",
    },
    {
      id: "fc-34",
      unit: "Unit 6: Hierarchical Data Structure",
      tier: "core",
      front: "What is a Binary Search Tree (BST)?",
      back: "A BST is a binary tree where, for every node, all values in its left subtree are smaller and all values in its right subtree are larger, enabling O(log n) average search, insert, and delete.",
    },
    {
      id: "fc-35",
      unit: "Unit 6: Hierarchical Data Structure",
      tier: "hedge",
      front: "What is a Balanced Tree?",
      back: "A Balanced Tree (e.g. AVL Tree) is a tree that automatically maintains a small height difference between left and right subtrees after insertions/deletions, keeping operations close to O(log n) instead of degrading to O(n).",
    },
    {
      id: "fc-36",
      unit: "Unit 6: Hierarchical Data Structure",
      tier: "hedge",
      front: "What is Huffman's Algorithm used for?",
      back: "Huffman's Algorithm builds an optimal prefix binary tree for data compression, assigning shorter bit-codes to more frequently occurring characters and longer codes to rarer ones.",
    },
    {
      id: "fc-37",
      unit: "Unit 6: Hierarchical Data Structure",
      tier: "core",
      front: "What is a Graph?",
      back: "A Graph is a non-linear data structure consisting of a set of vertices (nodes) connected by a set of edges, which may be directed or undirected, weighted or unweighted.",
    },
    {
      id: "fc-38",
      unit: "Unit 6: Hierarchical Data Structure",
      tier: "core",
      front: "Adjacency Matrix vs Adjacency List?",
      back: "An Adjacency Matrix is a V×V 2D array where cell [i][j]=1 indicates an edge, giving O(1) edge lookup but O(V²) space. An Adjacency List stores, for each vertex, a list of its neighbors, using O(V+E) space, more efficient for sparse graphs.",
    },
    {
      id: "fc-39",
      unit: "Unit 6: Hierarchical Data Structure",
      tier: "hedge",
      front: "What is Transitive Closure of a graph?",
      back: "The transitive closure of a graph indicates, for every pair of vertices (i, j), whether a path exists from i to j (not just a direct edge), typically computed with Warshall's Algorithm.",
    },
    {
      id: "fc-40",
      unit: "Unit 6: Hierarchical Data Structure",
      tier: "hedge",
      front: "What does Warshall's Algorithm compute?",
      back: "Warshall's Algorithm computes the transitive closure of a directed graph in O(V³) time using dynamic programming, checking for each pair (i,j) whether a path exists via an intermediate vertex k.",
    },
    {
      id: "fc-41",
      unit: "Unit 6: Hierarchical Data Structure",
      tier: "core",
      front: "Depth First Search (DFS) vs Breadth First Search (BFS)?",
      back: "DFS explores as far as possible along each branch before backtracking, using a stack (or recursion); BFS explores all neighbors at the current depth before moving deeper, using a queue.",
    },
    {
      id: "fc-42",
      unit: "Unit 6: Hierarchical Data Structure",
      tier: "core",
      front: "What is a Spanning Tree?",
      back: "A Spanning Tree of a connected graph is a subgraph that includes all the vertices and is itself a tree — i.e., connected and acyclic — using the minimum number of edges (V-1) needed to connect V vertices.",
    },
    {
      id: "fc-43",
      unit: "Unit 6: Hierarchical Data Structure",
      tier: "core",
      front: "What is a Minimum Spanning Tree (MST)?",
      back: "An MST is a spanning tree of a weighted, connected graph whose total edge weight is the smallest possible among all spanning trees of that graph.",
    },
    {
      id: "fc-44",
      unit: "Unit 6: Hierarchical Data Structure",
      tier: "core",
      front: "Kruskal's vs Prim's Algorithm?",
      back: "Kruskal's builds an MST by repeatedly picking the globally smallest edge that doesn't form a cycle (edge-based, uses Union-Find). Prim's grows the MST from a starting vertex, always adding the smallest edge that connects a new vertex to the existing tree (vertex-based).",
    },
    {
      id: "fc-45",
      unit: "Unit 6: Hierarchical Data Structure",
      tier: "core",
      front: "What does Dijkstra's Algorithm compute?",
      back: "Dijkstra's Algorithm finds the shortest path from a single source vertex to all other vertices in a weighted graph with non-negative edge weights, using a greedy approach with a priority queue.",
    },
    {
      id: "fc-46",
      unit: "Unit 6: Hierarchical Data Structure",
      tier: "hedge",
      front: "What does Floyd-Warshall's Algorithm compute?",
      back: "Floyd-Warshall's Algorithm computes the shortest paths between every pair of vertices in a weighted graph (including negative weights, but no negative cycles) in O(V³) time using dynamic programming.",
    },

    // Unit 7: Searching and Sorting
    {
      id: "fc-47",
      unit: "Unit 7: Searching and Sorting",
      tier: "core",
      front: "Sequential Search vs Binary Search?",
      back: "Sequential (linear) search checks each element one by one, O(n), works on unsorted data. Binary search repeatedly halves a sorted array by comparing the middle element, achieving O(log n).",
    },
    {
      id: "fc-48",
      unit: "Unit 7: Searching and Sorting",
      tier: "hedge",
      front: "What is Hashing?",
      back: "Hashing maps a key to an index in a hash table using a hash function, enabling average O(1) insertion and lookup, at the cost of needing collision-resolution when two keys map to the same index.",
    },
    {
      id: "fc-49",
      unit: "Unit 7: Searching and Sorting",
      tier: "hedge",
      front: "Name two Collision Resolution techniques in hashing.",
      back: "Chaining (each hash bucket holds a linked list of all colliding keys) and Open Addressing (probing for the next free slot, e.g. linear probing, quadratic probing, double hashing).",
    },
    {
      id: "fc-50",
      unit: "Unit 7: Searching and Sorting",
      tier: "core",
      front: "What is Bubble Sort?",
      back: "Bubble Sort repeatedly steps through the array, comparing adjacent elements and swapping them if out of order, so the largest unsorted element 'bubbles' to its correct position each pass; O(n²).",
    },
    {
      id: "fc-51",
      unit: "Unit 7: Searching and Sorting",
      tier: "core",
      front: "What is Selection Sort?",
      back: "Selection Sort repeatedly finds the minimum element from the unsorted portion of the array and swaps it into its correct sorted position at the front; O(n²) in all cases.",
    },
    {
      id: "fc-52",
      unit: "Unit 7: Searching and Sorting",
      tier: "core",
      front: "What is Insertion Sort?",
      back: "Insertion Sort builds the sorted array one element at a time, taking each new element and inserting it into its correct position among the already-sorted elements to its left; O(n²) worst case, O(n) best case (nearly sorted).",
    },
    {
      id: "fc-53",
      unit: "Unit 7: Searching and Sorting",
      tier: "core",
      front: "What is Quick Sort?",
      back: "Quick Sort is a divide-and-conquer algorithm that picks a pivot, partitions the array so smaller elements go left and larger go right of the pivot, then recursively sorts both partitions; average O(n log n), worst case O(n²).",
    },
    {
      id: "fc-54",
      unit: "Unit 7: Searching and Sorting",
      tier: "core",
      front: "What is Merge Sort?",
      back: "Merge Sort is a divide-and-conquer algorithm that recursively splits the array into halves until single elements remain, then merges sorted halves back together; guarantees O(n log n) in all cases.",
    },
    {
      id: "fc-55",
      unit: "Unit 7: Searching and Sorting",
      tier: "hedge",
      front: "What is Radix Sort?",
      back: "Radix Sort sorts numbers digit by digit, from least significant to most significant digit, using a stable sub-sort (like counting sort) at each digit position; runs in O(d·(n+k)) time, no comparisons needed.",
    },
    {
      id: "fc-56",
      unit: "Unit 7: Searching and Sorting",
      tier: "hedge",
      front: "What is Shell Sort?",
      back: "Shell Sort generalizes insertion sort by comparing and sorting elements far apart first (using a decreasing gap sequence), reducing the number of shifts needed before finishing with a gap of 1; improves on plain insertion sort's O(n²).",
    },
    {
      id: "fc-57",
      unit: "Unit 7: Searching and Sorting",
      tier: "hedge",
      front: "What is Heap Sort?",
      back: "Heap Sort builds a max-heap from the array, then repeatedly extracts the maximum (root) and places it at the end, reheapifying each time; runs in guaranteed O(n log n) time using no extra array space.",
    },
    {
      id: "fc-58",
      unit: "Unit 7: Searching and Sorting",
      tier: "core",
      front: "Time complexity summary: Bubble/Selection/Insertion vs Quick/Merge/Heap sort?",
      back: "Bubble, Selection, and Insertion Sort are all O(n²) in the average/worst case, simple but slow for large n. Quick Sort, Merge Sort, and Heap Sort run in O(n log n) on average/worst case (Quick Sort's worst case is O(n²)), making them preferred for large datasets.",
    },
  ],

  cheatSheet: {
    gradingNote:
      "Purbanchal grades heavily on elaboration and structure, not just correct facts. A 12-mark answer needs 250-400+ words: an intro/definition paragraph, each point explained as a full sentence with a concrete example, and a conclusion. A 6-mark answer needs 150-250 words with the same structure, shorter. Never answer a 12- or 6-mark question with bare bullet points — that's only acceptable on this cheat sheet page.",
    sections: [
      {
        heading: "Stack (Core)",
        tier: "core",
        items: [
          "LIFO: push/pop at TOP only",
          "Overflow: push when top == MAX-1; Underflow: pop when top == -1",
          "Array-based: O(1) push/pop, fixed size",
          "Uses: expression conversion (infix→postfix/prefix), postfix evaluation, function call stack, undo, recursion internally uses a stack",
          "Postfix eval: scan left→right, push operands, on operator pop 2 operands, compute, push result back",
        ],
      },
      {
        heading: "Queue (Core)",
        tier: "core",
        items: [
          "FIFO: insert at REAR, delete at FRONT",
          "Linear queue: false-overflow problem when rear hits MAX even if front slots are free",
          "Circular queue: rear wraps via (rear+1) % MAX, reuses freed slots",
          "Priority queue: dequeue by priority, not arrival order",
          "Overflow: (rear+1)%MAX == front; Underflow: front == -1 or front > rear",
        ],
      },
      {
        heading: "Linked List (Core)",
        tier: "core",
        items: [
          "Node = data + pointer(s); no contiguous memory needed, dynamic size",
          "Singly: one next pointer, forward-only traversal",
          "Doubly: next + prev pointers, bidirectional traversal, O(1) deletion given a node pointer",
          "Circular: last node's next points back to head",
          "Insert/delete at front: O(1); at end: O(n) singly / O(1) doubly with tail pointer; middle: O(n) to locate + O(1) to link",
          "Linked stack: push/pop at head; Linked queue: enqueue at tail, dequeue at head (keep head+tail pointers)",
        ],
      },
      {
        heading: "Tree / BST (Core)",
        tier: "core",
        items: [
          "Tree: root, parent/child, leaf (no children), height, depth",
          "Binary tree: max 2 children per node (left, right)",
          "Traversals: In-order (L,Root,R)=sorted BST order; Pre-order (Root,L,R)=copy tree; Post-order (L,R,Root)=delete tree/expr eval",
          "BST property: left subtree < node < right subtree, everywhere",
          "BST insert/search/delete: average O(log n), worst case O(n) if skewed (like a linked list)",
        ],
      },
      {
        heading: "Graph — Traversal, MST, Shortest Path (Core)",
        tier: "core",
        items: [
          "Representation: Adjacency Matrix O(V²) space, O(1) edge check; Adjacency List O(V+E) space, better for sparse graphs",
          "DFS: stack/recursion, goes deep first, good for path existence, cycle detection",
          "BFS: queue, explores level by level, good for shortest path in unweighted graphs",
          "MST: Kruskal's = sort all edges, add smallest that avoids a cycle (Union-Find); Prim's = grow tree from one vertex, always add cheapest connecting edge",
          "Dijkstra's: single-source shortest path, greedy + priority queue, requires non-negative weights",
          "Floyd-Warshall: all-pairs shortest path, O(V³), DP over intermediate vertices, handles negative weights (no negative cycles)",
          "Warshall's algorithm: transitive closure (reachability), same O(V³) DP structure as Floyd-Warshall",
        ],
      },
      {
        heading: "Sorting Comparison (Core)",
        tier: "core",
        items: [
          "Bubble/Selection/Insertion: O(n²) avg & worst, simple, in-place; Insertion is fast/adaptive on nearly-sorted data",
          "Quick Sort: avg O(n log n), worst O(n²) on bad pivot choice, in-place, unstable",
          "Merge Sort: guaranteed O(n log n), needs O(n) extra space, stable — good for linked lists / external sorting",
          "Selection sort: always O(n²), minimizes number of swaps (useful when swap cost is high)",
          "Searching: Sequential O(n) any order; Binary O(log n) needs sorted array; BST search O(log n) avg, O(n) worst",
        ],
      },
      {
        heading: "Algorithm Efficiency Notation (Core)",
        tier: "core",
        items: [
          "Big O: upper bound / worst case growth",
          "Omega (Ω): lower bound / best case growth",
          "Theta (Θ): tight bound, average/exact growth",
          "Common orders (fastest→slowest): O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)",
        ],
      },
      {
        heading: "Hashing (Hedge / Safety Net)",
        tier: "hedge",
        items: [
          "Hash function maps key → table index",
          "Collision: two keys map to same index",
          "Chaining: linked list per bucket; Open addressing: linear/quadratic probing, double hashing",
          "Average case O(1) insert/search; degrades with poor hash function or high load factor",
        ],
      },
      {
        heading: "RAM Model & Advanced Sorts (Hedge / Safety Net)",
        tier: "hedge",
        items: [
          "RAM model: each basic op = 1 time unit, used for theoretical time-complexity analysis",
          "Radix sort: digit-by-digit, O(d(n+k)), no comparisons, stable",
          "Shell sort: insertion sort with shrinking gaps, better than plain O(n²) insertion sort",
          "Heap sort: build max-heap, repeatedly extract max; guaranteed O(n log n), in-place, unstable",
        ],
      },
      {
        heading: "Balanced Trees & Huffman (Hedge / Safety Net)",
        tier: "hedge",
        items: [
          "Balanced tree (e.g. AVL): keeps left/right subtree heights close, avoids O(n) skewed worst case",
          "Huffman algorithm: builds optimal prefix code tree for compression using frequency-based greedy merging of two lowest-frequency nodes",
          "Transitive closure / Warshall's: reachability matrix for all vertex pairs",
        ],
      },
      {
        heading: "ADT Theory & Recursion (Hedge / Safety Net)",
        tier: "hedge",
        items: [
          "ADT = behavior/operations defined, implementation hidden",
          "List ADT: ordered, dynamic-size collection with insert/delete/traverse",
          "Recursion needs: base case + recursive case that shrinks toward base case",
          "Classic recursion examples: factorial, Fibonacci, Tower of Hanoi (2ⁿ-1 moves), natural number multiplication via repeated addition",
        ],
      },
    ],
  },

  diagrams: [
    {
      id: "dg-1",
      title: "Stack Push/Pop Visualization",
      scenario:
        "A stack of integers built by pushing 10, 20, 30 in order, then popping once. Illustrates how the top pointer moves and how LIFO order determines which element is removed first.",
      svg: "<svg viewBox='0 0 220 160'><text x='10' y='15' font-size='10' font-weight='bold'>Stack (array-based)</text><rect x='30' y='100' width='60' height='30' fill='none' stroke='currentColor'/><text x='60' y='120' font-size='10' text-anchor='middle'>10 (bottom)</text><rect x='30' y='70' width='60' height='30' fill='none' stroke='currentColor'/><text x='60' y='90' font-size='10' text-anchor='middle'>20</text><rect x='30' y='40' width='60' height='30' fill='none' stroke='currentColor' stroke-dasharray='3,2'/><text x='60' y='60' font-size='10' text-anchor='middle'>30 (popped)</text><line x1='95' y1='55' x2='130' y2='55' stroke='currentColor' marker-end='url(#arrow)'/><text x='135' y='58' font-size='9'>top after pop → 20</text><defs><marker id='arrow' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='currentColor'/></marker></defs><text x='10' y='150' font-size='8'>push(10) → push(20) → push(30) → pop() removes 30</text></svg>",
      mistakes: [
        { text: "Confusing stack overflow (top exceeds allocated array size) with an ordinary array index-out-of-bounds error — overflow specifically means the stack's own top pointer has hit its maximum, not an unrelated array access bug." },
        { text: "Forgetting to check for underflow (top == -1) before popping, which in a written algorithm answer loses marks even if the push/pop logic is otherwise correct." },
        { text: "Believing pop() returns the bottom element instead of the top — students sometimes confuse stack (LIFO) behavior with queue (FIFO) behavior under exam pressure." },
      ],
    },
    {
      id: "dg-2",
      title: "Singly Linked List Node Chain",
      scenario:
        "A singly linked list storing the sequence 5 → 10 → 15, with a HEAD pointer to the first node and the last node's next field pointing to NULL. Shows the structure used when answering insertion/deletion algorithm questions.",
      svg: "<svg viewBox='0 0 320 100'><text x='5' y='15' font-size='9'>HEAD</text><line x1='30' y1='12' x2='55' y2='12' stroke='currentColor' marker-end='url(#arrow2)'/><rect x='55' y='30' width='50' height='30' fill='none' stroke='currentColor'/><line x1='90' y1='30' x2='90' y2='60' stroke='currentColor'/><text x='72' y='50' font-size='10' text-anchor='middle'>5</text><line x1='105' y1='45' x2='135' y2='45' stroke='currentColor' marker-end='url(#arrow2)'/><rect x='135' y='30' width='50' height='30' fill='none' stroke='currentColor'/><line x1='170' y1='30' x2='170' y2='60' stroke='currentColor'/><text x='152' y='50' font-size='10' text-anchor='middle'>10</text><line x1='185' y1='45' x2='215' y2='45' stroke='currentColor' marker-end='url(#arrow2)'/><rect x='215' y='30' width='50' height='30' fill='none' stroke='currentColor'/><line x1='250' y1='30' x2='250' y2='60' stroke='currentColor'/><text x='232' y='50' font-size='10' text-anchor='middle'>15</text><text x='260' y='50' font-size='9'>NULL</text><defs><marker id='arrow2' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='currentColor'/></marker></defs></svg>",
      mistakes: [
        { text: "Forgetting to update the tail pointer (if the implementation keeps one) when inserting or deleting the last node, leaving it pointing to a stale or freed node." },
        { text: "Not setting the new node's next field before relinking the previous node's next field during insertion — doing it in the wrong order silently loses the rest of the list." },
        { text: "Forgetting to explicitly set the last node's next to NULL after deleting the current last node, leaving a dangling pointer." },
      ],
    },
    {
      id: "dg-3",
      title: "Binary Search Tree Structure",
      scenario:
        "A BST built by inserting 50, 30, 70, 20, 40, 60, 80 in that order. Demonstrates the BST property (left < node < right at every node) that in-order, pre-order, and post-order traversal questions are based on.",
      svg: "<svg viewBox='0 0 240 160'><circle cx='120' cy='20' r='16' fill='none' stroke='currentColor'/><text x='120' y='25' font-size='11' text-anchor='middle'>50</text><line x1='108' y1='32' x2='70' y2='58' stroke='currentColor'/><line x1='132' y1='32' x2='170' y2='58' stroke='currentColor'/><circle cx='60' cy='70' r='16' fill='none' stroke='currentColor'/><text x='60' y='75' font-size='11' text-anchor='middle'>30</text><circle cx='180' cy='70' r='16' fill='none' stroke='currentColor'/><text x='180' y='75' font-size='11' text-anchor='middle'>70</text><line x1='50' y1='82' x2='30' y2='108' stroke='currentColor'/><line x1='70' y1='82' x2='90' y2='108' stroke='currentColor'/><line x1='170' y1='82' x2='150' y2='108' stroke='currentColor'/><line x1='190' y1='82' x2='210' y2='108' stroke='currentColor'/><circle cx='25' cy='120' r='15' fill='none' stroke='currentColor'/><text x='25' y='125' font-size='10' text-anchor='middle'>20</text><circle cx='95' cy='120' r='15' fill='none' stroke='currentColor'/><text x='95' y='125' font-size='10' text-anchor='middle'>40</text><circle cx='145' cy='120' r='15' fill='none' stroke='currentColor'/><text x='145' y='125' font-size='10' text-anchor='middle'>60</text><circle cx='215' cy='120' r='15' fill='none' stroke='currentColor'/><text x='215' y='125' font-size='10' text-anchor='middle'>80</text></svg>",
      mistakes: [
        { text: "Treating BST insertion as unordered array insertion — placing a new value at the next free spot instead of comparing it against each node from the root and branching left or right accordingly." },
        { text: "Mixing up in-order and pre-order traversal output order when writing the answer, especially forgetting that in-order traversal of a BST always yields values in sorted ascending order." },
        { text: "When deleting a node with two children, forgetting to replace it with its in-order successor (or predecessor) and then deleting that successor from its original position, which can silently break the BST property." },
      ],
    },
    {
      id: "dg-4",
      title: "Simple Weighted Graph (Vertices & Edges)",
      scenario:
        "A small weighted, undirected graph with vertices A, B, C, D used to trace Dijkstra's shortest path, Kruskal's/Prim's MST, and DFS/BFS traversal order by hand in exam answers.",
      svg: "<svg viewBox='0 0 220 160'><circle cx='40' cy='30' r='16' fill='none' stroke='currentColor'/><text x='40' y='35' font-size='11' text-anchor='middle'>A</text><circle cx='170' cy='30' r='16' fill='none' stroke='currentColor'/><text x='170' y='35' font-size='11' text-anchor='middle'>B</text><circle cx='40' cy='130' r='16' fill='none' stroke='currentColor'/><text x='40' y='135' font-size='11' text-anchor='middle'>C</text><circle cx='170' cy='130' r='16' fill='none' stroke='currentColor'/><text x='170' y='135' font-size='11' text-anchor='middle'>D</text><line x1='56' y1='30' x2='154' y2='30' stroke='currentColor'/><text x='100' y='24' font-size='9'>4</text><line x1='40' y1='46' x2='40' y2='114' stroke='currentColor'/><text x='45' y='80' font-size='9'>2</text><line x1='170' y1='46' x2='170' y2='114' stroke='currentColor'/><text x='175' y='80' font-size='9'>5</text><line x1='56' y1='130' x2='154' y2='130' stroke='currentColor'/><text x='100' y='124' font-size='9'>1</text><line x1='52' y1='42' x2='158' y2='118' stroke='currentColor'/><text x='95' y='90' font-size='9'>7</text></svg>",
      mistakes: [
        { text: "Confusing an undirected graph with a directed one when writing the adjacency matrix — forgetting that an undirected edge must be marked symmetrically at both [i][j] and [j][i]." },
        { text: "In Dijkstra's algorithm, forgetting to update a vertex's shortest-distance estimate when a newly found path through the current vertex is shorter than the previously recorded one (i.e. skipping the relaxation step)." },
        { text: "In Kruskal's algorithm, adding an edge without checking whether it forms a cycle with already-selected edges, which produces an incorrect structure that is not actually a tree." },
      ],
    },
  ],

  mockPaper: {
    title: "Mock Paper 1",
    instructions:
      "Group A: answer any 2 of 3 (2x12=24). Group B: answer any 6 of 7 (6x6=36). Total: 60 marks, Pass marks: 24.",
    questions: [
      {
        id: "mp-a1",
        group: "A",
        marks: 12,
        prompt:
          "What is a Binary Search Tree? Explain the algorithm for inserting a new node into a BST, and trace the insertion of the values 45, 20, 60, 10, 30, 55 into an initially empty BST.",
        answer:
          "A Binary Search Tree (BST) is a special form of a binary tree in which every node follows the BST property: all values stored in the left subtree of a node are strictly smaller than the node's own value, and all values stored in the right subtree are strictly larger. This ordering property is what makes searching, insertion, and deletion efficient, since at every node a comparison eliminates roughly half of the remaining tree from consideration, giving an average time complexity of O(log n), although a poorly balanced (skewed) tree can degrade to O(n). The insertion algorithm works as follows. Step 1: if the tree is empty, create a new node with the given value and make it the root. Step 2: otherwise, starting at the root, compare the new value with the current node's value. Step 3: if the new value is smaller, move to the left child; if it is larger, move to the right child; if a node with that value already exists, typically no duplicate is inserted. Step 4: repeat this comparison-and-move process until an empty (null) position is reached. Step 5: create the new node at that null position and link it as the left or right child of its parent, as appropriate. Tracing this algorithm with the sequence 45, 20, 60, 10, 30, 55: 45 is inserted first and becomes the root since the tree is empty. 20 is compared with 45, found smaller, and becomes the left child of 45. 60 is compared with 45, found larger, and becomes the right child of 45. 10 is compared with 45 (smaller, go left), then with 20 (smaller, go left), and becomes the left child of 20. 30 is compared with 45 (smaller, go left), then with 20 (larger, go right), and becomes the right child of 20. Finally 55 is compared with 45 (larger, go right), then with 60 (smaller, go left), and becomes the left child of 60. The resulting tree has 45 at the root, 20 and 60 as its children, and 10, 30, 55 correctly placed as leaves preserving the BST ordering at every level. In conclusion, because each insertion only requires following a single root-to-leaf path and making one comparison per level, BST insertion is efficient in practice and forms the foundation for BST-based searching and deletion as well.",
        years: [],
      },
      {
        id: "mp-a2",
        group: "A",
        marks: 12,
        prompt:
          "Discuss the differences between Quick Sort and Merge Sort. Explain the Quick Sort algorithm with a step-by-step trace on the array [38, 27, 43, 3, 9, 82, 10].",
        answer:
          "Quick Sort and Merge Sort are both efficient, divide-and-conquer sorting algorithms, but they differ significantly in strategy, performance guarantees, and memory usage. First, in terms of the partitioning approach, Quick Sort selects a pivot element and rearranges the array so that smaller elements move to its left and larger elements move to its right, doing the bulk of its work during the 'divide' step, whereas Merge Sort simply splits the array into two equal halves without any rearrangement and does its real work during the 'combine' (merge) step. Second, regarding worst-case time complexity, Merge Sort guarantees O(n log n) performance in every case because it always splits evenly, while Quick Sort's worst case degrades to O(n²) if the pivot chosen is consistently the smallest or largest element, such as when sorting an already-sorted array with a naive pivot choice. Third, in terms of space, Quick Sort is an in-place algorithm requiring only O(log n) additional space for recursion, whereas Merge Sort requires O(n) additional space to hold the temporary merged arrays, making Quick Sort more memory-efficient for large in-memory datasets. Fourth, regarding stability, Merge Sort is a stable sort (equal elements retain their relative order) while standard Quick Sort is not stable, which matters when sorting records by one key while preserving prior ordering on another. The Quick Sort algorithm itself proceeds as: Step 1, choose a pivot element (here, the last element); Step 2, partition the array by moving all elements less than the pivot to its left and all elements greater to its right, placing the pivot in its final sorted position; Step 3, recursively apply Quick Sort to the sub-array left of the pivot; Step 4, recursively apply Quick Sort to the sub-array right of the pivot. Tracing on [38, 27, 43, 3, 9, 82, 10] with the last element 10 as the first pivot: elements less than 10 are {3, 9}, elements greater are {38, 27, 43, 82}, so after partitioning around 10 the array becomes [3, 9, 10, 38, 27, 43, 82] with 10 fixed in place. The left partition [3, 9] is already sorted after a further trivial partition step, and the right partition [38, 27, 43, 82] is recursively pivoted on 82, giving less-than set {38, 27, 43} and an empty greater set, and recursing further sorts 38, 27, 43 among themselves to yield [27, 38, 43]. Combining all partitions produces the fully sorted array [3, 9, 10, 27, 38, 43, 82]. In conclusion, Quick Sort is generally faster in practice due to good cache locality and in-place operation, while Merge Sort is preferred when a stable, worst-case-guaranteed sort is required, such as for linked lists or external sorting of huge files.",
        years: [],
      },
      {
        id: "mp-a3",
        group: "A",
        marks: 12,
        prompt:
          "What is a Minimum Spanning Tree? Explain Prim's algorithm with a suitable example graph and show how the MST is constructed step by step.",
        answer:
          "A Minimum Spanning Tree (MST) of a connected, undirected, weighted graph is a subset of its edges that connects all vertices together, without forming any cycle, such that the sum of the edge weights is the smallest possible among all spanning trees of that graph. An MST always contains exactly V-1 edges for a graph with V vertices, and it is widely used in practical network-design problems such as laying minimum-cost cabling to connect a set of offices, or designing a road network connecting cities with the least total construction cost. Prim's algorithm is a greedy method for building an MST that grows a single tree outward from an arbitrary starting vertex, one edge at a time. The algorithm proceeds as: Step 1, initialize the MST with a single arbitrary starting vertex and mark it as visited. Step 2, among all edges that connect a visited vertex to an unvisited vertex, select the edge with the minimum weight. Step 3, add that edge and its unvisited endpoint vertex to the MST, marking the new vertex as visited. Step 4, repeat steps 2 and 3 until all vertices have been included in the MST. Consider a graph with vertices A, B, C, D, E and weighted edges: A-B (2), A-C (3), B-C (1), B-D (4), C-D (5), C-E (6), D-E (2). Starting Prim's algorithm at vertex A, the visited set is initially {A}. The cheapest edge leaving A is A-B with weight 2, so B is added; visited = {A, B}. Now the cheapest edge leaving {A, B} is B-C with weight 1, so C is added; visited = {A, B, C}. Next, comparing remaining candidate edges B-D (4), C-D (5), and C-E (6), the cheapest is B-D with weight 4, so D is added; visited = {A, B, C, D}. Finally, comparing C-E (6) and D-E (2), D-E is cheaper at weight 2, so E is added, completing the MST. The final MST consists of edges A-B, B-C, B-D, D-E with total weight 2+1+4+2 = 9, connecting all five vertices at the minimum possible total cost. In conclusion, Prim's algorithm is efficient and simple to trace by hand for exam purposes because it always works from a single growing tree, making it especially natural to apply to dense graphs represented as adjacency matrices.",
        years: [],
      },
      {
        id: "mp-b1",
        group: "B",
        marks: 6,
        prompt:
          "What is a Queue? Write down the algorithm for insertion (enqueue) and deletion (dequeue) operations on a linear queue.",
        answer:
          "A Queue is a linear data structure that follows the First In First Out (FIFO) principle, meaning the element inserted first is the one removed first, just like a line of people waiting at a ticket counter. A queue uses two pointers, front and rear, to track the positions for deletion and insertion respectively. The Enqueue (insertion) algorithm is: Step 1, check if the queue is full by testing whether rear == MAX-1; if so, report overflow and stop. Step 2, if the queue is currently empty (front == -1), set front to 0. Step 3, increment rear by 1. Step 4, store the new element at position queue[rear]. The Dequeue (deletion) algorithm is: Step 1, check if the queue is empty by testing whether front == -1 or front > rear; if so, report underflow and stop. Step 2, retrieve and return the element at queue[front]. Step 3, increment front by 1 to move it to the next element. Step 4, if front now exceeds rear, reset both front and rear to -1 to indicate the queue is empty again. For example, enqueuing 10, 20, 30 into an empty linear queue of size 5 sets front=0 after the first insertion and moves rear from -1 to 0, then 1, then 2, giving queue = [10, 20, 30]. Dequeuing once then returns 10 and advances front to 1, leaving 20 and 30 logically in the queue even though slot 0 is now unused. This unused-slot behavior is exactly why a plain linear queue is inefficient over repeated use, motivating the circular queue design.",
        years: [],
      },
      {
        id: "mp-b2",
        group: "B",
        marks: 6,
        prompt:
          "Explain the Bubble Sort algorithm and trace it step by step on the array [5, 1, 4, 2, 8].",
        answer:
          "Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the array, compares each pair of adjacent elements, and swaps them if they are in the wrong order, causing larger elements to 'bubble' toward the end of the array with each full pass. The algorithm proceeds as: Step 1, for each pass from the start of the array to the end, compare each adjacent pair of elements. Step 2, if the left element is greater than the right element, swap them. Step 3, continue this comparison across the whole unsorted portion of the array for one full pass. Step 4, repeat the passes, each time considering one fewer element at the end (since the largest remaining element is guaranteed to be placed correctly after each pass), until a full pass completes with no swaps, at which point the array is sorted. Tracing on [5, 1, 4, 2, 8]: in Pass 1, compare 5 and 1 (swap, giving [1,5,4,2,8]), compare 5 and 4 (swap, giving [1,4,5,2,8]), compare 5 and 2 (swap, giving [1,4,2,5,8]), compare 5 and 8 (no swap needed); after Pass 1 the array is [1,4,2,5,8] with 8 correctly placed at the end. In Pass 2, compare 1 and 4 (no swap), compare 4 and 2 (swap, giving [1,2,4,5,8]), compare 4 and 5 (no swap); after Pass 2 the array is [1,2,4,5,8]. In Pass 3, all adjacent comparisons (1-2, 2-4, 4-5) require no swaps, so the algorithm can terminate early with the array fully sorted as [1,2,4,5,8]. Bubble Sort has a worst-case and average-case time complexity of O(n²) since it may need up to n-1 passes with up to n-1 comparisons each, but its best case is O(n) when the array is already sorted and an early-exit flag is used, as shown by Pass 3 requiring no swaps here.",
        years: [],
      },
      {
        id: "mp-b3",
        group: "B",
        marks: 6,
        prompt:
          "What is Recursion? Write a recursive algorithm to compute the factorial of a number and trace it for n = 5.",
        answer:
          "Recursion is a programming technique in which a function calls itself, either directly or indirectly, in order to solve a problem by breaking it down into smaller sub-problems of the same type, continuing until a base case is reached that can be answered directly without any further recursive call. Every correct recursive algorithm needs two essential parts: a base case that stops the recursion, and a recursive case that reduces the problem size and moves it closer to the base case. The recursive algorithm for factorial is: Step 1, define Factorial(n). Step 2, if n equals 0 or n equals 1, return 1 as the base case, since 0! and 1! are both defined as 1. Step 3, otherwise, return n multiplied by the result of the recursive call Factorial(n-1). Tracing this for n=5: Factorial(5) calls Factorial(4) and will multiply its result by 5; Factorial(4) calls Factorial(3) and will multiply its result by 4; Factorial(3) calls Factorial(2) and will multiply its result by 3; Factorial(2) calls Factorial(1) and will multiply its result by 2; Factorial(1) hits the base case and returns 1 directly without any further call. The calls now unwind in reverse: Factorial(2) returns 2*1=2, Factorial(3) returns 3*2=6, Factorial(4) returns 4*6=24, and finally Factorial(5) returns 5*24=120. This trace shows the two-phase nature of recursion clearly: a 'winding' phase where calls stack up waiting on their recursive call to return, and an 'unwinding' phase where each pending multiplication is finally carried out as the base case's result propagates back up the call chain.",
        years: [],
      },
      {
        id: "mp-b4",
        group: "B",
        marks: 6,
        prompt:
          "Write an algorithm to insert a new node at the end of a singly linked list, and explain each step.",
        answer:
          "A singly linked list is made of nodes, each containing a data field and a pointer to the next node, with the list accessed through a HEAD pointer and the last node's next field set to NULL. Inserting a node at the end requires traversing the entire list to find the current last node, since a singly linked list without a maintained tail pointer offers no direct shortcut to it. The algorithm is: Step 1, create a new node and set its data field to the value to be inserted, and set its next field to NULL, since it will become the new last node. Step 2, check if the list is empty by testing whether HEAD is NULL; if so, simply set HEAD to point to the new node and stop, since it is now the only node in the list. Step 3, if the list is not empty, create a temporary pointer and set it to HEAD. Step 4, move the temporary pointer forward, node by node, following each node's next field, until it reaches a node whose next field is NULL — this identifies the current last node. Step 5, set that last node's next field to point to the newly created node, linking it into the list. Step 6, the new node's own next field remains NULL, correctly marking it as the new end of the list. For example, inserting 25 at the end of the list 5 → 10 → 15 → NULL involves creating a new node containing 25, traversing from HEAD (5) through 10 to reach 15 (whose next is NULL), and then updating 15's next field to point to the new node 25, producing 5 → 10 → 15 → 25 → NULL. This traversal step is the key reason end-insertion into a singly linked list costs O(n) time in the worst case, unlike insertion at the front which is always O(1).",
        years: [],
      },
      {
        id: "mp-b5",
        group: "B",
        marks: 6,
        prompt:
          "Explain Breadth First Search (BFS) traversal of a graph with a suitable example.",
        answer:
          "Breadth First Search (BFS) is a graph traversal technique that explores all the neighbors of the current vertex before moving on to the neighbors of those neighbors, effectively visiting the graph level by level outward from a chosen starting vertex. BFS uses a queue data structure to keep track of which vertex to visit next, along with a visited array or set to ensure that no vertex is processed more than once. The algorithm proceeds as: Step 1, choose a starting vertex, mark it as visited, and enqueue it. Step 2, while the queue is not empty, dequeue the front vertex and process it (e.g. print it). Step 3, examine all adjacent vertices of the dequeued vertex; for each neighbor that has not yet been visited, mark it as visited and enqueue it. Step 4, repeat steps 2 and 3 until the queue becomes empty, at which point all vertices reachable from the starting vertex have been visited. Consider a graph with vertex A connected to B and C, vertex B additionally connected to D, and vertex C additionally connected to D and E. Starting BFS at A: A is visited and enqueued, queue = [A]. Dequeue A, process it, and enqueue its unvisited neighbors B and C, queue = [B, C]. Dequeue B, process it, and enqueue its unvisited neighbor D (C is already queued so it is skipped if encountered again), queue = [C, D]. Dequeue C, process it, and enqueue its unvisited neighbor E (D is already visited/queued), queue = [D, E]. Dequeue D, process it, it has no new unvisited neighbors, queue = [E]. Dequeue E, process it, queue becomes empty and the traversal ends. The resulting BFS visiting order is A, B, C, D, E. Because BFS explores the graph outward in expanding layers, it is the standard technique for finding the shortest path (in terms of number of edges) between two vertices in an unweighted graph, which is precisely why it is preferred over DFS whenever the shortest, rather than just any, path is required.",
        years: [],
      },
      {
        id: "mp-b6",
        group: "B",
        marks: 6,
        prompt: "Write short notes on any TWO: (a) Time Complexity vs Space Complexity (b) Hashing (c) Circular Linked List",
        answer:
          "(a) Time Complexity vs Space Complexity: Time complexity measures how the running time of an algorithm grows as a function of the input size n, typically expressed using Big O notation, and it reflects the number of basic operations performed rather than actual clock time, since that varies by hardware. Space complexity measures how much additional memory an algorithm requires as a function of input size, including both the input storage and any extra (auxiliary) memory used, such as temporary arrays, recursion stack frames, or pointers. For example, Merge Sort has time complexity O(n log n) but also requires O(n) extra space for its temporary merge arrays, whereas an in-place algorithm like Bubble Sort has O(n²) time complexity but only O(1) auxiliary space, illustrating the common time-versus-space trade-off analysts must weigh when choosing an algorithm for memory-constrained systems.\n\n(b) Hashing: Hashing is a technique that maps a given key to a specific index within a fixed-size hash table using a mathematical hash function, allowing average-case O(1) time for insertion, deletion, and search operations, which is significantly faster than the O(log n) or O(n) achievable by tree- or array-based structures. A well-designed hash function distributes keys uniformly across the table to minimize collisions, which occur when two distinct keys hash to the same index; common collision-resolution strategies include chaining, where each table slot holds a linked list of all colliding entries, and open addressing, where the algorithm probes forward through the table (linearly, quadratically, or via a second hash function) to find the next free slot. Hashing is widely used in practice for implementing dictionaries, caches, and symbol tables in compilers.\n\n(c) Circular Linked List: A Circular Linked List is a variation of a linked list in which the last node's next pointer, instead of being set to NULL, points back to the first (head) node, forming a continuous loop with no true end. This structure allows traversal to begin at any node and eventually cycle through the entire list back to the starting point, which is useful for applications requiring round-robin scheduling, such as cycling through multiple running processes in an operating system or managing turns in a multiplayer game. A circular linked list can be singly circular (one next pointer looping back) or doubly circular (both next and previous pointers form loops in each direction), and care must be taken when traversing it to explicitly check for a return to the starting node, since the usual NULL-check loop-termination condition used in a standard singly linked list does not apply here and would otherwise cause an infinite loop.",
        years: [],
      },
      {
        id: "mp-b7",
        group: "B",
        marks: 6,
        prompt:
          "Explain the concept of Stack Overflow and Stack Underflow with example algorithms showing where each check belongs in push and pop operations.",
        answer:
          "A stack is a linear data structure that stores elements in Last In First Out (LIFO) order, with all insertions (push) and deletions (pop) restricted to a single end called the top. Because an array-based stack implementation has a fixed maximum capacity, two error conditions must always be checked before performing an operation. Stack Overflow occurs when a push operation is attempted on a stack that has already reached its maximum size, meaning the top pointer is already at the last valid index (top == MAX-1); attempting to push further would write outside the allocated array bounds. Stack Underflow occurs when a pop operation is attempted on a stack that is already empty, meaning the top pointer is at its initial empty-state value (top == -1); attempting to pop would try to remove an element that does not exist. The Push algorithm with its overflow check is: Step 1, check if top == MAX-1; if true, display 'Stack Overflow' and stop, since there is no room for a new element. Step 2, otherwise, increment top by 1. Step 3, store the new value at stack[top]. The Pop algorithm with its underflow check is: Step 1, check if top == -1; if true, display 'Stack Underflow' and stop, since there is nothing to remove. Step 2, otherwise, retrieve the value at stack[top] to return it. Step 3, decrement top by 1. For example, in a stack of size 3, after pushing 10, 20, 30 the top pointer equals 2 (the last valid index), so a fourth push of 40 would trigger the overflow check and be rejected. Conversely, popping three times from that same stack brings top back down to -1, and a fourth pop attempt would trigger the underflow check and be rejected. These checks are essential parts of any correctly written stack algorithm and are routinely required in exam answers, not merely optional error handling.",
        years: [],
      },
    ],
  },

  pastPapers: {
    years: ["2017", "2018", "2019"],
    questions: [
      // ===== 2019 =====
      {
        id: "pp-2019-a1",
        group: "A",
        marks: 12,
        topic: "Graph",
        prompt: "Discuss shortest path algorithm with example.",
        years: ["2019"],
        answer:
          "A shortest path algorithm finds the path between two vertices in a weighted graph such that the sum of the weights of its edges is minimized. This is one of the most practically important graph problems, applied in GPS navigation systems, network routing protocols, and flight-connection planners. The most widely used shortest path algorithm for graphs with non-negative edge weights is Dijkstra's Algorithm, which follows a greedy strategy. It works as follows: Step 1, initialize the distance to the source vertex as 0 and the distance to every other vertex as infinity, and mark all vertices as unvisited. Step 2, select the unvisited vertex with the smallest known distance (initially the source itself). Step 3, for each neighbor of that vertex, calculate the distance through the current vertex; if this new distance is smaller than the neighbor's currently recorded distance, update it (this update step is called relaxation). Step 4, mark the current vertex as visited so it is not processed again. Step 5, repeat steps 2 to 4 until all vertices have been visited or the destination vertex has been finalized. Consider a graph with vertices S, A, B, C and edges S-A (4), S-B (1), B-A (2), B-C (5), A-C (1). Starting from source S, initial distances are S=0, A=∞, B=∞, C=∞. The nearest unvisited vertex is S itself (distance 0); relaxing its edges gives A=4 and B=1. Next, the nearest unvisited vertex is B (distance 1); relaxing B's edges gives a new candidate distance to A of 1+2=3, which is smaller than the existing 4, so A is updated to 3, and C is updated to 1+5=6. Next, the nearest unvisited vertex is A (distance 3); relaxing A's edge to C gives 3+1=4, which is smaller than the existing 6, so C is updated to 4. Finally, C is processed with no further unvisited neighbors, and the algorithm terminates. The final shortest distances are S=0, B=1, A=3, C=4, showing that the shortest path from S to C is actually S→B→A→C with total weight 4, not the direct-looking S→A→C. In conclusion, Dijkstra's algorithm efficiently finds all shortest paths from a single source by always greedily finalizing the closest remaining vertex and correctly relaxing distances through it, making it the standard solution wherever weighted, non-negative shortest-path computation is needed.",
      },
      {
        id: "pp-2019-a2",
        group: "A",
        marks: 12,
        topic: "Tree/Graph",
        prompt: "What is binary search tree? Explain breadth first search algorithm with proper example.",
        years: ["2019"],
        answer:
          "A Binary Search Tree (BST) is a binary tree data structure in which every node satisfies the BST property: the value of every node in its left subtree is smaller than the node's own value, and the value of every node in its right subtree is larger. This ordering allows searching, insertion, and deletion to be performed efficiently, typically in O(log n) time on average, by eliminating half of the remaining nodes at each comparison as the search moves down the tree, similar in spirit to binary search on a sorted array but applied to a linked, hierarchical structure rather than a flat one. Breadth First Search (BFS), by contrast, is a traversal technique applicable to trees and general graphs that visits nodes level by level, exploring all nodes at the current depth before moving to nodes at the next depth. BFS uses a queue to manage the order of visits and a visited marker to avoid revisiting nodes (essential for graphs, which may contain cycles, though trees do not). The BFS algorithm is: Step 1, enqueue the starting node (the root, for a tree) and mark it visited. Step 2, while the queue is not empty, dequeue the front node and process (visit) it. Step 3, enqueue all of its unvisited adjacent nodes (children, for a tree) and mark them visited. Step 4, repeat steps 2 and 3 until the queue is empty. Consider a binary tree with root 50, left child 30, right child 70, and 30's children 20 and 40. Starting BFS at 50: enqueue 50, queue=[50]. Dequeue 50, process it, enqueue its children 30 and 70, queue=[30,70]. Dequeue 30, process it, enqueue its children 20 and 40, queue=[70,20,40]. Dequeue 70, process it, it has no children, queue=[20,40]. Dequeue 20, process it, queue=[40]. Dequeue 40, process it, queue becomes empty and traversal ends. The visiting order produced is 50, 30, 70, 20, 40 — clearly organized level by level (root first, then both second-level nodes, then all third-level nodes). In conclusion, while a BST defines how data is organized for efficient ordered access, BFS defines a traversal strategy that can be applied on top of that structure (or any tree/graph) whenever a level-order visit or shortest-hop-count search is required.",
      },
      {
        id: "pp-2019-a3",
        group: "A",
        marks: 12,
        topic: "Searching and Sorting",
        prompt: "Discuss the differences of searching and sorting. Explain quick sort method with proper illustrations.",
        years: ["2019"],
        answer:
          "Searching and sorting are two fundamental but distinct operations performed on data collections. Searching refers to the process of locating a specific element (the search key) within a collection of data, returning either its position or confirmation that it does not exist, and common techniques include sequential search and binary search. Sorting, on the other hand, refers to the process of rearranging all elements of a collection into a particular order, typically ascending or descending, and common techniques include bubble sort, selection sort, insertion sort, quick sort, and merge sort. The two also differ in their relationship to each other: efficient searching methods like binary search actually require the data to already be sorted, meaning sorting is frequently a prerequisite step performed before efficient searching can occur, whereas sorting itself does not require any prior searching. In terms of complexity, sequential search runs in O(n) while binary search on sorted data runs in O(log n); most comparison-based sorting algorithms, by contrast, require at least O(n log n) time in the average case because they must examine relationships between many pairs of elements to establish a full ordering. Quick Sort is a highly efficient, divide-and-conquer sorting algorithm that works as follows: Step 1, select a pivot element from the array (commonly the last, first, or a randomly chosen element). Step 2, partition the array so that all elements smaller than the pivot are moved to its left and all elements larger are moved to its right, placing the pivot itself in its final correct sorted position. Step 3, recursively apply the same process to the sub-array to the left of the pivot. Step 4, recursively apply the same process to the sub-array to the right of the pivot. Step 5, the recursion terminates when a sub-array has zero or one element, which is trivially sorted. As an illustration, consider the array [9, 5, 2, 8, 3] with the last element 3 chosen as the pivot. Comparing each other element against 3: 9, 5, 8 are all greater and 2 is smaller, so after partitioning the array becomes [2, 3, 9, 5, 8] with 3 correctly fixed in position. The left sub-array [2] is already sorted (single element), and the right sub-array [9, 5, 8] is recursively pivoted on 8, giving smaller set {5} and larger set {9}, producing [5, 8, 9] after that recursive step. Combining everything yields the fully sorted array [2, 3, 5, 8, 9]. In conclusion, while searching and sorting solve different problems, they are deeply connected in practice, and Quick Sort's partition-based divide-and-conquer strategy makes it one of the fastest general-purpose sorting methods used in real systems.",
      },
      {
        id: "pp-2019-b1",
        group: "B",
        marks: 6,
        topic: "Stack",
        prompt: "Explain different operations of stack with algorithm.",
        years: ["2019"],
        answer:
          "A stack is a linear data structure that operates on the Last In First Out (LIFO) principle, where both insertion and deletion take place only at one end, called the top. The main operations supported by a stack are Push, Pop, Peek (or Top), and IsEmpty. The Push operation inserts a new element onto the top of the stack: Step 1, check if the stack is full (top == MAX-1); if so, report overflow. Step 2, increment top by 1. Step 3, store the new value at stack[top]. The Pop operation removes and returns the element at the top of the stack: Step 1, check if the stack is empty (top == -1); if so, report underflow. Step 2, retrieve the value at stack[top]. Step 3, decrement top by 1 and return the retrieved value. The Peek (or Top) operation returns the value of the top element without removing it, which is useful when the caller needs to inspect the most recent item without disturbing the stack's state; it simply checks that the stack is not empty and returns stack[top] without modifying top. The IsEmpty operation checks whether top equals -1 and returns true or false accordingly, and is typically called before every Pop or Peek to avoid underflow errors. For example, starting from an empty stack, Push(10) sets top=0 and stack=[10]; Push(20) sets top=1 and stack=[10,20]; Peek() would return 20 without changing top; and Pop() then removes and returns 20, resetting top back to 0. These four operations together form the complete Stack ADT interface used to implement higher-level applications such as expression evaluation, undo functionality, and function call management.",
      },
      {
        id: "pp-2019-b2",
        group: "B",
        marks: 6,
        topic: "Queue",
        prompt: "What is circular queue? Write an algorithm to delete an element in linear queue.",
        years: ["2019"],
        answer:
          "A circular queue is a variation of the standard linear queue in which the last position of the underlying array is logically connected back to the first position, forming a circle. This design allows the queue to reuse array slots that have been vacated by earlier dequeue operations, solving the 'false overflow' problem of a linear queue, where the queue is reported as full simply because rear has reached the last array index, even though slots at the beginning are actually free after prior dequeues. In a circular queue, the rear pointer advances using the formula rear = (rear + 1) % MAX, wrapping back to index 0 once it passes the last index, and the front pointer advances the same way, which together allow the queue to make full use of all allocated slots indefinitely. The algorithm to delete (dequeue) an element from a standard linear queue is: Step 1, check if the queue is empty by testing whether front == -1 or front > rear; if true, display 'Queue Underflow' and stop, since there is no element to remove. Step 2, retrieve the value stored at queue[front], since this is the element that has been waiting longest (FIFO order). Step 3, increment front by 1 to logically remove that element from the front of the queue. Step 4, if front becomes greater than rear after incrementing, reset both front and rear to -1, indicating the queue is now completely empty. Step 5, return the retrieved value to the caller. For example, given a linear queue [10, 20, 30] with front=0 and rear=2, calling delete once retrieves 10, advances front to 1, and leaves 20 and 30 logically present even though slot 0 is now wasted — this wasted-slot behavior is precisely the motivation for using a circular queue instead.",
      },
      {
        id: "pp-2019-b3",
        group: "B",
        marks: 6,
        topic: "Queue",
        prompt: "Explain the advantages of circular queue over linear queue with illustrations.",
        years: ["2019"],
        answer:
          "A circular queue offers several important advantages over a plain linear queue, primarily centered around efficient memory utilization. The main advantage is elimination of the 'false overflow' problem: in a linear queue, once the rear pointer reaches the final index of the array, no further insertion is possible even if elements have been dequeued from the front and earlier slots are free, whereas a circular queue's rear pointer wraps around using rear = (rear + 1) % MAX, allowing it to reuse those freed slots. For illustration, consider a linear queue of size 5 that has had elements enqueued and dequeued until front=3 and rear=4, with slots 0, 1, and 2 now empty after earlier dequeues; a linear queue would report overflow on the next insertion because rear cannot exceed index 4, wasting three perfectly usable slots. A circular queue in the identical situation would instead compute the next rear as (4+1)%5=0, successfully inserting the new element into the now-free slot 0. The second advantage is more consistent and predictable memory usage over long-running systems, such as an operating system's task scheduler or a streaming data buffer, where a linear queue would eventually become unusable without periodically shifting all elements back to the start (an expensive O(n) operation), while a circular queue requires no such shifting at all. Third, circular queues make more efficient use of a fixed-size buffer, which matters in memory-constrained embedded systems where allocating extra array space just to work around a linear queue's false-overflow limitation is wasteful. In conclusion, the circular queue's wrap-around indexing directly solves the linear queue's core inefficiency, making it the preferred structure whenever a fixed-size buffer must support continuous, long-term enqueue and dequeue operations.",
      },
      {
        id: "pp-2019-b4",
        group: "B",
        marks: 6,
        topic: "Linked List",
        prompt: "Write an algorithm to delete an element in the beginning of a singly linked list.",
        years: ["2019"],
        answer:
          "A singly linked list consists of nodes linked in sequence via next pointers, with a HEAD pointer marking the first node and the last node's next field set to NULL. Deleting the first node (the one HEAD currently points to) is the cheapest deletion operation possible on a singly linked list, since it requires no traversal at all. The algorithm is: Step 1, check if the list is empty by testing whether HEAD is NULL; if so, there is nothing to delete, so report the error and stop. Step 2, create a temporary pointer and set it to HEAD, so the node about to be removed is not lost before it can be freed. Step 3, move HEAD forward to point to the second node in the list, i.e. set HEAD = HEAD->next; this single reassignment is what logically removes the first node from the list, since the list is now considered to start from the former second node. Step 4, free (deallocate) the memory of the temporary pointer, which held the original first node, to avoid a memory leak. Step 5, if desired, return the data value that was stored in the deleted node to the caller. For example, given the list 5 → 10 → 15 → NULL with HEAD pointing to the node containing 5, deleting from the beginning sets a temporary pointer to that node, updates HEAD to point to the node containing 10, and frees the node that held 5, leaving the list as 10 → 15 → NULL. Because this operation only ever touches the head pointer and, at most, the second node, it runs in constant O(1) time regardless of the list's length, in sharp contrast to deletion at the end of a singly linked list, which requires a full O(n) traversal to locate the second-to-last node.",
      },
      {
        id: "pp-2019-b5",
        group: "B",
        marks: 6,
        topic: "Graph",
        prompt: "Explain adjacency matrix and list representations of a graph.",
        years: ["2019"],
        answer:
          "A graph can be represented in a computer's memory in two common ways: the adjacency matrix and the adjacency list, and the choice between them significantly affects both memory usage and the efficiency of various graph operations. An adjacency matrix represents a graph with V vertices as a V×V two-dimensional array, where the cell at row i and column j is set to 1 (or the edge weight, for a weighted graph) if there is an edge between vertex i and vertex j, and 0 (or infinity) otherwise; for an undirected graph, this matrix is always symmetric, since an edge between i and j implies an edge between j and i. The chief advantage of the adjacency matrix is that checking whether an edge exists between any two given vertices takes constant O(1) time, simply by inspecting the corresponding cell, but its major drawback is that it always consumes O(V²) space regardless of how many edges actually exist, which is wasteful for sparse graphs that have relatively few edges compared to the maximum possible. An adjacency list, by contrast, represents a graph as an array (or map) of V lists, one per vertex, where the list for vertex i contains all vertices directly adjacent to i (its neighbors); for a weighted graph, each list entry additionally stores the weight of that edge. The adjacency list's main advantage is space efficiency, using only O(V + E) space where E is the actual number of edges, which is significantly smaller than O(V²) for sparse graphs, though checking whether a specific edge exists now requires scanning a list rather than a single array lookup, making it slightly slower for that particular query. For example, a graph with 4 vertices A, B, C, D and edges A-B and A-C would be represented as an adjacency matrix with 1s at positions (A,B), (B,A), (A,C), and (C,A), and 0s elsewhere, while the equivalent adjacency list would simply store A → [B, C], B → [A], C → [A], D → [] (empty, since D has no edges). In conclusion, adjacency matrices are preferred for dense graphs and frequent edge-existence queries, while adjacency lists are preferred for sparse graphs and algorithms like DFS and BFS that need to efficiently enumerate a vertex's neighbors.",
      },
      {
        id: "pp-2019-b6",
        group: "B",
        marks: 6,
        topic: "Searching and Sorting",
        prompt: "Discuss merge sort method with example.",
        years: ["2019"],
        answer:
          "Merge Sort is a stable, divide-and-conquer sorting algorithm that guarantees O(n log n) time complexity in the best, average, and worst cases, making it especially reliable for large datasets where a guaranteed performance bound matters more than raw average-case speed. The algorithm works in two clear phases. In the Divide phase: Step 1, if the array has more than one element, find the middle index and split the array into a left half and a right half. Step 2, recursively apply the same division to the left half. Step 3, recursively apply the same division to the right half. Step 4, this recursive splitting continues until each sub-array contains only a single element, which is trivially considered sorted. In the Combine (Merge) phase: Step 1, compare the front elements of the two sorted sub-arrays being merged. Step 2, copy the smaller of the two into the result array and advance that sub-array's pointer. Step 3, repeat this comparison-and-copy process until one sub-array is exhausted. Step 4, copy any remaining elements from the other, non-exhausted sub-array directly into the result, since they are already guaranteed to be in sorted order and larger than everything already merged. As an example, consider the array [38, 27, 43, 10]. Dividing it splits it into [38, 27] and [43, 10]; dividing [38, 27] further gives [38] and [27], and dividing [43, 10] gives [43] and [10], all single-element sub-arrays now trivially sorted. Merging [38] and [27] compares them and produces [27, 38]; merging [43] and [10] compares them and produces [10, 43]. Finally, merging [27, 38] and [10, 43]: compare 27 and 10, copy 10 (smaller) first; compare 27 and 43, copy 27; compare 38 and 43, copy 38; only 43 remains in the right sub-array, so copy it directly, producing the fully sorted result [10, 27, 38, 43]. Because Merge Sort always splits evenly and always performs a linear-time merge, its performance does not degrade on already-sorted or reverse-sorted input the way Quick Sort's can, though this reliability comes at the cost of requiring O(n) additional temporary storage for the merge step.",
      },
      {
        id: "pp-2019-c1",
        group: "C",
        marks: 3,
        topic: "Mixed/Short Notes",
        prompt: "Short note: Difference between singly and doubly linked list.",
        years: ["2019"],
        answer:
          "A singly linked list is a linked list in which each node stores only a single pointer, next, referencing the node that follows it, which means traversal is only possible in the forward direction, from head toward the end of the list. A doubly linked list, by contrast, gives each node two pointers, next and previous (or prev), allowing traversal in both the forward and backward directions. This difference has practical consequences: deleting a given node in a doubly linked list is an O(1) operation once you have a pointer to it, because its previous node is directly reachable through the prev pointer, whereas deleting a node in a singly linked list requires a separate O(n) traversal from the head just to locate its predecessor so that predecessor's next pointer can be updated. The trade-off is memory: each node in a doubly linked list requires extra space for the additional prev pointer, so a singly linked list is more memory-efficient when only forward traversal is ever needed, such as in a simple stack implementation.",
      },
      {
        id: "pp-2019-c2",
        group: "C",
        marks: 3,
        topic: "Mixed/Short Notes",
        prompt: "Short note: Big O Notation.",
        years: ["2019"],
        answer:
          "Big O notation, written O(f(n)), is a mathematical notation used in algorithm analysis to describe the asymptotic upper bound of an algorithm's running time or space requirement as the input size n grows arbitrarily large, effectively capturing the algorithm's worst-case performance. It deliberately ignores constant factors and lower-order terms, focusing only on the dominant growth trend, since for large enough n the dominant term determines practical performance far more than implementation-specific constants. For example, an algorithm that performs exactly 3n² + 5n + 2 basic operations is described as O(n²), because as n grows large the n² term dominates the other two. Common Big O classes, ordered from fastest to slowest growth, include O(1) constant time, O(log n) logarithmic time (as in binary search), O(n) linear time (as in sequential search), O(n log n) as seen in efficient sorts like Merge Sort, and O(n²) as seen in simple sorts like Bubble Sort. Big O notation gives programmers a standard, hardware-independent way to compare algorithms and predict how they will scale before ever running them on real, large input data.",
      },
      {
        id: "pp-2019-c3",
        group: "C",
        marks: 3,
        topic: "Mixed/Short Notes",
        prompt: "Short note: DFS (Depth First Search).",
        years: ["2019"],
        answer:
          "Depth First Search (DFS) is a graph and tree traversal algorithm that explores as deeply as possible along each branch before backtracking to explore other branches, in contrast to BFS which explores level by level. DFS is typically implemented either recursively, relying on the program's own call stack, or iteratively using an explicit stack data structure, along with a visited marker for each node to avoid infinite loops in graphs containing cycles. The algorithm starts at a chosen vertex, marks it visited, and then recursively (or via the stack) visits an unvisited neighbor, continuing to go deeper until it reaches a vertex with no unvisited neighbors, at which point it backtracks to the most recent vertex that still has unexplored neighbors and continues from there. For example, in a graph where A connects to B and C, and B connects to D, a DFS starting at A would visit A, then move deep into B, then deeper into D, and only after exhausting that branch would it backtrack and visit C. DFS is commonly used for tasks such as detecting cycles in a graph, finding connected components, topological sorting, and solving maze or puzzle problems where exploring one path fully before trying alternatives is a natural strategy.",
      },

      // ===== 2018 =====
      {
        id: "pp-2018-a1",
        group: "A",
        marks: 12,
        topic: "Graph",
        prompt: "Discuss Dijkastra's [Dijkstra's] algorithm with example.",
        years: ["2018"],
        answer:
          "Dijkstra's Algorithm is a greedy algorithm used to find the shortest path from a single source vertex to every other vertex in a weighted graph, provided all edge weights are non-negative. It is one of the most widely applied algorithms in computer networking and mapping software, forming the theoretical basis for routing protocols and GPS route calculation. The algorithm maintains a distance value for every vertex (initially infinity, except zero for the source) and a set of 'finalized' vertices whose shortest distance is already known to be correct. It proceeds as: Step 1, set the distance of the source vertex to 0 and all other vertices to infinity, and mark all vertices as unvisited. Step 2, from among the unvisited vertices, select the one with the smallest current distance value. Step 3, for each unvisited neighbor of that vertex, compute the distance through the current vertex (current vertex's distance plus the edge weight); if this computed value is smaller than the neighbor's currently stored distance, update the neighbor's distance to this smaller value — this update step is called relaxation. Step 4, mark the current vertex as visited (finalized), meaning its shortest distance from the source will not change again. Step 5, repeat steps 2 through 4 until every vertex has been visited. As an example, consider a graph with vertices A (source), B, C, D and edges A-B (weight 6), A-C (weight 2), C-B (weight 1), B-D (weight 1), C-D (weight 5). Initial distances: A=0, B=∞, C=∞, D=∞. Processing A first (distance 0), relax its edges: B becomes 6, C becomes 2. The next smallest unvisited distance is C (2); relaxing C's edges gives a new candidate for B of 2+1=3, which is smaller than the existing 6, so B is updated to 3, and D is updated to 2+5=7. The next smallest is B (3); relaxing B's edge to D gives 3+1=4, smaller than the existing 7, so D is updated to 4. Finally D (4) is processed with no unvisited neighbors remaining, and the algorithm terminates. The final shortest distances from A are B=3, C=2, D=4, revealing that the true shortest path to B is A→C→B (total 3), not the direct edge A→B (which would cost 6). In conclusion, Dijkstra's algorithm's greedy strategy of always finalizing the closest remaining vertex, combined with the relaxation step at every iteration, guarantees correct shortest-path results for any graph with non-negative weights.",
      },
      {
        id: "pp-2018-a2",
        group: "A",
        marks: 12,
        topic: "Tree",
        prompt: "Explain different types of tree. Explain different tree traversal algorithm with proper example.",
        years: ["2018"],
        answer:
          "A tree is a non-linear, hierarchical data structure made of nodes connected by edges, with a single root node at the top and no cycles, such that every node except the root has exactly one parent. Several important types of trees exist for different purposes. A General Tree allows any node to have any number of children. A Binary Tree restricts every node to at most two children, conventionally called the left child and right child. A Binary Search Tree (BST) is a binary tree that additionally satisfies the ordering property that left-subtree values are smaller and right-subtree values are larger than each node. A Balanced Tree (such as an AVL tree) is a binary tree that keeps the height difference between left and right subtrees small after every insertion or deletion, guaranteeing O(log n) operations even in the worst case. A Complete Binary Tree is one where every level is fully filled except possibly the last, which is filled left to right, a property commonly used in heap implementations. Tree traversal refers to the systematic process of visiting every node in a tree exactly once, and for binary trees there are three standard depth-first traversal orders. In-order traversal visits the left subtree, then the root, then the right subtree, and for a BST specifically this produces the node values in sorted ascending order — the algorithm is: recursively traverse the left subtree, visit the root, then recursively traverse the right subtree. Pre-order traversal visits the root first, then the left subtree, then the right subtree, and is used when a copy of the tree's structure needs to be created, since the root is always processed before its children. Post-order traversal visits the left subtree, then the right subtree, then the root last, and is used when deleting a tree or evaluating an expression tree, since a node's children must be fully processed before the node itself. As an example, consider a binary tree with root 20, left child 10, right child 30, and 10's children 5 and 15. In-order traversal produces 5, 10, 15, 20, 30 (sorted order, confirming BST property). Pre-order traversal produces 20, 10, 5, 15, 30 (root visited before its children at every level). Post-order traversal produces 5, 15, 10, 30, 20 (root visited only after both subtrees are fully processed). In conclusion, the choice of tree type determines what guarantees the structure offers, while the choice of traversal order determines in what sequence its data is processed, and both are foundational to nearly every tree-based algorithm question on this exam.",
      },
      {
        id: "pp-2018-a3",
        group: "A",
        marks: 12,
        topic: "Searching and Sorting",
        prompt: "Differentiate between searching and sorting. Explain merge sort method with proper illustrations.",
        years: ["2018"],
        answer:
          "Searching and sorting are two of the most fundamental operations performed on stored data, but they solve fundamentally different problems. Searching is the process of locating a specific target value within a collection of data and reporting its position, or confirming its absence, and common approaches include sequential search, which checks every element one at a time in O(n) time, and binary search, which repeatedly halves a sorted collection to achieve O(log n) time. Sorting is the process of rearranging all elements of a collection into a specified order, usually ascending or descending, and common approaches range from simple O(n²) methods like bubble, selection, and insertion sort, to efficient O(n log n) methods like merge sort, quick sort, and heap sort. A key relationship between the two is that sorting is frequently performed as a preparatory step to enable faster searching afterward, since binary search's O(log n) efficiency is only possible on already-sorted data; without sorting first, only the slower sequential search is applicable. Another distinction is in their output: searching returns a position (or a boolean found/not-found result) without altering the original data, whereas sorting produces a rearranged version of the entire collection. Merge Sort is a stable, divide-and-conquer sorting algorithm guaranteeing O(n log n) performance in all cases. It works as follows: Step 1 (Divide), split the array into two halves at the midpoint. Step 2, recursively divide each half further until each sub-array contains a single element. Step 3 (Conquer/Merge), merge pairs of sorted sub-arrays back together by repeatedly comparing their front elements and copying the smaller one into the output, until both sub-arrays are fully consumed. As an illustration, consider the array [12, 4, 7, 9]. It is divided into [12, 4] and [7, 9], then further into [12], [4], [7], [9], each trivially sorted alone. Merging [12] and [4] compares them and yields [4, 12]; merging [7] and [9] yields [7, 9]. The final merge compares 4 and 7 (copy 4), then 12 and 7 (copy 7), then 12 and 9 (copy 9), then only 12 remains and is copied directly, producing the fully sorted array [4, 7, 9, 12]. In conclusion, while searching answers 'where is this value?' and sorting answers 'what order should these values be in?', the two are closely linked in practice, with efficient searching very often depending on sorting having already been performed.",
      },
      {
        id: "pp-2018-b1",
        group: "B",
        marks: 6,
        topic: "Stack",
        prompt: "Explain stack with its different operations with example.",
        years: ["2018"],
        answer:
          "A stack is a linear data structure that stores a collection of elements and permits insertion and deletion only from one end, called the top, following the Last In First Out (LIFO) principle — the most recently added element is always the first one removed, much like a physical stack of plates where you can only add or remove from the top. The core operations of a stack are Push, which inserts a new element onto the top after first checking for overflow (top == MAX-1), incrementing top, and storing the value at that position; Pop, which removes and returns the topmost element after first checking for underflow (top == -1), retrieving the value at stack[top], and then decrementing top; Peek (or Top), which returns the value of the topmost element without removing it, useful for inspecting the next item to be popped; and IsEmpty, which checks whether top equals -1 to determine if the stack currently holds any elements. As an example, starting with an empty stack of capacity 4 (top = -1), Push(5) makes top=0 and stack=[5]; Push(15) makes top=1 and stack=[5,15]; Push(25) makes top=2 and stack=[5,15,25]. Calling Peek() at this point returns 25 without changing the stack. Calling Pop() then removes and returns 25, restoring top to 1 and leaving stack=[5,15]. This LIFO behavior makes stacks the natural choice for problems such as reversing a sequence, checking balanced parentheses in an expression, implementing undo functionality in software, converting and evaluating infix/postfix/prefix expressions, and managing function call returns during program execution.",
      },
      {
        id: "pp-2018-b2",
        group: "B",
        marks: 6,
        topic: "Linked List",
        prompt: "Explain linked list. Write an algorithm to delete an element from the middle of doubly linked list.",
        years: ["2018"],
        answer:
          "A linked list is a linear data structure composed of individual nodes, where each node stores a data value along with one or more pointers linking it to other nodes, allowing the list to grow or shrink dynamically at runtime without requiring contiguous memory, unlike an array. A doubly linked list specifically gives each node two pointers: next, referencing the following node, and prev, referencing the preceding node, which enables traversal in both directions and allows a node to be deleted in constant time once a pointer to it is known, since its neighbors are both directly reachable. The algorithm to delete a given node from the middle of a doubly linked list (i.e., a node that is neither the head nor the tail) is: Step 1, given a pointer to the node to be deleted, first check that it is not NULL and that the list is not empty; if it is, there is nothing to delete. Step 2, access the node's prev pointer to reach its predecessor, and set that predecessor's next pointer to the node's own next pointer, effectively bypassing the node from the forward direction. Step 3, access the node's next pointer to reach its successor, and set that successor's prev pointer back to the node's own prev pointer, effectively bypassing the node from the backward direction as well. Step 4, once both neighboring nodes have been relinked around it, free (deallocate) the memory occupied by the node being deleted. For example, given the doubly linked list 10 ⇄ 20 ⇄ 30 ⇄ 40, deleting the middle node 20 involves setting node 10's next pointer to node 30 (bypassing 20 forward), setting node 30's prev pointer to node 10 (bypassing 20 backward), and then freeing node 20, leaving the list as 10 ⇄ 30 ⇄ 40. Because both the predecessor and successor pointers are directly available from the node itself in a doubly linked list, this deletion requires no separate traversal to locate the predecessor, unlike in a singly linked list, where deleting a middle node requires first traversing from the head to explicitly find and update the previous node's next pointer.",
      },
      {
        id: "pp-2018-b3",
        group: "B",
        marks: 6,
        topic: "Queue",
        prompt: "What is circular queue? Explain the advantages of this queue with example.",
        years: ["2018"],
        answer:
          "A circular queue is an extension of the standard linear queue in which the array used to store elements is treated as circular, meaning the position immediately after the last index wraps back around to index 0. This is achieved by computing both the front and rear pointers using modulo arithmetic: rear = (rear + 1) % MAX for insertion and front = (front + 1) % MAX for deletion, where MAX is the array's capacity. The key advantage of this design is efficient reuse of memory: in a plain linear queue, once rear reaches the final index, no further elements can be inserted even if earlier elements have been dequeued and their slots are now free, a problem sometimes called 'false overflow.' The circular queue eliminates this entirely, since wrapping around allows those freed slots at the beginning of the array to be reused immediately. For example, consider a circular queue of size 4 that currently holds elements at indices 2 and 3 (front=2, rear=3) after two earlier elements at indices 0 and 1 have already been dequeued. A linear queue in this state would report overflow on the next insertion, since rear=3 is already the last valid index. A circular queue, however, computes the next rear as (3+1)%4=0, successfully placing the new element into the now-free index 0. A second advantage is that circular queues avoid the need to periodically shift all remaining elements back toward the start of the array to reclaim space, an expensive O(n) operation that would otherwise be required to keep a linear queue usable over a long run. This makes circular queues especially valuable in systems like CPU task scheduling, print spoolers, and streaming data buffers, where the queue is expected to be used continuously over an extended period rather than filled and emptied only once.",
      },
      {
        id: "pp-2018-b4",
        group: "B",
        marks: 6,
        topic: "Algorithm Efficiency",
        prompt: "Explain the importance of a Big O notation. Explain the usage of theta notation.",
        years: ["2018"],
        answer:
          "Big O notation is important because it provides a standardized, hardware-independent way to describe how an algorithm's running time or memory usage grows as the size of its input increases, allowing programmers and analysts to compare the scalability of different algorithms before ever implementing or running them on real data. Without Big O, comparing two algorithms would require running both on identical hardware with identical inputs, which is impractical for predicting behavior on inputs far larger than what can be tested directly; Big O instead captures the essential growth trend (linear, logarithmic, quadratic, and so on) that determines how an algorithm will behave as data scales into the millions or billions of records, which matters enormously in real applications like database query engines and search platforms where input size is unpredictable and often very large. Big O specifically describes the asymptotic upper bound, representing the worst-case scenario, so an algorithm described as O(n²) is guaranteed to never perform worse than proportional to n² operations, though it may sometimes do better. Theta (Θ) notation, in contrast, describes a tight bound on an algorithm's growth rate, meaning it captures both the upper and lower bounds simultaneously, and is used when an algorithm's best-case and worst-case performance are asymptotically the same, giving a precise characterization of its typical behavior rather than just a pessimistic ceiling. For example, Merge Sort is described as Θ(n log n) because it always performs proportional to n log n comparisons regardless of the initial arrangement of the input data, unlike Quick Sort, whose worst case is O(n²) but whose typical/average behavior is better described separately. In practice, Big O is used far more often in casual discussion because worst-case guarantees are usually what matters most for reliability, but Theta notation is the more mathematically precise tool when an algorithm's behavior does not vary meaningfully between its best and worst cases.",
      },
      {
        id: "pp-2018-b5",
        group: "B",
        marks: 6,
        topic: "Graph",
        prompt: "Discuss different types of graphs. What is list representation of a given graph?",
        years: ["2018"],
        answer:
          "A graph is a non-linear data structure consisting of a set of vertices connected by a set of edges, and graphs can be classified into several types based on their properties. A Directed Graph (digraph) has edges with a specific direction, meaning an edge from vertex A to vertex B does not imply an edge from B to A, useful for modeling one-way relationships such as a webpage linking to another. An Undirected Graph has edges with no direction, meaning a connection between A and B is mutual and can be traversed either way, useful for modeling symmetric relationships such as a friendship or a two-way road. A Weighted Graph assigns a numeric cost or weight to each edge, such as distance or travel time, useful for problems like shortest-path computation, whereas an Unweighted Graph treats all edges as equal, only representing whether a connection exists. A Cyclic Graph contains at least one cycle, a path that starts and ends at the same vertex, while an Acyclic Graph contains no cycles at all — a special and very important case being a Directed Acyclic Graph (DAG), commonly used to represent task scheduling and dependency ordering. A Connected Graph has a path between every pair of vertices, while a Disconnected Graph has at least one pair of vertices with no path between them. The list representation of a graph, called an adjacency list, represents the graph as an array or collection of V lists, one for each vertex, where the list belonging to vertex i contains all vertices directly connected to i by an edge (and, for a weighted graph, the corresponding edge weight alongside each neighbor). For example, a graph with vertices A, B, C where A connects to both B and C, and B connects to C, would have the adjacency list A → [B, C], B → [C], C → [] (assuming a directed graph) or A → [B, C], B → [A, C], C → [A, B] (if undirected). This representation is more space-efficient than an adjacency matrix for sparse graphs, using only O(V + E) space, and is the preferred representation for traversal algorithms like DFS and BFS that need to efficiently enumerate a vertex's neighbors one at a time.",
      },
      {
        id: "pp-2018-b6",
        group: "B",
        marks: 6,
        topic: "Searching and Sorting",
        prompt: "Discuss bubble sort with example.",
        years: ["2018"],
        answer:
          "Bubble Sort is one of the simplest sorting algorithms, working by repeatedly comparing each pair of adjacent elements in the array and swapping them if they are found in the wrong order, causing the largest unsorted element to progressively 'bubble up' to its correct position at the end of the array with each complete pass. The algorithm proceeds as: Step 1, starting from the beginning of the array, compare each pair of adjacent elements, arr[i] and arr[i+1]. Step 2, if arr[i] is greater than arr[i+1], swap them so the smaller value comes first. Step 3, continue this comparison across the entire unsorted portion of the array to complete one full pass; after each pass, the largest remaining unsorted element is guaranteed to have moved into its correct final position at the end. Step 4, repeat the passes, each time considering one fewer element at the end (since it is now sorted), until a complete pass finishes with no swaps performed, which signals the array is fully sorted and the algorithm can terminate early. As an example, consider the array [4, 2, 7, 1]. In Pass 1: compare 4 and 2 (swap, → [2,4,7,1]), compare 4 and 7 (no swap), compare 7 and 1 (swap, → [2,4,1,7]); after Pass 1, 7 is correctly placed at the end. In Pass 2: compare 2 and 4 (no swap), compare 4 and 1 (swap, → [2,1,4,7]); after Pass 2, 4 is correctly placed. In Pass 3: compare 2 and 1 (swap, → [1,2,4,7]); the array is now fully sorted as [1, 2, 4, 7]. Bubble Sort's time complexity is O(n²) in both the average and worst case, since it may require close to n passes with close to n comparisons each, but with an early-exit optimization (stopping once a pass makes no swaps), its best case on an already-sorted array improves to O(n). Despite its inefficiency on large datasets compared to Merge Sort or Quick Sort, Bubble Sort remains popular in introductory teaching because its logic is easy to trace and verify by hand.",
      },
      {
        id: "pp-2018-c1",
        group: "C",
        marks: 3,
        topic: "Mixed/Short Notes",
        prompt: "Short note: Priority Queue.",
        years: ["2018"],
        answer:
          "A Priority Queue is a special type of queue in which each element is associated with a priority value, and elements are removed from the queue in order of their priority rather than strictly in the order they were inserted, unlike a standard FIFO queue. When two elements share the same priority, they are typically served according to their insertion order (first come, first served) among themselves. A priority queue is commonly implemented internally using a heap data structure (usually a binary heap), which allows both insertion and removal of the highest-priority element to be performed efficiently in O(log n) time. Priority queues have important real-world applications, such as CPU task scheduling in an operating system, where higher-priority processes are executed before lower-priority ones regardless of arrival order, and in implementing Dijkstra's shortest path algorithm, where the next vertex to process is always the one with the currently smallest known distance.",
      },
      {
        id: "pp-2018-c2",
        group: "C",
        marks: 3,
        topic: "Mixed/Short Notes",
        prompt: "Short note: Insertion sort.",
        years: ["2018"],
        answer:
          "Insertion Sort is a simple sorting algorithm that builds the final sorted array one element at a time, working similarly to how a person sorts playing cards in their hand. It works by taking each element from the unsorted portion of the array, starting from the second element, and inserting it into its correct position among the already-sorted elements to its left, shifting larger elements one position to the right to make room. For example, sorting [5, 2, 4, 1]: starting with 5 as trivially sorted, 2 is compared to 5, found smaller, and inserted before it, giving [2, 5, 4, 1]; then 4 is compared to 5 (smaller, shift 5 right) and to 2 (larger, stop), giving [2, 4, 5, 1]; then 1 is compared against 5, 4, and 2 in turn, shifting each right, and inserted at the front, giving the fully sorted [1, 2, 4, 5]. Insertion Sort has a worst-case time complexity of O(n²) for reverse-sorted input, but performs very efficiently, close to O(n), on data that is already nearly sorted, which makes it a good practical choice for small or mostly-sorted datasets.",
      },
      {
        id: "pp-2018-c3",
        group: "C",
        marks: 3,
        topic: "Mixed/Short Notes",
        prompt: "Short note: Queue operations.",
        years: ["2018"],
        answer:
          "A queue supports several core operations, all working around the First In First Out (FIFO) principle. The Enqueue operation inserts a new element at the rear of the queue, after first checking that the queue is not already full, and then advancing the rear pointer before storing the value. The Dequeue operation removes and returns the element currently at the front of the queue, after first checking that the queue is not empty, and then advancing the front pointer to the next element. The Peek (or Front) operation returns the value of the front element without removing it, allowing the next element to be inspected before committing to a dequeue. The IsEmpty operation checks whether the queue currently contains any elements, typically by testing whether front equals -1 or front exceeds rear, and IsFull checks whether the queue has reached its maximum capacity. Together, these operations implement the queue's strict ordering guarantee, which makes queues suitable for tasks such as managing print jobs, scheduling processes, and buffering data between systems operating at different speeds.",
      },

      // ===== 2017 =====
      {
        id: "pp-2017-a1",
        group: "A",
        marks: 12,
        topic: "Graph",
        prompt: "What is minimum spanning tree? Explain Kruskal's algorithm with suitable example.",
        years: ["2017"],
        answer:
          "A Minimum Spanning Tree (MST) of a connected, weighted, undirected graph is a subset of the graph's edges that connects all of its vertices together into a single tree — meaning it is both connected and free of cycles — while minimizing the total sum of the selected edge weights among all possible spanning trees. For a graph with V vertices, any spanning tree, minimum or otherwise, contains exactly V-1 edges. MSTs have direct real-world value in problems like designing the cheapest possible network of roads, pipelines, or cables that connects a given set of locations without redundant connections. Kruskal's Algorithm is a greedy method for constructing an MST that works by considering edges in increasing order of weight, regardless of which vertices they currently connect to the growing structure. It proceeds as: Step 1, list all edges of the graph and sort them in ascending order of weight. Step 2, initialize an empty MST edge set, and treat each vertex as its own separate component (commonly tracked with a Union-Find/Disjoint-Set data structure). Step 3, examine the edges in sorted order, one at a time; for each edge, check whether its two endpoint vertices currently belong to different components. Step 4, if they belong to different components, add this edge to the MST and merge the two components into one, since adding this edge cannot create a cycle. Step 5, if they already belong to the same component, discard this edge, since adding it would create a cycle. Step 6, repeat steps 3 through 5 until the MST contains exactly V-1 edges. As an example, consider a graph with vertices A, B, C, D and edges A-B (1), B-C (4), A-C (3), C-D (2), B-D (5). Sorting edges by weight gives the order A-B (1), C-D (2), A-C (3), B-C (4), B-D (5). Processing A-B (1) first: A and B are in different components, so it is added; components are now {A,B} and {C} and {D}. Processing C-D (2) next: C and D are in different components, so it is added; components are now {A,B} and {C,D}. Processing A-C (3) next: A (in {A,B}) and C (in {C,D}) are in different components, so it is added, merging everything into {A,B,C,D}. At this point the MST already has 3 edges connecting all 4 vertices, so the algorithm can stop; the remaining edges B-C (4) and B-D (5) would both be rejected as they would form cycles. The resulting MST consists of edges A-B, C-D, A-C with total weight 1+2+3=6. In conclusion, Kruskal's algorithm's edge-centric greedy strategy, combined with cycle detection via Union-Find, guarantees a correct minimum spanning tree and is particularly efficient for sparse graphs where the number of edges is small relative to the number of possible edges.",
      },
      {
        id: "pp-2017-a2",
        group: "A",
        marks: 12,
        topic: "Tree",
        prompt: "What is binary tree? Explain binary tree traversal method with illustrations.",
        years: ["2017"],
        answer:
          "A binary tree is a hierarchical, non-linear data structure in which each node has at most two children, conventionally referred to as the left child and the right child, and exactly one node designated as the root that has no parent. Every node other than the root has exactly one parent, and a node with no children is called a leaf node. Binary trees form the basis for many more specialized structures, including Binary Search Trees, heaps, and expression trees, and are used in applications ranging from organizing hierarchical data (like a file system) to representing arithmetic expressions and enabling efficient searching. Traversing a binary tree means visiting every node in the tree exactly once in a systematic order, and there are three standard depth-first traversal methods, each defined by the relative order in which the root is visited compared to its left and right subtrees. In-order traversal follows the pattern Left subtree, Root, Right subtree: the algorithm recursively traverses the entire left subtree first, then visits the root node, then recursively traverses the entire right subtree; for a Binary Search Tree specifically, this produces the node values in strictly ascending sorted order, which is why in-order traversal is the standard way to read out sorted data from a BST. Pre-order traversal follows the pattern Root, Left subtree, Right subtree: the root is visited first, before either subtree is explored, which makes pre-order useful for creating a copy of a tree's structure, since a parent must be recreated before its children can be attached to it. Post-order traversal follows the pattern Left subtree, Right subtree, Root: both subtrees are fully visited before the root itself, which makes post-order the natural choice for safely deleting a tree (children must be freed before their parent) or evaluating an expression tree (operands must be evaluated before the operator that combines them). As an illustration, consider a binary tree with root 8, left child 3, right child 10, and 3's own children 1 and 6. In-order traversal produces 1, 3, 6, 8, 10 (fully sorted order). Pre-order traversal produces 8, 3, 1, 6, 10 (root always appears before its subtrees). Post-order traversal produces 1, 6, 3, 10, 8 (root always appears last, after both subtrees are completely processed). In conclusion, the three traversal orders provide complementary views of the same underlying tree structure, and selecting the correct one is essential depending on whether the goal is sorted output, structural copying, or safe deletion/evaluation.",
      },
      {
        id: "pp-2017-a3",
        group: "A",
        marks: 12,
        topic: "Searching and Sorting",
        prompt: "Justify the need of sorting. Discuss selection sort and merge sort with example.",
        years: ["2017"],
        answer:
          "Sorting is one of the most fundamental operations in computer science, and its necessity can be justified on several grounds. First, sorted data dramatically improves search efficiency: binary search on a sorted array runs in O(log n) time, compared to O(n) for sequential search on unsorted data, which is a massive difference when searching large datasets repeatedly, such as looking up records in a database. Second, many other algorithms depend on sorted input as a prerequisite, including algorithms for finding duplicates, computing medians, merging datasets, and detecting the closest pair of points, all of which become simpler or more efficient once the data is ordered. Third, sorted output is often directly useful to end users, such as displaying search results ranked by relevance, listing files alphabetically, or showing exam results ranked from highest to lowest score, so sorting is frequently a user-facing necessity, not just an internal optimization. Selection Sort is a simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted portion of the array and moving it to the front of that unsorted portion, effectively building the sorted section one element at a time from the front. Its algorithm is: Step 1, for each position i from the start of the array to the second-to-last position, search the remaining unsorted sub-array (from i to the end) to find the index of the minimum element. Step 2, swap that minimum element with the element currently at position i. Step 3, move to the next position and repeat, so the sorted portion at the front grows by one element each pass. For example, sorting [29, 10, 14, 37]: Pass 1 finds the minimum of the whole array, 10, and swaps it into position 0, giving [10, 29, 14, 37]. Pass 2 finds the minimum of the remaining unsorted portion [29, 14, 37], which is 14, and swaps it into position 1, giving [10, 14, 29, 37]. Pass 3 finds the minimum of [29, 37], which is already 29, so no swap is needed, giving the final sorted array [10, 14, 29, 37]. Selection Sort always performs O(n²) comparisons regardless of the initial order of the data, but it performs at most n-1 swaps total, which can be advantageous when the cost of swapping elements is high. Merge Sort, by contrast, is a divide-and-conquer algorithm that recursively splits the array in half until single elements remain, then merges sorted halves back together by repeatedly comparing their front elements, guaranteeing O(n log n) performance in every case, unlike Selection Sort's consistent O(n²). In conclusion, while Selection Sort is easy to understand and minimizes swaps, Merge Sort's superior asymptotic performance makes it the far better choice for sorting large datasets efficiently.",
      },
      {
        id: "pp-2017-b1",
        group: "B",
        marks: 6,
        topic: "Introduction",
        prompt: "What is meant by data structure? Define its types with example.",
        years: ["2017"],
        answer:
          "A data structure is a specialized, systematic way of organizing, storing, and managing data in a computer's memory so that it can be accessed, searched, and modified efficiently for a given purpose. Choosing the right data structure directly affects how fast and how much memory a program uses, since different structures offer different trade-offs for operations like insertion, deletion, searching, and traversal. Data structures are broadly classified into two types: linear and non-linear. Linear data structures arrange their elements sequentially, one after another, such that each element (except the first and last) has exactly one predecessor and one successor; examples include Arrays, which store elements in contiguous memory with fixed size and constant-time indexed access; Stacks, which restrict insertion and deletion to one end following LIFO order; Queues, which restrict insertion to the rear and deletion to the front following FIFO order; and Linked Lists, which store elements as nodes connected via pointers, allowing dynamic resizing. Non-linear data structures, by contrast, arrange elements in a hierarchical or interconnected fashion rather than a strict sequence, so an element may have multiple 'next' elements; examples include Trees, which organize data hierarchically with a root and parent-child relationships (used for representing file systems or organizational charts), and Graphs, which represent arbitrary networks of vertices connected by edges (used for representing road maps or social networks). For example, an array is well suited for storing a fixed list of student roll numbers with fast indexed access, while a graph is well suited for representing a network of cities connected by roads with varying distances. In conclusion, selecting an appropriate data structure for a given problem is one of the most important decisions in efficient program design.",
      },
      {
        id: "pp-2017-b2",
        group: "B",
        marks: 6,
        topic: "Stack",
        prompt: "Write down algorithm for evaluating postfix expression and illustrate it with suitable example.",
        years: ["2017"],
        answer:
          "A postfix expression (also called Reverse Polish Notation) places each operator immediately after its two operands, such as '3 4 +' instead of the infix form '3 + 4'; this notation eliminates the need for parentheses or operator precedence rules, making it especially convenient for a computer to evaluate directly using a stack. The algorithm for evaluating a postfix expression is: Step 1, create an empty stack to hold operand values. Step 2, scan the postfix expression from left to right, one token (symbol) at a time. Step 3, if the current token is an operand (a number), push it onto the stack. Step 4, if the current token is an operator (+, -, *, /), pop the top two values off the stack — the first pop is the right operand and the second pop is the left operand — apply the operator to them in the correct order (left operand operator right operand), and push the resulting value back onto the stack. Step 5, after the entire expression has been scanned, the single value remaining on the stack is the final result of the expression. As an illustration, consider evaluating the postfix expression '5 3 4 + 2 *'. Scanning left to right: '5' is an operand, push it, stack=[5]. '3' is an operand, push it, stack=[5,3]. '4' is an operand, push it, stack=[5,3,4]. '+' is an operator, so pop 4 (right operand) and 3 (left operand), compute 3+4=7, push 7, stack=[5,7]. '2' is an operand, push it, stack=[5,7,2]. '*' is an operator, so pop 2 (right operand) and 7 (left operand), compute 7*2=14, push 14, stack=[5,14]. At this point the whole expression has not actually finished — re-reading the tokens, the expression '5 3 4 + 2 *' evaluates the sub-result 14 but the operand 5 pushed at the very start is still sitting underneath it on the stack, which happens because this particular expression is not fully reducible to a single value the way a textbook postfix expression normally is; a well-formed postfix expression always has exactly one fewer operator than operand so that every operator consumes two values and exactly one final value remains. Using the corrected, well-formed expression '5 3 4 + 2 * +' instead: after reaching stack=[5,14] as traced above, the final token '+' is an operator, so pop 14 (right operand) and 5 (left operand), compute 5+14=19, and push 19, leaving stack=[19]. The expression is now fully scanned and the single remaining value, 19, is the final result — this matches the infix equivalent 5 + ((3+4) * 2) = 5 + 14 = 19. This stack-based method runs in O(n) time for an expression with n tokens, since each token is processed exactly once with only constant-time stack operations.",
      },
      {
        id: "pp-2017-b3",
        group: "B",
        marks: 6,
        topic: "Stack",
        prompt: "What is stack? Define stack operations. Write down algorithm for push and pop operations of stack.",
        years: ["2017"],
        answer:
          "A stack is a linear data structure that stores elements in Last In First Out (LIFO) order, meaning the most recently inserted element is always the first one to be removed, with all insertions and deletions restricted to a single end called the top of the stack. A stack is typically implemented using an array with an accompanying integer variable, top, that tracks the index of the current topmost element, initialized to -1 to represent an empty stack. The two fundamental stack operations are Push, which inserts a new element onto the top of the stack, and Pop, which removes and returns the element currently at the top. The Push algorithm is: Step 1, check whether the stack is full by testing if top equals MAX-1 (where MAX is the array's capacity); if true, display a 'Stack Overflow' message and stop, since there is no room to insert further. Step 2, if the stack is not full, increment top by 1. Step 3, store the new value at position stack[top], completing the insertion. The Pop algorithm is: Step 1, check whether the stack is empty by testing if top equals -1; if true, display a 'Stack Underflow' message and stop, since there is no element to remove. Step 2, if the stack is not empty, retrieve the value currently stored at stack[top]. Step 3, decrement top by 1, logically removing that element from the stack. Step 4, return the retrieved value to the caller. For example, starting with an empty stack of size 3 (top=-1), Push(7) checks that top is not MAX-1, increments top to 0, and stores 7, giving stack=[7]. Push(9) increments top to 1 and stores 9, giving stack=[7,9]. Calling Pop() now checks that top is not -1, retrieves the value 9 from stack[1], decrements top back to 0, and returns 9, leaving stack effectively as [7]. These two operations, together with overflow and underflow checks, form the complete and correct implementation of the core stack ADT.",
      },
      {
        id: "pp-2017-b4",
        group: "B",
        marks: 6,
        topic: "Queue",
        prompt: "Discuss the disadvantage of Linear Queue over Circular Queue with example.",
        years: ["2017"],
        answer:
          "A linear queue is implemented using a simple array with two pointers, front and rear, where insertion always happens by incrementing rear and deletion always happens by incrementing front, without any wrap-around behavior. The primary disadvantage of a linear queue compared to a circular queue is its inefficient use of memory over repeated insertions and deletions, a problem often referred to as 'false overflow.' Because rear only ever increases and never wraps back to reuse earlier freed positions, once rear reaches the final index of the array (MAX-1), no further elements can be inserted, even if many elements have already been dequeued from the front and their slots are sitting completely empty and unused. For example, consider a linear queue with capacity 5 that has had five elements enqueued and then three of them dequeued from the front; front is now 3 and rear is 4, meaning array indices 0, 1, and 2 are free, yet since rear has already reached the last valid index (4), attempting to enqueue a new element would incorrectly report the queue as full, even though three-fifths of the array is genuinely available. Resolving this in a plain linear queue would require either shifting all remaining elements back toward index 0 (an expensive O(n) operation that must be repeated periodically) or simply wasting that memory permanently. A circular queue avoids this disadvantage entirely by computing the rear position as (rear + 1) % MAX, allowing it to wrap around and reuse index 0 once index MAX-1 has been passed, so in the identical scenario above, a circular queue would happily reuse the freed slots at indices 0, 1, and 2 without any shifting or wasted space. In conclusion, the linear queue's false-overflow limitation makes it poorly suited for any system requiring continuous, long-running enqueue and dequeue operations, which is precisely why the circular queue design is preferred in practical implementations such as operating system schedulers and buffered data streams.",
      },
      {
        id: "pp-2017-b5",
        group: "B",
        marks: 6,
        topic: "Linked List",
        prompt: "What are advantages and drawbacks of Linked List over array? Write down algorithm for inserting and deleting data from beginning of linked list.",
        years: ["2017"],
        answer:
          "A linked list offers several advantages over an array. First, a linked list has dynamic size, growing or shrinking at runtime by allocating or freeing individual nodes as needed, whereas an array (in many implementations) has a fixed size that must be declared in advance, risking either wasted space or overflow. Second, insertion and deletion at the beginning of a linked list are O(1) operations requiring only pointer updates, whereas the same operations on an array require shifting all subsequent elements, costing O(n) time. However, linked lists also have drawbacks compared to arrays. First, a linked list does not support direct/random access to an element by index; finding the k-th element requires traversing from the head one node at a time, costing O(n) time, whereas an array provides O(1) indexed access via direct memory address calculation. Second, each linked list node requires extra memory to store its pointer field(s) in addition to its data, whereas an array stores only the raw data values, making arrays more memory-efficient per element. The algorithm to insert a new node at the beginning of a singly linked list is: Step 1, create a new node and set its data field to the value being inserted. Step 2, set the new node's next pointer to the current HEAD, so it points to what was previously the first node. Step 3, update HEAD to point to this new node, making it the new first node of the list. The algorithm to delete a node from the beginning of a singly linked list is: Step 1, check if the list is empty (HEAD is NULL); if so, report the error and stop. Step 2, store HEAD in a temporary pointer, to preserve access to the node being removed. Step 3, update HEAD to HEAD->next, advancing it to what was the second node. Step 4, free the memory held by the temporary pointer. For example, inserting 1 at the beginning of the list 2 → 3 → NULL creates a new node containing 1, sets its next to point at the node containing 2, and updates HEAD to the new node, giving 1 → 2 → 3 → NULL; deleting from the beginning of this new list then reverses that, restoring HEAD to point at the node containing 2, giving 2 → 3 → NULL and freeing the node that held 1.",
      },
      {
        id: "pp-2017-b6",
        group: "B",
        marks: 6,
        topic: "Searching and Sorting",
        prompt: "What is idea behind binary search? Write down its algorithm and illustrate with example.",
        years: ["2017"],
        answer:
          "The idea behind binary search is to efficiently locate a target value within a sorted array by repeatedly dividing the search range in half, eliminating the half that cannot possibly contain the target based on a single comparison with the middle element, rather than checking every element one by one as sequential search does. This divide-and-conquer strategy is only valid because the array is sorted, since sortedness is what guarantees that everything to one side of the middle element is either entirely smaller or entirely larger than it, allowing an entire half of the remaining search space to be safely discarded at every step. The algorithm is: Step 1, set two pointers, low to the first index (0) and high to the last index (n-1) of the sorted array. Step 2, while low is less than or equal to high, calculate the middle index as mid = (low + high) / 2. Step 3, compare the target value with the element at arr[mid]; if they are equal, the search is successful, so return mid as the found position. Step 4, if the target is smaller than arr[mid], the target (if present) must lie in the left half, so set high = mid - 1 and repeat from Step 2. Step 5, if the target is larger than arr[mid], the target (if present) must lie in the right half, so set low = mid + 1 and repeat from Step 2. Step 6, if low exceeds high before the target is found, the target is not present in the array, so return a not-found indicator (such as -1). As an illustration, consider searching for the value 23 in the sorted array [4, 8, 15, 16, 23, 42, 55] (indices 0 to 6). Initially low=0, high=6, so mid=3, and arr[3]=16; since 23 is greater than 16, discard the left half and set low=4. Now low=4, high=6, so mid=5, and arr[5]=42; since 23 is smaller than 42, discard the right half and set high=4. Now low=4, high=4, so mid=4, and arr[4]=23, which matches the target, so the search successfully returns index 4. Because binary search discards half of the remaining elements at every comparison, it runs in O(log n) time, making it dramatically faster than sequential search's O(n) for large sorted datasets, such as searching a sorted database index of millions of records.",
      },
      {
        id: "pp-2017-c1",
        group: "C",
        marks: 3,
        topic: "Mixed/Short Notes",
        prompt: "Short note: Priority Queue.",
        years: ["2017"],
        answer:
          "A Priority Queue is a specialized form of queue in which each element carries an associated priority value, and dequeue operations always remove the element with the highest priority currently present, rather than strictly following arrival order as a standard FIFO queue does. Elements sharing the same priority are typically resolved by their relative insertion order. Priority queues are most efficiently implemented using a heap data structure, usually a binary min-heap or max-heap, which supports both insertion and extraction of the highest-priority element in O(log n) time, far better than the O(n) that a naive unsorted-list implementation would require to find the maximum or minimum each time. Priority queues are essential to several important algorithms and systems, including CPU process scheduling (where higher-priority tasks run first), Dijkstra's shortest path algorithm (where the next vertex processed is always the one with the smallest tentative distance), and Huffman coding (where the two lowest-frequency nodes are repeatedly merged).",
      },
      {
        id: "pp-2017-c2",
        group: "C",
        marks: 3,
        topic: "Mixed/Short Notes",
        prompt: "Short note: Dijkastra's Algorithm.",
        years: ["2017"],
        answer:
          "Dijkstra's Algorithm is a greedy algorithm that computes the shortest path from a single source vertex to every other vertex in a weighted graph, under the requirement that all edge weights are non-negative. It maintains a running distance estimate for each vertex, initialized to infinity except zero for the source, along with a set of vertices whose shortest distance has already been finalized. At each step, the algorithm selects the unvisited vertex with the smallest current distance estimate, marks it as finalized, and then relaxes all of its outgoing edges, meaning it checks whether reaching each neighbor through this vertex would produce a shorter distance than previously recorded, updating the neighbor's distance if so. This process repeats until every vertex has been finalized. Because it always expands outward from the closest remaining vertex, Dijkstra's algorithm guarantees correct shortest-path results, and it is the underlying technique behind real-world systems such as GPS route planning and network packet routing protocols.",
      },
      {
        id: "pp-2017-c3",
        group: "C",
        marks: 3,
        topic: "Mixed/Short Notes",
        prompt: "Short note: DFS.",
        years: ["2017"],
        answer:
          "Depth First Search (DFS) is a traversal algorithm for trees and graphs that explores as far as possible down each branch before backtracking to try the next unexplored branch, giving it a 'go deep first' character in contrast to BFS's level-by-level exploration. DFS can be implemented recursively, relying implicitly on the program's call stack, or iteratively using an explicit stack data structure, and it uses a visited marker on each node to avoid infinite loops when traversing graphs that contain cycles. Starting from a chosen vertex, the algorithm marks it visited, then moves to an unvisited neighbor and repeats the process recursively; when a vertex is reached that has no unvisited neighbors, the algorithm backtracks to the previous vertex on the path and continues exploring any of its remaining unvisited neighbors. DFS is widely used for tasks such as detecting cycles in a graph, finding connected components, performing topological sorting of a directed acyclic graph, and solving pathfinding puzzles like mazes.",
      },
    ],
  },

  glossary: [
    { term: "Algorithm", definition: "A finite, well-defined sequence of steps or instructions designed to solve a specific problem or perform a computation." },
    { term: "Data Structure", definition: "A systematic way of organizing and storing data in memory to enable efficient access and modification." },
    { term: "Abstract Data Type (ADT)", definition: "A logical/mathematical model that defines a data structure's behavior (its operations) without specifying implementation details." },
    { term: "Stack", definition: "A linear data structure that follows LIFO (Last In First Out) order, with insertion and deletion restricted to one end called the top." },
    { term: "LIFO", definition: "Last In First Out — the ordering principle of a stack, where the most recently added element is removed first." },
    { term: "Queue", definition: "A linear data structure that follows FIFO order, with insertion at the rear and deletion at the front." },
    { term: "FIFO", definition: "First In First Out — the ordering principle of a queue, where the earliest added element is removed first." },
    { term: "Overflow", definition: "An error condition that occurs when an insertion is attempted on a data structure that has already reached its maximum capacity." },
    { term: "Underflow", definition: "An error condition that occurs when a deletion is attempted on a data structure that is already empty." },
    { term: "Circular Queue", definition: "A queue implementation where the rear wraps back to index 0 after the last array position, allowing reuse of freed slots." },
    { term: "Priority Queue", definition: "A queue where each element has a priority, and dequeue always removes the highest-priority element rather than the earliest-arrived one." },
    { term: "Node", definition: "A basic unit of a linked list or tree that stores a data value along with one or more pointers/references to other nodes." },
    { term: "Pointer", definition: "A variable that stores the memory address of another variable or node, used to link data structures like linked lists and trees." },
    { term: "Linked List", definition: "A linear data structure made of nodes connected via pointers, allowing dynamic memory allocation without contiguous storage." },
    { term: "Singly Linked List", definition: "A linked list where each node has only one pointer (next), allowing forward traversal only." },
    { term: "Doubly Linked List", definition: "A linked list where each node has two pointers (next and prev), allowing traversal in both directions." },
    { term: "Circular Linked List", definition: "A linked list where the last node's next pointer points back to the first node instead of NULL, forming a loop." },
    { term: "Recursion", definition: "A technique where a function calls itself to solve smaller instances of the same problem, terminating at a base case." },
    { term: "Base Case", definition: "The terminating condition in a recursive function that stops further recursive calls." },
    { term: "Tree", definition: "A non-linear, hierarchical data structure of nodes connected by edges, with one root and no cycles." },
    { term: "Binary Tree", definition: "A tree in which each node has at most two children, called the left child and right child." },
    { term: "Binary Search Tree (BST)", definition: "A binary tree where every node's left subtree contains smaller values and right subtree contains larger values." },
    { term: "Root", definition: "The topmost node of a tree, which has no parent." },
    { term: "Leaf", definition: "A node in a tree that has no children." },
    { term: "Traversal", definition: "The process of visiting every node of a tree or graph exactly once in a systematic order (e.g. in-order, pre-order, post-order, DFS, BFS)." },
    { term: "In-order Traversal", definition: "A binary tree traversal that visits Left subtree, then Root, then Right subtree; produces sorted order for a BST." },
    { term: "Pre-order Traversal", definition: "A binary tree traversal that visits Root, then Left subtree, then Right subtree; used to copy a tree's structure." },
    { term: "Post-order Traversal", definition: "A binary tree traversal that visits Left subtree, then Right subtree, then Root; used to delete a tree or evaluate expression trees." },
    { term: "Graph", definition: "A non-linear data structure consisting of a set of vertices connected by a set of edges, directed or undirected." },
    { term: "Vertex", definition: "A single node/point in a graph." },
    { term: "Edge", definition: "A connection between two vertices in a graph, which may carry a weight and/or a direction." },
    { term: "Adjacency Matrix", definition: "A V×V array representation of a graph where cell [i][j] indicates the presence (and weight) of an edge between vertex i and j." },
    { term: "Adjacency List", definition: "A graph representation storing, for each vertex, a list of its directly connected neighboring vertices." },
    { term: "DFS (Depth First Search)", definition: "A graph/tree traversal that explores as far as possible along each branch before backtracking, typically using a stack or recursion." },
    { term: "BFS (Breadth First Search)", definition: "A graph/tree traversal that explores all neighbors at the current depth before moving deeper, using a queue." },
    { term: "Spanning Tree", definition: "A subgraph of a connected graph that includes all vertices, is connected, and contains no cycles, using exactly V-1 edges." },
    { term: "Minimum Spanning Tree (MST)", definition: "A spanning tree of a weighted graph whose total edge weight is the smallest possible among all spanning trees." },
    { term: "Time Complexity", definition: "A measure of how the running time of an algorithm grows as a function of its input size, usually expressed in Big O notation." },
    { term: "Space Complexity", definition: "A measure of how much additional memory an algorithm requires as a function of its input size." },
    { term: "Big O Notation", definition: "Asymptotic notation describing the upper bound (worst-case growth rate) of an algorithm's time or space requirement." },
    { term: "Hashing", definition: "A technique that maps a key to an index in a table using a hash function, enabling average O(1) insertion and lookup." },
    { term: "Collision", definition: "A situation in hashing where two different keys map to the same index in the hash table." },
    { term: "Sorting", definition: "The process of rearranging the elements of a collection into a specified order, typically ascending or descending." },
    { term: "Searching", definition: "The process of locating a specific target value within a collection of data." },
  ],

  syllabus: {
    units: [
      {
        unit: "Unit 1: Introduction",
        topics: ["Introduction to Data and Data Types", "Data Structure (DS)", "Abstract Data Type (ADT) and Applications"],
        weightageMarks: 6,
      },
      {
        unit: "Unit 2: Algorithm Efficiency and Complexity",
        topics: ["The RAM Model", "Algorithm Analysis", "Asymptotic Notations: big O, sigma, theta, omega"],
        weightageMarks: 6,
      },
      {
        unit: "Unit 3: Linear Static Data Structures",
        topics: [
          "Stack as an Abstract Data Type",
          "Array Representation/Implementation of Stack",
          "Primitive Stack Operations and Algorithm Efficiency",
          "Stack Overflow and Underflow Conditions",
          "Prefix, Infix and Postfix Expression using Stack",
          "Queue as an Abstract Data Type",
          "Array Representation/Implementation of Queue",
          "Primitive Queue Operations",
          "Queue Overflow and Underflow Conditions",
          "Linear, Circular & Priority Queue",
        ],
        weightageMarks: 18,
      },
      {
        unit: "Unit 4: Linear Dynamic Data Structure",
        topics: [
          "List as an Abstract Data Type",
          "Primary List Operations",
          "Static and Dynamic List Structure",
          "Linked List as an Abstract Data Type",
          "Singly & Doubly Linear Linked List, Circular Linked List",
          "Advantages of Doubly over Singly Linked List",
          "Insertion/Deletion of a Node: Front, Last, Before/After a Given Node",
          "Linked List implementation of Stack and Queue",
        ],
        weightageMarks: 12,
      },
      {
        unit: "Unit 5: Recursion",
        topics: ["Principle of Recursion", "Applications: Fibonacci Sequence, Tower of Hanoi (TOH), Multiplication of Natural Numbers"],
        weightageMarks: 6,
      },
      {
        unit: "Unit 6: Hierarchical Data Structure",
        topics: [
          "Tree: Concepts, Definitions, Properties",
          "Binary Tree: Definition, Applications, Representation using Linked List",
          "Binary Tree Traversals: Pre-order, In-order, Post-order",
          "Binary Search Tree (BST): Insertion, Deletion",
          "Balanced Trees",
          "Huffman Algorithm for Data Compression",
          "Graph: Definition, Representation, Applications",
          "Adjacency Matrix, Transitive Closure, Warshall's Algorithm",
          "Types of Graphs",
          "Graph Traversal: DFS, BFS",
          "Spanning Tree, Minimum Spanning Tree: Kruskal's & Prim's Algorithm",
          "Shortest Path: Floyd Warshall's & Dijkstra's Algorithm",
        ],
        weightageMarks: 24,
      },
      {
        unit: "Unit 7: Searching and Sorting",
        topics: [
          "Searching: Sequential Search, Binary Search, Binary Search Tree",
          "Hashing: Hash Functions, Hash Table, Collision Resolution",
          "Sorting: Insertion, Selection, Bubble, Quick Sort, Merge Sort, Radix Sort, Shell Sort, Heap Sort",
          "Efficiency of Searching and Sorting Algorithms",
        ],
        weightageMarks: 18,
      },
    ],
  },
};
