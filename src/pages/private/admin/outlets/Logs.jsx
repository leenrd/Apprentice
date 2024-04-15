import OutletFooter from "@/components/ui/shared/OutletFooter";
import OutletHeader from "@components/ui/shared/OutletHeader";
import OutletWidthShell from "@components/ui/shared/OutletWidthShell";

const Logs = () => {
  return (
    <article className="w-full flex flex-col min-h-screen justify-between">
      <OutletHeader
        title={"Activity Logs"}
        subText={"Manage logs and generate reports."}
      />
      <OutletWidthShell>Logs content</OutletWidthShell>
      <OutletFooter />
    </article>
  );
};

export default Logs;
