import { AiFillShopping } from "react-icons/ai";
import Button from "../../components/Button/Button";

import "./header.css";

type User = {
    name: string;
};

interface HeaderProps {
    user?: User;
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}

export const Header = ({
    user,
    onLogin,
    onLogout,
    onCreateAccount,
}: HeaderProps) => (
    <header>
        <div className="wrapper">
            <div>
                <AiFillShopping size={28} />
                <h1>Shop</h1>
            </div>
            <div>
                {user ? (
                    <>
                        <span className="welcome">
                            Welcome, <b>{user.name}</b>!
                        </span>
                        <Button size="small" onClick={onLogout}>
                            Log out
                        </Button>
                    </>
                ) : (
                    <>
                        <Button size="small" onClick={onLogin}>
                            Log in
                        </Button>
                        <Button primary size="small" onClick={onCreateAccount}>
                            Sign up
                        </Button>
                    </>
                )}
            </div>
        </div>
    </header>
);
