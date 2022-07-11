import { useState } from "react";

export const useActive = () => {
    const [active, setActive] = useState(0);

    return { active, setActive };
};
