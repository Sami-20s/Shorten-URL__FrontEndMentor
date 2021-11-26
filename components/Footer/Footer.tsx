import React, { FC } from "react";
import { useGlobal } from "../../context/context";
import FooterIcons from "./FooterIcons";
import Links from "./Links";

const Footer: FC = () => {
    const { Logo, footerListCompany, footerListFeatures, footerListResources } =
        useGlobal();
    return (
        <footer className="footer container-px">
            <div className="footer__wrapper">
                <Logo />
                <Links
                    featuresList={footerListFeatures}
                    resourcesList={footerListResources}
                    companyList={footerListCompany}
                />
                <FooterIcons />
            </div>
        </footer>
    );
};

export default Footer;
