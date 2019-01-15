import eventEmmitter from '../eventEmmitter/EventEmitterSingleton'
import generateRandomSec from '../others/generateRandomSec'

export default class Queue {
    constructor(parent) {
        this.parent = parent;
        this.count = 0;
        eventEmmitter.on('AtmIsFree', () => {
                this.movePerson();
                console.log('atmIsFree')
        } );
    }
    addPerson () {
        this.count++;
        console.log(this.count)
    }

    movePerson () {
        if(this.count > 0) {
            // setTimeout(() => {
                this.count -= 1;
                eventEmmitter.emit('personEntred');
            // }, 1000)

        } else {

        }

    }

    startAddPerson () {

        setInterval( () => {
            this.addPerson();
        }, generateRandomSec(2, 4))
    }

    init() {
        eventEmmitter.emit('QueueRender', this.parent, this.count);
        this.startAddPerson();
    }

}

