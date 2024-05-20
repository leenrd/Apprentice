import OutletWidthShell from "@/components/ui/shared/OutletWidthShell";
import OutletHeader from "@/components/ui/shared/OutletHeader";
import OutletFooter from "@/components/ui/shared/OutletFooter";

const Dashboard = () => {
  return (
    <article className="w-full flex flex-col min-h-screen justify-between">
      <OutletHeader
        title={"Inventory Management"}
        subText={"Manage inventory and generate updates."}
      />
      <OutletWidthShell>
        <h3>Dashboard Body</h3>
      </OutletWidthShell>
      <OutletFooter />
    </article>
  );
};

export default Dashboard;
