import PropTypes from "prop-types";
import { RiSearchLine } from "@remixicon/react";
import { TextInput, Button } from "@tremor/react";
import { PackagePlus } from "lucide-react";

const OutletHeader = ({ title, subText }) => {
  return (
    <div className="border-b-slate border-b-2 px-9 py-[0.7rem] flex items-center justify-between">
      <div>
        <h1 className="text-lg font-medium">{title}</h1>
        <span className="text-sm text-tremor-content">{subText}</span>
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

OutletHeader.propTypes = {
  title: PropTypes.string,
  subText: PropTypes.string,
};

export default OutletHeader;
