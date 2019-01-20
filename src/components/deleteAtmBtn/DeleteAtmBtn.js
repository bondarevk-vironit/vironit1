import {atmsArr} from "../utils/events";
import DeleteAtmBtnComponent from "./DeleteAtmBtnComponent";

class DeleteAtmBtn {
    constructor () {

      this.renderBtn = new DeleteAtmBtnComponent();
    }
deleteAtm (id) {
   atmsArr.splice(id, 1);
}


}



export default DeleteAtmBtn;