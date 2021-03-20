import {Store} from './store';

export const AmazonSg: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['enter the characters you see below'],
    },
    inStock: [
      {
        container: '#add-to-cart-button',
        text: ['add to cart'],
      },
      {
        container: '#buy-now-button',
        text: ['buy now'],
      },
    ],
    maxPrice: {
      container: '#priceblock_ourprice',
    },
  },
  links: [],
  name: 'amazon-sg',
};
