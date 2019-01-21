
import ATM from './components/atm/ATM'
import AtmComponent from './components/atm/AtmComponent'
import Queue from './components/queue/Queue'
import QueueComponent from './components/queue/QueueComponent'
import './style.css'
import * as events from "./components/utils/events";
import generateRandomSec from "./components/others/generateRandomSec";
import AddAtmBtm from "./components/deleteAtmBtn/DeleteAtmBtn";

import createAtm, {atmsArr} from "./components/utils/events"
import eventEmmitter from "./components/eventEmmitter/EventEmmitter";

let atmContainer = document.getElementById('atmContainer');
let queueContainer = document.getElementById('queueContainer');


// let queue = new Queue(queueContainer);
let queueComponent = new QueueComponent();


events.queue.init();


//     setInterval(() => {
//         events.queue.addPerson();
//     }, generateRandomSec(2, 4));
//
//
// setInterval( () => {
//     // console.log(events.queue.count)
//     events.queue.checkFreeAtm();
// }, 1000);



// events.atmsArr.forEach(atm => {
//     atm.init();
// });


console.log(atmsArr)
