import React, { createContext, useContext } from "react";
import Logo from "./logo/Logo";
import { navLinks, navButtons } from "./nav/navList";
// Types
import { contextTypes } from "../types/context/contextTypes";

const Context: contextTypes = createContext({
    Logo,
    navLinks,
    navButtons,
});

const ContextProvider = ({ children }) => {
    return (
        <Context.Provider value={{ Logo, navButtons, navLinks }}>
            {children}
        </Context.Provider>
    );
};
export const useGlobal = () => {
    return useContext(Context);
};

export default ContextProvider;
