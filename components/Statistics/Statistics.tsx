import React, { FC } from "react";
import { useGlobal } from "../../context/context";
import Features from "./Features";
import StatisticsText from "./StatisticsText";

const Statistics: FC = () => {
    const { statisticsList } = useGlobal();
    return (
        <div className="statistics container-px" id="statistics">
            <div className="statistics__wrapper">
                <StatisticsText />
                <Features list={statisticsList} />
            </div>
        </div>
    );
};

export default Statistics;
