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
                let totalSeconds = parseInt(this.timer.dataset.time);
                totalSeconds -= 1;
                this.timer.dataset.time = totalSeconds;
                const minutes = Math.floor(totalSeconds / 60);
                const seconds = totalSeconds % 60;
                this.timer.textContent = `${minutes} m ${seconds} s`;
                if (totalSeconds <= 0) {
                    clearInterval(countdown);
                    alert('Время вышло!');
                    this.timer.remove();
                }
            }, 1000);
        }
    }

    render(time) {
        const timer = document.createElement('div');
        timer.className = 'timerElement';
        timer.dataset.time = time;
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timer.textContent = `${minutes} m ${seconds} s`;
        return timer;
    }

    toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
    }
}
