import OutletFooter from "@/components/ui/shared/OutletFooter";
import OutletHeader from "@components/ui/shared/OutletHeader";
import OutletWidthShell from "@components/ui/shared/OutletWidthShell";

const Items = () => {
  return (
    <article className="w-full flex flex-col min-h-screen justify-between">
      <OutletHeader title={"Items"} subText={"Manage items here."} />
      <OutletWidthShell>Manage Items</OutletWidthShell>
      <OutletFooter />
    </article>
  );
};

export default Items;
