import { stripAndTrim, lookupFailure, getText, getSrc } from "../helpers";

export const name = "amazonde";
export const hosts = ["www.amazon.de"];
export const scrape = async page => {
    const title = await getText("#title", page);
    const price = await getText("#olp_feature_div > div > span > span", page);
    const image = await getSrc("#landingImage", page);
    const description = await getText("#feature-bullets > ul", page);

    const data = {
        title,
        price,
        image,
        description
    };

    return data;
};
