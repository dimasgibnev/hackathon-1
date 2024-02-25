import { Menu } from './core/menu';
import { ClicksModule } from './modules/clicks.module';
import { TimerModule } from './modules/countdownTimer.module';

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
        this.modules = [new ClicksModule('clicks', 'Считать клики(за 3 секунды)'),
                        new TimerModule('timer', 'Таймер')];
        this.modules.forEach(module => this.add(module));
        const { greetModal, confirmBtn } = this.greetingWindow();

        document.body.addEventListener('click', event => {
            if (event.target == confirmBtn) {
                greetModal.classList.add('greet-modal_hidden');
            }
          });

        this.el.addEventListener('click', (event) => {
            if (event.target) {
                const moduleType = event.target.dataset.type;                 
                const module = this.modules.find(m => m.type === moduleType); 
                this.close()
                if (module) {                                                 
                    module.trigger();                                         
                }
            }
        });

        document.body.addEventListener('contextmenu', event => {
            event.preventDefault();
            this.open(event);
        });
    }

    add(module) {
        this.modules.push(module);
        this.el.insertAdjacentHTML('afterbegin', (module.toHTML()));
    }

    open(event) {
        if (this.el.childNodes.length) {
            this.el.classList.add('open');
            this.el.style.left = event.clientX + 'px';
            this.el.style.top = event.clientY + 'px';
        }
    }

    close() {
        this.el.classList.remove('open');
    }

    greetingWindow() {
        const greetModal = document.createElement('div');
        greetModal.className = 'greet-modal';

        const greetText = document.createElement('p');
        greetText.className = 'greet-modal__text';
        greetText.textContent = `Добро пожаловать на страницу, на которой по щелчку правой кнопкой мыши, 
                                открывается меню, в котором вы можете выбрать функцию на свой вкус. Наслаждайтесь!`

        const confirmBtn = document.createElement('button');
        confirmBtn.className = 'greet-modal__button';
        confirmBtn.textContent = 'Вперёд!';

        greetModal.append(greetText, confirmBtn);
        document.body.prepend(greetModal);

        return {greetModal,confirmBtn};
    }
}
