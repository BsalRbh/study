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
          "A Binary Search Tree (BST) is a special form of a binary tree in which every node follows the BST property: all values stored in the left subtree of a node are strictly smaller than the node's own value, and all values stored in the right subtree are strictly larger. This ordering property is what makes searching, insertion, and deletion efficient, since at every node a comparison eliminates roughly half of the remaining tree from consideration, giving an average time complexity of O(log n), although a poorly balanced (skewed) tree can degrade to O(n). The insertion algorithm works as follows.\n\nStep 1: if the tree is empty, create a new node with the given value and make it the root. Step 2: otherwise, starting at the root, compare the new value with the current node's value. Step 3: if the new value is smaller, move to the left child; if it is larger, move to the right child; if a node with that value already exists, typically no duplicate is inserted. Step 4: repeat this comparison-and-move process until an empty (null) position is reached. Step 5: create the new node at that null position and link it as the left or right child of its parent, as appropriate.\n\nTracing this algorithm with the sequence 45, 20, 60, 10, 30, 55: 45 is inserted first and becomes the root since the tree is empty. 20 is compared with 45, found smaller, and becomes the left child of 45. 60 is compared with 45, found larger, and becomes the right child of 45. 10 is compared with 45 (smaller, go left), then with 20 (smaller, go left), and becomes the left child of 20. 30 is compared with 45 (smaller, go left), then with 20 (larger, go right), and becomes the right child of 20. Finally 55 is compared with 45 (larger, go right), then with 60 (smaller, go left), and becomes the left child of 60. The resulting tree has 45 at the root, 20 and 60 as its children, and 10, 30, 55 correctly placed as leaves preserving the BST ordering at every level.\n\nIn conclusion, because each insertion only requires following a single root-to-leaf path and making one comparison per level, BST insertion is efficient in practice and forms the foundation for BST-based searching and deletion as well.",
        years: [],
      },
      {
        id: "mp-a2",
        group: "A",
        marks: 12,
        prompt:
          "Discuss the differences between Quick Sort and Merge Sort. Explain the Quick Sort algorithm with a step-by-step trace on the array [38, 27, 43, 3, 9, 82, 10].",
        answer:
          "Quick Sort and Merge Sort are both efficient, divide-and-conquer sorting algorithms, but they differ significantly in strategy, performance guarantees, and memory usage. First, in terms of the partitioning approach, Quick Sort selects a pivot element and rearranges the array so that smaller elements move to its left and larger elements move to its right, doing the bulk of its work during the 'divide' step, whereas Merge Sort simply splits the array into two equal halves without any rearrangement and does its real work during the 'combine' (merge) step. Second, regarding worst-case time complexity, Merge Sort guarantees O(n log n) performance in every case because it always splits evenly, while Quick Sort's worst case degrades to O(n²) if the pivot chosen is consistently the smallest or largest element, such as when sorting an already-sorted array with a naive pivot choice. Third, in terms of space, Quick Sort is an in-place algorithm requiring only O(log n) additional space for recursion, whereas Merge Sort requires O(n) additional space to hold the temporary merged arrays, making Quick Sort more memory-efficient for large in-memory datasets. Fourth, regarding stability, Merge Sort is a stable sort (equal elements retain their relative order) while standard Quick Sort is not stable, which matters when sorting records by one key while preserving prior ordering on another. The Quick Sort algorithm itself proceeds as: Step 1, choose a pivot element (here, the last element); Step 2, partition the array by moving all elements less than the pivot to its left and all elements greater to its right, placing the pivot in its final sorted position; Step 3, recursively apply Quick Sort to the sub-array left of the pivot; Step 4, recursively apply Quick Sort to the sub-array right of the pivot.\n\nTracing on [38, 27, 43, 3, 9, 82, 10] with the last element 10 as the first pivot: elements less than 10 are {3, 9}, elements greater are {38, 27, 43, 82}, so after partitioning around 10 the array becomes [3, 9, 10, 38, 27, 43, 82] with 10 fixed in place. The left partition [3, 9] is already sorted after a further trivial partition step, and the right partition [38, 27, 43, 82] is recursively pivoted on 82, giving less-than set {38, 27, 43} and an empty greater set, and recursing further sorts 38, 27, 43 among themselves to yield [27, 38, 43]. Combining all partitions produces the fully sorted array [3, 9, 10, 27, 38, 43, 82].\n\nIn conclusion, Quick Sort is generally faster in practice due to good cache locality and in-place operation, while Merge Sort is preferred when a stable, worst-case-guaranteed sort is required, such as for linked lists or external sorting of huge files.",
        years: [],
      },
      {
        id: "mp-a3",
        group: "A",
        marks: 12,
        prompt:
          "What is a Minimum Spanning Tree? Explain Prim's algorithm with a suitable example graph and show how the MST is constructed step by step.",
        answer:
          "A Minimum Spanning Tree (MST) of a connected, undirected, weighted graph is a subset of its edges that connects all vertices together, without forming any cycle, such that the sum of the edge weights is the smallest possible among all spanning trees of that graph. An MST always contains exactly V-1 edges for a graph with V vertices, and it is widely used in practical network-design problems such as laying minimum-cost cabling to connect a set of offices, or designing a road network connecting cities with the least total construction cost. Prim's algorithm is a greedy method for building an MST that grows a single tree outward from an arbitrary starting vertex, one edge at a time.\n\nThe algorithm proceeds as: Step 1, initialize the MST with a single arbitrary starting vertex and mark it as visited. Step 2, among all edges that connect a visited vertex to an unvisited vertex, select the edge with the minimum weight. Step 3, add that edge and its unvisited endpoint vertex to the MST, marking the new vertex as visited. Step 4, repeat steps 2 and 3 until all vertices have been included in the MST.\n\nConsider a graph with vertices A, B, C, D, E and weighted edges: A-B (2), A-C (3), B-C (1), B-D (4), C-D (5), C-E (6), D-E (2). Starting Prim's algorithm at vertex A, the visited set is initially {A}. The cheapest edge leaving A is A-B with weight 2, so B is added; visited = {A, B}. Now the cheapest edge leaving {A, B} is B-C with weight 1, so C is added; visited = {A, B, C}. Next, comparing remaining candidate edges B-D (4), C-D (5), and C-E (6), the cheapest is B-D with weight 4, so D is added; visited = {A, B, C, D}. Finally, comparing C-E (6) and D-E (2), D-E is cheaper at weight 2, so E is added, completing the MST. The final MST consists of edges A-B, B-C, B-D, D-E with total weight 2+1+4+2 = 9, connecting all five vertices at the minimum possible total cost.\n\nIn conclusion, Prim's algorithm is efficient and simple to trace by hand for exam purposes because it always works from a single growing tree, making it especially natural to apply to dense graphs represented as adjacency matrices.",
        years: [],
      },
      {
        id: "mp-b1",
        group: "B",
        marks: 6,
        prompt:
          "What is a Queue? Write down the algorithm for insertion (enqueue) and deletion (dequeue) operations on a linear queue.",
        answer:
          "A Queue is a linear data structure that follows the First In First Out (FIFO) principle, meaning the element inserted first is the one removed first, just like a line of people waiting at a ticket counter. A queue uses two pointers, front and rear, to track the positions for deletion and insertion respectively.\n\nThe Enqueue (insertion) algorithm is: Step 1, check if the queue is full by testing whether rear == MAX-1; if so, report overflow and stop. Step 2, if the queue is currently empty (front == -1), set front to 0. Step 3, increment rear by 1. Step 4, store the new element at position queue[rear]. The Dequeue (deletion) algorithm is: Step 1, check if the queue is empty by testing whether front == -1 or front > rear; if so, report underflow and stop. Step 2, retrieve and return the element at queue[front]. Step 3, increment front by 1 to move it to the next element. Step 4, if front now exceeds rear, reset both front and rear to -1 to indicate the queue is empty again.\n\nFor example, enqueuing 10, 20, 30 into an empty linear queue of size 5 sets front=0 after the first insertion and moves rear from -1 to 0, then 1, then 2, giving queue = [10, 20, 30]. Dequeuing once then returns 10 and advances front to 1, leaving 20 and 30 logically in the queue even though slot 0 is now unused. This unused-slot behavior is exactly why a plain linear queue is inefficient over repeated use, motivating the circular queue design.",
        years: [],
      },
      {
        id: "mp-b2",
        group: "B",
        marks: 6,
        prompt:
          "Explain the Bubble Sort algorithm and trace it step by step on the array [5, 1, 4, 2, 8].",
        answer:
          "Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the array, compares each pair of adjacent elements, and swaps them if they are in the wrong order, causing larger elements to 'bubble' toward the end of the array with each full pass.\n\nThe algorithm proceeds as: Step 1, for each pass from the start of the array to the end, compare each adjacent pair of elements. Step 2, if the left element is greater than the right element, swap them. Step 3, continue this comparison across the whole unsorted portion of the array for one full pass. Step 4, repeat the passes, each time considering one fewer element at the end (since the largest remaining element is guaranteed to be placed correctly after each pass), until a full pass completes with no swaps, at which point the array is sorted.\n\nTracing on [5, 1, 4, 2, 8]: in Pass 1, compare 5 and 1 (swap, giving [1,5,4,2,8]), compare 5 and 4 (swap, giving [1,4,5,2,8]), compare 5 and 2 (swap, giving [1,4,2,5,8]), compare 5 and 8 (no swap needed); after Pass 1 the array is [1,4,2,5,8] with 8 correctly placed at the end. In Pass 2, compare 1 and 4 (no swap), compare 4 and 2 (swap, giving [1,2,4,5,8]), compare 4 and 5 (no swap); after Pass 2 the array is [1,2,4,5,8]. In Pass 3, all adjacent comparisons (1-2, 2-4, 4-5) require no swaps, so the algorithm can terminate early with the array fully sorted as [1,2,4,5,8]. Bubble Sort has a worst-case and average-case time complexity of O(n²) since it may need up to n-1 passes with up to n-1 comparisons each, but its best case is O(n) when the array is already sorted and an early-exit flag is used, as shown by Pass 3 requiring no swaps here.",
        years: [],
      },
      {
        id: "mp-b3",
        group: "B",
        marks: 6,
        prompt:
          "What is Recursion? Write a recursive algorithm to compute the factorial of a number and trace it for n = 5.",
        answer:
          "Recursion is a programming technique in which a function calls itself, either directly or indirectly, in order to solve a problem by breaking it down into smaller sub-problems of the same type, continuing until a base case is reached that can be answered directly without any further recursive call. Every correct recursive algorithm needs two essential parts: a base case that stops the recursion, and a recursive case that reduces the problem size and moves it closer to the base case. The recursive algorithm for factorial is: Step 1, define Factorial(n). Step 2, if n equals 0 or n equals 1, return 1 as the base case, since 0! and 1! are both defined as 1. Step 3, otherwise, return n multiplied by the result of the recursive call Factorial(n-1).\n\nTracing this for n=5: Factorial(5) calls Factorial(4) and will multiply its result by 5; Factorial(4) calls Factorial(3) and will multiply its result by 4; Factorial(3) calls Factorial(2) and will multiply its result by 3; Factorial(2) calls Factorial(1) and will multiply its result by 2; Factorial(1) hits the base case and returns 1 directly without any further call. The calls now unwind in reverse: Factorial(2) returns 2*1=2, Factorial(3) returns 3*2=6, Factorial(4) returns 4*6=24, and finally Factorial(5) returns 5*24=120. This trace shows the two-phase nature of recursion clearly: a 'winding' phase where calls stack up waiting on their recursive call to return, and an 'unwinding' phase where each pending multiplication is finally carried out as the base case's result propagates back up the call chain.",
        years: [],
      },
      {
        id: "mp-b4",
        group: "B",
        marks: 6,
        prompt:
          "Write an algorithm to insert a new node at the end of a singly linked list, and explain each step.",
        answer:
          "A singly linked list is made of nodes, each containing a data field and a pointer to the next node, with the list accessed through a HEAD pointer and the last node's next field set to NULL. Inserting a node at the end requires traversing the entire list to find the current last node, since a singly linked list without a maintained tail pointer offers no direct shortcut to it.\n\nThe algorithm is: Step 1, create a new node and set its data field to the value to be inserted, and set its next field to NULL, since it will become the new last node. Step 2, check if the list is empty by testing whether HEAD is NULL; if so, simply set HEAD to point to the new node and stop, since it is now the only node in the list. Step 3, if the list is not empty, create a temporary pointer and set it to HEAD. Step 4, move the temporary pointer forward, node by node, following each node's next field, until it reaches a node whose next field is NULL — this identifies the current last node. Step 5, set that last node's next field to point to the newly created node, linking it into the list. Step 6, the new node's own next field remains NULL, correctly marking it as the new end of the list.\n\nFor example, inserting 25 at the end of the list 5 → 10 → 15 → NULL involves creating a new node containing 25, traversing from HEAD (5) through 10 to reach 15 (whose next is NULL), and then updating 15's next field to point to the new node 25, producing 5 → 10 → 15 → 25 → NULL. This traversal step is the key reason end-insertion into a singly linked list costs O(n) time in the worst case, unlike insertion at the front which is always O(1).",
        years: [],
      },
      {
        id: "mp-b5",
        group: "B",
        marks: 6,
        prompt:
          "Explain Breadth First Search (BFS) traversal of a graph with a suitable example.",
        answer:
          "Breadth First Search (BFS) is a graph traversal technique that explores all the neighbors of the current vertex before moving on to the neighbors of those neighbors, effectively visiting the graph level by level outward from a chosen starting vertex. BFS uses a queue data structure to keep track of which vertex to visit next, along with a visited array or set to ensure that no vertex is processed more than once.\n\nThe algorithm proceeds as: Step 1, choose a starting vertex, mark it as visited, and enqueue it. Step 2, while the queue is not empty, dequeue the front vertex and process it (e.g. print it). Step 3, examine all adjacent vertices of the dequeued vertex; for each neighbor that has not yet been visited, mark it as visited and enqueue it. Step 4, repeat steps 2 and 3 until the queue becomes empty, at which point all vertices reachable from the starting vertex have been visited.\n\nConsider a graph with vertex A connected to B and C, vertex B additionally connected to D, and vertex C additionally connected to D and E. Starting BFS at A: A is visited and enqueued, queue = [A]. Dequeue A, process it, and enqueue its unvisited neighbors B and C, queue = [B, C]. Dequeue B, process it, and enqueue its unvisited neighbor D (C is already queued so it is skipped if encountered again), queue = [C, D]. Dequeue C, process it, and enqueue its unvisited neighbor E (D is already visited/queued), queue = [D, E]. Dequeue D, process it, it has no new unvisited neighbors, queue = [E]. Dequeue E, process it, queue becomes empty and the traversal ends. The resulting BFS visiting order is A, B, C, D, E. Because BFS explores the graph outward in expanding layers, it is the standard technique for finding the shortest path (in terms of number of edges) between two vertices in an unweighted graph, which is precisely why it is preferred over DFS whenever the shortest, rather than just any, path is required.",
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
          "A stack is a linear data structure that stores elements in Last In First Out (LIFO) order, with all insertions (push) and deletions (pop) restricted to a single end called the top. Because an array-based stack implementation has a fixed maximum capacity, two error conditions must always be checked before performing an operation. Stack Overflow occurs when a push operation is attempted on a stack that has already reached its maximum size, meaning the top pointer is already at the last valid index (top == MAX-1); attempting to push further would write outside the allocated array bounds. Stack Underflow occurs when a pop operation is attempted on a stack that is already empty, meaning the top pointer is at its initial empty-state value (top == -1); attempting to pop would try to remove an element that does not exist.\n\nThe Push algorithm with its overflow check is: Step 1, check if top == MAX-1; if true, display 'Stack Overflow' and stop, since there is no room for a new element. Step 2, otherwise, increment top by 1. Step 3, store the new value at stack[top]. The Pop algorithm with its underflow check is: Step 1, check if top == -1; if true, display 'Stack Underflow' and stop, since there is nothing to remove. Step 2, otherwise, retrieve the value at stack[top] to return it. Step 3, decrement top by 1.\n\nFor example, in a stack of size 3, after pushing 10, 20, 30 the top pointer equals 2 (the last valid index), so a fourth push of 40 would trigger the overflow check and be rejected. Conversely, popping three times from that same stack brings top back down to -1, and a fourth pop attempt would trigger the underflow check and be rejected. These checks are essential parts of any correctly written stack algorithm and are routinely required in exam answers, not merely optional error handling.",
        years: [],
      },
    ],
  },

  pastPapers: {
    years: ["2017", "2018", "2019", "2022", "2023", "2024", "2025"],
    questions: [
      // ===== 2025 =====
      {
        id: "pp-2025-a1",
        group: "A",
        marks: 12,
        topic: "Stack",
        prompt: "What is stack? Discuss about the various operations of stack. Explain the algorithm for evaluating a postfix expression with example.",
        years: ["2025"],
        answer:
          "A stack is a linear data structure in which insertion and deletion of elements take place at only one end, called the TOP of the stack. It follows the LIFO (Last In, First Out) principle, which means the element inserted last is the first one to be removed. A common real-world example is a pile of plates in a canteen, where a plate is always placed on top and also taken from the top. In computing, stacks are used for function calls, undo operations in text editors, browser back-button history, and expression evaluation. A stack can be implemented using an array (with a fixed maximum size) or a linked list (which grows dynamically). The various operations of a stack are as follows. First, PUSH inserts a new element at the top of the stack; before pushing, we must check whether the stack is full, because pushing into a full array-based stack causes a condition called stack overflow.\n\nFor example, pushing 10, 20 and 30 into an empty stack leaves 30 at the top. Second, POP removes and returns the top element; before popping, we must check whether the stack is empty, because popping from an empty stack causes stack underflow. Popping the above stack returns 30 and leaves 20 at the top. Third, PEEK (or TOP) returns the top element without removing it, so after the pop above, peek returns 20. Fourth, isEmpty checks whether TOP = -1, and fifth, isFull checks whether TOP = MAX - 1. A postfix expression is one in which the operator is written after its operands, for example 'A B +' instead of 'A + B'; it needs no parentheses and can be evaluated in a single left-to-right scan using a stack.\n\nThe algorithm is: Step 1, create an empty stack. Step 2, scan the postfix expression from left to right, one symbol at a time. Step 3, if the symbol is an operand, push it onto the stack. Step 4, if the symbol is an operator, pop the top element as operand B and the next element as operand A, compute A operator B, and push the result back onto the stack. Step 5, repeat until the expression ends. Step 6, the single value left on the stack is the final result.\n\nConsider the postfix expression 6 2 3 + - 3 8 2 / + *. We push 6, then 2, then 3, so the stack is [6, 2, 3]. On reading +, we pop 3 and 2 and push 2+3=5, giving [6, 5]. On reading -, we pop 5 and 6 and push 6-5=1, giving [1]. Next we push 3, 8 and 2, giving [1, 3, 8, 2]. On reading /, we pop 2 and 8 and push 8/2=4, giving [1, 3, 4]. On reading +, we pop 4 and 3 and push 3+4=7, giving [1, 7]. Finally, on reading *, we pop 7 and 1 and push 1*7=7, giving [7]. The expression has now ended and exactly one value remains, so the result of the postfix expression is 7.\n\nIn conclusion, the stack is a simple but powerful LIFO structure whose push, pop and peek operations make it the natural tool for evaluating postfix expressions efficiently in a single scan without any need for parentheses or operator precedence rules.",
      },
      {
        id: "pp-2025-a2",
        group: "A",
        marks: 12,
        topic: "Linked List",
        prompt: "What is doubly linked list (DLL)? Discuss advantages of Doubly Linked List over Singly Linked List. Write an algorithm to insert a node in the beginning of Singly Linked List.",
        years: ["2025"],
        answer:
          "A doubly linked list (DLL) is a linear data structure consisting of a sequence of nodes in which every node contains three fields: a PREV pointer that stores the address of the previous node, an INFO (data) field that stores the actual value, and a NEXT pointer that stores the address of the next node. The PREV pointer of the first node and the NEXT pointer of the last node are set to NULL. Because each node is linked in both directions, the list can be traversed forward from the head as well as backward from the tail.\n\nFor example, a DLL holding 10, 20 and 30 would have the node 20 pointing back to 10 through PREV and forward to 30 through NEXT. A practical example is the forward and back navigation of a music playlist or web browser history. The doubly linked list has several advantages over a singly linked list. First, it supports bidirectional traversal, so we can move from any node to both its successor and its predecessor, whereas in a singly linked list we can only move forward and must restart from the head to go back. Second, deletion of a given node is more efficient, because the node already knows its previous node through PREV, so we do not have to traverse the list from the beginning to find the predecessor as we must in a singly linked list. Third, insertion before a given node is easy, since the previous node is directly reachable, making operations like inserting before 20 a constant-time task. Fourth, reverse traversal and reverse printing become simple, which is useful in applications like undo and redo systems. Fifth, a DLL is a natural basis for more advanced structures such as deques and LRU caches. The only trade-off is that each node needs extra memory for the PREV pointer and every insertion or deletion must update two links instead of one. The algorithm to insert a node at the beginning of a singly linked list, where START points to the first node, is as follows.\n\nStep 1, create a new node NEWNODE using dynamic memory allocation; if memory is not available, print 'Overflow' and exit. Step 2, set NEWNODE->INFO = ITEM, storing the value to be inserted. Step 3, set NEWNODE->NEXT = START, so the new node points to the current first node (or to NULL if the list is empty). Step 4, set START = NEWNODE, making the new node the first node of the list. Step 5, exit.\n\nFor example, suppose the list is START → 20 → 30 → NULL and we want to insert 10. We create a new node holding 10, set its NEXT to the node holding 20, and then move START to the new node, giving START → 10 → 20 → 30 → NULL. Since no traversal is required, this insertion takes constant O(1) time regardless of the length of the list.\n\nIn conclusion, the doubly linked list trades a little extra memory for two-way navigation and faster deletion, while insertion at the beginning of a singly linked list remains one of the simplest and fastest linked list operations.",
      },
      {
        id: "pp-2025-a3",
        group: "A",
        marks: 12,
        topic: "Graph",
        prompt: "Define graph along with different types of graphs and its application. Discuss Dijkastra [Dijkstra's] algorithm with illustration.",
        years: ["2025"],
        answer:
          "A graph is a non-linear data structure G = (V, E) consisting of a finite set of vertices (or nodes) V and a set of edges E, where each edge connects a pair of vertices. Unlike a tree, a graph has no root and may contain cycles, so it can model any kind of network relationship.\n\nFor example, cities can be represented as vertices and the roads between them as edges. There are several types of graphs. A directed graph (digraph) has edges with a direction, such as A → B, as in one-way streets or web page links. An undirected graph has edges without direction, such as friendships on a social network. A weighted graph assigns a cost or weight to each edge, such as the distance in kilometres between two cities, while an unweighted graph has no such values. A complete graph has an edge between every pair of vertices, so a complete graph with n vertices has n(n-1)/2 edges. A connected graph has a path between every pair of vertices, while a disconnected graph does not. A cyclic graph contains at least one cycle, whereas an acyclic graph contains none, and a directed acyclic graph (DAG) is used for task scheduling. Graphs have many applications: GPS and Google Maps use them for route finding, computer networks use them for packet routing, social networks use them to suggest friends, and compilers use them for dependency analysis. Dijkstra's algorithm finds the shortest path from a single source vertex to all other vertices in a weighted graph with non-negative edge weights using a greedy strategy.\n\nStep 1, set the distance of the source to 0 and all other vertices to infinity, and mark all as unvisited. Step 2, select the unvisited vertex with the smallest distance. Step 3, for each neighbour, if the distance through the current vertex is smaller than its recorded distance, update it (relaxation). Step 4, mark the current vertex as visited. Step 5, repeat until all vertices are visited.\n\nConsider vertices A, B, C, D, E with edges A-B (4), A-C (2), C-B (1), B-D (5), C-D (8), C-E (10) and D-E (2), with source A. Initially A=0 and all others are infinity. Processing A gives B=4 and C=2. The nearest unvisited vertex is C (2); relaxing its edges gives B=min(4, 2+1)=3, D=2+8=10 and E=2+10=12. Next, B (3) is processed and D is updated to min(10, 3+5)=8. Next, D (8) is processed and E is updated to min(12, 8+2)=10. Finally, E (10) is processed with no further improvements, and the algorithm terminates. The final shortest distances are A=0, C=2, B=3, D=8 and E=10, and the shortest path to E is A→C→B→D→E with cost 10, which is cheaper than the direct-looking A→C→E with cost 12.\n\nIn conclusion, graphs are the most general structure for modelling networks, and Dijkstra's algorithm efficiently computes shortest routes on them by greedily finalizing the nearest vertex and relaxing its neighbours step by step.",
      },
      {
        id: "pp-2025-b1",
        group: "B",
        marks: 6,
        topic: "Introduction",
        prompt: "Explain data structure with its type and importance.",
        years: ["2025"],
        answer:
          "A data structure is a particular way of organizing, storing and managing data in a computer's memory so that it can be accessed and modified efficiently. It defines not only how data is arranged but also the operations that can be performed on it, such as insertion, deletion, searching, sorting and traversal.\n\nFor example, a list of student roll numbers can be stored in an array for fast index-based access or in a linked list for easy insertion. Data structures are mainly classified into two types. Primitive data structures are the basic built-in types directly operated on by machine instructions, such as int, float, char and pointer. Non-primitive data structures are derived from primitive types and are further divided into linear and non-linear structures. In linear data structures, elements are arranged sequentially, and examples include arrays, stacks, queues and linked lists; a queue at a bank counter is a real example of linear order. In non-linear data structures, elements are arranged hierarchically or in a network, and examples include trees and graphs; a family tree or a road map illustrates this. Data structures can also be classified as static, whose size is fixed at compile time like arrays, or dynamic, whose size can grow and shrink at runtime like linked lists. Data structures are important because they improve efficiency, since choosing the right structure can reduce searching time from O(n) to O(log n); they allow efficient memory use; they support reusability through abstract data types; and they form the foundation of databases, operating systems and compilers.\n\nIn conclusion, a good choice of data structure is the key to writing fast, memory-efficient and well-organized programs.",
      },
      {
        id: "pp-2025-b2",
        group: "B",
        marks: 6,
        topic: "Queue",
        prompt: "Differentiate between linear queue and circular queue. Explain the advantages of circular queue with examples.",
        years: ["2025"],
        answer:
          "A queue is a linear data structure that follows the FIFO (First In, First Out) principle, where insertion happens at the REAR and deletion happens at the FRONT. It can be implemented as a linear queue or a circular queue. In a linear queue, the elements are arranged in a straight line, and once REAR reaches the last position (MAX - 1), no more insertion is possible even if positions at the front have been freed by deletions. In a circular queue, the last position is logically connected back to the first position, so REAR and FRONT wrap around using the formula REAR = (REAR + 1) % MAX. A linear queue is full when REAR = MAX - 1, whereas a circular queue is full when (REAR + 1) % MAX = FRONT. A linear queue therefore wastes memory, while a circular queue reuses it completely.\n\nFor example, consider a queue of size 5 holding 10, 20, 30, 40, 50. If we delete 10 and 20, positions 0 and 1 become empty. In a linear queue, inserting 60 fails with an overflow message because REAR is already at 4. In a circular queue, REAR becomes (4 + 1) % 5 = 0, so 60 is stored at position 0 and the free space is reused. The advantages of a circular queue are as follows. First, it makes efficient use of memory because vacant spaces at the front are reused. Second, it avoids false overflow conditions seen in linear queues. Third, it does not require shifting elements after deletion, so each operation takes O(1) time. Fourth, it is ideal for real applications such as CPU round-robin scheduling, keyboard buffers and traffic light systems.\n\nIn conclusion, a circular queue is a more memory-efficient and practical form of the linear queue for continuous data flow.",
      },
      {
        id: "pp-2025-b3",
        group: "B",
        marks: 6,
        topic: "Introduction",
        prompt: "Discuss the advantages of recursion. Write an algorithm to calculate factorial of given number using recursion.",
        years: ["2025"],
        answer:
          "Recursion is a programming technique in which a function calls itself, directly or indirectly, to solve a problem by breaking it into smaller sub-problems of the same type. Every recursive function must have a base case, which stops the recursion, and a recursive case, which moves the problem closer to the base case. Recursion has several advantages. First, it makes the code short, clean and easy to read, because complex problems can be expressed in a few lines. Second, it naturally fits problems that are recursive by definition, such as factorial, Fibonacci series and the Tower of Hanoi. Third, it simplifies the processing of recursive data structures such as trees, where inorder, preorder and postorder traversals are written easily using recursion. Fourth, it is the basis of divide-and-conquer algorithms like quick sort, merge sort and binary search. Fifth, it reduces the need for complex loops and extra variables, since the system stack automatically stores intermediate states. The recursive algorithm for factorial is: Step 1, start with function FACT(N). Step 2, if N = 0 or N = 1, return 1 (base case). Step 3, otherwise, return N × FACT(N - 1) (recursive case). Step 4, stop.\n\nFor example, to calculate FACT(4), the function calls FACT(3), which calls FACT(2), which calls FACT(1). FACT(1) reaches the base case and returns 1. Then FACT(2) returns 2 × 1 = 2, FACT(3) returns 3 × 2 = 6, and FACT(4) returns 4 × 6 = 24. These pending calls are stored on the system stack and resolved in reverse order.\n\nTherefore, the factorial of 4 is 24, showing how recursion solves a problem elegantly by repeatedly reducing it until the base case is reached.",
      },
      {
        id: "pp-2025-b4",
        group: "B",
        marks: 6,
        topic: "Queue",
        prompt: "Explain the concept of priority queue. How is it different from normal queue? Illustrate with example.",
        years: ["2025"],
        answer:
          "A priority queue is a special type of queue in which every element is associated with a priority, and elements are removed according to their priority rather than their order of arrival. The element with the highest priority is deleted first, and if two elements have the same priority, they are served in FIFO order. Priority queues can be of two types: an ascending priority queue, where the smallest value is removed first, and a descending priority queue, where the largest value is removed first. They can be implemented using arrays, linked lists or, most efficiently, a binary heap, which gives O(log n) insertion and deletion. A priority queue differs from a normal queue in several ways. In a normal queue, deletion always happens strictly in FIFO order, so the element that arrived first leaves first, whereas in a priority queue, the element with the highest priority leaves first regardless of arrival time. A normal queue stores only data, whereas a priority queue stores data along with its priority value. In a normal queue, insertion and deletion are simple O(1) operations, whereas a priority queue needs extra work to maintain priority order.\n\nFor example, consider patients arriving at a hospital emergency ward: P1 with a minor cut (priority 3), P2 with a fracture (priority 2), and P3 with a heart attack (priority 1, most urgent). In a normal queue, the doctor would treat them in the order P1, P2, P3. In a priority queue, the doctor treats P3 first, then P2, and finally P1, because the most critical case is served first. Priority queues are also used in CPU scheduling, Dijkstra's algorithm and Huffman coding.\n\nIn conclusion, a priority queue extends the normal queue by serving elements based on importance instead of arrival order.",
      },
      {
        id: "pp-2025-b5",
        group: "B",
        marks: 6,
        topic: "Algorithm Efficiency",
        prompt: "Use Huffman Algorithm to find the code-words for the given character sequence: AADECAAADCACDECBAECACDCEDEABACABEBDADAAEBCACDDBABE",
        years: ["2025"],
        answer:
          "Huffman coding is a greedy, lossless data compression algorithm that assigns variable-length binary codes to characters, giving shorter codes to more frequent characters and longer codes to less frequent ones. No codeword is a prefix of another, so the encoded message can be decoded without ambiguity.\n\nThe algorithm is: Step 1, count the frequency of each character. Step 2, create a leaf node for each character and place them in a priority queue ordered by frequency. Step 3, repeatedly remove the two nodes with the lowest frequencies and merge them into a new node whose frequency is their sum, making the smaller one the left child (0) and the larger one the right child (1). Step 4, repeat until one node, the root, remains. Step 5, read each codeword from the root to the leaf.\n\nThe given sequence has 50 characters, and counting them gives A = 16, B = 7, C = 10, D = 9 and E = 8 (16 + 7 + 10 + 9 + 8 = 50). Arranged in ascending order, the nodes are B(7), E(8), D(9), C(10), A(16). In the first merge, the two smallest nodes B(7) and E(8) are combined into a node of frequency 15, with B on the left and E on the right, leaving D(9), C(10), BE(15), A(16). In the second merge, D(9) and C(10) are combined into a node of 19, with D on the left and C on the right, leaving BE(15), A(16), DC(19). In the third merge, BE(15) and A(16) are combined into a node of 31, with BE on the left and A on the right, leaving DC(19) and 31. In the final merge, DC(19) and 31 are combined into the root of 50, with DC on the left and the 31 node on the right. Reading the paths from the root, the codewords are: A = 11, C = 01, D = 00, B = 100 and E = 101. The most frequent characters A, C and D get 2-bit codes, while the less frequent B and E get 3-bit codes. The total encoded length is 16×2 + 10×2 + 9×2 + 7×3 + 8×3 = 32 + 20 + 18 + 21 + 24 = 115 bits, giving an average of 2.3 bits per character. A fixed-length code for five characters would need 3 bits each, that is 50 × 3 = 150 bits.\n\nTherefore, Huffman coding saves 35 bits (about 23%), proving that it produces an efficient, prefix-free code for the given sequence.",
      },
      {
        id: "pp-2025-b6",
        group: "B",
        marks: 6,
        topic: "Algorithm Efficiency",
        prompt: "Explain different hash collision resolution technique in brief.",
        years: ["2025"],
        answer:
          "Hashing is a technique in which a hash function converts a key into an index of a hash table so that data can be stored and searched in nearly O(1) time. A collision occurs when two different keys produce the same index.\n\nFor example, with table size 10 and hash function h(k) = k mod 10, the keys 23, 43 and 13 all map to index 3. Since collisions cannot be completely avoided, collision resolution techniques are needed, and they fall into two groups: open addressing and separate chaining. In linear probing, which is an open addressing method, if the computed slot is occupied we check the next slots one by one using (h(k) + i) mod size. In our example, 23 is stored at index 3, 43 is stored at index 4 and 13 is stored at index 5. Linear probing is simple but suffers from primary clustering, where long runs of filled slots form. In quadratic probing, the next slot is found using (h(k) + i²) mod size, so the probes are at distances 1, 4, 9 and so on. Here, 43 goes to index 3 + 1 = 4, while 13 finds index 4 occupied and moves to 3 + 4 = 7, which reduces primary clustering. In double hashing, a second hash function decides the step size using (h1(k) + i × h2(k)) mod size, for example h2(k) = 7 - (k mod 7), so different keys follow different probe sequences and clustering is minimized. In separate chaining, each table slot holds a linked list, and all colliding keys are stored in the list at that index, so index 3 would hold the chain 23 → 43 → 13. Chaining never overflows, but it needs extra memory for pointers.\n\nIn conclusion, the choice of collision resolution technique directly affects the speed and memory efficiency of a hash table.",
      },
      {
        id: "pp-2025-b7",
        group: "B",
        marks: 6,
        topic: "Searching and Sorting",
        prompt: "Define concepts of internal sorting and external sorting. Explain bubble sort with example.",
        years: ["2025"],
        answer:
          "Sorting is the process of arranging data in a particular order, either ascending or descending. Internal sorting is the type of sorting in which all the data to be sorted fits into the main memory (RAM) at once, so the entire sorting process takes place in memory. Examples of internal sorting are bubble sort, insertion sort, selection sort, quick sort and heap sort, and a typical use is sorting the marks of 60 students in a class. External sorting is used when the data is too large to fit in main memory, so it is kept in secondary storage such as a hard disk and sorted in parts. The data is divided into smaller chunks, each chunk is sorted in memory, and the sorted chunks are then merged, as in external merge sort, which is used for sorting huge database files or logs. Bubble sort is a simple internal sorting algorithm that repeatedly compares adjacent elements and swaps them if they are in the wrong order, so that the largest element bubbles up to the end after each pass.\n\nConsider the list 5, 1, 4, 2, 8. In Pass 1, we compare 5 and 1 and swap to get 1, 5, 4, 2, 8; compare 5 and 4 and swap to get 1, 4, 5, 2, 8; compare 5 and 2 and swap to get 1, 4, 2, 5, 8; compare 5 and 8 with no swap. The largest element 8 is now in its final place. In Pass 2, we compare 1 and 4 with no swap, then 4 and 2 and swap to get 1, 2, 4, 5, 8, then 4 and 5 with no swap. In Pass 3, no swaps occur, so the algorithm stops early. The final sorted list is 1, 2, 4, 5, 8. Bubble sort has a worst-case time complexity of O(n²) and a best case of O(n) with the swap flag.\n\nIn conclusion, bubble sort is easy to understand and suitable for small data sets, but it is inefficient for large ones.",
      },
      {
        id: "pp-2025-b8",
        group: "B",
        marks: 6,
        topic: "Mixed/Short Notes",
        prompt: "Write short notes on Any TWO: (a) Abstract Data Type (ADT) (b) Binary Search (c) Adjacency Matrix Implementation",
        years: ["2025"],
        answer:
          "(a) Abstract Data Type (ADT): An Abstract Data Type is a logical model of a data type that defines a set of values and the operations that can be performed on them, without specifying how these operations are implemented. It separates the 'what' from the 'how', which is known as data abstraction and encapsulation. For example, a Stack ADT defines operations such as push, pop, peek and isEmpty, but it does not say whether the stack is built with an array or a linked list. Similarly, a Queue ADT defines enqueue and dequeue. Because the user only depends on the interface, the internal implementation can be changed without affecting the programs that use it, which improves modularity, reusability and ease of maintenance.\n\n(b) Binary Search: Binary search is an efficient searching technique that works only on a sorted list by repeatedly dividing the search range in half. It compares the key with the middle element; if they are equal the search succeeds, if the key is smaller it searches the left half, and if the key is larger it searches the right half. For example, to search 42 in the sorted list 3, 8, 15, 21, 34, 42, 56, we set low = 0 and high = 6, so mid = 3 and the element is 21. Since 42 is greater than 21, low becomes 4, and mid = (4 + 6) / 2 = 5, where the element is 42, so the key is found at index 5 in just two comparisons. Its time complexity is O(log n), which is much faster than linear search's O(n).\n\n(c) Adjacency Matrix Implementation: An adjacency matrix is a way of representing a graph with n vertices using an n × n two-dimensional array, where the entry A[i][j] = 1 if there is an edge from vertex i to vertex j, and 0 otherwise. For a weighted graph, the weight is stored instead of 1. For example, for an undirected graph with vertices 1, 2, 3, 4 and edges 1-2, 1-3, 2-4 and 3-4, the entries A[1][2], A[2][1], A[1][3], A[3][1], A[2][4], A[4][2], A[3][4] and A[4][3] are 1 and the rest are 0, making the matrix symmetric. Checking whether an edge exists takes O(1) time, but the matrix always needs O(n²) memory, so it is best suited for dense graphs.",
      },
      // ===== 2024 =====
      {
        id: "pp-2024-a1",
        group: "A",
        marks: 12,
        topic: "Graph",
        prompt: "What is graph traversal algorithm? Differentiate BFS and DFS with algorithm and example.",
        years: ["2024"],
        answer:
          "A graph traversal algorithm is a systematic procedure for visiting every vertex of a graph exactly once, starting from a chosen source vertex and following the edges. Traversal matters because a graph, unlike an array, has no natural first-to-last order, and it can contain cycles that would make a careless search loop forever. For this reason, every traversal algorithm keeps a visited marker for each vertex. Traversal is the foundation of many practical tasks, such as finding friends-of-friends in a social network, crawling web pages, checking whether a network is connected, and detecting cycles. The two standard traversal algorithms are Breadth First Search (BFS) and Depth First Search (DFS). The BFS algorithm works as follows: Step 1, mark the source vertex as visited and insert it into a queue. Step 2, while the queue is not empty, remove the front vertex and process it. Step 3, for each unvisited neighbor of that vertex, mark it visited and insert it at the rear of the queue. Step 4, repeat until the queue becomes empty. The DFS algorithm works as follows: Step 1, mark the source vertex as visited and push it onto a stack (or call DFS on it recursively). Step 2, take the vertex on top of the stack and move to any one of its unvisited neighbors, marking it visited and pushing it. Step 3, if the top vertex has no unvisited neighbor left, pop it and backtrack to the previous vertex. Step 4, repeat until the stack becomes empty.\n\nConsider a graph with vertices A, B, C, D, E, F and edges A-B, A-C, B-D, B-E and C-F, starting from A. In BFS, A is visited first and its neighbors B and C are queued. B is then removed and its neighbors D and E are queued. C is removed and F is queued. Finally D, E and F are removed, which gives the BFS order A, B, C, D, E, F, visited level by level. In DFS, A is visited, then the algorithm goes deep to B, then deeper to D. D has no unvisited neighbor, so it backtracks to B and visits E. It then backtracks to A and visits C and finally F, which gives the DFS order A, B, D, E, C, F. The main differences are as follows. First, BFS uses a queue (FIFO) while DFS uses a stack (LIFO) or recursion. Second, BFS explores the graph level by level, while DFS goes as deep as possible along one branch before backtracking. Third, in an unweighted graph BFS finds the shortest path in terms of number of edges, while DFS does not guarantee shortest paths. Fourth, BFS usually needs more memory on wide graphs because a whole level sits in the queue at once, while DFS needs memory only in proportion to the depth of the current path. Fifth, BFS is used for shortest-path and nearest-neighbor problems, while DFS is used for cycle detection, topological sorting and maze solving. Both algorithms run in O(V + E) time with an adjacency list.\n\nIn conclusion, BFS and DFS both visit every reachable vertex exactly once, but they differ in the data structure they use and the order in which they explore, so the right choice depends on whether the problem needs breadth (shortest paths) or depth (backtracking-style exploration).",
      },
      {
        id: "pp-2024-a2",
        group: "A",
        marks: 12,
        topic: "Linked List",
        prompt: "Discuss different operations of linked list. Write an algorithm to add new node as first node.",
        years: ["2024"],
        answer:
          "A linked list is a linear data structure in which elements, called nodes, are not stored in contiguous memory locations. Instead, each node holds two parts: a data field that stores the actual value, and a link (next pointer) field that stores the address of the next node. A special pointer called HEAD (or START) points to the first node, and the last node's next field holds NULL to mark the end of the list. Because the nodes are connected through pointers, the list can grow and shrink at runtime without the fixed-size limit of an array. The main operations performed on a linked list are as follows. Traversal means visiting every node from HEAD to NULL by repeatedly following the next pointers, for example to print all the student roll numbers stored in a list. Insertion means adding a new node, which can be done at the beginning, at the end, or after a given node; for example, adding a new patient at the front of a waiting list. Deletion means removing a node from the beginning, the end, or a given position by adjusting the pointer of the previous node so that it skips the removed node, and then freeing that node's memory. Searching means traversing the list and comparing each node's data with a key until a match is found or NULL is reached, for example finding whether book ID 105 exists in a library list. Counting means traversing the list while incrementing a counter to find the number of nodes. Concatenation means joining two lists by making the last node of the first list point to the HEAD of the second list. Reversal means reversing the direction of all the links so that the last node becomes the first. The algorithm to insert a new node as the first node is as follows.\n\nStep 1, START. Step 2, allocate memory for a new node, NEWNODE; if memory is not available, print Overflow and exit. Step 3, set NEWNODE->data = ITEM. Step 4, set NEWNODE->next = HEAD, so that the new node points to the current first node (if the list is empty, HEAD is NULL and the new node's next simply becomes NULL). Step 5, set HEAD = NEWNODE, so that the new node becomes the first node of the list. Step 6, STOP.\n\nConsider an existing list HEAD -> 20 -> 30 -> 40 -> NULL, and suppose we want to insert 10 at the beginning. A new node is created with data 10. Its next field is set to HEAD, which currently points to the node containing 20, giving 10 -> 20. HEAD is then updated to point to the new node, so the list becomes HEAD -> 10 -> 20 -> 30 -> 40 -> NULL. The order of steps 4 and 5 matters: if HEAD were changed first, the address of node 20 would be lost and the rest of the list would become unreachable. This insertion takes constant time, O(1), because no traversal is needed.\n\nIn conclusion, the linked list supports flexible operations such as traversal, insertion, deletion, searching and reversal through simple pointer manipulation, and inserting at the beginning is the fastest insertion of all, since it only requires linking the new node to the old head and moving HEAD to the new node.",
      },
      {
        id: "pp-2024-a3",
        group: "A",
        marks: 12,
        topic: "Stack",
        prompt: "What is stack? Explain push() and pop() operation with complete pseudo code.",
        years: ["2024"],
        answer:
          "A stack is a linear data structure in which insertion and deletion of elements take place at only one end, called the TOP of the stack. It follows the LIFO (Last In, First Out) principle, which means the element inserted last is the first one to be removed. A common real-world example is a pile of plates in a canteen: a new plate is always placed on top, and the plate taken is always the top one. In computing, stacks are used for function calls and recursion, undo operations in text editors, browser back buttons, and the conversion and evaluation of arithmetic expressions. A stack can be implemented using an array of fixed size MAX together with an integer variable TOP, which holds the index of the topmost element. TOP is initialized to -1 to show that the stack is empty. The two primary operations on a stack are push() and pop().\n\nThe push() operation inserts a new element on top of the stack. Before inserting, it must check whether the stack is already full, a condition called overflow, which happens when TOP equals MAX - 1. The complete pseudocode is: PUSH(STACK, TOP, MAX, ITEM): Step 1, IF TOP = MAX - 1 THEN print Stack Overflow and RETURN. Step 2, SET TOP = TOP + 1. Step 3, SET STACK[TOP] = ITEM. Step 4, END. Here TOP is incremented first so that it moves to the next free position, and only then is the item stored at that position. The pop() operation removes and returns the topmost element of the stack. Before removing, it must check whether the stack is empty, a condition called underflow, which happens when TOP equals -1. The complete pseudocode is: POP(STACK, TOP): Step 1, IF TOP = -1 THEN print Stack Underflow and RETURN. Step 2, SET ITEM = STACK[TOP]. Step 3, SET TOP = TOP - 1. Step 4, RETURN ITEM. Step 5, END. Here the element is copied out first, and then TOP is decremented, so the next element below becomes the new top.\n\nConsider a stack with MAX = 3 that is initially empty (TOP = -1). Calling push(10) sets TOP = 0 and STACK[0] = 10. Calling push(20) sets TOP = 1 and STACK[1] = 20. Calling push(30) sets TOP = 2 and STACK[2] = 30, and the stack is now full. A further push(40) finds TOP = MAX - 1 = 2 and reports Stack Overflow. Calling pop() now returns 30 and TOP becomes 1, and a second pop() returns 20 with TOP becoming 0.\n\nThis shows that the elements come out in the reverse order of insertion. Both push() and pop() run in constant time, O(1), because they only touch the top position. In conclusion, the stack is a simple but powerful LIFO structure whose push() and pop() operations, when written with proper overflow and underflow checks and correct updating of TOP, give safe and efficient insertion and deletion at one end.",
      },
      {
        id: "pp-2024-b1",
        group: "B",
        marks: 6,
        topic: "Introduction",
        prompt: "What is data structure? Explain the importance of this subject in your syllabus.",
        years: ["2024"],
        answer:
          "A data structure is a particular way of organizing, storing and managing data in a computer's memory so that it can be accessed and modified efficiently. Examples include arrays, linked lists, stacks, queues, trees and graphs, and each one suits a different kind of problem. Data structures are commonly classified as primitive (int, float, char) and non-primitive, and non-primitive structures are further divided into linear (array, stack, queue, linked list) and non-linear (tree, graph). This subject holds an important place in the PGDCA syllabus for several reasons. First, it improves program efficiency, because choosing the right structure can reduce the running time of a program greatly; for example, searching a sorted array with binary search takes O(log n) time instead of the O(n) of linear search. Second, it is the foundation of other subjects such as database management systems, which use B-trees for indexing, operating systems, which use queues for CPU scheduling, and computer networks, which use graphs for routing. Third, it develops logical and problem-solving skills, since the student learns to break a problem down and design a step-by-step algorithm for it. Fourth, it helps with memory management, because structures such as linked lists allocate memory dynamically and avoid waste. Fifth, it is essential for jobs and software development, since technical interviews and real applications such as social networks, maps and search engines depend on these concepts.\n\nIn conclusion, data structure is a core subject of the syllabus because it teaches how to store and process data efficiently, which is the basis of writing good software in every other area of computing.",
      },
      {
        id: "pp-2024-b2",
        group: "B",
        marks: 6,
        topic: "Stack",
        prompt: "Evaluate the following expression using stack: Expression: 2 3 × 6 4 - /",
        years: ["2024"],
        answer:
          "The given expression 2 3 × 6 4 - / is a postfix expression, in which each operator comes after its operands. A postfix expression can be evaluated with a stack, without brackets or precedence rules, using this algorithm: scan the expression from left to right; if the symbol is an operand, push it onto the stack; if the symbol is an operator, pop the top element as the second operand (B) and the next element as the first operand (A), compute A operator B, and push the result back; when the expression ends, the single value left on the stack is the answer.\n\nNow the expression is evaluated step by step.\n\nStep 1, the symbol is 2, an operand, so it is pushed and the stack is [2]. Step 2, the symbol is 3, an operand, so it is pushed and the stack is [2, 3]. Step 3, the symbol is ×, an operator, so B = 3 and A = 2 are popped, 2 × 3 = 6 is computed, and 6 is pushed, leaving the stack as [6]. Step 4, the symbol is 6, an operand, so it is pushed and the stack is [6, 6]. Step 5, the symbol is 4, an operand, so it is pushed and the stack is [6, 6, 4]. Step 6, the symbol is -, an operator, so B = 4 and A = 6 are popped, 6 - 4 = 2 is computed, and 2 is pushed, leaving the stack as [6, 2]. Step 7, the symbol is /, an operator, so B = 2 and A = 6 are popped, 6 / 2 = 3 is computed, and 3 is pushed, leaving the stack as [3]. The expression has now been fully scanned and only one value remains on the stack.\n\nAs a check, the equivalent infix expression is (2 × 3) / (6 - 4) = 6 / 2 = 3, which agrees.\n\nTherefore, the final value of the postfix expression 2 3 × 6 4 - / is 3. This shows that the stack evaluates it correctly in one left-to-right pass, as long as the operand order (A first, then B) is respected for non-commutative operators like - and /.",
      },
      {
        id: "pp-2024-b3",
        group: "B",
        marks: 6,
        topic: "Queue",
        prompt: "What is circular queue? With example write advantages of circular queue over linear queue.",
        years: ["2024"],
        answer:
          "A circular queue is a linear data structure that follows the FIFO (First In, First Out) principle, but in which the last position of the array is connected back to the first position, forming a circle. Instead of simply incrementing, the FRONT and REAR pointers wrap around using the modulo operation: REAR = (REAR + 1) % MAX when inserting, and FRONT = (FRONT + 1) % MAX when deleting. The queue is full when (REAR + 1) % MAX = FRONT, and it is empty when FRONT = -1.\n\nConsider a queue of size MAX = 5. In a linear queue, we enqueue 10, 20, 30, 40 and 50, so REAR = 4. We then dequeue twice, removing 10 and 20, so FRONT = 2 and indices 0 and 1 are now free. If we try to enqueue 60, the linear queue reports overflow because REAR = MAX - 1, even though two slots are empty. In a circular queue, the same enqueue computes REAR = (4 + 1) % 5 = 0, so 60 is stored at index 0 and the free space is reused. The advantages of a circular queue over a linear queue are as follows. First, it uses memory efficiently, because positions freed by deletion are reused, as index 0 was in the example above. Second, it removes false overflow, where a linear queue appears full even though empty slots exist at the front. Third, it avoids shifting elements, since a linear queue would have to move every element forward to reuse space, which costs O(n) time, while the circular queue keeps insertion and deletion at O(1). Fourth, it suits cyclic real-world tasks such as CPU round-robin scheduling, traffic signal systems and keyboard or streaming buffers, where the data naturally cycles.\n\nIn conclusion, the circular queue keeps the FIFO behavior of a linear queue while fixing its wasted-space problem, which makes it the preferred array-based queue in practice.",
      },
      {
        id: "pp-2024-b4",
        group: "B",
        marks: 6,
        topic: "Queue",
        prompt: "Differentiate stack and queue with examples.",
        years: ["2024"],
        answer:
          "A stack and a queue are both linear data structures used to store a collection of elements, but they differ in the order in which elements are inserted and removed. A stack is a structure in which insertion and deletion happen at only one end, called TOP, following the LIFO (Last In, First Out) principle. A queue is a structure in which insertion happens at one end, called REAR, and deletion happens at the other end, called FRONT, following the FIFO (First In, First Out) principle. The main differences are as follows. First, in working principle, a stack removes the most recently added element first, like a pile of books where the top book is taken first, while a queue removes the oldest element first, like people standing in line at a bank counter. Second, in number of pointers, a stack uses only one pointer, TOP, while a queue uses two pointers, FRONT and REAR. Third, in operation names, stack insertion and deletion are called push and pop, while queue insertion and deletion are called enqueue and dequeue. Fourth, in overflow and underflow conditions, a stack is full when TOP = MAX - 1 and empty when TOP = -1, while a linear queue is full when REAR = MAX - 1 and empty when FRONT = -1 or FRONT > REAR. Fifth, in variants, the stack has no common variants, while the queue has circular queue, priority queue and double-ended queue (deque). Sixth, in applications, a stack is used for function calls, recursion, undo in editors and expression evaluation, while a queue is used for CPU scheduling, printer spooling and BFS traversal.\n\nFor example, if 10, 20 and 30 are inserted in that order, a stack removes them as 30, 20, 10, while a queue removes them as 10, 20, 30.\n\nIn conclusion, stack and queue look similar as linear structures, but their opposite removal orders (LIFO versus FIFO) make each one suitable for completely different kinds of problems.",
      },
      {
        id: "pp-2024-b5",
        group: "B",
        marks: 6,
        topic: "Graph",
        prompt: "With suitable example, explain Prim's algorithm.",
        years: ["2024"],
        answer:
          "Prim's algorithm is a greedy algorithm that finds a Minimum Spanning Tree (MST) of a connected, weighted, undirected graph. A spanning tree connects all V vertices using exactly V - 1 edges without forming a cycle, and the MST is the spanning tree with the smallest total edge weight. It is used in designing low-cost networks such as cable, water pipeline and road layouts.\n\nThe algorithm works as follows: Step 1, start from any vertex and include it in the tree. Step 2, from all edges that connect a vertex inside the tree to a vertex outside it, select the edge with the minimum weight. Step 3, add that edge and its outside vertex to the tree. Step 4, repeat steps 2 and 3 until all vertices are included.\n\nConsider a graph with vertices A, B, C, D, E and edges A-B (2), A-C (3), B-C (1), B-D (4), C-D (5), C-E (6), D-E (7) and B-E (8), starting from A. Initially the tree is {A}, and the candidate edges are A-B (2) and A-C (3), so the minimum A-B (2) is selected and the tree becomes {A, B}. Now the candidates are A-C (3), B-C (1), B-D (4) and B-E (8), so B-C (1) is selected and the tree becomes {A, B, C}. Next the candidates are B-D (4), C-D (5), C-E (6) and B-E (8), since A-C now joins two tree vertices and would form a cycle, so B-D (4) is selected and the tree becomes {A, B, C, D}. Finally the candidates to reach E are C-E (6), D-E (7) and B-E (8), so C-E (6) is selected and all five vertices are included. The MST edges are A-B, B-C, B-D and C-E, which is exactly V - 1 = 4 edges, with total weight 2 + 1 + 4 + 6 = 13.\n\nIn conclusion, Prim's algorithm builds the MST by growing a single tree and always greedily adding the cheapest edge to a new vertex, and here it produces a minimum spanning tree of total cost 13.",
      },
      {
        id: "pp-2024-b6",
        group: "B",
        marks: 6,
        topic: "Searching and Sorting",
        prompt: "What is binary search? Write an algorithm for binary search.",
        years: ["2024"],
        answer:
          "Binary search is an efficient searching technique that finds the position of a target value (key) in a sorted array by repeatedly dividing the search interval in half. It compares the key with the middle element: if they are equal, the search succeeds; if the key is smaller, the search continues in the left half; and if the key is larger, it continues in the right half. Because half of the remaining elements are discarded at every step, binary search runs in O(log n) time, which is much faster than the O(n) of linear search. Its one condition is that the array must already be sorted.\n\nThe algorithm is as follows. BINARY_SEARCH(A, N, KEY): Step 1, set LOW = 0 and HIGH = N - 1. Step 2, repeat steps 3 to 5 while LOW <= HIGH. Step 3, set MID = (LOW + HIGH) / 2, using integer division. Step 4, if A[MID] = KEY, print Element found at position MID and exit. Step 5, else if KEY < A[MID], set HIGH = MID - 1; otherwise set LOW = MID + 1. Step 6, if the loop ends, print Element not found. Step 7, END.\n\nConsider the sorted array [5, 12, 18, 23, 37, 45, 56, 72, 88] with N = 9, where we search for KEY = 45. Initially LOW = 0 and HIGH = 8, so MID = 4 and A[4] = 37; since 45 > 37, LOW becomes 5. Now MID = (5 + 8) / 2 = 6 and A[6] = 56; since 45 < 56, HIGH becomes 5. Now MID = (5 + 5) / 2 = 5 and A[5] = 45, which matches the key. The element is therefore found at index 5 after only 3 comparisons, whereas a linear search would have needed 6.\n\nIn conclusion, binary search is the preferred method for searching large sorted data, such as dictionary lookups or database indexes, because its halving strategy keeps the number of comparisons logarithmic.",
      },
      {
        id: "pp-2024-b7",
        group: "B",
        marks: 6,
        topic: "Searching and Sorting",
        prompt: "What is sorting? Explain quick sort with proper example.",
        years: ["2024"],
        answer:
          "Sorting is the process of arranging data elements in a particular order, either ascending or descending, according to a key such as a number or a name. Sorting makes searching faster (it enables binary search) and makes data easier to present, for example ranking students by marks. Common techniques include bubble, selection, insertion, merge and quick sort. Quick sort is a divide-and-conquer sorting algorithm developed by C. A. R. Hoare. It works as follows: Step 1, choose one element as the pivot, here the last element. Step 2, partition the array so that all elements smaller than or equal to the pivot come before it and all larger elements come after it, which places the pivot in its final sorted position. Step 3, recursively apply quick sort to the left and right sub-arrays. Step 4, stop when a sub-array has zero or one element.\n\nConsider the array [7, 2, 9, 4, 3, 8, 5], with 5 as the pivot. Scanning from left to right, 7 is greater than 5 and is skipped. 2 is smaller, so it moves to the front, giving [2, 7, 9, 4, 3, 8, 5]. 9 is skipped. 4 is smaller, so it swaps into the second position, giving [2, 4, 9, 7, 3, 8, 5]. 3 is smaller, so it swaps into the third position, giving [2, 4, 3, 7, 9, 8, 5]. 8 is skipped. The pivot 5 is then swapped into the fourth position, giving [2, 4, 3, 5, 9, 8, 7], and 5 is now in its final place. The left part [2, 4, 3] is partitioned with pivot 3, which gives [2, 3, 4]. The right part [9, 8, 7] is partitioned with pivot 7, which gives [7, 8, 9]. The final sorted array is [2, 3, 4, 5, 7, 8, 9]. Quick sort takes O(n log n) time on average but O(n²) in the worst case, which happens when the pivot is always the smallest or largest element.\n\nIn conclusion, quick sort is one of the fastest practical sorting algorithms because each partition places one pivot correctly and splits the problem into smaller independent parts.",
      },
      {
        id: "pp-2024-b8",
        group: "B",
        marks: 6,
        topic: "Mixed/Short Notes",
        prompt: "Write short notes on Any TWO: (a) Enqueue (b) Balanced tree (c) Heap sort",
        years: ["2024"],
        answer:
          "(a) Enqueue: Enqueue is the operation of inserting a new element at the rear end of a queue, following the FIFO (First In, First Out) principle. Before inserting, the algorithm checks whether the queue is full by testing REAR = MAX - 1 (or, for a circular queue, whether (REAR + 1) % MAX equals FRONT); if not full, REAR is advanced and the new element is stored at that position.\n\nFor example, in a queue of size 4 that is empty, enqueuing 10 sets FRONT = REAR = 0, and enqueuing 20 next moves REAR to 1, giving the queue [10, 20]. Enqueue always runs in O(1) time, and it is the queue's counterpart to a stack's push operation. (b) Balanced tree: A balanced tree is a tree data structure in which the height difference between the left and right subtrees of every node is kept within a small, bounded limit, typically 1, so that the tree never becomes a long, inefficient chain. An AVL tree is a classic example, where the balance factor of every node, calculated as height of left subtree minus height of right subtree, must stay between -1 and +1; whenever an insertion or deletion breaks this rule, a rotation (left, right, or a combination) is performed to restore balance. Keeping a tree balanced guarantees that searching, insertion and deletion all run in O(log n) time even in the worst case, unlike an unbalanced BST which can degrade to O(n) if data is inserted in sorted order. (c) Heap sort: Heap sort is a comparison-based sorting algorithm that first builds a max-heap from the input array, where every parent node is greater than or equal to its children, and then repeatedly swaps the root (the largest element) with the last unsorted element and reduces the heap size by one, re-heapifying after each swap. For example, from the array [4, 10, 3, 5, 1], building a max-heap gives [10, 5, 3, 4, 1]; swapping the root 10 with the last element 1 and re-heapifying the remaining [1, 5, 3, 4] gives [5, 4, 3, 1], and this process repeats until the array is fully sorted as [1, 3, 4, 5, 10]. Heap sort runs in O(n log n) time in all cases and, unlike merge sort, needs no extra array, making it an efficient in-place sorting choice.",
      },
      // ===== 2023 =====
      {
        id: "pp-2023-a1",
        group: "A",
        marks: 12,
        topic: "Stack",
        prompt: "What do you mean by a stack? Implement a stack using an array checking the condition of underflow and overflow errors.",
        years: ["2023"],
        answer:
          "A stack is a linear data structure in which elements are inserted and deleted at only one end, called the top of the stack. It follows the LIFO (Last In, First Out) principle, so the element inserted most recently is always the first one removed. A pile of plates in a canteen is a good real-world example: a new plate is always placed on top, and a person taking a plate always takes the top one, never one from the middle or the bottom. In computing, stacks are used to manage function calls, to support undo in text editors, to evaluate expressions and for backtracking problems such as maze solving. To implement a stack with an array, we declare an array stack[capacity] and an integer variable top that holds the index of the topmost element. top starts at -1, which means the stack is empty. The first operation is Push, which inserts an element. The algorithm first checks whether top == capacity - 1. If it is, the array is already full and any further insertion would cause an overflow error, so the message Stack Overflow is displayed and the operation stops. Otherwise, top is increased by one and the new value is stored at stack[top]. The second operation is Pop, which removes the topmost element. The algorithm first checks whether top == -1. If it is, the stack is empty and nothing can be removed, so an underflow error is reported. Otherwise, the value at stack[top] is copied into a temporary variable, top is decreased by one, and the copied value is returned. The third operation is Top (also called Peek), which returns the topmost element without removing it. If the stack is empty a message is displayed; otherwise stack[top] is returned and top stays the same. The fourth operation is isEmpty, which returns true when top == -1 and false otherwise. Pop and Peek call it internally to prevent underflow. The fifth operation is isFull, which returns true when top == capacity - 1 and false otherwise. Push calls it internally to prevent overflow.\n\nConsider a stack of capacity 3. Initially top = -1, so isEmpty returns true. Pushing 10 makes top = 0 with stack[0] = 10. Pushing 20 makes top = 1, and pushing 30 makes top = 2. At this point isFull returns true because top equals capacity - 1, so an attempt to push 40 is caught by the overflow check and 40 is rejected. Popping once returns 30, the last element inserted, and sets top back to 1. A Peek then returns 20 without changing top. Popping twice more returns 20 and then 10, leaving top = -1, and any further Pop now triggers the Stack Underflow message.\n\nIn conclusion, an array-based stack is simple and fast because every operation runs in O(1) time, and it is safe and correct only because it checks the top == capacity - 1 and top == -1 conditions before every insertion and deletion.",
      },
      {
        id: "pp-2023-a2",
        group: "A",
        marks: 12,
        topic: "Tree",
        prompt: "Define binary search tree. What are the various ways of traversing such trees? Explain the algorithms illustrating an example.",
        years: ["2023"],
        answer:
          "A binary search tree (BST) is a binary tree in which every node obeys an ordering property. All values in a node's left subtree are smaller than the node's value, all values in its right subtree are larger, and this rule holds recursively for every subtree. Because of this ordering, a BST supports fast searching, insertion and deletion: at each node we can discard one half of the remaining tree by deciding whether to go left or right.\n\nFor example, a student record system could store roll numbers in a BST so that any roll number can be found in about log n comparisons instead of checking every record. Traversing a tree means visiting every node exactly once in a systematic order. Unlike an array, a tree has no single natural order, so there are three standard depth-first traversal methods, named after when the root (node) is visited compared with its subtrees. The first method is PreOrder traversal, whose algorithm is: visit the node, then traverse the left subtree in preorder, then traverse the right subtree in preorder (Node, Left, Right). Preorder is useful for copying a tree or producing a prefix expression. The second method is InOrder traversal: traverse the left subtree in inorder, then visit the node, then traverse the right subtree in inorder (Left, Node, Right). The key property of inorder traversal is that on a BST it always gives the values in ascending sorted order. The third method is PostOrder traversal: traverse the left subtree in postorder, then the right subtree in postorder, and visit the node last (Left, Right, Node). Postorder is used when deleting a tree or evaluating a postfix expression, because children must be processed before their parent. Consider a BST with root 100, where 100 has left child 20 and right child 200, 20 has children 10 (left) and 30 (right), and 200 has children 150 (left) and 300 (right). In PreOrder, we visit the root 100 first, then move into the left subtree and visit 20, then its left child 10, then its right child 30. Having finished the left side, we visit 200, then 150, then 300, giving 100, 20, 10, 30, 200, 150, 300. In InOrder, we begin by going as far left as possible, so 10 is visited first, followed by its parent 20 and then 30. With the entire left subtree done, the root 100 is visited, and then the right subtree is processed the same way as 150, 200, 300, giving 10, 20, 30, 100, 150, 200, 300, which is exactly the sorted order and confirms that the tree is a valid BST. In PostOrder, both children must be visited before their parent, so we visit 10 and 30 before 20, then 150 and 300 before 200, and the root 100 comes last, giving 10, 30, 20, 150, 300, 200, 100.\n\nIn conclusion, preorder, inorder and postorder traversal differ only in when the node is visited compared with its subtrees, yet each gives a different useful ordering, and inorder in particular is the standard way to list a BST's contents in sorted order.",
      },
      {
        id: "pp-2023-a3",
        group: "A",
        marks: 12,
        topic: "Searching and Sorting",
        prompt:
          "Differentiate between sorting and searching. Explain the basic principle of merge sort. Trace the sorting steps in merge sort for the following data: 11, 2, 9, 17, 16, 15, 7, 12, 19, 21, 81, 52, 65, 92",
        years: ["2023"],
        answer:
          "Searching and sorting are the two most fundamental operations performed on collections of data, but they have different goals. Searching is the process of finding whether a particular element exists in a collection and, if it does, where it is located. Searching does not change the data at all; it only reads it. Linear search takes O(n) time and binary search on sorted data takes O(log n) time. An example is looking up a customer's account number in a bank's records. Sorting is the process of rearranging the elements of a collection into a particular order, such as ascending or descending, so it actually changes the positions of the data. Sorting algorithms vary widely in efficiency, from O(n²) for bubble sort to O(n log n) for merge sort. Sorting algorithms can also be stable or unstable, depending on whether equal elements keep their original relative order, and this idea does not apply to searching. The two are related, because sorting is often done first so that a faster search such as binary search can then be used. Merge sort is a sorting algorithm based on the divide-and-conquer principle. In the divide step, the array is split into two halves, and each half is split again recursively until every sub-array contains a single element, which is trivially sorted. In the conquer (merge) step, pairs of sorted sub-arrays are merged back together by repeatedly comparing their front elements and copying the smaller one into the result, until both are used up. Merge sort always runs in O(n log n) time and is a stable sort. For the data 11, 2, 9, 17, 16, 15, 7, 12, 19, 21, 81, 52, 65, 92 (14 elements), we first divide the array into the left half [11, 2, 9, 17, 16, 15, 7, 12] and the right half [19, 21, 81, 52, 65, 92]. The left half is split into [11, 2, 9, 17] and [16, 15, 7, 12], and these are split again into [11, 2], [9, 17], [16, 15] and [7, 12], and finally into single elements. Now the merging begins. Comparing 11 with 2, the smaller 2 goes first, giving [2, 11]. Comparing 9 with 17 gives [9, 17]. Merging [2, 11] with [9, 17], we compare 2 with 9 and take 2, then 11 with 9 and take 9, then 11 with 17 and take 11, and finally copy 17, giving [2, 9, 11, 17]. Similarly, 16 and 15 merge to [15, 16] and 7 and 12 merge to [7, 12]. Merging these, 7 and 12 are both smaller than 15 and go first, followed by 15 and 16, giving [7, 12, 15, 16]. Merging [2, 9, 11, 17] with [7, 12, 15, 16]: 2 is less than 7, so 2 is taken; 7 is less than 9, so 7 is taken; then 9 and 11 are both less than 12; then 12, 15 and 16 are all less than 17; and 17 is copied last. This gives the sorted left half [2, 7, 9, 11, 12, 15, 16, 17]. On the right side, [19, 21, 81] splits into [19] and [21, 81], where 21 and 81 are already in order, and merging with 19 gives [19, 21, 81]. Likewise, [52, 65, 92] splits into [52] and [65, 92] and merges to [52, 65, 92]. Merging these two, 19 and 21 are both smaller than 52 and go first; then 52 beats 81, 65 beats 81, 81 beats 92, and 92 is copied last, giving [19, 21, 52, 65, 81, 92]. In the final merge, every element of the left half is smaller than 19, so the whole left half is copied first and then the right half follows. The result is the fully sorted array [2, 7, 9, 11, 12, 15, 16, 17, 19, 21, 52, 65, 81, 92].\n\nIn conclusion, sorting rearranges data while searching only locates it, and merge sort sorts reliably in O(n log n) time by breaking the problem into single elements and building the answer back up through a series of simple, ordered merges.",
      },
      {
        id: "pp-2023-b1",
        group: "B",
        marks: 6,
        topic: "Linked List",
        prompt: "What are the merits and demerits of contiguous lists (arrays) and linked lists? Explain with examples.",
        years: ["2023"],
        answer:
          "A contiguous list (array) stores its elements in adjacent memory locations, while a linked list stores each element in a separate node that holds the data and a pointer to the next node. Each representation has clear merits and demerits. The biggest merit of an array is O(1) random access: any element can be reached directly by its index, so marks[50] is found as quickly as marks[0]. Arrays also have good cache locality, because neighbouring elements sit next to each other in memory, which makes traversal fast in practice. They are simple to declare and use, and they need no extra memory for pointers when the size is fixed and known. However, an array has a fixed size, so growing it means allocating a larger block and copying every element, which is costly. Insertion and deletion in the middle take O(n) time because elements must be shifted.\n\nFor example, inserting 5 at index 1 of [10, 20, 30, 40] requires shifting 20, 30 and 40 one place right to get [10, 5, 20, 30, 40]. Also, if an array is over-allocated, the unused slots waste memory. A linked list, on the other hand, has a dynamic size: nodes are created and freed at runtime as needed. Insertion and deletion take O(1) time once the position is known. For example, inserting a node at the head only needs newNode.next = head followed by head = newNode, with no shifting at all. The demerits are that a linked list has no random access, so reaching the kth element needs an O(n) traversal from the head. Every node also needs extra memory for its pointer, and the implementation is more complex and error-prone, with risks such as dangling pointers and memory leaks.\n\nIn conclusion, arrays are better when the size is known and fast indexed access is needed, while linked lists are better when the data grows and shrinks often and insertions and deletions are frequent.",
      },
      {
        id: "pp-2023-b2",
        group: "B",
        marks: 6,
        topic: "Stack",
        prompt: "Write an algorithm to convert an infix expression to postfix expression as an application of a stack.",
        years: ["2023"],
        answer:
          "An infix expression places operators between operands, as in A + B, while a postfix expression places operators after their operands, as in AB+. Postfix needs no parentheses and is easy for a computer to evaluate, so compilers convert infix to postfix using a stack that temporarily holds operators.\n\nThe algorithm is as follows. Step 1, scan the infix expression from left to right. Step 2, if the symbol is an operand, add it straight to the output. Step 3, if the symbol is a left parenthesis, push it onto the stack. Step 4, if the symbol is a right parenthesis, pop operators to the output until the matching left parenthesis is reached, then discard both parentheses. Step 5, if the symbol is an operator, pop to the output every operator on the stack top with higher or equal precedence (except that the right-associative ^ does not pop another ^), then push the new operator. Step 6, when the scan ends, pop all remaining operators to the output.\n\nConsider (A + B) * (C - D) ^ E * F. The ( is pushed, A goes to the output, + is pushed and B goes to the output. The ) then pops + to give AB+. Next, * is pushed onto the empty stack. The second ( is pushed, C goes out, - is pushed and D goes out, and the ) pops - to give AB+CD-. Now ^ arrives and the stack top is *. Because ^ has higher precedence than *, nothing is popped and ^ is pushed on top of *. E goes to the output, giving AB+CD-E. The next * finds ^ on top, which has higher precedence, so ^ is popped. It then finds * of equal precedence, so that * is popped too, and the new * is pushed, giving AB+CD-E^*. F goes out, and at the end the remaining * is popped. The final postfix expression is AB+CD-E^*F*.\n\nIn conclusion, the stack holds back lower-precedence operators until higher-precedence ones have been written out, which is how the algorithm gives correct postfix with no parentheses.",
      },
      {
        id: "pp-2023-b3",
        group: "B",
        marks: 6,
        topic: "Queue",
        prompt: "How can you insert and delete an item in a queue? Explain with an example.",
        years: ["2023"],
        answer:
          "A queue is a linear data structure that follows the FIFO (First In, First Out) principle. Elements are inserted at one end, called the rear, and removed from the other end, called the front, just like people standing in line at a bank counter, where the first person to arrive is served first. In an array implementation, we use an array queue[SIZE] and two variables, front and rear, both set to -1 to show that the queue is empty. Insertion is called Enqueue. First, the algorithm checks whether rear == SIZE - 1. If it is, there is no space left and a Queue Overflow message is shown. Otherwise, if front == -1 (the queue was empty), front is set to 0. Then rear is increased by one and the new value is stored at queue[rear]. Deletion is called Dequeue. First, the algorithm checks whether front == -1 (or front > rear). If so, the queue is empty and a Queue Underflow message is shown. Otherwise, the value at queue[front] is read. If front == rear, that was the only remaining element, so both front and rear are reset to -1 to mark the queue empty; otherwise front is increased by one. Finally, the value that was read is returned.\n\nConsider a queue of SIZE 5. Enqueuing 10 changes front from -1 to 0 and rear to 0, storing 10 at queue[0]. Enqueuing 20 makes rear = 1, and enqueuing 30 makes rear = 2. A Dequeue then returns 10, the element that entered first, and moves front to 1. A second Dequeue returns 20 and moves front to 2. A third Dequeue returns 30, and because front and rear were both 2, they are reset to -1, so any further Dequeue reports underflow.\n\nIn conclusion, enqueue always works at the rear and dequeue always works at the front, and checking overflow and underflow before each operation keeps the queue correct and safe.",
      },
      {
        id: "pp-2023-b4",
        group: "B",
        marks: 6,
        topic: "Tree",
        prompt:
          "Define height, level and depth of a binary tree with an example. What are the conditions for strict and complete binary trees? Illustrate with examples.",
        years: ["2023"],
        answer:
          "A binary tree is a hierarchical structure in which each node has at most two children, and a few measurements describe its shape. The height of a tree is the number of edges on the longest path from the root down to a leaf, so it tells how tall the tree is. The level of a node describes which generation it belongs to: the root is at level 0, its children are at level 1, their children at level 2, and so on. The depth of a node is the number of edges from the root to that particular node. It is the same number as its level, but described for a single node rather than for a whole row of the tree.\n\nConsider a tree with root A, where A has children B and C, B has children D and E, and C has only one child, F. The depth of A is 0, the depth of B and C is 1, and the depth of D, E and F is 2. Level 0 therefore holds A, level 1 holds B and C, and level 2 holds D, E and F. The longest root-to-leaf path, such as A to B to D, has 2 edges, so the height of the tree is 2. A strict (full) binary tree is one in which every node has exactly 0 or 2 children and no node has only one child. For example, a tree where A has children B and C, B has children D and E, and C is a leaf is strict. The earlier tree is not strict, because C has only the single child F. A complete binary tree is one in which every level is completely filled except possibly the last, and the last level is filled from left to right with no gaps. The earlier tree is complete, because levels 0 and 1 are full and the last level D, E, F is filled from the left. If F were the right child of C instead, with the left position empty, it would not be complete.\n\nIn conclusion, height, level and depth measure a tree's shape, while the strict and complete conditions describe how regularly its nodes are filled.",
      },
      {
        id: "pp-2023-b5",
        group: "B",
        marks: 6,
        topic: "Tree",
        prompt:
          "What do you mean by a minimum spanning tree? How can you construct a minimum spanning tree using Kruskal's algorithm? Explain with example.",
        years: ["2023"],
        answer:
          "A spanning tree of a connected, undirected graph is a subgraph that includes all the vertices, is connected and contains no cycles. A graph with V vertices has exactly V - 1 edges in any spanning tree. A minimum spanning tree (MST) is the spanning tree whose total edge weight is as small as possible. MSTs are used in real problems such as laying cable or pipelines between cities at the lowest cost. Kruskal's algorithm builds an MST using a greedy strategy.\n\nStep 1, sort all the edges of the graph in ascending order of weight. Step 2, take the cheapest remaining edge and add it to the tree if it does not form a cycle with the edges already chosen; otherwise, reject it. Cycle detection is usually done with a union-find (disjoint set) structure: an edge is safe only if its two endpoints are currently in different sets. Step 3, repeat until V - 1 edges have been accepted.\n\nConsider a graph with vertices A, B, C, D and E and edges A-B (1), B-C (2), A-C (3), C-D (4), B-D (5), D-E (6) and C-E (7). The edges are already in ascending order. Edge A-B (1) is accepted because A and B are in different sets. Edge B-C (2) is accepted, joining C to the set {A, B}. Edge A-C (3) is rejected, because A and C are already connected through B, so adding it would create the cycle A-B-C. Edge C-D (4) is accepted, bringing D into the tree. Edge B-D (5) is rejected, since B and D are already connected through C and it would form the cycle B-C-D. Edge D-E (6) is accepted, connecting E. We now have 4 edges, which equals V - 1 for 5 vertices, so the algorithm stops and edge C-E (7) is never considered. The final MST is {A-B, B-C, C-D, D-E} with a total weight of 1 + 2 + 4 + 6 = 13.\n\nIn conclusion, Kruskal's algorithm gives the cheapest possible spanning tree by always choosing the lightest safe edge and never allowing a cycle.",
      },
      {
        id: "pp-2023-b6",
        group: "B",
        marks: 6,
        topic: "Graph",
        prompt:
          "What do you mean by depth-first search and breadth-first search algorithms for graph traversals? Explain with examples.",
        years: ["2023"],
        answer:
          "Graph traversal means visiting every vertex of a graph systematically, exactly once, and the two standard methods are Breadth-First Search (BFS) and Depth-First Search (DFS). BFS explores the graph level by level. It first visits the starting vertex, then all of its immediate neighbours, then their unvisited neighbours, and so on outward. BFS uses a queue, whose FIFO order makes sure that vertices closer to the start are processed before those farther away. Because of this, BFS finds the shortest path in terms of number of edges in an unweighted graph, which is why it is used for things like finding the fewest connections between two people on a social network. DFS, in contrast, goes as deep as possible along one path before backtracking to try another. It uses a stack, either explicitly or through recursion, and its LIFO order makes it return to the most recent vertex that still has unvisited neighbours. DFS is used for cycle detection, topological sorting and finding connected components.\n\nConsider a graph with edges A-B, A-C, B-D, B-E, C-F and E-F, where neighbours are taken in alphabetical order, starting from A. In BFS, A is visited and its neighbours B and C are enqueued. B is dequeued next and adds D and E, then C is dequeued and adds F. D, E and F are then processed with no new vertices, so the BFS order is A, B, C, D, E, F. In DFS, A is visited and we go deep to B, then deeper to D. D has no unvisited neighbours, so we backtrack to B and go to E. From E we continue to F, and from F we reach C through the edge C-F. The DFS order is A, B, D, E, F, C.\n\nIn conclusion, BFS spreads outward level by level using a queue, while DFS dives down one path at a time using a stack, so the same graph gives different visiting orders, each suited to different problems.",
      },
      {
        id: "pp-2023-b7",
        group: "B",
        marks: 6,
        topic: "Searching and Sorting",
        prompt: "Explain about sequential, binary and tree searching algorithms along with example.",
        years: ["2023"],
        answer:
          "Searching is the process of finding whether a given element, called the key, is present in a collection, and three common techniques are sequential, binary and tree searching. Sequential (linear) search compares the key with each element one by one, starting from the first, until a match is found or the list ends. It works on unsorted data and is very simple, but it takes O(n) time in the worst case.\n\nFor example, finding a name in an unordered attendance register may mean checking every entry. Binary search works only on sorted data, but it is much faster. It compares the key with the middle element: if they are equal, the search succeeds; if the key is smaller, the search continues in the left half; if it is larger, the search continues in the right half. Because the range is halved at every step, binary search takes O(log n) time. Consider searching for 33 in the sorted array [5, 12, 18, 25, 33, 41, 57] with indexes 0 to 6. First, low = 0 and high = 6, so mid = 3, and the element there is 25. Since 33 is greater than 25, the left half is discarded and low becomes 4. Next, mid = (4 + 6) / 2 = 5, and the element there is 41. Since 33 is smaller than 41, high becomes 4. Now mid = 4 and the element is 33, which matches, so the key is found at index 4 after only 3 comparisons instead of 5 with linear search. Tree search is performed on a binary search tree. Starting at the root, the key is compared with the current node: if it is smaller, the search moves to the left child, and if it is larger, it moves to the right child, until the key is found or an empty link is reached. For a balanced tree this takes O(log n) time.\n\nIn conclusion, sequential search is simple but slow, while binary search and tree search use ordering to discard half of the remaining data at each step, which makes them much faster on large collections.",
      },
      {
        id: "pp-2023-b8",
        group: "B",
        marks: 6,
        topic: "Tree",
        prompt:
          "What do you mean by a balance factor of an AVL tree? Construct AVL tree from the following data: 14, 12, 8, 18, 20, 23, 44, 52.",
        years: ["2023"],
        answer:
          "An AVL tree is a self-balancing binary search tree, named after its inventors Adelson-Velsky and Landis. The balance factor of a node is the height of its left subtree minus the height of its right subtree. In an AVL tree, every node must have a balance factor of -1, 0 or +1. If an insertion makes any node's balance factor +2 (left-heavy) or -2 (right-heavy), the tree is rebalanced using rotations: a right rotation fixes a left-left imbalance, a left rotation fixes a right-right imbalance, and double rotations handle the left-right and right-left cases. This keeps the height at O(log n), so searches stay fast.\n\nNow we construct the tree. Insert 14 as the root. Insert 12 as the left child of 14. Insert 8 as the left child of 12. Node 14 now has a left subtree of height 2 and an empty right subtree, so its balance factor is +2 in a left-left pattern. A right rotation at 14 makes 12 the root, with 8 on the left and 14 on the right. Insert 18 as the right child of 14, and every balance factor stays within range. Insert 20 as the right child of 18. Node 14 now has balance factor -2 in a right-right pattern, so a left rotation at 14 lifts 18 up, with 14 on its left and 20 on its right, giving the tree 12(8, 18(14, 20)). Insert 23 as the right child of 20. Now the root 12 has a left height of 1 and a right height of 3, so its balance factor is -2. A left rotation at 12 makes 18 the new root, with left child 12 (children 8 and 14) and right child 20 (right child 23). Insert 44 as the right child of 23. Node 20 now has balance factor -2, so a left rotation at 20 makes 23 the parent of 20 (left) and 44 (right). Finally, insert 52 as the right child of 44. Node 44 has balance factor -1, 23 has -1 and the root 18 has -1, so no rotation is needed. The final AVL tree has root 18. Its left child is 12, with children 8 and 14. Its right child is 23, with left child 20 and right child 44, and 44 has right child 52.\n\nIn conclusion, this tree is balanced because every node's balance factor is -1, 0 or +1, with a height of only 3 for eight keys, even though the input was nearly sorted and would otherwise have produced a long, skewed chain.",
      },
      // ===== 2022 =====
      {
        id: "pp-2022-a1",
        group: "A",
        marks: 12,
        topic: "Stack",
        prompt: "What is an Abstract Data Type? Describe stack as an ADT with some applications.",
        years: ["2022"],
        answer:
          "An Abstract Data Type (ADT) is a mathematical model for a data type that defines the type purely in terms of the operations that can be performed on it and the behavior those operations must exhibit, while deliberately hiding how the data is actually stored or how the operations are implemented internally. This separation between interface and implementation is what makes an ADT valuable: a programmer using the ADT only needs to know what an operation does, not how it does it, so the underlying implementation can later be changed (for example, from an array-based version to a linked-list-based version) without breaking any code that uses it. A Stack is one of the simplest and most important ADTs, and it models a Last In, First Out (LIFO) collection, meaning the element most recently inserted is always the first one to be removed, exactly like a physical stack of trays in a cafeteria where only the top tray can be taken off or added. As an ADT, a stack is fully specified by its operations rather than its storage: push(x) inserts a new element x onto the top of the stack; pop() removes and returns the element currently at the top; peek() (sometimes called top()) returns the value of the top element without removing it, useful for inspection; isEmpty() reports whether the stack currently holds zero elements; isFull() reports whether a fixed-capacity implementation has reached its maximum size; and size() reports the current count of stored elements. None of these operations say anything about whether the stack is backed by an array or a linked list — that choice is left entirely to whoever implements the ADT. The stack ADT has a wide range of practical applications. It is used to manage function calls and recursion through the call stack, where each function invocation is pushed on entry and popped on return, which is also why deeply nested or infinite recursion causes a stack overflow. It is used to check whether an expression has balanced parentheses or brackets, by pushing every opening symbol and popping it upon encountering the matching closing symbol. It underlies undo/redo functionality in text editors and design software, where every action is pushed onto an undo stack and reverted by popping. It is the natural data structure for converting infix expressions to postfix form and for directly evaluating postfix expressions, since operators and operands can be resolved in the correct order using a single stack. It also supports Depth-First Search traversal of graphs and trees, and backtracking algorithms such as maze-solving or the N-Queens problem, where partial solutions are pushed as they are explored and popped when a dead end is reached.\n\nIn conclusion, the stack ADT's strict LIFO discipline, combined with its small, well-defined set of operations, makes it one of the most reusable building blocks in computer science, appearing at some level inside compilers, operating systems, and everyday application software alike.",
      },
      {
        id: "pp-2022-a2",
        group: "A",
        marks: 12,
        topic: "Tree",
        prompt:
          "Construct a Binary Search Tree from the following set of data: 5, 8, 2, 15, 10, 4, 6, 3. Traverse the tree in Pre-order, In-order and Post-order.",
        years: ["2022"],
        answer:
          "A Binary Search Tree (BST) is built by inserting values one at a time starting from an empty tree, comparing each new value against the current node and moving left if it is smaller or right if it is larger, until an empty position is found where the new node is attached. Building the BST from the sequence 5, 8, 2, 15, 10, 4, 6, 3 proceeds as follows. Inserting 5 into an empty tree makes it the root. Inserting 8, which is greater than 5, becomes the right child of 5. Inserting 2, which is less than 5, becomes the left child of 5. Inserting 15 is compared against 5 (greater, go right) and then against 8 (greater, go right), so it becomes the right child of 8. Inserting 10 is compared against 5 (greater, go right), then 8 (greater, go right), then 15 (smaller, go left), so it becomes the left child of 15. Inserting 4 is compared against 5 (smaller, go left) and then 2 (greater, go right), so it becomes the right child of 2. Inserting 6 is compared against 5 (greater, go right) and then 8 (smaller, go left), so it becomes the left child of 8. Finally, inserting 3 is compared against 5 (smaller, go left), then 2 (greater, go right), then 4 (smaller, go left), so it becomes the left child of 4. The resulting tree has 5 at the root; 2 and 8 as its children; 4 and 6 as the respective right and left children of 2 and 8; 15 as the right child of 8 with 10 as its left child; and 3 as the left child of 4. Pre-order traversal (root, then left subtree, then right subtree) visits 5 first, descends left into 2, then into 4, then into 4's left child 3, then returns to 5 and descends right into 8, then into 8's left child 6, then finally into 8's right child 15 and its left child 10, giving the sequence 5, 2, 4, 3, 8, 6, 15, 10. In-order traversal (left subtree, root, right subtree) always yields a BST's values in strictly ascending sorted order regardless of the shape of the tree, which for this tree gives 2, 3, 4, 5, 6, 8, 10, 15 — a useful built-in check that the tree was constructed correctly, since any BST's in-order sequence must always come out sorted. Post-order traversal (left subtree, right subtree, root) visits each node only after both of its children have been fully visited, giving the sequence 3, 4, 2, 6, 10, 15, 8, 5 for this tree, with the root 5 necessarily appearing last since every other node is part of one of its two subtrees.\n\nIn conclusion, the three traversal orders serve different purposes in practice: in-order is used to read BST data back in sorted order, pre-order is used to create a copy of the tree's structure, and post-order is used when a node must be processed only after its children, such as when safely deleting the entire tree from the bottom up.",
      },
      {
        id: "pp-2022-a3",
        group: "A",
        marks: 12,
        topic: "Graph",
        prompt: "What is graph? Describe different types of graphs with example.",
        years: ["2022"],
        answer:
          "A graph is a non-linear data structure consisting of a finite set of vertices (also called nodes), representing entities, and a set of edges connecting pairs of vertices, representing relationships or connections between those entities. Unlike a tree, a graph places no restriction on how many connections a vertex may have or whether cycles can exist, which makes it the most general-purpose structure for modeling networks: a social network can be modeled as a graph where vertices are people and edges are friendships, a road map can be modeled as a graph where vertices are cities and edges are the roads connecting them, and a computer network can be modeled as a graph where vertices are devices and edges are the physical or logical links between them. Graphs are classified along several independent dimensions, each capturing a different real-world property. Based on direction, an Undirected Graph has edges with no inherent direction, so a connection between A and B can be traversed either way, suiting mutual relationships such as a Facebook friendship, whereas a Directed Graph (or digraph) has edges that point from one vertex to another only, suiting one-way relationships such as a Twitter 'follows' relationship, where A following B does not imply B follows A. Based on weight, a Weighted Graph assigns a numeric cost to every edge, such as the distance or travel time along a road, which is essential for problems like finding the shortest or cheapest route, whereas an Unweighted Graph treats every edge as equal, only recording whether a connection exists. Based on structure, a Complete Graph has an edge directly connecting every possible pair of vertices, representing a fully interconnected network; a Bipartite Graph divides its vertices into two disjoint groups such that every edge connects a vertex in one group to a vertex in the other, never within the same group, which naturally models problems like assigning workers to jobs; and a Tree is itself a special connected graph with no cycles at all, such as a family tree or a company's organizational chart. Based on cycles, a Cyclic Graph contains at least one path that starts and ends at the same vertex, such as a computer network with redundant, looping backup links, whereas an Acyclic Graph has no such cycle, with a Directed Acyclic Graph (DAG) being especially important for representing task scheduling and dependency ordering, since a DAG guarantees that tasks can always be ordered so that every prerequisite appears before the task depending on it. Other notable variants include a Multigraph, which allows more than one edge between the same pair of vertices (such as multiple different bus routes running between the same two cities), and a Planar Graph, which can be drawn on a flat surface with no two edges crossing, a property that matters in circuit-board and map-coloring design.\n\nIn conclusion, graphs are the most flexible data structure for representing relationships in the real world precisely because these classifications are not mutually exclusive — a single real-world network, such as a flight-route map, is typically directed, weighted, and cyclic all at once, and recognizing which properties apply is the first step in choosing the correct graph algorithm to solve a given problem.",
      },
      {
        id: "pp-2022-b1",
        group: "B",
        marks: 6,
        topic: "Stack",
        prompt: "Write the algorithm to implement PUSH and POP operations in Stack using Array.",
        years: ["2022"],
        answer:
          "An array-based stack implementation needs only two things: a fixed-size array to hold the stack's elements, and an integer variable top that always records the index of the current topmost element, initialized to -1 to represent an empty stack.\n\nThe Push algorithm inserts a new element onto the stack and must guard against Stack Overflow, the error condition where an insertion is attempted on an already-full stack. It proceeds as: Step 1, check whether the stack is full by testing if top equals capacity minus 1; if this is true, report 'Stack Overflow' and abort the operation, since there is no free slot remaining in the array. Step 2, if the stack is not full, increment top by one. Step 3, store the new value at the array position now indicated by top. The Pop algorithm removes and returns the topmost element and must guard against Stack Underflow, the error condition where a deletion is attempted on an already-empty stack. It proceeds as: Step 1, check whether the stack is empty by testing if top equals -1; if this is true, report 'Stack Underflow' and abort the operation, since there is no element to remove. Step 2, if the stack is not empty, read and store the value currently at array position top. Step 3, decrement top by one, effectively marking that position as free for future pushes even though the old value may still physically remain in the array slot. Step 4, return the value that was read in Step 2.\n\nAs an example, in a stack of capacity 4 (top starts at -1), pushing 1, 2, 3, and 4 in sequence moves top from -1 to 0, 1, 2, and finally 3, filling the array as [1, 2, 3, 4]; attempting to push a fifth value 5 at this point fails the full-check (top == capacity-1 == 3) and correctly reports Stack Overflow. Popping from this full stack instead returns 4 and moves top back to 2, then popping again returns 3 and moves top to 1, continuing until top returns to -1, at which point any further pop attempt correctly reports Stack Underflow.\n\nIn conclusion, the overflow and underflow checks are not optional extras but essential, scored parts of a correct stack implementation, since without them the algorithm would attempt to read or write outside the bounds of the array.",
      },
      {
        id: "pp-2022-b2",
        group: "B",
        marks: 6,
        topic: "Queue",
        prompt:
          "Define circular queue and linear queue with examples. Write algorithm for dequeue operation in a Circular Queue.",
        years: ["2022"],
        answer:
          "A Linear Queue is a linear data structure that follows the First In First Out (FIFO) principle, where elements are inserted (enqueued) at the rear and removed (dequeued) from the front, much like people standing in a single line at a checkout counter. Its major limitation is that it has a fixed underlying array size, and once the rear pointer reaches the last index of that array, no further elements can be enqueued, even if several elements have already been dequeued from the front and their slots are technically free — for example, in a linear queue of size 5 that has enqueued and then fully dequeued three elements, the front and rear pointers have already advanced past those freed positions and cannot go back to reuse them, so the queue reports overflow well before it is genuinely full. A Circular Queue solves exactly this problem by logically connecting the last position of the array back to the first, so that when the rear pointer would move past the final index, it instead wraps around to index 0 if that position is free, computed using modulo arithmetic as rear = (rear + 1) % size. This allows a circular queue to make full use of every available slot indefinitely, which is why it is preferred for continuously running systems such as CPU task scheduling and streaming data buffers, whereas a plain linear queue is more suited to short-lived, one-time-use queues.\n\nThe Dequeue algorithm for a circular queue proceeds as: Step 1, check if the queue is empty by testing whether front equals -1; if so, report the error 'Queue is empty' and abort. Step 2, store the value at queue[front] to be returned. Step 3, check if front is equal to rear, meaning this dequeue removes the very last remaining element; if so, reset both front and rear to -1, restoring the queue to its empty state. Step 4, otherwise, advance front by one position using front = (front + 1) % size, wrapping around to 0 if front had reached the final index. Step 5, return the value stored in Step 2.\n\nAs an example, in a circular queue of size 4 holding elements at indices 2 and 3 (front=2, rear=3), dequeuing once returns the element at index 2, and since front (2) does not equal rear (3), front advances to (2+1)%4=3, leaving a single remaining element at index 3; dequeuing again returns that element, and since front now equals rear, both are reset to -1, correctly marking the queue as empty.\n\nIn conclusion, the circular queue's wraparound arithmetic in both its enqueue and dequeue operations is precisely what allows it to reuse freed space that a linear queue would otherwise waste permanently.",
      },
      {
        id: "pp-2022-b3",
        group: "B",
        marks: 6,
        topic: "Linked List",
        prompt:
          "Write algorithms to (i) Delete a node from front of a singly linked list and (ii) Insert a node into end of a doubly linked list.",
        years: ["2022"],
        answer:
          "(i) Deleting the front node of a singly linked list is the simplest deletion case because the node to be removed is always directly reachable through the list's head pointer, with no traversal required.\n\nThe algorithm is: Step 1, check whether the list is empty by testing if head is NULL; if so, there is nothing to delete and the operation aborts. Step 2, create a temporary pointer and set it to the current head node, so the node about to be removed is not lost. Step 3, advance head to point to the second node in the list, accessed via the original head's next pointer — this single reassignment is what logically removes the first node from the list, since it is no longer reachable by following head. Step 4, free (deallocate) the memory held by the temporary pointer, which still references the old first node.\n\nFor example, deleting the front of the list 10 → 20 → 30 → NULL involves saving a pointer to node 10, moving head to node 20 (10's next), and then freeing node 10, leaving the list as 20 → 30 → NULL; this entire operation runs in constant O(1) time regardless of the list's length, since no traversal past the first node is ever needed. (ii) Inserting a node at the end of a doubly linked list requires locating the current last node first, since (without a maintained tail pointer) the only entry point is the head.\n\nThe algorithm is: Step 1, create a new node, set its data field to the value being inserted, and set its next pointer to NULL, since it will become the new last node. Step 2, check if the list is empty by testing if head is NULL; if so, set both head and the new node's prev pointer appropriately so the new node becomes the sole element of the list, and stop. Step 3, if the list is not empty, create a temporary pointer starting at head and advance it node by node, following each node's next pointer, until it reaches a node whose next pointer is NULL — this identifies the current last node. Step 4, set that last node's next pointer to the new node, linking it into the list. Step 5, set the new node's prev pointer back to that last node, completing the doubly linked connection in both directions.\n\nFor example, inserting 40 at the end of the doubly linked list 10 ⇄ 20 ⇄ 30 ⇄ NULL involves traversing from head (10) through 20 to reach 30 (whose next is NULL), then setting 30's next pointer to the new node 40 and 40's prev pointer back to 30, producing 10 ⇄ 20 ⇄ 30 ⇄ 40 ⇄ NULL.\n\nIn conclusion, front-deletion from a singly linked list is O(1) because the target node is always immediately known, whereas end-insertion into a doubly linked list without a tail pointer costs O(n) due to the required traversal, which is precisely why many practical doubly linked list implementations maintain an explicit tail pointer to make this operation O(1) as well.",
      },
      {
        id: "pp-2022-b4",
        group: "B",
        marks: 6,
        topic: "Searching and Sorting",
        prompt:
          "What is sorting? Write the algorithm to sort the list of numbers in ascending order using Quick Sort with example.",
        years: ["2022"],
        answer:
          "Sorting is the process of rearranging a collection of data elements into a specific order, typically ascending or descending, and it is a fundamental operation in computer science because many other algorithms, such as binary search and duplicate detection, either require sorted input or run dramatically faster once the data is sorted. Quick Sort is an efficient, in-place, divide-and-conquer sorting algorithm that works by repeatedly selecting a 'pivot' element and partitioning the remaining elements around it, so that all elements smaller than the pivot end up to its left and all elements larger end up to its right, with the pivot itself landing in its final, correctly sorted position after each partition step.\n\nThe algorithm proceeds as: Step 1, choose a pivot element from the array (this example uses the last element of each sub-array for simplicity). Step 2, partition the array by scanning through it and moving every element smaller than the pivot to the left side and every element larger to the right side, then placing the pivot itself between these two groups. Step 3, recursively apply Quick Sort to the sub-array of elements to the left of the pivot's final position. Step 4, recursively apply Quick Sort to the sub-array of elements to the right of the pivot's final position. Step 5, the recursion's base case is reached when a sub-array has zero or one element, since such a sub-array is already sorted by definition and requires no further work.\n\nAs an example, consider sorting [38, 27, 43, 3, 9, 82, 10] using the last element, 10, as the first pivot: scanning the remaining elements, 3 and 9 are smaller than 10 and 38, 27, 43, and 82 are larger, so after partitioning the array becomes [3, 9, 10, 38, 27, 43, 82], with the pivot 10 now fixed in its correct final position at index 2. Quick Sort next recurses on the left sub-array [3, 9], which partitions trivially into itself in sorted order, and separately recurses on the right sub-array [38, 27, 43, 82]: choosing 82 as this sub-array's pivot places every remaining element (38, 27, 43) to its left since all are smaller, giving [38, 27, 43, 82] with 82 now fixed at the end; recursing once more on [38, 27, 43] with pivot 43 places 38 and 27 to its left, and a final recursive step sorts [38, 27] into [27, 38]. Combining every fixed pivot and fully sorted sub-array from smallest to largest yields the final sorted array [3, 9, 10, 27, 38, 43, 82].\n\nIn conclusion, Quick Sort's average-case performance of O(n log n) combined with its low memory overhead (it sorts in place, needing no auxiliary array) makes it one of the most widely used general-purpose sorting algorithms in real software libraries, even though a poor pivot choice on already-sorted input can degrade its worst case to O(n²).",
      },
      {
        id: "pp-2022-b5",
        group: "B",
        marks: 6,
        topic: "Introduction",
        prompt:
          "What is recursion and what are its applications? Write a program to multiply n natural numbers using recursion.",
        years: ["2022"],
        answer:
          "Recursion is a problem-solving technique in which a function calls itself, either directly or indirectly, in order to break a large problem down into smaller sub-problems of the exact same type, continuing this breakdown until a base case is reached that can be answered immediately without any further recursive call. Every correctly written recursive function needs precisely two components: a base case, which stops the recursion and prevents it from running forever, and a recursive case, which reduces the size of the problem and moves it strictly closer to the base case with each call. Recursion is applied throughout computer science wherever a problem has a naturally self-similar, nested structure: the Towers of Hanoi puzzle is solved by recursively moving n-1 disks out of the way, moving the largest disk, then recursively moving the n-1 disks back onto it; tree traversals (in-order, pre-order, post-order) are naturally recursive since each subtree is itself a smaller tree to be traversed the same way; Depth-First Search of a graph recursively visits each unvisited neighbor of the current vertex; and Merge Sort and Quick Sort both rely on recursively sorting smaller sub-arrays. The following program computes the product of the first n natural numbers using recursion: #include <stdio.h>\n\nint multiplyNaturalNumbers(int n) {\n    if (n == 1)\n        return 1;\n    return n * multiplyNaturalNumbers(n - 1);\n}\n\nint main() {\n    int n;\n    printf(\"Enter a positive integer n: \");\n    scanf(\"%d\", &n);\n    if (n <= 0) {\n        printf(\"Please enter a positive integer.\\n\");\n        return 1;\n    }\n    int result = multiplyNaturalNumbers(n);\n    printf(\"The product of the first %d natural numbers is: %d\\n\", n, result);\n    return 0;\n}\nHere, n == 1 is the base case, directly returning 1 without any further recursive call, and the recursive case n * multiplyNaturalNumbers(n - 1) reduces the problem from computing the product of n numbers to computing the product of n-1 numbers and then multiplying in the current value of n. Tracing this program for n = 4: multiplyNaturalNumbers(4) calls multiplyNaturalNumbers(3), which calls multiplyNaturalNumbers(2), which calls multiplyNaturalNumbers(1), which immediately returns 1 as the base case; the calls then unwind in reverse, with multiplyNaturalNumbers(2) returning 2*1=2, multiplyNaturalNumbers(3) returning 3*2=6, and finally multiplyNaturalNumbers(4) returning 4*6=24, correctly computing 4! = 24. In conclusion, recursion trades a small amount of extra memory (for the call stack built up during the 'winding' phase) for code that mirrors the natural, self-similar structure of the problem being solved, which is why it is favored for tree, graph, and divide-and-conquer algorithms even when an equivalent iterative version is possible.",
      },
      {
        id: "pp-2022-b6",
        group: "B",
        marks: 6,
        topic: "Tree",
        prompt:
          "What is a Binary Search Tree? Write the algorithm to search the element X in a Binary Search Tree (BST) with example.",
        years: ["2022"],
        answer:
          "A Binary Search Tree (BST) is a binary tree in which every node satisfies the BST ordering property: all values stored in a node's left subtree are strictly smaller than the node's own value, and all values stored in its right subtree are strictly larger, with this same property holding recursively for every subtree within the tree. This ordering is what allows a BST to support efficient searching, insertion, and deletion, typically in O(log n) time for a reasonably balanced tree, since each comparison made while walking down the tree eliminates roughly half of the remaining nodes from consideration, analogous to binary search on a sorted array but performed on a linked, hierarchical structure. The algorithm to search for an element X in a BST is: Step 1, start at the root node. Step 2, if the current node is NULL, the search has run off the bottom of the tree without finding X, so report that X is not present and stop. Step 3, compare X with the current node's value; if they are equal, the search has succeeded, and the node (or a 'found' result) is returned. Step 4, if X is smaller than the current node's value, move to the left child and repeat from Step 2. Step 5, if X is larger than the current node's value, move to the right child and repeat from Step 2.\n\nAs an example, consider the BST with root 50, left subtree rooted at 30 (with children 20 and 40), and right subtree rooted at 70 (with children 60 and 80). Searching for X = 40 begins at the root 50; since 40 is smaller than 50, the search moves to the left child, 30. At node 30, since 40 is larger than 30, the search moves to 30's right child, 40. At this node, X (40) equals the current node's value (40), so the search terminates successfully and returns this node. By contrast, searching for X = 45 in the same tree would move from 50 to 30 (45 < 50), then from 30 to 40 (45 > 30), then attempt to move to 40's right child, which is NULL, correctly reporting that 45 is not present in the tree after only three comparisons rather than checking all seven nodes individually.\n\nIn conclusion, because each step of the search discards an entire subtree that cannot possibly contain X, a BST search only needs to examine nodes along a single root-to-leaf path, making it dramatically faster than a linear scan through an unordered collection of the same size.",
      },
      {
        id: "pp-2022-b7",
        group: "B",
        marks: 6,
        topic: "Linked List",
        prompt:
          "What are the advantages and drawbacks of Linked List over Arrays? Write algorithm to implement the linear queue using Linked List.",
        years: ["2022"],
        answer:
          "Arrays and linked lists offer complementary trade-offs, and choosing between them depends on which operations a program performs most often. Arrays store elements in contiguous memory, which gives them constant-time O(1) indexed access to any element and better cache locality, making them simple to implement and memory-efficient since no extra space is spent on pointers; however, an array's size must generally be fixed at creation time, so it cannot grow or shrink dynamically at runtime without a costly full reallocation and copy of every existing element. A Linked List, by contrast, stores each element in its own node together with a pointer to the next node, which lets the list grow or shrink one node at a time as needed during program execution without ever needing to relocate existing data, making it the better choice whenever the number of elements is unknown in advance or changes frequently. This flexibility comes at a cost: each node requires extra memory purely to store its pointer(s), traversal to reach a specific position takes O(n) time since there is no direct indexed access the way an array offers, and linked lists generally have worse cache performance because their nodes may be scattered arbitrarily throughout memory rather than laid out contiguously. A linear queue can be implemented using a linked list instead of an array by maintaining two pointers, front and rear, that reference the first and last nodes of the list respectively, which conveniently removes the fixed-capacity limitation that an array-based queue would otherwise have.\n\nThe Enqueue(data) operation is: Step 1, create a new node containing the given data with its next pointer set to NULL. Step 2, if the queue is currently empty (front is NULL), set both front and rear to point to this new node. Step 3, otherwise, set the current rear node's next pointer to the new node, then move rear itself to point to the new node. The Dequeue() operation is: Step 1, if the queue is empty (front is NULL), report an error, since there is nothing to remove. Step 2, otherwise, store the data held in the front node so it can be returned. Step 3, move front forward to the node referenced by the current front node's next pointer. Step 4, if front has now become NULL (the queue had exactly one element before this dequeue), also set rear to NULL, correctly marking the queue as empty again. Step 5, free the old front node and return the data stored in Step 2.\n\nIn conclusion, a linked-list-based queue trades the small per-node pointer overhead of a linked list for the ability to grow indefinitely without ever reporting a false 'queue full' overflow, which is exactly the same fixed-size limitation that motivates using a circular queue when an array-based implementation must be used instead.",
      },
      {
        id: "pp-2022-b8",
        group: "B",
        marks: 6,
        topic: "Mixed/Short Notes",
        prompt: "Write short notes on any TWO: (a) Big O Analysis (b) Hashing (c) Kruskal's Algorithm.",
        years: ["2022"],
        answer:
          "(a) Big O Analysis: Big O notation is a mathematical way of expressing the upper bound on how an algorithm's running time (time complexity) or memory usage (space complexity) grows as the size of its input, n, increases, without depending on the specific hardware the algorithm happens to run on. It captures the worst-case growth trend of an algorithm — for example, an algorithm described as O(n) will never perform more work than proportional to n as n grows, while an O(n²) algorithm's work grows proportional to the square of n, which becomes dramatically slower for large inputs even though both might perform similarly for small ones. Big O analysis is essential for comparing two different algorithms that solve the same problem before committing to implementing either one, since an algorithm that looks acceptable on a small test input can become impractically slow once deployed against real, much larger datasets.\n\n(b) Hashing: Hashing is a technique that maps a key of arbitrary size to a fixed-size value, called a hash code, using a mathematical hash function, and then uses that hash code as an index into a fixed-size table (a hash table) to store or retrieve the associated data, achieving average-case O(1) time for insertion, deletion, and lookup — far faster than the O(log n) of a balanced tree or the O(n) of a linear scan. Because two distinct keys can occasionally map to the same index, an event called a collision, a good hash table implementation must include a collision-resolution strategy, such as chaining (storing all colliding entries in a small linked list at that index) or open addressing (probing forward to the next free slot). Hashing underlies the implementation of dictionaries, symbol tables in compilers, caches, and password storage systems.\n\n(c) Kruskal's Algorithm: Kruskal's Algorithm is a greedy algorithm used to construct a Minimum Spanning Tree (MST) of a connected, undirected, weighted graph — a subset of the graph's edges that connects every vertex together, contains no cycles, and has the smallest possible total edge weight among all such spanning subsets. The algorithm works by first sorting all edges of the graph in ascending order of weight, then repeatedly considering the next-cheapest unexamined edge and adding it to the growing MST only if doing so would not create a cycle with edges already chosen (this cycle check is efficiently implemented using a Union-Find/disjoint-set data structure), continuing until exactly V-1 edges have been added for a graph with V vertices. Because it always greedily picks the cheapest available edge that keeps the structure acyclic, Kruskal's Algorithm is simple to implement and performs particularly well on sparse graphs, making it a common choice for network-design problems such as minimizing the total cabling cost needed to connect a set of buildings.",
      },

      // ===== 2019 =====
      {
        id: "pp-2019-a1",
        group: "A",
        marks: 12,
        topic: "Graph",
        prompt: "Discuss shortest path algorithm with example.",
        years: ["2019"],
        answer:
          "A shortest path algorithm finds the path between two vertices in a weighted graph such that the sum of the weights of its edges is minimized. This is one of the most practically important graph problems, applied in GPS navigation systems, network routing protocols, and flight-connection planners. The most widely used shortest path algorithm for graphs with non-negative edge weights is Dijkstra's Algorithm, which follows a greedy strategy. It works as follows: Step 1, initialize the distance to the source vertex as 0 and the distance to every other vertex as infinity, and mark all vertices as unvisited. Step 2, select the unvisited vertex with the smallest known distance (initially the source itself). Step 3, for each neighbor of that vertex, calculate the distance through the current vertex; if this new distance is smaller than the neighbor's currently recorded distance, update it (this update step is called relaxation). Step 4, mark the current vertex as visited so it is not processed again. Step 5, repeat steps 2 to 4 until all vertices have been visited or the destination vertex has been finalized.\n\nConsider a graph with vertices S, A, B, C and edges S-A (4), S-B (1), B-A (2), B-C (5), A-C (1). Starting from source S, initial distances are S=0, A=∞, B=∞, C=∞. The nearest unvisited vertex is S itself (distance 0); relaxing its edges gives A=4 and B=1. Next, the nearest unvisited vertex is B (distance 1); relaxing B's edges gives a new candidate distance to A of 1+2=3, which is smaller than the existing 4, so A is updated to 3, and C is updated to 1+5=6. Next, the nearest unvisited vertex is A (distance 3); relaxing A's edge to C gives 3+1=4, which is smaller than the existing 6, so C is updated to 4. Finally, C is processed with no further unvisited neighbors, and the algorithm terminates. The final shortest distances are S=0, B=1, A=3, C=4, showing that the shortest path from S to C is actually S→B→A→C with total weight 4, not the direct-looking S→A→C.\n\nIn conclusion, Dijkstra's algorithm efficiently finds all shortest paths from a single source by always greedily finalizing the closest remaining vertex and correctly relaxing distances through it, making it the standard solution wherever weighted, non-negative shortest-path computation is needed.",
      },
      {
        id: "pp-2019-a2",
        group: "A",
        marks: 12,
        topic: "Tree/Graph",
        prompt: "What is binary search tree? Explain breadth first search algorithm with proper example.",
        years: ["2019"],
        answer:
          "A Binary Search Tree (BST) is a binary tree data structure in which every node satisfies the BST property: the value of every node in its left subtree is smaller than the node's own value, and the value of every node in its right subtree is larger. This ordering allows searching, insertion, and deletion to be performed efficiently, typically in O(log n) time on average, by eliminating half of the remaining nodes at each comparison as the search moves down the tree, similar in spirit to binary search on a sorted array but applied to a linked, hierarchical structure rather than a flat one. Breadth First Search (BFS), by contrast, is a traversal technique applicable to trees and general graphs that visits nodes level by level, exploring all nodes at the current depth before moving to nodes at the next depth. BFS uses a queue to manage the order of visits and a visited marker to avoid revisiting nodes (essential for graphs, which may contain cycles, though trees do not). The BFS algorithm is: Step 1, enqueue the starting node (the root, for a tree) and mark it visited. Step 2, while the queue is not empty, dequeue the front node and process (visit) it. Step 3, enqueue all of its unvisited adjacent nodes (children, for a tree) and mark them visited. Step 4, repeat steps 2 and 3 until the queue is empty.\n\nConsider a binary tree with root 50, left child 30, right child 70, and 30's children 20 and 40. Starting BFS at 50: enqueue 50, queue=[50]. Dequeue 50, process it, enqueue its children 30 and 70, queue=[30,70]. Dequeue 30, process it, enqueue its children 20 and 40, queue=[70,20,40]. Dequeue 70, process it, it has no children, queue=[20,40]. Dequeue 20, process it, queue=[40]. Dequeue 40, process it, queue becomes empty and traversal ends. The visiting order produced is 50, 30, 70, 20, 40 — clearly organized level by level (root first, then both second-level nodes, then all third-level nodes).\n\nIn conclusion, while a BST defines how data is organized for efficient ordered access, BFS defines a traversal strategy that can be applied on top of that structure (or any tree/graph) whenever a level-order visit or shortest-hop-count search is required.",
      },
      {
        id: "pp-2019-a3",
        group: "A",
        marks: 12,
        topic: "Searching and Sorting",
        prompt: "Discuss the differences of searching and sorting. Explain quick sort method with proper illustrations.",
        years: ["2019"],
        answer:
          "Searching and sorting are two fundamental but distinct operations performed on data collections. Searching refers to the process of locating a specific element (the search key) within a collection of data, returning either its position or confirmation that it does not exist, and common techniques include sequential search and binary search. Sorting, on the other hand, refers to the process of rearranging all elements of a collection into a particular order, typically ascending or descending, and common techniques include bubble sort, selection sort, insertion sort, quick sort, and merge sort. The two also differ in their relationship to each other: efficient searching methods like binary search actually require the data to already be sorted, meaning sorting is frequently a prerequisite step performed before efficient searching can occur, whereas sorting itself does not require any prior searching. In terms of complexity, sequential search runs in O(n) while binary search on sorted data runs in O(log n); most comparison-based sorting algorithms, by contrast, require at least O(n log n) time in the average case because they must examine relationships between many pairs of elements to establish a full ordering. Quick Sort is a highly efficient, divide-and-conquer sorting algorithm that works as follows: Step 1, select a pivot element from the array (commonly the last, first, or a randomly chosen element). Step 2, partition the array so that all elements smaller than the pivot are moved to its left and all elements larger are moved to its right, placing the pivot itself in its final correct sorted position. Step 3, recursively apply the same process to the sub-array to the left of the pivot. Step 4, recursively apply the same process to the sub-array to the right of the pivot. Step 5, the recursion terminates when a sub-array has zero or one element, which is trivially sorted.\n\nAs an illustration, consider the array [9, 5, 2, 8, 3] with the last element 3 chosen as the pivot. Comparing each other element against 3: 9, 5, 8 are all greater and 2 is smaller, so after partitioning the array becomes [2, 3, 9, 5, 8] with 3 correctly fixed in position. The left sub-array [2] is already sorted (single element), and the right sub-array [9, 5, 8] is recursively pivoted on 8, giving smaller set {5} and larger set {9}, producing [5, 8, 9] after that recursive step. Combining everything yields the fully sorted array [2, 3, 5, 8, 9].\n\nIn conclusion, while searching and sorting solve different problems, they are deeply connected in practice, and Quick Sort's partition-based divide-and-conquer strategy makes it one of the fastest general-purpose sorting methods used in real systems.",
      },
      {
        id: "pp-2019-b1",
        group: "B",
        marks: 6,
        topic: "Stack",
        prompt: "Explain different operations of stack with algorithm.",
        years: ["2019"],
        answer:
          "A stack is a linear data structure that operates on the Last In First Out (LIFO) principle, where both insertion and deletion take place only at one end, called the top. The main operations supported by a stack are Push, Pop, Peek (or Top), and IsEmpty.\n\nThe Push operation inserts a new element onto the top of the stack: Step 1, check if the stack is full (top == MAX-1); if so, report overflow. Step 2, increment top by 1. Step 3, store the new value at stack[top]. The Pop operation removes and returns the element at the top of the stack: Step 1, check if the stack is empty (top == -1); if so, report underflow. Step 2, retrieve the value at stack[top]. Step 3, decrement top by 1 and return the retrieved value. The Peek (or Top) operation returns the value of the top element without removing it, which is useful when the caller needs to inspect the most recent item without disturbing the stack's state; it simply checks that the stack is not empty and returns stack[top] without modifying top. The IsEmpty operation checks whether top equals -1 and returns true or false accordingly, and is typically called before every Pop or Peek to avoid underflow errors.\n\nFor example, starting from an empty stack, Push(10) sets top=0 and stack=[10]; Push(20) sets top=1 and stack=[10,20]; Peek() would return 20 without changing top; and Pop() then removes and returns 20, resetting top back to 0. These four operations together form the complete Stack ADT interface used to implement higher-level applications such as expression evaluation, undo functionality, and function call management.",
      },
      {
        id: "pp-2019-b2",
        group: "B",
        marks: 6,
        topic: "Queue",
        prompt: "What is circular queue? Write an algorithm to delete an element in linear queue.",
        years: ["2019"],
        answer:
          "A circular queue is a variation of the standard linear queue in which the last position of the underlying array is logically connected back to the first position, forming a circle. This design allows the queue to reuse array slots that have been vacated by earlier dequeue operations, solving the 'false overflow' problem of a linear queue, where the queue is reported as full simply because rear has reached the last array index, even though slots at the beginning are actually free after prior dequeues. In a circular queue, the rear pointer advances using the formula rear = (rear + 1) % MAX, wrapping back to index 0 once it passes the last index, and the front pointer advances the same way, which together allow the queue to make full use of all allocated slots indefinitely. The algorithm to delete (dequeue) an element from a standard linear queue is: Step 1, check if the queue is empty by testing whether front == -1 or front > rear; if true, display 'Queue Underflow' and stop, since there is no element to remove. Step 2, retrieve the value stored at queue[front], since this is the element that has been waiting longest (FIFO order). Step 3, increment front by 1 to logically remove that element from the front of the queue. Step 4, if front becomes greater than rear after incrementing, reset both front and rear to -1, indicating the queue is now completely empty. Step 5, return the retrieved value to the caller.\n\nFor example, given a linear queue [10, 20, 30] with front=0 and rear=2, calling delete once retrieves 10, advances front to 1, and leaves 20 and 30 logically present even though slot 0 is now wasted — this wasted-slot behavior is precisely the motivation for using a circular queue instead.",
      },
      {
        id: "pp-2019-b3",
        group: "B",
        marks: 6,
        topic: "Queue",
        prompt: "Explain the advantages of circular queue over linear queue with illustrations.",
        years: ["2019"],
        answer:
          "A circular queue offers several important advantages over a plain linear queue, primarily centered around efficient memory utilization. The main advantage is elimination of the 'false overflow' problem: in a linear queue, once the rear pointer reaches the final index of the array, no further insertion is possible even if elements have been dequeued from the front and earlier slots are free, whereas a circular queue's rear pointer wraps around using rear = (rear + 1) % MAX, allowing it to reuse those freed slots. For illustration, consider a linear queue of size 5 that has had elements enqueued and dequeued until front=3 and rear=4, with slots 0, 1, and 2 now empty after earlier dequeues; a linear queue would report overflow on the next insertion because rear cannot exceed index 4, wasting three perfectly usable slots. A circular queue in the identical situation would instead compute the next rear as (4+1)%5=0, successfully inserting the new element into the now-free slot 0. The second advantage is more consistent and predictable memory usage over long-running systems, such as an operating system's task scheduler or a streaming data buffer, where a linear queue would eventually become unusable without periodically shifting all elements back to the start (an expensive O(n) operation), while a circular queue requires no such shifting at all. Third, circular queues make more efficient use of a fixed-size buffer, which matters in memory-constrained embedded systems where allocating extra array space just to work around a linear queue's false-overflow limitation is wasteful.\n\nIn conclusion, the circular queue's wrap-around indexing directly solves the linear queue's core inefficiency, making it the preferred structure whenever a fixed-size buffer must support continuous, long-term enqueue and dequeue operations.",
      },
      {
        id: "pp-2019-b4",
        group: "B",
        marks: 6,
        topic: "Linked List",
        prompt: "Write an algorithm to delete an element in the beginning of a singly linked list.",
        years: ["2019"],
        answer:
          "A singly linked list consists of nodes linked in sequence via next pointers, with a HEAD pointer marking the first node and the last node's next field set to NULL. Deleting the first node (the one HEAD currently points to) is the cheapest deletion operation possible on a singly linked list, since it requires no traversal at all.\n\nThe algorithm is: Step 1, check if the list is empty by testing whether HEAD is NULL; if so, there is nothing to delete, so report the error and stop. Step 2, create a temporary pointer and set it to HEAD, so the node about to be removed is not lost before it can be freed. Step 3, move HEAD forward to point to the second node in the list, i.e. set HEAD = HEAD->next; this single reassignment is what logically removes the first node from the list, since the list is now considered to start from the former second node. Step 4, free (deallocate) the memory of the temporary pointer, which held the original first node, to avoid a memory leak. Step 5, if desired, return the data value that was stored in the deleted node to the caller.\n\nFor example, given the list 5 → 10 → 15 → NULL with HEAD pointing to the node containing 5, deleting from the beginning sets a temporary pointer to that node, updates HEAD to point to the node containing 10, and frees the node that held 5, leaving the list as 10 → 15 → NULL. Because this operation only ever touches the head pointer and, at most, the second node, it runs in constant O(1) time regardless of the list's length, in sharp contrast to deletion at the end of a singly linked list, which requires a full O(n) traversal to locate the second-to-last node.",
      },
      {
        id: "pp-2019-b5",
        group: "B",
        marks: 6,
        topic: "Graph",
        prompt: "Explain adjacency matrix and list representations of a graph.",
        years: ["2019"],
        answer:
          "A graph can be represented in a computer's memory in two common ways: the adjacency matrix and the adjacency list, and the choice between them significantly affects both memory usage and the efficiency of various graph operations. An adjacency matrix represents a graph with V vertices as a V×V two-dimensional array, where the cell at row i and column j is set to 1 (or the edge weight, for a weighted graph) if there is an edge between vertex i and vertex j, and 0 (or infinity) otherwise; for an undirected graph, this matrix is always symmetric, since an edge between i and j implies an edge between j and i. The chief advantage of the adjacency matrix is that checking whether an edge exists between any two given vertices takes constant O(1) time, simply by inspecting the corresponding cell, but its major drawback is that it always consumes O(V²) space regardless of how many edges actually exist, which is wasteful for sparse graphs that have relatively few edges compared to the maximum possible. An adjacency list, by contrast, represents a graph as an array (or map) of V lists, one per vertex, where the list for vertex i contains all vertices directly adjacent to i (its neighbors); for a weighted graph, each list entry additionally stores the weight of that edge. The adjacency list's main advantage is space efficiency, using only O(V + E) space where E is the actual number of edges, which is significantly smaller than O(V²) for sparse graphs, though checking whether a specific edge exists now requires scanning a list rather than a single array lookup, making it slightly slower for that particular query.\n\nFor example, a graph with 4 vertices A, B, C, D and edges A-B and A-C would be represented as an adjacency matrix with 1s at positions (A,B), (B,A), (A,C), and (C,A), and 0s elsewhere, while the equivalent adjacency list would simply store A → [B, C], B → [A], C → [A], D → [] (empty, since D has no edges).\n\nIn conclusion, adjacency matrices are preferred for dense graphs and frequent edge-existence queries, while adjacency lists are preferred for sparse graphs and algorithms like DFS and BFS that need to efficiently enumerate a vertex's neighbors.",
      },
      {
        id: "pp-2019-b6",
        group: "B",
        marks: 6,
        topic: "Searching and Sorting",
        prompt: "Discuss merge sort method with example.",
        years: ["2019"],
        answer:
          "Merge Sort is a stable, divide-and-conquer sorting algorithm that guarantees O(n log n) time complexity in the best, average, and worst cases, making it especially reliable for large datasets where a guaranteed performance bound matters more than raw average-case speed.\n\nThe algorithm works in two clear phases. In the Divide phase: Step 1, if the array has more than one element, find the middle index and split the array into a left half and a right half. Step 2, recursively apply the same division to the left half. Step 3, recursively apply the same division to the right half. Step 4, this recursive splitting continues until each sub-array contains only a single element, which is trivially considered sorted. In the Combine (Merge) phase: Step 1, compare the front elements of the two sorted sub-arrays being merged. Step 2, copy the smaller of the two into the result array and advance that sub-array's pointer. Step 3, repeat this comparison-and-copy process until one sub-array is exhausted. Step 4, copy any remaining elements from the other, non-exhausted sub-array directly into the result, since they are already guaranteed to be in sorted order and larger than everything already merged.\n\nAs an example, consider the array [38, 27, 43, 10]. Dividing it splits it into [38, 27] and [43, 10]; dividing [38, 27] further gives [38] and [27], and dividing [43, 10] gives [43] and [10], all single-element sub-arrays now trivially sorted. Merging [38] and [27] compares them and produces [27, 38]; merging [43] and [10] compares them and produces [10, 43]. Finally, merging [27, 38] and [10, 43]: compare 27 and 10, copy 10 (smaller) first; compare 27 and 43, copy 27; compare 38 and 43, copy 38; only 43 remains in the right sub-array, so copy it directly, producing the fully sorted result [10, 27, 38, 43]. Because Merge Sort always splits evenly and always performs a linear-time merge, its performance does not degrade on already-sorted or reverse-sorted input the way Quick Sort's can, though this reliability comes at the cost of requiring O(n) additional temporary storage for the merge step.",
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
          "Big O notation, written O(f(n)), is a mathematical notation used in algorithm analysis to describe the asymptotic upper bound of an algorithm's running time or space requirement as the input size n grows arbitrarily large, effectively capturing the algorithm's worst-case performance. It deliberately ignores constant factors and lower-order terms, focusing only on the dominant growth trend, since for large enough n the dominant term determines practical performance far more than implementation-specific constants.\n\nFor example, an algorithm that performs exactly 3n² + 5n + 2 basic operations is described as O(n²), because as n grows large the n² term dominates the other two. Common Big O classes, ordered from fastest to slowest growth, include O(1) constant time, O(log n) logarithmic time (as in binary search), O(n) linear time (as in sequential search), O(n log n) as seen in efficient sorts like Merge Sort, and O(n²) as seen in simple sorts like Bubble Sort. Big O notation gives programmers a standard, hardware-independent way to compare algorithms and predict how they will scale before ever running them on real, large input data.",
      },
      {
        id: "pp-2019-c3",
        group: "C",
        marks: 3,
        topic: "Mixed/Short Notes",
        prompt: "Short note: DFS (Depth First Search).",
        years: ["2019"],
        answer:
          "Depth First Search (DFS) is a graph and tree traversal algorithm that explores as deeply as possible along each branch before backtracking to explore other branches, in contrast to BFS which explores level by level. DFS is typically implemented either recursively, relying on the program's own call stack, or iteratively using an explicit stack data structure, along with a visited marker for each node to avoid infinite loops in graphs containing cycles. The algorithm starts at a chosen vertex, marks it visited, and then recursively (or via the stack) visits an unvisited neighbor, continuing to go deeper until it reaches a vertex with no unvisited neighbors, at which point it backtracks to the most recent vertex that still has unexplored neighbors and continues from there.\n\nFor example, in a graph where A connects to B and C, and B connects to D, a DFS starting at A would visit A, then move deep into B, then deeper into D, and only after exhausting that branch would it backtrack and visit C. DFS is commonly used for tasks such as detecting cycles in a graph, finding connected components, topological sorting, and solving maze or puzzle problems where exploring one path fully before trying alternatives is a natural strategy.",
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
          "Dijkstra's Algorithm is a greedy algorithm used to find the shortest path from a single source vertex to every other vertex in a weighted graph, provided all edge weights are non-negative. It is one of the most widely applied algorithms in computer networking and mapping software, forming the theoretical basis for routing protocols and GPS route calculation. The algorithm maintains a distance value for every vertex (initially infinity, except zero for the source) and a set of 'finalized' vertices whose shortest distance is already known to be correct. It proceeds as: Step 1, set the distance of the source vertex to 0 and all other vertices to infinity, and mark all vertices as unvisited. Step 2, from among the unvisited vertices, select the one with the smallest current distance value. Step 3, for each unvisited neighbor of that vertex, compute the distance through the current vertex (current vertex's distance plus the edge weight); if this computed value is smaller than the neighbor's currently stored distance, update the neighbor's distance to this smaller value — this update step is called relaxation. Step 4, mark the current vertex as visited (finalized), meaning its shortest distance from the source will not change again. Step 5, repeat steps 2 through 4 until every vertex has been visited.\n\nAs an example, consider a graph with vertices A (source), B, C, D and edges A-B (weight 6), A-C (weight 2), C-B (weight 1), B-D (weight 1), C-D (weight 5). Initial distances: A=0, B=∞, C=∞, D=∞. Processing A first (distance 0), relax its edges: B becomes 6, C becomes 2. The next smallest unvisited distance is C (2); relaxing C's edges gives a new candidate for B of 2+1=3, which is smaller than the existing 6, so B is updated to 3, and D is updated to 2+5=7. The next smallest is B (3); relaxing B's edge to D gives 3+1=4, smaller than the existing 7, so D is updated to 4. Finally D (4) is processed with no unvisited neighbors remaining, and the algorithm terminates. The final shortest distances from A are B=3, C=2, D=4, revealing that the true shortest path to B is A→C→B (total 3), not the direct edge A→B (which would cost 6).\n\nIn conclusion, Dijkstra's algorithm's greedy strategy of always finalizing the closest remaining vertex, combined with the relaxation step at every iteration, guarantees correct shortest-path results for any graph with non-negative weights.",
      },
      {
        id: "pp-2018-a2",
        group: "A",
        marks: 12,
        topic: "Tree",
        prompt: "Explain different types of tree. Explain different tree traversal algorithm with proper example.",
        years: ["2018"],
        answer:
          "A tree is a non-linear, hierarchical data structure made of nodes connected by edges, with a single root node at the top and no cycles, such that every node except the root has exactly one parent. Several important types of trees exist for different purposes. A General Tree allows any node to have any number of children. A Binary Tree restricts every node to at most two children, conventionally called the left child and right child. A Binary Search Tree (BST) is a binary tree that additionally satisfies the ordering property that left-subtree values are smaller and right-subtree values are larger than each node. A Balanced Tree (such as an AVL tree) is a binary tree that keeps the height difference between left and right subtrees small after every insertion or deletion, guaranteeing O(log n) operations even in the worst case. A Complete Binary Tree is one where every level is fully filled except possibly the last, which is filled left to right, a property commonly used in heap implementations. Tree traversal refers to the systematic process of visiting every node in a tree exactly once, and for binary trees there are three standard depth-first traversal orders. In-order traversal visits the left subtree, then the root, then the right subtree, and for a BST specifically this produces the node values in sorted ascending order — the algorithm is: recursively traverse the left subtree, visit the root, then recursively traverse the right subtree. Pre-order traversal visits the root first, then the left subtree, then the right subtree, and is used when a copy of the tree's structure needs to be created, since the root is always processed before its children. Post-order traversal visits the left subtree, then the right subtree, then the root last, and is used when deleting a tree or evaluating an expression tree, since a node's children must be fully processed before the node itself.\n\nAs an example, consider a binary tree with root 20, left child 10, right child 30, and 10's children 5 and 15. In-order traversal produces 5, 10, 15, 20, 30 (sorted order, confirming BST property). Pre-order traversal produces 20, 10, 5, 15, 30 (root visited before its children at every level). Post-order traversal produces 5, 15, 10, 30, 20 (root visited only after both subtrees are fully processed).\n\nIn conclusion, the choice of tree type determines what guarantees the structure offers, while the choice of traversal order determines in what sequence its data is processed, and both are foundational to nearly every tree-based algorithm question on this exam.",
      },
      {
        id: "pp-2018-a3",
        group: "A",
        marks: 12,
        topic: "Searching and Sorting",
        prompt: "Differentiate between searching and sorting. Explain merge sort method with proper illustrations.",
        years: ["2018"],
        answer:
          "Searching and sorting are two of the most fundamental operations performed on stored data, but they solve fundamentally different problems. Searching is the process of locating a specific target value within a collection of data and reporting its position, or confirming its absence, and common approaches include sequential search, which checks every element one at a time in O(n) time, and binary search, which repeatedly halves a sorted collection to achieve O(log n) time. Sorting is the process of rearranging all elements of a collection into a specified order, usually ascending or descending, and common approaches range from simple O(n²) methods like bubble, selection, and insertion sort, to efficient O(n log n) methods like merge sort, quick sort, and heap sort. A key relationship between the two is that sorting is frequently performed as a preparatory step to enable faster searching afterward, since binary search's O(log n) efficiency is only possible on already-sorted data; without sorting first, only the slower sequential search is applicable. Another distinction is in their output: searching returns a position (or a boolean found/not-found result) without altering the original data, whereas sorting produces a rearranged version of the entire collection. Merge Sort is a stable, divide-and-conquer sorting algorithm guaranteeing O(n log n) performance in all cases. It works as follows: Step 1 (Divide), split the array into two halves at the midpoint. Step 2, recursively divide each half further until each sub-array contains a single element. Step 3 (Conquer/Merge), merge pairs of sorted sub-arrays back together by repeatedly comparing their front elements and copying the smaller one into the output, until both sub-arrays are fully consumed.\n\nAs an illustration, consider the array [12, 4, 7, 9]. It is divided into [12, 4] and [7, 9], then further into [12], [4], [7], [9], each trivially sorted alone. Merging [12] and [4] compares them and yields [4, 12]; merging [7] and [9] yields [7, 9]. The final merge compares 4 and 7 (copy 4), then 12 and 7 (copy 7), then 12 and 9 (copy 9), then only 12 remains and is copied directly, producing the fully sorted array [4, 7, 9, 12].\n\nIn conclusion, while searching answers 'where is this value?' and sorting answers 'what order should these values be in?', the two are closely linked in practice, with efficient searching very often depending on sorting having already been performed.",
      },
      {
        id: "pp-2018-b1",
        group: "B",
        marks: 6,
        topic: "Stack",
        prompt: "Explain stack with its different operations with example.",
        years: ["2018"],
        answer:
          "A stack is a linear data structure that stores a collection of elements and permits insertion and deletion only from one end, called the top, following the Last In First Out (LIFO) principle — the most recently added element is always the first one removed, much like a physical stack of plates where you can only add or remove from the top. The core operations of a stack are Push, which inserts a new element onto the top after first checking for overflow (top == MAX-1), incrementing top, and storing the value at that position; Pop, which removes and returns the topmost element after first checking for underflow (top == -1), retrieving the value at stack[top], and then decrementing top; Peek (or Top), which returns the value of the topmost element without removing it, useful for inspecting the next item to be popped; and IsEmpty, which checks whether top equals -1 to determine if the stack currently holds any elements.\n\nAs an example, starting with an empty stack of capacity 4 (top = -1), Push(5) makes top=0 and stack=[5]; Push(15) makes top=1 and stack=[5,15]; Push(25) makes top=2 and stack=[5,15,25]. Calling Peek() at this point returns 25 without changing the stack. Calling Pop() then removes and returns 25, restoring top to 1 and leaving stack=[5,15]. This LIFO behavior makes stacks the natural choice for problems such as reversing a sequence, checking balanced parentheses in an expression, implementing undo functionality in software, converting and evaluating infix/postfix/prefix expressions, and managing function call returns during program execution.",
      },
      {
        id: "pp-2018-b2",
        group: "B",
        marks: 6,
        topic: "Linked List",
        prompt: "Explain linked list. Write an algorithm to delete an element from the middle of doubly linked list.",
        years: ["2018"],
        answer:
          "A linked list is a linear data structure composed of individual nodes, where each node stores a data value along with one or more pointers linking it to other nodes, allowing the list to grow or shrink dynamically at runtime without requiring contiguous memory, unlike an array. A doubly linked list specifically gives each node two pointers: next, referencing the following node, and prev, referencing the preceding node, which enables traversal in both directions and allows a node to be deleted in constant time once a pointer to it is known, since its neighbors are both directly reachable. The algorithm to delete a given node from the middle of a doubly linked list (i.e., a node that is neither the head nor the tail) is: Step 1, given a pointer to the node to be deleted, first check that it is not NULL and that the list is not empty; if it is, there is nothing to delete. Step 2, access the node's prev pointer to reach its predecessor, and set that predecessor's next pointer to the node's own next pointer, effectively bypassing the node from the forward direction. Step 3, access the node's next pointer to reach its successor, and set that successor's prev pointer back to the node's own prev pointer, effectively bypassing the node from the backward direction as well. Step 4, once both neighboring nodes have been relinked around it, free (deallocate) the memory occupied by the node being deleted.\n\nFor example, given the doubly linked list 10 ⇄ 20 ⇄ 30 ⇄ 40, deleting the middle node 20 involves setting node 10's next pointer to node 30 (bypassing 20 forward), setting node 30's prev pointer to node 10 (bypassing 20 backward), and then freeing node 20, leaving the list as 10 ⇄ 30 ⇄ 40. Because both the predecessor and successor pointers are directly available from the node itself in a doubly linked list, this deletion requires no separate traversal to locate the predecessor, unlike in a singly linked list, where deleting a middle node requires first traversing from the head to explicitly find and update the previous node's next pointer.",
      },
      {
        id: "pp-2018-b3",
        group: "B",
        marks: 6,
        topic: "Queue",
        prompt: "What is circular queue? Explain the advantages of this queue with example.",
        years: ["2018"],
        answer:
          "A circular queue is an extension of the standard linear queue in which the array used to store elements is treated as circular, meaning the position immediately after the last index wraps back around to index 0. This is achieved by computing both the front and rear pointers using modulo arithmetic: rear = (rear + 1) % MAX for insertion and front = (front + 1) % MAX for deletion, where MAX is the array's capacity. The key advantage of this design is efficient reuse of memory: in a plain linear queue, once rear reaches the final index, no further elements can be inserted even if earlier elements have been dequeued and their slots are now free, a problem sometimes called 'false overflow.' The circular queue eliminates this entirely, since wrapping around allows those freed slots at the beginning of the array to be reused immediately.\n\nFor example, consider a circular queue of size 4 that currently holds elements at indices 2 and 3 (front=2, rear=3) after two earlier elements at indices 0 and 1 have already been dequeued. A linear queue in this state would report overflow on the next insertion, since rear=3 is already the last valid index. A circular queue, however, computes the next rear as (3+1)%4=0, successfully placing the new element into the now-free index 0. A second advantage is that circular queues avoid the need to periodically shift all remaining elements back toward the start of the array to reclaim space, an expensive O(n) operation that would otherwise be required to keep a linear queue usable over a long run. This makes circular queues especially valuable in systems like CPU task scheduling, print spoolers, and streaming data buffers, where the queue is expected to be used continuously over an extended period rather than filled and emptied only once.",
      },
      {
        id: "pp-2018-b4",
        group: "B",
        marks: 6,
        topic: "Algorithm Efficiency",
        prompt: "Explain the importance of a Big O notation. Explain the usage of theta notation.",
        years: ["2018"],
        answer:
          "Big O notation is important because it provides a standardized, hardware-independent way to describe how an algorithm's running time or memory usage grows as the size of its input increases, allowing programmers and analysts to compare the scalability of different algorithms before ever implementing or running them on real data. Without Big O, comparing two algorithms would require running both on identical hardware with identical inputs, which is impractical for predicting behavior on inputs far larger than what can be tested directly; Big O instead captures the essential growth trend (linear, logarithmic, quadratic, and so on) that determines how an algorithm will behave as data scales into the millions or billions of records, which matters enormously in real applications like database query engines and search platforms where input size is unpredictable and often very large. Big O specifically describes the asymptotic upper bound, representing the worst-case scenario, so an algorithm described as O(n²) is guaranteed to never perform worse than proportional to n² operations, though it may sometimes do better. Theta (Θ) notation, in contrast, describes a tight bound on an algorithm's growth rate, meaning it captures both the upper and lower bounds simultaneously, and is used when an algorithm's best-case and worst-case performance are asymptotically the same, giving a precise characterization of its typical behavior rather than just a pessimistic ceiling.\n\nFor example, Merge Sort is described as Θ(n log n) because it always performs proportional to n log n comparisons regardless of the initial arrangement of the input data, unlike Quick Sort, whose worst case is O(n²) but whose typical/average behavior is better described separately. In practice, Big O is used far more often in casual discussion because worst-case guarantees are usually what matters most for reliability, but Theta notation is the more mathematically precise tool when an algorithm's behavior does not vary meaningfully between its best and worst cases.",
      },
      {
        id: "pp-2018-b5",
        group: "B",
        marks: 6,
        topic: "Graph",
        prompt: "Discuss different types of graphs. What is list representation of a given graph?",
        years: ["2018"],
        answer:
          "A graph is a non-linear data structure consisting of a set of vertices connected by a set of edges, and graphs can be classified into several types based on their properties. A Directed Graph (digraph) has edges with a specific direction, meaning an edge from vertex A to vertex B does not imply an edge from B to A, useful for modeling one-way relationships such as a webpage linking to another. An Undirected Graph has edges with no direction, meaning a connection between A and B is mutual and can be traversed either way, useful for modeling symmetric relationships such as a friendship or a two-way road. A Weighted Graph assigns a numeric cost or weight to each edge, such as distance or travel time, useful for problems like shortest-path computation, whereas an Unweighted Graph treats all edges as equal, only representing whether a connection exists. A Cyclic Graph contains at least one cycle, a path that starts and ends at the same vertex, while an Acyclic Graph contains no cycles at all — a special and very important case being a Directed Acyclic Graph (DAG), commonly used to represent task scheduling and dependency ordering. A Connected Graph has a path between every pair of vertices, while a Disconnected Graph has at least one pair of vertices with no path between them. The list representation of a graph, called an adjacency list, represents the graph as an array or collection of V lists, one for each vertex, where the list belonging to vertex i contains all vertices directly connected to i by an edge (and, for a weighted graph, the corresponding edge weight alongside each neighbor).\n\nFor example, a graph with vertices A, B, C where A connects to both B and C, and B connects to C, would have the adjacency list A → [B, C], B → [C], C → [] (assuming a directed graph) or A → [B, C], B → [A, C], C → [A, B] (if undirected). This representation is more space-efficient than an adjacency matrix for sparse graphs, using only O(V + E) space, and is the preferred representation for traversal algorithms like DFS and BFS that need to efficiently enumerate a vertex's neighbors one at a time.",
      },
      {
        id: "pp-2018-b6",
        group: "B",
        marks: 6,
        topic: "Searching and Sorting",
        prompt: "Discuss bubble sort with example.",
        years: ["2018"],
        answer:
          "Bubble Sort is one of the simplest sorting algorithms, working by repeatedly comparing each pair of adjacent elements in the array and swapping them if they are found in the wrong order, causing the largest unsorted element to progressively 'bubble up' to its correct position at the end of the array with each complete pass.\n\nThe algorithm proceeds as: Step 1, starting from the beginning of the array, compare each pair of adjacent elements, arr[i] and arr[i+1]. Step 2, if arr[i] is greater than arr[i+1], swap them so the smaller value comes first. Step 3, continue this comparison across the entire unsorted portion of the array to complete one full pass; after each pass, the largest remaining unsorted element is guaranteed to have moved into its correct final position at the end. Step 4, repeat the passes, each time considering one fewer element at the end (since it is now sorted), until a complete pass finishes with no swaps performed, which signals the array is fully sorted and the algorithm can terminate early.\n\nAs an example, consider the array [4, 2, 7, 1]. In Pass 1: compare 4 and 2 (swap, → [2,4,7,1]), compare 4 and 7 (no swap), compare 7 and 1 (swap, → [2,4,1,7]); after Pass 1, 7 is correctly placed at the end. In Pass 2: compare 2 and 4 (no swap), compare 4 and 1 (swap, → [2,1,4,7]); after Pass 2, 4 is correctly placed. In Pass 3: compare 2 and 1 (swap, → [1,2,4,7]); the array is now fully sorted as [1, 2, 4, 7]. Bubble Sort's time complexity is O(n²) in both the average and worst case, since it may require close to n passes with close to n comparisons each, but with an early-exit optimization (stopping once a pass makes no swaps), its best case on an already-sorted array improves to O(n). Despite its inefficiency on large datasets compared to Merge Sort or Quick Sort, Bubble Sort remains popular in introductory teaching because its logic is easy to trace and verify by hand.",
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
          "Insertion Sort is a simple sorting algorithm that builds the final sorted array one element at a time, working similarly to how a person sorts playing cards in their hand. It works by taking each element from the unsorted portion of the array, starting from the second element, and inserting it into its correct position among the already-sorted elements to its left, shifting larger elements one position to the right to make room.\n\nFor example, sorting [5, 2, 4, 1]: starting with 5 as trivially sorted, 2 is compared to 5, found smaller, and inserted before it, giving [2, 5, 4, 1]; then 4 is compared to 5 (smaller, shift 5 right) and to 2 (larger, stop), giving [2, 4, 5, 1]; then 1 is compared against 5, 4, and 2 in turn, shifting each right, and inserted at the front, giving the fully sorted [1, 2, 4, 5]. Insertion Sort has a worst-case time complexity of O(n²) for reverse-sorted input, but performs very efficiently, close to O(n), on data that is already nearly sorted, which makes it a good practical choice for small or mostly-sorted datasets.",
      },
      {
        id: "pp-2018-c3",
        group: "C",
        marks: 3,
        topic: "Mixed/Short Notes",
        prompt: "Short note: Queue operations.",
        years: ["2018"],
        answer:
          "A queue supports several core operations, all working around the First In First Out (FIFO) principle.\n\nThe Enqueue operation inserts a new element at the rear of the queue, after first checking that the queue is not already full, and then advancing the rear pointer before storing the value. The Dequeue operation removes and returns the element currently at the front of the queue, after first checking that the queue is not empty, and then advancing the front pointer to the next element. The Peek (or Front) operation returns the value of the front element without removing it, allowing the next element to be inspected before committing to a dequeue. The IsEmpty operation checks whether the queue currently contains any elements, typically by testing whether front equals -1 or front exceeds rear, and IsFull checks whether the queue has reached its maximum capacity. Together, these operations implement the queue's strict ordering guarantee, which makes queues suitable for tasks such as managing print jobs, scheduling processes, and buffering data between systems operating at different speeds.",
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
          "A Minimum Spanning Tree (MST) of a connected, weighted, undirected graph is a subset of the graph's edges that connects all of its vertices together into a single tree — meaning it is both connected and free of cycles — while minimizing the total sum of the selected edge weights among all possible spanning trees. For a graph with V vertices, any spanning tree, minimum or otherwise, contains exactly V-1 edges. MSTs have direct real-world value in problems like designing the cheapest possible network of roads, pipelines, or cables that connects a given set of locations without redundant connections. Kruskal's Algorithm is a greedy method for constructing an MST that works by considering edges in increasing order of weight, regardless of which vertices they currently connect to the growing structure. It proceeds as: Step 1, list all edges of the graph and sort them in ascending order of weight. Step 2, initialize an empty MST edge set, and treat each vertex as its own separate component (commonly tracked with a Union-Find/Disjoint-Set data structure). Step 3, examine the edges in sorted order, one at a time; for each edge, check whether its two endpoint vertices currently belong to different components. Step 4, if they belong to different components, add this edge to the MST and merge the two components into one, since adding this edge cannot create a cycle. Step 5, if they already belong to the same component, discard this edge, since adding it would create a cycle. Step 6, repeat steps 3 through 5 until the MST contains exactly V-1 edges.\n\nAs an example, consider a graph with vertices A, B, C, D and edges A-B (1), B-C (4), A-C (3), C-D (2), B-D (5). Sorting edges by weight gives the order A-B (1), C-D (2), A-C (3), B-C (4), B-D (5). Processing A-B (1) first: A and B are in different components, so it is added; components are now {A,B} and {C} and {D}. Processing C-D (2) next: C and D are in different components, so it is added; components are now {A,B} and {C,D}. Processing A-C (3) next: A (in {A,B}) and C (in {C,D}) are in different components, so it is added, merging everything into {A,B,C,D}. At this point the MST already has 3 edges connecting all 4 vertices, so the algorithm can stop; the remaining edges B-C (4) and B-D (5) would both be rejected as they would form cycles. The resulting MST consists of edges A-B, C-D, A-C with total weight 1+2+3=6.\n\nIn conclusion, Kruskal's algorithm's edge-centric greedy strategy, combined with cycle detection via Union-Find, guarantees a correct minimum spanning tree and is particularly efficient for sparse graphs where the number of edges is small relative to the number of possible edges.",
      },
      {
        id: "pp-2017-a2",
        group: "A",
        marks: 12,
        topic: "Tree",
        prompt: "What is binary tree? Explain binary tree traversal method with illustrations.",
        years: ["2017"],
        answer:
          "A binary tree is a hierarchical, non-linear data structure in which each node has at most two children, conventionally referred to as the left child and the right child, and exactly one node designated as the root that has no parent. Every node other than the root has exactly one parent, and a node with no children is called a leaf node. Binary trees form the basis for many more specialized structures, including Binary Search Trees, heaps, and expression trees, and are used in applications ranging from organizing hierarchical data (like a file system) to representing arithmetic expressions and enabling efficient searching. Traversing a binary tree means visiting every node in the tree exactly once in a systematic order, and there are three standard depth-first traversal methods, each defined by the relative order in which the root is visited compared to its left and right subtrees. In-order traversal follows the pattern Left subtree, Root, Right subtree: the algorithm recursively traverses the entire left subtree first, then visits the root node, then recursively traverses the entire right subtree; for a Binary Search Tree specifically, this produces the node values in strictly ascending sorted order, which is why in-order traversal is the standard way to read out sorted data from a BST. Pre-order traversal follows the pattern Root, Left subtree, Right subtree: the root is visited first, before either subtree is explored, which makes pre-order useful for creating a copy of a tree's structure, since a parent must be recreated before its children can be attached to it. Post-order traversal follows the pattern Left subtree, Right subtree, Root: both subtrees are fully visited before the root itself, which makes post-order the natural choice for safely deleting a tree (children must be freed before their parent) or evaluating an expression tree (operands must be evaluated before the operator that combines them).\n\nAs an illustration, consider a binary tree with root 8, left child 3, right child 10, and 3's own children 1 and 6. In-order traversal produces 1, 3, 6, 8, 10 (fully sorted order). Pre-order traversal produces 8, 3, 1, 6, 10 (root always appears before its subtrees). Post-order traversal produces 1, 6, 3, 10, 8 (root always appears last, after both subtrees are completely processed).\n\nIn conclusion, the three traversal orders provide complementary views of the same underlying tree structure, and selecting the correct one is essential depending on whether the goal is sorted output, structural copying, or safe deletion/evaluation.",
      },
      {
        id: "pp-2017-a3",
        group: "A",
        marks: 12,
        topic: "Searching and Sorting",
        prompt: "Justify the need of sorting. Discuss selection sort and merge sort with example.",
        years: ["2017"],
        answer:
          "Sorting is one of the most fundamental operations in computer science, and its necessity can be justified on several grounds. First, sorted data dramatically improves search efficiency: binary search on a sorted array runs in O(log n) time, compared to O(n) for sequential search on unsorted data, which is a massive difference when searching large datasets repeatedly, such as looking up records in a database. Second, many other algorithms depend on sorted input as a prerequisite, including algorithms for finding duplicates, computing medians, merging datasets, and detecting the closest pair of points, all of which become simpler or more efficient once the data is ordered. Third, sorted output is often directly useful to end users, such as displaying search results ranked by relevance, listing files alphabetically, or showing exam results ranked from highest to lowest score, so sorting is frequently a user-facing necessity, not just an internal optimization. Selection Sort is a simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted portion of the array and moving it to the front of that unsorted portion, effectively building the sorted section one element at a time from the front. Its algorithm is: Step 1, for each position i from the start of the array to the second-to-last position, search the remaining unsorted sub-array (from i to the end) to find the index of the minimum element. Step 2, swap that minimum element with the element currently at position i. Step 3, move to the next position and repeat, so the sorted portion at the front grows by one element each pass.\n\nFor example, sorting [29, 10, 14, 37]: Pass 1 finds the minimum of the whole array, 10, and swaps it into position 0, giving [10, 29, 14, 37]. Pass 2 finds the minimum of the remaining unsorted portion [29, 14, 37], which is 14, and swaps it into position 1, giving [10, 14, 29, 37]. Pass 3 finds the minimum of [29, 37], which is already 29, so no swap is needed, giving the final sorted array [10, 14, 29, 37]. Selection Sort always performs O(n²) comparisons regardless of the initial order of the data, but it performs at most n-1 swaps total, which can be advantageous when the cost of swapping elements is high. Merge Sort, by contrast, is a divide-and-conquer algorithm that recursively splits the array in half until single elements remain, then merges sorted halves back together by repeatedly comparing their front elements, guaranteeing O(n log n) performance in every case, unlike Selection Sort's consistent O(n²).\n\nIn conclusion, while Selection Sort is easy to understand and minimizes swaps, Merge Sort's superior asymptotic performance makes it the far better choice for sorting large datasets efficiently.",
      },
      {
        id: "pp-2017-b1",
        group: "B",
        marks: 6,
        topic: "Introduction",
        prompt: "What is meant by data structure? Define its types with example.",
        years: ["2017"],
        answer:
          "A data structure is a specialized, systematic way of organizing, storing, and managing data in a computer's memory so that it can be accessed, searched, and modified efficiently for a given purpose. Choosing the right data structure directly affects how fast and how much memory a program uses, since different structures offer different trade-offs for operations like insertion, deletion, searching, and traversal. Data structures are broadly classified into two types: linear and non-linear. Linear data structures arrange their elements sequentially, one after another, such that each element (except the first and last) has exactly one predecessor and one successor; examples include Arrays, which store elements in contiguous memory with fixed size and constant-time indexed access; Stacks, which restrict insertion and deletion to one end following LIFO order; Queues, which restrict insertion to the rear and deletion to the front following FIFO order; and Linked Lists, which store elements as nodes connected via pointers, allowing dynamic resizing. Non-linear data structures, by contrast, arrange elements in a hierarchical or interconnected fashion rather than a strict sequence, so an element may have multiple 'next' elements; examples include Trees, which organize data hierarchically with a root and parent-child relationships (used for representing file systems or organizational charts), and Graphs, which represent arbitrary networks of vertices connected by edges (used for representing road maps or social networks).\n\nFor example, an array is well suited for storing a fixed list of student roll numbers with fast indexed access, while a graph is well suited for representing a network of cities connected by roads with varying distances.\n\nIn conclusion, selecting an appropriate data structure for a given problem is one of the most important decisions in efficient program design.",
      },
      {
        id: "pp-2017-b2",
        group: "B",
        marks: 6,
        topic: "Stack",
        prompt: "Write down algorithm for evaluating postfix expression and illustrate it with suitable example.",
        years: ["2017"],
        answer:
          "A postfix expression (also called Reverse Polish Notation) places each operator immediately after its two operands, such as '3 4 +' instead of the infix form '3 + 4'; this notation eliminates the need for parentheses or operator precedence rules, making it especially convenient for a computer to evaluate directly using a stack. The algorithm for evaluating a postfix expression is: Step 1, create an empty stack to hold operand values. Step 2, scan the postfix expression from left to right, one token (symbol) at a time. Step 3, if the current token is an operand (a number), push it onto the stack. Step 4, if the current token is an operator (+, -, *, /), pop the top two values off the stack — the first pop is the right operand and the second pop is the left operand — apply the operator to them in the correct order (left operand operator right operand), and push the resulting value back onto the stack. Step 5, after the entire expression has been scanned, the single value remaining on the stack is the final result of the expression.\n\nAs an illustration, consider evaluating the postfix expression '5 3 4 + 2 *'. Scanning left to right: '5' is an operand, push it, stack=[5]. '3' is an operand, push it, stack=[5,3]. '4' is an operand, push it, stack=[5,3,4]. '+' is an operator, so pop 4 (right operand) and 3 (left operand), compute 3+4=7, push 7, stack=[5,7]. '2' is an operand, push it, stack=[5,7,2]. '*' is an operator, so pop 2 (right operand) and 7 (left operand), compute 7*2=14, push 14, stack=[5,14]. At this point the whole expression has not actually finished — re-reading the tokens, the expression '5 3 4 + 2 *' evaluates the sub-result 14 but the operand 5 pushed at the very start is still sitting underneath it on the stack, which happens because this particular expression is not fully reducible to a single value the way a textbook postfix expression normally is; a well-formed postfix expression always has exactly one fewer operator than operand so that every operator consumes two values and exactly one final value remains. Using the corrected, well-formed expression '5 3 4 + 2 * +' instead: after reaching stack=[5,14] as traced above, the final token '+' is an operator, so pop 14 (right operand) and 5 (left operand), compute 5+14=19, and push 19, leaving stack=[19]. The expression is now fully scanned and the single remaining value, 19, is the final result — this matches the infix equivalent 5 + ((3+4) * 2) = 5 + 14 = 19.\n\nThis stack-based method runs in O(n) time for an expression with n tokens, since each token is processed exactly once with only constant-time stack operations.",
      },
      {
        id: "pp-2017-b3",
        group: "B",
        marks: 6,
        topic: "Stack",
        prompt: "What is stack? Define stack operations. Write down algorithm for push and pop operations of stack.",
        years: ["2017"],
        answer:
          "A stack is a linear data structure that stores elements in Last In First Out (LIFO) order, meaning the most recently inserted element is always the first one to be removed, with all insertions and deletions restricted to a single end called the top of the stack. A stack is typically implemented using an array with an accompanying integer variable, top, that tracks the index of the current topmost element, initialized to -1 to represent an empty stack. The two fundamental stack operations are Push, which inserts a new element onto the top of the stack, and Pop, which removes and returns the element currently at the top.\n\nThe Push algorithm is: Step 1, check whether the stack is full by testing if top equals MAX-1 (where MAX is the array's capacity); if true, display a 'Stack Overflow' message and stop, since there is no room to insert further. Step 2, if the stack is not full, increment top by 1. Step 3, store the new value at position stack[top], completing the insertion. The Pop algorithm is: Step 1, check whether the stack is empty by testing if top equals -1; if true, display a 'Stack Underflow' message and stop, since there is no element to remove. Step 2, if the stack is not empty, retrieve the value currently stored at stack[top]. Step 3, decrement top by 1, logically removing that element from the stack. Step 4, return the retrieved value to the caller.\n\nFor example, starting with an empty stack of size 3 (top=-1), Push(7) checks that top is not MAX-1, increments top to 0, and stores 7, giving stack=[7]. Push(9) increments top to 1 and stores 9, giving stack=[7,9]. Calling Pop() now checks that top is not -1, retrieves the value 9 from stack[1], decrements top back to 0, and returns 9, leaving stack effectively as [7]. These two operations, together with overflow and underflow checks, form the complete and correct implementation of the core stack ADT.",
      },
      {
        id: "pp-2017-b4",
        group: "B",
        marks: 6,
        topic: "Queue",
        prompt: "Discuss the disadvantage of Linear Queue over Circular Queue with example.",
        years: ["2017"],
        answer:
          "A linear queue is implemented using a simple array with two pointers, front and rear, where insertion always happens by incrementing rear and deletion always happens by incrementing front, without any wrap-around behavior. The primary disadvantage of a linear queue compared to a circular queue is its inefficient use of memory over repeated insertions and deletions, a problem often referred to as 'false overflow.' Because rear only ever increases and never wraps back to reuse earlier freed positions, once rear reaches the final index of the array (MAX-1), no further elements can be inserted, even if many elements have already been dequeued from the front and their slots are sitting completely empty and unused.\n\nFor example, consider a linear queue with capacity 5 that has had five elements enqueued and then three of them dequeued from the front; front is now 3 and rear is 4, meaning array indices 0, 1, and 2 are free, yet since rear has already reached the last valid index (4), attempting to enqueue a new element would incorrectly report the queue as full, even though three-fifths of the array is genuinely available. Resolving this in a plain linear queue would require either shifting all remaining elements back toward index 0 (an expensive O(n) operation that must be repeated periodically) or simply wasting that memory permanently. A circular queue avoids this disadvantage entirely by computing the rear position as (rear + 1) % MAX, allowing it to wrap around and reuse index 0 once index MAX-1 has been passed, so in the identical scenario above, a circular queue would happily reuse the freed slots at indices 0, 1, and 2 without any shifting or wasted space.\n\nIn conclusion, the linear queue's false-overflow limitation makes it poorly suited for any system requiring continuous, long-running enqueue and dequeue operations, which is precisely why the circular queue design is preferred in practical implementations such as operating system schedulers and buffered data streams.",
      },
      {
        id: "pp-2017-b5",
        group: "B",
        marks: 6,
        topic: "Linked List",
        prompt: "What are advantages and drawbacks of Linked List over array? Write down algorithm for inserting and deleting data from beginning of linked list.",
        years: ["2017"],
        answer:
          "A linked list offers several advantages over an array. First, a linked list has dynamic size, growing or shrinking at runtime by allocating or freeing individual nodes as needed, whereas an array (in many implementations) has a fixed size that must be declared in advance, risking either wasted space or overflow. Second, insertion and deletion at the beginning of a linked list are O(1) operations requiring only pointer updates, whereas the same operations on an array require shifting all subsequent elements, costing O(n) time. However, linked lists also have drawbacks compared to arrays. First, a linked list does not support direct/random access to an element by index; finding the k-th element requires traversing from the head one node at a time, costing O(n) time, whereas an array provides O(1) indexed access via direct memory address calculation. Second, each linked list node requires extra memory to store its pointer field(s) in addition to its data, whereas an array stores only the raw data values, making arrays more memory-efficient per element. The algorithm to insert a new node at the beginning of a singly linked list is: Step 1, create a new node and set its data field to the value being inserted. Step 2, set the new node's next pointer to the current HEAD, so it points to what was previously the first node. Step 3, update HEAD to point to this new node, making it the new first node of the list. The algorithm to delete a node from the beginning of a singly linked list is: Step 1, check if the list is empty (HEAD is NULL); if so, report the error and stop. Step 2, store HEAD in a temporary pointer, to preserve access to the node being removed. Step 3, update HEAD to HEAD->next, advancing it to what was the second node. Step 4, free the memory held by the temporary pointer.\n\nFor example, inserting 1 at the beginning of the list 2 → 3 → NULL creates a new node containing 1, sets its next to point at the node containing 2, and updates HEAD to the new node, giving 1 → 2 → 3 → NULL; deleting from the beginning of this new list then reverses that, restoring HEAD to point at the node containing 2, giving 2 → 3 → NULL and freeing the node that held 1.",
      },
      {
        id: "pp-2017-b6",
        group: "B",
        marks: 6,
        topic: "Searching and Sorting",
        prompt: "What is idea behind binary search? Write down its algorithm and illustrate with example.",
        years: ["2017"],
        answer:
          "The idea behind binary search is to efficiently locate a target value within a sorted array by repeatedly dividing the search range in half, eliminating the half that cannot possibly contain the target based on a single comparison with the middle element, rather than checking every element one by one as sequential search does. This divide-and-conquer strategy is only valid because the array is sorted, since sortedness is what guarantees that everything to one side of the middle element is either entirely smaller or entirely larger than it, allowing an entire half of the remaining search space to be safely discarded at every step.\n\nThe algorithm is: Step 1, set two pointers, low to the first index (0) and high to the last index (n-1) of the sorted array. Step 2, while low is less than or equal to high, calculate the middle index as mid = (low + high) / 2. Step 3, compare the target value with the element at arr[mid]; if they are equal, the search is successful, so return mid as the found position. Step 4, if the target is smaller than arr[mid], the target (if present) must lie in the left half, so set high = mid - 1 and repeat from Step 2. Step 5, if the target is larger than arr[mid], the target (if present) must lie in the right half, so set low = mid + 1 and repeat from Step 2. Step 6, if low exceeds high before the target is found, the target is not present in the array, so return a not-found indicator (such as -1).\n\nAs an illustration, consider searching for the value 23 in the sorted array [4, 8, 15, 16, 23, 42, 55] (indices 0 to 6). Initially low=0, high=6, so mid=3, and arr[3]=16; since 23 is greater than 16, discard the left half and set low=4. Now low=4, high=6, so mid=5, and arr[5]=42; since 23 is smaller than 42, discard the right half and set high=4. Now low=4, high=4, so mid=4, and arr[4]=23, which matches the target, so the search successfully returns index 4. Because binary search discards half of the remaining elements at every comparison, it runs in O(log n) time, making it dramatically faster than sequential search's O(n) for large sorted datasets, such as searching a sorted database index of millions of records.",
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
