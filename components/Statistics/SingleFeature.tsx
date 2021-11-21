import React, { FC } from "react";
import { SingleFeatureProps } from "../../types/Statistics/statisticsTypes";

const SingleFeature: FC<SingleFeatureProps> = ({ id, title, text, img }) => {
    return (
        <div className="statistics__wrapper__features__single">
            <div className="statistics__wrapper__features__single__img">
                <img src={img} alt={title} />
            </div>
            <div className="statistics__wrapper__features__single__text">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default SingleFeature;
