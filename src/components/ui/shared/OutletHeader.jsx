import PropTypes from "prop-types";
import { RiSearchLine } from "@remixicon/react";
import { TextInput, Button } from "@tremor/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown";
import {
  Blocks,
  ChevronDown,
  PackagePlus,
  User,
  Warehouse,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import AccountType from "@/utils/authRoleConstant";
import useToggle from "@/hooks/useToggle";
// import AddWarehouseModal from "@/features/admin/addWarehouseModal";

const OutletHeader = ({ title, subText, type, searchPlaceholder }) => {
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
            <SearchBar searchPlaceholder={searchPlaceholder} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

const SearchBar = ({ searchPlaceholder = "Search" }) => {
  const [value, setToggle] = useToggle(false);
  const { userAuth } = useAuth();

  return (
    <>
      <TextInput icon={RiSearchLine} placeholder={searchPlaceholder} />{" "}
      {userAuth.role === AccountType.Admin ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button onClick={setToggle}>
              <span className="flex gap-3">
                <Blocks className="h-5 w-5" />
                <ChevronDown className="h-5 w-5" />
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <span className="flex items-center gap-x-2">
                <User className="size-5 text-tremor-label" />
                <span className="text-base font-semibold">New User</span>
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={setToggle}>
              <span className="flex items-center gap-x-2">
                <Warehouse className="size-5 " />
                <span className="text-base  font-semibold">New Warehouse</span>
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
