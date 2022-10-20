import { Header } from './components/header.js';
import { Main } from './components/main.js';
import { PendingList } from './components/pending-list.js';
import { SerieList } from './components/serie-list.js';
import { WatchedList } from './components/watched-list.js';

console.log('loaded index');
//console.log(tasks);
new Header('.container');
new Main('.container');
new SerieList('main');
new PendingList('main');
new WatchedList('main');
