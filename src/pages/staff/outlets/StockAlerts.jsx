import OutletFooter from "@/components/ui/shared/OutletFooter";
import OutletHeader from "@components/ui/shared/OutletHeader";
import OutletWidthShell from "@components/ui/shared/OutletWidthShell";

const StockAlerts = () => {
  return (
    <article className="w-full flex flex-col min-h-screen justify-between">
      <OutletHeader
        title={"Stock Alerts"}
        subText={"Manage stock alerts and generate reports"}
      />
      <OutletWidthShell>Stock Alerts</OutletWidthShell>
      <OutletFooter />
    </article>
  );
};

export default StockAlerts;
