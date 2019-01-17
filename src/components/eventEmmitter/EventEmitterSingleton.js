// const events = require("events"),
//   EventEmitter = events.EventEmitter;
//
// const emitter = function() {
//   if (arguments.callee._singletonInstance)
//     return arguments.callee._singletonInstance;
//   arguments.callee._singletonInstance = this;
//   EventEmitter.call(this);
// };
//
// emitter.prototype.__proto__ = EventEmitter.prototype;
//
// module.exports = new emitter();

// export default class EventEmmitter {
//   constructor () {
//     this.eventTable = {}
//   }
//
//   on (eventName, fn) {
//     if (!this.eventTable[eventName]) {
//       this.eventTable[eventName] = []
//     }
//     this.eventTable[eventName].push(fn)
//
//     var self = this
//     return function () {
//       self.eventTable[eventName] = self.eventTable[eventName].filter(eventFunc => { return fn !== eventFunc })
//     }
//   };
//   emit (eventName, ...params) {
//     const event = this.eventTable[eventName]
//     if (event) {
//       event.map(fn => {
//         return fn.call(this, params)
//       })
//     }
//   };
// }

function EventEmmitter () {
  this.eventTable = {};
}

EventEmmitter.prototype = {
  on: function (eventName, fn) {
    if(!this.eventTable[eventName]) {
      this.eventTable[eventName] = [];
    }
    this.eventTable[eventName].push(fn);

    var self = this;
    return function () {
      self.eventTable[eventName] = self.eventTable[eventName].filter(eventFunc => {return fn !== eventFunc});

    }
  },
  emit: function (eventName, data, data1) {
    const event = this.eventTable[eventName];
    if(event) {
      event.map(fn => {
        return fn.call(this, data, data1);
      });
    }
  }
};