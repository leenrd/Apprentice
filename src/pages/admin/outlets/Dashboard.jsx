import OutletWidthShell from "@/components/ui/shared/OutletWidthShell";
import OutletHeader from "@/components/ui/shared/OutletHeader";
import DashboardTransactions from "@/features/admin/Transactions";
import OutletFooter from "@/components/ui/shared/OutletFooter";
import RecentActivity from "@/features/admin/RecentActivities";
import WarehouseOverview from "@/features/admin/WarehouseOverview";
import TotalResources from "@/features/admin/TotalResources";

const Dashboard = () => {
  return (
    <article className="w-full flex flex-col min-h-screen justify-between">
      <OutletHeader
        title={"Inventory Management"}
        subText={"Manage inventory and generate updates."}
      />
      <OutletWidthShell>
        <DashboardTransactions />
        <div className="flex gap-3  w-full mb-10">
          <TotalResources />
          <WarehouseOverview />
        </div>
        <RecentActivity />
      </OutletWidthShell>
      <OutletFooter />
    </article>
  );
};

export default Dashboard;
