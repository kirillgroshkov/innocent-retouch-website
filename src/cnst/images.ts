export interface ImgData {
  full: string
  small: string
  w?: number
  h?: number
  fullw: number
  fullh: number
}

export const images = {
  'fashion-beauty': [
    'fashion_beauty/dv_moshizi_1.jpg', // Henry Moshizi, Damernas Värld
    'fashion_beauty/dv_moshizi_3.jpg',
    'fashion_beauty/dv_moshizi_2.jpg',
    'fashion_beauty/linn_f_elite_3.jpg', // Morgane Lithander
    'fashion_beauty/linn_f_elite_2.jpg',
    'fashion_beauty/linn_f_elite_1.jpg',
    'fashion_beauty/linn_f_elite_4.jpg',
    'fashion_beauty/linn_f_elite_5.jpg',
    'fashion_beauty/nina_holma_model_1.jpg', // Nina Holma
    'fashion_beauty/nina_holma_model_2.jpg',
  ],
  interior: [
    'interior/bar_central_birger_5.jpg', // Idha Lindhag, Bar Central Birger
    'interior/bar_central_birger_2.jpg',
    'interior/bar_central_birger_3.jpg',
    'interior/bar_central_birger_4.jpg',
    'interior/bar_central_birger_1.jpg',
    'interior/nk_home_2.jpg', // Ida Lindhag, NK Home
    'interior/nk_home_1.jpg',
    'interior/nk_home_5.jpg',
    'interior/nk_home_6.jpg',
    'interior/nk_home_3.jpg',
    'interior/nk_home_4.jpg',
    'interior/nk_home_7.jpg',
  ],
  'still-life': [
    'still_life/drink.jpg', // Pontus Lindström
    'still_life/guerlain.jpg', // Magnus Cramer
    'still_life/tom_ford_noir.jpg', // Magnus Cramer
    'still_life/dv_product.jpg', // Olivia Jeczmyk, Damernas Värld
    'still_life/dv_prada.jpg', // Olivia Jeczmyk, Damernas Värld
    'still_life/oprah_mag.jpg', // Magnus Cramer, Oprah Magazine
  ],
}

export const imageSizes = {
  'fashion_beauty/dv_moshizi_1.jpg': '1543x2160',
  'fashion_beauty/linn_f_elite_3.jpg': '1727x2160',
  'interior/nk_home_6.jpg': '3418x2160',
  'interior/nk_home_7.jpg': '3418x2160',
  'interior/nk_home_2.jpg': '1709x2160',
  'still_life/tom_ford_noir.jpg': '1620x2160',
  'still_life/drink.jpg': '1543x2160',
  'still_life/dv_prada.jpg': '1652x2160',
  'fashion_beauty/linn_f_elite_1.jpg': '2704x2160',
  'interior/nk_home_5.jpg': '1709x2160',
  'fashion_beauty/dv_moshizi_2.jpg': '1543x2160',
  'interior/bar_central_birger_4.jpg': '1440x2160',
  'interior/nk_home_1.jpg': '1709x2160',
  'still_life/oprah_mag.jpg': '3086x2160',
  'interior/nk_home_4.jpg': '1709x2160',
  'fashion_beauty/linn_f_elite_4.jpg': '1726x2160',
  'interior/nk_home_3.jpg': '1709x2160',
  'still_life/guerlain.jpg': '1620x2160',
  'fashion_beauty/dv_moshizi_3.jpg': '1543x2160',
  'interior/bar_central_birger_3.jpg': '1440x2160',
  'interior/bar_central_birger_2.jpg': '1440x2160',
  'fashion_beauty/linn_f_elite_2.jpg': '1726x2160',
  'fashion_beauty/linn_f_elite_5.jpg': '1726x2160',
  'interior/bar_central_birger_5.jpg': '1440x2160',
  'fashion_beauty/nina_holma_model_2.jpg': '1440x2160',
  'interior/bar_central_birger_1.jpg': '1440x2160',
  'still_life/dv_product.jpg': '1579x2160',
  'fashion_beauty/nina_holma_model_1.jpg': '1440x2160',
}

export const imagesPrefix = 'https://res.cloudinary.com/kirill'

export function getImgData (segment: string): ImgData[] {
  return images[segment].map(i => {
    const wh = imageSizes[i].split('x')
    return {
      full: `${imagesPrefix}/q_auto:best/${i}`,
      small: `${imagesPrefix}/w_2800,h_1600,c_fit,q_auto:best/${i}`, // :best
      fullw: wh[0],
      fullh: wh[1],
    }
  })
}
