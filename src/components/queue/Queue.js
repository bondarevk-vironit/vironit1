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
        eventEmmitter.emit('findFreeAtm');
      }
    }

  startAddPerson () {
    setInterval(() => {
      this.addPerson();
    }, generateRandomSec(2, 4));
  }

  init () {
    eventEmmitter.emit('QueueRender', this.parent, this.count);
    this.startAddPerson();
  }

}

