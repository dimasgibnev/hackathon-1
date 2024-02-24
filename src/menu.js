import {Menu} from './core/menu';
import { ClicksModule } from './modules/clicks.module';

export class ContextMenu extends Menu {

    constructor(selector) {
        super(selector);
        this.menu = document.querySelector(selector);
        this.modules = [new ClicksModule('clicks', 'Считать клики(за 3 секунды)')];
        document.body.addEventListener('click', event => {
            if (event.target.offsetParent !== this.el) {
              this.close()
              document.querySelectorAll('h1').forEach(h => h.remove())
            } else if (event.target) {
                this.modules[0].trigger();
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
            this.add(this.modules[0])
         })
    }

    close() {
        this.menu.classList.remove('open');
    }
  
}