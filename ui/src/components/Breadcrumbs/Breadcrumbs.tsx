import { Fragment } from "react";
import {
    Breadcrumb,
    BreadcrumbDivider,
    BreadcrumbsContainer,
    CurrentBreadcrumb,
} from "./Breadcrumbs.styles";
import { BreadcrumbProps } from "./Breadcrumbs.types";

function Breadcrumbs({ pathname }: BreadcrumbProps) {
    const links = pathname.split("/");

    return (
        <BreadcrumbsContainer>
            {links.slice(1, links.length - 1).map((l) => {
                return (
                    <Fragment key={l}>
                        <Breadcrumb href={"/" + l}>{l}</Breadcrumb>
                        <BreadcrumbDivider> {"/"} </BreadcrumbDivider>
                    </Fragment>
                );
            })}
            <CurrentBreadcrumb>{links[links.length - 1]}</CurrentBreadcrumb>
        </BreadcrumbsContainer>
    );
}

export default Breadcrumbs;
