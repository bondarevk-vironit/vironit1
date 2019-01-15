import eventEmmitter from '../eventEmmitter/EventEmitterSingleton'
import generateRandomSec from '../others/generateRandomSec'

export default class ATM {
    constructor (id, parent) {
        this.id = id;
        this.parent = parent;
       this.count = 0;
       this.state = 'free';
        eventEmmitter.on('personEntred', () => {
            console.log('persoEntred')
            this.startServise();
        })
}
startServise () {
       this.state = 'busy';
       this.serviceIn();
}
serviceIn () {
        setTimeout(() => {
            this.state = 'free';
            this.serviseOut();
        }, generateRandomSec(1, 3))
}
serviseOut () {
        setTimeout(() => {
            eventEmmitter.emit('AtmIsFree');
            //
            // this.startServise();
        }, 1000)
}

init() {
        eventEmmitter.emit('AtmRender', this.id, this.parent, this.count);
        eventEmmitter.emit('AtmIsFree');
        this.startServise();
}

}