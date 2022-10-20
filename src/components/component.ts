export abstract class Component {
  render(selector: string, template: string) {
    if (!selector) return false;
    const element = document.querySelector(selector);
    if (element === null) return false;
    element.innerHTML = template;
    return true;
  }
  renderAdd(selector: string, template: string) {
    //pinta dentro
    const element = document.querySelector(selector);
    if (element === null) return;
    element.innerHTML += template;
    return true;
  }
  renderOuter(selector: string, template: string) {
    //pinta encima
    const element = document.querySelector(selector);
    if (element === null) return;
    element.outerHTML = template;
    return true;
  }
}

export interface IComponent {
  //esto no se debe guardar aqui!!!!!!
  createTemplate: () => string;
  manageComponent: () => void;
}
