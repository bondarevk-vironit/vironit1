import eventEmmitter from '../eventEmmitter/EventEmitterSingleton'
import generateRandomSec from '../others/generateRandomSec'

export default class Queue {
  constructor (parent) {
    this.parent = parent
    this.count = 0
    eventEmmitter.on('AtmIsFree', () => {
      this.movePerson()
      // console.log('in emit AtmIsFree')
    })
  }

  movePerson () {
    if (this.count > 0) {
      setTimeout(() => {
        // console.log('movePerson')
        this.count -= 1
        // console.log('moveperson', this.count)
        eventEmmitter.emit('QueueUpdate', this.parent, this.count)
        // console.log('emit continueWorking')
        eventEmmitter.emit('continueWorking')
      }, 1000)
    }
    if (this.count === 0) {
      return 0
    }
  }
  addPerson () {
    this.count++
    eventEmmitter.emit('QueueUpdate', this.parent, this.count)
  }

  startAddPerson () {
    setInterval(() => {
      // console.log('setinterval addPerson')
      this.addPerson()
      // console.log("startAddPerson", this.count)
      eventEmmitter.emit('start', this.count)
    }, 1000)
  }

  init () {
    eventEmmitter.emit('QueueRender', this.parent, this.count)
    // console.log('start add person', this.count)
    this.startAddPerson()
  }
}
