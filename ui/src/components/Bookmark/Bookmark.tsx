import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { Button } from "../Button/Button.styles";
import { BookmarkProps } from "./Bookmark.types";

function Bookmark({ isBookmark }: BookmarkProps) {
    return (
        <Button icon>
            {isBookmark ? (
                <BsBookmarkFill size="22" />
            ) : (
                <BsBookmark size="22" />
            )}
        </Button>
    );
}

export default Bookmark;
