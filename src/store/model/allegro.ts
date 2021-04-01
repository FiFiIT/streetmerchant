import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Allegro: Store = {
  currency: 'zł',
  labels: {
    captcha: {
      container: 'captcha__human__container',
      text: ['Chcemy się upewnić, że nie jesteś robotem.'],
    },
    maxPrice: {
      container: '._9a071_1tOgC > div > span:first-child',
      euroFormat: true,
    },
  },
  links: [],
  linksBuilder: {
    builder: getProductLinksBuilder({
      productsSelector: 'article.mx7m_1',
      sitePrefix: '',
      titleSelector: 'a._w7z6o',
      // urlSelector: 'a[href]',
    }),
    urls: [
      {
        series: '3090',
        url:
          'https://allegro.pl/kategoria/podzespoly-komputerowe-karty-graficzne-260019?string=3090&seria=GeForce%20RTX%203xxx&bmatch=cl-e2101-d3681-c3682-80-ele-1-4-0319',
      },
    ],
    ttl: 5 * 60 * 1000,
  },
  name: 'allegro',
  waitUntil: 'domcontentloaded',
};
