import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../features/Auth/Auth";
import CatalogPage from "../features/Catalog/CatalogPage";
import ProductPage from "../features/Catalog/ProductPage";
import Dashboard from "../features/Dashboard/Dashboard";
import NoMatchPage from "../features/NoMatchPage/NoMatchPage";
import MainLayout from "../layouts/MainLayout/MainLayout";

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Auth />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="/me" element={<Dashboard />} />
                    <Route path="/products/:slug" element={<ProductPage />} />
                    <Route path="*" element={<NoMatchPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
