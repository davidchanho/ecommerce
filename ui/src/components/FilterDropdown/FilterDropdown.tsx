import React from "react";
import { FilterDropdownProps } from "./FilterDropdown.types";
import { useFilterSearch } from "./useFilterSearch";
import {FilterDropdownContainer, FilterDropdownList} from './FilerDropdown.styles'

function FilterDropdown({ options }: FilterDropdownProps) {
    const { search, filtered, onSearch } = useFilterSearch(options);

    return (
        <FilterDropdownContainer>
            <input value={search} onChange={onSearch} />
            <FilterDropdownList>
                {filtered.map((option) => (
                    <li key={option}>{option}</li>
                ))}
            </FilterDropdownList>
        </FilterDropdownContainer>
    );
}

export default FilterDropdown;
