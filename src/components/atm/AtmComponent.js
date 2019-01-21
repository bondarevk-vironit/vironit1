import eventEmmitter from '../eventEmmitter/EventEmmitter'
import DeleteAtmBtnComponent from "../deleteAtmBtn/DeleteAtmBtnComponent";
import DeleteAtmBtn from "../deleteAtmBtn/DeleteAtmBtn";
import CommonComponent from "../commonComponent/CommonComponent";

export default class AtmComponent {
  constructor (id) {
    this.id = id;
    this.atms = {};
    this.common = new CommonComponent();
    this.deleteBtn = new DeleteAtmBtn(this.id, this);
    eventEmmitter.on('AtmRender', (id, parent, count, isFree) => {
       this.render(id, parent, count, isFree);
    });
    eventEmmitter.on('AtmUpdate', (id, parent, count, isFree) => {
      this.update(id, parent, count, isFree)
    })
  }
  // ${this.deleteBtn.renderBtn.create(eventEmmitter.on('closeAtm', () => {this.deleteBtn.renderBtn.deleteAtm(this.id) }))}
  create (count, id, isFree) {
    return `<div id="${id}" class="atm"><div class="counter" style="background-color: ${isFree === true ? 'lightgreen' : 'red'}">${count}</div></div>`
  }
  render (id, parent, count, isFree) {
    this.atms[id] = this.create(count, id, isFree);
    console.log(this.common.strToDom(this.create(count, id, isFree)));

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
