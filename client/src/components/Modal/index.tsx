import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import { useShow } from "../../hooks/useShow";
import Button from "../Button/Button";
import { Container, Wrapper } from "./styles";

export function Modal() {
    const { show, onHide, onShow } = useShow();
  
    if (!show) {
        return <Button onClick={onShow}>open</Button>;
    }

    return createPortal(
        <Wrapper>
            <MdClose onClick={onHide} />
            <Container>hello</Container>
        </Wrapper>,
        document.getElementById("portal") as HTMLElement
    );
}
