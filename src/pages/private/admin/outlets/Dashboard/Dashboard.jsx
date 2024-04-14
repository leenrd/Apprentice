import OutletWidthShell from "@/components/ui/shared/OutletWidthShell";
import DashboardHeader from "./Dashboard-Header";
import DashboardTransactions from "./Dashboard-Transactions";

const Dashboard = () => {
  return (
    <article className="w-full">
      <DashboardHeader />
      <OutletWidthShell>
        <DashboardTransactions />
      </OutletWidthShell>
    </article>
  );
};

export default Dashboard;
