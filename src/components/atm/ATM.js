import eventEmmitter from '../eventEmmitter/EventEmmitter'
import AtmComponent from './AtmComponent'
import {atmsArr} from "../utils/events";

export default class ATM {
  constructor (id, parent) {
    this.id = id
    this.parent = parent
    this.isFree = true
    this.renderAtm = new AtmComponent(this.id, this.parent)
    eventEmmitter.on('deleteAtmFromArr', () => {
      this.deleteAtm()
    })
  }

  serviseByisFree () {
    if (!this.isFree) {
      eventEmmitter.emit('atmIsFree', this)
    }
    if (this.isFree) {
      eventEmmitter.emit('atmIsBusy', this)
    }
  }

  deleteAtm () {
    console.log(this.id)
    let f = atmsArr.indexOf(this)
    console.log(f)
    console.log(atmsArr)
    atmsArr.splice(f, 1)
    console.log(atmsArr)
  }
}
