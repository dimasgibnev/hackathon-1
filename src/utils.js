export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function playRandomSound() {
  let waveforms = ["sine", "square", "sawtooth", "triangle"];

  const context = new AudioContext();

  let oscillatorNode = context.createOscillator();
  let gainNode = context.createGain();

  oscillatorNode.type = waveforms[Math.floor(Math.random() * waveforms.length)];

  let frequency = (100 + Math.random() * 10000).toFixed(2);
  oscillatorNode.frequency.value = frequency;

  gainNode.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + .3);
  oscillatorNode.connect(gainNode);
  gainNode.connect(context.destination);
  oscillatorNode.start(0);
}

