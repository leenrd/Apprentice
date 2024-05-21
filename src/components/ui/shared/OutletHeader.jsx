import PropTypes from "prop-types";
import { RiSearchLine } from "@remixicon/react";
import { TextInput, Button } from "@tremor/react";
import { PackagePlus, Warehouse } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import AccountType from "@/utils/authRoleConstant";
import useToggle from "@/hooks/useToggle";
import AddWarehouseModal from "@/features/admin/addWarehouseModal";

const OutletHeader = ({ title, subText, type, searchPlaceholder }) => {
  const [value, setToggle] = useToggle(false);

  return (
    <div className="border-b-slate border-b-2 px-9 py-[0.7rem] ml-[15rem] flex items-center justify-between">
      <div>
        <h1 className="text-base font-bold">{title}</h1>
        <span className="text-sm text-tremor-content">{subText}</span>
      </div>
      <div>
        <div className="flex gap-2">
          {" "}
          {type !== "settings" ? (
            <SearchBar
              searchPlaceholder={searchPlaceholder}
              toggle={setToggle}
              value={value}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

const SearchBar = ({ searchPlaceholder = "Search", toggle, value }) => {
  const { userAuth } = useAuth();

  return (
    <>
      {!value ? null : <AddWarehouseModal toggle={toggle} value={value} />}
      <TextInput icon={RiSearchLine} placeholder={searchPlaceholder} />{" "}
      {userAuth.role === AccountType.Admin ? (
        <Button onClick={toggle}>
          <Warehouse className="h-5 w-5" />
        </Button>
      ) : (
        <Button>
          <PackagePlus className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};

SearchBar.propTypes = {
  searchPlaceholder: PropTypes.string,
  toggle: PropTypes.func,
  value: PropTypes.bool,
};

OutletHeader.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  searchPlaceholder: PropTypes.string,
  cmdToggle: PropTypes.func,
};

export default OutletHeader;
