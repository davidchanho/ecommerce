import { Button } from "../../components/Button/Button.styles";
import { SizeOptionsContainer } from "./SizeOptions.styles";

function SizeOptions() {
    return (
        <SizeOptionsContainer>
            Colors
            <Button>sm</Button>
            <Button>md</Button>
            <Button>lg</Button>
        </SizeOptionsContainer>
    );
}

export default SizeOptions;
