type ChimeKind = "workEnd" | "breakEnd";

let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const AudioContextCtor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextCtor) return null;
  if (!audioContext) audioContext = new AudioContextCtor();
  return audioContext;
}

function beep(ctx: AudioContext, frequency: number, startTime: number, duration: number) {
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(0.2, startTime + 0.02);
  gain.gain.linearRampToValueAtTime(0, startTime + duration);
  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration);
}

export function playChime(kind: ChimeKind): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  // Work-end: a brighter two-note rising chime. Break-end: a single softer tone.
  if (kind === "workEnd") {
    beep(ctx, 880, now, 0.15);
    beep(ctx, 1175, now + 0.18, 0.2);
  } else {
    beep(ctx, 660, now, 0.25);
  }
}
