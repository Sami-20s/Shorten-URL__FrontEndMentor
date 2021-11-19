// ? States Types
export type LinkTypes = string;
export type DangerTypes = boolean;
export type LinksTypes = string[];

// ? Functions Types
export type FunctionTypes = {
    handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    fetchData: (URL: string) => void;
    handleCopy: () => void;
};
// ? Props
export type FormProps = {
    link: string;
    setLink: React.Dispatch<React.SetStateAction<string>>;
    danger: boolean;
    handleClick: FunctionTypes["handleClick"];
};

export type SingleLinkBoxProps = {
    link: string;
};
