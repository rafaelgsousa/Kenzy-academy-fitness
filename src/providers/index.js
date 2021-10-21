import { GroupsProvider } from "./Groups/index";
import { ActivitesProvider } from "./Activites";
import { GoalsProvider } from "./Goals";
import { UserInfoProvider } from "./UserInfo";

export const Providers = ({ children }) => {
  return (
    <GroupsProvider>
      <ActivitesProvider>
        <GoalsProvider>
          <UserInfoProvider>
            {children}
          </UserInfoProvider>
        </GoalsProvider>
      </ActivitesProvider>
    </GroupsProvider>
  )
}
