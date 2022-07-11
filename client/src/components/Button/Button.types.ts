export interface ButtonProps {
    primary?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: () => void;
    circle?: boolean;
    noBorder?: boolean;
    danger?: boolean;
    icon?: boolean;
}
