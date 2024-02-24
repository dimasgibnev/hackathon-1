import { Module } from '../core/module'

export class TimerModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.timer = null;
    }

    trigger() {
        const time = prompt("Введите время в миллисекундах");
        if (time) {
            this.timer = document.createElement('div');
            this.timer.style.position = 'fixed';
            this.timer.style.bottom = '10px';
            this.timer.style.right = '10px';
            this.timer.style.padding = '10px';
            this.timer.style.background = 'lightgray';
            this.timer.textContent = time / 1000 + ' секунд';
            document.body.appendChild(this.timer);

            const countdown = setInterval(() => {
                let seconds = parseInt(this.timer.textContent) - 1;
                this.timer.textContent = seconds + ' секунд';
                if (seconds <= 0) {
                    clearInterval(countdown);
                    alert('Время вышло!');
                    this.timer.remove();
                }
            }, 1000);
        }
    }

    toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
    }
}
