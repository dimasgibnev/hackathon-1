import { Menu } from './core/menu';
import { ClicksModule } from './modules/clicks.module';
import { TimerModule } from './modules/countdownTimer.module';

export class ContextMenu extends Menu {
    
    constructor(selector) {
        super(selector);
        this.menu = document.querySelector(selector);
<<<<<<< HEAD
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
=======
        this.modules = [new ClicksModule('clicks', 'Считать клики(за 3 секунды)')];

        document.body.addEventListener('click', event => {
            if (event.target.offsetParent !== this.el) {
              this.close()
            }
          })
        
        this.menu.addEventListener('click', (event) => {
            if (event.target) {
                this.modules[0].trigger();
>>>>>>> cff3d992bf7f8ca86420fbb8a6d34b0a7f90c0bc
                this.close()
            }
        })
    }

    add(module) {
        this.menu.insertAdjacentHTML('afterbegin', (module.toHTML()));
    }

    open() {
        if (this.menu.childNodes.length) {
            this.menu.classList.add('open');
        }
    }

    run() {
        this.add(this.modules[0]);

        document.body.addEventListener('contextmenu', event => {
            event.preventDefault();
            this.menu.style.left = event.clientX + 'px';
            this.menu.style.top = event.clientY + 'px';
            this.open();
<<<<<<< HEAD
        })
=======

         })
>>>>>>> cff3d992bf7f8ca86420fbb8a6d34b0a7f90c0bc
    }

    close() {
        this.menu.classList.remove('open');
    }

}
