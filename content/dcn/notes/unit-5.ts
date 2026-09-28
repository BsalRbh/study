import type { TopicNote } from "@/content/types";

export const unit5Notes: Record<string, TopicNote> = {
  "Process to Process Delivery": {
    selfTest: [
      "What address does the transport layer use to identify a process, and what is a socket address?",
      "What are the three ranges of port numbers defined by IANA?",
      "Differentiate node-to-node, host-to-host and process-to-process delivery.",
    ],
    body: `**Definition.** **Process-to-process delivery** is the delivery of a message from a specific application program (process) running on the source host to the corresponding process running on the destination host. It is the main responsibility of the **transport layer**.

**Explanation.** Delivery happens at three levels in a network:

- **Node-to-node delivery** (data link layer): frame from one node to the next on the same link.
- **Host-to-host delivery** (network layer): packet from source computer to destination computer, using IP addresses.
- **Process-to-process delivery** (transport layer): message from one program to another, using **port numbers**.

A host runs many processes at once (browser, email, chat), so an IP address alone is not enough. The transport layer uses the **client-server paradigm** and identifies each process with a 16-bit **port number** (0 to 65,535).

**Port number ranges (IANA):**

- **Well-known ports: 0–1023**, assigned to standard servers, e.g. HTTP 80, FTP 20/21, SMTP 25, DNS 53, Telnet 23.
- **Registered ports: 1024–49,151**, registered with IANA to avoid duplication.
- **Dynamic (ephemeral) ports: 49,152–65,535**, chosen temporarily by client programs.

A **socket address** is the combination of an **IP address and a port number**, for example 202.70.64.5:80. A transport connection is identified by a pair of socket addresses (client and server).

**Other transport-layer concepts.**

- **Multiplexing and demultiplexing.** At the sender, messages from many processes are combined into one stream to the network layer (multiplexing). At the receiver, the transport layer delivers each segment to the correct process using the destination port (demultiplexing).
- **Connectionless vs connection-oriented service.** UDP sends independent datagrams with no connection; TCP first establishes a connection, transfers data, then releases it.
- **Reliable vs unreliable.** TCP provides flow and error control; UDP does not.

**Example.** A laptop with IP 192.168.1.20 opens a website. The browser picks ephemeral port 52,000 and connects to server 142.250.1.1 port 443. The server's reply comes back to socket 192.168.1.20:52,000, so it reaches the browser and not the email client running on the same laptop.

**How it's asked in exams.** *"Explain process-to-process delivery"* or *"What are port numbers and socket addresses?"* (4–8 marks). Define it, compare the three delivery levels, explain ports and their ranges with examples, explain socket address and multiplexing/demultiplexing, and draw the diagram showing two hosts with several processes connected by the transport layer. Conclude that port numbers let many applications share one network connection.`,
  },

  "User Datagram Protocol (UDP)": {
    selfTest: [
      "How long is the UDP header and what four fields does it contain?",
      "A UDP datagram carries 400 bytes of data. What is the value of its total length field?",
      "Name three applications that use UDP and say why.",
    ],
    body: `**Definition.** The **User Datagram Protocol (UDP)** is a **connectionless, unreliable** transport-layer protocol. It adds only process-to-process addressing (port numbers) and an optional checksum to the services of IP, with no connection setup, flow control or retransmission.

**Explanation.** UDP is a very simple protocol with a minimum of overhead. Each **user datagram** is sent independently and is not numbered, so datagrams may be lost, duplicated or arrive out of order, and UDP will not correct this.

**UDP header (fixed 8 bytes), four 16-bit fields:**

1. **Source port number** – port of the sending process.
2. **Destination port number** – port of the receiving process.
3. **Total length** – header plus data, in bytes (maximum 65,535).
4. **Checksum** – detects errors over the header, data and a **pseudoheader** (part of the IP header containing source and destination IP addresses and protocol field 17). In IPv4 it is optional.

**Characteristics of UDP:**

- Connectionless: no handshake, so there is no setup delay.
- Unreliable: no acknowledgement, no retransmission.
- No flow control and no congestion control.
- Message-oriented: each datagram keeps its boundaries.
- Small header (8 bytes compared with TCP's 20–60 bytes), so it is fast and efficient.

**Uses of UDP.**

- **DNS** (port 53), **SNMP** (161), **TFTP** (69), **DHCP** (67/68), **RIP** (520), where messages are short request-response exchanges.
- **Real-time multimedia**, such as voice over IP, online games and live video, where late data is useless and retransmission would only add delay.
- **Multicasting and broadcasting**, which TCP cannot do.

**Example.** A UDP datagram carries 400 bytes of data. Total length = 8 (header) + 400 = **408 bytes**. If a hex dump of a header reads CB84 000D 001C 001C, then the source port is CB84₁₆ = 52,100, the destination port is 000D₁₆ = 13, and the total length is 001C₁₆ = 28 bytes, so the data is 28 − 8 = 20 bytes.

**How it's asked in exams.** *"Explain UDP with its header format"* or *"Why is UDP used for real-time applications?"* (4–8 marks). Define UDP, draw the diagram showing the 8-byte header with the four 16-bit fields, explain each field, list the characteristics and applications, and conclude that UDP trades reliability for speed and simplicity. It is often combined with TCP as a *"Differentiate TCP and UDP"* question (see the TCP note for the table).`,
  },

  "Transmission Control Protocol (TCP)": {
    selfTest: [
      "Describe the three segments of the TCP three-way handshake with their sequence and acknowledgement numbers.",
      "A file of 5,000 bytes is sent in 1,000-byte segments and the first byte is numbered 10,001. What is the sequence number of the third segment?",
      "Name the six control flags of the TCP header.",
    ],
    body: `**Definition.** The **Transmission Control Protocol (TCP)** is a **connection-oriented, reliable, byte-stream** transport-layer protocol. It creates a virtual connection between two processes, and provides flow control, error control and congestion control on top of the unreliable IP service.

**Features of TCP.**

- **Stream delivery service.** The application sends a stream of bytes; TCP uses sending and receiving buffers and divides the stream into **segments**.
- **Full-duplex.** Data flows in both directions at the same time.
- **Connection-oriented.** A connection is set up before data transfer and released afterwards.
- **Reliable.** Lost or corrupted segments are retransmitted using acknowledgements, checksums and timers.
- **Numbering.** Every byte has a **sequence number**; the **acknowledgement number** is the number of the next byte expected (cumulative).
- **Flow control** using a sliding window advertised by the receiver (rwnd).
- **Congestion control** using a congestion window (cwnd).

**Sequence number example.** A 5,000-byte file, first byte numbered 10,001, 1,000 bytes per segment:

- Segment 1: bytes 10,001–11,000, sequence number **10,001**
- Segment 2: 11,001–12,000, sequence number **11,001**
- Segment 3: 12,001–13,000, sequence number **12,001**
- Segment 4: 13,001–14,000; Segment 5: 14,001–15,000

**TCP segment header (20 to 60 bytes).** Source port (16 bits), destination port (16), sequence number (32), acknowledgement number (32), header length (4), reserved (6), **six control flags** – URG, ACK, PSH, RST, SYN, FIN – window size (16), checksum (16), urgent pointer (16), and options.

**Connection establishment: three-way handshake.**

1. **SYN:** the client sends a segment with SYN = 1 and a random sequence number, say seq = 8,000.
2. **SYN + ACK:** the server replies with SYN = 1, ACK = 1, its own seq = 15,000 and ack = 8,001.
3. **ACK:** the client sends ACK = 1 with ack = 15,001. The connection is now established and data can flow.

A SYN segment consumes one sequence number even though it carries no data.

**Connection termination.** Normally a three-way exchange: the client sends **FIN**, the server replies **FIN + ACK**, and the client sends a final **ACK**. With **half-close**, one side stops sending but can still receive, which makes it a four-way exchange (FIN, ACK, FIN, ACK).

**TCP vs UDP.**

| Basis | TCP | UDP |
|---|---|---|
| Connection | Connection-oriented (three-way handshake) | Connectionless |
| Reliability | Reliable, with ACKs and retransmission | Unreliable, no ACKs |
| Ordering | Delivers bytes in order | No ordering |
| Header size | 20–60 bytes | Fixed 8 bytes |
| Data unit | Segment, byte stream | User datagram, message |
| Flow and congestion control | Yes (sliding window, cwnd) | No |
| Speed | Slower, more overhead | Faster, less overhead |
| Broadcast/multicast | Not supported | Supported |
| Applications | HTTP, FTP, SMTP, Telnet, SSH | DNS, SNMP, TFTP, VoIP, streaming |

**How it's asked in exams.** Very frequent: *"Explain TCP connection establishment and termination"*, *"Explain the TCP segment format"* or *"Differentiate TCP and UDP"* (8–12 marks). Define TCP, list its features, draw the diagram showing the client and server time lines with the SYN, SYN+ACK and ACK arrows labelled with seq and ack numbers, explain the header fields, and add the comparison table. Conclude that TCP is chosen when correctness matters more than speed.`,
  },

  "Data Traffic": {
    selfTest: [
      "Name the four traffic descriptors.",
      "What is the difference between constant bit rate, variable bit rate and bursty traffic?",
      "A host sends 30 Mbits in 10 seconds with a highest rate of 12 Mbps. What are its average and peak data rates?",
    ],
    body: `**Definition.** **Data traffic** is the flow of data through a network. In congestion control and quality of service, the main aim is to control this traffic, so it is described by **traffic descriptors** and classified into **traffic profiles**.

**Traffic descriptors** are the qualitative values that represent a data flow:

- **Average data rate** = amount of data ÷ time. It shows the average bandwidth the traffic needs.
- **Peak data rate** – the maximum data rate of the traffic. It shows the peak bandwidth the network must provide so the traffic can pass without being changed.
- **Maximum burst size** – the maximum length of time the traffic is generated at the peak rate. A short peak may be ignored, but a long one must be handled.
- **Effective bandwidth** – the bandwidth the network needs to allocate for the flow. It is a function of the three values above and lies between the average and peak rates.

**Traffic profiles.**

- **Constant bit rate (CBR).** The data rate does not change; the average and peak rates are the same. It is easy for the network to handle because bandwidth can be reserved exactly. Example: uncompressed digital voice.
- **Variable bit rate (VBR).** The rate changes smoothly over time, not suddenly. The average and peak rates differ, and the maximum burst size is usually small. Example: compressed video.
- **Bursty.** The rate changes suddenly in a very short time, for example from 0 to 1 Mbps and back. The average and peak rates are very different and the burst size is significant. This is the hardest type to handle and a major cause of congestion. Example: file transfer or web browsing.

**Example.** A host sends at 12 Mbps for 2 s, is silent for 5 s, then sends at 2 Mbps for 3 s. Total data = 24 + 6 = 30 Mbits in 10 s, so the **average data rate = 3 Mbps**, the **peak data rate = 12 Mbps**, and the maximum burst size is **2 s**. This traffic is bursty.

**How it's asked in exams.** *"Explain traffic descriptors and traffic profiles"* (4–6 marks). Define data traffic, explain the four descriptors with the formula for average rate, then the three profiles, and draw the diagram showing rate-versus-time graphs for CBR (flat line), VBR (smooth curve) and bursty (sudden spikes). Conclude that bursty traffic is the main reason networks need traffic shaping.`,
  },

  "Congestion, Congestion Control": {
    selfTest: [
      "Differentiate open-loop and closed-loop congestion control and give two examples of each.",
      "In TCP, if cwnd = 16 MSS when a timeout occurs, what are the new threshold and cwnd?",
      "What is the difference between slow start and congestion avoidance?",
    ],
    body: `**Definition.** **Congestion** occurs when the **load on the network** (number of packets sent) is greater than the **capacity of the network** (number of packets it can handle). Routers' queues fill up, delay rises and packets are dropped. **Congestion control** refers to the mechanisms and techniques that either prevent congestion before it happens or remove it after it has happened.

**Explanation.** As load increases, throughput first rises linearly; after the capacity is reached, delay grows sharply and throughput falls because of retransmissions of dropped packets. Congestion control is divided into two broad categories.

**1. Open-loop congestion control (prevention).** Policies applied *before* congestion occurs:

- **Retransmission policy** – well-designed timers to avoid unnecessary retransmissions.
- **Window policy** – selective repeat is better than go-back-N, which resends many packets.
- **Acknowledgement policy** – acknowledging several packets at once reduces load.
- **Discarding policy** – routers drop less important packets first (e.g. some audio samples).
- **Admission policy** – a flow is admitted only if resources are available.

**2. Closed-loop congestion control (removal).** Mechanisms that act *after* congestion is detected:

- **Backpressure** – a congested node stops receiving from its upstream neighbour, which in turn becomes congested and pushes back towards the source.
- **Choke packet** – a congested router sends a special packet directly to the source asking it to slow down (like ICMP source quench).
- **Implicit signalling** – the source infers congestion from missing ACKs or delay.
- **Explicit signalling** – routers set a bit in packets, either backward (towards the source) or forward (towards the destination), as in Frame Relay's BECN and FECN.

**3. Congestion control in TCP.** The sender's window = minimum of rwnd (receiver window) and **cwnd** (congestion window). TCP uses three phases:

- **Slow start (exponential increase).** cwnd starts at 1 MSS (maximum segment size) and increases by 1 MSS for each ACK, so it **doubles every round-trip time**: 1, 2, 4, 8 … until it reaches the **slow-start threshold (ssthresh)**.
- **Congestion avoidance (additive increase).** After the threshold, cwnd increases by only **1 MSS per RTT**, growing linearly: 8, 9, 10 …
- **Congestion detection (multiplicative decrease).**
  - On a **timeout** (strong sign of congestion): ssthresh = cwnd ÷ 2, cwnd = 1 MSS, and slow start begins again.
  - On **three duplicate ACKs** (weaker sign): ssthresh = cwnd ÷ 2, cwnd = ssthresh, and congestion avoidance continues (fast retransmit / fast recovery).

**Worked example.** ssthresh = 16. cwnd grows 1 → 2 → 4 → 8 → 16 (slow start), then 17 → 18 → 19 → 20 (congestion avoidance). A timeout occurs at cwnd = 20, so the new ssthresh = 20 ÷ 2 = **10** and cwnd = **1**, and slow start restarts: 1, 2, 4, 8, 10, 11 …

**How it's asked in exams.** *"What is congestion? Explain open-loop and closed-loop congestion control"* or *"Explain TCP congestion control: slow start and congestion avoidance"* (8–12 marks). Define congestion and congestion control, explain each open- and closed-loop technique with a line of explanation, then explain TCP's three phases, and draw the diagram showing cwnd against RTT with the exponential curve, the threshold line, the linear growth and the drop after a timeout. Conclude that congestion control keeps the network load below its capacity so throughput stays high.`,
  },

  "Quality of Service (QoS)": {
    selfTest: [
      "Name the four characteristics used to describe the QoS of a flow.",
      "What is jitter, and why does it matter for audio and video?",
      "Which applications need high reliability but tolerate delay?",
    ],
    body: `**Definition.** **Quality of Service (QoS)** is the ability of a network to provide a required level of performance to a **flow** of data, measured by characteristics such as reliability, delay, jitter and bandwidth. A flow is a stream of packets from a source to a destination, for example one video call.

**Flow characteristics.**

- **Reliability.** Lack of reliability means losing packets or acknowledgements, which causes retransmission. Email, file transfer and remote login need high reliability, while audio and telephony can tolerate small losses.
- **Delay.** Source-to-destination delay. Telephony, video conferencing and remote login need **low delay**, while file transfer and email are less sensitive.
- **Jitter.** The **variation in delay** between packets of the same flow. If packets sent at 0, 1, 2 ms arrive at 20, 21, 22 ms the jitter is zero; if they arrive at 20, 25, 21 ms, there is high jitter. Audio and video are very sensitive to jitter because playback becomes uneven.
- **Bandwidth.** The number of bits per second a flow needs. Video conferencing needs far more bandwidth than email.

**Sensitivity of applications:**

| Application | Reliability | Delay | Jitter | Bandwidth |
|---|---|---|---|---|
| Email | High | Low | Low | Low |
| File transfer | High | Low | Low | Medium |
| Web access | High | Medium | Low | Medium |
| Remote login | High | Medium | Medium | Low |
| Audio on demand | Low | Low | High | Medium |
| Video conferencing | Low | High | High | High |
| Telephony | Low | High | High | Low |

(Each entry shows how sensitive the application is to that characteristic.)

**Flow classes.** Based on these characteristics, flows are grouped into classes, such as the ATM service classes CBR, VBR, ABR and UBR, each receiving a different treatment.

**Example.** On a home connection, a Zoom call and a large software download share the same link. Without QoS, the download can fill router queues and make the call choppy. With QoS, the call's packets are given priority so its delay and jitter stay low, while the download simply takes a little longer.

**How it's asked in exams.** *"What is QoS? Explain the flow characteristics"* (4–8 marks). Define QoS and flow, explain reliability, delay, jitter and bandwidth each with an application example, include the sensitivity table, and conclude that different applications need different QoS, so the network must treat flows differently.`,
  },

  "Techniques to Improve QoS": {
    selfTest: [
      "Name the four common techniques used to improve QoS.",
      "A host sends 12 Mbps for 2 s, is silent 5 s, then 2 Mbps for 3 s through a leaky bucket. What is the output rate?",
      "A token bucket has capacity 1,000 tokens and a rate of 100 tokens/s. What is the maximum data it can send in 5 s?",
    ],
    body: `**Definition.** **Techniques to improve QoS** are the methods routers and hosts use to give flows the reliability, delay, jitter and bandwidth they need. The four common techniques are **scheduling, traffic shaping, resource reservation and admission control**.

**1. Scheduling.** Deciding the order in which queued packets are sent.

- **FIFO queuing** – first come, first served; when the queue is full, new packets are dropped.
- **Priority queuing** – packets are placed in priority classes; the highest-priority queue is served first. Good for real-time traffic, but low-priority queues may **starve**.
- **Weighted fair queuing (WFQ)** – queues are served in round-robin order, with the number of packets taken from each queue based on its **weight** (for example weights 3, 2, 1). No queue starves.

**2. Traffic shaping.** Controlling the amount and rate of traffic sent into the network.

- **Leaky bucket.** Like a bucket with a small hole: water poured in at any rate leaks out at a **constant rate**. Bursty input is converted into **fixed-rate output**. Packets arriving when the bucket (queue) is full are discarded. For fixed-size packets, one packet is sent per clock tick; for variable-size packets, a counter of n bytes per tick is used.
- **Token bucket.** Tokens are added to a bucket at rate **r** per second, up to capacity **c**. A packet (or byte) can be sent only by removing a token. If the host is idle, tokens accumulate, so it can later send a **burst** at high speed. Maximum data in time t = **c + r × t**. When the bucket is full, **tokens** are discarded, not packets.

| Basis | Leaky bucket | Token bucket |
|---|---|---|
| Output | Constant rate always | Allows bursts up to the bucket size |
| Idle host | Earns no credit | Saves tokens for later bursts |
| When full | Packets are discarded | Tokens are discarded |
| Flexibility | Rigid | More flexible |

The two can be combined: a token bucket followed by a leaky bucket gives controlled bursts with a smooth peak rate.

**3. Resource reservation.** Buffers, bandwidth and CPU time are reserved in advance for a flow, as in Integrated Services with RSVP.

**4. Admission control.** A router accepts or rejects a new flow based on its flow specification and the resources currently available, so that already-admitted flows keep their promised quality.

**Worked example (leaky bucket).** A host sends 12 Mbps for 2 s (24 Mbits), stays silent 5 s, then sends 2 Mbps for 3 s (6 Mbits). Total 30 Mbits over 10 s. The leaky bucket outputs a steady **3 Mbps for all 10 s**, so the bursty 12 Mbps peak never reaches the network.

**Worked example (token bucket).** Capacity c = 1,000 tokens, rate r = 100 tokens/s, bucket initially full. Maximum data in 5 s = 1,000 + 100 × 5 = **1,500 cells**. The host can send 1,000 at once and then 100 per second.

**How it's asked in exams.** *"Explain leaky bucket and token bucket algorithms"* or *"Explain the techniques to improve QoS"* (8–12 marks). Define each technique, explain the three scheduling types, and for traffic shaping draw the diagram showing the bucket with bursty input and smooth output (and the token bucket with tokens arriving at rate r). Include the comparison table and a numeric example, and conclude that traffic shaping smooths bursty traffic and so reduces congestion.`,
  },

  "Integrated Services, Differentiated Services": {
    selfTest: [
      "Which signalling protocol does Integrated Services use to reserve resources?",
      "What are the three per-hop behaviours defined in Differentiated Services?",
      "Why is DiffServ more scalable than IntServ?",
    ],
    body: `**Definition.** **Integrated Services (IntServ)** is a **flow-based** QoS model for IP in which resources are explicitly reserved for each individual flow before data is sent. **Differentiated Services (DiffServ)** is a **class-based** QoS model in which packets are marked into a small number of classes, and each router treats every class differently.

**1. Integrated Services.** Designed so that IP, which is connectionless, can support real-time applications.

- The application sends a **flow specification** made of an **Rspec** (resource specification: buffer, bandwidth) and a **Tspec** (traffic specification: traffic characteristics of the flow).
- **Admission control:** each router decides whether it can accept the flow.
- **RSVP (Resource Reservation Protocol)** is the signalling protocol. The sender sends a **Path message** towards the receivers, and each receiver sends a **Resv message** back, so reservations are made **receiver-based**. RSVP also supports multicast and uses soft state, so reservations must be refreshed.
- **Service classes:** **guaranteed service** (a guaranteed maximum end-to-end delay, for real-time traffic) and **controlled-load service** (behaves like a lightly loaded network, for applications that tolerate some delay).
- **Problems:** **scalability**, because every router must keep state for every flow, and only two service types are offered.

**2. Differentiated Services.** Developed to solve the shortcomings of IntServ.

- The main processing is moved to the **edge of the network**; core routers do not store per-flow state.
- Each packet carries a **DS field** (the former IPv4 service-type byte) containing a 6-bit **DSCP** (DS code point) that selects its class.
- Each class receives a **per-hop behaviour (PHB)** at every router:
  - **DE PHB** (default) – normal best-effort delivery.
  - **EF PHB** (expedited forwarding) – low loss, low delay, low jitter, like a virtual leased line.
  - **AF PHB** (assured forwarding) – delivery is assured as long as the class stays within its profile.
- A **traffic conditioner** at the edge contains a **meter**, **marker**, **shaper** and **dropper**, which check and enforce the agreed traffic profile.

| Basis | Integrated Services | Differentiated Services |
|---|---|---|
| Granularity | Per flow | Per class (aggregate) |
| Reservation | Explicit, before sending (RSVP) | No signalling; packets are marked |
| Router state | Every router keeps per-flow state | Core routers keep no flow state |
| Scalability | Poor for large networks | Highly scalable |
| Service types | Guaranteed and controlled-load | DE, EF, AF per-hop behaviours |
| Where work is done | In every router | Mostly at the edge |
| QoS guarantee | Strict, end-to-end | Relative, per hop |

**Example.** An ISP marks voice-over-IP packets with the EF code point and ordinary web traffic as default. Core routers simply read the DSCP and forward EF packets first, without knowing which call each packet belongs to. Under IntServ, by contrast, each call would first reserve bandwidth along the whole path with RSVP.

**How it's asked in exams.** *"Differentiate integrated services and differentiated services"* or *"Write short notes on RSVP"* (6–8 marks). Define both, explain flow specification, admission control, RSVP (Path and Resv messages) and service classes for IntServ, then the DS field, PHBs and traffic conditioner for DiffServ. Draw the diagram showing the RSVP Path and Resv messages between sender, routers and receivers, give the comparison table, and conclude that DiffServ is preferred today because it scales to the whole Internet.`,
  },

  "QoS in Switched Networks": {
    selfTest: [
      "Define CIR in Frame Relay and write its formula.",
      "If Bc = 400 kbits and the measurement time T is 4 s, what is the CIR?",
      "Name the four ATM service classes.",
    ],
    body: `**Definition.** **QoS in switched networks** refers to how virtual-circuit switched WANs such as **Frame Relay** and **ATM** define traffic attributes and service classes so that the network can guarantee a level of performance to each connection.

**1. QoS in Frame Relay.** Four attributes control traffic on each virtual circuit:

- **Access rate** – the maximum rate of the user's physical connection to the network, e.g. 1.544 Mbps. The user can never exceed it.
- **Committed burst size (Bc)** – the maximum number of bits in a period T that the network **commits** to deliver without discarding.
- **Committed information rate (CIR)** – the average rate the network guarantees: **CIR = Bc ÷ T**.
- **Excess burst size (Be)** – the maximum number of bits beyond Bc that the user may send in T; the network delivers them if there is no congestion, but may discard them.

User behaviour over period T: if data sent ≤ Bc, it is delivered normally; if it is between Bc and Bc + Be, the excess frames are marked **discard eligible (DE)**; if it is more than Bc + Be, the excess is **discarded**.

**Worked example.** Bc = 400 kbits over T = 4 s, so CIR = 400,000 ÷ 4 = **100 kbps**. If Be = 200 kbits, the user may send up to 600 kbits in 4 s: the first 400 kbits are guaranteed, the next 200 kbits are marked DE, and anything more is discarded.

**2. QoS in ATM.** ATM defines service classes and two groups of attributes.

**Service classes:**

- **CBR (constant bit rate)** – for real-time audio and video that need a fixed rate, like a leased line.
- **VBR (variable bit rate)** – divided into **VBR-RT** (real-time, e.g. compressed video) and **VBR-NRT** (non-real-time).
- **ABR (available bit rate)** – delivers at a minimum rate, and more when capacity is available; suitable for bursty data.
- **UBR (unspecified bit rate)** – best-effort, with no guarantee, e.g. email.

**User-related attributes:** **SCR** (sustained cell rate, the average rate over a long time), **PCR** (peak cell rate), **MCR** (minimum cell rate), and **CVDT** (cell variation delay tolerance).

**Network-related attributes:** **CLR** (cell loss ratio), **CTD** (cell transfer delay), **CDV** (cell delay variation) and **CER** (cell error ratio).

| Basis | Frame Relay | ATM |
|---|---|---|
| Data unit | Variable-length frame | Fixed 53-byte cell |
| Main QoS attributes | Access rate, CIR, Bc, Be | SCR, PCR, MCR, CVDT, CLR, CTD, CDV, CER |
| Service classes | Single committed-rate service with DE marking | CBR, VBR (RT/NRT), ABR, UBR |
| Real-time support | Limited | Strong |

**How it's asked in exams.** *"Explain QoS in Frame Relay"*, *"Explain ATM service classes"* or short notes on CIR (4–8 marks). Define each attribute with its formula, work a CIR example, draw the diagram showing a graph of bits sent against time with the Bc and Bc + Be lines and the areas that are delivered, marked DE and discarded, then list the ATM classes and attributes. Conclude that these attributes let switched WANs offer predictable service to each customer.`,
  },
};
