import PropTypes from "prop-types";
import { RiSearchLine } from "@remixicon/react";
import { TextInput, Button } from "@tremor/react";
import { PackagePlus } from "lucide-react";

const OutletHeader = ({ title, subText, type }) => {
  return (
    <div className="border-b-slate border-b-2 px-9 py-[0.7rem] ml-[15rem] flex items-center justify-between">
      <div>
        <h1 className=" text-base font-bold">{title}</h1>
        <span className="text-sm text-tremor-content">{subText}</span>
      </div>
      <div>
        <div className="flex gap-2">
          {" "}
          {type !== "settings" ? <SearchBar /> : null}
        </div>
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <>
      <TextInput icon={RiSearchLine} placeholder="Search or Press Ctrl+K" />{" "}
      <Button>
        <PackagePlus className="h-5 w-5" />
      </Button>
    </>
  );
};

OutletHeader.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  cmdToggle: PropTypes.func,
};

export default OutletHeader;