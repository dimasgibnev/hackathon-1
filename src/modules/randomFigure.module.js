import { Module } from '../core/module'

export class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        const shape = this.render();
        document.body.appendChild(shape);
    }

    render() {
        const shapes = ['circle', 'square', 'triangle'];
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

        const shape = document.createElement('div');
        shape.className = `shape ${randomShape}`;
        shape.style.width = '100px';
        shape.style.height = '100px';
        shape.style.background = 'red';

        if (randomShape === 'circle') {
            shape.style.borderRadius = '50%';
        } else if (randomShape === 'triangle') {
            shape.style.width = '0';
            shape.style.height = '0';
            shape.style.borderLeft = '50px solid transparent';
            shape.style.borderRight = '50px solid transparent';
            shape.style.borderBottom = '100px solid red';
        }

        return shape;
    }

    toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
    }
}
