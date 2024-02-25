import { Module } from '../core/module'

export class SoundModule extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    this.playRandomSound();
  }

  playRandomSound() {
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

  toHTML () {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
  }
}