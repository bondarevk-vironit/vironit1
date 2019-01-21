import CounterAtmComponent from "./counterAtmComponent";
import eventEmmitter from '../eventEmmitter/EventEmmitter'

export  default class CounterAtm {
    constructor ( id, parent ) {
        this.id = id;
        this.parent = parent;
        this.countAtm = 0;
        this.renderCounterAtm = new CounterAtmComponent(this.id, this.countAtm);
        eventEmmitter.on('addPerson', ( elem) => {
            if(elem.id === this.id) {
                console.log('each count of atm', this.id, this.countAtm)
                console.log('m aloneeeee')
                this.countAtm++;
            }

        })
    }


}