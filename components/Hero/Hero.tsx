import React, { FC } from "react";
import Svg from "../../public/img/illustration-working.svg";
import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
const Hero: FC = () => {
    return (
        <div className="hero" id="hero">
            <div className="hero__wrapper">
                <HeroImage />
                <HeroText>
                    <HeroButtons />
                </HeroText>
            </div>
        </div>
    );
};

export default Hero;
