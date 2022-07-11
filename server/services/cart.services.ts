import { client } from "../config/redis";
import { ICartItem } from "../utils/types/cart.types";
import { cartKey } from "./../utils/helpers/keys";

class CartServices {
    async addToCart(session: string, item: ICartItem) {
        await client.hSet(cartKey(session), {
            name: item.name,
            quantity: item.quantity,
        });
    }

    async getCart(session: string) {
        try {
            const result = await client.hGetAll(cartKey(session));

            if (Object.keys(result).length === 0) {
                throw new Error("Cart not found");
            }

            return {
                ...result,
                quantity: parseInt(result.quantity),
            };
        } catch (error) {
            throw new Error("Cart not found");
        }
    }

    async removeCartItem(session: string, item: ICartItem) {
        await client.hDel(cartKey(session), item.name);
    }

    async removeCart(session: string) {
        return await client.del(cartKey(session));
    }

    async getCartCount(session: string) {
        return await client.hLen(cartKey(session));
    }
}

export default CartServices;
