export const createEleman = (parent, tag, hasText, içerik) => {
    const element = document.createElement(tag);
    if (hasText) {
        const elementText = document.createTextNode(içerik);
        element.append(elementText);
    }
    parent.append(element);

    if(tag == "table" || tag == "tr" || tag == "th" || tag == "td"){
        element.style.border = "1px solid black";
    }

    return element;
}