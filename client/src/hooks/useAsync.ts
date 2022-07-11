import { useEffect, useState } from "react";

type useAsyncProps<T> = T[];

export const useAsync = <T>(urls: useAsyncProps<T>) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<T[]>([]);

    useEffect(() => {
        function fetchData() {
            const data = urls;
            setTimeout(() => {
                setData(data);
                setLoading(false);
            }, 2000);
        }
        fetchData();
    });

    return { loading, data };
};
