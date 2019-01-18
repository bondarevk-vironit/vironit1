
import ATM from './components/atm/ATM'
import AtmComponent from './components/atm/AtmComponent'
import Queue from './components/queue/Queue'
import QueueComponent from './components/queue/QueueComponent'
import './style.css'
import eventEmmitter from "./components/eventEmmitter/EventEmmitter";
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


eventEmmitter.on('findFreeAtm', () =>{
    console.log('find free atm');
    arr.find(item => {
        item.state === 'free';
        console.log('change status for free atm', id)
        item.changeStatus();
    })


});

eventEmmitter.on('busyState', (atm) => {
    console.log('emit busy state')
    atm.startServise();
});
eventEmmitter.on('freeState', () => {
    setTimeout(() => {
        queue.movingPerson();
    }, 1000)
})








