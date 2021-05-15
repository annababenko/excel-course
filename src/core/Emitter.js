export class Emitter {
    constructor() {
        this.listeners = {}
    }
    // dispatch, fire, trigger
    // Уведомление слушателей, если они есть
    emit(event, ...args) {
        if (!Array.isArray(this.listeners[event])) {
            return false;
        }
        this.listeners[event].forEach( listener => {
            listener(...args);
            })
        return true;
    }
    // on, listen
    // Подписка на уведомления
    // Добавление нового слушателя
    subscribe(event, fn) {
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(fn);
        return () => {
            this.listeners[event] =
                this.listeners[event].filter(listener => listener !== fn);
        }
    }
}
