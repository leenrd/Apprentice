import Sidebar from "@/components/ui/shared/Sidebar";
import { Outlet } from "react-router-dom";
import useToggle from "@/hooks/useToggle";
import CommandMenu from "@/components/ui/CommandMenu";
import Banner from "@/components/ui/shared/Banner";

const RootPage = () => {
  const [value, setToggle] = useToggle(true);

  return (
    <div className="relative">
      <CommandMenu />
      {!value ? <Banner toggle={setToggle} /> : null}
      <main className="flex font-general tracking-tight">
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
};

export default RootPage;
