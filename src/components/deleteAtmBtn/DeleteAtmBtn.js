import DeleteAtmBtnComponent from './DeleteAtmBtnComponent'
import CommonComponent from '../commonComponent/CommonComponent'

class DeleteAtmBtn {
  constructor (id, parent) {
    this.id = id
    this.parent = parent
    this.renderBtn = new DeleteAtmBtnComponent(this.id, this.parent)
    this.commonComponent = new CommonComponent()
    this.element = this.commonComponent.findIndex(this.id)
  }
}

export default DeleteAtmBtn
