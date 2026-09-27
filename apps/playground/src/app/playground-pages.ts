import PlaygroundDatetimePage from '../modules/playground/pages/playground-datetime-page';
import PlaygroundZTablePage from '../modules/playground/pages/playground-ztable-page';

/** Add a page here to give it a route and a link in the playground toolbar. */
export const playgroundPages = [
  { path: '/ztable', label: 'ZTable', component: PlaygroundZTablePage },
  { path: '/datetime', label: 'Date Time', component: PlaygroundDatetimePage },
];
