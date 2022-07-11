import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function Auth() {
    const [login, setLogin] = useState(false);

    const onSwitch = () => setLogin(!login);

    return (
        <>
            {login ? (
                <Login onSwitch={onSwitch} />
            ) : (
                <Register onSwitch={onSwitch} />
            )}
            
        </>
    );
}

export default Auth;
