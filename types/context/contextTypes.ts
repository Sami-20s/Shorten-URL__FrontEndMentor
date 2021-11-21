import { NavLinksListTypes } from "../Nav/navTypes";
import { StatisticsListTypes } from "../Statistics/statisticsTypes";
export type contextTypes = React.Context<{
    Logo: () => JSX.Element;
    navLinks: NavLinksListTypes;
    navButtons: NavLinksListTypes;
    statisticsList: StatisticsListTypes;
}>;
