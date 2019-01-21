

export default class CommonComponent {
    constructor () {

    }

    strToDom(template) {
        let [ , openTag, content,  ] = /<(.+?)>(.+)<\/.+>/.exec(template);
        console.log(openTag);
        console.log(content);
        let tagName = /\w+/.exec(openTag);
        console.log(tagName[0]);
        let element = document.createElement(tagName[0]);
        let params = /(.+?\s(.+?))="(.+?)"/g;
        let paramsRes;
        while(paramsRes = params.exec(openTag)){
            element.setAttribute(paramsRes[2], paramsRes[3]);
        }
        element.innerHTML = content.trim();
        return element;
    }
}