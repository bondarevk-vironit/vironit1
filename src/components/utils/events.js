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

        eventEmmitter.on('findFreeAtm', () =>{
            console.log('find free atm');
            findFreeAtm(atmsArr);
            });

        eventEmmitter.on('busyState', () => {
            newATM.startServise(queue);
        });
        eventEmmitter.on('freeState', () => {
            setTimeout(() => {
                // newATM.state = 'free';
                console.log('emit free state', newATM.state);
                newATM.changeStatus();
            }, 1000)
        });
        return newATM;
    }

 function createATMwithFunc(n, create) {
    for(let i = 0; i < n; i++) {
        let atm = create();
        atmsArr.push(atm);
    }

}

function findFreeAtm (arr) {
    arr.find(item => {
        console.log(item.id)
        return item.state === 'free' && queue.count > 0 ? item.state = 'free' : item.state = 'busy';
    })
}
createATMwithFunc(countOfAtms, createAtm);
console.log(atmsArr)

export { atmsArr, queue };