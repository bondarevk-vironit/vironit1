import {atmsArr} from "../utils/events";
import DeleteAtmBtnComponent from "./DeleteAtmBtnComponent";
import eventEmmitter from '../eventEmmitter/EventEmmitter'
import CommonComponent from "../commonComponent/CommonComponent";

class DeleteAtmBtn {
    constructor ( id ) {
        this.id = id;
        this.renderBtn = new DeleteAtmBtnComponent(  );
        this.commonComponent = new CommonComponent();
        this.element = this.commonComponent.findIndex(this.id);
    }
deleteAtm () {

   atmsArr.splice(+this.element -1, 1);
    console.log(atmsArr)
}


}


export default DeleteAtmBtn;