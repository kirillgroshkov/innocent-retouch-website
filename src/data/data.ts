export const D = {
  languages: [
    {
      id: 'en',
      label: 'English',
    },
    {
      id: 'ru',
      label: 'Russian',
    },
  ],
  menus: [
    {
      id: 'top',
      items: [
        {
          pub: false,
          url: '/vavava',
          label: 'vavava',
        },
        {
          pub: true,
          url: '/',
          label: 'fashion/beauty',
        },
        {
          pub: true,
          url: '/still-life',
          label: 'still life',
        },
        {
          pub: true,
          url: '/interior',
          label: 'interior',
        },
        {
          pub: true,
          url: '/contact',
          label: 'contact',
        },
      ],
    },
  ],
  pages: [
    {
      id: 'contact',
      url: '/contact',
      segment: '',
      component: 'contact-page',
    },
    {
      id: 'home',
      url: '/',
      segment: 'fashion_beauty',
      component: 'home-page',
    },
    {
      id: 'interior',
      url: '/interior',
      segment: 'interior',
      component: 'home-page',
    },
    {
      id: 'still',
      url: '/still-life',
      segment: 'still_life',
      component: 'home-page',
    },
    {
      id: 'vavava',
      segment: 'interior',
      component: 'home-page',
      url: '/vavava',
    },
  ],
  imageGroups: [
    {
      id: 'fashion_beauty',
      images: [
        {
          filename: 'fashion_beauty/dv_moshizi_1.jpg',
          alt: 'Henry Moshizi, Damernas Värld',
          res: '1543x2160',
        },
        {
          filename: 'fashion_beauty/dv_moshizi_3.jpg',
          alt: 'Henry Moshizi, Damernas Värld',
          res: '1543x2160',
        },
        {
          alt: 'Henry Moshizi, Damernas Värld',
          res: '1543x2160',
          filename: 'fashion_beauty/dv_moshizi_2.jpg',
        },
        {
          filename: 'fashion_beauty/linn_f_elite_3.jpg',
          alt: 'Morgane Lithander',
          res: '1727x2160',
        },
        {
          alt: 'Morgane Lithander',
          res: '1726x2160',
          filename: 'fashion_beauty/linn_f_elite_2.jpg',
        },
        {
          filename: 'fashion_beauty/linn_f_elite_1.jpg',
          alt: 'Morgane Lithander',
          res: '2704x2160',
        },
        {
          filename: 'fashion_beauty/linn_f_elite_4.jpg',
          alt: 'Morgane Lithander',
          res: '1726x2160',
        },
        {
          alt: 'Morgane Lithander',
          res: '1726x2160',
          filename: 'fashion_beauty/linn_f_elite_5.jpg',
        },
        {
          filename: 'fashion_beauty/nina_holma_model_1.jpg',
          alt: 'Nina Holma',
          res: '1440x2160',
        },
        {
          alt: 'Nina Holma',
          res: '1440x2160',
          filename: 'fashion_beauty/nina_holma_model_2.jpg',
        },
      ],
    },
    {
      id: 'interior',
      images: [
        {
          alt: 'Idha Lindhag, Bar Central Birger',
          res: '1440x2160',
          filename: 'interior/bar_central_birger_5.jpg',
        },
        {
          alt: 'Idha Lindhag, Bar Central Birger',
          res: '1440x2160',
          filename: 'interior/bar_central_birger_2.jpg',
        },
        {
          alt: 'Idha Lindhag, Bar Central Birger',
          res: '1440x2160',
          filename: 'interior/bar_central_birger_3.jpg',
        },
        {
          filename: 'interior/bar_central_birger_4.jpg',
          alt: 'Idha Lindhag, Bar Central Birger',
          res: '1440x2160',
        },
        {
          filename: 'interior/bar_central_birger_1.jpg',
          alt: 'Idha Lindhag, Bar Central Birger',
          res: '1440x2160',
        },
        {
          filename: 'interior/nk_home_2.jpg',
          alt: 'Ida Lindhag, NK Home',
          res: '1709x2160',
        },
        {
          alt: 'Ida Lindhag, NK Home',
          res: '1709x2160',
          filename: 'interior/nk_home_1.jpg',
        },
        {
          filename: 'interior/nk_home_5.jpg',
          alt: 'Ida Lindhag, NK Home',
          res: '1709x2160',
        },
        {
          filename: 'interior/nk_home_6.jpg',
          alt: 'Ida Lindhag, NK Home',
          res: '3418x2160',
        },
        {
          alt: 'Ida Lindhag, NK Home',
          res: '1709x2160',
          filename: 'interior/nk_home_3.jpg',
        },
        {
          alt: 'Ida Lindhag, NK Home',
          res: '1709x2160',
          filename: 'interior/nk_home_4.jpg',
        },
        {
          filename: 'interior/nk_home_7.jpg',
          alt: 'Ida Lindhag, NK Home',
          res: '3418x2160',
        },
      ],
    },
    {
      id: 'still_life',
      images: [
        {
          filename: 'still_life/drink.jpg',
          alt: 'Pontus Lindström',
          res: '1543x2160',
        },
        {
          alt: 'Magnus Cramer',
          res: '1620x2160',
          filename: 'still_life/guerlain.jpg',
        },
        {
          filename: 'still_life/tom_ford_noir.jpg',
          alt: 'Magnus Cramer',
          res: '1620x2160',
        },
        {
          filename: 'still_life/dv_product.jpg',
          alt: 'Olivia Jeczmyk, Damernas Värld',
          res: '1579x2160',
        },
        {
          filename: 'still_life/dv_prada.jpg',
          alt: 'Olivia Jeczmyk, Damernas Värld',
          res: '1652x2160',
        },
        {
          filename: 'still_life/oprah_mag.jpg',
          alt: 'Magnus Cramer, Oprah Magazine',
          res: '3086x2160',
        },
      ],
    },
  ],
}
