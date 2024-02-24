import {Module} from '../core/module'

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        let count = 0;

        document.body.addEventListener('click', (event) => {
            if (event.type === 'click') {
                count += 1;
                const clickModule = this.render(count);
                const module = document.querySelector('.clicks-container');
                if (!document.body.contains(clickModule)) {
                    document.body.append(clickModule);
                    module.remove();
                }
            }});

        setTimeout(() => {
            alert(`Количество кликов за 3 секунды: ${count}`);
            count = 0;
            const module = document.querySelector('.clicks-container')
            module.remove();
        }, 3000)
      }

    render(count) {
        const container = document.createElement('div');
        container.className = 'clicks-container';

        const clicks = document.createElement('span');
        clicks.className = 'clicks-amount';
        clicks.textContent = `Кликов: ${count}`;

        container.append(clicks);
        
        return container;
    }
    
      toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
      }
}