import { SERIES } from '../models/series.js';
import { Store } from '../services/storage.js';
import { Component } from './component.js';
import { ItemSerie } from './item-serie.js';
export class WatchedList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.storeService = new Store('Serie');
        if (this.storeService.getStore().length === 0) {
            this.series = [...SERIES];
            this.storeService.setStore(this.series);
        }
        else {
            this.series = this.storeService.getStore();
        }
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        let watched = this.series.filter((serie) => serie.watched === true);
        let template = `<section class="series-watched">
                    <h3 class="subsection-title">Watched series</h3>
                    <p class="info">You have watched ${watched.length} series</p>
                    <ul class="series-list">`;
        watched.forEach((item) => {
            template += new ItemSerie('', item, this.handlerEraser.bind(this), this.handlerWatched.bind(this)).template;
        });
        template += `</ul>
        </section>`;
        return template;
    }
    handlerEraser(deletedID) {
        this.series = this.series.filter((item) => item.id !== deletedID);
        this.manageComponent();
    }
    handlerWatched(completedID) {
        const i = this.series.findIndex((item) => item.id === completedID);
        this.series[i].watched = !this.series[i].watched;
        console.log(this.series);
    }
}
