import PropTypes from "prop-types";
import cn from "@/utils/twMerge";
import AccountType from "@/utils/authRoleConstant";
import { useAuth } from "@/hooks/useAuth";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FileClock,
  UserCog,
  Settings,
  LogOut,
  BadgeAlert,
  Box,
  ChevronDown,
  ChevronUp,
  Warehouse,
} from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { LogoutHelperFn } from "@/features/auth/auth-client-helpers";
import useToggle from "@/hooks/useToggle";
import { Button, Dialog, DialogPanel } from "@tremor/react";
import { Children, useState } from "react";
import callAPI from "@/utils/axiosInstance";

const Sidebar = () => {
  const { userAuth, logout } = useAuth();
  const [value, setToggle] = useToggle(false);
  const navigate = useNavigate();

  const { data, error, isPending, isError } = useQuery({
    queryKey: ["warehouse"],
    queryFn: async () => {
      const { data } = await callAPI.get("/api/warehouse");
      return data;
    },
  });

  const logoutMutation = useMutation({
    mutationFn: LogoutHelperFn,
    onSuccess: () => {
      logout();
      navigate("/", { replace: true });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleSubmit = async () => {
    logoutMutation.mutate();
  };

  return (
    <aside className="w-60 h-screen bg-white text-black py-8 px-4 border-r-slate border-r-2 z-1 fixed overflow-y-scroll no-scrollbar">
      {!value ? null : (
        <DialogLogout
          toggle={value}
          setToggle={setToggle}
          handleSubmit={handleSubmit}
        />
      )}
      <div
        className={`flex flex-col gap-10 justify-between ${
          userAuth.role === AccountType.Admin ? "max-h-fit" : "h-full"
        }`}
      >
        <div>
          <h1 className="font-bold text-md md:text-lg lg:text-xl  mb-5 pl-3">
            Manage
          </h1>
          <Tab label="Dashboard" Icon={LayoutDashboard} to="/" />
          {userAuth.role === AccountType.Admin ? (
            <Tab label="Users" Icon={UserCog} to="/users" />
          ) : null}
          {userAuth.role === AccountType.Staff ? (
            <>
              <Tab label="Stock Alerts" Icon={BadgeAlert} to="/stock-alerts" />
              <Tab label="Items" Icon={Box} to="/items" />
            </>
          ) : null}
          <Tab
            label="Logs"
            Icon={FileClock}
            to={userAuth.role === AccountType.Admin ? "/global-logs" : "/logs"}
          />
        </div>
        {userAuth.role === AccountType.Admin ? (
          <div>
            <h1 className="font-bold text-md md:text-lg lg:text-xl  mb-5 pl-3">
              Resource
            </h1>
            <FlattenTabs visibleItemCount={4}>
              {data?.map((item) => {
                return (
                  <Tab
                    label={item.name}
                    key={item._id}
                    Icon={Warehouse}
                    to={`/warehouse/${item._id}`}
                  />
                );
              })}
            </FlattenTabs>
          </div>
        ) : null}
        <div className="mb-4">
          {userAuth.role === AccountType.Admin ? (
            <Tab label="Settings" Icon={Settings} to="/settings" />
          ) : null}
          <Tab
            label="Log out"
            Icon={LogOut}
            to="/logout"
            logout={true}
            logoutFn={logout}
            handleSubmit={() => setToggle(true)}
          />
        </div>
      </div>
    </aside>
  );
};

const FlattenTabs = ({
  children,
  visibleItemCount = Number.POSITIVE_INFINITY,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = Children.toArray(children).flat();
  const showExpandButton = childrenArray.length > visibleItemCount;
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount);
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;

  return (
    <>
      <div>{visibleChildren}</div>
      {showExpandButton && (
        <button
          onClick={() => setIsExpanded((e) => !e)}
          className="rounded-md text-md font-medium active:scale-95 text-black py-2 px-3
  hover:bg-slate-100 active:text-semibold w-[100%] text-start flex items-center gap-2
  transition-transform duration-100 mb-1"
        >
          <ButtonIcon className="h-6 w-6" />
          <div>{isExpanded ? "Show Less" : "Show More"}</div>
        </button>
      )}
    </>
  );
};

FlattenTabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  visibleItemCount: PropTypes.number,
};

export function DialogLogout({ toggle, setToggle, handleSubmit }) {
  return (
    <>
      <Dialog open={toggle} onClose={(val) => setToggle(val)} static={true}>
        <DialogPanel>
          <h1 className="text-2xl font-bold px-2 pt-2 text-tremor-content-strong dark:text-dark-tremor-content-strong tracking-tight">
            Are you sure?
          </h1>
          <p className="mt-2 leading-6 px-2 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            You&apos;re about to leave. You have to log in again for your next
            session.
          </p>
          <div className="flex items-end justify-end w-full gap-4 mt-7">
            <Button variant="secondary" onClick={() => setToggle(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Log out</Button>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}

DialogLogout.propTypes = {
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const Tab = ({ label, Icon, to, logout, handleSubmit }) => {
  const defaultStyle = `rounded-md text-md font-medium active:scale-95 text-black py-2 px-3
  hover:bg-slate-100 active:text-semibold w-[100%] text-start flex items-center gap-2
  transition-transform duration-100 mb-1`;
  return !logout ? (
    <NavLink
      to={to}
      type="button"
      className={({ isActive }) =>
        isActive
          ? cn(
              defaultStyle,
              "bg-tremor-brand-faint text-tremor-brand hover:bg-tremor-brand-faint font-semibold"
            )
          : defaultStyle
      }
    >
      <Icon className="w-4 h-4" strokeWidth={2} />
      <div className="text-md">{label}</div>
    </NavLink>
  ) : (
    <button className={defaultStyle} onClick={handleSubmit}>
      <Icon className="w-4 h-4" strokeWidth={2} />
      <div className="text-md">{label}</div>
    </button>
  );
};

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  to: PropTypes.string.isRequired,
  logout: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default Sidebar;
