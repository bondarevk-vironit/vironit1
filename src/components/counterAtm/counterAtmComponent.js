import CommonComponent from '../commonComponent/CommonComponent'
import eventEmmitter from '../eventEmmitter/EventEmmitter'

export default class CounterAtmComponent {
  constructor (id) {
    this.id = id
    this.commonComponent = new CommonComponent()
    this.element = this.commonComponent.strToDom(this.create())
    eventEmmitter.on('updateCounter', (state, countAtm, atm) => {
      if (atm.id === this.id) {
        this.updateCounter(state, countAtm)
      }
    })
    eventEmmitter.on('renderCounter', (state, countAtm) => {
      this.render(state, countAtm)
    })
  }

  create () {
    return `<div class="counter"> </div>`
  }

  render (state, countAtm) {
    this.element.innerHTML = countAtm
    this.changeColor(state)
  }
  changeColor (state) {
    if (state === true) {
      this.element.style.backgroundColor = 'lightgreen'
    } else {
      this.element.style.backgroundColor = 'red'
    }
  }
  updateCounter (state, countAtm) {
    // console.log(countAtm)
    this.element.innerHTML = countAtm
    this.changeColor(state)
  }
}
