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
    eventEmmitter.emit('findFreeAtm');
    console.log(this.state, this.id ,"after find freeATM")
    if(this.state === 'busy') {
      console.log('emit busy', this.state)

      //eventEmmitter.emit('AtmUpdate', this.id, this.parent, this.count, this.state);

      eventEmmitter.emit('busyState');
    }
    else {
      console.log('emit free', this.state)

      eventEmmitter.emit('AtmUpdate', this.id, this.parent, this.count, this.state);
      eventEmmitter.emit('freeState');
    }
  }
  addPerson () {
    this.count++
  }
  startServise (queue) {
    this.state = 'busy';
    this.addPerson();
    queue.movePerson();
    eventEmmitter.emit('AtmUpdate', this.id, this.parent, this.count, this.state);
    setTimeout( () => {
    console.log('start servise', this.state)

      this.serviseOut();
    }, generateRandomSec(1, 3) );
  }

  serviseOut () {
    console.log('serviceout', this.state)
    this.state = 'free';
    eventEmmitter.emit('AtmUpdate', this.id, this.parent, this.count, this.state);
    setTimeout(() => {
      this.changeStatus();
    },1000);


  }

  init () {
    eventEmmitter.emit('AtmRender', this.id, this.parent, this.count, this.state);
    this.changeStatus();
  }

}

