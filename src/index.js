import QueueComponent from './components/queue/QueueComponent'
import './style.css'
import * as events from './components/utils/events'
import generateRandomSec from './components/others/generateRandomSec'

let queueComponent = new QueueComponent()

events.queue.init()

let inputs = document.querySelectorAll('input')
let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')


let queueTimer = setInterval(() => {
  events.queue.addPerson()
}, generateRandomSec(1, 1))

 setInterval(() => {
  // console.log(events.queue.count)
  events.queue.checkFreeAtm()
}, 1000)




console.log(events.atmsArr)
