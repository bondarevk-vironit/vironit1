import {atmsArr} from "../utils/events";
import DeleteAtmBtnComponent from "./DeleteAtmBtnComponent";
import eventEmmitter from '../eventEmmitter/EventEmmitter'

class DeleteAtmBtn {
    constructor (id, parent) {
        this.id = id;
        this.parent = parent;
      this.renderBtn = new DeleteAtmBtnComponent(id, parent);
    }
deleteAtm (id) {
   atmsArr.splice(id, 1);
}


}


export default DeleteAtmBtn;