import PropTypes from "prop-types";
import redirectToSite from "@/utils/redirects";
import { X } from "lucide-react";

const Banner = ({ toggle }) => {
  return (
    <div className=" grid grid-cols-3 z-[60] bg-tremor-brand sticky top-0">
      <h1 className="font-semibold text-sm text-white py-2 px-8">
        Apprentice Admin
      </h1>
      <h1 className="text-center text-sm font-semibold py-2 text-white">
        Thank you for using Apprentice - IMS. Check my other projects at{" "}
        <span
          className="underline cursor-pointer text-white hover:text-black"
          onClick={() => redirectToSite("https://github.com/leenrd")}
        >
          github
        </span>
        .
      </h1>
      <span className="flex justify-end items-center px-8">
        <X
          className="h-4 w-4 cursor-pointer text-white"
          onClick={() => {
            toggle();
            localStorage.setItem("isBannerClosed", "true");
          }}
        />
      </span>
    </div>
  );
};

Banner.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default Banner;
