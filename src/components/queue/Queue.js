import eventEmmitter from '../eventEmmitter/EventEmmitter'
import generateRandomSec from '../others/generateRandomSec'


export default class Queue {
  constructor (parent) {
    this.parent = parent;
    this.count = 0;
  }
  addPerson () {
    this.count++;
    eventEmmitter.emit('QueueUpdate', this.parent, this.count)
  }

  movePerson () {
      this.count--;
      eventEmmitter.emit('QueueUpdate', this.parent, this.count)
    }

    checkFreeAtm () {
      if(this.count > 0) {
        // console.log('queue check if atm is free')
        eventEmmitter.emit('findFreeAtm');
      }
    }

  init () {
    eventEmmitter.emit('QueueRender', this.parent, this.count);
  }

}

