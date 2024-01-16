import {Store} from './store';

export const NvidiaPL: Store = {
    currency: 'zł',
    labels: {
        inStock: {
            container: ".featured-container-lg button",
            text: ['Kup Teraz']
        },
        outOfStock: {
            container: "a button.stock-grey-out",
            text: ['']
        }
    },
    links: [
        {
            brand: 'nvidia',
            model: 'founders edition',
            series: '4090',
            url: 'https://store.nvidia.com/pl-pl/geforce/store/gpu/?page=1&limit=9&locale=pl-pl&gpu=RTX%204090&category=GPU&manufacturer=NVIDIA&manufacturer_filter=NVIDIA~1,ASUS~2,GIGABYTE~1,INNO3D~1,ZOTAC~2'
        }
    ],
    name: 'nvidia-pl'
}