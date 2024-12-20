import { faker } from "@faker-js/faker/locale/id_ID";


export interface IResListProduct {
    name: string;
    price: number;
    image: string;
}


export const dummyDataListProduct : IResListProduct[] = Array.from({ length: 50 }).map((_, i) => {
    return {
        id: i.toString(),
        name: faker.commerce.productName(),
        price: faker.number.int({min: 10000, max:100000}),
        image: faker.image.url({height: 300, width: 300}),
    };
});