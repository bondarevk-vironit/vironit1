import eventEmmitter from '../eventEmmitter/EventEmitterSingleton'

export default class AtmComponent {
    constructor () {
        this.atms = {};
        eventEmmitter.on('AtmRender', (id, parent, count) => {
            this.render(id, parent, count);
        });

    }
    create (count, id) {
        return `<div id = ${id} class = 'atm'>
                <div class="counter">${count}</div>
                </div>`
    }
    render (id, parent, count) {
        this.atms[id] = this.create(count, id);

        parent.innerHTML += this.create(count, id);
    }
    update () {

    }

}
