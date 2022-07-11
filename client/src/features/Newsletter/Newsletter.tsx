import Button from "../../components/Button/Button";
import { Form, FormControl, Input } from "../../components/Input/Input";
import { useEmail } from "../../hooks/useEmail";
import { NewsletterContainer, NewsletterTitle } from "./Newsletter.styles";

function Newletter() {
    const { email, error, success, isEmpty, onSubmit, onChange } = useEmail();

    return (
        <NewsletterContainer>
            <NewsletterTitle>Want product news and updates?</NewsletterTitle>
            <NewsletterTitle>Sign up for our newsletter.</NewsletterTitle>
            <br />
            <Form horizontal onSubmit={onSubmit} noValidate>
                <FormControl>
                    <Input
                        type="text"
                        value={email}
                        onChange={onChange}
                        error={error}
                        success={success}
                        placeholder="Enter your Email"
                    />
                </FormControl>

                <Button type="submit" disabled={error || isEmpty}>
                    Notify me
                </Button>
            </Form>
        </NewsletterContainer>
    );
}

export default Newletter;
