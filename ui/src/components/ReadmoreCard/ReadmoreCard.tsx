import { useState } from "react";
import { ReadmoreCardStyles } from "./ReadmoreCard.styles";

function ReadmoreCard() {
    const [extended, setExtended] = useState(false);

    const handleExtend = () => {
        setExtended(!extended);
    };

    const description =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Lectus proin nibh nisl condimentum. Quisque sagittis purus sit amet volutpat consequat mauris nunc. Porttitor eget dolor morbi non arcu risus quis varius quam. Lorem dolor sed viverra ipsum. Turpis egestas sed tempus urna. Nunc non blandit massa enim nec dui nunc mattis enim. Volutpat consequat mauris nunc congue nisi vitae. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Dui id ornare arcu odio ut sem nulla.";

    return (
        <ReadmoreCardStyles hidden={extended}>
            <div className="description">{description}</div>
            <span className="btn">
                <hr className="divider" />
                <button onClick={handleExtend}>
                    {extended ? "Less" : "More"}
                </button>
                <hr className="divider" />
            </span>
        </ReadmoreCardStyles>
    );
}

export default ReadmoreCard;
