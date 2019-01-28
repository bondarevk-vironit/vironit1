// Ошибки eslint

import QueueComponent from './components/queue/QueueComponent'
import './style.css'
// лучше заменить на import { atmsArr, queue } from ...
import * as events from './components/utils/events'
import generateRandomSec from './components/others/generateRandomSec'
let min = 1; let max = 1

// можно убрать let queueComponent =
let queueComponent = new QueueComponent()

events.queue.init()

let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')

let queueTimer = setInterval(() => {
  events.queue.addPerson()
  // debug log лучше выводть с опсанием, а не просто значения переменных
  console.log(min, max)
}, generateRandomSec(min, max))

setInterval(() => {
  // console.log(events.queue.count)
  events.queue.checkFreeAtm()
}, 1000)

input1.addEventListener('change', (e /* Лучше использовать полное название "event" или заменить на "... ({ target }) => {" */) => {
  clearInterval(queueTimer)
  console.log(e.target.value)
  min = +e.target.value
  queueTimer = setInterval(() => {
    events.queue.addPerson()
    console.log(min, max)
  }, generateRandomSec(min, max))
  console.log('change input value')
})

input2.addEventListener('change', (e) => {
  clearInterval(queueTimer)
  max = +e.target.value
  queueTimer = setInterval(() => {
    events.queue.addPerson()
    console.log(min, max)
  }, generateRandomSec(min, max))
  console.log('change input value')
})

console.log(events.atmsArr)
