
export default class CommonComponent {
  constructor () {

  }

  strToDom (template) {
    let [ , openTag, content ] = /<(.+?)>(.+)<\/.+>/.exec(template)
    let tagName = /\w+/.exec(openTag)
    let element = document.createElement(tagName[0])
    let params = /\s(.+?)="(.+?)"/g
    let paramsRes
    while (paramsRes = params.exec(openTag)) {
      element.setAttribute(paramsRes[1], paramsRes[2])
    }
    element.innerHTML = content.trim()
    return element
  }

  findIndex (id) {
    return /\d/.exec(id)
  }
}
