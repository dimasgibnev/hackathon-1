import { Module } from '../core/module'

export class TimerModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.timer = null;
    }

    trigger() {
        if (this.timer) {
            this.timer.remove();
        }

        this.timer = this.render();
        document.body.appendChild(this.timer);

        const startButton = this.timer.querySelector('.start-button');
        
        startButton.addEventListener('click', () => {
            const timeInput = this.timer.querySelector('.time-input');
            const timeDisplay = this.timer.querySelector('.time-display');
            let totalSeconds = parseInt(timeInput.value);
            timeInput.remove();
            startButton.remove();

            const countdown = setInterval(() => {
                totalSeconds -= 1;
                const minutes = Math.floor(totalSeconds / 60);
                const seconds = totalSeconds % 60;
                timeDisplay.textContent = `${minutes} m ${seconds} s`;

                if (totalSeconds <= 0) {
                    clearInterval(countdown);
                    timeDisplay.textContent = 'Время вышло!';
                }
            }, 1000);
        });
    }

    render() {
        const timer = document.createElement('div');
        timer.className = 'timerElement';
        timer.innerHTML = `
            <input type="number" class="time-input" placeholder="Введите время в секундах">
            <button class="start-button">Старт</button>
            <p class="time-display"></p>
        `;

        return timer;
    }

    toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
    }
}
