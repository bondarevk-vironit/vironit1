
import ATM from './components/atm/ATM'
import AtmComponent from './components/atm/AtmComponent'
import Queue from './components/queue/Queue'
import QueueComponent from './components/queue/QueueComponent'
import './style.css'
import * as events from "./components/utils/events";

let countOfAtms = 1;
let atmContainer = document.getElementById('atmContainer');
let queueContainer = document.getElementById('queueContainer');






console.log(events.atmsArr)

let atmComponent = new AtmComponent();

// let queue = new Queue(queueContainer);
let queueComponent = new QueueComponent();


events.queue.init();


events.atmsArr.forEach(atm => {
    atm.init();
});

// createAtm(atmsArr, queue);

