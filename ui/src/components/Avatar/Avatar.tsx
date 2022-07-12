import { BiUserCircle } from "react-icons/bi";
import { AvatarStyles } from "./Avatar.styles";
import { AvatarProps } from "./Avatar.types";

function Avatar({ src, alt }: AvatarProps) {
    return (
        <AvatarStyles>
            {src ? <img src={src} alt={alt} /> : <BiUserCircle />}
        </AvatarStyles>
    );
}

export default Avatar;
