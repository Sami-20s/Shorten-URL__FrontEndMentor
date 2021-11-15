import { NavLinksListTypes } from "../Nav/navTypes";
export type contextTypes = React.Context<{
    Logo: () => JSX.Element;
    navLinks: NavLinksListTypes;
    navButtons: NavLinksListTypes;
}>;
