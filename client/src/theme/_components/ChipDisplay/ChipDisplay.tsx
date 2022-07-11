import { Chip, ChipDisplayContainer } from "./ChipDisplay.styles";
import { ChipDisplayProps } from "./ChipDisplay.types";

function ChipDisplay({ colors }: ChipDisplayProps) {
    return (
        <ChipDisplayContainer>
            <thead>
                <tr>
                    <th></th>
                    <th>Default</th>
                    <th>Hover</th>
                    <th>Disabled</th>
                </tr>
            </thead>
            <tbody>
                {colors.map(([name, color]) => (
                    <tr>
                        <th>{name}</th>
                        <td>
                            <Chip color={color} />
                            {color}
                        </td>
                        <td>
                            <Chip color={color} />
                            {color}
                        </td>
                        <td>
                            <Chip color={color} />
                            {color}
                        </td>
                    </tr>
                ))}
            </tbody>
        </ChipDisplayContainer>
    );
}

export default ChipDisplay;
