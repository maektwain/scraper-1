import { stripAndTrim, lookupFailure, getText, getSrc } from "../helpers";

export const name = "nike";
export const hosts = ["www.nike.com"];
export const scrape = async page => {
    const title = await getText("head > title", page);
    const price = await getText("#PDP > div > div:nth-child(2) > div.d-lg-ib.mb0-sm.mb8-lg.u-full-width.pt5-sm.prl6-sm.pb5-sm > div.ncss-base.ta-sm-r.fs16-sm > div > div", page);
    const image = await getSrc("#PDP > div > div:nth-child(2) > div.css-1jldkv2 > div:nth-child(1) > div > div > div.d-lg-h.bg-white.react-carousel > div > div.slider-container.horizontal.react-carousel-slides > ul > li.slide.selected > div > picture:nth-child(2) > img", page, true);
    const description = await getText("#RightRail > div > div.pt4-sm.prl6-sm.prl0-lg > div.description-preview > p", page);

    const data = {
        title,
        price,
        image,
        description
    };

    return data;
};
