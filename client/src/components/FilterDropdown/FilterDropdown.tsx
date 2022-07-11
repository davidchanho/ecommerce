import { useFilterSearch } from "../../hooks/useFilterSearch";

function FilterDropdown() {
    const options: string[] = ["Apple", "Oranges", "Banana"];
    const { search, filtered, onSearch } = useFilterSearch(options);

    return (
        <div>
            <input value={search} onChange={onSearch} />
            <ul>
                {filtered.map((option) => (
                    <li key={option}>{option}</li>
                ))}
            </ul>
        </div>
    );
}

export default FilterDropdown;
