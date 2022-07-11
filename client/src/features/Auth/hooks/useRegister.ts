import { useLogin } from "./useLogin";

export function useRegister() {
    const login = useLogin();

    return {
        ...login,
    };
}
