// import { useForm } from "react-hook-form";
import { Button } from "@/components/button";
import { FC } from "react";

type FormSignUpProp = {
  setIsLogIn: (prev: (prev: boolean) => boolean) => void;
};

const FormSignUp: FC<FormSignUpProp> = ({ setIsLogIn }) => {
  return (
    <>
      <div className="flex flex-col items-center mb-10">
        <div className="mb-5">
          <img src="/auth/app_favicon.png" alt="logo" />
        </div>
        <p className="font-bold text-3xl">Create an account</p>
        <p className="text-gray-400 text-sm">
          Enter your required info below to create your account.
        </p>
      </div>
      <form className="flex flex-col gap-2 items-center w-[45%]">
        <div className="w-[100%]">
          <label className="text-sm font-normal">User Information</label>
          <input
            type="text"
            className="pl-5 pr-7 py-3 bg-gray-100 rounded-[5px] focus:ring text-sm w-[100%] focus:outline-none focus:border-orange-700 mt-2"
            placeholder="Username"
            required
          />
        </div>
        <input
          type="password"
          className="pl-5 pr-7 py-3 bg-gray-100 rounded-[5px] focus:ring text-sm w-[100%] focus:outline-none focus:border-orange-700"
          placeholder="Password"
          required
          autoComplete="new-password"
        />
        <input
          type="password"
          className="pl-5 pr-7 py-3 bg-gray-100 rounded-[5px] focus:ring text-sm w-[100%] focus:outline-none focus:border-orange-700 mb-8"
          placeholder="Retype password"
          required
        />
        <div className="w-[100%] flex flex-col items-start">
          <label className="text-sm font-normal">Account Type</label>
          <select
            name="accType"
            id="accountType"
            required
            className="mt-2 pl-5 pr-7 py-3 bg-transparent border-gray-300 border-2 rounded-[5px] focus:ring text-sm w-[100%] focus:outline-none focus:border-orange-700"
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
          <Button variant={"long"} className="mt-3">
            Next step
          </Button>
          <div className="flex justify-center w-[100%]">
            <p className="text-xs text-gray-600 mt-4 text-center">
              Already have an account?
              <a
                className="underline cursor-pointer"
                onClick={() => setIsLogIn((prev) => !prev)}
              >
                {" "}
                Sign in
              </a>
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormSignUp;
