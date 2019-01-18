import eventEmmitter from '../eventEmmitter/EventEmmitter'
import generateRandomSec from '../others/generateRandomSec'


export default class Queue {
  constructor (parent) {
    this.parent = parent;
    this.count = 0;
    let usatm = eventEmmitter.on('AtmIsFree', () => {
      console.log('atm isfree green 1c')

      if(this.count > 0) {
        console.log('queue minus person')
        this.movePerson();
        eventEmmitter.emit('QueueUpdate', this.parent, this.count);
        if(this.count > 0) {
          console.log('queue count > 0 continueWorking ')
          eventEmmitter.emit('continueWorking');
        }
      }
      if(this.count === 0) {
        console.log('queueCount is 0 usatm')
        usatm();
      // console.log('in emit AtmIsFree')
      }
  })
  }

  movePerson () {
        this.count -= 1;
    }

  addPerson () {
    this.count++;
    eventEmmitter.emit('QueueUpdate', this.parent, this.count)
  }

  startAddPerson () {
    setInterval(() => {
      this.addPerson();
      if(this.count > 0) {
        console.log(this.count)
        eventEmmitter.emit('start', this.count);
      }
    }, generateRandomSec(2, 4))
  }

  init () {
    eventEmmitter.emit('QueueRender', this.parent, this.count);
    // console.log('start add person', this.count)
    this.startAddPerson()
  }

}

