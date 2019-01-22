import eventEmmitter from '../eventEmmitter/EventEmmitter'
import AtmComponent from './AtmComponent'

export default class ATM {
  constructor (id, parent) {
    this.id = id
    this.parent = parent
    this.isFree = true
    this.renderAtm = new AtmComponent(this.id, this.parent)

    // eventEmmitter.on('deleteAtm', (parent, item) => {
    //   item.deleteAtm(this.id);
    //
    // })
  }

  serviseByisFree () {
    if (!this.isFree) {
      eventEmmitter.emit('atmIsFree', this)
    }
    if (this.isFree) {
      eventEmmitter.emit('atmIsBusy', this)
    }
  }
}
