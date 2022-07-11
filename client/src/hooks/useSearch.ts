import { ChangeEvent, useState } from "react";

export default function useSearch() {
    const [search, setSearch] = useState("");

    const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return { search, onSearch };
}
