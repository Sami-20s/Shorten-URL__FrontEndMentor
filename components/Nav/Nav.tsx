import React, { useState } from "react";
import { useGlobal } from "../../context/context";
import Burger from "./Burger";
import NavButtons from "./NavButtons";
import NavLinks from "./NavLinks";

const Nav = () => {
    const { Logo, navLinks, navButtons } = useGlobal();
    const [isClicked, setIsClicked] = useState(false);
    isClicked
        ? (document.body.style.overflowY = "hidden")
        : (document.body.style.overflowY = "scroll");
    return (
        <nav className="navbar container-px" id="navbar">
            <div className="navbar__wrapper ">
                <Logo />
                <div
                    className={`${
                        isClicked
                            ? "navbar__wrapper__linksButtons active"
                            : "navbar__wrapper__linksButtons "
                    }`}
                >
                    <NavLinks list={navLinks} />
                    <NavButtons list={navButtons} />
                </div>
                <Burger check={isClicked} click={setIsClicked} />
            </div>
        </nav>
    );
};

export default Nav;
