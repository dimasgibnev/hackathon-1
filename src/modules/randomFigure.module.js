import { Module } from '../core/module';

export class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text);
        this.currentShape = null;
    }

    trigger() {
        if (this.currentShape) {
            this.currentShape.remove();
        }

        const shapes = ['circle', 'triangle'];
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        this.currentShape = this.render(randomShape);
        document.body.appendChild(this.currentShape);
    }

    render(selectedShape) {
        const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        const shape = document.createElement('div');
        shape.className = `shape ${selectedShape}`;

        if (selectedShape === 'circle') {
            shape.style.borderRadius = '50%';
            shape.style.width = '100px';
            shape.style.height = '100px';
        } else if (selectedShape === 'triangle') {
            shape.style.width = '0';
            shape.style.height = '0';
            shape.style.borderLeft = '50px solid transparent';
            shape.style.borderRight = '50px solid transparent';
            shape.style.borderBottom = '100px solid ' + randomColor;
        }

        shape.style.background = randomColor;
        shape.style.position = 'absolute';
        shape.style.top = '50%';
        shape.style.left = '50%';
        shape.style.transform = 'translate(-50%, -50%)';
        return shape;
    }

    toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
    }
}
