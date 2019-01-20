

export default class DeleteAtmBtnComponent {
    constructor() {

    }
    render (id, parent) {
        parent.innerHTML += this.create(id);
    }

    create (id) {
        return `<button id="${id}" class="deleteAtmBtn">x</button>`
    }

}