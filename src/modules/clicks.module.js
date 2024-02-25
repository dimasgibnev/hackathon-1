import { Module } from '../core/module'

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.count = 0;
        this.dblclick = 0;
    }

    trigger() {
        document.body.addEventListener('click', this.countClick);
        document.body.addEventListener('dblclick', this.countDblClick);

        setTimeout(() => {       
            document.body.append(this.addStatistic(this.count, this.dblclick));
            const statisticModule = document.querySelector('.clicks-amount__statistic');
            const closeBtn = document.querySelector('.clicks-amount__close-button');
            
            closeBtn.addEventListener('click', () => {
                statisticModule.remove();
            });
            document.body.addEventListener('contextmenu', event => {
                event.preventDefault();
                statisticModule.remove();
            })

            this.count = 0;
            this.dblclick = 0;
            const module = document.querySelector('.clicks-container')
            module.remove();
            document.body.removeEventListener('click', this.countClick);
            document.body.removeEventListener('dblclick', this.countDblClick);
        }, 3000)
    }

    countClick = (event) => {
        const clickModule = this.render(this.count);
        const module = document.querySelector('.clicks-container');
        this.count += 1;
        
        if (!document.body.contains(clickModule)) {
            document.body.append(clickModule);
            if (module) {
                module.remove();
            }
        }

    }

    countDblClick = (event) => {
        if (event.detail === 2) {
            this.dblclick += 1;
        }
    }

    render(count) {
        const container = document.createElement('div');
        container.className = 'clicks-container';
        container.style.left = 10 + event.clientX + 'px';
        container.style.top = event.clientY + 'px';

        const clicks = document.createElement('span');
        clicks.className = 'clicks-amount';
        clicks.textContent = `Кликов: ${count}`;

        container.append(clicks);

        return container;
    }

    addStatistic(count, dblclick) {
            const container = document.createElement('div');
            container.className = 'clicks-amount__statistic';
    
            const clicks = document.createElement('span');
            clicks.className = 'clicks-amount';
            clicks.insertAdjacentHTML('afterbegin', `Всего кликов: ${count - 1}
                                                    <br/>
                                                    Дабл кликов: ${dblclick}`);
    
            const closeBtn = document.createElement('div');
            closeBtn.className = 'clicks-amount__close-button';
    
            container.append(clicks, closeBtn);
    
            return container;
    }

    toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
    }
}