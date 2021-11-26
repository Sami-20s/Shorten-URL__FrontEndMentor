import React, { FC } from "react";
import { FooterSingleLinkProps } from "../../types/Footer/footerTypes";

const SingleLink: FC<FooterSingleLinkProps> = ({ title }) => {
    return <li>{title}</li>;
};

export default SingleLink;
