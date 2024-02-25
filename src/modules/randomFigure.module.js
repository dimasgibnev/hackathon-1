import { Module } from '../core/module';
import { getRandomColor } from '../utils'; 

export class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text);
        this.currentShape = null;
    }

    trigger() {
        if (this.currentShape) {
            this.currentShape.remove();
        }

        const shapes = ['circle', 'triangle', 'square', 'pentagon', 'hexagon'];
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        this.currentShape = this.render(randomShape);
        document.body.appendChild(this.currentShape);
    }

    render(selectedShape) {
        const randomColor = getRandomColor();

        const shape = document.createElement('div');
        shape.className = `shape ${selectedShape}`;
        shape.style.background = randomColor;

        if (selectedShape === 'triangle') {
            shape.style.borderBottomColor = randomColor;
        }

        return shape;
    }

    toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
    }
}
