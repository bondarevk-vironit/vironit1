import eventEmmitter from '../eventEmmitter/EventEmmitter'
import DeleteAtmBtnComponent from "../deleteAtmBtn/DeleteAtmBtnComponent";

export default class AtmComponent {
  constructor (id) {
    this.id = id;
    this.atms = {};
    this.deleteBtn = new DeleteAtmBtnComponent();
    eventEmmitter.on('AtmRender', (id, parent, count, isFree) => {
       this.render(id, parent, count, isFree);
    });
    eventEmmitter.on('AtmUpdate', (id, parent, count, isFree) => {
      this.update(id, parent, count, isFree)
    })
  }
  create (count, id, isFree) {
    return `<div id="${id}" class="atm">${this.deleteBtn.create({click: () => this.deleteBtn.deleteAtm(this.id)})}<div class="counter" style="background-color: ${isFree === true ? 'lightgreen' : 'red'}">${count}</div></div>`
  }
  render (id, parent, count, isFree) {
    this.atms[id] = this.create(count, id, isFree);
    parent.innerHTML += this.create(count, id, isFree);

    this.atms[id] = this.create(count, id, isFree)
  }
  update (id, parent, count, isFree) {
    // console.log('first', this.atms)
    let oldTemplate = this.atms[id];
    let newTemplate = this.create(count, id, isFree);

    if (parent.innerHTML.indexOf(oldTemplate) + 1) {
      parent.innerHTML = parent.innerHTML.replace(oldTemplate, newTemplate)
    }
    this.atms[id] = newTemplate
  }
}
