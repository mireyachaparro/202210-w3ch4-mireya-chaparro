export class Component {
    render(selector, template) {
        if (!selector)
            return false;
        const element = document.querySelector(selector);
        if (element === null)
            return false;
        element.innerHTML = template;
        return true;
    }
    renderAdd(selector, template) {
        //pinta dentro
        const element = document.querySelector(selector);
        if (element === null)
            return;
        element.innerHTML += template;
        return true;
    }
    renderOuter(selector, template) {
        //pinta encima
        const element = document.querySelector(selector);
        if (element === null)
            return;
        element.outerHTML = template;
        return true;
    }
}
