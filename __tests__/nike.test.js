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
            "https://www.nike.com/es/t/air-max-1-zapatillas-GjP8rz/AH8145-104"
        );

        await schema.isValid(data).then(result => {
            console.log(data);
            return expect(result).toBe(true);
        });
    },
    30000
);
