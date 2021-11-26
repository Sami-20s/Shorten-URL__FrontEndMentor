import React, { createContext, useContext } from "react";
import Logo from "./logo/Logo";
import { navLinks, navButtons } from "./nav/navList";
import { statisticsList } from "./statistics/statisticsList";
import {
    footerListFeatures,
    footerListCompany,
    footerListResources,
} from "./footer/footerList";

// Types
import { contextTypes } from "../types/context/contextTypes";

const Context: contextTypes = createContext({
    Logo,
    navLinks,
    navButtons,
    statisticsList,
    footerListCompany,
    footerListFeatures,
    footerListResources,
});

const ContextProvider = ({ children }) => {
    return (
        <Context.Provider
            value={{
                Logo,
                navButtons,
                navLinks,
                statisticsList,
                footerListCompany,
                footerListFeatures,
                footerListResources,
            }}
        >
            {children}
        </Context.Provider>
    );
};
export const useGlobal = () => {
    return useContext(Context);
};

export default ContextProvider;
