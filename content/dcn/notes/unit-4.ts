import type { TopicNote } from "@/content/types";

export const unit4Notes: Record<string, TopicNote> = {
  Internetworks: {
    selfTest: [
      "What is an internetwork, and which device connects the individual networks in it?",
      "Why is the network layer needed when the data link layer already delivers frames?",
      "Name the two approaches to packet switching used at the network layer.",
    ],
    body: `**Definition.** An **internetwork** (internet with a small i) is a collection of two or more separate networks, often of different types (LANs and WANs), connected together by **routers** so that they behave as one large network. The global **Internet** is the largest example.

**Explanation.** The data link layer can only deliver a frame from one node to the next node on the *same* link (hop-to-hop delivery). When a packet must travel from a host on one network to a host on a different network, something must decide the path across many links. This is the job of the **network layer**, which provides **host-to-host (source-to-destination) delivery**.

When a packet travels through an internetwork, each router receives the frame, strips the data link header, looks at the **network-layer (IP) address**, consults its routing table, and forwards the packet in a new frame on the next link. The IP address stays the same end to end, while the physical (MAC) addresses change at every hop.

**Main functions of the network layer in an internetwork:**

- **Logical addressing.** Each host gets a universal address (IP address) that is independent of the underlying physical network.
- **Routing.** Selecting the best path through the internetwork.
- **Forwarding.** Moving a packet from the router's input interface to the correct output interface.
- **Packetizing.** Encapsulating transport-layer data into packets (datagrams).
- **Fragmentation.** Splitting a packet when the next network has a smaller maximum transfer unit (MTU).

**Switching approaches.**

- **Datagram approach (connectionless).** Each packet is treated independently and may take a different route; packets can arrive out of order. The Internet (IP) uses this approach.
- **Virtual-circuit approach (connection-oriented).** A path is set up first and all packets follow it in order, as in ATM and Frame Relay.

**Example.** A student in Kathmandu opens a website hosted in the USA. The packet passes from the home Wi-Fi LAN to the ISP's network, across several backbone WANs, and finally to the server's LAN. Routers at each boundary forward it using only the destination IP address.

**How it's asked in exams.** *"What is an internetwork? Explain the need for the network layer in an internetwork"* (4–8 marks). Define internetwork, draw the diagram showing three or four networks (LANs and a WAN) joined by routers with a packet path from host A to host B, list the network-layer functions with one line each, and conclude that the network layer makes a set of different networks appear as one logical network.`,
  },

  Addressing: {
    selfTest: [
      "Find the class, default mask and network address of 172.16.45.10.",
      "For the block 192.168.10.0/26, how many addresses are in each subnet and what is the subnet mask?",
      "How many bits long is an IPv4 address, and how is it usually written?",
    ],
    body: `**Definition.** An **IPv4 address** is a **32-bit** logical address that uniquely and universally identifies the connection of a host or router to the Internet. It is written in **dotted-decimal notation**, four bytes separated by dots, each from 0 to 255, for example 192.168.1.10. The total address space is 2³² (about 4.3 billion) addresses.

**Explanation.** Every IP address has two parts: a **netid (prefix)** identifying the network, and a **hostid (suffix)** identifying the host on that network. Routers only need the prefix to forward packets, which keeps routing tables small.

**1. Classful addressing.** The address space was originally divided into five classes, decided by the first bits of the first byte:

| Class | First byte range | Leading bits | Default mask | Networks / hosts | Use |
|---|---|---|---|---|---|
| A | 0–127 | 0 | 255.0.0.0 (/8) | 128 nets, 2²⁴ − 2 hosts each | Very large organisations |
| B | 128–191 | 10 | 255.255.0.0 (/16) | 16,384 nets, 65,534 hosts | Medium organisations |
| C | 192–223 | 110 | 255.255.255.0 (/24) | about 2 million nets, 254 hosts | Small networks |
| D | 224–239 | 1110 | none | — | Multicast |
| E | 240–255 | 1111 | none | — | Reserved |

The main problem was **address wastage**: a class A or B block was far too big for most organisations, and class C was too small.

**2. Classless addressing (CIDR).** To solve wastage, blocks of any size that is a power of 2 are given out. An address is written with a **prefix length** in slash notation, a.b.c.d/n, where n is the number of network bits. The rules are: the number of addresses is a power of 2, and the first address is evenly divisible by that number.

- **First (network) address:** set the rightmost 32 − n bits to 0.
- **Last (broadcast) address:** set the rightmost 32 − n bits to 1.
- **Number of addresses:** 2³²⁻ⁿ.

**3. Subnetting.** An organisation divides its block into smaller **subnets** by borrowing bits from the host part. This improves security, management and reduces broadcast traffic. The **subnet mask** has 1s for network plus subnet bits and 0s for host bits.

**Worked example 1 (classful).** 172.16.45.10: the first byte is 172, which lies in 128–191, so it is **class B**. Default mask 255.255.0.0, network address **172.16.0.0**, broadcast 172.16.255.255.

**Worked example 2 (classless).** Given 205.16.37.39/28:

- Host bits = 32 − 28 = 4, so the block has 2⁴ = **16 addresses**.
- Last byte 39 = 00100111. Setting the last 4 bits to 0 gives 00100000 = 32, so the first address is **205.16.37.32**.
- Setting them to 1 gives 00101111 = 47, so the last address is **205.16.37.47**.
- Mask /28 = **255.255.255.240**.

**Worked example 3 (subnetting).** Divide 192.168.10.0/24 into 4 equal subnets. Borrow 2 bits (2² = 4), so the new prefix is **/26**, mask **255.255.255.192**, each subnet has 2⁶ = 64 addresses (62 usable hosts):

- Subnet 1: 192.168.10.0 – 192.168.10.63
- Subnet 2: 192.168.10.64 – 192.168.10.127
- Subnet 3: 192.168.10.128 – 192.168.10.191
- Subnet 4: 192.168.10.192 – 192.168.10.255

**Special addresses.** 127.x.x.x is loopback; private ranges are 10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16, which are used inside organisations with **NAT** (Network Address Translation) to share one public address.

**How it's asked in exams.** Very frequent, 8–12 marks: *"Explain classful and classless addressing"* or *"An organisation is granted the block 190.100.0.0/16; design subnets..."* Write the definition of an IP address, the class table, the drawbacks of classful addressing, CIDR with its rules, then a fully worked numeric example showing binary of the last byte, first address, last address, number of addresses and mask. End with a concluding sentence that classless addressing and subnetting make efficient use of the limited IPv4 space.`,
  },

  Routing: {
    selfTest: [
      "What is the difference between routing and forwarding?",
      "Differentiate static and dynamic routing in one line each.",
      "What columns does a typical routing table contain?",
    ],
    body: `**Definition.** **Routing** is the process of determining the best path for a packet to travel from its source network to its destination network through an internetwork. The device that performs routing is a **router**, and the information it uses is stored in a **routing table**.

**Explanation.** Two closely related jobs happen in a router:

- **Routing** builds and updates the routing table, usually by running a routing protocol with neighbouring routers.
- **Forwarding** is the per-packet action of looking up the destination address in the table and sending the packet out of the correct interface to the next hop.

**Forwarding techniques.**

- **Next-hop method.** The table stores only the address of the next router instead of the complete route.
- **Network-specific method.** One entry for a whole destination network instead of one per host.
- **Host-specific method.** An entry for a single host, used for testing or security.
- **Default method.** A default route (0.0.0.0/0) is used when no other entry matches.

With classless addressing, a router uses **longest prefix match**: if several entries match, the one with the longest mask is chosen.

A routing table entry usually contains: **mask, network address, next-hop address, and output interface**, and optionally a metric (cost).

**Types of routing.**

| Basis | Static routing | Dynamic routing |
|---|---|---|
| Table creation | Entered manually by the administrator | Built automatically by routing protocols |
| Adaptation | Does not adapt to failures | Adapts to link failures and changes |
| Overhead | No protocol traffic | Uses bandwidth and CPU for updates |
| Suitable for | Small, stable networks | Large, changing networks like the Internet |
| Examples | Manual route commands | RIP, OSPF, BGP |

**Example.** A router has entries 180.70.65.128/25 → interface m0, 201.4.22.0/24 → m3, and default → m2. A packet for 180.70.65.140 matches the /25 entry, so it leaves through m0. A packet for 18.24.32.78 matches nothing specific, so it goes to the default route m2.

**How it's asked in exams.** *"What is routing? Differentiate between static and dynamic routing"* (6–8 marks). Define routing and forwarding separately, describe the routing table fields, give the comparison table, and draw the diagram showing a small network of four routers with the chosen path highlighted. Conclude that dynamic routing is essential for large internetworks.`,
  },

  "ARP, IP, ICMP, IPv6": {
    selfTest: [
      "What does ARP map to what, and is an ARP request unicast or broadcast?",
      "What is the minimum and maximum size of an IPv4 header?",
      "Give three differences between IPv4 and IPv6.",
    ],
    body: `**Definition.** These are the main protocols of the Internet's network layer. **IP** carries the data, **ARP** finds physical addresses, **ICMP** reports errors, and **IPv6** is the next-generation version of IP.

**1. ARP (Address Resolution Protocol).** ARP maps a known **logical (IP) address to a physical (MAC) address**, because frames on a LAN must carry the MAC address.

1. The sender broadcasts an **ARP request** on the LAN: "Who has IP 192.168.1.5? Tell me your MAC."
2. Every host receives it, but only the host with that IP replies with a **unicast ARP reply** containing its MAC address.
3. The sender stores the mapping in its **ARP cache** for later use.

**RARP** does the reverse (MAC to IP) and has been replaced by DHCP.

**2. IP (Internet Protocol, IPv4).** IP is an **unreliable, connectionless, best-effort datagram** protocol. It does not guarantee delivery, order or freedom from duplication; these are left to TCP. Each IP datagram has a header of **20 to 60 bytes**. Important fields are: version, header length (HLEN), service type (DSCP), total length, identification, flags and fragmentation offset (for fragmentation), **time to live (TTL)** which prevents packets looping forever, protocol (6 = TCP, 17 = UDP, 1 = ICMP), header checksum, and the source and destination IP addresses.

**3. ICMP (Internet Control Message Protocol).** Since IP has no error reporting, ICMP is used to send **error-reporting** and **query** messages back to the source.

- Error messages: destination unreachable, source quench, time exceeded (TTL reached 0), parameter problem, redirection.
- Query messages: echo request/reply (used by **ping**), timestamp request/reply. **Traceroute** uses time-exceeded messages.

**4. IPv6.** Developed because IPv4 addresses are running out. IPv6 uses **128-bit addresses** written in hexadecimal colon notation, for example 2001:0DB8:0000:0000:0000:0000:1428:57AB, which can be shortened to 2001:DB8::1428:57AB.

| Feature | IPv4 | IPv6 |
|---|---|---|
| Address size | 32 bits | 128 bits |
| Notation | Dotted decimal | Hexadecimal colon |
| Address space | about 4.3 × 10⁹ | about 3.4 × 10³⁸ |
| Header | Variable, 20–60 bytes | Fixed 40-byte base header plus extension headers |
| Checksum | Present in header | Removed (done by upper layers) |
| Fragmentation | By routers and sender | Only by the source host |
| Security | Optional (IPSec) | IPSec built in |
| Address resolution | ARP | Neighbour Discovery (ICMPv6) |
| Configuration | Manual or DHCP | Auto-configuration supported |
| Broadcast | Supported | Replaced by multicast and anycast |

**Example.** When a PC at 192.168.1.10 pings 192.168.1.5, it first sends an ARP broadcast to learn the MAC address of .5, then sends an ICMP echo request inside an IP datagram, and .5 answers with an ICMP echo reply.

**How it's asked in exams.** *"Explain ARP with its working"*, *"Explain the IPv4 header format"*, *"Differentiate IPv4 and IPv6"* (4–12 marks). For ARP, write the steps and draw the diagram showing the broadcast request and unicast reply. For IP, draw the header diagram in 32-bit rows and explain each field. For IPv6, give the comparison table and conclude that IPv6 solves address exhaustion and improves efficiency and security.`,
  },

  "Unicast Routing, Unicast Routing Protocol": {
    selfTest: [
      "What is the difference between intra-domain and inter-domain routing? Name one protocol of each.",
      "In distance vector routing, what information does a router share, and with whom?",
      "What algorithm does link state routing use to build its table?",
    ],
    body: `**Definition.** **Unicast routing** is routing a packet from one source to exactly **one destination**. A **unicast routing protocol** is a set of rules by which routers exchange information so that each router can build its routing table and find the least-cost path to every network.

**Explanation.** The Internet is divided into **autonomous systems (AS)**, groups of networks under one administration such as an ISP. Routing inside an AS is **intra-domain** (interior) routing, and routing between ASs is **inter-domain** (exterior) routing. Each link has a **metric** or cost, such as hop count, delay or bandwidth.

**1. Distance vector routing (used by RIP).** Each router keeps a table (vector) of the least distance to every destination and the next hop. Periodically, each router **shares its whole table only with its immediate neighbours**. On receiving a neighbour's table, the router adds the cost of the link to that neighbour and keeps the smaller value, using the **Bellman-Ford** idea: D(x,y) = min over neighbours v of [c(x,v) + D(v,y)].

*Worked example.* Router A has a link of cost 2 to B. B tells A that its distance to network N is 3. A's current distance to N is 7. New value = 2 + 3 = 5, which is less than 7, so A updates its entry to N: cost 5, next hop B.

Problem: **count-to-infinity** (slow convergence after a link failure), reduced by split horizon and poison reverse.

**RIP (Routing Information Protocol)** uses hop count as the metric, treats 16 as infinity (maximum 15 hops), and sends updates every 30 seconds.

**2. Link state routing (used by OSPF).** Each router discovers its neighbours and link costs, then creates a **link state packet (LSP)** and **floods it to every router** in the area. Every router therefore has the complete map (topology) of the network and runs **Dijkstra's shortest path algorithm** to build a shortest-path tree with itself as the root.

**OSPF (Open Shortest Path First)** divides an AS into **areas** with a backbone area 0, uses cost based on bandwidth, and sends updates only when a change occurs.

**3. Path vector routing (used by BGP).** Used between ASs. Each entry stores the **full path (list of ASs)** to the destination, which lets routers apply policies and avoid loops. **BGP (Border Gateway Protocol)** is the inter-domain protocol of the Internet.

| Basis | Distance vector | Link state |
|---|---|---|
| Information shared | Whole routing table | Only the state of its own links |
| Shared with | Neighbours only | All routers (flooding) |
| Algorithm | Bellman-Ford | Dijkstra |
| Knowledge of network | Only distances via neighbours | Complete topology |
| Updates | Periodic | Triggered by changes |
| Convergence | Slow, count-to-infinity problem | Fast |
| Resource use | Less memory and CPU | More memory and CPU |
| Example | RIP | OSPF |

**How it's asked in exams.** *"Explain distance vector routing with example"*, *"Compare distance vector and link state routing"* or *"Write short notes on RIP/OSPF/BGP"* (8–12 marks). Define unicast routing and AS, draw the diagram showing four or five routers with link costs and the initial and updated table of one router, give the comparison table, and conclude that link state routing suits large networks while distance vector is simpler for small ones.`,
  },

  "Multicast Routing, Multicast Routing Protocols": {
    selfTest: [
      "Differentiate unicast, multicast and broadcast in one line each.",
      "Which IPv4 class is used for multicast addresses, and what is its range?",
      "What protocol does a host use to tell its router it wants to join a multicast group?",
    ],
    body: `**Definition.** **Multicast routing** is delivering one packet from a single source to a **group of destinations** (a multicast group) at the same time, with the packet copied only where the paths split. A **multicast routing protocol** builds the distribution tree that routers use to forward such packets.

**Explanation.** In **unicast** there is one source and one destination. In **broadcast** one source sends to all hosts. In **multicast** one source sends to a selected group. Multicast is more efficient than sending many separate unicast copies, because each link carries only one copy. Multicast groups use **class D addresses (224.0.0.0 to 239.255.255.255)**. Hosts join or leave a group using **IGMP (Internet Group Management Protocol)**, which informs the local router of group membership.

**Multicast trees.**

- **Source-based tree.** Each router builds a separate shortest-path tree for every source-group combination. It gives optimal paths but needs more router memory.
- **Group-shared tree.** One router, called the **core** or **rendezvous point (RP)**, is chosen for the group, and all sources send to it; one tree is shared by the whole group.

**Key techniques.**

- **Reverse Path Forwarding (RPF).** A router forwards a multicast packet only if it arrived on the interface that is on the shortest path back to the source. This prevents loops.
- **Reverse Path Broadcasting (RPB)** adds a rule so each network receives only one copy.
- **Reverse Path Multicasting (RPM)** adds **pruning** (stop sending where there are no members) and **grafting** (resume when a member joins).

**Multicast routing protocols.**

| Protocol | Tree type | Based on | Notes |
|---|---|---|---|
| MOSPF (Multicast OSPF) | Source-based | Link state | Uses group membership in LSAs, runs Dijkstra per source |
| DVMRP | Source-based | Distance vector | Uses RPF with pruning and grafting |
| CBT (Core-Based Tree) | Group-shared | Core router | One shared tree rooted at the core |
| PIM-DM (Dense Mode) | Source-based | Any unicast protocol | For areas where many members exist; flood and prune |
| PIM-SM (Sparse Mode) | Group-shared | Rendezvous point | For areas with few scattered members |

PIM is called *Protocol Independent* because it works with whatever unicast routing protocol is already running.

**Example.** A college streams a live lecture to 50 computers in three labs. With multicast, the server sends one stream; routers copy it only at the branch towards each lab, instead of the server sending 50 separate unicast streams.

**How it's asked in exams.** *"What is multicast routing? Explain multicast routing protocols"* or short notes on *IGMP, DVMRP, PIM* (6–8 marks). Define multicast and compare it with unicast and broadcast, explain source-based versus group-shared trees, describe RPF, then briefly explain each protocol with the table. Draw the diagram showing a source, routers and group members with the tree branches. Conclude that multicast saves bandwidth for applications like video conferencing and IPTV.`,
  },
};
