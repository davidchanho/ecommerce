import { ButtonHTMLAttributes } from "react";

export interface LoadingButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    status?: "loading" | "success" | "error" | "idle";
}
