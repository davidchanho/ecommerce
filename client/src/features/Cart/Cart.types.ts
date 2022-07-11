export interface ICartItem {
    product_name: string;
    product_img_src: string;
    product_img_alt: string;
    price: number;
    quantity: number;
}

export type ICart = ICartItem[];
