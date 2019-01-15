import eventEmmitter from '../eventEmmitter/EventEmitterSingleton'

export default class QueueComponent {
    constructor() {
        eventEmmitter.on('QueueRender', (parent, count) => {
           this.render(parent, count);
        });

    }
    create (count) {
        // console.log(count);
        return `<div class = 'queueContainer'>${count}</div>`
    }
    render (parent, count) {
        parent.innerHTML = this.create(count);

    }
    update () {

    }
}