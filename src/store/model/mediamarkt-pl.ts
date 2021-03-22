import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const MediaMarktPL: Store = {
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
      productsSelector: '.m-offerBox_content',
      sitePrefix: 'https://mediamarkt.pl',
      titleSelector: '.b-ofr_headDataTitle',
      // urlSelector: 'a[href]',
    }),
    urls: [
      {
        series: 'test:series',
        url:
          'https://mediamarkt.pl/komputery-i-tablety/czesci-komputerowe/obudowy-komputerowe',
      },
      {
        series: '3060ti',
        url:
          'https://mediamarkt.pl/komputery-i-tablety/czesci-komputerowe/karty-graficzne?querystring=karty+graficzne&priceFilter%5Bmin%5D=3300&priceFilter%5Bmax%5D=4100',
      },
      {
        series: '3080',
        url:
          'https://mediamarkt.pl/komputery-i-tablety/czesci-komputerowe/karty-graficzne?querystring=karty+graficzne&priceFilter%5Bmin%5D=4101&priceFilter%5Bmax%5D=8400',
      },
      {
        series: '3090',
        url:
          'https://mediamarkt.pl/komputery-i-tablety/czesci-komputerowe/karty-graficzne?querystring=karty+graficzne&priceFilter%5Bmin%5D=8401&priceFilter%5Bmax%5D=1000',
      },
    ],
    ttl: 5 * 60 * 1000,
  },
  name: 'mediamarkt-pl',
  waitUntil: 'domcontentloaded',
};
