import eventEmmitter from '../eventEmmitter/EventEmmitter'
import generateRandomSec from '../others/generateRandomSec'


export default class ATM {
  constructor (id, parent) {
    this.id = id;
    this.parent = parent;
    this.count = 0;
    this.state = 'free';
    // console.log(eventEmmitter)
    eventEmmitter.on('continueWorking', () => {
      // console.log('continueWorking');
      this.startServise()
    });
    let us = eventEmmitter.on('start', (count) => {
      if (count > 0) {
        console.log('start emit count > 0', count, 'moveperson');
        eventEmmitter.emit('AtmIsFree')
        this.startServise();
      }
      if(count === 0) {
        console.log('us start emit count == 0', count);
        us();
      }
    })
  }
  changeStatus () {
    if(this.state === 'free') {
      eventEmmitter.emit('busyState');
    }
    if(this.state === 'busy') {
      eventEmmitter.emit('freeState');
    }
  }
  addPerson () {
    this.count++
  }
  startServise () {
    console.log('f startServise, state busy');
    this.state = 'busy';
    this.addPerson();
    eventEmmitter.emit('AtmUpdate', this.id, this.parent, this.count, this.state);
    setTimeout(() => {
      console.log('settimeout go to serviceOut');
      this.serviseOut()
    }, generateRandomSec(1, 3))
  }

  serviseOut () {
      console.log('settimeout atm is free ');
      this.state = 'free';

      eventEmmitter.emit('AtmUpdate', this.id, this.parent, this.count, this.state)

  }

  init () {
    eventEmmitter.emit('AtmRender', this.id, this.parent, this.count, this.state)
  }
}
