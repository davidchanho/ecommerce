import { useActive } from "../../hooks/useActive";
import { Picker, PickersContainer } from "./Pickers.styles";

function Pickers() {
    const { active, setActive } = useActive();

    return (
        <PickersContainer>
            <Picker
                type="radio"
                name="color"
                value="red"
                color="red"
                checked={active === 0}
                onClick={() => setActive(0)}
            />
            <Picker
                type="radio"
                name="color"
                value="red"
                color="green"
                checked={active === 1}
                onClick={() => setActive(1)}
            />
            <Picker
                type="radio"
                name="color"
                value="red"
                color="blue"
                checked={active === 2}
                onClick={() => setActive(2)}
            />
        </PickersContainer>
    );
}

export default Pickers;
