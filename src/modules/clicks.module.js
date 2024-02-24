import { Module } from '../core/module'

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.count = 0;
    }

    trigger() {
        document.body.addEventListener('click', (event) => {
            if (event.type === 'click') {
                this.count += 1;
            }
        });

        setTimeout(() => {
            alert(this.count)
        }, 3000)
    }

    toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
    }
}