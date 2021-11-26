export type FooterListTypes = {
    id: number;
    title: string;
}[];
export type FooterLinksProps = {
    featuresList: FooterListTypes;
    resourcesList: FooterListTypes;
    companyList: FooterListTypes;
};
export type FooterSingleLinkProps = {
    id: number;
    title: string;
};
