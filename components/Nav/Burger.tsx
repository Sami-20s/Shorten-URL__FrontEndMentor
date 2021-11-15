import React, { FC } from "react";
import { BurgerProps } from "../../types/Nav/navTypes";

const Burger: FC<BurgerProps> = ({ check, click }) => {
    return (
        <div
            className={`${
                check
                    ? "hide-for-desktop navbar__wrapper__burger active"
                    : "hide-for-desktop navbar__wrapper__burger "
            }`}
            onClick={() => click(!check)}
        >
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Burger;
