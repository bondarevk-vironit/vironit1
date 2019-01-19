import ATM from "../atm/ATM";
import eventEmmitter from "../eventEmmitter/EventEmmitter";
import Queue from "../queue/Queue";
let i = 0;
let atmContainer = document.getElementById('atmContainer');
let queueContainer = document.getElementById('queueContainer');
let atmsArr = [];
let queue = new Queue(queueContainer);
let countOfAtms = 2;

function createAtm () {
        let newATM = new ATM('atm' + ++i, atmContainer);
        return newATM;
    }

eventEmmitter.on('findFreeAtm', () =>{
    console.log('find free atm');
    atmsArr.find((item) => {
       if(item.isFree === true && queue.count > 0) {
           console.log(item.id, 'Im is free');
           item.serviseByisFree();
       }
    });
});

eventEmmitter.on('atmIsBusy', (atm) => {
    atm.isFree = false;
    queue.movePerson();
    atm.addPerson();
    eventEmmitter.emit('AtmUpdate', atm.id, atm.parent, atm.count, atm.isFree);
    atm.startServise(queue);
});
eventEmmitter.on('freeState', () => {
    setTimeout(() => {
        // newATM.state = 'free';
        console.log('emit free state', newATM.state);
        newATM.changeStatus();
    }, 1000)
});

 function createATMwithFunc(n, create) {
    for(let i = 0; i < n; i++) {
        let atm = create();
        atmsArr.push(atm);
    }

}

createATMwithFunc(countOfAtms, createAtm);
console.log(atmsArr)

export { atmsArr, queue };