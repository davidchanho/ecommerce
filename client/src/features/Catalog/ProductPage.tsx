import { Link, useParams } from "react-router-dom";
import { useGetProductBySlugQuery } from "./catalog.services";

function ProductPage() {
    const params = useParams();

    const { data, error, isLoading } = useGetProductBySlugQuery(
        params.slug as string
    );

    if (error) return <>Product could not be loaded</>;

    if (isLoading) return <>Loading...</>;

    return (
        <>
            <div>
                /{" "}
                <Link to={`${data?.category_name}`}>{data?.category_name}</Link>{" "}
                / <Link to={`${data?.name}`}>{data?.name}</Link>
            </div>

            {data?.name}
            {data?.price}
        </>
    );
}

export default ProductPage;
