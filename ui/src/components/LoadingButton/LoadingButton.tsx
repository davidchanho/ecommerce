import { PropsWithChildren } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { MdCheckCircle, MdError } from "react-icons/md";
import Button from "../Button/Button";
import { LoadingButtonProps } from "./LoadingButton.types";

const LoadingButton = ({
    status,
    children,
}: PropsWithChildren<LoadingButtonProps>) => {
    return (
        <Button>
            {status === "loading" ? (
                <>
                    <BiLoaderAlt /> Loading...
                </>
            ) : status === "error" ? (
                <>
                    <MdError /> Error!
                </>
            ) : status === "success" ? (
                <>
                    <MdCheckCircle /> Success
                </>
            ) : (
                <>{children}</>
            )}
        </Button>
    );
};

export default LoadingButton;
