import eventEmmitter from '../eventEmmitter/EventEmmitter'
import generateRandomSec from '../others/generateRandomSec'
import AtmComponent from "./AtmComponent";
import DeleteAtmBtn from "../deleteAtmBtn/DeleteAtmBtn";



export default class ATM {
  constructor (id, parent) {
    this.id = id;
    this.parent = parent;
    this.count = 0;
    this.isFree = true;
    this.renderAtm = new AtmComponent(this.id, this.parent, this.count, this.isFree);
    this.deleteBtn = new DeleteAtmBtn(this.id);
  }

  serviseByisFree () {
    if(!this.isFree) {
      eventEmmitter.emit('AtmUpdate', this.id, this.parent, this.count, this.isFree);
      eventEmmitter.emit('atmIsFree', this);
    }
    if(this.isFree){
      eventEmmitter.emit('AtmUpdate', this.id, this.parent, this.count, this.isFree);
      // console.log('startBusy');
      eventEmmitter.emit('atmIsBusy', this);
    }
  }
  addPerson () {
    this.count++
  }


  init () {
    eventEmmitter.emit('AtmRender', this.id, this.parent, this.count, this.isFree);
  }

}

