import DeleteAtmBtn from "../deleteAtmBtn/DeleteAtmBtn";
import eventEmmitter from "../eventEmmitter/EventEmmitter";
import CommonComponent from "../commonComponent/CommonComponent";

export default class DeleteAtmBtnComponent {
    constructor( id, parent ) {
        this.id = id;
        this.parent = parent;
        this.commonComponent = new CommonComponent();
        this.element = this.commonComponent.strToDom(this.create());
        this.element.addEventListener('click', () => {
            eventEmmitter.emit('deleteAtm', this.element.parentElement.id);
        });
    }

    create () {
        return `<button class="deleteAtmBtn">x</button>`
    }

}