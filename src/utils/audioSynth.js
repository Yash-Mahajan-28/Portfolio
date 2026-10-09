// Web Audio Polyphonic Ambient Synthesizer Engine
let audioCtx = null;

export function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playWarmTone(freq, type = 'triangle', duration = 1.3) {
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Warm analog low-pass filter
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + duration);

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    // Dynamic ADSR envelope
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.22, ctx.currentTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (err) {
    console.warn('Audio playback error:', err);
  }
}

export function playMelodicArpeggio() {
  const sequence = [
    { freq: 261.63, delay: 0 },     // C4
    { freq: 329.63, delay: 0.14 },  // E4
    { freq: 392.00, delay: 0.28 },  // G4
    { freq: 493.88, delay: 0.42 },  // B4
    { freq: 587.33, delay: 0.56 }   // D5
  ];

  sequence.forEach(({ freq, delay }) => {
    setTimeout(() => {
      playWarmTone(freq, 'triangle', 1.2);
    }, delay * 1000);
  });
}
