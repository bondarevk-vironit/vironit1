import DeleteAtmBtn from "../deleteAtmBtn/DeleteAtmBtn";
import eventEmmitter from "../eventEmmitter/EventEmmitter";
import CommonComponent from "../commonComponent/CommonComponent";

export default class DeleteAtmBtnComponent {
    constructor( parent ) {
        this.parent = parent;
        this.commonComponent = new CommonComponent();
    }
    render (  ) {
        // this.element.addEventListener('click', this.setOnClick.bind(this));
        this.parent.innerHTML = this.commonComponent.strToDom(this.create());
    }

    create () {
        return `<button class="deleteAtmBtn">x</button>`
    }
    setOnClick () {
        console.log(this.element)
            eventEmmitter.emit('closeAtm');

    }




}