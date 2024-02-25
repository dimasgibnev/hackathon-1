import { Module } from '../core/module';
import { playRandomSound } from '../utils';

export class SoundModule extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    playRandomSound();
  }

  toHTML () {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
  }
}