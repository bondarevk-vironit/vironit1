export default class CommonComponent {
  strToDom (template) {
    let [ , openTag, content ] = /<(.+?)>(.+)<\/.+>/.exec(template)
    let tagName = /\w+/.exec(openTag)
    let element = document.createElement(tagName[0])
    let params = /\s(.+?)="(.+?)"/g
    let paramsRes
    while (paramsRes = params.exec(openTag) /* переписать так чтобы тут не было присваивания */) {
      element.setAttribute(paramsRes[1], paramsRes[2])
    }
    element.innerHTML = content.trim()
    return element
  }

  findIndex (id) {
    return /\d/.exec(id)
  }
}
