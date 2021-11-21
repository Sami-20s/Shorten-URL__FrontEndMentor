import React, { FC } from "react";
import { FeaturesProps } from "../../types/Statistics/statisticsTypes";
import SingleFeature from "./SingleFeature";

const Features: FC<FeaturesProps> = ({ list }) => {
    return (
        <div className="statistics__wrapper__features">
            {list.map(item => {
                return <SingleFeature key={item.id} {...item} />;
            })}
        </div>
    );
};

export default Features;
