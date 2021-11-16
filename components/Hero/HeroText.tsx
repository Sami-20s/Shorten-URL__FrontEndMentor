import React, { FC } from "react";
import { HeroTextProps } from "../../types/Hero/heroTypes";
const HeroText: FC<HeroTextProps> = ({ children }) => {
    return (
        <div className="hero__wrapper__text ">
            <h1>More than just shorter links</h1>
            <p>
                Build your brand’s recognition and get detailed insights on how
                your links are performing.
            </p>
            {children}
        </div>
    );
};

export default HeroText;
