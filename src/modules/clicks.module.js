import {Module} from '../core/module'

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.count = 0;
    }

    trigger() {
        

        document.body.addEventListener('click', this.countClick);

        setTimeout(() => {
            alert(`Количество кликов за 3 секунды: ${this.count - 1}`);
            this.count = 0;
            const module = document.querySelector('.clicks-container')
            module.remove();
            document.body.removeEventListener('click', this.countClick);
        }, 3000)
      }

    countClick = (event) => {
        if (event.type === 'click') {
            this.count += 1;
            const clickModule = this.render(this.count);
            const module = document.querySelector('.clicks-container');
            if (!document.body.contains(clickModule)) {
                document.body.append(clickModule);
                module.remove();

            }
        }}
    render(count) {
        const container = document.createElement('div');
        container.className = 'clicks-container';

        const clicks = document.createElement('span');
        clicks.className = 'clicks-amount';
        clicks.textContent = `Кликов: ${count - 1}`;

        container.append(clicks);
        
        return container;
    }


    
      toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
      }
}