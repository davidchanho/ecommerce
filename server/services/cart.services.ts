import { client } from "../config/redis";

interface ICartItem {
    
}

class CartServices {
    constructor() {}

    async add_to_cart() {
        await client.HSET("cart:1", "name", "t-shirt");
    }

    async get_to_cart() {
        await client.HGET("cart:1", "name");
    }
}

export default CartServices;
