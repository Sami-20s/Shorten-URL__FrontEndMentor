import React, { FC } from "react";
import { NavLinksProps } from "../../types/Nav/navTypes";
import SingleLink from "./SingleLink";

const NavLinks: FC<NavLinksProps> = ({ list }) => {
    return (
        <div className="navbar__wrapper__links">
            <ul className="navbar__wrapper__links__all">
                {list.map(item => {
                    return <SingleLink key={item.id} {...item} />;
                })}
            </ul>
        </div>
    );
};

export default NavLinks;
