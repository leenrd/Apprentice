import { RiSearchLine } from "@remixicon/react";
import { TextInput, Button } from "@tremor/react";
import { PackagePlus } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="border-b-slate border-b-2 px-9 py-[0.7rem] flex items-center justify-between">
      <div>
        <h1 className="text-lg font-bold">Inventory Overview</h1>
        <span className="text-sm text-tremor-content">
          Manage inventory and generate updates.
        </span>
      </div>
      <div>
        <div className="flex gap-2">
          {" "}
          <TextInput icon={RiSearchLine} placeholder="Search..." />{" "}
          <Button>
            <PackagePlus className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
