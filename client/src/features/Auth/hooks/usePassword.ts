import { ChangeEvent, FormEvent, useState } from "react";

export function usePassword() {
    const [password, setPassword] = useState("");
    const [hasError, setHasError] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const [error, setError] = useState("");

    const validatePassword = (password: string): boolean => {
        const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
        return regex.test(password);
    };

    const submitPassword = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validatePassword(password)) {
            setPassword("");
            setIsEmpty(true);
            setHasError(false);
        } else {
            setHasError(true);
            setError("Please enter a valid password address.");
        }
    };

    const onPassword = (e: ChangeEvent<HTMLInputElement>) => {
        password.length === 0 ? setIsEmpty(true) : setIsEmpty(false);
        setPassword(e.target.value);
    };

    return {
        password,
        error,
        hasError,
        isEmpty,
        submitPassword,
        onPassword,
    };
}
