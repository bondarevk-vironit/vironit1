import QueueComponent from './components/queue/QueueComponent'
import './style.css'
import * as events from './components/utils/events'
import generateRandomSec from './components/others/generateRandomSec'
let min = 1, max = 1
let queueComponent = new QueueComponent()

events.queue.init()

let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')


let queueTimer = setInterval(() => {
  events.queue.addPerson()
    console.log(min, max)
}, generateRandomSec(min, max))

 setInterval(() => {
  // console.log(events.queue.count)
  events.queue.checkFreeAtm()
}, 1000)

input1.addEventListener('change', (e) => {
    clearInterval(queueTimer)
    console.log(e.target.value)
    min = +e.target.value;
    queueTimer = setInterval(() => {
        events.queue.addPerson()
        console.log(min, max)
    }, generateRandomSec(min, max))
    console.log('change input value')
})

input2.addEventListener('change', (e) => {
    clearInterval(queueTimer)
    max = +e.target.value;
    queueTimer = setInterval(() => {
        events.queue.addPerson()
        console.log(min, max)
    }, generateRandomSec(min, max))
    console.log('change input value')
})

function initPage () {
 fetch('http://localhost:3000/api/atms', {
    method: 'get',
    mode: 'no-cors',
  })
      .then((res) => {
        console.log(res)


      })
      .catch(err => console.log('No send data to host'))
}

initPage()

console.log(events.atmsArr)
