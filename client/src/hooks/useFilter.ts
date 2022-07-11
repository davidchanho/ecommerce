export function useFilter(options: string[], search: string) {
    const filtered = options.filter(
        (option) => option.toLowerCase().indexOf(search.toLowerCase()) > -1
    );

    return { filtered };
}
