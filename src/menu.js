import { Menu } from './core/menu';
import { ClicksModule } from './modules/clicks.module';
import { TimerModule } from './modules/countdownTimer.module';

export class ContextMenu extends Menu {

    constructor(selector) {
        super(selector);
        this.menu = document.querySelector(selector);
        this.modules = [new ClicksModule('clicks', 'Считать клики(за 3 секунды)'), new TimerModule('timer', 'Таймер')];
        this.modules.forEach(module => this.add(module));
        document.body.addEventListener('click', event => {
            if (event.target.offsetParent !== this.el) {
                this.close()
                document.querySelectorAll('h1').forEach(h => h.remove())
            } else if (event.target) {
                const moduleType = event.target.dataset.type;                 
                const module = this.modules.find(m => m.type === moduleType);  
                if (module) {                                                 
                    module.trigger();                                         
                }                                                               
                this.close()                                                    
            }
        })
    }

    add(module) {
        this.modules.push(module);
        this.menu.insertAdjacentHTML('afterbegin', (module.toHTML()));
    }

    open() {
        if (this.menu.childNodes.length) {
            this.menu.classList.add('open');
        }
    }

    run() {
        document.body.addEventListener('contextmenu', event => {
            event.preventDefault();
            this.menu.style.left = event.clientX + 'px';
            this.menu.style.top = event.clientY + 'px';
            this.open();
        })
    }

    close() {
        this.menu.classList.remove('open');
    }

}