import eventEmmitter from '../eventEmmitter/EventEmmitter'
import AtmComponent from "./AtmComponent";

export default class ATM {
  constructor (id, parent ) {
    this.id = id;
    this.parent = parent;
    this.isFree = true;
    this.renderAtm = new AtmComponent(this.id, this.parent);
    eventEmmitter.on('deleteAtm', () => {
      this.renderAtm.deleteBtn.deleteAtm(this.id);
    })

  }

  serviseByisFree () {
    if(!this.isFree) {
      // eventEmmitter.emit('updateCounter', this.isFree);
      // eventEmmitter.emit('AtmUpdate', this.id, this.parent, this.count, this.isFree);
      eventEmmitter.emit('atmIsFree', this);
    }
    if(this.isFree){
      // eventEmmitter.emit('updateCounter', this.isFree);
      // eventEmmitter.emit('AtmUpdate', this.id, this.parent, this.count, this.isFree);
      // console.log('startBusy');
      eventEmmitter.emit('atmIsBusy', this);
    }
  }





}

