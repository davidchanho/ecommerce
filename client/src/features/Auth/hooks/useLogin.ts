import { useEmail } from "../../../hooks/useEmail";
import { usePassword } from "./usePassword";

export function useLogin() {
    const email = useEmail();
    const password = usePassword();

    return {
        email,
        password
    };
}
