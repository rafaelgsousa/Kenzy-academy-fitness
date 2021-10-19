import { GroupsProvider } from "./Groups/index";

export const Providers = ({children}) => {
    return (
        <GroupsProvider>
            {children}
        </GroupsProvider>
    )
}