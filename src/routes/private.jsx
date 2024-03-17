import authenticated, { AccountType } from "@/utils/auth";
import adminRoute from "./route-branches/admin";
import staffRoute from "./route-branches/staff";

const RouteBranches = {
  [AccountType.Admin]: adminRoute,
  [AccountType.Staff]: staffRoute,
};

const privateRoute = RouteBranches[authenticated.accountType];

export default privateRoute;
