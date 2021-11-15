import React, { FC } from "react";
import { NavButtonsProps } from "../../types/Nav/navTypes";

const NavButtons: FC<NavButtonsProps> = ({ list }) => {
    return (
        <div className="navbar__wrapper__buttons ">
            {list.map(item => {
                return (
                    <button
                        key={item.id}
                        className="navbar__wrapper__buttons__single"
                    >
                        {item.text}
                    </button>
                );
            })}
        </div>
    );
};

export default NavButtons;
