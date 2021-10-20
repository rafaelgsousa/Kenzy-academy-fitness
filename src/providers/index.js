import { GroupsProvider } from "./Groups/index";
import { UserInfoProvider } from "./UserInfo";

export const Providers = ({ children }) => {
  return (
    <UserInfoProvider>
      <GroupsProvider>{children}</GroupsProvider>
    </UserInfoProvider>
  );
};
