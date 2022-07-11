export default function filter(items: any[], search: string) {
    const filtered = items?.filter((item) => {
        return Object.keys(item).some((key) => {
            const filteredItem = item[key].toLowerCase();
            const filteringSearch = search.toLowerCase();
            return filteredItem.includes(filteringSearch);
        });
    });

    return { filtered };
}
