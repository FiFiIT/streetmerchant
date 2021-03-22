import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const AmazonPL: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: 'zł',
  labels: {
    captcha: {
      container: 'body',
      text: ['wprowadź znaki, które widzisz poniżej'],
    },
    inStock: [
      {
        container: '#add-to-cart-button',
        text: ['Dodaj do koszyka'],
      },
      {
        container: '#buy-now-button',
        text: ['Kup teraz'],
      },
    ],
    maxPrice: {
      container: '#priceblock_ourprice',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '#availability',
        text: ['Chwilowo niedostępne.', 'Obecnie niedostępny.'],
      },
      {
        container: '#backInStock',
        text: ['Obecnie niedostępny.'],
      },
    ],
  },
  links: [],
  linksBuilder: {
    builder: getProductLinksBuilder({
      productsSelector: '.s-result-list .s-result-item.s-asin',
      sitePrefix: 'https://www.amazon.pl',
      titleSelector: '.a-link-normal.a-text-normal',
      // urlSelector: 'a[href]',
    }),
    urls: [
      {
        series: '3080',
        url:
          'https://www.amazon.pl/s?i=electronics&bbn=20788599031&rh=n%3A20788599031%2Cp_n_feature_three_browse-bin%3A20900049031%2Cp_6%3AA2R2221NX79QZP%2Cp_36%3A300000-&dc&qid=1616349509&rnid=20900476031&ref=sr_nr_p_36_1',
      },
    ],
  },
  name: 'amazon-pl',
  waitUntil: 'domcontentloaded',
};
