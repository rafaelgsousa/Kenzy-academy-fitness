import { GroupsProvider } from "./Groups/index";
import { ActivitesProvider } from "./Activites";
import { GoalsProvider } from "./Goals";

export const Providers = ({children}) => {
    return (
        <GroupsProvider>
            <ActivitesProvider>
                <GoalsProvider>
                    {children}
                </GoalsProvider>
            </ActivitesProvider>
        </GroupsProvider>
    )
}