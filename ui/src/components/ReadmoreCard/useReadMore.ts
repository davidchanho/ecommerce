import { useState } from "react";

export default function useReadMore() {
    const [extended, setExtended] = useState(false);

    const handleExtend = (e: any) => {
        e.preventDefault();
        setExtended(!extended);
    };

    return {extended, handleExtend};
}
