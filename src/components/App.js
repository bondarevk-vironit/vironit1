import ATM from './atm/ATM'
import AtmComponent from './atm/AtmComponent'
import Queue from './queue/Queue'
import QueueComponent from './queue/QueueComponent'
import '../styles/main.css'


let atmContainer = document.createElement('div');
atmContainer.id = "atmContainer";
let queueContainer = document.createElement('div');
queueContainer.id = "queueContainer";

document.body.appendChild(atmContainer);
document.body.appendChild(queueContainer);

let atm1 = new ATM('atm1', atmContainer);
let atm2 = new ATM('atm2', atmContainer);
let queue = new Queue(queueContainer);

// console.log(atm1);
// console.log(atm2);




// console.log(queue);
let atmComponent = new AtmComponent();
let queueComponent = new QueueComponent();
// console.log(queueComponent);

atm1.init();
atm2.init();
queue.init();

