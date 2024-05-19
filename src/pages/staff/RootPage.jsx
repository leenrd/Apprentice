import { Outlet } from "react-router-dom";
import Sidebar from "@/components/ui/shared/Sidebar";
import useToggle from "@/hooks/useToggle";
import Banner from "@/components/ui/shared/Banner";
import { useEffect } from "react";

const RootPage = () => {
  const [value, setToggle] = useToggle(true);

  useEffect(() => {
    const isBannerClosed = sessionStorage.getItem("isBannerClosed");
    if (isBannerClosed === "true") {
      setToggle(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!value ? <Banner toggle={setToggle} value={value} /> : null}
      <main className="flex font-general tracking-tight">
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
