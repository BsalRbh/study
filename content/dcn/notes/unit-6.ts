import type { TopicNote } from "@/content/types";

export const unit6Notes: Record<string, TopicNote> = {
  "Client Server Model": {
    selfTest: [
      "In the client-server model, which side starts the communication?",
      "What is the difference between an iterative server and a concurrent server?",
      "Give two examples of client-server applications on the Internet.",
    ],
    body: `**Definition.** The **client-server model** is the most common paradigm of the application layer, in which a **client** process (running on a local host) requests a service and a **server** process (running on a remote host) provides that service. Communication is always started by the client.

**Explanation.** The server is a program that runs continuously (it is *always on*), waiting for requests at a well-known port number. The client is a program that runs only when needed; it opens communication, sends a request, receives the response and then terminates. Because one server may serve many clients, the server usually has more processing power and a fixed, known address.

- **Client.** Active, runs for a limited time, uses a temporary (ephemeral) port number chosen by the operating system.
- **Server.** Passive, runs forever, uses a well-known port (for example 80 for HTTP, 25 for SMTP, 53 for DNS).

Servers are classified by how they handle requests:

- **Iterative server.** Handles one request at a time; other clients wait in a queue. Suitable for short, connectionless (UDP) services such as DNS lookups.
- **Concurrent server.** Handles many clients at the same time by creating a new child process or thread for each client. Used for connection-oriented (TCP) services such as HTTP or FTP.

The client-server model differs from the **peer-to-peer (P2P)** model, where every host can act as both client and server (for example BitTorrent). P2P scales better, but client-server is easier to manage and secure.

**Example.** When you open a web browser (client) and type a URL, the browser sends an HTTP request to the web server of that site on port 80. The server, which has been running all the time, returns the web page and continues waiting for other clients.

**How it's asked in exams.** *"Explain the client-server model with a suitable diagram"* or *"Differentiate client-server and peer-to-peer architecture"* (4–8 marks). Define both roles, list the characteristics of client and server, explain iterative vs concurrent servers, give Internet examples, and draw the diagram showing several clients connected across the Internet to one server with request and response arrows. End with a line saying that most Internet services (web, email, DNS, FTP) follow this model.`,
  },

  "Socket Interface": {
    selfTest: [
      "What two values together form a socket address?",
      "Name the three types of sockets.",
      "List the order of socket calls used by a TCP server.",
    ],
    body: `**Definition.** A **socket interface** is a set of instructions (an Application Programming Interface, API) that lets an application program communicate with the transport layer of the operating system. A **socket** is an end point of communication, and a **socket address** is the combination of an **IP address and a port number**.

**Explanation.** The socket interface was first developed at the University of California, Berkeley, for UNIX (hence "Berkeley sockets"). The application treats a socket much like a file: it can be created, written to, read from and closed. A connection between two processes is identified by a pair of socket addresses, one for the client and one for the server.

**Types of sockets:**

- **Stream socket.** Used with TCP; provides a reliable, connection-oriented byte stream.
- **Datagram socket.** Used with UDP; sends independent messages with no connection.
- **Raw socket.** Used by protocols that directly use IP, such as ICMP (ping) or OSPF.

**Typical sequence of calls for a TCP connection:**

1. **Server:** socket (create) → bind (attach local IP and well-known port) → listen (ready to accept connections) → accept (wait for and accept a client).
2. **Client:** socket → connect (request a connection to the server socket address).
3. **Both:** send/write and recv/read to exchange data.
4. **Both:** close to release the connection.

For UDP, the server uses socket → bind → recvfrom/sendto, and the client uses socket → sendto/recvfrom; there is no listen, accept or connect.

**Example.** A web server creates a stream socket and binds it to 203.0.113.5 port 80. A browser on 192.168.1.10 gets ephemeral port 52000 and connects. The connection is identified by the socket pair (192.168.1.10:52000, 203.0.113.5:80).

**How it's asked in exams.** *"What is a socket? Explain the socket interface used in client-server communication"* (6–8 marks). Define socket and socket address, list the socket types, and write the sequence of calls for server and client. Draw the diagram showing the server and client call sequence side by side with the connection and data-transfer arrows between them. Conclude that sockets are the bridge between application programs and TCP/UDP.`,
  },

  "Name Space, Domain Name Space": {
    selfTest: [
      "What is the difference between a flat name space and a hierarchical name space?",
      "What is the maximum number of levels in the DNS domain name space?",
      "What is the difference between an FQDN and a PQDN?",
    ],
    body: `**Definition.** A **name space** is the set of all names that can be assigned to machines, organised so that every name is unique and maps to exactly one address. The **domain name space** is the hierarchical name space used by the Domain Name System (DNS) of the Internet.

**Explanation.** Names can be organised in two ways:

- **Flat name space.** A name is just a sequence of characters with no structure. It must be controlled centrally to avoid duplicates, so it cannot scale to the Internet.
- **Hierarchical name space.** Each name has several parts, for example organisation type, organisation name and department. Authority for each part can be delegated, so a name only needs to be unique within its parent. The Internet uses this approach.

**Domain name space structure.** It is an inverted tree with the **root** at the top and a maximum of **128 levels** (level 0 is the root).

- **Label.** Each node has a label of at most 63 characters. The root label is an empty (null) string. Children of the same node must have different labels.
- **Domain name.** The sequence of labels from a node up to the root, separated by dots, for example mail.pu.edu.np.
- **FQDN (Fully Qualified Domain Name).** A name that ends with the null root label and so is written ending in a dot, for example challenger.atc.fhda.edu. It uniquely identifies a host.
- **PQDN (Partially Qualified Domain Name).** A name that does not reach the root, for example challenger. The resolver completes it by adding a suffix.
- **Domain.** A subtree of the domain name space; its name is the name of the node at the top of that subtree.

**Example.** In www.example.com. the labels are www, example, com and the empty root. com is a top-level domain, example.com is a second-level domain, and www.example.com is a host inside it.

**How it's asked in exams.** *"What is a name space? Explain the domain name space with a diagram"* (6–8 marks). Define flat vs hierarchical name space, then explain label, domain name, FQDN vs PQDN and domain. Draw the diagram showing the inverted tree: root at the top, then com, edu, org, np, then example.com, then www. Conclude that the hierarchical design is what allows DNS to scale worldwide.`,
  },

  "Distribution of Name Space, DNS in the Internet": {
    selfTest: [
      "What is the difference between a zone and a domain?",
      "What is the difference between a primary and a secondary DNS server?",
      "Name the three sections into which the Internet domain name space is divided.",
    ],
    body: `**Definition.** **Distribution of the name space** means dividing the huge DNS database among many servers around the world instead of storing it on one computer. **DNS in the Internet** refers to the way the domain name space is actually divided into generic, country and inverse domains.

**Explanation — why distribute.** A single central server would be a single point of failure, would be overloaded with requests, and would be far away from most users. So the information is spread in a hierarchy of **name servers**.

- **Zone.** The part of the tree that a server is responsible for (has authority over). If a server delegates part of its domain to other servers, its zone is smaller than its domain. The server keeps a **zone file** with all the records for its zone.
- **Root server.** A server whose zone is the whole tree. Root servers usually do not store host records but hold references to the top-level domain servers. There are 13 logical root servers (named A to M), each replicated at many locations.
- **Primary server.** Stores the original zone file; it creates, maintains and updates it on disk.
- **Secondary server.** Obtains a complete copy of the zone file from the primary (a *zone transfer*) and stores it. It provides redundancy and load sharing but does not create or update the file itself.

**DNS in the Internet.** The domain name space is divided into three sections:

- **Generic domains.** Hosts classified by organisation type: com, edu, gov, org, net, mil, int, and newer ones like info, biz, name.
- **Country domains.** Two-character country codes: np (Nepal), in (India), uk, us. Second-level labels may be organisational, as in edu.np or com.np.
- **Inverse domain.** Used to map an IP address back to a name (reverse lookup), under the special domain in-addr.arpa. For example, the IP 132.34.45.121 is looked up as 121.45.34.132.in-addr.arpa.

**Example.** The server of Purbanchal University could be the primary server for the zone pu.edu.np, with a secondary server in another building. The np servers only know which servers are authoritative for edu.np.

**How it's asked in exams.** *"Explain how the domain name space is distributed. Differentiate primary and secondary servers"* or *"Explain generic, country and inverse domains"* (6–8 marks). Define zone vs domain, root, primary and secondary servers, then describe the three sections with examples. Draw the diagram showing the root with generic, country and inverse subtrees. Conclude that distribution gives DNS reliability and speed.`,
  },

  "Resolution, DNS Messages, DDNS": {
    selfTest: [
      "What is the difference between recursive and iterative resolution?",
      "Name the four record sections that can follow the header of a DNS message.",
      "Why is Dynamic DNS needed?",
    ],
    body: `**Definition.** **Name–address resolution** is the process of mapping a domain name to an IP address (or an address to a name). A host that needs this mapping calls a DNS client called a **resolver**, which contacts DNS servers. **DDNS (Dynamic DNS)** is an extension that lets the DNS database be updated automatically when addresses change.

**Recursive resolution.** The client asks its local server for a complete answer. If the local server does not know, it asks the root server, which asks the TLD server, which asks the authoritative server. The answer then travels back along the same chain to the client. The client sends one query and receives one final answer; the servers do all the work.

**Iterative resolution.** If a server does not know the answer, it does not ask further itself; it returns a **referral** (the address of the next server to ask). The querying side then asks that server directly, and so on until the authoritative server gives the answer. In practice, the host to local server step is recursive and the local server to root/TLD/authoritative steps are iterative.

| Point | Recursive | Iterative |
|---|---|---|
| Who does the work | Servers query on the client's behalf | Querier contacts each server itself |
| Reply from server | Final answer or error | Answer or referral to next server |
| Load on root/TLD | Higher | Lower |
| Typical use | Host → local server | Local server → root, TLD, authoritative |

**Caching.** Each server caches answers it has learned so the next query for the same name is answered quickly. Every cached record has a **TTL (time to live)** after which it is discarded, so out-of-date mappings do not stay forever.

**DNS messages.** There are two types, **query** and **response**, with the same format. Both start with a 12-byte **header** (identification, flags, and counts of each section). Then come the **question section** (the name being asked), the **answer section** (resource records answering it), the **authoritative section** (records of authoritative servers) and the **additional section** (extra helpful records, such as the IP of a named server). DNS normally uses **UDP port 53**; TCP port 53 is used for zone transfers and for responses larger than 512 bytes.

**DDNS.** When DNS was designed, mappings changed rarely and were edited by hand. With DHCP, addresses change often. In DDNS, when a new binding is made (for example by DHCP), the information is sent to the primary server, which updates the zone; secondary servers are then notified or pull the change.

**Example.** Resolving www.example.com: (1) the PC asks its local DNS server (recursive). (2) The local server, with nothing cached, asks a root server, which refers it to the com TLD servers. (3) It asks a com server, which refers it to the authoritative servers for example.com. (4) It asks the example.com server, which returns the IP address. (5) The local server caches the result and returns it to the PC.

**How it's asked in exams.** *"Explain recursive and iterative resolution with diagrams"* (8–12 marks) or *"Write short notes on DNS message format / DDNS"* (4 marks). Define resolver and resolution, explain both methods with numbered steps, draw the diagram showing the client, local server, root, TLD and authoritative servers with numbered arrows for each method, add the comparison table, mention caching with TTL, and conclude that real DNS combines both methods for efficiency.`,
  },

  "Encapsulation": {
    selfTest: [
      "What is added to data at each layer during encapsulation?",
      "What is the data unit called at the transport, network and data link layers?",
      "Which transport protocol and port does DNS use for normal queries?",
    ],
    body: `**Definition.** **Encapsulation** is the process in which each layer of the sending host takes the data unit from the layer above and adds its own **header** (and sometimes a trailer) before passing it down. At the receiver, the reverse process, **decapsulation**, removes each header layer by layer. In the context of DNS, encapsulation refers to how DNS messages are carried by UDP or TCP.

**Explanation — general encapsulation.**

1. **Application layer** creates the *message* (for example a DNS query or HTTP request).
2. **Transport layer** adds a TCP or UDP header with port numbers, forming a *segment* (TCP) or *user datagram* (UDP).
3. **Network layer** adds an IP header with source and destination IP addresses, forming a *datagram/packet*.
4. **Data link layer** adds a header and trailer (MAC addresses and error check), forming a *frame*.
5. **Physical layer** sends the frame as *bits* on the medium.

Each header is read only by the peer layer at the destination, which removes it and passes the rest upward.

**DNS encapsulation.** DNS can use either UDP or TCP, and in both cases the well-known port is **53**.

- **UDP** is used when the response message is **512 bytes or less**, because UDP is fast and has no connection setup. Most ordinary queries use UDP.
- **TCP** is used when the response is larger than 512 bytes, and for **zone transfers** between primary and secondary servers, because a complete zone file needs reliable delivery.
- If a UDP response is too large, the server sets the truncation (TC) flag; the resolver then repeats the query over TCP.

**Example.** A query for www.example.com is a DNS message of about 30 bytes. It is placed in a UDP user datagram (source port 50000, destination port 53), inside an IP datagram to the DNS server's IP, inside an Ethernet frame to the router's MAC address.

**How it's asked in exams.** Often a short note: *"Explain encapsulation of DNS messages"* or *"Explain encapsulation and decapsulation"* (4–6 marks). Name the data unit at each layer, state which transport protocol DNS uses and when, and draw the diagram showing the message being wrapped with transport, IP and frame headers. Conclude that encapsulation lets each layer work independently.`,
  },

  "Electronic Mail, File Transfer": {
    selfTest: [
      "Which protocol pushes mail and which protocols pull mail?",
      "Why is FTP said to use out-of-band control?",
      "Name the three components of the email architecture.",
    ],
    body: `**Definition.** **Electronic mail (email)** is an application-layer service for sending messages between users over the Internet. **File transfer** is the service of copying complete files from one host to another, provided mainly by **FTP (File Transfer Protocol)**.

**Email architecture.** Three main components are involved:

- **User Agent (UA).** The program the user uses to compose, read, reply and forward mail (for example Outlook, Thunderbird, a webmail page).
- **Message Transfer Agent (MTA).** Transfers mail between mail servers using **SMTP** (Simple Mail Transfer Protocol, TCP port 25). SMTP is a *push* protocol.
- **Message Access Agent (MAA).** Lets the receiver pull mail from its mail server using **POP3** (port 110) or **IMAP4** (port 143).

A mail message has an **envelope** (sender and receiver addresses used by SMTP) and the **message** itself (header with From, To, Subject, Date, and the body). An address has the form local-part@domain-name. Because SMTP can carry only 7-bit ASCII, **MIME** (Multipurpose Internet Mail Extensions) is used to send non-ASCII data such as images, audio and attachments.

**SMTP phases:** connection establishment (HELO), mail transfer (MAIL FROM, RCPT TO, DATA, message ending in a line with a single dot), and connection termination (QUIT).

| Point | POP3 | IMAP4 |
|---|---|---|
| Port | 110 | 143 |
| Mail storage | Usually downloaded and deleted from server | Stays on the server |
| Folders on server | No | Yes, can create/manage folders |
| Partial download | No, whole message | Yes, can fetch headers or parts |
| Multiple devices | Poor | Good, same view everywhere |
| Complexity | Simple | More complex, more features |

**FTP.** FTP uses TCP and opens **two connections**: a **control connection** on port **21**, which stays open for the whole session and carries commands (USER, PASS, LIST, RETR, STOR, QUIT) and responses; and a **data connection** on port **20**, opened for each file transfer and closed after it. Because commands travel on a separate connection from data, FTP is said to use *out-of-band* control. FTP supports file types (ASCII, EBCDIC, image/binary), data structures (file, record, page) and transmission modes (stream, block, compressed). **TFTP** is a simple variant over UDP without authentication.

**Example.** Ram (ram@gmail.com) sends mail to Sita (sita@yahoo.com): (1) Ram's UA sends the mail to Gmail's server using SMTP. (2) Gmail's MTA looks up yahoo.com in DNS and pushes the mail to Yahoo's server using SMTP. (3) The mail waits in Sita's mailbox. (4) Sita's UA pulls it using POP3 or IMAP.

**How it's asked in exams.** *"Explain the architecture of electronic mail. Differentiate POP3 and IMAP"* (8–12 marks), or *"Explain FTP with its connections"* (6–8 marks). Describe UA, MTA and MAA, draw the diagram showing sender UA → SMTP → sender server → SMTP → receiver server → POP3/IMAP → receiver UA, add the comparison table, and for FTP draw the diagram showing the client and server with the control connection (port 21) and data connection (port 20). Conclude with the role each protocol plays.`,
  },

  "HTTP, World Wide Web (WWW)": {
    selfTest: [
      "What are the three parts of a URL?",
      "What do HTTP status codes 200, 301, 404 and 500 mean?",
      "What is the difference between persistent and non-persistent HTTP connections?",
    ],
    body: `**Definition.** The **World Wide Web (WWW)** is a distributed client-server service in which a browser accesses linked documents (**web pages**) stored on web servers across the Internet. **HTTP (HyperText Transfer Protocol)** is the application-layer protocol used to transfer these pages; it runs over TCP on port **80** (HTTPS, the secure version, uses port 443).

**Architecture of WWW.**

- **Browser (client)** has a controller, client protocols (HTTP, FTP) and interpreters (HTML, JavaScript).
- **Web server** stores pages and returns them on request.
- **URL (Uniform Resource Locator)** identifies a page with protocol, host and path, for example http://www.example.com/index.html. A port may also be given.
- **Web documents** are **static** (fixed file, same for all users), **dynamic** (created by the server when requested, such as PHP or JSP) or **active** (a program sent to run in the browser, such as JavaScript).

**HTTP request message.** A request line (method, URL, version), header lines, a blank line and an optional body. Common methods:

- **GET** requests a document; **POST** sends data (such as a form) to the server; **HEAD** requests only the headers; **PUT** uploads a document; **DELETE** removes it.

**HTTP response message.** A status line (version, status code, phrase), header lines, a blank line and the body (the document). Status codes are grouped:

- **1xx** informational, **2xx** success (200 OK), **3xx** redirection (301 Moved Permanently, 304 Not Modified), **4xx** client error (400 Bad Request, 403 Forbidden, 404 Not Found), **5xx** server error (500 Internal Server Error, 503 Service Unavailable).

**Other features.** HTTP is **stateless**: the server does not remember previous requests, so **cookies** are used to remember users (login, shopping cart). A **proxy server** caches recent responses to reduce load and delay. Connections may be:

| Point | Non-persistent | Persistent |
|---|---|---|
| Connection | New TCP connection per object | One connection for many objects |
| Overhead | High (setup each time) | Low |
| Version | HTTP/1.0 default | HTTP/1.1 default |

**Example.** Typing http://www.example.com/index.html: the browser resolves the name with DNS, opens a TCP connection to port 80, and sends "GET /index.html HTTP/1.1" with a Host: www.example.com header. The server replies "HTTP/1.1 200 OK" with Content-Type: text/html and the page. If the file had been removed, it would reply "404 Not Found".

**How it's asked in exams.** *"Explain the architecture of WWW"* or *"Explain HTTP request and response messages with status codes"* (8–12 marks). Define WWW and HTTP, explain URL and document types, draw the diagram showing the request and response message formats and the browser–server exchange, list methods and status code classes with examples, mention cookies and persistent connections, and conclude that HTTP is the backbone of the web.`,
  },

  "Digitizing Audio and Video": {
    selfTest: [
      "According to the Nyquist theorem, how often must a voice signal of 4 kHz be sampled?",
      "What is the bit rate of digitized telephone-quality voice?",
      "What is a frame rate, and what frame rate does TV use?",
    ],
    body: `**Definition.** **Digitizing** audio or video means converting the continuous (analog) signal into a sequence of binary numbers so that it can be stored, processed and sent over a digital network.

**Digitizing audio.** Sound picked up by a microphone is an analog electrical signal. It is digitized in three steps:

1. **Sampling.** The signal is measured at regular intervals. By the **Nyquist theorem**, the sampling rate must be at least **twice the highest frequency** in the signal.
2. **Quantization.** Each sample is rounded to the nearest of a fixed number of levels.
3. **Encoding.** Each level is represented by a fixed number of bits.

For telephone voice (highest frequency about 4 kHz): 8000 samples/s × 8 bits = **64 kbps**. For CD-quality music (highest frequency about 20 kHz): 44,100 samples/s × 16 bits × 2 (stereo) ≈ **1.411 Mbps**.

**Digitizing video.** A video is a sequence of still images called **frames** shown quickly so the eye sees motion. Each frame is divided into small dots called **pixels**, and each pixel is represented by bits (for example 24 bits for true colour: 8 each for red, green and blue).

- A frame rate of about 25–30 frames per second is used (TV traditionally shows 25 or 30 frames/s). To avoid flicker, each frame is painted twice or interlaced.
- Bit rate = pixels per frame × bits per pixel × frames per second.

**Example.** A low-resolution colour video of 1024 × 768 pixels, 24 bits per pixel, 30 frames/s needs 1024 × 768 × 24 × 30 ≈ **566 Mbps**. This is far too high for most networks, which is why compression is essential.

**How it's asked in exams.** *"How are audio and video digitized? Why is compression required?"* (6–8 marks). Explain sampling, quantization and encoding with the Nyquist rule, calculate the 64 kbps voice rate, explain frames and pixels, show one bit-rate calculation for video, and conclude with a sentence that the huge raw bit rate makes compression necessary.`,
  },

  "Audio and Video Compression": {
    selfTest: [
      "What is the difference between predictive encoding and perceptual encoding of audio?",
      "Name the three types of frames used in MPEG.",
      "Is JPEG lossy or lossless?",
    ],
    body: `**Definition.** **Compression** is the process of reducing the number of bits needed to represent audio or video, so it needs less storage and less bandwidth. It can be **lossless** (original data recovered exactly) or **lossy** (some unnoticeable detail is thrown away for much higher compression). Multimedia almost always uses lossy compression.

**Audio compression.** Two main approaches:

- **Predictive encoding.** Only the *difference* between successive samples is encoded instead of the full sample, because neighbouring samples are similar. Used mainly for speech; examples are GSM (13 kbps), G.729 (8 kbps) and G.723.3.
- **Perceptual encoding.** Based on **psychoacoustics**, the study of how people hear. It removes sounds that the ear cannot hear, using *frequency masking* (a loud sound hides a softer sound at a nearby frequency) and *temporal masking* (a loud sound hides softer sounds for a short time before and after). **MP3** (MPEG audio layer 3) uses this and compresses CD-quality music to about 96, 128 or 160 kbps.

**Image compression — JPEG.** JPEG (Joint Photographic Experts Group) compresses still images:

1. The image is divided into 8 × 8 pixel blocks.
2. **DCT (Discrete Cosine Transform)** converts each block into frequency values.
3. **Quantization** divides the values and drops small ones; this is where loss happens.
4. **Compression** of the result using run-length and entropy coding, reading values in a zigzag order.

**Video compression — MPEG.** MPEG (Moving Picture Experts Group) compresses each frame spatially with JPEG-like methods and removes **temporal redundancy** between frames, because consecutive frames are nearly identical. It uses three frame types:

- **I-frame (intracoded).** A complete, independent picture, sent at regular intervals so that viewers can join or recover from errors.
- **P-frame (predicted).** Stores only the changes from the previous I- or P-frame.
- **B-frame (bidirectional).** Predicted from both the previous and the next I- or P-frame; the smallest frame type.

Versions: MPEG-1 for CD-ROM (about 1.5 Mbps), MPEG-2 for DVD and digital TV, MPEG-4 for Internet and mobile video.

**Example.** A 5-minute song is about 50 MB as raw CD audio but about 5 MB as a 128 kbps MP3, a roughly 10:1 reduction, with no difference most listeners can hear.

**How it's asked in exams.** *"Explain audio and video compression techniques"* or *"Write short notes on JPEG / MPEG"* (4–8 marks). Define lossy vs lossless, explain predictive and perceptual audio coding, list the JPEG steps, and explain I, P and B frames. Draw the diagram showing a sequence such as I B B P B B P B B I. Conclude that compression makes streaming over normal Internet links possible.`,
  },

  "Streaming Stored Audio/Video": {
    selfTest: [
      "Why is a metafile used in streaming stored audio/video?",
      "What is the role of RTSP?",
      "Name the four approaches to streaming stored audio/video.",
    ],
    body: `**Definition.** **Streaming stored audio/video** means sending pre-recorded, compressed media files stored on a server (such as songs, films, lectures) to a client so that it can be played on demand. The client can pause, rewind and fast-forward.

**Explanation — four approaches (from simplest to best):**

1. **Using a web server.** The browser downloads the whole file with HTTP GET and then passes it to a media player. This is simple, but the user must wait for the entire file to download before playing.
2. **Web server with a metafile.** The browser first downloads a small **metafile** that contains information (the URL) about the audio/video file. The browser gives the metafile to the media player, which then downloads the file directly from the web server and can start playing as it arrives. However, it still uses HTTP over TCP.
3. **Media server.** The browser gets the metafile from the web server, and the media player then fetches the file from a separate **media server**, which can use UDP (faster, retransmission not needed for media) instead of HTTP/TCP.
4. **Media server and RTSP.** **RTSP (Real-Time Streaming Protocol)** is an out-of-band control protocol that adds VCR-like control. The player sends SETUP, then PLAY, and can send PAUSE, and finally TEARDOWN to the media server. The media itself flows separately (typically over RTP/UDP).

**Key techniques.** The client keeps a **playback buffer**: data is received a few seconds ahead of playback so that small network delays (jitter) do not interrupt the show.

| Point | Stored streaming | Live streaming |
|---|---|---|
| Content | Pre-recorded file | Created as event happens |
| User control | Pause, rewind, fast-forward | Usually none |
| Delivery | Unicast, on demand | Often multicast to many at once |
| Delay tolerance | Buffering of several seconds is fine | Should be small |
| Example | YouTube video, online lecture | Live cricket match, live radio |

**Example.** A student clicks an online lecture video. The browser gets the metafile, the media player contacts the media server with RTSP SETUP and PLAY, the video flows over RTP, and the student presses PAUSE, which the player sends to the server as an RTSP PAUSE message.

**How it's asked in exams.** *"Explain the approaches of streaming stored audio/video"* (8 marks). Describe all four approaches in order with their drawbacks, draw the diagram showing browser, web server, media player and media server with numbered steps (and RTSP SETUP/PLAY/PAUSE/TEARDOWN for the last approach), and conclude that the media server with RTSP is the most efficient method.`,
  },

  "Streaming Live Audio/Video": {
    selfTest: [
      "How does streaming live audio/video differ from streaming stored audio/video?",
      "Why is multicasting preferred for live streaming?",
      "Why is UDP preferred over TCP for live media?",
    ],
    body: `**Definition.** **Streaming live audio/video** means transmitting audio or video over the Internet at the same time as the event is happening, similar to radio and TV broadcasting. The content is not stored beforehand; it is captured, compressed and sent immediately.

**Explanation.**

- **Similar to stored streaming.** Both are sensitive to delay and jitter, both cannot accept retransmission delays, and both use a playback buffer at the receiver.
- **Different from stored streaming.** In live streaming the communication is usually **multicast** (one source, many receivers at once) and **live**, so the user cannot rewind or fast-forward and there is no single file on a server.

**Why multicast.** If a live cricket match is sent to one million viewers with unicast, the server must send one million copies. With multicast (or a Content Delivery Network with many edge servers), a single stream is copied only where the paths branch, saving huge bandwidth.

**Why UDP.** Live media is time-sensitive. A retransmitted packet that arrives late is useless, so the lost packet is simply skipped. TCP's retransmission and congestion control would cause stalls. Therefore live streaming normally uses **RTP over UDP**, with **RTCP** to report reception quality back to the sender. (Many modern web platforms also use adaptive HTTP streaming, which trades a few seconds of delay for easier delivery through firewalls.)

**Requirements and problems:**

- **Jitter.** Different packets have different delays. Solved with timestamps and a playback buffer.
- **Packet loss.** Handled by error concealment or forward error correction rather than retransmission.
- **Bandwidth.** The encoder may reduce quality when the network is congested.

**Example.** A live FM radio station also broadcasts on its website. The audio from the studio is compressed to 64 kbps, put in RTP packets and sent over UDP to all listeners; a listener joining late simply hears the programme from that moment.

**How it's asked in exams.** Usually a short note or a comparison: *"Differentiate between streaming stored and streaming live audio/video"* (4–6 marks). Define both, give 4–5 comparison points in a table (content, control, multicast/unicast, delay, examples), mention UDP/RTP and the playback buffer, and conclude that live streaming is essentially broadcasting over the Internet.`,
  },

  "Real Time Interactive Audio/Video, Voice over IP": {
    selfTest: [
      "What is jitter and how does a playback buffer remove it?",
      "Why does RTP not have its own well-known port, and what port rule does it follow?",
      "Name the two main signalling protocols used for Voice over IP.",
    ],
    body: `**Definition.** **Real-time interactive audio/video** is communication in which people talk to or see each other live, such as Internet telephony and video conferencing. **Voice over IP (VoIP)** is the transmission of telephone voice calls over IP networks instead of the circuit-switched telephone network.

**Characteristics of real-time interactive traffic:**

- **Time relationship.** Packets must be played with the same timing gaps with which they were produced.
- **Timestamp.** Each packet carries the time it was produced, so the receiver knows when to play it.
- **Playback buffer.** Packets are stored briefly and played at their timestamp plus a fixed delay; this removes **jitter** (variation in packet delay).
- **Ordering.** A sequence number puts packets in order and detects lost ones.
- **Multicasting, translation and mixing.** Translators change encoding for low-bandwidth receivers; mixers combine several streams into one for conferences.
- **No retransmission.** A late packet is useless, so **UDP** is used, not TCP.

**Protocols.**

- **RTP (Real-time Transport Protocol).** Runs on top of UDP and adds payload type, sequence number, timestamp and source identifier. It uses a temporary **even-numbered** UDP port.
- **RTCP (Real-time Transport Control Protocol).** Carries control and feedback messages (sender reports, receiver reports, packet loss and jitter statistics). It uses the **next odd port** after RTP.

**VoIP signalling protocols:**

- **SIP (Session Initiation Protocol).** An application-layer protocol designed by IETF that establishes, manages and terminates a session. Its messages include INVITE, ACK, BYE, OPTIONS, CANCEL and REGISTER. Addresses look like email addresses (sip:ram@pu.edu.np).
- **H.323.** An ITU standard that lets IP phones communicate with telephones on the public telephone network through a **gateway**, with a **gatekeeper** acting as registrar. It uses Q.931 for call setup, H.245 for negotiation and RTP/RTCP for media.

**Example.** A SIP call: (1) the caller sends INVITE, (2) the callee replies OK, (3) the caller sends ACK, (4) voice flows in RTP packets over UDP both ways, (5) either side sends BYE to end the call, and the other replies OK.

**How it's asked in exams.** *"Explain the characteristics of real-time interactive audio/video"* or *"What is VoIP? Explain SIP and H.323"* (8–12 marks). List and explain each characteristic, describe RTP and RTCP, then explain SIP with the call steps and H.323 with gateway and gatekeeper. Draw the diagram showing the SIP INVITE, OK, ACK, media exchange and BYE sequence. Conclude that VoIP gives cheaper calls by carrying voice as packets.`,
  },
};
