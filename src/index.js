import QueueComponent from './components/queue/QueueComponent'
import './style.css'
import * as events from './components/utils/events'
import generateRandomSec from './components/others/generateRandomSec'

let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')

let queueComponent = new QueueComponent()

events.queue.init()

setInterval(() => {
  events.queue.addPerson()
}, generateRandomSec(input1.value = 2, input2.value = 4))

setInterval(() => {
  // console.log(events.queue.count)
  events.queue.checkFreeAtm()
}, 1000)

console.log(events.atmsArr)
