import React, { FC } from "react";
import { FooterLinksProps } from "../../types/Footer/footerTypes";
import SingleLink from "./SingleLink";

const Links: FC<FooterLinksProps> = ({
    featuresList,
    resourcesList,
    companyList,
}) => {
    return (
        <div className="footer__wrapper__links">
            <div className="footer__wrapper__links__features">
                <h4>Features</h4>
                <ul>
                    {featuresList.map(item => {
                        return <SingleLink key={item.id} {...item} />;
                    })}
                </ul>
            </div>
            <div className="footer__wrapper__links__resources">
                <h4>Resources</h4>
                <ul>
                    {resourcesList.map(item => {
                        return <SingleLink key={item.id} {...item} />;
                    })}
                </ul>
            </div>
            <div className="footer__wrapper__links__company">
                <h4>Company</h4>
                <ul>
                    {companyList.map(item => {
                        return <SingleLink key={item.id} {...item} />;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Links;
