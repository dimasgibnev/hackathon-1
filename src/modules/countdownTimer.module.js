import { Module } from '../core/module'

export class TimerModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.timer = null;
    }

    trigger() {
        const time = prompt("Введите время в секундах");
        if (time) {
            this.timer = this.render(time);
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

    render(time) {
        const timer = document.createElement('div');
        timer.style.position = 'fixed';
        timer.style.bottom = '10px';
        timer.style.right = '10px';
        timer.style.padding = '10px';
        timer.style.background = 'lightgray';
        timer.textContent = time + ' секунд';
        return timer;
    }

    toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
    }
}
