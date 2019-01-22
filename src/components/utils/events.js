import axios from 'axios'
import ATM from '../atm/ATM'
import eventEmmitter from '../eventEmmitter/EventEmmitter'
import Queue from '../queue/Queue'
import generateRandomSec from '../others/generateRandomSec'
let i = 0
let atmContainer = document.getElementById('atmContainer')
let queueContainer = document.getElementById('queueContainer')
let atmsArr = []
let queue = new Queue(queueContainer)

export default function createAtm () {
  let newATM = new ATM('atm' + ++i, atmContainer)
  newATM.renderAtm.render(newATM.id, newATM.parent, newATM.isFree)
  // axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
  //   .then(res => {
  //     alert(res.data.bitcoin.usd)
  //   })

  eventEmmitter.emit('renderCounter', newATM.isFree, newATM.renderAtm.counterAtm.countAtm)
  return newATM
}

eventEmmitter.on('findFreeAtm', () => {
  atmsArr.find((item) => {
    if (item.isFree === true && queue.count > 0) {
      item.serviseByisFree()
    }
  })
})

eventEmmitter.on('atmIsBusy', (atm) => {
  atm.isFree = false
  queue.movePerson()
  eventEmmitter.emit('QueueUpdate', queue.parent, queue.count)
  eventEmmitter.emit('addPerson', atm)
  eventEmmitter.emit('updateCounter', atm.isFree, atm.renderAtm.counterAtm.countAtm, atm)
  setTimeout(() => {
    atm.serviseByisFree()
  }, generateRandomSec(1, 3))
})
eventEmmitter.on('atmIsFree', (atm) => {
  setTimeout(() => {
    atm.isFree = true
    eventEmmitter.emit('updateCounter', atm.isFree, atm.renderAtm.counterAtm.countAtm, atm)
  }, 1000)
})

function createATMwithFunc (create) {
  let atm = create()
  atmsArr.push(atm)
}

document.getElementById('addBtn').addEventListener('click', () => {
  createATMwithFunc(createAtm)
  console.log(atmsArr)
})

export { atmsArr, queue }
