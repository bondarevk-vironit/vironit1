import eventEmmitter from '../eventEmmitter/EventEmmitter'
import generateRandomSec from '../others/generateRandomSec'



export default class ATM {
  constructor (id, parent) {
    this.id = id;
    this.parent = parent;
    this.count = 0;
    this.isFree = true;
  }

  serviseByisFree () {
    if(!this.isFree) {
      eventEmmitter.emit('AtmUpdate', this.id, this.parent, this.count, this.isFree);

      eventEmmitter.emit('atmIsFree');
    }
    if(this.isFree){
      eventEmmitter.emit('AtmUpdate', this.id, this.parent, this.count, this.isFree);
      console.log('startBusy');
      eventEmmitter.emit('atmIsBusy', this);
    }
  }
  addPerson () {
    this.count++
  }
  startServise () {
    setTimeout( () => {
      this.isFree = true;
      console.log('Im isFree again')
      eventEmmitter.emit('AtmUpdate', this.id, this.parent, this.count, this.isFree);
    }, generateRandomSec(1, 3) );
  }

  init () {
    eventEmmitter.emit('AtmRender', this.id, this.parent, this.count, this.isFree);
  }

}

