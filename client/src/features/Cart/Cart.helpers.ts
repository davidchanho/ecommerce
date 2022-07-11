import { ICart, ICartItem } from "./Cart.types";

export const formatPrice = (price: number) => {
    return price.toFixed(2);
};

export const calcCartItemSubtotal = (item: ICartItem) => {
    const { price, quantity } = item;
    return price * quantity;
};

export const calcCartSubtotal = (cart: ICart) => {
    let subtotal: number = 0;

    cart.forEach((item) => {
        subtotal += calcCartItemSubtotal(item);
    });

    return subtotal;
};

export const calcShipping = (total: number) => {
    return total * 0.08;
};

export const calcTaxes = (total: number) => {
    return total * 0.08;
};

export const totalPrices = (cart: ICart) => {
    const total = calcCartSubtotal(cart);
    const shipping = calcShipping(total);
    const taxes = calcTaxes(total);
    return formatPrice(total + shipping + taxes);
};
