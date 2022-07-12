import { ChangeEvent, useState } from "react";

export function useFilterSearch(options: string[]) {
    const [search, setSearch] = useState("");

    const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    const filtered = options.filter(
        (option) => option.toLowerCase().indexOf(search.toLowerCase()) > -1
    );

    return { search, filtered, onSearch };
}
