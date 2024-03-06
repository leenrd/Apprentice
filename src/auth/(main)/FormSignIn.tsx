import { Button } from "@/components/button";
import { FC } from "react";

type FormSignInProp = {
  setIsLogIn: (prev: (prev: boolean) => boolean) => void;
};

const FormSignIn: FC<FormSignInProp> = ({ setIsLogIn }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-5 mb-10">
        <div>
          <img src="/auth/app_favicon.png" alt="logo" className="w-11 h-11" />
        </div>
        <p className="font-bold text-3xl">Apprentice.</p>
      </div>
      <form className="flex flex-col gap-2 items-center w-[45%]">
        <input
          type="text"
          className="pl-5 pr-7 py-3 bg-gray-100 rounded-[5px] focus:ring text-sm w-[100%] focus:outline-none focus:border-orange-600"
          placeholder="Username"
          required
        />
        <input
          type="password"
          className="pl-5 pr-7 py-3 bg-gray-100 rounded-[5px] focus:ring text-sm w-[100%] focus:outline-none focus:border-orange-700 mb-8"
          placeholder="Password"
          required
          autoComplete="new-password"
        />
        <input
          type="submit"
          className="cursor-pointer font-semibold rounded-md text-sm active:scale-95 text-white px-6 py-2 w-[100%] bg-orange-600 hover:bg-orange-700 mb-2"
          value="Sign in"
        />
        <Button variant={"ghost"} className="py-0 hover:text-orange-600">
          Use test account?
        </Button>
        <div className="my-8 border-[.6px] border-gray-200 w-[100%]" />
        <p className="text-sm text-gray-500 mb-2">Don't have an account?</p>
        <Button
          variant={"outline"}
          className="w-[100%] py-2"
          onClick={() => setIsLogIn((prev) => !prev)}
        >
          Create account
        </Button>
      </form>
    </>
  );
};

export default FormSignIn;
