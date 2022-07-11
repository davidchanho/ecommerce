import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { logout } from "../../app/user";
import { Header } from "../Header/Header";
import { MainLayoutContainer } from "./MainLayout.styles";

type User = {
    name: string;
};

const MainLayout = () => {
    const [user, setUser] = useState<User>();

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <MainLayoutContainer>
            <Header
                user={user}
                onLogin={() => setUser({ name: "Jane Doe" })}
                onLogout={handleLogout}
                onCreateAccount={() => setUser({ name: "Jane Doe" })}
            />
            <aside>asf</aside>
            <main>
                <Outlet />
            </main>
        </MainLayoutContainer>
    );
};

export default MainLayout;
