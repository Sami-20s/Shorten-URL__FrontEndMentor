import React, { FC } from "react";
import BoostButtons from "./BoostButtons";

const Boost: FC = () => {
    return (
        <div className="boost" id="boost">
            <div className="boost__wrapper container-px">
                <h2>Boost your links today</h2>
                <BoostButtons />
            </div>
        </div>
    );
};

export default Boost;
