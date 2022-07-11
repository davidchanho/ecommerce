import { useFilter } from "./useFilter";
import useSearch from "./useSearch";

export function useFilterSearch(options: string[]) {
    const { search, onSearch } = useSearch();
    const { filtered } = useFilter(options, search);

    return { search, filtered, onSearch };
}
