import { useState } from "react";
import { Form, FormControl, Input, Label } from "../../components/Input/Input";

function CreateProduct() {
    const [form, setForm] = useState({
        name: "",
        sku: "",
        quantity: 0,
        price: 0,
        image: "",
        category_name: "",
    });

    return (
        <Form>
            <FormControl>
                <Label>Name</Label>
                <Input />
            </FormControl>

            <FormControl>
                <Label>SKU</Label>
                <Input />
            </FormControl>

            <FormControl>
                <Label>Quantity</Label>
                <Input />
            </FormControl>

            <FormControl>
                <Label>Price</Label>
                <Input />
            </FormControl>

            <FormControl>
                <Label>Image</Label>
                <Input />
            </FormControl>

            <FormControl>
                <Label>Category Name</Label>
                <Input />
            </FormControl>
        </Form>
    );
}

export default CreateProduct;
