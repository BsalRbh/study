import type { TopicNote } from "@/content/types";

export const unit6Notes: Record<string, TopicNote> = {
  "Tree: Concepts, Definitions, Properties": {
    selfTest: [
      "What is the difference between the degree of a node and the degree of a tree?",
      "A tree has 12 nodes. How many edges does it have?",
      "In a tree with root A, where A→B, C and B→D, what is the level of D and which nodes are leaves?",
    ],
    body: `**Definition.** A **tree** is a non-linear, hierarchical data structure consisting of a finite set of nodes connected by edges, such that there is one special node called the **root**, and the remaining nodes are divided into disjoint subsets, each of which is itself a tree (called a **subtree** of the root). A tree has no cycles, and there is exactly one path between any two nodes.

**Explanation.** Linear structures such as arrays, stacks and queues store data in a sequence, but many real problems are hierarchical: a family tree, the folder structure of a hard disk, or the organisation chart of a company. A tree models this parent–child relationship directly. Because each node can point to several children, searching and organising data can be much faster than in a linear list.

**Basic terminology:**

- **Root:** the topmost node, which has no parent.
- **Parent and child:** if an edge goes from node X down to node Y, X is the parent and Y is the child.
- **Siblings:** children of the same parent.
- **Leaf (terminal / external node):** a node with no children.
- **Internal (non-terminal) node:** a node with at least one child.
- **Degree of a node:** the number of children it has. **Degree of a tree:** the maximum degree of any node in it.
- **Level:** the root is at level 0, its children at level 1, and so on.
- **Depth of a node:** the number of edges from the root to that node. **Height of a tree:** the number of edges on the longest path from the root to a leaf.
- **Ancestors and descendants:** all nodes on the path above a node, and all nodes below it.
- **Path:** a sequence of nodes connected by edges. **Forest:** a set of disjoint trees.

**Properties of a tree:**

1. A tree with n nodes always has exactly n − 1 edges.
2. There is exactly one path between any pair of nodes.
3. A tree is connected and acyclic; adding any one edge creates a cycle, and removing any edge disconnects it.
4. Every node except the root has exactly one parent.

**Example.** Consider the tree: A → B, C, D; B → E, F; D → G.

| Term | Value in this tree |
|---|---|
| Root | A |
| Leaves | E, F, C, G |
| Internal nodes | A, B, D |
| Siblings | (B, C, D) and (E, F) |
| Degree of A / degree of tree | 3 / 3 |
| Level of E, F, G | 2 |
| Height of tree | 2 |
| Ancestors of G | D, A |
| Nodes / edges | 7 / 6 (= n − 1) |

**How it's asked in exams.** *"Define tree. Explain the terms root, leaf, degree, level, height and siblings with a suitable example"* (6 marks), or as the opening part of a 12-mark question on binary trees or traversal. Start with a formal definition, draw a small tree of 7–10 nodes, then explain each term in a full sentence using nodes from your own diagram. List 3–4 properties (n − 1 edges, unique path, acyclic) and conclude that trees are used wherever data is naturally hierarchical, such as file systems and indexing.`,
  },

  "Binary Tree: Definition, Applications, Representation using Linked List": {
    selfTest: [
      "What is the maximum number of nodes at level 3 of a binary tree (root at level 0)?",
      "What three fields does a node of a linked binary tree contain?",
      "Differentiate a full (strict) binary tree from a complete binary tree.",
    ],
    body: `**Definition.** A **binary tree** is a finite set of nodes that is either empty, or consists of a root node and two disjoint binary trees called the **left subtree** and the **right subtree**. In other words, every node in a binary tree has **at most two children**, and the order (left or right) matters.

**Explanation.** Restricting every node to two children makes binary trees simple to store and fast to process, which is why they are the most widely used form of tree. Important types are:

- **Strictly (full) binary tree:** every node has either 0 or 2 children.
- **Complete binary tree:** all levels are completely filled except possibly the last, which is filled from left to right.
- **Perfect binary tree:** all internal nodes have 2 children and all leaves are at the same level.
- **Skewed binary tree:** every node has only a left child (left-skewed) or only a right child (right-skewed); it behaves like a linked list.

**Properties (root at level 0):**

1. The maximum number of nodes at level i is 2ⁱ.
2. The maximum number of nodes in a binary tree of height h is 2ʰ⁺¹ − 1.
3. In any non-empty binary tree, if n₀ is the number of leaves and n₂ the number of nodes with two children, then n₀ = n₂ + 1.

**Representation using linked list.** Each node is a structure with three fields: **LEFT** (address of the left child), **INFO** (the data) and **RIGHT** (address of the right child). If a child does not exist, the pointer is NULL. A pointer called ROOT stores the address of the root node; if ROOT is NULL the tree is empty. This representation uses memory only for nodes that actually exist, and insertion or deletion only requires changing pointers.

**Array (sequential) representation** is the alternative: with 1-based indexing, the root is stored at index 1, and for a node at index i, its left child is at 2i, its right child at 2i + 1 and its parent at ⌊i/2⌋. This is ideal for complete trees (such as heaps) but wastes space for skewed trees.

**Example.** Tree: A has left child B and right child C; B has left child D; C has right child E.

| Node | LEFT | INFO | RIGHT |
|---|---|---|---|
| 1 (root) | address of B | A | address of C |
| 2 | address of D | B | NULL |
| 3 | NULL | C | address of E |
| 4 | NULL | D | NULL |
| 5 | NULL | E | NULL |

**Applications:** expression trees for compilers (e.g. (A + B) × C), binary search trees for fast searching, heaps for priority queues and heap sort, Huffman trees for data compression, decision trees, and syntax trees in parsers.

**How it's asked in exams.** *"What is a binary tree? Explain its linked list representation with example"* or *"List the applications of binary tree"* (6 marks), often combined with traversal for 12 marks. Write the definition, types with a one-line description each, draw the node structure LEFT – INFO – RIGHT with NULL pointers shown, give a small example with a node table, and finish with 4–5 applications and a concluding sentence on why linked representation is preferred for dynamic trees.`,
  },

  "Binary Tree Traversals: Pre-order, In-order, Post-order": {
    selfTest: [
      "Write the visiting order (N, L, R) for pre-order, in-order and post-order.",
      "For the tree A with left child B and right child C, write all three traversals.",
      "Which traversal of a BST gives the keys in ascending order?",
    ],
    body: `**Definition.** **Traversal** of a binary tree means visiting every node of the tree exactly once in a systematic order. Since a tree is non-linear, there is no single natural order, so three standard depth-first orders are defined by *when* the root (N) is visited relative to its left (L) and right (R) subtrees.

**Pre-order traversal (N L R):**

1. Visit the root node.
2. Traverse the left subtree in pre-order.
3. Traverse the right subtree in pre-order.

**In-order traversal (L N R):**

1. Traverse the left subtree in in-order.
2. Visit the root node.
3. Traverse the right subtree in in-order.

**Post-order traversal (L R N):**

1. Traverse the left subtree in post-order.
2. Traverse the right subtree in post-order.
3. Visit the root node.

In each algorithm, if the current node is NULL the procedure simply returns. All three are naturally recursive (or use an explicit stack), and each takes O(n) time because every node is visited once.

**Example.** Consider the tree: A → left B, right C; B → left D, right E; C → right F (no left child); E → left G.

| Traversal | Order |
|---|---|
| Pre-order (N L R) | A B D E G C F |
| In-order (L N R) | D B G E A C F |
| Post-order (L R N) | D G E B F C A |

Working for in-order: the left subtree of A is B. In-order of B gives D, then B, then in-order of E, which is G then E. So we have D B G E. Then visit A. Then in-order of C: C has no left child, so visit C, then F. Result: D B G E A C F.

**Expression tree example.** For (A + B) × C, the root is ×, its left child is + (with children A and B), and its right child is C. Pre-order gives the prefix form × + A B C, in-order gives the infix form A + B × C, and post-order gives the postfix form A B + C ×.

**Uses:** pre-order is used to copy a tree or produce prefix notation; in-order of a BST gives sorted output; post-order is used to delete a tree or evaluate an expression tree.

**How it's asked in exams.** *"What is binary tree? Explain binary tree traversal methods with illustrations"* and *"Explain different tree traversal algorithms with proper example"* (12 marks, asked repeatedly). Define traversal, write all three algorithms as numbered steps, draw one tree of 7–9 nodes, and write all three orders beneath it, showing your working for at least one. Add the expression-tree example as a bonus and conclude with where each traversal is used.`,
  },

  "Binary Search Tree (BST): Insertion, Deletion": {
    selfTest: [
      "State the BST property.",
      "Insert 50, 30, 70, 20, 40 into an empty BST. What is the left child of 30?",
      "When deleting a node with two children, what is the in-order successor?",
    ],
    body: `**Definition.** A **binary search tree (BST)** is a binary tree in which, for every node, all keys in its **left subtree are smaller** than the node's key, and all keys in its **right subtree are greater** than the node's key. Both subtrees are themselves BSTs, and duplicate keys are usually not allowed.

**Explanation.** This ordering lets us discard half of the remaining tree at every comparison, like binary search on a sorted array, but with the advantage that insertion and deletion are cheap. Searching, insertion and deletion all take O(h) time, where h is the height: O(log n) on average for a well-shaped tree, but O(n) in the worst case when the tree becomes skewed (for example, when keys are inserted in sorted order). An in-order traversal of a BST always produces the keys in ascending order.

**Algorithm for insertion (key X):**

1. If the tree is empty, create a new node with X and make it the root; stop.
2. Set CURRENT = ROOT.
3. If X < CURRENT.INFO, move to the left child; if X > CURRENT.INFO, move to the right child.
4. Repeat step 3 until the required child pointer is NULL.
5. Create a new node with X and attach it at that NULL position as a leaf.

**Algorithm for deletion (key X):** first search for the node containing X, then apply one of three cases.

1. **Case 1 – leaf node:** set the parent's pointer to that node to NULL and free the node.
2. **Case 2 – node with one child:** link the parent directly to the node's only child, then free the node.
3. **Case 3 – node with two children:** find the **in-order successor** (the smallest key in the right subtree, found by going right once and then left as far as possible). Copy the successor's key into the node, then delete the successor, which has at most one child, using Case 1 or Case 2.

**Example – insertion of 50, 30, 70, 20, 40, 60, 80:** 50 becomes the root. 30 < 50 goes left; 70 > 50 goes right. 20 < 50, 20 < 30, so it is the left child of 30. 40 < 50, 40 > 30, so it is the right child of 30. 60 > 50, 60 < 70, so it is the left child of 70. 80 is the right child of 70. Final tree: 50 → 30, 70; 30 → 20, 40; 70 → 60, 80. In-order: 20 30 40 50 60 70 80.

**Example – deletion (applied one after another):**

| Operation | Case | Result |
|---|---|---|
| Delete 20 | Leaf | 30's left pointer becomes NULL; 30 → (NULL), 40 |
| Delete 30 | One child (40) | 50's left pointer now points to 40 |
| Delete 50 | Two children | Successor = 60; copy 60 to root, remove old leaf 60 |

Final tree: 60 → 40, 70; 70 → (NULL), 80. In-order: 40 60 70 80, which is still sorted, confirming the BST property holds.

**How it's asked in exams.** *"Define binary search tree. Construct a BST from the given data and delete a node"* or *"What is BST? Explain insertion and deletion with example"* (6–12 marks). State the BST property, write both algorithms as numbered steps, construct the tree from the given keys and **draw the tree at each step**, then show all three deletion cases with before-and-after diagrams. End with the complexity and a line noting that in-order traversal verifies the result is sorted.`,
  },

  "Balanced Trees": {
    selfTest: [
      "What is the formula for the balance factor of a node in an AVL tree, and which values are allowed?",
      "Insert 30, 20, 10 into an AVL tree. Which rotation is needed and what is the new root?",
      "Why can an ordinary BST become slow?",
    ],
    body: `**Definition.** A **balanced tree** is a search tree that keeps its height close to the minimum possible, O(log n), by restructuring itself after insertions and deletions. The best-known example is the **AVL tree** (Adelson-Velsky and Landis), a BST in which, for every node, the heights of the left and right subtrees differ by at most one.

**Explanation.** An ordinary BST built from sorted data (10, 20, 30, 40…) becomes a skewed chain, so searching takes O(n) time, no better than a linked list. Balanced trees prevent this, guaranteeing O(log n) search, insertion and deletion. Other balanced trees include **red-black trees**, **B-trees** (used in databases and file systems) and **2-3 trees**.

**Balance factor.** For each node, **BF = height of left subtree − height of right subtree**. In an AVL tree, BF must be −1, 0 or +1. If any node gets BF = +2 or −2 after an insertion, the tree is rebalanced by rotation at the nearest unbalanced ancestor.

**The four rotations:**

1. **LL case (right rotation):** the new node is inserted in the left subtree of the left child. Example: insert 30, 20, 10. Node 30 has BF = +2. Rotate right about 30: 20 becomes the root, with 10 on the left and 30 on the right.
2. **RR case (left rotation):** the new node is inserted in the right subtree of the right child. Example: insert 10, 20, 30. Node 10 has BF = −2. Rotate left about 10: 20 becomes the root with children 10 and 30.
3. **LR case (left-right, double rotation):** inserted in the right subtree of the left child. Example: insert 30, 10, 20. First rotate left about 10 (making it the LL shape 30 → 20 → 10), then rotate right about 30. Result: 20 → 10, 30.
4. **RL case (right-left, double rotation):** inserted in the left subtree of the right child. Example: insert 10, 30, 20. First rotate right about 30 (making the RR shape 10 → 20 → 30), then rotate left about 10. Result: 20 → 10, 30.

**Example – building an AVL tree from 10, 20, 30, 40, 50:**

| Insert | Imbalance | Action | Tree after step |
|---|---|---|---|
| 10, 20 | None | – | 10 → (NULL), 20 |
| 30 | BF(10) = −2 | RR: left rotation at 10 | 20 → 10, 30 |
| 40 | None | – | 20 → 10, 30; 30 → (NULL), 40 |
| 50 | BF(30) = −2 | RR: left rotation at 30 | 20 → 10, 40; 40 → 30, 50 |

The final tree has height 2 and every BF is −1, 0 or +1 (root 20 has BF = 1 − 2 = −1). An ordinary BST would have produced a chain of height 4.

**How it's asked in exams.** Usually a short note, *"Write short notes on: Balanced tree"* (3 marks), or a 6-mark question *"What is an AVL tree? Explain rotations with example."* Define balanced tree and AVL tree, give the balance factor formula, name all four rotations with a three-node example each, and **draw the tree before and after each rotation**. Conclude that balancing guarantees O(log n) operations regardless of input order.`,
  },

  "Huffman Algorithm for Data Compression": {
    selfTest: [
      "Does Huffman coding give shorter codes to frequent or rare characters?",
      "What is a prefix code, and why does Huffman coding need it?",
      "Two nodes of weight 5 and 9 are merged. What is the weight of the new node?",
    ],
    body: `**Definition.** **Huffman coding** is a greedy, lossless data-compression algorithm that assigns **variable-length binary codes** to characters based on their frequency: the most frequent characters get the shortest codes and the rarest get the longest. The codes are **prefix codes**, meaning no code is the prefix of another, so the encoded bit stream can be decoded without separators.

**Explanation.** Normal fixed-length coding such as ASCII uses the same number of bits for every character, which wastes space when some characters occur far more often than others. Huffman builds a binary tree bottom-up from the frequencies, and each character's code is its path from the root (0 for a left branch, 1 for a right branch). Because characters are only at leaves, the prefix property holds automatically.

**Algorithm:**

1. Count the frequency of each character and create a leaf node for each one.
2. Place all nodes in a priority queue (min-heap) ordered by frequency.
3. Remove the two nodes with the smallest frequencies.
4. Create a new internal node whose frequency is their sum, with the smaller one as the left child and the larger one as the right child.
5. Insert the new node back into the queue.
6. Repeat steps 3–5 until only one node remains; this is the root of the Huffman tree.
7. Label every left edge 0 and every right edge 1; the code of each character is the sequence of labels from the root to its leaf.

**Example.** Frequencies: A = 5, B = 9, C = 12, D = 13, E = 16, F = 45 (total 100 characters).

| Step | Two smallest merged | New node |
|---|---|---|
| 1 | A(5) + B(9) | 14 |
| 2 | C(12) + D(13) | 25 |
| 3 | 14 + E(16) | 30 |
| 4 | 25 + 30 | 55 |
| 5 | F(45) + 55 | 100 (root) |

Tree: root 100 → F(45), 55; 55 → 25, 30; 25 → C, D; 30 → 14, E; 14 → A, B.

| Character | Frequency | Code | Bits used |
|---|---|---|---|
| F | 45 | 0 | 45 × 1 = 45 |
| C | 12 | 100 | 12 × 3 = 36 |
| D | 13 | 101 | 13 × 3 = 39 |
| E | 16 | 111 | 16 × 3 = 48 |
| A | 5 | 1100 | 5 × 4 = 20 |
| B | 9 | 1101 | 9 × 4 = 36 |
| **Total** | 100 | | **224 bits** |

With a fixed 3-bit code, 100 characters would need 300 bits, so Huffman saves 76 bits (about 25%).

**How it's asked in exams.** *"Use Huffman algorithm to find the code-words for the given character sequence: AADECAAADC…"* (12 marks). First **count each character's frequency** from the given string and show a frequency table, then write the algorithm steps, **draw the tree after every merge**, label edges 0/1, and give the final code table. Finish by computing total bits versus fixed-length bits and stating the saving as your concluding interpretation. Different tie-breaking can give different codes but the same total bits, which examiners accept.`,
  },

  "Graph: Definition, Representation, Applications": {
    selfTest: [
      "Write the formal definition of a graph G.",
      "Name the two main ways of representing a graph in memory.",
      "Which representation is better for a sparse graph, and why?",
    ],
    body: `**Definition.** A **graph** is a non-linear data structure G = (V, E), where V is a finite, non-empty set of **vertices** (nodes) and E is a set of **edges**, each edge connecting a pair of vertices. If edges have a direction, the graph is *directed*; otherwise it is *undirected*.

**Explanation.** Unlike a tree, a graph has no root and no parent–child restriction: any vertex can connect to any other, and cycles are allowed. This makes graphs the natural model for networks. Key terms are **adjacent vertices** (joined by an edge), **degree** (number of edges at a vertex; in-degree and out-degree for directed graphs), **path** (sequence of adjacent vertices), and **cycle** (a path that starts and ends at the same vertex).

**Representation 1 – Adjacency matrix.** For n vertices, use an n × n matrix A where A(i, j) = 1 if there is an edge from vertex i to vertex j, and 0 otherwise. For a weighted graph, store the weight instead of 1. For an undirected graph the matrix is symmetric.

**Representation 2 – Adjacency list.** Keep an array of n head pointers, one per vertex; each points to a linked list of the vertices adjacent to it. For a weighted graph each list node also stores the weight.

**Example.** Undirected graph with V = {A, B, C, D} and edges A–B, A–C, B–D, C–D.

| | A | B | C | D |
|---|---|---|---|---|
| **A** | 0 | 1 | 1 | 0 |
| **B** | 1 | 0 | 0 | 1 |
| **C** | 1 | 0 | 0 | 1 |
| **D** | 0 | 1 | 1 | 0 |

Adjacency list: A → B → C; B → A → D; C → A → D; D → B → C.

**Comparison:**

| Point | Adjacency matrix | Adjacency list |
|---|---|---|
| Memory | O(V²) always | O(V + E) |
| Check if edge (i, j) exists | O(1) | O(degree of i) |
| Find all neighbours | O(V) | O(degree) |
| Best for | Dense graphs | Sparse graphs |
| Adding a vertex | Costly (resize matrix) | Easy |

**Applications:** road and airline networks (shortest route, as in Google Maps), computer networks and routing, social networks (users as vertices, friendships as edges), web page linking for search engines, task scheduling with dependency graphs, electrical circuits, and recommendation systems.

**How it's asked in exams.** *"Explain adjacency matrix and list representations of a graph"* (6 marks), or *"Define graph along with its applications"* as the first part of a 12-mark question. Give the formal definition, draw a small graph, show both its matrix and its list, add the comparison table, list 4–5 applications with a sentence each, and conclude which representation suits which kind of graph.`,
  },

  "Adjacency Matrix, Transitive Closure, Warshall's Algorithm": {
    selfTest: [
      "What does the transitive closure of a directed graph tell you?",
      "Write Warshall's update rule for P(i, j) at stage k.",
      "What is the time complexity of Warshall's algorithm for n vertices?",
    ],
    body: `**Definition.** The **adjacency matrix** A of a directed graph with n vertices is an n × n Boolean matrix where A(i, j) = 1 if there is an edge i → j, else 0. The **transitive closure** of the graph is the n × n matrix P (the *path* or *reachability matrix*) where P(i, j) = 1 if there is a path of any length from i to j, else 0. **Warshall's algorithm** computes this closure efficiently.

**Explanation.** The adjacency matrix only shows direct edges. Often we need to know whether one vertex can *reach* another through intermediate vertices, for example whether a task depends indirectly on another. Warshall's idea is to allow intermediate vertices one at a time: at stage k, a path from i to j exists if it already existed, **or** if there is a path from i to k and a path from k to j using only vertices 1…k.

**Update rule:** Pₖ(i, j) = Pₖ₋₁(i, j) OR ( Pₖ₋₁(i, k) AND Pₖ₋₁(k, j) ).

**Warshall's algorithm:**

1. Set P = A (copy of the adjacency matrix).
2. For k = 1 to n (the intermediate vertex):
3. For i = 1 to n:
4. For j = 1 to n: set P(i, j) = P(i, j) OR ( P(i, k) AND P(k, j) ).
5. After all three loops, P is the transitive closure. Time complexity is O(n³).

A quick way to apply stage k by hand: look at column k to find every i that reaches k, look at row k to find every j that k reaches, and set P(i, j) = 1 for each such pair.

**Example.** Vertices 1, 2, 3, 4 with edges 1 → 2, 2 → 3, 3 → 4, 4 → 2.

Initial matrix P₀ = A:

| | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| **1** | 0 | 1 | 0 | 0 |
| **2** | 0 | 0 | 1 | 0 |
| **3** | 0 | 0 | 0 | 1 |
| **4** | 0 | 1 | 0 | 0 |

- **k = 1:** no vertex has an edge into 1 (column 1 is all 0), so no change.
- **k = 2:** vertices 1 and 4 reach 2; 2 reaches 3. Set P(1, 3) = 1 and P(4, 3) = 1.
- **k = 3:** vertices 1, 2, 4 reach 3; 3 reaches 4. Set P(1, 4), P(2, 4), P(4, 4) = 1.
- **k = 4:** vertices 1, 2, 3, 4 reach 4; 4 reaches 2, 3, 4. Set P(2, 2), P(3, 2), P(3, 3) = 1 (others already 1).

Final transitive closure P₄:

| | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| **1** | 0 | 1 | 1 | 1 |
| **2** | 0 | 1 | 1 | 1 |
| **3** | 0 | 1 | 1 | 1 |
| **4** | 0 | 1 | 1 | 1 |

Interpretation: every vertex can reach 2, 3 and 4 (the cycle 2 → 3 → 4 → 2), but no vertex can reach 1.

**How it's asked in exams.** *"Short note: Adjacency matrix implementation"* (3 marks), or *"What is transitive closure? Find the path matrix of the given graph using Warshall's algorithm"* (6 marks). Define adjacency matrix and transitive closure, state the update rule, write the algorithm steps, then **show the matrix after every value of k**. End with a sentence interpreting the final matrix in terms of which vertices can reach which.`,
  },

  "Types of Graphs": {
    selfTest: [
      "How many edges does a complete undirected graph on 5 vertices have?",
      "What is the difference between a connected and a strongly connected graph?",
      "What is a DAG, and name one use of it.",
    ],
    body: `**Definition.** Graphs are classified by the nature of their edges (direction, weight, repetition) and by how their vertices are connected. Knowing the type of graph matters because it decides which representation and which algorithms can be applied.

**Main types, each with an example:**

1. **Undirected graph:** edges have no direction, so edge (A, B) is the same as (B, A). Example: a Facebook friendship network.
2. **Directed graph (digraph):** each edge has a direction from a source to a destination, written A → B. Example: Twitter "follows" or one-way streets.
3. **Weighted graph:** each edge carries a numerical value such as distance, cost or time. Example: a road map with distances in km; this is what Dijkstra, Prim and Kruskal work on.
4. **Unweighted graph:** edges only show a connection, with no values attached.
5. **Simple graph:** no self-loops and no parallel (multiple) edges between the same pair of vertices.
6. **Multigraph:** allows multiple edges between the same pair of vertices, and sometimes self-loops. Example: two different flights between the same cities.
7. **Null graph:** has vertices but no edges at all.
8. **Complete graph (Kₙ):** every pair of distinct vertices is joined by an edge. An undirected complete graph with n vertices has n(n − 1)/2 edges, so K₅ has 10 edges.
9. **Connected graph:** there is a path between every pair of vertices; otherwise it is **disconnected**. For directed graphs, **strongly connected** means there is a directed path from every vertex to every other vertex.
10. **Cyclic and acyclic graphs:** a cyclic graph contains at least one cycle; an acyclic one contains none. A **directed acyclic graph (DAG)** is used for task scheduling and course prerequisites.
11. **Regular graph:** every vertex has the same degree.
12. **Bipartite graph:** vertices can be divided into two sets so that every edge joins a vertex of one set to a vertex of the other. Example: students and the courses they take.
13. **Tree:** a connected, acyclic, undirected graph; with n vertices it has n − 1 edges.
14. **Sparse vs dense graph:** a sparse graph has few edges compared to V², a dense graph has close to the maximum.

**Example.** For V = {A, B, C} with edges A → B, B → C, C → A: it is directed, simple, cyclic and strongly connected (each vertex reaches every other along the cycle). If we removed C → A, it would become a DAG that is connected but not strongly connected.

| Classification | Types |
|---|---|
| By direction | Directed, Undirected |
| By weight | Weighted, Unweighted |
| By edges allowed | Simple, Multigraph, Null |
| By connectivity | Connected, Disconnected, Strongly connected, Complete |
| By cycles | Cyclic, Acyclic (DAG, Tree) |

**How it's asked in exams.** *"What is graph? Describe different types of graphs with example"* (6–12 marks), frequently combined with applications or Dijkstra's algorithm. Define graph as G = (V, E), then explain at least 8 types, each in a full sentence with a **small drawn graph** and a real-world example. Include the n(n − 1)/2 formula for complete graphs and conclude that the graph's type decides which algorithm is suitable.`,
  },

  "Graph Traversal: DFS, BFS": {
    selfTest: [
      "Which data structure does BFS use, and which does DFS use?",
      "For edges A–B, A–C, B–D starting at A (alphabetical order), write the BFS order.",
      "What is the time complexity of BFS and DFS with an adjacency list?",
    ],
    body: `**Definition.** **Graph traversal** is the process of visiting every vertex of a graph exactly once in a systematic way. Because graphs may contain cycles, each vertex is marked **visited** so that it is not processed again. The two standard methods are **Depth First Search (DFS)** and **Breadth First Search (BFS)**.

**Depth First Search (DFS)** explores as deep as possible along one path before backtracking. It uses a **stack** (or recursion).

1. Push the starting vertex onto the stack, mark it visited and output it.
2. Look at the vertex on top of the stack.
3. If it has an unvisited adjacent vertex, mark that vertex visited, output it and push it onto the stack.
4. If it has no unvisited adjacent vertex, pop it from the stack (backtrack).
5. Repeat steps 2–4 until the stack is empty.

**Breadth First Search (BFS)** visits all neighbours of a vertex before moving to the next level. It uses a **queue**.

1. Mark the starting vertex visited and insert it into the queue.
2. Delete (dequeue) the front vertex and output it.
3. Insert every unvisited adjacent vertex of that vertex into the queue and mark each as visited.
4. Repeat steps 2–3 until the queue is empty.

**Example.** Undirected graph with edges A–B, A–C, B–D, B–E, C–F, E–F. Neighbours are taken in alphabetical order; start at A. Adjacency: A: B, C; B: A, D, E; C: A, F; D: B; E: B, F; F: C, E.

DFS trace:

| Action | Stack (bottom → top) | Output so far |
|---|---|---|
| Start at A | A | A |
| A → B | A, B | A B |
| B → D | A, B, D | A B D |
| D stuck, pop | A, B | A B D |
| B → E | A, B, E | A B D E |
| E → F | A, B, E, F | A B D E F |
| F → C | A, B, E, F, C | A B D E F C |
| All stuck, pop all | empty | A B D E F C |

BFS trace:

| Dequeued | Unvisited neighbours enqueued | Queue after |
|---|---|---|
| – | A | A |
| A | B, C | B, C |
| B | D, E | C, D, E |
| C | F | D, E, F |
| D | none | E, F |
| E | none (F already visited) | F |
| F | none | empty |

**DFS order: A B D E F C. BFS order: A B C D E F.**

| Point | DFS | BFS |
|---|---|---|
| Data structure | Stack / recursion | Queue |
| Strategy | Go deep, then backtrack | Level by level |
| Shortest path (unweighted) | Not guaranteed | Guaranteed (fewest edges) |
| Memory | Proportional to depth | Proportional to widest level |
| Uses | Cycle detection, topological sort, maze solving | Shortest path, peer-to-peer networks, web crawling |
| Time complexity | O(V + E) | O(V + E) |

**How it's asked in exams.** *"What is graph traversal? Differentiate BFS and DFS with algorithm and example"* (12 marks), *"Explain breadth first search with proper example"* (6 marks), or *"Short note: DFS"* (3 marks). Define traversal, write both algorithms as numbered steps, **draw the graph**, show the stack/queue at every step in a table, give both final orders, then add the comparison table and a concluding line on when to use each.`,
  },

  "Spanning Tree, Minimum Spanning Tree: Kruskal's & Prim's Algorithm": {
    selfTest: [
      "How many edges does a spanning tree of a graph with 6 vertices have?",
      "In Kruskal's algorithm, why is an edge rejected?",
      "Does Prim's algorithm grow one tree or a forest of trees?",
    ],
    body: `**Definition.** A **spanning tree** of a connected, undirected graph G with n vertices is a subgraph that includes **all n vertices**, is a tree (connected, no cycles) and therefore has exactly **n − 1 edges**. A graph can have many spanning trees. In a weighted graph, a **minimum spanning tree (MST)** is the spanning tree whose total edge weight is the smallest possible.

**Explanation.** MSTs solve "connect everything at the least cost" problems, such as laying cable between cities, designing electrical grids, or building computer networks with minimum wire. Two greedy algorithms find an MST: Kruskal's and Prim's. If all edge weights are distinct, the MST is unique, so both give the same answer.

**Kruskal's algorithm** (edge-based, grows a forest):

1. List all edges in ascending order of weight.
2. Start with each vertex as its own separate tree (no edges selected).
3. Take the next smallest edge. If it joins two different trees (does not form a cycle), accept it; otherwise reject it.
4. Repeat step 3 until n − 1 edges have been accepted.

**Prim's algorithm** (vertex-based, grows one tree):

1. Choose any starting vertex and put it in the tree.
2. Among all edges that connect a vertex in the tree to a vertex outside it, select the one with minimum weight.
3. Add that edge and its new vertex to the tree.
4. Repeat steps 2–3 until all n vertices are in the tree.

**Example.** Vertices A, B, C, D, E with edges: A–B 2, A–C 3, B–C 1, B–D 4, C–D 5, C–E 6, D–E 7.

Kruskal's trace (edges sorted):

| Edge | Weight | Decision | Reason |
|---|---|---|---|
| B–C | 1 | Accept | Joins B and C |
| A–B | 2 | Accept | Joins A to tree {B, C} |
| A–C | 3 | Reject | A and C already connected (cycle A–B–C) |
| B–D | 4 | Accept | Adds D |
| C–D | 5 | Reject | Would form cycle B–C–D |
| C–E | 6 | Accept | Adds E; now 4 = n − 1 edges, stop |

Prim's trace (start at A):

| Step | Tree vertices | Candidate edges | Selected |
|---|---|---|---|
| 1 | A | A–B 2, A–C 3 | A–B (2) |
| 2 | A, B | A–C 3, B–C 1, B–D 4 | B–C (1) |
| 3 | A, B, C | B–D 4, C–D 5, C–E 6 | B–D (4) |
| 4 | A, B, C, D | C–E 6, D–E 7 | C–E (6) |

Both give MST edges {A–B, B–C, B–D, C–E} with **total weight = 2 + 1 + 4 + 6 = 13**.

| Point | Kruskal's | Prim's |
|---|---|---|
| Approach | Picks the globally smallest safe edge | Grows one tree from a start vertex |
| Intermediate result | Forest (may be disconnected) | Always one connected tree |
| Cycle check | Needed (union–find) | Not needed (edge always goes outside tree) |
| Complexity | O(E log E) | O(V²) with matrix, O(E log V) with heap |
| Best for | Sparse graphs | Dense graphs |

**How it's asked in exams.** *"What is minimum spanning tree? Explain Kruskal's algorithm with suitable example"* (12 marks), *"With suitable example, explain Prim's algorithm"* (6 marks), or *"Short note: Kruskal's algorithm"* (3 marks). Define spanning tree and MST, write the algorithm steps, **draw the graph and the growing tree at each step**, show the edge-by-edge table, state the total weight, and conclude with the Kruskal-vs-Prim comparison.`,
  },

  "Shortest Path: Floyd Warshall's & Dijkstra's Algorithm": {
    selfTest: [
      "Dijkstra finds shortest paths from how many sources? Floyd–Warshall from how many?",
      "Why does Dijkstra's algorithm fail with negative edge weights?",
      "Write the Floyd–Warshall update rule for D(i, j) at stage k.",
    ],
    body: `**Definition.** The **shortest path problem** is to find a path between two vertices of a weighted graph such that the sum of edge weights is minimum. **Dijkstra's algorithm** solves the *single-source* version (shortest paths from one source to every other vertex) for non-negative weights. **Floyd–Warshall's algorithm** solves the *all-pairs* version (shortest paths between every pair of vertices).

**Explanation.** Both algorithms rely on **relaxation**: if going through some vertex u gives a shorter route to v than the one currently known, the distance of v is updated. Dijkstra is greedy, permanently fixing the closest unvisited vertex at each step, while Floyd–Warshall is dynamic programming, allowing one more intermediate vertex at each stage.

**Dijkstra's algorithm:**

1. Set dist(source) = 0 and dist(v) = ∞ for every other vertex; mark all vertices unvisited.
2. Select the unvisited vertex u with the smallest dist and mark it visited (its distance is now final).
3. For every unvisited neighbour v of u, if dist(u) + weight(u, v) < dist(v), set dist(v) = dist(u) + weight(u, v) and record u as the predecessor of v.
4. Repeat steps 2–3 until all vertices are visited.

**Example.** Undirected graph with edges A–B 4, A–C 1, C–B 2, B–D 1, C–D 5, D–E 3. Source A.

| Iteration | Vertex selected | A | B | C | D | E |
|---|---|---|---|---|---|---|
| Initial | – | 0 | ∞ | ∞ | ∞ | ∞ |
| 1 | A | 0 | 4 | 1 | ∞ | ∞ |
| 2 | C (1) | 0 | 3 | 1 | 6 | ∞ |
| 3 | B (3) | 0 | 3 | 1 | 4 | ∞ |
| 4 | D (4) | 0 | 3 | 1 | 4 | 7 |
| 5 | E (7) | 0 | 3 | 1 | 4 | 7 |

Shortest paths: C = 1 (A→C), B = 3 (A→C→B), D = 4 (A→C→B→D), E = 7 (A→C→B→D→E). Note B improved from 4 to 3 by going through C.

**Floyd–Warshall's algorithm:**

1. Create the distance matrix D₀ where D(i, i) = 0, D(i, j) = weight of edge i → j, and ∞ if there is no edge.
2. For k = 1 to n (intermediate vertex), for every i and j, set Dₖ(i, j) = min( Dₖ₋₁(i, j), Dₖ₋₁(i, k) + Dₖ₋₁(k, j) ).
3. After k = n, D(i, j) holds the shortest distance from i to j. Time complexity is O(n³).

**Example.** Directed graph: 1 → 2 (4), 1 → 3 (11), 2 → 3 (2), 3 → 1 (3).

| Matrix | Row 1 | Row 2 | Row 3 |
|---|---|---|---|
| D₀ | 0, 4, 11 | ∞, 0, 2 | 3, ∞, 0 |
| D₁ (via 1) | 0, 4, 11 | ∞, 0, 2 | 3, 7, 0 |
| D₂ (via 2) | 0, 4, 6 | ∞, 0, 2 | 3, 7, 0 |
| D₃ (via 3) | 0, 4, 6 | 5, 0, 2 | 3, 7, 0 |

Changes: D(3, 2) = 3 + 4 = 7 via 1; D(1, 3) = 4 + 2 = 6 via 2; D(2, 1) = 2 + 3 = 5 via 3.

| Point | Dijkstra | Floyd–Warshall |
|---|---|---|
| Problem | Single source | All pairs |
| Technique | Greedy | Dynamic programming |
| Negative weights | Not allowed | Allowed (no negative cycles) |
| Complexity | O(V²), or O(E log V) with heap | O(V³) |

**How it's asked in exams.** *"Discuss Dijkstra's algorithm with example/illustration"* (6–12 marks, very frequent, often with "define graph and its types"). Define the shortest path problem, write the algorithm steps, **draw the graph**, show the distance table for every iteration, list final paths, and conclude with complexity and the non-negative-weight limitation. For Floyd–Warshall, show every matrix Dₖ and interpret the final one.`,
  },
};
