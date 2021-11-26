import { NavLinksListTypes } from "../Nav/navTypes";
import { StatisticsListTypes } from "../Statistics/statisticsTypes";
import { FooterListTypes } from "../Footer/footerTypes";
export type contextTypes = React.Context<{
    Logo: () => JSX.Element;
    navLinks: NavLinksListTypes;
    navButtons: NavLinksListTypes;
    statisticsList: StatisticsListTypes;
    footerListFeatures: FooterListTypes;
    footerListResources: FooterListTypes;
    footerListCompany: FooterListTypes;
}>;
