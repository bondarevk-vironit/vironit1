import eventEmmitter from '../eventEmmitter/EventEmitterSingleton'
import generateRandomSec from '../others/generateRandomSec'

export default class ATM {
  constructor (id, parent) {
    this.id = id
    this.parent = parent
    this.count = 0
    this.state = 'free'
    // console.log(eventEmmitter)
    eventEmmitter.on('continueWorking', () => {
      // console.log('continueWorking');
      this.startServise()
    })
    eventEmmitter.on('start', (count) => {
      if (count === 1) {
        this.state = 'free'
        this.startServise()
      }
      if (count > 0) {
        eventEmmitter.unsubscribe()
      }
      // console.log('emitstart', count)
    })
  }
  addPerson () {
    this.count++
  }
  startServise () {
    // console.log('in f startServise')
    this.state = 'busy'
    eventEmmitter.emit('AtmUpdate', this.id, this.parent, this.count, this.state)
    this.serviceIn()
  }
  serviceIn () {
    setTimeout(() => {
      // console.log('settimeout servisein')
      this.state = 'free'
      eventEmmitter.emit('AtmUpdate', this.id, this.parent, this.count, this.state)
      this.serviseOut()
    }, generateRandomSec(1, 3))
  }
  serviseOut () {
    setTimeout(() => {
      // console.log('settimeout serviseout')
      this.addPerson()
      eventEmmitter.emit('AtmUpdate', this.id, this.parent, this.count, this.state)
      eventEmmitter.emit('AtmIsFree')
    }, 1000)
  }

  init () {
    eventEmmitter.emit('AtmRender', this.id, this.parent, this.count, this.state)
  }
}
