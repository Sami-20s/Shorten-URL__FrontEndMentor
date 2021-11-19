import React, { FC, useState } from "react";
import { FormProps } from "../../types/FormContainer/formContainerTypes";

const Form: FC<FormProps> = ({
    link,
    setLink,
    danger,
    handleClick,
    isLoading,
}) => {
    const [sami, setSami] = useState();
    return (
        <form className="input__wrapper__form">
            <div className="input__wrapper__form__control">
                <input
                    className={danger ? "danger" : ""}
                    type="text"
                    placeholder="Shorten a link here..."
                    value={link}
                    onChange={e => setLink(e.target.value)}
                />
                {danger && <p>Please add a valid link</p>}
            </div>
            <div className="input__wrapper__form__buttons">
                <button
                    className="input__wrapper__form__buttons__button"
                    type="submit"
                    onClick={e => handleClick(e)}
                >
                    {isLoading ? "Loading..." : "Shorten It!"}
                </button>
            </div>
        </form>
    );
};

export default Form;
