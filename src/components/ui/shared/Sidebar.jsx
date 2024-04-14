import PropTypes from "prop-types";
import auth, { AccountType } from "@/utils/auth";
import cn from "@/utils/twMerge";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileClock,
  UserCog,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const sideBarType = auth.accountType;
  return (
    <aside className="w-80 h-screen bg-white text-black py-8 px-4 border-r-slate border-r-2">
      <div className="flex flex-col justify-between h-[100%]">
        <div>
          <h1 className="font-bold text-md md:text-lg lg:text-xl  mb-5 pl-3">
            Manage
          </h1>
          <Tab label="Dashboard" Icon={LayoutDashboard} to="/" />
          {sideBarType === AccountType.Admin ? (
            <Tab label="Users" Icon={UserCog} to="/users" />
          ) : null}
          <Tab label="Logs" Icon={FileClock} to="/logs" />
        </div>
        <div>
          <Tab label="Settings" Icon={Settings} to="/settings" />
          <Tab label="Log out" Icon={LogOut} to="/logout" />
        </div>
      </div>
    </aside>
  );
};

const Tab = ({ label, Icon, to }) => {
  const defaultStyle = `rounded-md text-md font-medium active:scale-95 text-black py-2 px-3
  hover:bg-slate-100 active:text-semibold w-[100%] text-start flex items-center gap-2
  transition-transform duration-100 mb-1`;
  return (
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
  );
};

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  to: PropTypes.string.isRequired,
};

export default Sidebar;
