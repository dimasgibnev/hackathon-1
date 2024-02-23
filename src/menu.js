import {Menu} from './core/menu';

export class ContextMenu extends Menu {

    constructor(selector) {
        super(selector);
        this.menu = document.querySelector(selector);
    }
    add(module) {
        const liItem = document.createElement('li');
        liItem.className = 'menu-item';
        liItem.textContent = 'Первая функция'
        this.menu.append(liItem);
    }

    open() {
        if (this.menu.childNodes.length) {
            this.menu.classList.add('open');
        }
    }

    openMenu() {
        document.body.addEventListener('contextmenu', event => {
            event.preventDefault();
            this.menu.style.left = event.clientX + 'px';
            this.menu.style.top = event.clientY + 'px';
            this.open();
            this.add()
         })
    }
    close() {
        this.menu.classList.remove('open');
    }
  
}