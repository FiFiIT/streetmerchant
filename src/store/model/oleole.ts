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
        url:
          'https://www.oleole.pl/karty-graficzne,typ-chipsetu!nvidia-geforce,od4000do6500.bhtml',
      },
      {
        series: '3080',
        url:
          'https://www.oleole.pl/karty-graficzne,typ-chipsetu!nvidia-geforce,od7000do10000.bhtml',
      },
      {
        series: '3090',
        url:
          'https://www.oleole.pl/karty-graficzne,typ-chipsetu!nvidia-geforce,od8000do10000.bhtml',
      },
      {
        series: 'sonyps5c',
        url: 'https://www.oleole.pl/konsole-playstation-5.bhtml',
      },
    ],
    ttl: 5 * 60 * 1000,
  },
  name: 'oleole',
  waitUntil: 'domcontentloaded',
};
