const Scraper = require("../lib");
const yup = require("yup");

test(
  "adding",
  async () => {
    const schema = yup.object().shape({
      title: yup.string().required(),
      price: yup.string().required(),
      image: yup.string().required(),
      description: yup.string().required()
    });

    const data = await Scraper.scrapeAndDetect(
      "https://www.bestbuy.com/site/apple-apple-watch-series-3-gps-38mm-gold-aluminum-case-with-pink-sand-sport-band-gold-aluminum/5706652.p?skuId=5706652"
    );

    await schema.isValid(data).then(result => {
        console.log(data);
      return expect(result).toBe(true);
    });
  },
  30000
);
