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
      {
        series: 'sonyps5c',
        url:
          'https://www.euro.com.pl/search/playstation-5,od2300.bhtml?keyword=konsola%20sony%20playstation%205',
      },
    ],
    ttl: 5 * 60 * 1000,
  },
  name: 'rtveuroagd',
  waitUntil: 'domcontentloaded',
};
