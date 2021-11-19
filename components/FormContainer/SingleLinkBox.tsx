import React, { FC, useState } from "react";
import {
    FunctionTypes,
    SingleLinkBoxProps,
} from "../../types/FormContainer/formContainer";

const SingleLinkBox: FC<SingleLinkBoxProps> = ({ link }) => {
    const [copied, setCopied] = useState<boolean>(false);
    const handleCopy: FunctionTypes["handleCopy"] = () => {
        navigator.clipboard.writeText(`${link}`);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="input__wrapper__singleBox">
            <h4>{link}</h4>
            <button
                className={`${
                    copied
                        ? "input__wrapper__singleBox__button active"
                        : "input__wrapper__singleBox__button"
                }`}
                onClick={handleCopy}
            >
                {copied ? "Copied!" : "Copy"}
            </button>
        </div>
    );
};

export default SingleLinkBox;
