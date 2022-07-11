import { ChangeEvent, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../../components/Button/Button.styles";
import {
    calcCartItemSubtotal,
    calcCartSubtotal,
    totalPrices,
} from "./Cart.helpers";
import { CartContainer, CartHeader, CartItem } from "./Cart.styles";
import { ICartItem } from "./Cart.types";

const cartData: ICartItem[] = [
    {
        product_name: "headphones",
        product_img_src: "https://placeimg.com/640/480/tech",
        product_img_alt: "tech",
        price: 32,
        quantity: 1,
    },
    {
        product_name: "tshirt",
        product_img_src: "https://placeimg.com/640/480/tech",
        product_img_alt: "tech",
        price: 12,
        quantity: 3,
    },
    {
        product_name: "batteries",
        product_img_src: "https://placeimg.com/640/480/tech",
        product_img_alt: "tech",
        price: 5,
        quantity: 2,
    },
];

function Cart() {
    const [data, setData] = useState(cartData);

    const onCartItem = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const newData = [...data];
        newData[index].quantity = parseInt(e.target.value);
        setData(newData);
    };

    const onRemove = (index: number) => {
        const newData = [...data].filter((d, i) => i !== index);
        setData(newData);
    };

    return (
        <CartContainer>
            <caption>{cartData.length} items in cart</caption>
            <CartHeader>
                <tr>
                    <th></th>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Subtotal</th>
                    <th></th>
                </tr>
            </CartHeader>
            <tbody>
                {data.map((c, i) => {
                    return (
                        <CartItem key={c.product_name}>
                            <td>
                                <img
                                    src={c.product_img_src}
                                    alt={c.product_img_alt}
                                    width={64}
                                    height={64}
                                />
                            </td>
                            <td>
                                <p>{c.product_name}</p>
                            </td>
                            <td>
                                <input
                                    min="0"
                                    type="number"
                                    value={c.quantity}
                                    onChange={(e) => onCartItem(e, i)}
                                />
                            </td>
                            <td>{calcCartItemSubtotal(c)}</td>
                            <td>
                                <Button
                                    onClick={() => onRemove(i)}
                                    noBorder
                                    danger
                                >
                                    <AiOutlineClose />
                                </Button>
                            </td>
                        </CartItem>
                    );
                })}
            </tbody>
            <tfoot>
                <p>Subtotal {calcCartSubtotal(cartData)}</p>
                <p>Shipping </p>
                <p>Total {totalPrices(cartData)}</p>
            </tfoot>
        </CartContainer>
    );
}

export default Cart;
