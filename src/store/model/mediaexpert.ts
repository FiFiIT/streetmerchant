import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const MediExpert: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: 'zł',
  labels: {
    inStock: [
      {
        container: '.c-offerBox_row .is-last',
        text: ['DO KOSZYKA'],
      },
    ],
    maxPrice: {
      container: '.a-price_price',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.is-availabilityNotify',
        text: ['Powiadom'],
      },
    ],
  },
  links: [],
  linksBuilder: {
    builder: getProductLinksBuilder({
      productsSelector: '.c-offerBox',
      sitePrefix: 'https://www.mediaexpert.pl',
      titleSelector: '.is-secondary',
      // urlSelector: 'a[href]',
    }),
    urls: [
      {
        series: 'test:series',
        url:
          'https://www.mediaexpert.pl/komputery-i-tablety/podzespoly-komputerowe/karty-graficzne/cena_.2000?limit=5',
      },
      {
        series: '3060ti',
        url:
          'https://www.mediaexpert.pl/komputery-i-tablety/podzespoly-komputerowe/karty-graficzne/producent-chipsetu_nvidia/model_geforce-rtx-3060-ti',
      },
      {
        series: '3080',
        url:
          'https://www.mediaexpert.pl/komputery-i-tablety/podzespoly-komputerowe/karty-graficzne/producent-chipsetu_nvidia/model_geforce-rtx-3080',
      },
      {
        series: '3090',
        url:
          'https://www.mediaexpert.pl/komputery-i-tablety/podzespoly-komputerowe/karty-graficzne/producent-chipsetu_nvidia/model_geforce-rtx-3090',
      },
    ],
    ttl: 5 * 60 * 1000,
  },
  name: 'mediaexpert',
  waitUntil: 'domcontentloaded',
};
