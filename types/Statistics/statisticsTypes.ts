// ? List
export type StatisticsListTypes = {
    id: number;
    title: string;
    text: string;
    img: string;
}[];
// ? Props
export type FeaturesProps = {
    list: StatisticsListTypes;
};

export type SingleFeatureProps = {
    id: number;
    title: string;
    text: string;
    img: string;
};
