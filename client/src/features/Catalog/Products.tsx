import { Link } from "react-router-dom";
import { useGetProductsQuery } from "./catalog.services";

function Products() {
    const { data, error, isLoading } = useGetProductsQuery();

    return (
        <div>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    {data.map((p) => (
                        <Link key={p.name} to={`/products/${p.slug}`}>
                            {p.name}
                        </Link>
                    ))}
                </>
            ) : null}
        </div>
    );
}

export default Products;
