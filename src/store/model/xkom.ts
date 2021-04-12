import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Xkom: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: 'zł',
  labels: {
    inStock: [
      {
        container: '.hvfWK',
        text: ['Dodaj do koszyka'],
      },
    ],
    maxPrice: {
      container: '.jFbqvs',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.dUqtkF',
        text: ['Powiadom o dostępności'],
      },
      {
        container: '.fmqOOM',
        text: ['Czasowo niedostępny'],
      },
    ],
  },
  links: [],
  linksBuilder: {
    builder: getProductLinksBuilder({
      productsSelector: '#listing-container .eYsBmG',
      sitePrefix: 'https://www.x-kom.pl',
      titleSelector: 'h3',
      urlElement: 'a',
      // urlSelector: 'a[href]',
    }),
    urls: [
      {
        series: 'test:series',
        url:
          'https://www.x-kom.pl/g-5/c/346-karty-graficzne-nvidia.html?per_page=90',
      },
      {
        series: '3080',
        url:
          'https://www.x-kom.pl/g-5/c/346-karty-graficzne-nvidia.html?per_page=90&f[1702][178106]=1',
      },
      {
        series: '3090',
        url:
          'https://www.x-kom.pl/g-5/c/346-karty-graficzne-nvidia.html?f[1702][178114]=1',
      },
      {
        series: '3060ti',
        url:
          'https://www.x-kom.pl/g-5/c/346-karty-graficzne-nvidia.html?per_page=90&f[1702][186579]=1',
      },
      {
        series: 'sonyps5c',
        url:
          'https://www.x-kom.pl/g-7/c/2384-konsole.html?f[price][from]=2300&f[price][to]=2900',
      },
    ],
    ttl: 5 * 60 * 1000,
  },
  name: 'X-Kom',
  waitUntil: 'domcontentloaded',
};
