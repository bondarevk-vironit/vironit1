import ATM from './components/atm/ATM'
import AtmComponent from './components/atm/AtmComponent'
import Queue from './components/queue/Queue'
import QueueComponent from './components/queue/QueueComponent'
import './style.css'
let i = 0;
let atmsArr = [];
let countOfAtms = 2;
let atmContainer = document.getElementById('atmContainer');
let queueContainer = document.getElementById('queueContainer');

function createAtm (countOfAtms) {
    for(var j = 0; j < countOfAtms; j++){
        atmsArr.push(new ATM('atm'+ ++i, atmContainer));
    }
    atmsArr.forEach(atm => {
        atm.init();
    })
}
let atmComponent = new AtmComponent();

let queue = new Queue(queueContainer);
let queueComponent = new QueueComponent();

createAtm (countOfAtms);
queue.init();

