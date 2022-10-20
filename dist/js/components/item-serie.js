import { Component } from './component.js';
export class ItemSerie extends Component {
  constructor(selector, item, handleDelete, handleChange) {
    super();
    this.selector = selector;
    this.item = item;
    this.handleDelete = handleDelete;
    this.handleChange = handleChange;
    this.manageComponent();
  }
  manageComponent() {
    this.template = this.createTemplate();
    this.render(this.selector, this.template);
    setTimeout(() => {
      document
        .querySelector(`${this.item.id}`)
        .addEventListener('click', () => {
          this.handleDelete(this.item.id);
        });
      document
        .querySelector(`${this.item.id}`)
        .addEventListener('change', () => {
          this.handleChange(this.item.id);
        });
    }, 100);
  }
  createTemplate() {
    return `<li class="serie">
              <img
                class="serie__poster"
                src="${this.item.poster}"
                alt="${this.item.name} poster"
              />
              <h4 class="serie__title">${this.item.name}</h4>
              <p class="serie__info">${this.item.creator} (${this.item.year})</p>
              <ul class="score">
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="1/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="2/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="3/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="4/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="5/5"></i>
                </li>
              </ul>
              <i class="fas fa-times-circle icon--delete"></i>
            </li>
            `;
  }
}
