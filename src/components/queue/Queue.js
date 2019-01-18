import eventEmmitter from '../eventEmmitter/EventEmmitter'
import generateRandomSec from '../others/generateRandomSec'


export default class Queue {
  constructor (parent) {
    this.parent = parent;
    this.count = 1;
  }

  movingPerson () {
    if(this.count > 0){
      console.log(this.count, 'start findFreeAtm')
      eventEmmitter.emit('findFreeAtm');
    }
  }

  movePerson () {
    this.count -= 1;
    eventEmmitter.emit('QueueUpdate', this.parent, this.count)
    }

  addPerson () {
    this.count++;
    eventEmmitter.emit('QueueUpdate', this.parent, this.count)
  }

  startAddPerson () {
    setInterval(() => {
      this.addPerson();
    }, generateRandomSec(2, 4))
  }

  init () {
    eventEmmitter.emit('QueueRender', this.parent, this.count);
    this.startAddPerson();
    this.movingPerson();
  }

}

