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
} from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { LogoutHelperFn } from "@/features/auth/auth-client";
import useToggle from "@/hooks/useToggle";
import { Button, Dialog, DialogPanel } from "@tremor/react";

const Sidebar = () => {
  const { userAuth, logout } = useAuth();
  const [value, setToggle] = useToggle(false);
  const navigate = useNavigate();

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
    <aside className="w-60 h-screen bg-white text-black py-8 px-4 border-r-slate border-r-2 z-1 fixed">
      {!value ? null : (
        <DialogLogout
          toggle={value}
          setToggle={setToggle}
          handleSubmit={handleSubmit}
        />
      )}
      <div className="flex flex-col justify-between h-[100%]">
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
          <Tab label="Logs" Icon={FileClock} to="/logs" />
        </div>
        {userAuth.role === AccountType.Admin ? (
          <div>
            <h1 className="font-bold text-md md:text-lg lg:text-xl  mb-5 pl-3">
              Resource
            </h1>
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

export function DialogLogout({ toggle, setToggle, handleSubmit }) {
  return (
    <>
      <Dialog open={toggle} onClose={(val) => setToggle(val)} static={true}>
        <DialogPanel>
          <h1 className="text-2xl font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Are you sure?
          </h1>
          <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
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
