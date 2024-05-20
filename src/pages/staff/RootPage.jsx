import { Outlet } from "react-router-dom";
import Sidebar from "@/components/ui/shared/Sidebar";
import useToggle from "@/hooks/useToggle";
import Banner from "@/components/ui/shared/Banner";

const RootPage = () => {
  const [value, setToggle] = useToggle(true);
  const isBannerClosed = localStorage.getItem("isBannerClosed");

  return (
    <>
      {!value && !isBannerClosed ? (
        <Banner toggle={setToggle} value={value} />
      ) : null}
      <main className="flex font-general tracking-tight">
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
