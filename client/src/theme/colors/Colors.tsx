import { colors } from "..";
import ChipDisplay from "../_components/ChipDisplay/ChipDisplay";

function Colors() {
    return <ChipDisplay colors={Object.entries(colors)} />;
}

export default Colors;
