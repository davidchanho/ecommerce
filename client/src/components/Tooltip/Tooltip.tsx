import { ReactNode, useState } from "react";
import styles from "./ToolTip.module.css";

interface TooltipProps {
    delay?: number;
    direction: string;
    children: ReactNode;
    content: string;
}

const Tooltip = ({
    delay = 400,
    direction,
    children,
    content,
}: TooltipProps) => {
    let timeout: any;
    const [active, setActive] = useState<boolean>(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, delay);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <div
            className={styles.tooltipWrapper}
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
        >
            {children}
            {active && (
                <div className={`${styles.tooltipTip} ${direction || "top"}`}>
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
