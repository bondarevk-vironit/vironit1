import eventEmmitter from '../eventEmmitter/EventEmitterSingleton'

export default class AtmComponent {
    constructor () {
        this.atms = {};
        eventEmmitter.on('AtmRender', (id, parent, count, state) => {
            this.render(id, parent, count, state);
        });
        eventEmmitter.on('AtmUpdate', (id, parent, count, state) => {
             this.update(id, parent, count, state);
        });
    }
    create (count, id, state) {
        return `<div id="${id}" class="atm"><div class="counter" style="background-color: ${state === 'free'? "lightgreen": "red"}">${count}</div></div>`
    }
    render (id, parent, count, state) {

        this.atms[id] = this.create(count, id, state);
        parent.innerHTML += this.create(count, id, state);

        this.atms[id] = this.create(count, id, state);

    }
    update (id, parent, count, state) {
        // console.log('first', this.atms)
        let oldTemplate = this.atms[id];
        let newTemplate = this.create(count, id, state);

        if(parent.innerHTML.indexOf(oldTemplate) + 1){
            parent.innerHTML = parent.innerHTML.replace(oldTemplate,newTemplate)
        }
        this.atms[id] = newTemplate;
    }

}
