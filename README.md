# Scraper
Node.js based scraper using headless chrome which allows scraping for websites 

1. Amazon De
2. Amazon com
3. Walmart
4. Bestbuy



[![version](https://img.shields.io/npm/v/@jonstuebe/scraper.svg?style=flat-square)](https://www.npmjs.com/package/@jonstuebe/scraper) [![dependecies](https://david-dm.org/jonstuebe/scraper.svg)](https://www.npmjs.com/package/@jonstuebe/scraper) [![build](https://travis-ci.org/jonstuebe/scraper.svg?branch=master)](https://www.npmjs.com/package/@jonstuebe/scraper)

## Installation

```bash
$ npm install cashpay-scraper
```

## Features

  * Scrape top ecommerce sites (Amazon, Walmart, Target, BestBuy)
  * Return basic product information (title, price, image, description)
  * Easy to use API

## API
Simply require the package and initialize with a url and pass a callback function to receive the data.

#### es5
```js
const Scraper = require("cashpay-scraper");

// run inside of an async function
(async () => {
  const data = await Scraper.scrapeAndDetect("http://www.amazon.com/gp/product/B00X4WHP5E/");
  console.log(data);
})();
```

#### es6
```js
import Scraper from "cashpay-scraper";

// run inside of an async function
(async () => {
  const data = await Scraper('http://www.amazon.com/gp/product/B00X4WHP5E/');
  console.log(data);
})();
```

#### with promises
```js
import Scraper from "cashpay-scraper";

Scraper('http://www.amazon.com/gp/product/B00X4WHP5E/').then(data => {
  console.log(data)
});
```

#### custom scrapers

```js
const Scraper = require("cashpay-scraper");

(async () => {
  const site = {
    name: "npm",
    hosts: ["www.npmjs.com"],
    scrape: async page => {
      const name = await Scraper.getText("div.content-column > h1 > a", page);
      const version = await Scraper.getText(
        "div.sidebar > ul:nth-child(2) > li:nth-child(2) > strong",
        page
      );
      const author = await Scraper.getText(
        "div.sidebar > ul:nth-child(2) > li.last-publisher > a > span",
        page
      );

      return {
        name,
        version,
        author
      };
    }
  };

  const data = await Scraper.scrape(
    "https://www.npmjs.com/package/lodash",
    site
  );
  console.log(data);
})();

```

## Todos

  * Need to add ability to run a test to see if markup has changed, and if so disable the store selectors and fallback to the generic scraper.



## License

  [MIT](LICENSE)