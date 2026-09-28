import type { TopicNote } from "@/content/types";

export const unit2Notes: Record<string, TopicNote> = {
  "Analog and Digital, Analog Signals, Digital Signals, Analog versus Digital": {
    selfTest: [
      "What are the three characteristics that completely describe a sine wave?",
      "A signal has a frequency of 60 Hz. What is its period?",
      "A digital signal has 8 levels. How many bits does each level carry?",
    ],
    body: `**Definition.** Both **data** and the **signals** that carry them can be analog or digital. **Analog data** is continuous, taking any value in a range (for example, the human voice). **Digital data** takes discrete values (for example, data stored as 0s and 1s in computer memory). An **analog signal** has infinitely many levels of intensity over a period of time and changes smoothly; a **digital signal** has only a limited number of defined values, often just two (0 and 1). To be transmitted, data must be transformed into electromagnetic signals.

**Periodic and nonperiodic signals.** A *periodic* signal completes a pattern within a measurable time frame (the period) and repeats it. A *nonperiodic* signal changes without a repeating pattern. In data communication we commonly use **periodic analog signals** and **nonperiodic digital signals**.

**Analog signals – the sine wave.** The sine wave is the most fundamental periodic analog signal. It is described by three characteristics:

1. **Peak amplitude** – the absolute value of the highest intensity, measured in volts (e.g. household electricity in Nepal has a peak of about 325 V for 230 V RMS).
2. **Frequency (f)** and **period (T)** – frequency is the number of cycles per second (hertz, Hz); period is the time for one cycle. They are inverses: **f = 1/T** and **T = 1/f**.
3. **Phase** – the position of the waveform relative to time 0, measured in degrees or radians (a shift of a quarter cycle is 90°).

**Wavelength** is the distance a simple signal travels in one period: **λ = propagation speed / f**. A signal can be shown in the **time domain** (amplitude versus time) or the **frequency domain** (peak amplitude versus frequency). A **composite signal** is made of many simple sine waves (Fourier analysis), and its **bandwidth** is the difference between the highest and lowest frequency it contains: **B = f(high) − f(low)**.

**Digital signals.** Information can be carried by voltage levels, e.g. 0 as zero voltage and 1 as positive voltage. If a signal has **L** levels, each level carries **log₂L** bits. **Bit rate** is the number of bits sent per second (bps), and **bit length** is the distance one bit occupies on the medium (propagation speed × bit duration). A digital signal is a composite analog signal with infinite bandwidth. It can be sent by **baseband transmission** (directly, needs a low-pass channel) or **broadband transmission** (after modulation onto an analog carrier, uses a band-pass channel).

**Analog versus digital.**

| Basis | Analog signal | Digital signal |
|---|---|---|
| Values | Infinite, continuous | Limited, discrete (e.g. 0 and 1) |
| Shape | Smooth sine-like curve | Square wave with sudden jumps |
| Described by | Amplitude, frequency, phase | Bit rate, bit interval, levels |
| Noise effect | Noise directly distorts the signal | More immune; can be regenerated exactly |
| Bandwidth | Limited, finite | Theoretically infinite |
| Channel needed | Band-pass channel | Low-pass channel (baseband) |
| Example | Voice on a telephone line, AM/FM radio | Data between computer and printer, Ethernet |

**Example.** Electricity at 60 Hz has T = 1/60 = 0.0166 s = **16.6 ms**. A composite signal made of sine waves of 100, 300, 500, 700 and 900 Hz has bandwidth 900 − 100 = **800 Hz**. A digital signal with 8 levels carries log₂8 = **3 bits per level**.

**How it's asked in exams.** *"Differentiate between analog and digital signals"* (4–6 marks), or *"Define amplitude, frequency, phase and bandwidth"* (4 marks), often with a small numeric part. Define both signals, draw the diagram showing a sine wave labelled with peak amplitude and period next to a square digital wave labelled with bit interval, explain the characteristics, give the comparison table, solve any numeric step by step, and conclude that digital signals dominate computer networks because they can be regenerated without accumulating noise.`,
  },

  "Data Rate Limit": {
    selfTest: [
      "Write the Nyquist formula for a noiseless channel and the Shannon formula for a noisy channel.",
      "A noiseless channel of bandwidth 3000 Hz uses 4 signal levels. What is the maximum bit rate?",
      "A channel has B = 1 MHz and SNR = 63. What is its Shannon capacity?",
    ],
    body: `**Definition.** The **data rate limit** is the maximum number of bits per second that can be sent over a channel. It depends on three factors: **(1) the available bandwidth, (2) the number of signal levels used, and (3) the quality (noise level) of the channel.** Two theoretical formulas calculate it: Nyquist for a noiseless channel and Shannon for a noisy channel.

**1. Noiseless channel – Nyquist bit rate.**

**BitRate = 2 × B × log₂L**

where B is the bandwidth in hertz, L is the number of signal levels and BitRate is in bits per second. Increasing the number of levels seems to increase the bit rate without limit, but more levels make the levels closer together, so the receiver finds it harder to distinguish them and reliability falls.

**2. Noisy channel – Shannon capacity.**

**C = B × log₂(1 + SNR)**

where C is the capacity in bps and SNR is the (unitless) signal-to-noise ratio, the ratio of average signal power to average noise power. SNR is often given in decibels: **SNR(dB) = 10 log₁₀ SNR**, so SNR = 10 to the power SNR(dB)/10. The Shannon formula does not depend on the number of levels; it gives the **upper limit** that no technique can exceed. If SNR = 0 (signal buried in noise), C = B × log₂1 = 0.

**Using both together.** Shannon gives the upper limit; Nyquist then tells us how many signal levels are needed to reach a chosen rate below that limit.

**Worked examples.**

- *Nyquist:* B = 3000 Hz, L = 2 → BitRate = 2 × 3000 × log₂2 = 2 × 3000 × 1 = **6000 bps**. With L = 4 → 2 × 3000 × 2 = **12,000 bps**.
- *Finding levels:* send 265 kbps over a noiseless 20 kHz channel → 265,000 = 2 × 20,000 × log₂L → log₂L = 6.625 → L = 2 to the power 6.625 ≈ 98.7. Since L must be a power of 2, use L = 128 (giving 280 kbps) or L = 64 (giving 240 kbps).
- *Shannon (telephone line):* B = 3000 Hz, SNR = 3162 (35 dB) → C = 3000 × log₂(3163) ≈ 3000 × 11.62 ≈ **34,860 bps**. This is why a dial-up modem cannot exceed about 35 kbps over an analog phone line.
- *Combined:* B = 1 MHz, SNR = 63 → C = 10⁶ × log₂64 = 10⁶ × 6 = **6 Mbps** (upper limit). Choose 4 Mbps for safety. Nyquist: 4 × 10⁶ = 2 × 10⁶ × log₂L → log₂L = 2 → **L = 4 levels**.

**Performance terms often asked with this topic.**

| Term | Meaning |
|---|---|
| Bandwidth | Range of frequencies (Hz) or number of bits per second (bps) a link can carry |
| Throughput | How fast data is actually sent in practice (always ≤ bandwidth) |
| Latency (delay) | Propagation time + transmission time + queuing time + processing delay |
| Bandwidth-delay product | Number of bits that can fill the link |

**How it's asked in exams.** Almost always numeric: *"Calculate the maximum bit rate of a noiseless channel of bandwidth 4 kHz with 8 levels"* or *"Calculate the capacity of a channel with B = 2 MHz and SNR = 30 dB"* (4–8 marks), sometimes with *"Explain Nyquist and Shannon theorems"*. Write both formulas with each symbol explained, convert dB to ratio first where needed, substitute values line by line, give the answer with units, and end with an interpretation sentence such as "Therefore, the channel cannot carry more than 34.86 kbps, whatever modulation technique is used."`,
  },

  "Transmission Impairments": {
    selfTest: [
      "Name the three causes of transmission impairment.",
      "A signal's power drops to half after travelling through a cable. What is the attenuation in dB?",
      "List four types of noise.",
    ],
    body: `**Definition.** **Transmission impairment** means that the signal received at the end of a medium is not the same as the signal that was sent, because transmission media are not perfect. What is sent is not what is received. The three causes of impairment are **attenuation, distortion and noise**.

**1. Attenuation.** Attenuation is the **loss of energy** of a signal. As a signal travels through a medium, some of its energy is used to overcome the resistance of the medium and is converted into heat; this is why a cable carrying signals becomes warm. To compensate, **amplifiers** (for analog) or **repeaters** (for digital) are used to boost the signal. Attenuation and gain are measured in **decibels (dB)**:

**dB = 10 log₁₀ (P₂ / P₁)**

where P₁ is the power at the start and P₂ the power at the end. A negative dB means attenuation; a positive dB means amplification. Engineers often express power in *dBm* (dB relative to 1 mW): dB(m) = 10 log₁₀ P(m).

**2. Distortion.** Distortion means the signal **changes its form or shape**. It occurs in a composite signal made of several frequencies, because each frequency component has its own propagation speed through the medium and therefore its own delay. The components arrive at the receiver out of phase with each other, so the shape of the composite signal at the receiver is different from the one sent.

**3. Noise.** Noise is unwanted energy added to the signal, which may corrupt it. Types:

- **Thermal noise** – random motion of electrons in a wire, creating an extra signal not sent by the transmitter.
- **Induced noise** – from sources such as motors and electrical appliances; these act as sending antennas and the medium acts as the receiving antenna.
- **Crosstalk** – the effect of one wire on another; one wire acts as a sending antenna and the other as receiver (hearing another conversation on the phone).
- **Impulse noise** – a spike (high energy in a very short time) from power lines, lightning, and so on.

**Signal-to-noise ratio.** SNR = average signal power / average noise power, and SNR(dB) = 10 log₁₀ SNR. A high SNR means the signal is less corrupted by noise.

**Summary.**

| Impairment | What happens | Remedy |
|---|---|---|
| Attenuation | Signal loses strength | Amplifiers, repeaters, better cable |
| Distortion | Signal changes shape (different delays per frequency) | Equalizers, limiting the bandwidth used |
| Noise | Unwanted signals added | Shielding, twisting, filtering, error-control coding |

**Example.** A signal travels through a cable and its power is reduced to half, so P₂ = 0.5 P₁. Attenuation = 10 log₁₀ (0.5 P₁ / P₁) = 10 log₁₀ 0.5 = 10 × (−0.3) = **−3 dB**. If a signal travels through a cable losing 3 dB, then through an amplifier gaining 7 dB, then another cable losing 3 dB, the total is −3 + 7 − 3 = **+1 dB**, showing that dB values can simply be added. For SNR: signal power 10 mW and noise power 1 μW → SNR = 10,000 → SNR(dB) = 10 log₁₀ 10,000 = **40 dB**.

**How it's asked in exams.** *"What are transmission impairments? Explain each type"* (6–8 marks) or a short note (4 marks), sometimes with a dB calculation. Define impairment, explain attenuation (with the dB formula), distortion and noise (all four types) in separate paragraphs, draw the diagram showing a clean signal becoming weaker (attenuation), changing shape (distortion) and becoming jagged (noise), solve the numeric step by step, and conclude that impairments limit both the distance and the data rate of a link.`,
  },

  "Line Coding, Block Coding, Sampling": {
    selfTest: [
      "Describe the Manchester encoding of the bit pattern 0100.",
      "Why does 4B/5B block coding increase the data rate by 25%?",
      "A voice signal has a highest frequency of 4 kHz. What is the minimum sampling rate, and the bit rate if 8 bits are used per sample?",
    ],
    body: `**Definition.** **Line coding** is the process of converting digital data (a sequence of bits) into a digital signal. **Block coding** adds redundancy by replacing each group of m bits with a group of n bits (n > m) before line coding, to ensure synchronization and detect errors. **Sampling** (in Pulse Code Modulation, PCM) is the first step in converting an analog signal into digital data.

**Line coding characteristics.** A *data element* is the smallest unit of information (a bit); a *signal element* is the shortest unit of a digital signal. The ratio r = data elements per signal element. The **signal rate (baud)** is S = c × N × (1/r), where N is the data rate and c is the case factor. A good scheme avoids **baseline wandering** (long runs of 0s or 1s drifting the receiver's average), avoids a **DC component** (zero-frequency energy that some media cannot pass), and is **self-synchronizing** (contains timing transitions so sender and receiver clocks stay aligned). It may also offer built-in error detection and noise immunity.

**Line coding schemes.**

- **Unipolar NRZ** – 1 = positive voltage, 0 = zero voltage. Costly in power and has DC component; rarely used.
- **Polar NRZ-L (level)** – the voltage level decides the bit (Forouzan's figures show 0 as positive and 1 as negative; state your convention). Long runs cause baseline wandering and synchronization loss.
- **Polar NRZ-I (invert)** – a 1 is shown by an inversion of the level at the start of the bit; a 0 means no change. Long runs of 0s are still a problem.
- **RZ (return to zero)** – uses three values (+, 0, −); the signal returns to zero halfway through each bit, so it needs double bandwidth.
- **Manchester** – a transition in the **middle of every bit**; in the IEEE 802.3 convention 0 = high-to-low, 1 = low-to-high. Self-synchronizing, no DC component, but needs twice the bandwidth of NRZ. Used in 10 Mbps Ethernet.
- **Differential Manchester** – always a transition in the middle (for clocking); a transition at the **start** of the bit means 0, no transition at the start means 1. Used in Token Ring.
- **Bipolar AMI** – 0 = zero voltage, 1s = alternating positive and negative voltage. No DC component. **Pseudoternary** is the reverse (1 = zero, 0s alternate).
- **Multilevel** (2B1Q, 8B6T) and **multitransition** (MLT-3) schemes send more bits per baud to reduce bandwidth.

**Worked example (bits 01001110).**

| Bit | 0 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |
|---|---|---|---|---|---|---|---|---|
| NRZ-I (start high) | high | low | low | low | high | low | high | high |
| Manchester (IEEE) | H→L | L→H | H→L | H→L | L→H | L→H | L→H | H→L |
| Bipolar AMI | 0 | + | 0 | 0 | − | + | − | 0 |

**Block coding.** Three steps: **division** of the bit sequence into m-bit groups, **substitution** of each with an n-bit code, and **combination** of the n-bit groups into a stream. In **4B/5B**, 16 possible 4-bit groups are mapped to 5-bit codes chosen so that no code has more than one leading 0 or two trailing 0s, so there are never more than three consecutive 0s. It is combined with NRZ-I (e.g. in 100Base-FX). The extra bit increases the rate by 5/4: to send 100 Mbps of data the line must carry **125 Mbps**. **8B/10B** (Gigabit Ethernet) gives better error detection. Scrambling (B8ZS, HDB3) is an alternative for long-distance lines.

**Sampling (PCM).** PCM has three steps: **sampling → quantizing → encoding**.

1. **Sampling** – the analog signal is measured every Ts seconds (sampling rate fs = 1/Ts). Methods are ideal, natural and flat-top (sample and hold). By the **Nyquist sampling theorem**, fs ≥ 2 × f(max).
2. **Quantizing** – each sample is rounded to one of L levels, causing a small quantization error. SNR(dB) ≈ 6.02 × nb + 1.76.
3. **Encoding** – each level is coded with nb = log₂L bits. Bit rate = fs × nb.

**Example.** Human voice (up to 4 kHz): fs = 2 × 4000 = 8000 samples/s; with 8 bits per sample, bit rate = 8000 × 8 = **64 kbps**, which is exactly the standard DS-0 telephone channel.

**How it's asked in exams.** *"What is line coding? Encode 10110010 using NRZ-L, NRZ-I, Manchester and Differential Manchester"* (8–12 marks), *"Explain block coding (4B/5B)"* or *"Explain PCM"* (6–8 marks). Define the term, list the desirable characteristics, draw the diagram showing the bit pattern above time-aligned waveforms for each scheme (mark the mid-bit transitions clearly), give the rules for each scheme, and conclude by comparing them: Manchester family is self-synchronizing but needs double bandwidth, while NRZ is bandwidth-efficient but loses synchronization on long runs.`,
  },

  "Transmission Mode": {
    selfTest: [
      "Differentiate between parallel and serial transmission.",
      "In asynchronous transmission, what are the values of the start bit and the stop bit?",
      "If each byte is sent with 1 start bit and 1 stop bit, what fraction of the transmitted bits is useful data?",
    ],
    body: `**Definition.** **Transmission mode** refers to how binary data is sent across a link. Data can be sent in **parallel** (many bits at a time) or in **serial** (one bit at a time). Serial transmission has three subclasses: **asynchronous, synchronous and isochronous**. (The direction of flow – simplex, half-duplex, full-duplex – is also sometimes called a transmission mode; see Data Communications.)

**1. Parallel transmission.** Binary data is organized into groups of n bits, and all n bits are sent at the same time over **n separate wires**, one bit per wire, with each clock tick. The advantage is **speed**: it can increase the transfer rate by a factor of n compared with serial. The disadvantage is **cost** – n wires are needed – and at long distances the bits can arrive at slightly different times (skew), so it is limited to short distances. Example: an old printer (Centronics) cable or the internal data bus inside a computer.

**2. Serial transmission.** One bit follows another, so only **one communication channel** is needed instead of n. This reduces cost by roughly a factor of n. Because devices communicate internally in parallel, a **parallel-to-serial converter** is needed at the sender and a **serial-to-parallel converter** at the receiver.

- **Asynchronous transmission** – timing of the signal is unimportant; information is agreed in patterns. Each byte is framed by a **start bit (0)** at the beginning and one or more **stop bits (1)** at the end, and there may be a **gap of variable length** between bytes. It is called asynchronous because it is asynchronous at the byte level, but within each byte the bits are still synchronized for the byte's duration. It is cheap and effective for low-speed communication, such as a keyboard connected to a computer or an RS-232 serial port.
- **Synchronous transmission** – the bit stream is combined into longer **frames** with no start/stop bits and no gaps; the receiver counts the bits to separate bytes, and byte synchronization is done at the data link layer. It is **faster** because there is no overhead per byte, so it is used for high-speed transfer between computers.
- **Isochronous transmission** – for real-time audio and video, where uneven delays between frames are unacceptable. The entire stream is synchronized and data arrives at a **fixed rate** (e.g. TV images at 30 frames per second).

**Comparison.**

| Basis | Parallel | Serial asynchronous | Serial synchronous |
|---|---|---|---|
| Bits per clock tick | n bits together | 1 bit | 1 bit |
| Wires needed | n | 1 | 1 |
| Extra bits | None | Start and stop bits per byte | Only frame-level overhead |
| Gaps | None | Variable gaps between bytes | No gaps |
| Speed | Very fast over short distance | Slow | Fast |
| Cost | High | Cheap | Moderate (needs clock sync) |
| Example | Internal computer bus, old printer cable | Keyboard, mouse, RS-232 | High-speed computer links |

**Example.** With 8 data bits, 1 start bit and 1 stop bit, each byte uses 10 bits, so efficiency = 8/10 = **80%**; 20% of the line capacity is overhead. A 9600 bps asynchronous serial line therefore carries only 960 characters per second.

**How it's asked in exams.** *"Differentiate between parallel and serial transmission"* or *"Explain synchronous and asynchronous transmission"* (4–8 marks). Define transmission mode, explain parallel and serial in separate paragraphs, draw the diagram showing 8 wires between sender and receiver for parallel, and for asynchronous serial a byte with a 0 start bit, 1 stop bit and gaps between bytes, give the comparison table, and conclude that serial transmission is preferred for communication between devices because it is cheaper and reliable over long distances.`,
  },

  "Modulation of Digital Data": {
    selfTest: [
      "Name the four digital-to-analog conversion techniques.",
      "An analog signal carries 4 bits per signal element and sends 1000 signal elements per second. What is the bit rate?",
      "How many bits does each signal element carry in QPSK and in 16-QAM?",
    ],
    body: `**Definition.** **Digital-to-analog conversion (modulation of digital data)** is the process of changing one of the characteristics of an analog **carrier signal** (amplitude, frequency or phase) according to the information in digital data. It is needed when digital data must travel over a band-pass channel, such as a telephone line or radio link. A **modem** (modulator-demodulator) performs this conversion.

**Bit rate and baud rate.** Bit rate N is the number of bits per second; baud rate S is the number of signal elements per second. If each signal element carries r bits (r = log₂L), then **S = N / r**. The carrier frequency fc is the frequency of the base signal that is modified.

**1. Amplitude Shift Keying (ASK).** The amplitude of the carrier is varied to create signal elements, while frequency and phase remain constant. In **Binary ASK (on-off keying)** one amplitude (e.g. zero) represents 0 and the other represents 1. Bandwidth: **B = (1 + d) × S**, where d (0 to 1) depends on the modulation and filtering. ASK is simple but highly **susceptible to noise**, because noise mostly affects amplitude.

**2. Frequency Shift Keying (FSK).** The frequency of the carrier is varied, while amplitude and phase stay constant. In **Binary FSK** two carriers f₁ and f₂ represent 0 and 1. Bandwidth: **B = (1 + d) × S + 2Δf**, where 2Δf is the difference between the two carrier frequencies. FSK is less affected by noise but uses more bandwidth. Multilevel FSK (MFSK) uses more frequencies.

**3. Phase Shift Keying (PSK).** The phase of the carrier is varied to represent different signal elements. In **BPSK** phase 0° represents 1 and 180° represents 0. **QPSK** uses four phases (45°, 135°, 225°, 315°), so each element carries **2 bits**. PSK is less susceptible to noise than ASK and needs less bandwidth than FSK, so it is widely used. Its bandwidth is the same as ASK. A **constellation diagram** shows each signal element as a point: its distance from the origin is the amplitude and its angle is the phase.

**4. Quadrature Amplitude Modulation (QAM).** QAM combines ASK and PSK, using two carriers (in-phase and quadrature). By varying both amplitude and phase, many signal elements are possible: **4-QAM** (same as QPSK), **8-QAM**, **16-QAM** (4 bits per element), **64-QAM** (6 bits), **256-QAM** (8 bits). It is used in ADSL, cable modems and Wi-Fi.

**Comparison.**

| Technique | What changes | Bits per element (basic) | Noise immunity | Bandwidth |
|---|---|---|---|---|
| ASK | Amplitude | 1 | Poor | (1+d)S |
| FSK | Frequency | 1 | Good | (1+d)S + 2Δf (largest) |
| PSK / QPSK | Phase | 1 / 2 | Good | (1+d)S |
| QAM | Amplitude and phase | 2–8 or more | Moderate to good | (1+d)S (most efficient) |

**Worked examples.**

- 4 bits per element, 1000 elements/s → N = S × r = 1000 × 4 = **4000 bps**.
- N = 8000 bps, 1000 baud → r = 8, L = 2⁸ = **256 signal elements**.
- ASK with available bandwidth 100 kHz (200–300 kHz), d = 1 → S = B / (1 + d) = 100 / 2 = **50 kbaud**, so N = **50 kbps** with fc = 250 kHz.
- FSK in the same band with 2Δf = 50 kHz, d = 1 → 100 = 2S + 50 → S = **25 kbaud**, N = **25 kbps**.
- QPSK at 12 Mbps, d = 0 → S = 12 / 2 = 6 Mbaud, B = **6 MHz**.

**How it's asked in exams.** *"Explain ASK, FSK and PSK with suitable diagrams"* (8–12 marks) or *"What is QAM?"* (4 marks), often with a baud-rate calculation. Define modulation and carrier, draw the diagram showing a bit pattern such as 1010 with the ASK, FSK and PSK waveforms below it (and a constellation diagram for QPSK/QAM), explain each technique with its bandwidth formula, add the comparison table, solve any numeric step by step, and conclude that QAM is preferred in modern modems because it carries the most bits per baud in a limited bandwidth.`,
  },

  "Modulation of Analog Signal": {
    selfTest: [
      "Name the three analog-to-analog modulation techniques.",
      "An audio signal has a bandwidth of 4 kHz. What bandwidth is needed if it is sent using AM?",
      "Why are FM radio stations allocated 200 kHz each while AM stations get only 10 kHz?",
    ],
    body: `**Definition.** **Analog-to-analog conversion (analog modulation)** is the representation of analog information by an analog signal. The information (the *modulating* or baseband signal, such as voice or music) changes a characteristic of a high-frequency **carrier**. It is needed when the medium is band-pass or when only a specific band is available, as in radio broadcasting, where each station must be shifted to its own frequency band. It can be done in three ways: **AM, FM and PM**.

**1. Amplitude Modulation (AM).** The carrier is modulated so that its **amplitude varies with the changing amplitude of the modulating signal**; frequency and phase remain the same. The modulating signal becomes an *envelope* around the carrier. A simple multiplier multiplies the carrier by the modulating signal.

- Bandwidth: **B(AM) = 2B**, where B is the bandwidth of the modulating signal (two sidebands).
- AM radio: the audio bandwidth is about 5 kHz, so each station needs 10 kHz. AM stations are allowed carrier frequencies between **530 and 1700 kHz** (medium wave), separated by 10 kHz.

**2. Frequency Modulation (FM).** The **frequency of the carrier** is modulated to follow the changing voltage level (amplitude) of the modulating signal; peak amplitude and phase stay constant. FM is implemented with a voltage-controlled oscillator (VCO).

- Bandwidth: **B(FM) = 2(1 + β)B**, where β is a factor depending on the modulation technique, commonly 4.
- FM radio: stereo audio needs about 15 kHz, so 2 × (1 + 4) × 15 = 150 kHz; each station is allocated **200 kHz** in the band **88–108 MHz**. There can be 100 channels, but only alternate ones are used, to prevent interference.
- FM is much less affected by noise than AM, because noise mostly changes amplitude, which the FM receiver ignores.

**3. Phase Modulation (PM).** The **phase of the carrier** is modulated to follow the changing voltage level of the modulating signal; peak amplitude and frequency stay constant. In PM the instantaneous phase change is proportional to the amplitude of the modulating signal, whereas in FM the frequency change is proportional to it. PM can be produced with an FM circuit by first differentiating the modulating signal.

- Bandwidth: **B(PM) = 2(1 + β)B**, but β is lower in PM (around 1 for narrowband, 3 for wideband).
- Used in some systems as an alternative to FM because it is simpler in hardware.

**Comparison.**

| Basis | AM | FM | PM |
|---|---|---|---|
| Carrier characteristic changed | Amplitude | Frequency | Phase |
| Bandwidth | 2B | 2(1+β)B, β ≈ 4 | 2(1+β)B, β ≈ 1–3 |
| Noise immunity | Poor | Very good | Good |
| Sound quality | Lower | High (used for music) | Good |
| Typical use | Medium-wave AM radio (530–1700 kHz) | FM radio (88–108 MHz), TV sound | Some mobile and data systems |

**Example.** A voice signal with bandwidth 4 kHz: sent by AM it needs 2 × 4 = **8 kHz**. Sent by FM with β = 4, it needs 2 × (1 + 4) × 4 = **40 kHz**. This shows that FM gives better quality and noise immunity at the cost of five times more bandwidth.

**How it's asked in exams.** *"Explain AM, FM and PM"* or *"Differentiate between AM and FM"* (6–8 marks). Define analog modulation and why it is needed, draw the diagram showing the modulating signal, the carrier and the resulting AM, FM and PM waveforms one below the other, explain each technique with its bandwidth formula and a real broadcast example, add the comparison table, and conclude that FM is preferred for high-quality audio while AM is used where bandwidth is scarce.`,
  },

  "FDM, WDM, TDM": {
    selfTest: [
      "Five channels, each of 100 kHz, are multiplexed using FDM with 10 kHz guard bands. What is the minimum link bandwidth?",
      "How is the T-1 line rate of 1.544 Mbps obtained?",
      "Differentiate between synchronous and statistical TDM.",
    ],
    body: `**Definition.** **Multiplexing** is the set of techniques that allows the simultaneous transmission of multiple signals across a single data link. When the bandwidth of a link is greater than the needs of the devices connected to it, the link is shared. A **multiplexer (MUX)** combines n input lines into one stream (many-to-one), and a **demultiplexer (DEMUX)** separates the stream back into its components (one-to-many) and directs them to their lines. The link is the physical path; a **channel** is the portion of the link carrying one transmission. The three basic techniques are **FDM, WDM and TDM**.

**1. Frequency-Division Multiplexing (FDM).** An **analog** technique used when the bandwidth of the link (in hertz) is greater than the combined bandwidths of the signals. Each signal modulates a different **carrier frequency**, and the modulated signals are combined into one composite signal. The channels are separated by unused strips of bandwidth called **guard bands** to prevent overlap. At the receiver, band-pass filters separate the signals and each is demodulated.

- Uses: AM and FM radio broadcasting, television broadcasting, first-generation (AMPS) cellular phones.
- **Analog hierarchy** (telephone companies): 12 voice channels → **group** (48 kHz); 5 groups → **supergroup** (60 channels, 240 kHz); 10 supergroups → **master group** (600 channels, 2.52 MHz); 6 master groups → **jumbo group** (3600 channels, 16.984 MHz).

**2. Wavelength-Division Multiplexing (WDM).** Conceptually the same as FDM but for **optical signals** in fibre optic cable, at very high frequencies. Narrow bands of light of different wavelengths from different sources are combined by a **prism or diffraction grating** (MUX) and separated at the receiver by another prism (DEMUX). **Dense WDM (DWDM)** places channels very close together to carry dozens of wavelengths, giving hundreds of Gbps on one fibre. It is used in SONET backbones.

**3. Time-Division Multiplexing (TDM).** A **digital** technique in which the high data rate of the link is shared in **time**. Each connection occupies a portion of time (a **time slot**) in the link; one slot from each input forms a **frame**. Digital data or analog data converted to digital can be multiplexed.

- **Synchronous TDM** – each input has a **fixed, pre-assigned slot** in every frame, even if it has nothing to send (wasted slots). If each input slot lasts T seconds, the output slot lasts T/n and the link rate is n times the input rate. Techniques: **interleaving** (the MUX takes one unit from each input in turn), **framing bits** for synchronization, empty slots, multilevel multiplexing, pulse stuffing.
- **Statistical TDM** – slots are **dynamically allocated** only to inputs that have data, so the frame has fewer slots than inputs; each slot must carry an **address** to identify the destination. Bandwidth is used more efficiently.
- **Digital hierarchy:** DS-0 = 64 kbps; DS-1 = 24 DS-0 = 1.544 Mbps; DS-2 = 96 channels = 6.312 Mbps; DS-3 = 672 channels = 44.736 Mbps; DS-4 = 4032 channels = 274.176 Mbps. The European **E-1** line (used in Nepal) carries 32 channels × 64 kbps = **2.048 Mbps**.

**Comparison.**

| Basis | FDM | WDM | TDM |
|---|---|---|---|
| Signal type | Analog | Analog (optical light) | Digital |
| Shared resource | Frequency (bandwidth) | Wavelength of light | Time |
| Medium | Coaxial, radio, twisted pair | Fibre optic | Any high-rate digital link |
| Separation | Guard bands | Different wavelengths | Time slots (and framing bits) |
| Hardware | Modulators, filters | Prism / diffraction grating | Electronic switch (commutator) |
| Example | Radio, TV broadcast | DWDM backbones, SONET | T-1/E-1 lines, GSM |

**Worked examples.**

- *FDM:* 5 channels × 100 kHz, guard band 10 kHz → there are 4 guard bands between 5 channels → 5 × 100 + 4 × 10 = **540 kHz** minimum.
- *T-1:* each frame has 24 slots × 8 bits = 192 bits + 1 framing bit = 193 bits; 8000 frames per second → 193 × 8000 = **1.544 Mbps**.
- *Synchronous TDM:* 4 inputs of 1 kbps, 1 bit per slot → frame rate 1000 frames/s, frame duration 1 ms, each output slot 0.25 ms, link rate **4 kbps**.

**How it's asked in exams.** *"What is multiplexing? Explain FDM and TDM with diagrams"* (8–12 marks), *"Differentiate between synchronous and statistical TDM"* or a short note on WDM (4 marks), often with a guard-band or T-1 calculation. Define multiplexing with MUX/DEMUX, draw the diagram showing n inputs entering a MUX, a single shared link, and a DEMUX (for FDM show the frequency bands with guard bands; for TDM show frames with slots A B C), explain each technique, include the comparison table and a numeric, and conclude that multiplexing makes efficient use of expensive high-bandwidth links.`,
  },

  "Guided Media, Unguided Media": {
    selfTest: [
      "Why are the two wires in a twisted-pair cable twisted?",
      "Name the three propagation modes of light in fibre optic cable.",
      "Give the frequency ranges of radio waves, microwaves and infrared.",
    ],
    body: `**Definition.** A **transmission medium** is anything that can carry information from a source to a destination; in data communication it is usually free space, metallic cable or fibre optic cable, and it lies below the physical layer. Media are classified as **guided (wired)**, which provide a conduit from one device to another, and **unguided (wireless)**, which transport electromagnetic waves without a physical conductor.

**Guided media.**

1. **Twisted-pair cable** – two insulated copper conductors twisted together; one carries the signal and the other is the ground reference. **Twisting** ensures both wires are equally affected by noise and crosstalk, so the receiver, which uses the difference between them, cancels the unwanted signals. Types: **UTP** (unshielded, common in LANs) and **STP** (shielded with metal foil, better noise protection, costlier). Categories: Cat 5 (100 Mbps), Cat 5e (up to 1 Gbps), Cat 6 (1 Gbps, 10 Gbps over short runs). Connector: **RJ-45**. Uses: telephone lines, DSL, Ethernet LANs (10Base-T, 100Base-TX).
2. **Coaxial cable** – a central copper core in an insulating sheath, surrounded by an outer conductor of metal foil or braid, an insulator, and a plastic cover. It carries higher frequencies than twisted pair. Categories: **RG-59** (75 Ω, cable TV), **RG-58** (50 Ω, thin Ethernet), **RG-11** (50 Ω, thick Ethernet). Connector: **BNC**. Uses: cable TV networks, older Ethernet.
3. **Fibre optic cable** – made of glass or plastic, it carries signals as **light**. A dense glass **core** is surrounded by a less dense **cladding**, so light striking the boundary at more than the critical angle is **totally reflected** and stays in the core. Propagation modes: **multimode step-index** (sudden density change, much distortion), **multimode graded-index** (density decreases gradually, less distortion) and **single-mode** (very narrow core, one ray, least distortion, long distances). Connectors: SC, ST, MT-RJ. Advantages: very high bandwidth, low attenuation, immunity to electromagnetic interference, light weight, resistance to corrosion, security. Disadvantages: installation and maintenance need expertise, unidirectional light propagation, higher cost.

**Unguided media.** Signals are broadcast through free space and are available to anyone with a suitable receiver. Wireless uses the spectrum from about 3 kHz to 900 THz. Propagation can be **ground** (below 2 MHz, following the Earth's curve), **sky** (reflected from the ionosphere, long distance) or **line-of-sight** (very high frequencies, antennas must face each other).

1. **Radio waves (3 kHz – 1 GHz)** – mostly **omnidirectional**, can travel long distances, low and medium frequencies penetrate walls. Susceptible to interference. Uses: AM/FM radio, television, paging, multicast communication.
2. **Microwaves (1 – 300 GHz)** – **unidirectional**, line-of-sight; towers must be in direct sight; very high frequencies cannot penetrate walls. Use parabolic dish and horn antennas. Uses: cellular phones, satellite networks, wireless LANs, point-to-point links between towers.
3. **Infrared (300 GHz – 400 THz)** – short-range communication; cannot penetrate walls, which prevents interference between rooms; cannot be used outdoors because of sunlight. Uses: TV remote controls, IrDA links between keyboard, mouse and PC.

**Guided versus unguided.**

| Basis | Guided media | Unguided media |
|---|---|---|
| Path | Physical conductor (wire, fibre) | Free space (air, vacuum, water) |
| Also called | Wired, bounded | Wireless, unbounded |
| Direction | Signal confined to the cable | Broadcast or directional through air |
| Security | More secure; tapping needs physical access | Less secure; anyone in range can receive |
| Installation | Cabling needed; hard to move | Easy, supports mobility |
| Interference | Less, especially for fibre | More (weather, obstacles, other signals) |
| Examples | Twisted pair, coaxial, fibre optic | Radio waves, microwaves, infrared, satellite |

**Example.** A college in Kathmandu uses UTP Cat 6 with RJ-45 connectors inside its computer lab, single-mode fibre from Nepal Telecom to reach its ISP, Wi-Fi (microwave band, 2.4/5 GHz) for students' phones, and infrared for the projector remote control.

**How it's asked in exams.** *"Explain the different types of guided media"* (8 marks), *"Write short notes on fibre optic cable"* (4 marks), or *"Differentiate between guided and unguided media"* (6 marks). Define transmission medium, draw the diagram showing the cross-sections of twisted-pair, coaxial (core, insulator, outer conductor, cover) and fibre (core and cladding with light reflecting), explain each medium with structure, types, connectors, advantages and uses, then the three wireless bands with frequency ranges, add the comparison table, and conclude that fibre is best for backbones while wireless is preferred for mobility.`,
  },

  "Circuit Switching, Telephone Networks": {
    selfTest: [
      "Name the three phases of communication in a circuit-switched network.",
      "How many crosspoints are needed in a single-stage crossbar switch with 1000 inputs and 1000 outputs?",
      "Name the three main components of the traditional telephone network.",
    ],
    body: `**Definition.** **Switching** is the technique used to connect many devices without a dedicated link between every pair; *switches* create temporary connections. There are three methods: **circuit switching, packet switching** (datagram and virtual circuit) and **message switching**. A **circuit-switched network** consists of a set of switches connected by physical links, in which a **dedicated path** (made of one channel on each link) is reserved between the two end systems for the whole duration of the communication. Each link is normally divided into n channels using FDM or TDM. Circuit switching takes place at the **physical layer**.

**Three phases.**

1. **Setup phase** – before data is sent, a dedicated circuit is established. The source sends a request to the nearest switch, each switch reserves a channel and forwards the request, and the destination returns an acknowledgment. End-to-end addressing is used here.
2. **Data transfer phase** – after the circuit is established, data flows continuously over the reserved path; no addressing is needed and switches do not need to store data.
3. **Teardown phase** – when one party finishes, a signal is sent to release the resources.

**Characteristics.** Resources are reserved for the whole call, so **efficiency is low** (the channel stays idle during silences), but once set up, delay is minimal and constant, with no waiting at each switch. Total delay = setup time + propagation time + data transfer time + teardown time.

**Switch structure.** A **space-division switch** separates paths in space. A **crossbar switch** connects n inputs to m outputs using n × m microswitches (crosspoints); **multistage switches** reduce the number of crosspoints at the risk of **blocking**. A **time-division switch** uses a **Time-Slot Interchange (TSI)** with RAM to reorder time slots. Real switches often combine both (TST switches).

**Telephone network.** The telephone network began in the late 1800s as an analog circuit-switched system; today it is digital. Major components:

- **Local loops** – twisted-pair cable connecting the subscriber's phone to the nearest **end office** (local central office); voice bandwidth 4 kHz.
- **Trunks** – high-capacity transmission media (fibre, satellite) connecting switching offices, carrying hundreds or thousands of connections through multiplexing.
- **Switching offices** – arranged in levels: end offices, **tandem offices** and **regional offices**.

The US system is divided into **LATAs** (Local Access Transport Areas), with intra-LATA service by local carriers and inter-LATA service by long-distance carriers through a **Point of Presence (POP)**. **Signaling**, once in-band (on the voice circuit), is now **out-of-band** using the **SS7 (Signaling System Seven)** network, a packet-switched network that handles dialling, busy tones, caller ID, billing and so on. Services include analog services (toll-free 800 numbers, 900 numbers), digital services (switched/56, DDS) and data transfer via **dial-up modems**: V.32 (9.6 kbps), V.32bis (14.4 kbps), V.34bis (33.6 kbps), and **V.90** (56 kbps downstream, 33.6 kbps upstream, because only the upstream direction suffers quantization noise).

**Circuit switching versus packet switching.**

| Basis | Circuit switching | Packet switching (datagram) |
|---|---|---|
| Path | Dedicated path reserved end to end | No dedicated path; each packet routed independently |
| Setup / teardown | Required | Not required |
| Resource use | Reserved for whole call; wasteful | Allocated on demand; efficient |
| Delay | Low and constant after setup | Variable (queuing at each router) |
| Order of data | Always in order | Packets may arrive out of order |
| Layer | Physical | Network |
| Example | Traditional telephone call | The Internet (IP) |

**Example.** When a subscriber in Pokhara calls Kathmandu, the local loop carries the voice to the end office; the switch uses SS7 to set up a path through tandem offices and a fibre trunk; a 64 kbps TDM slot is reserved on every link for the whole call, even during silence; hanging up tears the circuit down. For switch size: a single-stage crossbar with 1000 inputs and 1000 outputs needs 1000 × 1000 = **1,000,000 crosspoints**, and since only about 25% are used at a time, multistage switches are preferred.

**How it's asked in exams.** *"What is circuit switching? Explain its phases"* or *"Differentiate between circuit switching and packet switching"* (6–8 marks), and *"Explain the structure of the telephone network"* (6–8 marks). Define switching and circuit switching, draw the diagram showing end systems connected through switches with a highlighted reserved path, and for the telephone network show local loops to end offices, trunks linking tandem and regional offices; explain the three phases, give the comparison table, and conclude that circuit switching suits continuous real-time voice while packet switching suits bursty data.`,
  },

  "DSL Technology, Cable Modem, SONET": {
    selfTest: [
      "Why is ADSL called asymmetric, and which modulation technique does it use?",
      "In an HFC cable network, which frequency bands are used for upstream and downstream data?",
      "How is the STS-1 data rate of 51.84 Mbps calculated?",
    ],
    body: `**Definition.** These are three high-speed technologies. **DSL (Digital Subscriber Line)** provides high-speed Internet access over the **existing telephone local loop** (twisted pair). A **cable modem** provides Internet access over the **cable TV network**. **SONET (Synchronous Optical Network)** is a high-speed **fibre optic** WAN standard used as the backbone that carries these and other traffic.

**1. DSL technology.** A twisted-pair local loop can carry up to about 1.1 MHz, but the filter at the end office limits it to 4 kHz for voice. DSL removes this filter for data. **ADSL (Asymmetric DSL)** gives a higher rate **downstream** (Internet to user) than **upstream**, because home users mostly download. It is an **adaptive** technology: the data rate depends on the loop length and line condition.

- **Modulation:** ADSL uses **DMT (Discrete Multitone)**, which combines QAM and FDM. The 1.104 MHz bandwidth is divided into **256 channels of 4.312 kHz**: channel 0 for voice, channels 1–5 idle (guard between voice and data), channels **6–30 upstream** (25 channels: 24 data + 1 control) and channels **31–255 downstream** (225 channels: 224 data + 1 control).
- **Rates:** theoretically 24 × 4000 × 15 bits = **1.44 Mbps upstream** and 224 × 4000 × 15 = **13.4 Mbps downstream**; in practice about 64 kbps–1 Mbps up and 500 kbps–8 Mbps down.
- **Equipment:** at the customer, a **splitter** (filter separating voice and data) and an **ADSL modem**; at the telephone office, a **DSLAM** (DSL Access Multiplexer) that packetizes the data for the Internet.
- **Other DSL types:** **ADSL Lite** (up to 1.5 Mbps down, 512 kbps up, no splitter), **HDSL** (T-1 replacement, 1.544 Mbps using 2B1Q), **SDSL** (symmetric, 768 kbps both ways), **VDSL** (very high rate, 25–55 Mbps downstream over short distances).

**2. Cable modem.** Traditional cable TV was a one-way coaxial network with amplifiers. The **HFC (Hybrid Fibre-Coaxial)** network uses fibre from the cable TV office (**regional cable head**) to **distribution hubs** and **fibre nodes**, then coaxial cable to each home (a node serves up to about 1000 subscribers), making two-way communication possible. The coaxial bandwidth (5–750 MHz) is divided into:

| Band | Frequency | Use |
|---|---|---|
| Upstream data | 5–42 MHz | QPSK, 2 bits/baud, theoretically 12 Mbps |
| Video | 54–550 MHz | TV channels of 6 MHz each (over 80 channels) |
| Downstream data | 550–750 MHz | 64-QAM in 6 MHz channels, theoretically 30 Mbps |

Bandwidth is **shared**: upstream channels are time-shared among subscribers, and downstream traffic is broadcast to all but addressed to one. Devices: the **CM (cable modem)** at the subscriber's home and the **CMTS (cable modem transmission system)** at the distribution hub. The standard is **DOCSIS**.

**3. SONET.** Developed by **ANSI**; the equivalent ITU-T standard is **SDH (Synchronous Digital Hierarchy)**. It uses **synchronous TDM** with a master clock, so all devices are synchronized.

- **Devices:** STS multiplexer/demultiplexer (converts electrical to optical and multiplexes), **regenerator** (repeater), **add/drop multiplexer** (adds or removes signals without demultiplexing everything), and terminals.
- **Layers:** **path** (source to destination), **line** (between multiplexers), **section** (between any two devices, including regenerators) and **photonic** (corresponds to the physical layer).
- **Frame:** an STS-1 frame is **9 rows × 90 columns = 810 bytes**, sent every 125 μs (**8000 frames per second**). The first 3 columns are section and line overhead; the remaining 87 columns form the SPE (Synchronous Payload Envelope).
- **Rates:** STS-1/OC-1 = 51.84 Mbps; STS-3/OC-3 = 155.52 Mbps (= SDH STM-1); STS-12/OC-12 = 622.08 Mbps (STM-4); STS-48/OC-48 = 2488.32 Mbps (STM-16); STS-192/OC-192 = 9953.28 Mbps (STM-64).

**Comparison.**

| Basis | DSL (ADSL) | Cable modem | SONET |
|---|---|---|---|
| Medium | Telephone twisted pair | HFC (fibre + coaxial) | Fibre optic |
| Users | Individual homes/offices | Individual homes | Carriers' backbone |
| Bandwidth | Dedicated local loop | Shared among neighbours | Very high, multiplexed |
| Typical rate | Up to about 8 Mbps down | Up to about 30 Mbps down per channel | 51.84 Mbps to about 10 Gbps |
| Key technique | DMT (QAM + FDM) | QPSK up, 64-QAM down | Synchronous TDM |

**Example.** STS-1 rate = 9 × 90 bytes × 8 bits × 8000 frames/s = **51.84 Mbps**; STS-3 is exactly 3 × 51.84 = 155.52 Mbps, showing that higher SONET rates are exact multiples. Nepal Telecom's ADSL service used the existing phone line to give a home user a few Mbps down while the phone could still be used, because voice sits in channel 0 and data in channels 6–255.

**How it's asked in exams.** Short notes are the most common: *"Write short notes on ADSL / cable modem / SONET"* (4–5 marks each), or *"Explain DSL technology"* (6–8 marks). Define the technology, draw the diagram showing (for ADSL) the phone and computer, splitter, local loop and DSLAM; (for cable) the HFC chain from head end through fibre node to coax homes; (for SONET) STS MUX → regenerator → add/drop MUX → regenerator → STS DEMUX with section, line and path spans; explain the bandwidth division or frame and rates, and conclude with the main advantage (reuse of existing wiring for DSL and cable, very high synchronized capacity for SONET).`,
  },
};
