import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const OleOle: Store = {
  currency: 'zł',
  labels: {
    maxPrice: {
      container: '.price-normal',
      euroFormat: true,
    },
  },
  links: [],
  linksBuilder: {
    builder: getProductLinksBuilder({
      productsSelector: '.product-row',
      sitePrefix: 'https://www.oleole.pl/',
      titleSelector: '.js-save-keyword',
      // urlSelector: 'a[href]',
    }),
    urls: [
      {
        series: 'test:series',
        url: 'https://www.oleole.pl/karty-graficzne.bhtml',
      },
      {
        series: '3060ti',
        url: 'https://www.oleole.pl/karty-graficzne,od3300do4100.bhtml',
      },
      {
        series: '3080',
        url: 'https://www.oleole.pl/karty-graficzne,od4101do8400.bhtml',
      },
      {
        series: '3090',
        url: 'https://www.oleole.pl/karty-graficzne,od8401do10000.bhtml',
      },
    ],
    ttl: 5 * 60 * 1000,
  },
  name: 'oleole',
  waitUntil: 'domcontentloaded',
};
