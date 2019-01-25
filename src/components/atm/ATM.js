import eventEmmitter from '../eventEmmitter/EventEmmitter'
import AtmComponent from './AtmComponent'
import { atmsArr } from '../utils/events'

export default class ATM {
  constructor (id, parent) {
    this.id = id
    this.parent = parent
    this.isFree = true
    this.renderAtm = new AtmComponent(this.id, this.parent)
    eventEmmitter.on(`deleteAtmFromArr${this.id}`, () => {
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
    let f = atmsArr.indexOf(this)
    atmsArr.splice(f, 1)
  }
}
