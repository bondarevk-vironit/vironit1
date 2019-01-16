import eventEmmitter from '../eventEmmitter/EventEmitterSingleton'
import generateRandomSec from '../others/generateRandomSec'

export default class ATM {
    constructor (id, parent) {
        this.id = id;
        this.parent = parent;
       this.count = 0;
       this.state = 'free';
        eventEmmitter.on('continueWorking', () => {
            // console.log('continueWorking');
            this.startServise();
        });
        eventEmmitter.on('start', () => {
            //console.log('start emit - f: startServise')
               this.startServise();
        })
}
addPerson () {
        this.count++;
}
startServise () {
        // console.log('in f startServise')
       this.state = 'busy';
    eventEmmitter.emit('AtmUpdate', this.id, this.parent, this.count, this.state);
       this.serviceIn();
}
serviceIn () {
        setTimeout(() => {
            // console.log('f service In')
            this.state = 'free';
            eventEmmitter.emit('AtmUpdate', this.id, this.parent, this.count, this.state);
            this.serviseOut();
        }, generateRandomSec(1, 3))
}
serviseOut () {
        setTimeout(() => {
            this.addPerson();
            eventEmmitter.emit('AtmUpdate', this.id, this.parent, this.count, this.state);
            eventEmmitter.emit('AtmIsFree');
        }, 1000)
}

init() {
        eventEmmitter.emit('AtmRender', this.id, this.parent, this.count, this.state);
}

}