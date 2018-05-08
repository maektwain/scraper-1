import striptags from "striptags";
import Promise from "bluebird";

export const stripAndTrim = val => {
  return striptags(val).trim();
};

export const lookupFailure = () => {
  return null;
};

export const getText = async (selector, page) => {
  const data = await page
    .$eval(selector, e => e.innerHTML)
    .catch(lookupFailure);

  return stripAndTrim(data);
};

export const getSrc = async (selector, page, wait = false) => {
  if (wait) {
    await page
      .waitForSelector(selector, { visible: true, timeout: 17500 })
      .catch(lookupFailure);
  }
  return await page.$eval(selector, e => e.src).catch(lookupFailure);
};
