import type { TopicNote } from "@/content/types";

export const unit3Notes: Record<string, TopicNote> = {
  "Types of Errors, Detection, Error Correction": {
    selfTest: [
      "What is the difference between a single-bit error and a burst error?",
      "Find the even-parity bit for the data 1100001.",
      "Find the CRC remainder for dataword 1001 with generator 1011.",
    ],
    body: `**Definition.** An **error** occurs when the bits received are not the same as the bits sent, usually because of noise, interference or attenuation on the transmission medium. **Error detection** means finding out that an error has happened; **error correction** means finding and fixing the exact bits that are wrong.

**Types of errors.**

- **Single-bit error.** Only one bit of the data unit is changed (0 → 1 or 1 → 0). Example: 00000010 is sent and 00001010 is received. It is rare in serial transmission because noise normally lasts longer than one bit time.
- **Burst error.** Two or more bits in the data unit are changed. The **length of the burst** is counted from the first corrupted bit to the last corrupted bit, even if some bits in between are correct. Burst errors are the most common type, because a 1 ms noise spike on a 1 kbps line affects 1 bit, but on a 1 Mbps line it affects 1000 bits.

**Redundancy.** All detection and correction methods add extra **redundant bits** to the data. The sender computes them from the data; the receiver recomputes and checks them.

**Detection methods.**

1. **Simple parity check (VRC).** One parity bit is added so that the total number of 1s is even (even parity) or odd (odd parity). It detects all single-bit errors and any odd number of errors, but misses an even number of errors.
2. **Two-dimensional parity (LRC).** Data is arranged in a table; a parity bit is computed for each row and each column. It detects most burst errors and can locate a single-bit error.
3. **Cyclic Redundancy Check (CRC).** The data is appended with (n) zeros, where n is one less than the generator length, and divided by the generator using modulo-2 (XOR) division. The remainder is appended as the CRC. The receiver divides the codeword by the same generator; a zero remainder means no error. CRC detects all burst errors shorter than or equal to the degree of the generator polynomial.
4. **Checksum.** Data is split into k-bit words, added using one's complement arithmetic, and the complement of the sum is sent. The receiver adds everything including the checksum; if the complemented result is 0, the data is accepted. It is used in IP, TCP and UDP.

**Error correction.** It is done in two ways: **retransmission (ARQ)**, where the receiver asks the sender to resend, and **Forward Error Correction (FEC)**, where the receiver corrects the error itself using extra redundant bits. The **Hamming distance** d(x, y) is the number of positions where two codewords differ. To detect s errors the minimum Hamming distance must be d_min = s + 1; to correct t errors it must be d_min = 2t + 1. The **Hamming code** places r redundant bits at positions 1, 2, 4, 8 …, where 2ʳ ≥ m + r + 1. For m = 4 data bits, r = 3, giving the Hamming (7, 4) code, which corrects any single-bit error.

**Example (parity).** Data 1100001 has three 1s. For even parity the parity bit is 1, so 11000011 is sent.

**Example (CRC).** Dataword 1001, generator 1011 (4 bits, so append 3 zeros): divide 1001000 by 1011.

- 1001 ⊕ 1011 = 0010 → bring down 0 → 0100
- Leading bit is 0, so ⊕ 0000 → 100, bring down 0 → 1000
- 1000 ⊕ 1011 = 0011 → bring down 0 → 0110
- Leading bit is 0, so ⊕ 0000 → remainder **110**

Codeword sent = **1001110**. The receiver divides 1001110 by 1011 and gets remainder 000, so it accepts the data.

**Example (checksum).** Send 7, 11, 12, 0, 6 using 4-bit words. Sum = 36 = 100100₂. Wrap the extra bits: 0100 + 10 = 0110 (6). Checksum = complement = 1001 (9). The receiver adds 7+11+12+0+6+9 = 45 = 101101₂ → 1101 + 10 = 1111 → complement 0000, so no error.

**How it's asked in exams.** *"What are the types of errors? Explain CRC with an example"* or *"Explain error detection techniques"* (8–12 marks). Define error and both types with examples, explain redundancy, then describe parity, 2D parity, CRC and checksum. Always include one fully worked CRC division, shown line by line, and state the final codeword. End with a line on which method is used where (CRC in Ethernet/HDLC, checksum in IP/TCP).`,
  },

  "Flow and Error Control": {
    selfTest: [
      "What problem does flow control solve?",
      "What does ARQ stand for, and what three events trigger a retransmission?",
      "What is piggybacking?",
    ],
    body: `**Definition.** **Flow control** is a set of procedures that restricts the amount of data a sender can transmit before waiting for an acknowledgment, so that a fast sender does not overwhelm a slow receiver. **Error control** is the set of mechanisms for detecting corrupted or lost frames and getting them retransmitted. At the data link layer, both are usually combined in a single protocol.

**Flow control explained.** Every receiver has a limited **buffer** and limited processing speed. If frames arrive faster than they can be processed, the buffer overflows and frames are lost. Flow control solves this by making the sender wait for permission (an acknowledgment) before sending more. Two basic approaches exist:

- **Stop-and-Wait:** send one frame, then wait for its ACK.
- **Sliding Window:** send several frames (up to the window size) before needing an ACK. The window "slides" forward as ACKs arrive.

**Error control explained.** In the data link layer, error control is based on **Automatic Repeat reQuest (ARQ)**. The sender retransmits a frame when:

1. The frame is **lost** (no ACK arrives before the timer expires).
2. The frame is **damaged** (the receiver detects an error with CRC and discards it or sends a NAK).
3. The **acknowledgment is lost**, so the sender times out and resends.

To make this work the protocol uses **sequence numbers** on frames (so duplicates can be detected), **acknowledgment numbers**, and a **timer** at the sender.

**Classification of protocols (Forouzan).**

| Channel | Protocols |
|---|---|
| Noiseless (ideal) | Simplest Protocol, Stop-and-Wait Protocol |
| Noisy (real) | Stop-and-Wait ARQ, Go-Back-N ARQ, Selective Repeat ARQ |

**Piggybacking.** In two-way communication, the ACK for received data is carried inside a data frame going in the opposite direction, instead of in a separate ACK frame. This saves bandwidth.

**Example.** A PC sends a file to a slow printer. Without flow control the printer's buffer fills and pages are lost. With a sliding window of 4, the PC sends 4 frames, waits until the printer acknowledges them, then sends the next ones. If frame 2 is corrupted, the printer's CRC check fails, and ARQ causes frame 2 to be sent again.

**How it's asked in exams.** *"Differentiate between flow control and error control"* (4–6 marks) or as the introduction to an ARQ question. Define both, explain buffers and ARQ, list the three retransmission causes, and name the protocols for noiseless and noisy channels. Conclude that reliable data link protocols need both mechanisms working together.`,
  },

  "Stop and Wait ARQ, Go-Back-N ARQ, Selective Repeat ARQ": {
    selfTest: [
      "With a 3-bit sequence number, what is the maximum sender window size in Go-Back-N and in Selective Repeat?",
      "Frames 0–6 are sent with Go-Back-N and frame 3 is lost. How many frames are retransmitted?",
      "Why does Stop-and-Wait ARQ need only sequence numbers 0 and 1?",
    ],
    body: `**Definition.** **ARQ (Automatic Repeat reQuest)** protocols provide flow and error control on noisy channels by numbering frames, acknowledging them, and retransmitting lost or damaged frames after a timeout. The three main ARQ protocols are Stop-and-Wait ARQ, Go-Back-N ARQ and Selective Repeat ARQ.

**1. Stop-and-Wait ARQ.** The sender sends **one frame**, keeps a copy, starts a timer and waits for an ACK. If the ACK arrives in time, it sends the next frame; if the timer expires, it resends the same frame.

- Sequence numbers are modulo 2 (**0 and 1**), because only one frame is outstanding; alternating 0/1 is enough to detect duplicates.
- The ACK number tells the next expected frame (ACK 1 after receiving frame 0).
- Sender and receiver window size = **1**.
- **Drawback:** very inefficient on long or fast links. Example: bandwidth 1 Mbps, round-trip time 20 ms → bandwidth-delay product = 1,000,000 × 0.02 = 20,000 bits. With 1000-bit frames, utilization = 1000 / 20,000 = **5%**.

**2. Go-Back-N ARQ.** The sender may send **several frames** before receiving an ACK, using a sliding window.

- With m-bit sequence numbers (0 to 2ᵐ − 1), sender window size **≤ 2ᵐ − 1**; receiver window size = **1**.
- The receiver accepts frames only in order. If a frame is lost or damaged, it discards all following frames.
- ACKs can be cumulative. When the timer expires, the sender goes back and resends the lost frame **and all frames after it**.
- The receiver is simple, but bandwidth is wasted on noisy links.

**3. Selective Repeat ARQ.** Only the damaged or lost frame is resent.

- Sender and receiver window size are equal, each **≤ 2ᵐ⁻¹**.
- The receiver buffers out-of-order frames and may send a **NAK** for a missing frame.
- It is the most efficient in bandwidth but needs more buffer memory and more complex logic, including sorting frames before delivery.

**Example (m = 3, sequence numbers 0–7).** Go-Back-N sender window ≤ 2³ − 1 = 7; Selective Repeat window ≤ 2³⁻¹ = 4. Suppose frames 0, 1, 2, 3, 4, 5, 6 are sent and frame 3 is lost.

- **Go-Back-N:** the receiver discards 4, 5, 6. After timeout the sender resends 3, 4, 5, 6 → **4 frames** retransmitted.
- **Selective Repeat:** the receiver buffers 4, 5, 6 and sends NAK 3. The sender resends only frame 3 → **1 frame** retransmitted.

**Comparison.**

| Feature | Stop-and-Wait ARQ | Go-Back-N ARQ | Selective Repeat ARQ |
|---|---|---|---|
| Sender window | 1 | ≤ 2ᵐ − 1 | ≤ 2ᵐ⁻¹ |
| Receiver window | 1 | 1 | ≤ 2ᵐ⁻¹ |
| Sequence numbers | 0, 1 | 0 to 2ᵐ − 1 | 0 to 2ᵐ − 1 |
| Retransmission | The one frame | Lost frame and all after it | Only the lost frame |
| Out-of-order frames | Not applicable | Discarded | Buffered |
| Efficiency | Lowest | Medium | Highest |
| Complexity | Simplest | Moderate | Most complex |

**How it's asked in exams.** *"Explain Go-Back-N ARQ with a diagram"* or *"Compare Stop-and-Wait, Go-Back-N and Selective Repeat ARQ"* (8–12 marks). Define ARQ, explain each protocol with its window sizes, and draw the diagram showing sender and receiver timelines with frames, ACKs, a lost frame, the timeout and the retransmitted frames. Include the comparison table and conclude that Selective Repeat is best for noisy, long-delay links while Go-Back-N is simpler.`,
  },

  "HDLC, Point to Point Protocol (PPP)": {
    selfTest: [
      "What is the HDLC flag pattern, and why is bit stuffing needed?",
      "Name the three types of HDLC frames.",
      "Is PPP bit-oriented or byte-oriented?",
    ],
    body: `**Definition.** **HDLC (High-level Data Link Control)** is a **bit-oriented** data link protocol for communication over point-to-point and multipoint links, standardized by ISO. **PPP (Point-to-Point Protocol)** is a **byte-oriented** data link protocol used for direct point-to-point links, such as a home user's dial-up or DSL connection to an ISP.

**HDLC explained.**

- **Configurations and transfer modes.** In **Normal Response Mode (NRM)** there is one primary station and one or more secondary stations; secondaries send only when the primary allows them. In **Asynchronous Balanced Mode (ABM)** both stations are equal (combined stations) and either can start a transmission.
- **Frame format.** Flag (8 bits, 01111110) | Address | Control | Information | FCS (CRC-16 or CRC-32) | Flag.
- **Frame types.** **I-frames** (information) carry user data and piggybacked ACKs. **S-frames** (supervisory) carry flow and error control only, e.g. RR (Receive Ready), RNR, REJ, SREJ. **U-frames** (unnumbered) are for link management such as setting up and disconnecting.
- **Bit stuffing.** Because the flag is 01111110, whenever the sender sees five consecutive 1s in the data it inserts a 0. The receiver removes the 0 after five 1s. This keeps the flag pattern from appearing inside data.

**PPP explained.**

- **Frame format.** Flag (01111110) | Address (11111111, broadcast) | Control (00000011) | Protocol (2 bytes, e.g. IP or LCP) | Payload (default max 1500 bytes) | FCS (2 or 4 bytes) | Flag.
- **Byte stuffing.** Since PPP is byte-oriented, if the flag byte appears in the data, an **escape byte 01111101** is inserted before it.
- **Services.** PPP defines the frame format, link negotiation (LCP), optional authentication (PAP/CHAP), network-layer configuration (NCP, e.g. getting an IP address), and supports multiple network protocols.
- **Not provided:** PPP does not provide flow control, and its error control is limited to detection (a damaged frame is silently discarded). It does not support multipoint addressing.

**Example.** If the data is 0111111011, HDLC bit stuffing gives 01111101011: a 0 is inserted after the first five 1s.

**Comparison.**

| Feature | HDLC | PPP |
|---|---|---|
| Orientation | Bit-oriented | Byte-oriented |
| Stuffing | Bit stuffing | Byte stuffing (escape 01111101) |
| Links | Point-to-point and multipoint | Point-to-point only |
| Flow and error control | Yes (sliding window) | Error detection only |
| Authentication | No | Yes (PAP, CHAP) |
| Typical use | Leased lines, basis of many protocols | Internet access (dial-up, DSL, PPPoE) |

**How it's asked in exams.** *"Explain the HDLC frame format"* or *"Differentiate HDLC and PPP"* (6–8 marks). Define both, draw the diagram showing each frame format with field sizes, explain the three HDLC frame types and bit stuffing with a small example, and finish with the comparison table.`,
  },

  "PPP Stack": {
    selfTest: [
      "What are the three sets of protocols in the PPP stack?",
      "What is the difference between PAP and CHAP?",
      "List the transition phases of a PPP connection.",
    ],
    body: `**Definition.** The **PPP stack** is the set of protocols that PPP uses to establish a link, authenticate the parties and carry network-layer data. It has three parts: the **Link Control Protocol (LCP)**, the **Authentication Protocols (AP)**, and the **Network Control Protocols (NCP)**. The Protocol field of the PPP frame tells which one the payload belongs to.

**Transition phases.** A PPP connection passes through these states:

1. **Dead** – no carrier, the link is idle.
2. **Establish** – LCP packets negotiate options (frame size, authentication method).
3. **Authenticate** – optional; the user proves identity with PAP or CHAP.
4. **Network** – NCP configures network-layer protocols (e.g. an IP address is assigned).
5. **Open** – user data is exchanged.
6. **Terminate** – LCP packets close the link, and it returns to Dead.

**1. Link Control Protocol (LCP).** LCP is responsible for **establishing, maintaining, configuring and terminating** the link. Its packets include Configure-request, Configure-ack, Configure-nak, Configure-reject, Terminate-request, Terminate-ack, Echo-request and Echo-reply. Negotiated options include maximum receive unit, authentication protocol and compression.

**2. Authentication Protocols.**

- **PAP (Password Authentication Protocol)** is a simple **two-step** process. The user sends a username and password; the server replies with accept or reject. The password is sent in **plain text**, so it is insecure.
- **CHAP (Challenge Handshake Authentication Protocol)** is a **three-way handshake**. The server sends a random challenge; the user applies a function to the challenge and its password and returns the result; the server does the same and compares. The **password is never sent** on the link, and the challenge changes each time, so CHAP is more secure.

**3. Network Control Protocols (NCP).** PPP can carry many network-layer protocols, and each has its own NCP. The most common is **IPCP (Internet Protocol Control Protocol)**, which configures the IP link, for example assigning a temporary IP address to the user. After NCP completes, IP data packets are carried in PPP frames.

**Example.** When a home user connects to an ISP over DSL: LCP agrees on a 1492-byte MRU and CHAP authentication; CHAP verifies the user's password; IPCP gives the user an IP address; the link is open and web traffic flows; finally LCP terminates the link when the user disconnects.

**How it's asked in exams.** *"Explain the PPP stack"* or *"Differentiate between PAP and CHAP"* (6–8 marks). Name and explain LCP, AP and NCP, draw the diagram showing the transition phases as a state diagram (Dead → Establish → Authenticate → Network → Open → Terminate), and compare PAP and CHAP in a short table. End by stating CHAP is preferred for security.`,
  },

  "Random Access, Controlled Access, Channelization": {
    selfTest: [
      "What is the maximum throughput of pure ALOHA and of slotted ALOHA?",
      "For a 10 Mbps network with maximum propagation time 25.6 μs, what is the minimum frame size in CSMA/CD?",
      "Name the three controlled access methods.",
    ],
    body: `**Definition.** When many stations share one link, a **multiple access protocol** decides who may transmit and when. Forouzan divides them into three groups: **random access** (contention), **controlled access**, and **channelization**.

**1. Random access.** No station is superior; each station decides to send based on the medium state, so collisions can happen.

- **ALOHA.** In **pure ALOHA** a station sends whenever it has a frame; if no ACK arrives it waits a random back-off time and resends. Vulnerable time = 2 × Tfr; maximum throughput = **18.4%** (at G = 1/2). In **slotted ALOHA** stations may send only at the start of a time slot. Vulnerable time = Tfr; maximum throughput = **36.8%** (at G = 1).
- **CSMA (Carrier Sense Multiple Access).** "Listen before talk." It reduces but cannot remove collisions because of propagation delay. Persistence methods: **1-persistent** (send immediately when idle), **non-persistent** (wait a random time if busy, then sense again), **p-persistent** (for slotted channels, send with probability p when idle).
- **CSMA/CD (Collision Detection).** Used in classic Ethernet. The station senses, sends, and keeps monitoring; if a collision is detected it stops, sends a **jam signal**, and waits a random time using **binary exponential back-off**. For the collision to be detected before sending finishes, **Tfr ≥ 2 × Tp**.
- **CSMA/CA (Collision Avoidance).** Used in wireless LANs where collisions cannot be detected. It uses an **interframe space (IFS)**, a **contention window** of random slots, and **acknowledgments**.

**2. Controlled access.** Stations consult one another; a station may send only when authorized, so there are no collisions.

- **Reservation:** time is divided into intervals; stations reserve slots in a reservation frame first.
- **Polling:** a primary device controls the link using **poll** (asking secondaries if they have data) and **select** (telling a secondary to get ready to receive).
- **Token passing:** a special frame called a **token** circulates in a logical ring; only the station holding the token may send (e.g. Token Ring, FDDI).

**3. Channelization.** The available bandwidth is shared by dividing it in frequency, time or code.

- **FDMA:** each station gets its own frequency band.
- **TDMA:** stations share the bandwidth in time, each using its own time slot.
- **CDMA:** all stations send at the same time on the same frequency, each using a unique orthogonal **chip sequence** (e.g. Walsh codes); the receiver separates them mathematically.

**Example (CSMA/CD minimum frame).** Bandwidth 10 Mbps, maximum propagation time Tp = 25.6 μs.

- Tfr = 2 × Tp = 2 × 25.6 = 51.2 μs
- Minimum frame size = 10 Mbps × 51.2 μs = **512 bits = 64 bytes**

This is exactly why the minimum Ethernet frame is 64 bytes.

**Comparison.**

| Feature | Random Access | Controlled Access | Channelization |
|---|---|---|---|
| Collisions | Possible | None | None |
| Control | No central control | Authorization (poll/token/reservation) | Fixed division of bandwidth |
| Examples | ALOHA, CSMA/CD, CSMA/CA | Polling, token passing | FDMA, TDMA, CDMA |
| Best for | Bursty LAN traffic | Predictable access | Cellular, satellite |

**How it's asked in exams.** *"Explain CSMA/CD with a flowchart"* or *"Classify multiple access protocols"* (8–12 marks). Give the three-way classification, explain each method in full sentences, draw the diagram showing the CSMA/CD flowchart (sense → transmit → collision? → jam → back-off → retry), include the minimum frame size calculation, and conclude with where each method is used.`,
  },

  "Traditional Ethernet, Fast Ethernet, Gigabit Ethernet": {
    selfTest: [
      "What are the minimum and maximum Ethernet frame lengths?",
      "What does 10Base-T mean?",
      "Give the data rates of Standard, Fast and Gigabit Ethernet.",
    ],
    body: `**Definition.** **Ethernet (IEEE 802.3)** is the most widely used wired LAN technology. It has evolved through generations: **Standard (Traditional) Ethernet** at 10 Mbps, **Fast Ethernet** at 100 Mbps, **Gigabit Ethernet** at 1000 Mbps, and later 10 Gigabit Ethernet.

**Traditional Ethernet (10 Mbps).**

- Access method: **CSMA/CD** (1-persistent), with Manchester encoding.
- **Frame format:** Preamble (7 bytes of alternating 1s and 0s) | SFD (1 byte, 10101011) | Destination address (6 bytes) | Source address (6 bytes) | Length/Type (2 bytes) | Data and padding (46–1500 bytes) | CRC (4 bytes).
- **Frame length:** minimum **64 bytes**, maximum **1518 bytes** (not counting preamble and SFD). The minimum ensures collisions are detected; data shorter than 46 bytes is padded.
- **Addressing:** 48-bit MAC address written in hexadecimal, e.g. 4A:30:10:21:10:1A. Addresses can be unicast, multicast or broadcast (all 1s, FF:FF:FF:FF:FF:FF).
- **Implementations:** **10Base5** (thick coaxial, bus, 500 m), **10Base2** (thin coaxial, bus, 185 m), **10Base-T** (twisted pair, star with hub, 100 m), **10Base-F** (fiber, star, 2000 m). The name means 10 Mbps, Baseband signaling, and cable type or segment length.

**Fast Ethernet (100 Mbps, IEEE 802.3u).**

- Goals: raise the data rate to 100 Mbps while keeping the same frame format, 48-bit addresses and minimum/maximum frame lengths, so it remains compatible.
- Adds **autonegotiation**, which lets two devices agree on the best speed and duplex mode.
- Uses star topology; half duplex with a hub (CSMA/CD) or full duplex with a switch (no CSMA/CD needed).
- **Implementations:** **100Base-TX** (2 pairs Cat 5 UTP, 4B/5B + MLT-3), **100Base-FX** (2 fiber strands, 4B/5B + NRZ-I), **100Base-T4** (4 pairs Cat 3 UTP, 8B/6T). Maximum length about 100 m for twisted pair.

**Gigabit Ethernet (1000 Mbps, IEEE 802.3z and 802.3ab).**

- Keeps the same frame format and addressing; mostly used in **full-duplex** mode with switches, where there are no collisions.
- In half-duplex mode it uses **carrier extension** (extending minimum frame length to 512 bytes) or **frame bursting** to keep collision detection possible.
- **Implementations:** **1000Base-SX** (short-wave multimode fiber), **1000Base-LX** (long-wave fiber), **1000Base-CX** (shielded copper, 25 m), **1000Base-T** (4 pairs Cat 5 UTP, 100 m).

**Comparison.**

| Feature | Traditional Ethernet | Fast Ethernet | Gigabit Ethernet |
|---|---|---|---|
| Data rate | 10 Mbps | 100 Mbps | 1000 Mbps |
| Standard | IEEE 802.3 | IEEE 802.3u | IEEE 802.3z / 802.3ab |
| Main media | Coax, UTP, fiber | Cat 5 UTP, fiber | Fiber, Cat 5 UTP |
| Topology | Bus or star | Star | Star |
| Duplex | Half | Half or full | Mostly full |
| Encoding | Manchester | 4B/5B with MLT-3 or NRZ-I, 8B/6T | 8B/10B, 4D-PAM5 |

**Example.** An office connects 30 PCs with Cat 5 cable to a 100 Mbps switch (100Base-TX), and connects that switch to the server room over 1000Base-LX fiber. The same Ethernet frame format travels on both links.

**How it's asked in exams.** *"Explain the IEEE 802.3 frame format"* or *"Compare Standard, Fast and Gigabit Ethernet"* (8–12 marks). Draw the diagram showing the frame format with field sizes, explain CSMA/CD and the 64-byte minimum, list each generation's implementations with media and distance, and include the comparison table. Conclude that Ethernet scaled in speed while keeping backward compatibility.`,
  },

  "IEEE 802.11, Bluetooth": {
    selfTest: [
      "What is the difference between a BSS and an ESS?",
      "What is a piconet, and how many active secondaries can it have?",
      "Why does 802.11 use CSMA/CA instead of CSMA/CD?",
    ],
    body: `**Definition.** **IEEE 802.11** is the standard for **wireless LANs** (Wi-Fi), covering the physical and data link layers. **Bluetooth** (IEEE 802.15.1) is a short-range wireless technology for connecting personal devices such as phones, headsets, keyboards and mice, forming a **Wireless Personal Area Network (WPAN)**.

**IEEE 802.11 explained.**

- **Architecture.** A **Basic Service Set (BSS)** is the basic unit: stations with or without an **Access Point (AP)**. A BSS without an AP is an **ad hoc network**; with an AP it is an **infrastructure network**. An **Extended Service Set (ESS)** is two or more BSSs connected through APs by a distribution system (usually wired Ethernet).
- **Station types by mobility:** no-transition (stays in one BSS), BSS-transition (moves between BSSs in one ESS), ESS-transition (moves between ESSs).
- **MAC sublayer.** **DCF (Distributed Coordination Function)** uses **CSMA/CA**, because a wireless station cannot detect collisions while sending, and signal fading and hidden stations make detection unreliable. It uses DIFS, **RTS/CTS** handshake, SIFS and ACK, and a **NAV (Network Allocation Vector)** so other stations stay silent. **PCF (Point Coordination Function)** is optional, uses polling by the AP, and is for time-sensitive traffic.
- **Hidden station problem.** Stations A and C can both reach B but not each other; RTS/CTS solves this because C hears B's CTS and waits.
- **Frame** has up to **four address fields** because frames may pass through APs.
- **Physical layer versions** include 802.11a (5 GHz, 54 Mbps), 802.11b (2.4 GHz, 11 Mbps), 802.11g (2.4 GHz, 54 Mbps), 802.11n and later.

**Bluetooth explained.**

- **Piconet:** up to **8 active stations**, one **primary** and up to **7 active secondaries**; up to 255 more can be parked. A **scatternet** is formed when piconets are combined, with a secondary of one acting as primary of another.
- Operates in the **2.4 GHz ISM band** with **FHSS** (frequency hopping, 1600 hops per second over 79 channels of 1 MHz), range about **10 m**.
- **Baseband layer** uses TDMA with TDD, with 625 μs time slots. Primary uses even slots, secondaries odd slots.
- **Links:** **SCO** (synchronous, for real-time voice, no retransmission) and **ACL** (asynchronous, for data, with retransmission).
- **L2CAP** handles multiplexing, segmentation and reassembly, and quality of service.

**Comparison.**

| Feature | IEEE 802.11 (Wi-Fi) | Bluetooth |
|---|---|---|
| Network type | WLAN | WPAN |
| Range | About 100 m | About 10 m |
| Data rate | 11 Mbps to Gbps | About 1–3 Mbps |
| Structure | BSS, ESS, AP | Piconet, scatternet |
| Access | CSMA/CA (DCF), PCF | TDMA/TDD controlled by primary |

**Example.** At home, a laptop connects to the Internet through a Wi-Fi router (an infrastructure BSS), while at the same time a phone streams music to wireless earbuds over a Bluetooth piconet with the phone as primary.

**How it's asked in exams.** *"Explain the architecture of IEEE 802.11"* or *"Write a short note on Bluetooth"* (6–8 marks). Draw the diagram showing a BSS, an ESS with APs and a distribution system, or a piconet and scatternet. Explain CSMA/CA and the hidden station problem for 802.11, and piconet, FHSS and SCO/ACL for Bluetooth. Finish with the comparison table.`,
  },

  "Connecting Devices, Backbone Network": {
    selfTest: [
      "At which OSI layer does a switch operate, and at which does a router operate?",
      "What is the difference between a passive hub and a repeater?",
      "Name two types of backbone networks.",
    ],
    body: `**Definition.** **Connecting devices** join hosts together to form networks, and join networks together to form internetworks. Forouzan classifies them by the layer at which they operate. A **backbone network** is a high-speed network that connects several LANs together.

**Five categories of connecting devices.**

1. **Passive hub** – just a connector; operates below the physical layer; signals from all ports are combined.
2. **Repeater / active hub** – operates at the **physical layer**. A repeater **regenerates** the weakened signal (it does not amplify noise) to extend the length of a LAN. An active hub is a multiport repeater used in star topology. It forwards every bit to every port and cannot filter.
3. **Bridge / two-layer switch** – operates at the **physical and data link layers**. It reads MAC addresses and uses a table to **filter** frames, forwarding them only to the right segment. It divides a LAN into separate collision domains. A **transparent (learning) bridge** builds its table automatically by noting source addresses. The **spanning tree algorithm** removes loops when bridges are connected redundantly. A switch is a multiport bridge.
4. **Router / three-layer switch** – operates at the **physical, data link and network layers**. It routes packets between different networks based on **IP addresses**, using routing tables. It separates broadcast domains.
5. **Gateway** – can operate at **all five layers**; it connects networks using different protocols and translates between them (e.g. an email gateway).

**Comparison.**

| Feature | Hub (Repeater) | Switch (Bridge) | Router |
|---|---|---|---|
| Layer | Physical | Data link | Network |
| Address used | None | MAC address | IP address |
| Filtering | No, sends to all ports | Yes, to the destination port | Yes, by best route |
| Collision domain | One for all ports | One per port | One per port |
| Broadcast domain | One | One | Separate per interface |
| Use | Simple small LANs | Modern LANs | Connecting LANs/WANs, Internet |

**Backbone networks.**

- **Bus backbone:** the backbone is a bus (e.g. 10Base5), and each LAN connects to it through a bridge or switch. Used where LANs are in different buildings along a line.
- **Star backbone (collapsed backbone):** the backbone is a single high-speed switch, and every LAN connects to it. It is the most common today, usually inside one building.
- **Connecting remote LANs:** a point-to-point link (leased line, DSL) acts as the backbone, with remote bridges at each end.

**Example.** A college has separate LANs for the library, labs and office. Each floor's PCs connect to a switch; all floor switches connect to one core switch (a star backbone); and a router connects the whole campus to the ISP.

**How it's asked in exams.** *"Differentiate between hub, switch and router"* or *"Explain connecting devices"* (6–12 marks). Define connecting devices, explain each category with its layer, draw the diagram showing devices mapped to OSI layers, give the comparison table, and briefly describe bus and star backbones. Conclude that higher-layer devices are more intelligent but more complex and costly.`,
  },

  "Virtual LAN": {
    selfTest: [
      "Define a VLAN in one sentence.",
      "Name three ways of deciding VLAN membership.",
      "What IEEE standard defines VLAN frame tagging?",
    ],
    body: `**Definition.** A **Virtual LAN (VLAN)** is a local area network configured by **software** rather than physical wiring. Stations connected to the same switch or group of switches are divided into logical groups, and each group behaves like a separate LAN with its own broadcast domain.

**Explanation.** In a traditional LAN, the group a station belongs to depends on which hub or switch it is physically plugged into. If an employee moves to another department, the cable must be moved. With VLANs, the network administrator simply changes the switch configuration. A broadcast sent by a station is received only by stations in the **same VLAN**, even though all of them share the same physical switches. Communication between different VLANs needs a router or a three-layer switch.

**Membership characteristics.** A station can be assigned to a VLAN by:

- **Port number** – e.g. switch ports 1–4 are VLAN 1, ports 5–8 are VLAN 2.
- **MAC address** – the 48-bit address of the station's network card.
- **IP address** – the 32-bit IP address.
- **Multicast IP address** – stations in a multicast group form a VLAN.
- **Combination** of the above.

**Configuration.** It can be **manual** (administrator assigns ports), **semi-automatic** (initial manual setup, then automatic migration), or **automatic** (stations are joined or removed based on the criteria the administrator defined).

**Communication between switches.** When a VLAN spans several switches, each switch must know which VLAN a frame belongs to. Three methods are used: **table maintenance** (switches exchange their tables), **frame tagging** (an extra header carrying the VLAN ID is added to the frame; standardized as **IEEE 802.1Q**), and **time-division multiplexing** (the trunk link is divided into channels, one per VLAN).

**Advantages.**

- **Cost and time reduction** – moving a station needs no rewiring.
- **Virtual workgroups** – people in different buildings can be in the same logical group.
- **Security** – broadcasts and traffic of one group are not seen by other groups.
- **Reduced broadcast traffic** – each VLAN is a smaller broadcast domain, improving performance.

**Example.** A company has one 24-port switch shared by Accounts (ports 1–8), Engineering (ports 9–16) and HR (ports 17–24). Three VLANs are created by port. A broadcast from an Accounts PC reaches only ports 1–8, and HR's salary traffic is invisible to Engineering.

**How it's asked in exams.** *"What is a VLAN? Explain its membership and advantages"* (6–8 marks). Define VLAN, contrast it with a physical LAN, list membership characteristics, explain 802.1Q tagging, and list advantages. Draw the diagram showing one switch divided into three VLAN groups. Conclude that VLANs give flexibility and security without extra hardware.`,
  },

  "Cellular Telephony": {
    selfTest: [
      "What is frequency reuse, and why is it needed?",
      "What is the difference between hard handoff and soft handoff?",
      "Which multiple access method does GSM use?",
    ],
    body: `**Definition.** **Cellular telephony** is a wireless communication system that provides telephone service to mobile users by dividing a service area into small regions called **cells**. Each cell has its own **base station (BS)** with an antenna, and all base stations are controlled by a **Mobile Switching Center (MSC)**, which connects calls to the public telephone network.

**Explanation.**

- **Cells.** Each cell is usually drawn as a hexagon. Cell size depends on population: small cells in dense cities, large cells in rural areas.
- **Frequency reuse.** The number of frequencies available is limited, so the same set of frequencies is reused in cells that are far enough apart to avoid interference. A **reuse pattern** (reuse factor, e.g. 4 or 7) is a group of adjacent cells that each use different frequencies; the pattern is repeated across the area.
- **Transmitting and receiving.** To make a call, the mobile station scans for the strongest channel, sends the number to the base station, which relays it to the MSC; the MSC finds the called party and assigns a voice channel. To receive, the MSC sends a **paging** query to cells to locate the mobile.
- **Handoff.** When a moving user crosses from one cell to another, the call is transferred to the new base station. In **hard handoff** the mobile talks to only one BS at a time (break before make). In **soft handoff** (used in CDMA) the mobile can talk to two base stations at once (make before break).
- **Roaming.** A user can use a service provider outside their home area through agreements between providers.

**Generations.**

| Generation | Example system | Key features |
|---|---|---|
| 1G | AMPS | Analog voice, FDMA, 800 MHz band |
| 2G | D-AMPS, GSM, IS-95 (CDMA) | Digital voice; GSM uses FDMA + TDMA (124 channels of 200 kHz, 8 time slots each); IS-95 uses CDMA |
| 3G | IMT-2000 (UMTS, CDMA2000) | Digital voice and data, multimedia, Internet access |
| 4G | LTE | All-IP, high-speed broadband, OFDMA |
| 5G | 5G NR | Very high speed, low latency, IoT |

**Example.** A passenger on a bus from Biratnagar to Itahari talks on a GSM phone. As the bus leaves one cell, the MSC detects the weakening signal and hands the call off to the next cell's base station, which uses a different frequency set. The passenger does not notice the switch.

**How it's asked in exams.** *"Explain cellular telephony with frequency reuse and handoff"* or *"Write a note on GSM"* (6–8 marks). Define cells, BS and MSC, explain frequency reuse, call setup, handoff (hard vs soft) and roaming, and draw the diagram showing hexagonal cells with a reuse pattern connected to an MSC. Add the generations table and conclude with how each generation improved on the last.`,
  },

  "Satellite Networks": {
    selfTest: [
      "At what altitude is a GEO satellite, and how many are needed to cover the earth?",
      "What is a footprint?",
      "Why do LEO satellites have lower delay than GEO satellites?",
    ],
    body: `**Definition.** A **satellite network** is a combination of nodes, some of which are satellites, that provides communication from one point on earth to another. A node can be a **satellite**, an **earth station**, or an **end-user terminal**. The satellite receives a signal from earth (**uplink**), amplifies it and sends it back to earth at a different frequency (**downlink**).

**Explanation.**

- **Orbits.** A satellite follows an orbit around the earth, which can be equatorial, inclined or polar. The **period** (time for one revolution) depends on the altitude.
- **Footprint.** The area on earth that a satellite's signal covers is its **footprint**. Signal power is strongest at the centre and decreases toward the edges.
- **Frequency bands.** Common bands are L, S, C, Ku and Ka; the downlink and uplink frequencies are different.
- **Advantages.** Very wide coverage (remote hills, oceans), cost independent of distance, useful for broadcasting and disaster recovery.
- **Disadvantages.** High launch cost, **propagation delay** (especially GEO), weather interference at high frequencies.

**Three categories of satellites.**

1. **GEO (Geostationary Earth Orbit)** – altitude about **35,786 km** above the equator; period 24 hours, so it appears fixed in the sky. **Three satellites** spaced 120° apart can cover almost the whole earth. Used for TV broadcasting and weather. Round-trip delay (earth → satellite → earth) is about 2 × 35,786 km ÷ 300,000 km/s ≈ **0.24 s**.
2. **MEO (Medium Earth Orbit)** – between the two Van Allen belts, roughly 5,000–15,000 km (GPS satellites orbit at about 18,000–20,000 km in inclined orbits). Period about 6–12 hours. **GPS** uses 24 satellites so that at least four are visible from any point, allowing position calculation by triangulation.
3. **LEO (Low Earth Orbit)** – altitude about **500–2,000 km**, period 90–120 minutes, polar orbits. Delay is very short, and small handheld terminals can be used, but many satellites are needed. Examples: **Iridium** (66 satellites), **Globalstar** (48 satellites), and modern Starlink.

**Comparison.**

| Feature | GEO | MEO | LEO |
|---|---|---|---|
| Altitude | About 35,786 km | About 5,000–20,000 km | About 500–2,000 km |
| Period | 24 hours | 6–12 hours | 90–120 minutes |
| Number needed | 3 | Around 24 (GPS) | Dozens to thousands |
| Delay | Highest | Medium | Lowest |
| Use | TV, weather | GPS navigation | Mobile phones, Internet |

**Example.** A Nepali TV channel broadcasts from Kathmandu through a GEO satellite, whose footprint covers all of South Asia. A trekker in the mountains uses GPS (MEO) to find their location, and a remote village can get Internet through a LEO constellation.

**How it's asked in exams.** *"Explain the types of satellite networks"* or *"Write a short note on GEO, MEO and LEO"* (6–8 marks). Define satellite network, uplink, downlink and footprint, explain each orbit type with altitude, period and use, show the delay calculation for GEO, and draw the diagram showing earth with three orbit rings. End with the comparison table.`,
  },

  "Virtual Circuit Switching": {
    selfTest: [
      "What are the three phases of a virtual circuit network?",
      "Is a VCI globally unique or local to a link?",
      "A frame arrives at port 1 with VCI 14; the switch table says port 1/VCI 14 → port 3/VCI 22. What happens?",
    ],
    body: `**Definition.** A **virtual-circuit network** is a packet-switched network that combines features of circuit switching and datagram switching. A logical path (the **virtual circuit**) is set up before data transfer, all packets of a connection follow that same path, but resources are not dedicated as in circuit switching; they are allocated on demand.

**Explanation.**

- **Addressing.** Two types of addresses are used. A **global address** (e.g. a network address) is used only during setup. A **Virtual Circuit Identifier (VCI)** is a small number used during data transfer. The VCI is **local** to each link: it changes from one switch to the next.
- **Switch table.** Each switch has a table with four columns: incoming port, incoming VCI, outgoing port, outgoing VCI. The switch looks up the incoming port and VCI, changes the VCI, and sends the frame out the outgoing port.

**Three phases.**

1. **Setup phase.** A **setup request** frame travels from source to destination, and each switch creates a table entry. The destination answers with an **acknowledgment** frame, which carries back the VCIs to complete the entries.
2. **Data transfer phase.** All frames follow the established path, using only VCIs. Frames arrive **in order**.
3. **Teardown phase.** The source sends a **teardown request**; the destination confirms, and switches delete the table entries.

**Types.** A **Permanent Virtual Circuit (PVC)** is set up once by the provider and stays in place, like a leased line. A **Switched Virtual Circuit (SVC)** is created and removed for each connection, like a phone call.

**Example (switch table).** A frame arrives at a switch on port 1 with VCI 14. The table entry is: incoming port 1, VCI 14 → outgoing port 3, VCI 22. The switch replaces VCI 14 with **22** and sends the frame out of **port 3**. The next switch will again look up port and VCI 22 in its own table.

**Comparison.**

| Feature | Circuit Switching | Datagram Network | Virtual-Circuit Network |
|---|---|---|---|
| Setup phase | Yes | No | Yes |
| Resources | Reserved, dedicated | On demand | On demand (can be reserved) |
| Path | Fixed | Each packet independent | Fixed for the connection |
| Addressing in data | None | Full destination address | Local VCI |
| Packet order | In order | May arrive out of order | In order |
| Examples | Telephone network | Internet (IP) | Frame Relay, ATM, X.25 |

**How it's asked in exams.** *"Explain virtual circuit switching"* or *"Differentiate datagram and virtual-circuit networks"* (6–8 marks). Define it, explain VCI and switch tables, describe the three phases, and draw the diagram showing a source, three switches with their tables and the changing VCIs along the path. Add the comparison table and conclude that virtual circuits give ordered, efficient delivery used in WAN technologies like Frame Relay and ATM.`,
  },

  "Frame Relay, ATM": {
    selfTest: [
      "What is the size of an ATM cell, and how is it divided?",
      "What identifies a virtual circuit in Frame Relay?",
      "Name the three layers of the ATM model.",
    ],
    body: `**Definition.** **Frame Relay** is a virtual-circuit WAN technology that carries **variable-length frames** at the data link layer, designed to replace the slower X.25 for bursty data traffic. **ATM (Asynchronous Transfer Mode)** is a **cell relay** protocol that carries data in **fixed-size cells of 53 bytes** over virtual circuits, designed for high-speed transmission of voice, video and data.

**Frame Relay explained.**

- Operates only at the **physical and data link layers**, which makes it fast; data rates from 1.544 Mbps (T-1) up to 44.376 Mbps (T-3).
- Virtual circuits are identified by a **DLCI (Data Link Connection Identifier)**; both **PVC** and **SVC** are supported.
- Frames can be up to about **9000 bytes**, so a whole LAN frame fits.
- **No flow or error control** inside the network: frames with errors are simply dropped, and higher layers must recover. This works because modern fibre links are reliable.
- Congestion is signalled with the **FECN** and **BECN** bits; the **DE** (discard eligibility) bit marks frames that can be dropped first.
- A **FRAD (Frame Relay Assembler/Disassembler)** converts frames from other protocols.
- **Weakness:** variable-length frames cause variable delays, so it is poor for real-time voice and video.

**ATM explained.**

- **Cell:** 53 bytes = **5-byte header + 48-byte payload**. Fixed small cells give predictable, low delay and let switching be done in hardware.
- **Interfaces:** **UNI** (User-to-Network Interface) and **NNI** (Network-to-Network Interface).
- **Connections:** a **virtual path (VP)** contains many **virtual circuits (VC)**; a connection is identified by **VPI + VCI**. In the UNI header VPI is 8 bits and VCI 16 bits; in the NNI header VPI is 12 bits.
- **UNI header fields:** GFC (4 bits), VPI (8), VCI (16), PT (payload type, 3), CLP (cell loss priority, 1), HEC (header error correction, 8).
- **Layers:** **AAL (ATM Adaptation Layer)** accepts data from upper layers and splits it into 48-byte payloads: AAL1 (constant bit rate, e.g. voice), AAL2 (low bit-rate, variable, e.g. compressed audio), AAL3/4 (connection and connectionless data), AAL5 (simple and efficient, used for IP). The **ATM layer** handles routing, traffic management, switching and multiplexing, adding the 5-byte header. The **physical layer** defines the transmission medium, e.g. SONET.

**Example.** A 480-byte IP packet sent over ATM using AAL5 is divided into 48-byte payloads: 480 ÷ 48 = 10 payloads (ignoring the AAL5 trailer and padding for simplicity), each sent as a 53-byte cell. Total transmitted = 10 × 53 = 530 bytes, so header overhead is 50 bytes.

**Comparison.**

| Feature | Frame Relay | ATM |
|---|---|---|
| Unit | Variable-length frame (up to about 9000 bytes) | Fixed 53-byte cell |
| Circuit identifier | DLCI | VPI and VCI |
| Speed | 1.544 to 44.376 Mbps | 155 Mbps, 622 Mbps and higher |
| Layers | Physical, data link | Physical, ATM, AAL |
| Delay | Variable | Small and predictable |
| Best for | Bursty LAN-to-LAN data | Voice, video and data together |
| Error/flow control | None in network | None in network (HEC protects header only) |

**How it's asked in exams.** *"Explain the ATM architecture and cell format"* or *"Compare Frame Relay and ATM"* (8–12 marks). Define both, explain Frame Relay's DLCI and congestion bits, explain ATM's 53-byte cell, VP/VC, UNI/NNI and the three layers with AAL types. Draw the diagram showing the ATM cell header fields and the virtual path containing virtual circuits. Finish with the comparison table and a concluding line that ATM's fixed cells suit real-time traffic.`,
  },
};
