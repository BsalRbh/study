import type { TopicNote } from "@/content/types";

export const unit7Notes: Record<string, TopicNote> = {
  "Circuit Switching Networks, Concepts": {
    selfTest: [
      "Name the three phases of a circuit-switched connection.",
      "What is the difference between a blocking and a non-blocking switch?",
      "Name the four architectural components of a public telecommunications network.",
    ],
    body: `**Definition.** **Circuit switching** is a switching technique in which a **dedicated communication path** (circuit) is established between two stations through a sequence of switching nodes before any data is sent. The path's capacity is reserved for the whole duration of the connection, whether or not data is flowing. The public telephone network is the classic example.

**Three phases of communication:**

1. **Circuit establishment.** Before data flows, an end-to-end circuit is set up node by node; each node finds a free link to the next node.
2. **Data transfer.** Data (voice or digital data) flows along the dedicated path at a fixed rate with no further delay at the nodes.
3. **Circuit disconnect.** When either station ends the call, signals are sent to release the reserved resources.

**Components of a public circuit-switched network (Stallings):**

- **Subscribers.** Devices attached to the network, such as telephones.
- **Subscriber line (local loop).** The link between a subscriber and the network, usually twisted pair.
- **Exchanges.** Switching centres; an **end office** directly serves subscribers.
- **Trunks.** High-capacity multiplexed links between exchanges (using FDM or TDM).

**Switching concepts.**

- **Space-division switching.** Separate physical paths are set up inside the switch, for example a **crossbar** switch (n × m crosspoints) or a **multistage** switch that uses fewer crosspoints. A multistage switch may be **blocking** (a connection can be refused because no internal path is free even though the output is free); a **non-blocking** switch can always connect any free input to any free output.
- **Time-division switching.** Digital signals are divided into time slots and switched by rearranging slots, for example with a **TSI (time-slot interchange)** unit.

**Advantages and disadvantages.** Once set up, the circuit gives a constant data rate and negligible delay, ideal for voice. But set-up takes time, and capacity is wasted when the line is idle (for example silence in a call or a terminal waiting for input), making it inefficient for bursty data.

**Example.** When you dial a friend's landline, your end office finds a free trunk to your friend's end office, which rings the phone. For the whole call, one channel on each link is reserved for you, even while nobody speaks.

**How it's asked in exams.** *"What is circuit switching? Explain its phases and the elements of a circuit-switched network"* (8 marks), or part of a comparison with packet switching (12 marks). Define it, explain the three phases, list the network components and describe space-division and time-division switching. Draw the diagram showing stations connected through several switching nodes with the dedicated path highlighted. Conclude that circuit switching suits voice but wastes capacity for data.`,
  },

  "Control Signaling": {
    selfTest: [
      "What is the difference between in-channel and common channel signaling?",
      "What is the difference between in-band and out-of-band signaling?",
      "What is SS7?",
    ],
    body: `**Definition.** **Control signaling** is the exchange of control information in a circuit-switched network by which calls are established, maintained and terminated, and by which the network is managed.

**Functions of control signaling (Stallings).** Signals are exchanged between subscriber and switch, between switches, and between switch and network management centre. They perform:

- **Audible communication with the subscriber**: dial tone, ringing tone, busy signal.
- **Transmission of the dialled number** to the switches.
- **Call setup messages** between switches, telling the next switch that a call cannot be completed or should be routed.
- **Ringing the called phone** and indicating when it is answered.
- **Billing information** and **maintenance/diagnostic** information.

Signals can be classified as **supervisory** (whether resources are available, busy or idle), **address** (identify the destination), **call information** (status to the subscriber) and **network management** (maintenance and operation).

**Location of signaling.**

- **In-channel signaling.** The same channel is used for control signals and for the call. It can be **in-band** (control signals use the same frequencies as the voice, such as tones in the voice band, so they can go wherever voice goes) or **out-of-band** (a separate narrow band within the channel but outside the voice band is used, so signals can be sent even while the call is in progress).
- **Common channel signaling (CCS).** Control signals are carried on a **separate network of signaling links** that is dedicated to control and shared by many voice channels. It can be **associated mode** (signaling path runs alongside the trunk group) or **non-associated mode** (signaling uses its own network with special signal transfer points).

| Point | In-channel | Common channel |
|---|---|---|
| Path of control signals | Same channel as voice | Separate dedicated signaling network |
| Speed of setup | Slower | Faster |
| Fraud risk | Higher (user can inject tones) | Lower |
| Flexibility | Limited signal types | Rich, many services |

**SS7 (Signaling System No. 7).** The internationally standardised (ITU-T) common channel signaling system used in modern digital telephone networks. It is designed for digital, packet-based control messages and supports services such as caller ID, call forwarding, toll-free numbers and mobile roaming.

**Example.** When you dial a number, SS7 messages travel over the separate signaling network to check that the called line is free and reserve trunks; the voice circuit is connected only when the called party answers.

**How it's asked in exams.** *"Explain the functions of control signaling. Differentiate in-channel and common channel signaling"* (8 marks). List the functions, explain the four signal types, explain in-band and out-of-band, then CCS with associated and non-associated modes, add the comparison table and mention SS7. Draw the diagram showing voice trunks between switches with a separate signaling network above them. Conclude that CCS is used in all modern networks.`,
  },

  "Soft Switch Architecture": {
    selfTest: [
      "What does a softswitch separate that a traditional circuit switch combines?",
      "What is the role of a media gateway (MG)?",
      "What is a media gateway controller (MGC)?",
    ],
    body: `**Definition.** A **softswitch** is a general-purpose computer running specialised software that performs the **call processing** functions of a telephone switch, while the actual physical switching of media is done by separate devices. It is the key element in converging circuit-switched telephone networks with packet-switched IP networks.

**Explanation.** In a traditional circuit switch, two functions are combined in one expensive, vendor-specific box:

- **Call processing (control).** Routing calls, setting up and releasing connections, billing, features such as call forwarding.
- **Media switching (bearer).** Physically connecting the voice channels.

The softswitch architecture **separates** these functions:

- **Softswitch / Media Gateway Controller (MGC).** Handles all call control and signaling. It talks to the SS7 network through a **signaling gateway (SG)** and to IP phones using protocols such as SIP or H.323.
- **Media Gateway (MG).** Performs the physical transport and conversion of media, for example converting circuit-switched voice (TDM, 64 kbps) into packet voice (RTP over IP) and back.
- The MGC controls the MG using a gateway control protocol such as **MGCP** or **H.248/Megaco**.

**Advantages:**

- Lower cost because it runs on standard computer hardware instead of proprietary switches.
- New services can be added quickly by changing software.
- Allows VoIP and traditional telephony to interwork, and lets one controller manage many distributed gateways.
- Easy to scale by adding more gateways.

**Example.** A call from an IP phone to a landline: the IP phone sends a SIP INVITE to the softswitch; the softswitch uses SS7 through the signaling gateway to set up the call on the telephone network, and instructs the media gateway to convert RTP voice packets into a TDM channel toward the landline.

**How it's asked in exams.** Usually a short note: *"Write short notes on softswitch architecture"* (4–6 marks). Define softswitch, explain the separation of call processing and media switching, describe MGC, MG and signaling gateway, and give two advantages. Draw the diagram showing the softswitch (MGC) on top controlling the media gateway, with the circuit-switched network on one side and the IP network on the other. Conclude that softswitches enable the move to all-IP telephony.`,
  },

  "Packet Switching, Packet Size": {
    selfTest: [
      "What is the difference between the datagram and virtual circuit approaches?",
      "Why does breaking a message into smaller packets reduce total delay, up to a point?",
      "Name three types of delay in a packet-switched network.",
    ],
    body: `**Definition.** **Packet switching** is a switching technique in which data is broken into small blocks called **packets**, each containing user data plus a header with control information (such as the destination address). Packets are sent through the network in a **store-and-forward** manner: each node receives a packet, stores it briefly, and passes it to the next node. No link capacity is reserved in advance.

**Advantages over circuit switching.** Link capacity is shared dynamically by many packets, so it is used efficiently; different data rates can be connected; when traffic is heavy, packets are delayed rather than calls blocked; and priorities can be used.

**Two approaches.**

- **Datagram.** Each packet is treated independently and may follow a different route. Packets may arrive out of order or be lost; the destination must reorder them. No call setup is needed. (The Internet's IP works this way.)
- **Virtual circuit.** A route is set up before any packets are sent (call request and call accept). All packets then follow the same route and carry a short virtual circuit identifier instead of the full address. Packets arrive in order, but no capacity is dedicated. (Used by X.25, Frame Relay and ATM.)

| Point | Datagram | Virtual circuit |
|---|---|---|
| Setup phase | None | Required |
| Route | Each packet decided separately | Fixed for the whole connection |
| Addressing | Full address in every packet | Short VC number |
| Order of arrival | May be out of order | In order |
| Node failure | Packets re-routed | All VCs through node are lost |
| Example | IP | X.25, Frame Relay, ATM |

**Packet size.** Smaller packets allow **pipelining**: while one packet is being sent on the second link, the next packet can already be sent on the first link, so total delay falls. But each packet carries a header, so very small packets waste capacity on overhead and need more processing at each node. Ignoring propagation and processing delay, total time = (number of hops + number of packets − 1) × time to send one packet.

**Example (Stallings).** A 40-octet message with a 3-octet header crosses 3 links (X → a → b → Y). Measured in octet-times:

- 1 packet of 43 octets: 3 × 43 = **129**
- 2 packets of 23 octets: (3 + 2 − 1) × 23 = **92**
- 5 packets of 11 octets: (3 + 5 − 1) × 11 = **77**
- 10 packets of 7 octets: (3 + 10 − 1) × 7 = **84**

So delay falls as packets get smaller, but then rises again because headers become a large share of each packet. There is an optimum packet size.

**How it's asked in exams.** *"Explain packet switching. Differentiate datagram and virtual circuit approaches"* (8–12 marks), or *"Explain the effect of packet size on transmission time"* (6 marks). Define packet switching, explain both approaches with the comparison table, then work the packet-size example line by line. Draw the diagram showing packets taking different routes (datagram) and the same route (virtual circuit), and the timing diagram for 1, 2 and 5 packets. End with the decision that a moderate packet size gives the least delay.`,
  },

  "X.25, Frame Relay, ATM": {
    selfTest: [
      "Name the three layers of X.25.",
      "What is a DLCI in Frame Relay?",
      "What is the size of an ATM cell, and how is it divided?",
    ],
    body: `**Definition.** **X.25, Frame Relay and ATM** are wide area network technologies based on **virtual-circuit packet switching**. X.25 is the oldest and most reliable per hop, Frame Relay simplified it for faster, cleaner digital lines, and ATM uses small fixed-size cells for very high speeds.

**X.25.** An ITU-T standard interface between a user's DTE and a packet-switched network (DCE). It has three levels:

- **Physical level.** Physical connection, using X.21 (or similar).
- **Link level.** Reliable transfer over the link using **LAPB**, a subset of HDLC.
- **Packet level.** Provides virtual circuits (virtual calls and permanent virtual circuits) and multiplexes many VCs over one link.

X.25 performs **error control and flow control at both layer 2 and layer 3 on every hop**, and call control packets are sent **in-band** on the same channel as data. This made it reliable on noisy analog lines but slow.

**Frame Relay.** Designed for modern, low-error digital lines. It removes most X.25 overhead:

- Call control signalling is carried on a **separate logical connection** (out-of-band).
- Multiplexing and switching happen at **layer 2**, not layer 3.
- **No hop-by-hop flow control or error control**; lost or bad frames are simply discarded and end systems recover.
- Each virtual circuit is identified by a **DLCI (Data Link Connection Identifier)**. Frames are variable length.
- Typical speeds up to about 2 Mbps (and later higher).

**ATM (Asynchronous Transfer Mode).** Also called cell relay. Data is carried in **fixed-size 53-byte cells**: a **5-byte header** and a **48-byte payload**. Fixed small cells allow fast hardware switching and low, predictable delay for voice and video.

- Connections are **virtual channel connections (VCC)**, grouped into **virtual path connections (VPC)**, identified by **VPI** and **VCI** in the header.
- The **ATM Adaptation Layer (AAL)** adapts different traffic types (AAL1 for constant bit rate voice, AAL5 for data) into cells.
- Typical speeds 155 Mbps and 622 Mbps.

| Point | X.25 | Frame Relay | ATM |
|---|---|---|---|
| Data unit | Variable packet | Variable frame | Fixed 53-byte cell |
| Switching layer | Layer 3 | Layer 2 | Layer 2 (cell) |
| Error/flow control per hop | Yes | No | No |
| Call control | In-band | Separate logical channel | Separate signaling VC |
| Identifier | Logical channel number | DLCI | VPI/VCI |
| Typical speed | 64 kbps | Up to about 2 Mbps | 155–622 Mbps |
| Traffic suited | Data on noisy lines | Data on reliable lines | Voice, video and data |

**Example.** A bank connecting branch offices in the 1990s might lease Frame Relay PVCs from each branch to the head office, each branch identified by its own DLCI, sharing one physical line at the head office.

**How it's asked in exams.** *"Compare X.25, Frame Relay and ATM"* (8–12 marks) or short notes on any one (4 marks). Define each, give its key features (layers, identifiers, cell/frame format), draw the diagram showing the ATM cell with 5-byte header and 48-byte payload and the VP/VC relationship, add the comparison table, and conclude that the trend was toward less per-hop overhead for higher speed.`,
  },

  "Message Switching": {
    selfTest: [
      "What is stored at each node in message switching?",
      "Why is message switching unsuitable for interactive traffic?",
      "How does message switching differ from packet switching?",
    ],
    body: `**Definition.** **Message switching** is a store-and-forward switching technique in which the **entire message** is sent as one unit from node to node. Each intermediate node receives the whole message, stores it (usually on disk), checks it, and forwards it to the next node when a link is free. No dedicated path is set up.

**Explanation.**

- Each message carries the destination address in its header.
- There is **no limit on message size**, so nodes need large storage (secondary storage/disk).
- Messages may wait in queues at each node, so delay is large and variable.
- Because the entire message must arrive before it is forwarded, there is **no pipelining**, unlike packet switching.
- It was used in older telegraph networks and systems such as early email and AUTODIN.

**Advantages.** Efficient use of links (shared, no idle reserved capacity); no call setup; messages can be delivered even if the receiver is not ready (stored until it is); priorities and broadcast to many receivers are possible; messages can be converted between codes or speeds.

**Disadvantages.** Long and unpredictable delay, so it is unsuitable for real-time voice or interactive traffic; needs large storage at every node; one very long message can block a link for a long time.

| Point | Circuit switching | Message switching | Packet switching |
|---|---|---|---|
| Dedicated path | Yes | No | No |
| Setup phase | Required | Not required | Datagram none, VC required |
| Unit transmitted | Continuous stream | Whole message | Small packets |
| Storage at nodes | None | Whole message on disk | Packets briefly in memory |
| Delay | Small after setup, constant | Very large, variable | Small, variable |
| Pipelining | Not applicable | No | Yes |
| Bandwidth use | Wasted when idle | Efficient | Efficient |
| Best for | Voice | Telegram, non-urgent data | Data, Internet traffic |

**Example.** A 10 MB report sent from Kathmandu to Biratnagar via two intermediate nodes would be completely received and stored at the first node, then completely sent to the second node, and so on. The next node cannot start until the whole 10 MB has arrived, which makes the total delay long.

**How it's asked in exams.** *"Differentiate between circuit switching, message switching and packet switching"* (12 marks) is one of the most frequent questions. Define all three, explain how data moves in each, draw the diagram showing the timing of the three techniques over the same path (circuit setup then continuous flow, whole message hop by hop, packets pipelined), give the comparison table, and conclude that packet switching combines the efficiency of message switching with the low delay needed for data networks.`,
  },
};
