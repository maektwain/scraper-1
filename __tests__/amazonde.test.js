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
            "https://www.amazon.de/gp/product/B00UYZUU7E/ref=s9u_simh_gw_i5?ie=UTF8&pd_rd_i=B00UYZUU7E&pd_rd_r=8c84b6e1-524c-11e8-9cf7-5d44af51fc66&pd_rd_w=xdm6d&pd_rd_wg=Htx6j&pf_rd_m=A3JWKAKR8XB7XF&pf_rd_s=&pf_rd_r=CYNA5BJ6J978G0MQV9H3&pf_rd_t=36701&pf_rd_p=1c175abe-9bc7-490b-bbe1-2caf7e752c98&pf_rd_i=desktop"
        );

        await schema.isValid(data).then(result => {
            console.log(data);
            return expect(result).toBe(true);
        });
    },
    30000
);
