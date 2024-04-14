import OutletWidthShell from "@/components/ui/shared/OutletWidthShell";
import DashboardHeader from "./Dashboard-Header";
import DashboardTransactions from "./Dashboard-Transactions";
import { Card } from "@tremor/react";

const Dashboard = () => {
  return (
    <article className="w-full">
      <DashboardHeader />
      <OutletWidthShell>
        <DashboardTransactions />
        <div className="flex gap-3 items-center w-full">
          <div className="flex-1">
            <h1 className="font-bold text-md md:text-lg lg:text-xl mb-2">
              Warehouses&apos; Overview
            </h1>
            <Card className="p-5">card</Card>
          </div>
          <div className="flex-1">
            <h1 className="font-bold text-md md:text-lg lg:text-xl mb-2">
              Total Resources
            </h1>
            <Card className="p-5">card</Card>
          </div>
          <div className="flex-1">
            <h1 className="font-bold text-md md:text-lg lg:text-xl mb-2">
              Recent Activity
            </h1>
            <Card className="p-5">card</Card>
          </div>
        </div>
      </OutletWidthShell>
    </article>
  );
};

export default Dashboard;
