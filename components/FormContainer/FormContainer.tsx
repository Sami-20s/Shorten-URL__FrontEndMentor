import React, { useState } from "react";
import {
    FunctionTypes,
    LinkTypes,
    LinksTypes,
    DangerTypes,
    SingleLinkBoxProps,
} from "../../types/FormContainer/formContainerTypes";
import Form from "./Form";
import SingleLinkBox from "./SingleLinkBox";
const FormContainer = () => {
    const [link, setLink] = useState<LinkTypes>("");
    const [danger, setDanger] = useState<DangerTypes>(false);
    const [links, setLinks] = useState<LinksTypes>([]);
    const [isLoading, setIsLoading] = useState<DangerTypes>(false);

    const fetchData: FunctionTypes["fetchData"] = async URL => {
        try {
            const response = await fetch(
                `https://api.shrtco.de/v2/shorten?url=${URL}`
            );
            const data = await response.json();
            setIsLoading(false);
            if (data.ok === false) {
                setDanger(true);
                setTimeout(() => {
                    setDanger(false);
                }, 2000);
                setLinks([]);
            } else {
                setDanger(false);
                setLinks([
                    data.result.full_short_link,
                    data.result.full_short_link2,
                    data.result.full_short_link3,
                ]);
            }
        } catch (error) {
            console.log(`The Error is ${error}`);
        }
    };
    const handleClick: FunctionTypes["handleClick"] = e => {
        e.preventDefault();
        if (link === "") {
            setDanger(true);
            setTimeout(() => {
                setDanger(false);
                setIsLoading(false);
            }, 2000);
        }
        setIsLoading(true);
        fetchData(link.toString());
        setLink("");
    };
    return (
        <div className="input container-px" id="FormContainer">
            <div className="input__wrapper">
                <Form
                    link={link}
                    setLink={setLink}
                    danger={danger}
                    handleClick={handleClick}
                    isLoading={isLoading}
                />
                {links.map((item, index) => {
                    return <SingleLinkBox key={index} link={item} />;
                })}
            </div>
        </div>
    );
};

export default FormContainer;
