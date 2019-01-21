import eventEmmitter from '../eventEmmitter/EventEmmitter'
import CommonComponent from "../commonComponent/CommonComponent";
import counterAtm from "../counterAtm/counterAtm";
import DeleteAtmBtn from "../deleteAtmBtn/DeleteAtmBtn";

export default class AtmComponent {
  constructor (id, parent) {
    this.id = id;
    this.parent = parent;
    this.commonComponent = new CommonComponent();
    this.element = this.commonComponent.strToDom(this.create( this.id ));
    this.counterAtm = new counterAtm(this.id, this.parent);
    this.deleteBtn = new DeleteAtmBtn(this.id, this.parent);
    this.element.appendChild(this.deleteBtn.renderBtn.element);
    this.element.appendChild(this.counterAtm.renderCounterAtm.element);

    eventEmmitter.on('deleteAtm', (parentId) => {
        if(this.element.id === parentId) {
          this.element.removeChild(this.counterAtm.renderCounterAtm.element);
          this.element.removeChild(this.deleteBtn.renderBtn.element);
          this.parent.removeChild(this.element);
        }

    })
  }

  create ( id ) {
    return `<div id="${id}" class="atm"> </div>`
  }
  render (id, parent ) {
       parent.appendChild(this.element);
  }

}
