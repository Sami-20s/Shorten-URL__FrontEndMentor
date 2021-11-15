import React, { FC } from "react";
import { SingleLinkProps } from "../../types/Nav/navTypes";

const SingleLink: FC<SingleLinkProps> = ({ id, text }) => {
    return (
        <li className="navbar__wrapper__links__all__item">
            <a href={`#${text.toLowerCase()}`}>{text}</a>
        </li>
    );
};

export default SingleLink;
