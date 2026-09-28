import type { TopicNote } from "@/content/types";

export const unit7Notes: Record<string, TopicNote> = {
  "Searching: Sequential Search, Binary Search, Binary Search Tree": {
    selfTest: [
      "What condition must an array satisfy before binary search can be applied?",
      "In the sorted array 5, 12, 18, 23, 31, 42, 56, 67, 78, 89 (index 0–9), what is the first mid index and value when searching for 23?",
      "In a BST built from 50, 30, 70, 20, 40, 60, 80, which nodes are visited when searching for 60?",
    ],
    body: `**Definition.** **Searching** is the process of finding whether a given element (called the *key* or *target*) is present in a collection of data and, if it is, returning its position. A search is **successful** if the key is found and **unsuccessful** if the whole search space is exhausted without finding it. The three basic techniques in the syllabus are sequential (linear) search, binary search and binary search tree (BST) search.

**Explanation.** The choice of search technique depends on how the data is stored. If the data is unsorted, the only option is to look at every element one by one. If the data is sorted and stored in an array, we can repeatedly halve the search space. If the data is stored in a binary search tree, the ordering property of the tree guides the search left or right at every node.

**1. Sequential (Linear) Search.** The key is compared with each element of the list, starting from the first, until a match is found or the list ends. It works on both sorted and unsorted data and on arrays as well as linked lists.

Algorithm LinearSearch(A, n, key):

1. Set i ← 0.
2. Repeat while i < n:
   - If A[i] = key, print "found at position i" and stop.
   - Otherwise set i ← i + 1.
3. If i = n, print "element not found".
4. Stop.

Example: A = 25, 12, 36, 8, 17 and key = 8. Compare 25 (no), 12 (no), 36 (no), 8 (yes). The key is found at index 3 after 4 comparisons. For key = 40, all 5 elements are compared and the search is unsuccessful.

In the best case the key is at the first position (1 comparison, O(1)). In the worst case it is at the last position or absent (n comparisons, O(n)). On average about (n + 1)/2 comparisons are needed, which is still O(n).

**2. Binary Search.** Binary search works only on a **sorted array**. It compares the key with the middle element. If they are equal, the search ends. If the key is smaller, the search continues in the left half; if the key is larger, it continues in the right half. Each comparison discards half of the remaining elements, which is the idea of *divide and conquer*.

Algorithm BinarySearch(A, n, key):

1. Set low ← 0 and high ← n − 1.
2. Repeat while low ≤ high:
   - Set mid ← ⌊(low + high) / 2⌋.
   - If A[mid] = key, print "found at position mid" and stop.
   - Else if key < A[mid], set high ← mid − 1.
   - Else set low ← mid + 1.
3. If low > high, print "element not found".
4. Stop.

Worked trace (successful). A = 5, 12, 18, 23, 31, 42, 56, 67, 78, 89 (indices 0 to 9), key = 23.

| Step | low | high | mid | A[mid] | Decision |
|---|---|---|---|---|---|
| 1 | 0 | 9 | 4 | 31 | 23 < 31, so high ← 3 |
| 2 | 0 | 3 | 1 | 12 | 23 > 12, so low ← 2 |
| 3 | 2 | 3 | 2 | 18 | 23 > 18, so low ← 3 |
| 4 | 3 | 3 | 3 | 23 | Match, found at index 3 |

Worked trace (unsuccessful). Same array, key = 50.

| Step | low | high | mid | A[mid] | Decision |
|---|---|---|---|---|---|
| 1 | 0 | 9 | 4 | 31 | 50 > 31, so low ← 5 |
| 2 | 5 | 9 | 7 | 67 | 50 < 67, so high ← 6 |
| 3 | 5 | 6 | 5 | 42 | 50 > 42, so low ← 6 |
| 4 | 6 | 6 | 6 | 56 | 50 < 56, so high ← 5 |
| 5 | 6 | 5 | – | – | low > high, so not found |

The maximum number of comparisons is ⌊log₂ n⌋ + 1. For n = 10 this is 4, which matches the successful trace above. Hence the time complexity is O(log₂ n) in the average and worst case and O(1) in the best case (key at the first mid).

**3. Binary Search Tree (Tree) Search.** A **binary search tree** is a binary tree in which, for every node, all keys in the left subtree are smaller than the node's key and all keys in the right subtree are larger. Searching starts at the root and uses this property to move left or right, so only one path from root towards a leaf is examined.

Algorithm BSTSearch(root, key):

1. Set ptr ← root.
2. Repeat while ptr ≠ NULL:
   - If key = ptr.info, print "found" and stop.
   - Else if key < ptr.info, set ptr ← ptr.left.
   - Else set ptr ← ptr.right.
3. Print "not found" (ptr has become NULL).
4. Stop.

Example: build a BST by inserting 50, 30, 70, 20, 40, 60, 80. The root is 50; 30 and 70 are its children; 20 and 40 are children of 30; 60 and 80 are children of 70.

- Search 60: 60 > 50 → go right to 70; 60 < 70 → go left to 60; match. Found in 3 comparisons.
- Search 45: 45 < 50 → left to 30; 45 > 30 → right to 40; 45 > 40 → right child is NULL. Not found.

If the tree is balanced, its height is about log₂ n, so search takes O(log₂ n). If keys are inserted in sorted order (for example 10, 20, 30, 40), the tree becomes skewed like a linked list and search degrades to O(n).

**Comparison of the three techniques.**

| Basis | Sequential search | Binary search | BST search |
|---|---|---|---|
| Data requirement | Sorted or unsorted | Must be sorted | Must be in a BST |
| Data structure | Array or linked list | Array (random access) | Linked binary tree |
| Method | Compare one by one | Halve the range each step | Follow one root-to-leaf path |
| Best case | O(1) | O(1) | O(1) |
| Average case | O(n) | O(log₂ n) | O(log₂ n) |
| Worst case | O(n) | O(log₂ n) | O(n) (skewed tree) |
| Insertion/deletion | Easy | Costly (shifting to keep order) | Easy, O(height) |
| Suitable for | Small or unsorted lists | Large static sorted lists | Dynamic data with frequent insertions |

**How it's asked in exams.** Very common. Typical forms are *"What is binary search? Write an algorithm for binary search"*, *"What is the idea behind binary search? Write down its algorithm and illustrate with example"* (6–8 marks), *"Explain sequential, binary and tree searching algorithms along with example"* (8–12 marks) and *"Short note: Binary Search"* (4 marks). Write the definition of searching first, then for each technique give a one-paragraph idea, the numbered algorithm, and a traced example with low, high and mid shown in a table for binary search. Mention the condition that the array must be sorted. End with the comparison table or a concluding line such as: *"Hence, binary search is far faster than linear search for large sorted arrays, taking O(log₂ n) time instead of O(n)."*`,
  },

  "Hashing: Hash Functions, Hash Table, Collision Resolution": {
    selfTest: [
      "Using the division method with a table of size 10, where does key 52 go?",
      "Keys 42 and 52 both hash to index 2 in a table of size 10. Using linear probing, where does 52 go if 42 is already there?",
      "What is the difference between open addressing and separate chaining?",
    ],
    body: `**Definition.** **Hashing** is a searching technique in which the position of a record is calculated directly from its key using a mathematical function called a **hash function**. The records are stored in an array called a **hash table**, and each position of the table is called a *slot* or *bucket*. Ideally hashing allows insertion, deletion and search in constant time, O(1), independent of the number of records.

**Explanation.** In linear search we compare the key with many elements, and even binary search needs about log₂ n comparisons. Hashing avoids comparisons altogether: the hash function h(k) converts the key k into an index, and the record is stored at or fetched from that index. For example, if student roll numbers are stored in a table of size 100 using h(k) = k mod 100, then roll number 4521 is found immediately at index 21.

**Hash table.** A hash table is an array of fixed size m, where each slot holds one record (or a pointer to a list of records). The **load factor** α = n / m, where n is the number of keys stored, measures how full the table is. A low load factor means fewer collisions and faster operations.

**Characteristics of a good hash function:**

- It should be **easy and fast to compute**.
- It should **distribute keys uniformly** over the whole table, so that all slots are used evenly.
- It should **minimize collisions**, meaning different keys should rarely produce the same index.
- It should use **all parts of the key**, so that keys differing slightly still get different indices.

**Common hash functions (with numbers):**

1. **Division method.** h(k) = k mod m, where m is the table size (preferably a prime number not close to a power of 2). Example: with m = 10, h(52) = 52 mod 10 = 2; with m = 7, h(52) = 52 mod 7 = 3.
2. **Mid-square method.** Square the key and take the middle digits as the index. Example: k = 3205, k² = 10272025. For a table of size 100 we take the middle two digits, 72, so h(3205) = 72.
3. **Folding method.** Split the key into parts of equal size (the last part may be shorter) and add the parts, ignoring the final carry if needed. Example: k = 12345678 with 3-digit parts gives 123 + 456 + 78 = 657, so h(k) = 657 for a table of size 1000. In **fold boundary**, alternate parts are reversed before adding: 123 + 654 + 78 = 855.

**Collision.** A **collision** occurs when two different keys hash to the same index, that is, h(k₁) = h(k₂) for k₁ ≠ k₂. Example: with m = 10, h(42) = 2 and h(52) = 2. Since the number of possible keys is far larger than the table size, collisions cannot be completely avoided, so a **collision resolution technique** is required.

**Collision resolution techniques.** They fall into two groups: **open addressing** (find another empty slot inside the same table: linear probing, quadratic probing, double hashing) and **separate chaining** (store colliding keys in a linked list attached to the slot).

For all the worked examples below, insert the keys **42, 18, 52, 38, 72, 25** into a table of size m = 10 using h(k) = k mod 10. The home addresses are: 42 → 2, 18 → 8, 52 → 2, 38 → 8, 72 → 2, 25 → 5.

**1. Linear probing.** On a collision, check the next slots one by one: hᵢ(k) = (h(k) + i) mod m, for i = 0, 1, 2, …

- 42 → 2 (empty), stored at 2.
- 18 → 8 (empty), stored at 8.
- 52 → 2 is full; try 3 (empty), stored at 3.
- 38 → 8 is full; try 9 (empty), stored at 9.
- 72 → 2 full, 3 full, try 4 (empty), stored at 4.
- 25 → 5 (empty), stored at 5.

| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
| Key | – | – | 42 | 52 | 72 | 25 | – | – | 18 | 38 |

Linear probing is simple but suffers from **primary clustering**: occupied slots form long continuous blocks (indices 2 to 5 here), and any key hashing into a block has to travel to its end.

**2. Quadratic probing.** On a collision, jump by squares: hᵢ(k) = (h(k) + i²) mod m, for i = 0, 1, 2, …

- 42 → 2, stored at 2. 18 → 8, stored at 8.
- 52 → 2 full; i = 1: (2 + 1) = 3, stored at 3.
- 38 → 8 full; i = 1: (8 + 1) = 9, stored at 9.
- 72 → 2 full; i = 1: 3 full; i = 2: (2 + 4) = 6, stored at 6.
- 25 → 5, stored at 5.

| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
| Key | – | – | 42 | 52 | – | 25 | 72 | – | 18 | 38 |

Quadratic probing removes primary clustering, but keys with the same home address still follow the same probe sequence (**secondary clustering**), and it may fail to find an empty slot unless the table size is prime and the table is at most half full.

**3. Double hashing.** A second hash function decides the step size: hᵢ(k) = (h₁(k) + i × h₂(k)) mod m, where h₁(k) = k mod 10 and here h₂(k) = 7 − (k mod 7). h₂ must never be 0.

- 42 → 2, stored at 2. 18 → 8, stored at 8.
- 52 → 2 full; h₂(52) = 7 − 3 = 4; i = 1: (2 + 4) mod 10 = 6, stored at 6.
- 38 → 8 full; h₂(38) = 7 − 3 = 4; i = 1: (8 + 4) mod 10 = 2 (full); i = 2: (8 + 8) mod 10 = 6 (full); i = 3: (8 + 12) mod 10 = 0, stored at 0.
- 72 → 2 full; h₂(72) = 7 − 2 = 5; i = 1: (2 + 5) mod 10 = 7, stored at 7.
- 25 → 5, stored at 5.

| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
| Key | 38 | – | 42 | – | – | 25 | 52 | 72 | 18 | – |

Because different keys get different step sizes, double hashing avoids both primary and secondary clustering. In practice m should be prime so that every slot can be reached.

**4. Separate chaining.** Each slot of the table holds a pointer to a linked list, and every key that hashes to that slot is inserted into its list. The table never overflows.

- Index 2: 42 → 52 → 72
- Index 5: 25
- Index 8: 18 → 38
- All other indices: NULL

Chaining is easy to implement and deletion is simple, but it needs extra memory for pointers, and search time grows with the length of the chain (average O(1 + α)).

**Comparison of open addressing and chaining.**

| Basis | Open addressing | Separate chaining |
|---|---|---|
| Where colliding keys go | Another empty slot in the same table | Linked list at the same slot |
| Table capacity | At most m keys (α ≤ 1) | More than m keys allowed (α can exceed 1) |
| Extra memory | None | Pointers for each node |
| Clustering | Yes (linear, quadratic) | No clustering |
| Deletion | Tricky (needs a "deleted" marker) | Simple list deletion |

**How it's asked in exams.** Typical questions are *"Explain different hash collision resolution techniques in brief"* (8 marks), *"Short note: Hashing"* (4 marks), *"What is a hash function? Explain its types"* and numeric ones like *"Insert the keys 42, 18, 52, 38, 72, 25 into a hash table of size 10 using linear probing and chaining."* Start with definitions of hashing, hash function, hash table and collision. List the qualities of a good hash function and show the division, mid-square and folding methods with one number each. For collision resolution, give the formula of each probe method, insert the keys one by one showing every probe, and draw the final table as a row of indices. Conclude with a line such as: *"Thus hashing gives O(1) average search time, and a good hash function with a suitable collision resolution technique keeps it close to constant."*`,
  },

  "Sorting: Insertion, Selection, Bubble, Quick Sort, Merge Sort, Radix Sort, Shell Sort, Heap Sort": {
    selfTest: [
      "Show the array 25, 12, 36, 8, 17 after the first pass of bubble sort.",
      "Show the array 25, 12, 36, 8, 17 after the first pass of selection sort.",
      "Which of the eight sorting algorithms are stable, and which one needs O(n) extra memory?",
    ],
    body: `**Definition.** **Sorting** is the process of arranging the elements of a list in a specific order, either ascending or descending, based on a key. Sorting is needed because sorted data can be searched much faster (for example by binary search), duplicates are easy to detect, and reports such as merit lists and telephone directories are meaningful only when ordered.

**Explanation.** Sorting algorithms are classified in several ways:

- **Internal sorting** keeps all data in main memory (all eight algorithms here). **External sorting** is used when data is too large for memory and must be sorted on disk, usually using a merge-based method.
- **Comparison-based sorts** (bubble, selection, insertion, shell, quick, merge, heap) decide order by comparing keys. **Non-comparison sorts** (radix) use the digits of the keys.
- A sort is **stable** if equal keys keep their original relative order, and **in-place** if it needs only O(1) extra memory.

All traces below sort the same array into ascending order: **25, 12, 36, 8, 17** (n = 5, indices 0 to 4).

**1. Insertion Sort.** The list is divided into a sorted part (initially the first element) and an unsorted part. In each pass, the next element (the *key*) is taken and inserted into its correct place in the sorted part by shifting larger elements one position right, just like arranging playing cards in the hand.

1. Repeat for i ← 1 to n − 1:
2. Set key ← A[i] and j ← i − 1.
3. While j ≥ 0 and A[j] > key: set A[j + 1] ← A[j] and j ← j − 1.
4. Set A[j + 1] ← key.
5. Stop.

| Pass | Key | Array after pass |
|---|---|---|
| Start | – | 25, 12, 36, 8, 17 |
| 1 | 12 | 12, 25, 36, 8, 17 |
| 2 | 36 | 12, 25, 36, 8, 17 (no shift) |
| 3 | 8 | 8, 12, 25, 36, 17 |
| 4 | 17 | 8, 12, 17, 25, 36 |

Best case O(n) (already sorted), worst and average O(n²); stable and in-place.

**2. Selection Sort.** In each pass, the smallest element of the unsorted part is *selected* and swapped with the first element of the unsorted part, so the sorted part grows by one element per pass.

1. Repeat for i ← 0 to n − 2:
2. Set min ← i.
3. Repeat for j ← i + 1 to n − 1: if A[j] < A[min], set min ← j.
4. If min ≠ i, swap A[i] and A[min].
5. Stop.

| Pass | Minimum found | Array after pass |
|---|---|---|
| Start | – | 25, 12, 36, 8, 17 |
| 1 | 8 (swap with 25) | 8, 12, 36, 25, 17 |
| 2 | 12 (already in place) | 8, 12, 36, 25, 17 |
| 3 | 17 (swap with 36) | 8, 12, 17, 25, 36 |
| 4 | 25 (already in place) | 8, 12, 17, 25, 36 |

It always makes n(n − 1)/2 comparisons (10 here), so it is O(n²) in all cases, but it makes at most n − 1 swaps. In-place, not stable.

**3. Bubble Sort.** Adjacent elements are compared and swapped if they are in the wrong order. After each pass the largest remaining element "bubbles up" to its final position at the end. If a pass makes no swap, the list is already sorted and the algorithm stops early.

1. Repeat for pass ← 1 to n − 1:
2. Set swapped ← false.
3. Repeat for j ← 0 to n − pass − 1: if A[j] > A[j + 1], swap them and set swapped ← true.
4. If swapped = false, stop (the list is sorted).
5. Stop.

| Pass | Comparisons and swaps | Array after pass |
|---|---|---|
| Start | – | 25, 12, 36, 8, 17 |
| 1 | 25↔12 swap, 25–36 no, 36↔8 swap, 36↔17 swap | 12, 25, 8, 17, 36 |
| 2 | 12–25 no, 25↔8 swap, 25↔17 swap | 12, 8, 17, 25, 36 |
| 3 | 12↔8 swap, 12–17 no | 8, 12, 17, 25, 36 |
| 4 | 8–12 no swap, so stop | 8, 12, 17, 25, 36 |

Best case O(n) with the swapped flag, average and worst O(n²); stable and in-place.

**4. Quick Sort.** Quick sort is a *divide and conquer* algorithm. An element called the **pivot** is chosen and the array is **partitioned** so that all elements smaller than the pivot come before it and all larger elements come after it. The pivot is then in its final position, and the two sub-arrays are sorted recursively. (Here the last element is the pivot; choosing the first element is equally correct if the steps are shown consistently.)

Algorithm QuickSort(A, low, high):

1. If low < high:
2. p ← Partition(A, low, high).
3. QuickSort(A, low, p − 1) and QuickSort(A, p + 1, high).

Algorithm Partition(A, low, high):

1. Set pivot ← A[high] and i ← low − 1.
2. Repeat for j ← low to high − 1: if A[j] ≤ pivot, set i ← i + 1 and swap A[i] and A[j].
3. Swap A[i + 1] and A[high].
4. Return i + 1.

Trace, first partition with pivot = 17:

| j | A[j] | Action | Array |
|---|---|---|---|
| 0 | 25 | 25 > 17, no change | 25, 12, 36, 8, 17 |
| 1 | 12 | 12 ≤ 17, i ← 0, swap A[0], A[1] | 12, 25, 36, 8, 17 |
| 2 | 36 | 36 > 17, no change | 12, 25, 36, 8, 17 |
| 3 | 8 | 8 ≤ 17, i ← 1, swap A[1], A[3] | 12, 8, 36, 25, 17 |
| end | – | swap A[2] with pivot | 12, 8, **17**, 25, 36 |

Pivot 17 is now fixed at index 2. Left sub-array 12, 8 with pivot 8 becomes 8, 12. Right sub-array 25, 36 with pivot 36 stays 25, 36. Final result: **8, 12, 17, 25, 36**.

Best and average case O(n log₂ n); worst case O(n²) when the pivot is always the smallest or largest element (for example an already-sorted array with the last element as pivot). In-place (O(log₂ n) stack space), not stable.

**5. Merge Sort.** Merge sort is also *divide and conquer*. The array is repeatedly divided into two halves until each part has one element, and then the parts are **merged** back in sorted order. Merging two sorted lists is done by repeatedly comparing their front elements and copying the smaller one.

Algorithm MergeSort(A, low, high):

1. If low < high:
2. mid ← ⌊(low + high) / 2⌋.
3. MergeSort(A, low, mid) and MergeSort(A, mid + 1, high).
4. Merge the two sorted halves A[low..mid] and A[mid + 1..high] into a temporary array and copy it back.

Trace:

- Divide: 25, 12, 36, 8, 17 → [25, 12, 36] and [8, 17]
- Divide: [25, 12, 36] → [25, 12] and [36]; [8, 17] → [8] and [17]
- Divide: [25, 12] → [25] and [12]
- Merge: [25] + [12] → [12, 25]
- Merge: [12, 25] + [36] → [12, 25, 36]
- Merge: [8] + [17] → [8, 17]
- Merge: [12, 25, 36] + [8, 17] → compare 12/8 take 8, 12/17 take 12, 25/17 take 17, then copy 25, 36 → **[8, 12, 17, 25, 36]**

O(n log₂ n) in best, average and worst case; needs O(n) extra memory; stable. It is the basis of external sorting.

**6. Radix Sort.** Radix sort is a non-comparison sort. The keys are sorted digit by digit, starting from the least significant digit (units) to the most significant digit, using ten buckets (0–9). Each pass must be stable, so keys in the same bucket keep their previous order. Example list: **329, 457, 657, 839, 436, 720, 355**.

1. Find the maximum number of digits d.
2. Repeat for each digit position from units to the d-th digit:
3. Place every key into the bucket of its current digit, in order.
4. Collect the keys from bucket 0 to bucket 9 to form the new list.
5. Stop.

| Pass | Digit used | List after collecting buckets |
|---|---|---|
| Start | – | 329, 457, 657, 839, 436, 720, 355 |
| 1 | Units | 720, 355, 436, 457, 657, 329, 839 |
| 2 | Tens | 720, 329, 436, 839, 355, 457, 657 |
| 3 | Hundreds | 329, 355, 436, 457, 657, 720, 839 |

In pass 1 the buckets are 0: 720; 5: 355; 6: 436; 7: 457, 657; 9: 329, 839. Time O(d × (n + k)), where k = 10 is the number of buckets; extra space O(n + k); stable.

**7. Shell Sort.** Shell sort (by Donald Shell) is an improvement of insertion sort. It first sorts elements that are a distance *gap* apart, which moves small elements towards the front quickly, and then reduces the gap until it becomes 1. The final pass with gap 1 is a normal insertion sort on an almost-sorted list, so it is fast.

1. Set gap ← ⌊n / 2⌋.
2. Repeat while gap ≥ 1:
3. Perform insertion sort on the elements that are gap positions apart (for i ← gap to n − 1, insert A[i] among A[i − gap], A[i − 2×gap], …).
4. Set gap ← ⌊gap / 2⌋.
5. Stop.

| Pass | Gap | Sub-lists sorted | Array after pass |
|---|---|---|---|
| Start | – | – | 25, 12, 36, 8, 17 |
| 1 | 2 | indices 0, 2, 4: (25, 36, 17) → (17, 25, 36); indices 1, 3: (12, 8) → (8, 12) | 17, 8, 25, 12, 36 |
| 2 | 1 | ordinary insertion sort | 8, 12, 17, 25, 36 |

In pass 2, 8 is inserted before 17, 25 stays, 12 is inserted between 8 and 17, and 36 stays. Complexity depends on the gap sequence: about O(n log₂ n) in the best case, roughly O(n¹·⁵) on average with common sequences, and O(n²) in the worst case with Shell's original n/2 gaps. In-place, not stable.

**8. Heap Sort.** Heap sort uses a **max-heap**, a complete binary tree in which every parent is greater than or equal to its children (stored in an array with children of index i at 2i + 1 and 2i + 2). First the array is built into a max-heap, so the largest element is at the root. Then the root is repeatedly swapped with the last element of the heap, the heap size is reduced by one, and the root is heapified again.

1. Build a max-heap: for i ← ⌊n/2⌋ − 1 down to 0, call Heapify(A, n, i).
2. Repeat for last ← n − 1 down to 1:
3. Swap A[0] and A[last].
4. Call Heapify(A, last, 0) on the reduced heap.
5. Stop.

Heapify(A, size, i): find the largest of A[i] and its children within size; if a child is larger, swap it with A[i] and heapify that child's position again.

Build max-heap from 25, 12, 36, 8, 17:

- i = 1 (value 12, children 8 and 17): 17 is largest, swap → 25, 17, 36, 8, 12
- i = 0 (value 25, children 17 and 36): 36 is largest, swap → **36, 17, 25, 8, 12** (max-heap)

Extractions (the part after the bar is sorted):

| Step | Swap root with last | After heapify |
|---|---|---|
| 1 | 12, 17, 25, 8 ǀ 36 | 25, 17, 12, 8 ǀ 36 |
| 2 | 8, 17, 12 ǀ 25, 36 | 17, 8, 12 ǀ 25, 36 |
| 3 | 12, 8 ǀ 17, 25, 36 | 12, 8 ǀ 17, 25, 36 |
| 4 | 8 ǀ 12, 17, 25, 36 | 8, 12, 17, 25, 36 (sorted) |

O(n log₂ n) in all cases, in-place (O(1) extra memory), not stable.

**How it's asked in exams.** Sorting appears in almost every Purbanchal DSA paper. Typical forms are *"What is sorting? Explain quick sort with proper example"* (8–12 marks), *"Discuss merge sort method with example"*, *"Define internal and external sorting. Explain bubble sort with example"*, *"Justify the need of sorting. Discuss selection sort and merge sort with example"* and short notes on *insertion sort* or *heap sort* (4 marks). Write the definition of sorting and why it is needed, then for the asked algorithm give its idea in 2–3 sentences, the numbered algorithm, and a complete pass-by-pass trace on a small array of 6–8 numbers, showing the array after every pass (and the pivot position or merge steps where relevant). For a "differentiate searching and sorting" part, state that searching finds an element while sorting arranges all elements, and that sorting often precedes efficient searching. Always end with a concluding line giving best, average and worst complexity and stability, for example: *"Hence, merge sort sorts the list in O(n log₂ n) time in all cases, but requires O(n) extra space."*`,
  },

  "Efficiency of Searching and Sorting Algorithms": {
    selfTest: [
      "What is the worst-case time complexity of quick sort, and when does it occur?",
      "How many comparisons does binary search need at most for n = 1000?",
      "Which sorting algorithm would you choose for a nearly sorted list, and why?",
    ],
    body: `**Definition.** The **efficiency** of an algorithm is a measure of the resources it uses, mainly **time** (number of basic operations such as comparisons and swaps) and **space** (extra memory), expressed as a function of the input size n. It is usually written in **Big-O notation**, which gives the upper bound on the growth rate, and analysed for the **best case**, **average case** and **worst case**.

**Explanation.** For searching algorithms the basic operation counted is the key comparison. For sorting algorithms it is the number of comparisons and data movements (swaps or shifts). Growth rate matters more than exact counts: for n = 1000, an O(n²) sort does about 1,000,000 operations, while an O(n log₂ n) sort does about 1000 × 10 = 10,000 operations. Similarly, linear search may need 1000 comparisons, but binary search needs at most ⌊log₂ 1000⌋ + 1 = 10 comparisons.

Other factors besides time are also important:

- **Space.** In-place algorithms need only O(1) extra memory, while merge sort needs O(n) and radix sort needs O(n + k).
- **Stability.** A stable sort keeps equal keys in their original order, which matters when sorting records on multiple fields (for example sorting by name and then by marks).
- **Adaptiveness.** Some algorithms (insertion, bubble with a flag) run faster on data that is already nearly sorted.

**Efficiency of searching algorithms.**

| Algorithm | Best | Average | Worst | Extra space | Requirement |
|---|---|---|---|---|---|
| Sequential search | O(1) | O(n) | O(n) | O(1) | None |
| Binary search | O(1) | O(log₂ n) | O(log₂ n) | O(1) iterative | Sorted array |
| BST search | O(1) | O(log₂ n) | O(n) | O(1) iterative | Data in a BST |
| Hashing | O(1) | O(1) | O(n) | O(m) table | Good hash function |

**Efficiency of sorting algorithms.**

| Algorithm | Best | Average | Worst | Extra space | Stable |
|---|---|---|---|---|---|
| Bubble sort (with flag) | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Selection sort | O(n²) | O(n²) | O(n²) | O(1) | No |
| Insertion sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Shell sort | O(n log₂ n) | about O(n¹·⁵) | O(n²) | O(1) | No |
| Quick sort | O(n log₂ n) | O(n log₂ n) | O(n²) | O(log₂ n) stack | No |
| Merge sort | O(n log₂ n) | O(n log₂ n) | O(n log₂ n) | O(n) | Yes |
| Heap sort | O(n log₂ n) | O(n log₂ n) | O(n log₂ n) | O(1) | No |
| Radix sort | O(d(n + k)) | O(d(n + k)) | O(d(n + k)) | O(n + k) | Yes |

Here d is the number of digits in the largest key and k is the number of buckets (10 for decimal digits).

**Why the worst cases happen.**

- **Quick sort** becomes O(n²) when the pivot is always the smallest or largest element, for example an already-sorted array with the first or last element as pivot, because each partition removes only one element. Choosing a random or median-of-three pivot avoids this.
- **BST search** becomes O(n) when keys are inserted in sorted order and the tree becomes skewed.
- **Hashing** becomes O(n) when many keys collide into the same slot or cluster.

**When to use which.**

- **Sequential search**: small lists, unsorted data, or linked lists where random access is not possible.
- **Binary search**: large sorted arrays that do not change often.
- **BST search**: dynamic data with frequent insertions and deletions along with searches.
- **Hashing**: when very fast lookup by exact key is required, such as symbol tables in compilers and database indexes.
- **Bubble, selection, insertion**: small data sets or teaching; insertion sort is best for nearly sorted data, and selection sort when swaps are costly.
- **Shell sort**: medium-sized arrays when a simple in-place method faster than insertion sort is needed.
- **Quick sort**: general-purpose internal sorting; fastest in practice on average.
- **Merge sort**: when guaranteed O(n log₂ n) and stability are needed, linked lists, and external sorting of huge files.
- **Heap sort**: when guaranteed O(n log₂ n) is needed with no extra memory.
- **Radix sort**: integers or fixed-length strings with few digits.

**Example.** For n = 8 elements: selection sort always makes 8 × 7 / 2 = 28 comparisons, while merge sort makes at most about n log₂ n = 8 × 3 = 24, and binary search on 8 sorted elements needs at most ⌊log₂ 8⌋ + 1 = 4 comparisons compared with 8 for linear search.

**How it's asked in exams.** Asked as *"Compare the efficiency of different sorting algorithms"*, *"Short note: Big O analysis"* (4 marks), or as the concluding part of any sorting or searching question (*"…and analyse its complexity"*). Define efficiency, time and space complexity and best/average/worst case, then present the comparison table, explain why the worst cases occur, and give the "when to use which" points. Finish with a conclusion such as: *"Therefore, no single algorithm is best for all situations; O(n log₂ n) algorithms like quick, merge and heap sort are preferred for large data, while simple O(n²) sorts are adequate for small or nearly sorted lists."*`,
  },
};
