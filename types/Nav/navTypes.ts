// ? Lists
export type NavLinksListTypes = {
    id: number;
    text: string;
}[];

// ? Props
export type NavButtonsProps = {
    list: {
        id: number;
        text: string;
    }[];
};

export type NavLinksProps = NavButtonsProps;

export type SingleLinkProps = {
    id: number;
    text: string;
};

export type BurgerProps = {
    check: boolean;
    click: React.Dispatch<React.SetStateAction<boolean>>;
};
