import Sidebar from "@/components/ui/Sidebar";
import { Outlet } from "react-router-dom";
import redirectToSite from "@/utils/redirects";

const RootPage = () => {
  return (
    <>
      <Banner />
      <main className="flex font-general">
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
};

const Banner = () => {
  return (
    <div className=" grid grid-cols-3 border-r-slate border-b-2 w-screen">
      <h1 className="font-semibold text-sm text-black py-2 px-8">
        Apprentice Admin
      </h1>
      <h1 className="text-center text-sm font-semibold py-2">
        Thank you for using Apprentice - IMS. Check my other projects at{" "}
        <span
          className="underline cursor-pointer text-orange-500 hover:text-orange-700"
          onClick={() => redirectToSite("https://github.com/leenrd")}
        >
          github
        </span>
        .
      </h1>
      <span></span>
    </div>
  );
};
export default RootPage;
