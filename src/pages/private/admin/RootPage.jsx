import Sidebar from "@/components/ui/Sidebar";
import { Outlet } from "react-router-dom";
import redirectToSite from "@/utils/redirects";
import useToggle from "@/hooks/useToggle";
import PropTypes from "prop-types";
import { X } from "lucide-react";

const RootPage = () => {
  const [value, setToggle] = useToggle(true);
  return (
    <>
      {!value ? <Banner toggle={setToggle} /> : null}
      <main className="flex font-general">
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
};

const Banner = ({ toggle }) => {
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
      <span className="flex justify-end items-center px-8">
        <X className="h-4 w-4 cursor-pointer" onClick={() => toggle()} />
      </span>
    </div>
  );
};

Banner.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default RootPage;
