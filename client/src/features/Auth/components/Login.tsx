import Button from "../../../components/Button/Button";
import {
    ErrorMessage,
    Form,
    FormControl,
    Input,
    Label,
} from "../../../components/Input/Input";
import { AuthProps } from "../auth.types";
import { useLogin } from "../hooks/useLogin";

function Login({ onSwitch }: AuthProps) {
    const { email, password } = useLogin();

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
                        {email.error && email.errorMessage}
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

            <Button onClick={onSwitch}>
                Don't have an account? Register Now!
            </Button>
        </>
    );
}

export default Login;
