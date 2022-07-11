import { useState } from "react";

export const useShow = () => {
    const [show, setShow] = useState(false);

    const onToggle = () => {
        setShow(!show);
    };

    const onHide = () => {
        setShow(false);
    };

    const onShow = () => {
        setShow(true);
    };

    return { show, onToggle, onHide, onShow };
};
