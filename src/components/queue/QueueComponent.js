import eventEmmitter from '../eventEmmitter/EventEmmitter'

export default class QueueComponent {
  constructor () {
    eventEmmitter.on('QueueRender', (parent, count) => {
      this.render(parent, count)
    })
    eventEmmitter.on('QueueUpdate', (parent, count) => {
      this.update(parent, count)
    })
  }
  create (count) {
    return `<div class = 'queueContainer'>${count}</div>`
  }
  render (parent, count) {
    parent.innerHTML = this.create(count)
  }
  update (parent, count) {
    let child = parent.firstChild
    child.innerHTML = count
  }
}
