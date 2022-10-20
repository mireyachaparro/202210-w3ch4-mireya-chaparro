import { ISeries, SERIES } from '../models/series.js';
import { Store } from '../services/storage.js';
import { Component } from './component.js';
import { ItemSerie } from './item-serie.js';

export class PendingList extends Component {
  template!: string;
  series: Array<ISeries>;
  storeService: Store<ISeries>;
  constructor(public selector: string) {
    super();
    this.storeService = new Store('Serie');

    if (this.storeService.getStore().length === 0) {
      this.series = [...SERIES];
      this.storeService.setStore(this.series);
    } else {
      this.series = this.storeService.getStore();
    }
    this.manageComponent();
  }

  manageComponent() {
    this.template = this.createTemplate();
    this.render(this.selector, this.template);
  }

  createTemplate() {
    let template = `<section class="series-pending">
                    <h3 class="subsection-title">Pending series</h3>
                    <p class="info">You have 4 series pending to watch</p>
                    <ul class="series-list">`;
    //FILTRO PARA QUE SALGAN LAS PENDIENTES                    this.series = this.series.filter((serie) => (serie.watched = false));
    this.series.forEach((item: ISeries) => {
      template += new ItemSerie(
        '',
        item,
        this.handlerEraser.bind(this),
        this.handlerWatched.bind(this)
      ).template;
    });
    template += `</ul>
        </section>`;
    return template;
  }

  handlerEraser(deletedID: number) {
    this.series = this.series.filter((item) => item.id !== deletedID);
    this.manageComponent();
  }

  handlerWatched(completedID: number) {
    const i = this.series.findIndex((item) => item.id === completedID);
    this.series[i].watched = !this.series[i].watched;
    console.log(this.series);
  }
}
