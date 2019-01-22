import { atmsArr } from '../utils/events'
import DeleteAtmBtnComponent from './DeleteAtmBtnComponent'
import eventEmmitter from '../eventEmmitter/EventEmmitter'
import CommonComponent from '../commonComponent/CommonComponent'

class DeleteAtmBtn {
  constructor (id, parent) {
    this.id = id
    this.parent = parent
    this.renderBtn = new DeleteAtmBtnComponent(this.id, this.parent)
    this.commonComponent = new CommonComponent()
    this.element = this.commonComponent.findIndex(this.id)
    eventEmmitter.on('deleteAtmFromArr', () => {
      this.deleteAtm()
    })
  }
  deleteAtm () {
    let index = atmsArr.find((item) => {
      console.log(item.id)
      console.log(this.id)
      return item.id === this.id
    })
    var indexArr = atmsArr.findIndex(index => { return index })
    console.log(index)
    console.log(indexArr)
    atmsArr.splice(index, 1)
    console.log(atmsArr)
  }
}

export default DeleteAtmBtn
