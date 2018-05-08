import { stripAndTrim, lookupFailure, getText, getSrc } from "../helpers";

export const name = "bestbuy";
export const hosts = ["www.bestbuy.com"];
export const scrape = async page => {
  const title = await getText("/html/head/title", page);
  const price = await getText("#priceblock-wrapper-wrapper > div.price-block.priceblock-large > div.pucks-and-price.row > div.col-xs-7 > div.price-column > div > div > div > div > div:nth-child(2) > div", page);
  const image = await getSrc("#shop-media-gallery-7e04685c-2001-4514-b30e-bc98d8d2b477 > div > div > div > div.carousel-inner > div > div > div > button", page, true);
  const description = await getText("#long-description", page);

  const data = {
    title,
    price,
    image,
    description
  };

  return data;
};
