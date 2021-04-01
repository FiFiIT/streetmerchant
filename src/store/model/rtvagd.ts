import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const RtvEuroAgd: Store = {
  currency: 'zł',
  labels: {
    maxPrice: {
      container: '.m-priceBox_price',
      euroFormat: true,
    },
  },
  links: [],
  linksBuilder: {
    builder: getProductLinksBuilder({
      productsSelector: '.product-for-list',
      sitePrefix: 'https://mediamarkt.pl',
      titleSelector: '.js-save-keyword',
      // urlSelector: 'a[href]',
    }),
    urls: [
      {
        series: 'test:series',
        url: 'https://www.euro.com.pl/karty-graficzne.bhtml',
      },
      {
        series: '3060ti',
        url:
          'https://www.euro.com.pl/karty-graficzne,typ-chipsetu!geforce-rtx-3060-ti.bhtml',
      },
      {
        series: '3080',
        url: 'https://www.euro.com.pl/karty-graficzne,od4100do8400.bhtml',
      },
      {
        series: '3090',
        url: 'https://www.euro.com.pl/karty-graficzne,od8401do10000.bhtml',
      },
    ],
    ttl: 5 * 60 * 1000,
  },
  name: 'rtveuroagd',
  waitUntil: 'domcontentloaded',
};
