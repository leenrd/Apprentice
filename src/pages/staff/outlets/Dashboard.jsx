import OutletWidthShell from "@/components/ui/shared/OutletWidthShell";
import OutletHeader from "@/components/ui/shared/OutletHeader";
import OutletFooter from "@/components/ui/shared/OutletFooter";
import { useEffect } from "react";
import queryProvider from "@/utils/queryProvider";

const Dashboard = () => {
  useEffect(() => {
    const auth_token = queryProvider.getQueryData("accessToken");
    console.log(auth_token);
  }, []);

  return (
    <article className="w-full flex flex-col min-h-screen justify-between">
      <OutletHeader
        title={"Inventory Management"}
        subText={"Manage inventory and generate updates."}
      />
      <OutletWidthShell>
        <h3>Dashboard Body</h3>
        <button className="bg-tremor-brand">refresh</button>
      </OutletWidthShell>
      <OutletFooter />
    </article>
  );
};

export default Dashboard;
