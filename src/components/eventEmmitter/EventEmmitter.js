class EventEmmitter {
  constructor () {
    this.eventTable = {}
  }

  on (eventName, fn) {
    if (!this.eventTable[eventName]) {
      this.eventTable[eventName] = []
    }
    this.eventTable[eventName].push(fn)

    var self = this
    // лучше заменить на () => { и убрать self
    return function () {
      self.eventTable[eventName] = self.eventTable[eventName].filter(eventFunc => { return fn !== eventFunc })
    }
  };
  emit (eventName, param1, param2, param3, param4) {
    const event = this.eventTable[eventName]
    if (event) {
      event.map(fn => {
        return fn.call(this, param1, param2, param3, param4)
      })
    }
  };
}

export default new EventEmmitter()
