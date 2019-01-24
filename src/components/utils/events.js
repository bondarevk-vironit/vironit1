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
  newATM.renderAtm.counterAtm.renderCounterAtm.render(newATM.isFree, newATM.renderAtm.counterAtm.countAtm)
  // axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
  //   .then(res => {
  //     alert(res.data.bitcoin.usd)
  //   })
  return newATM
}

eventEmmitter.on('findFreeAtm', () => {
  atmsArr.find((item) => {
    if (item.isFree === true && queue.count > 0) {
      item.serviseByisFree()
    }
    // new Promise(function (resolve, reject) {
    //   if (queue.count === 10) {
    //     console.log('it promise')
    //     let newAtmCreated = createATMwithFunc(createAtm)
    //     resolve(newAtmCreated)
    //   }
    // })

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
  //  new Promise(function (resolve, reject) {
  //   if (queue.count <= 4 && atmsArr.length > 1) {
  //     console.log('it promise delete')
  //     atm.deleteAtm()
  //
  //     resolve()
  //   }
  // })
})

function createATMwithFunc (create) {
  let atm = create()
  atmsArr.push(atm)
}

document.getElementById('addBtn').addEventListener('click', () => {
  createATMwithFunc(createAtm)
  console.log(atmsArr)
})

console.log(atmsArr)

export { atmsArr, queue }
