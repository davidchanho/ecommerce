import React, { useState } from "react";
import {
    DropDownContainer,
    DropDownHeader,
    DropDownList,
    DropDownListContainer,
    DropDownListItem,
} from "./styles";
import { MdKeyboardArrowDown } from "react-icons/md";

export function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggle}>
                Open DropDown <MdKeyboardArrowDown />
            </DropDownHeader>
            {isOpen && (
                <DropDownListContainer>
                    <DropDownList>
                        <DropDownListItem>1</DropDownListItem>
                        <DropDownListItem>2</DropDownListItem>
                        <DropDownListItem>3</DropDownListItem>
                    </DropDownList>
                </DropDownListContainer>
            )}
        </DropDownContainer>
    );
}
