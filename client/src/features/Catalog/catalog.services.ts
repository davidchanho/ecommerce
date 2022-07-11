import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ICategory {
    name: string;
    banner_image: string;
    slug?: string;
}

export interface IProduct {
    name: string;
    sku: string;
    slug?: string;
    quantity: number;
    price: number;
    image: string;
    category_name: string;
}

export const catalogApi = createApi({
    reducerPath: "catalogApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => "products",
        }),
        getProductBySlug: builder.query<IProduct, string>({
            query: (slug: string) => `products/${slug}`,
        }),
        getCategories: builder.query<ICategory[], void>({
            query: () => "categories",
        }),
        getCategoryBySlug: builder.query<ICategory, string>({
            query: (slug: string) => `categories/${slug}`,
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductBySlugQuery,
    useGetCategoriesQuery,
    useGetCategoryBySlugQuery,
} = catalogApi;
