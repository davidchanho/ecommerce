import Button from "../../../components/Button/Button";
import {
    ErrorMessage,
    Form,
    FormControl,
    Input,
    Label,
} from "../../../components/Input/Input";
import { useRegister } from "../hooks/useRegister";

interface RegisterProps {
    onSwitch: () => void;
}

function Register({ onSwitch }: RegisterProps) {
    const { email, password } = useRegister();

    return (
        <>
            <Form onSubmit={email.onSubmit}>
                <FormControl>
                    <Label>Email Address</Label>
                    <Input
                        type="text"
                        value={email.email}
                        onChange={email.onChange}
                        error={email.error}
                    />
                    <ErrorMessage>
                        {email.error && "Please enter a valid email address."}
                    </ErrorMessage>
                </FormControl>

                <FormControl>
                    <Label>Password</Label>
                    <Input
                        type="text"
                        value={password.password}
                        onChange={password.onPassword}
                        error={password.hasError}
                    />
                    <ErrorMessage>
                        {password.error &&
                            "Please enter a valid email address."}
                    </ErrorMessage>
                </FormControl>

                <Button
                    type="submit"
                    disabled={password.hasError || password.isEmpty}
                >
                    Submit
                </Button>
            </Form>

            <Button onClick={onSwitch}>Already Registered? Log in now!</Button>
        </>
    );
}

export default Register;
