import { useParams } from "react-router-dom";
import OutletFooter from "@/components/ui/shared/OutletFooter";
import OutletHeader from "@components/ui/shared/OutletHeader";
import OutletWidthShell from "@components/ui/shared/OutletWidthShell";

const Warehouse = () => {
  const { id } = useParams();

  return (
    <article className="w-full flex flex-col min-h-screen justify-between">
      <OutletHeader
        title={id ? `Warehouse ${id}` : "Warehouse"}
        subText={"Manage and monitor warehouse."}
      />
      <OutletWidthShell>{id} content</OutletWidthShell>
      <OutletFooter />
    </article>
  );
};

export default Warehouse;
