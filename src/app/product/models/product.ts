export class Product {
    id: number;
    name: string;
    year: number;
    price: number;
    weight: string;
    //foreign key to brands api
    brandId: number;
}
