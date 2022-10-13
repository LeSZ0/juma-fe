import React from 'react';
import { MdHome, MdShoppingBasket, MdCardGiftcard, MdOutlineCollections, MdOutlineInventory2, MdSell } from 'react-icons/md';


interface Link {
  key: string;
  title?: string;
  links: {
    name: string,
    icon: any,
    alias?: string
  }[]
}

export const links: Link[] = [
    {
      key: 'dashboard',
      links: [
        {
          name: 'home',
          alias: 'Home',
          icon: <MdHome />,
        },
      ],
    },
    {
      key: 'orders',
      links: [
        {
          name: 'orders',
          alias: 'Pedidos',
          icon: <MdShoppingBasket />,
        },
      ],
    },
    {
      key: 'items',
      title: 'Productos',
      links: [
        {
          name: 'items',
          alias: 'Todos los productos',
          icon: <MdSell />,
        },
        {
          name: 'inventory',
          alias: 'Inventario',
          icon: <MdOutlineInventory2 />,
        },
        {
          name: 'collections',
          alias: 'Colecciones',
          icon: <MdOutlineCollections />,
        },
      ],
    },
    {
      title: 'Descuentos',
      key: 'gift-cards',
      links: [
        {
          name: 'gift-cards',
          alias: 'Tarjetas de regalo',
          icon: <MdCardGiftcard />,
        },
      ],
    },
  ];