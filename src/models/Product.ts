export default class Product {
    id: number;
    name: string;
    quantity: number;
    price: number;
    saleRate: number;
    description: string;
    image: string;
    sale: boolean;

    constructor (id: number, name: string, quantity: number, description: string, price: number,saleRate: number, image: string, sale:boolean) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.description = description;
        this.price = price;
        this.saleRate = saleRate;
        this.image = image;
        this.sale = sale;
    }
}