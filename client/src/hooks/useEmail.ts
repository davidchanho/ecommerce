import { ChangeEvent, FormEvent, useState } from "react";

export function useEmail() {
    const [email, setEmail] = useState("");

    const [isEmpty, setIsEmpty] = useState(true);

    const [errorMessage] = useState("Please enter a valid email address.");
    const [error, setError] = useState(false);

    const [loading, setLoading] = useState(false);

    const [success, setSuccess] = useState(false);

    const [disabled, setDisabled] = useState(false);

    const validateEmail = (email: string): boolean => {
        const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
        return regex.test(email);
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateEmail(email)) {
            setEmail("");
            setIsEmpty(true);
            setError(false);
            setSuccess(true);
        } else {
            setError(true);
            setSuccess(false);
        }
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        email.length === 0 ? setIsEmpty(true) : setIsEmpty(false);
        setEmail(e.target.value);
    };

    return {
        email,
        error,
        errorMessage,
        success,
        isEmpty,
        onSubmit,
        onChange,
    };
}
