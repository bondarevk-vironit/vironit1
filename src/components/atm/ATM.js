import eventEmmitter from '../eventEmmitter/EventEmmitter'
import generateRandomSec from '../others/generateRandomSec'


export default class ATM {
  constructor (id, parent) {
    this.id = id;
    this.parent = parent;
    this.count = 0;
    this.state = 'free';
  }

  changeStatus () {
    if(this.state === 'free') {
        this.state = 'busy';
      eventEmmitter.emit('busyState');
    }
    if(this.state === 'busy') {
        this.state = 'free';
      eventEmmitter.emit('freeState');
    }
  }
  addPerson () {
    this.count++
  }
  startServise () {
    this.addPerson();
    eventEmmitter.emit('AtmUpdate', this.id, this.parent, this.count, this.state);
    setTimeout(() => {
      this.serviseOut()
    }, generateRandomSec(1, 3))
  }

  serviseOut () {
     this.changeStatus();
      eventEmmitter.emit('AtmUpdate', this.id, this.parent, this.count, this.state);

  }

  init () {
    eventEmmitter.emit('AtmRender', this.id, this.parent, this.count, this.state)
  }

}

