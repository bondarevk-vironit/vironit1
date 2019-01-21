import ATM from "../atm/ATM";
import eventEmmitter from "../eventEmmitter/EventEmmitter";
import Queue from "../queue/Queue";
import generateRandomSec from "../others/generateRandomSec";
let i = 0;
let atmContainer = document.getElementById('atmContainer');
let queueContainer = document.getElementById('queueContainer');
let atmsArr = [];
let queue = new Queue(queueContainer);


export default function createAtm () {
        let newATM = new ATM('atm' + ++i, atmContainer);
        newATM.renderAtm.render(newATM.id, newATM.parent, newATM.isFree);
        eventEmmitter.emit('renderCounter', newATM.isFree, newATM.renderAtm.counterAtm.countAtm);
        return newATM;
    }

eventEmmitter.on('findFreeAtm', () =>{
    // console.log('find free atm');
    atmsArr.find((item) => {
       if(item.isFree === true && queue.count > 0) {
           // console.log(item.id, 'Im is free');
           item.serviseByisFree();
       }
    });
});

eventEmmitter.on('atmIsBusy', (atm) => {
    atm.isFree = false;
    // console.log(queue.count)
    queue.movePerson();
    eventEmmitter.emit('QueueUpdate', queue.parent, queue.count);
    eventEmmitter.emit('addPerson', atm)
    //atm.renderAtm.counterAtm.addPerson();
    eventEmmitter.emit('updateCounter', atm.isFree, atm.renderAtm.counterAtm.countAtm, atm);
    //eventEmmitter.emit('AtmUpdate', atm.id, atm.parent, atm.count, atm.isFree);
    setTimeout( () => {
        atm.serviseByisFree();
    }, generateRandomSec(1, 3) );
});
eventEmmitter.on('atmIsFree', (atm) => {
    setTimeout(() => {
        atm.isFree = true;
        eventEmmitter.emit('updateCounter', atm.isFree, atm.renderAtm.counterAtm.countAtm, atm);
       // eventEmmitter.emit('AtmUpdate', atm.id, atm.parent, atm.count, atm.isFree);
       //  console.log('Im isFree again')
    }, 1000)
});

 function createATMwithFunc( create) {
        let atm = create();
        atmsArr.push(atm);
}

 // createATMwithFunc(countOfAtms, createAtm);

window.addEventListener('click', (e) => {
    if( e.target === document.getElementById('addBtn')){
           createATMwithFunc(createAtm);
        }
    console.log(atmsArr)
});


export { atmsArr, queue };

