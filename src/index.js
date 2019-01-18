
import ATM from './components/atm/ATM'
import AtmComponent from './components/atm/AtmComponent'
import Queue from './components/queue/Queue'
import QueueComponent from './components/queue/QueueComponent'
import './style.css'
import eventEmmitter from "./components/eventEmmitter/EventEmmitter";

let i = 0;
let atmsArr = [];
let countOfAtms = 1;
let atmContainer = document.getElementById('atmContainer');
let queueContainer = document.getElementById('queueContainer');

function createAtm () {
    // for(var j = 0; j < countOfAtms; j++) {

    let newATM = new ATM('atm' + ++i, atmContainer);
// }

        eventEmmitter.on('findFreeAtm', () =>{
            console.log('find free atm');
           atmsArr.find(atm => {
               console.log(queue.count, atm.id, atm.state);
              return atm.state === 'free' && queue.count > 0 ? atm.state = 'busy' : atm.state = 'free';

               // atm.changeStatus();
            });


        });
        // atmsArr.forEach(atm => {
            eventEmmitter.on('busyState', () => {
                newATM.startServise(queue);
            });
            eventEmmitter.on('freeState', () => {
                setTimeout(() => {
                    // newATM.state = 'free';
                    console.log('emit free state', newATM.state);
                    newATM.changeStatus();
                    // // queue.movingPerson();
                }, 1000)
            });
        //
        // });
    return newATM;
//     atmsArr.push(newATM);
// console.log(atmsArr)
}

function createATMwithFunc(n, create) {
    for(let i = 0; i < n; i++) {
       var atm = create();
        atmsArr.push(atm);
    }

}


createATMwithFunc(countOfAtms, createAtm);

console.log(atmsArr)

let atmComponent = new AtmComponent();

let queue = new Queue(queueContainer);
let queueComponent = new QueueComponent();


queue.init();


atmsArr.forEach(atm => {
    atm.init();
});



// atmsArr.forEach((atm) => {
//     eventEmmitter.on('findFreeAtm', () =>{
//         console.log('find free atm');
//         atmsArr.find(atm => {
//             console.log(queue.count, atm.id, atm.state);
//             return (atm.state === 'free' && queue.count > 0) ? atm.state = 'busy' : atm.state = 'free';
//         });
//
//
//     });
// eventEmmitter.on('busyState', () => {
//     atm.startServise(queue);
// });
// eventEmmitter.on('freeState', () => {
//     setTimeout(() => {
//         // newATM.state = 'free';
//         console.log('emit free state', atm.state);
//         atm.changeStatus();
//         // // queue.movingPerson();
//     }, 1000)
// })
// });



console.log(atmsArr[0].eventTable)
// console.log(atmsArr[1].eventTable)
// console.log(atmsArr[2].eventTable)

