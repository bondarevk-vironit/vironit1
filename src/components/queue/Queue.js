import eventEmmitter from '../eventEmmitter/EventEmitterSingleton'
import generateRandomSec from '../others/generateRandomSec'

export default class Queue {
    constructor(parent) {
        this.parent = parent;
        this.count = 0;
        eventEmmitter.on('AtmIsFree', () => {
                this.movePerson();
                // console.log('in emit AtmIsFree')
        } );
    }

    movePerson () {
        if(this.count > 0) {
            setTimeout(() => {
                this.count -= 1;
                eventEmmitter.emit('QueueUpdate', this.parent, this.count);
                // console.log('emit continueWorking')
                eventEmmitter.emit('continueWorking');
            }, 1000)

        }
        if(this.count === 0){
            return 0;
        }

    }
    addPerson () {
        this.count++;
        eventEmmitter.emit('QueueUpdate', this.parent, this.count);
        // console.log(this.count)
    }

    startAddPerson () {
        setInterval( () => {
            this.addPerson();
            if(this.count === 1) {
                // console.log('count >=1')
                eventEmmitter.emit('start');
            }
            if(this.count <=0){
                return;
            }

        }, generateRandomSec(2, 4))
    }

    init() {
        eventEmmitter.emit('QueueRender', this.parent, this.count);
        // console.log('start add person', this.count)
        this.startAddPerson();
    }

}

