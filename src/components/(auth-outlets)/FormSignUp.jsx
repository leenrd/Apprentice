import { Link } from "react-router-dom";
import { TextInput, Select, SelectItem, Button } from "@tremor/react";

const FormSignUp = () => {
  return (
    <>
      <div className="flex flex-col items-center mb-10">
        <div className="mb-5">
          <img
            src="/auth_assets/app_favicon.png"
            alt="logo"
            className="w-11 h-11"
          />
        </div>
        <p className="font-bold text-3xl">Create an account</p>
        <p className="text-gray-400 text-sm">
          Enter your required info below to create your account.
        </p>
      </div>
      <form className="flex flex-col gap-2 items-center w-[45%]">
        <div className="w-[100%]">
          <label className="text-sm font-normal">User Information</label>
          <TextInput
            type="text"
            className="pl-4 pr-6 py-1 mt-2"
            placeholder="Username"
            required
          />
        </div>
        <TextInput
          type="password"
          className="pl-4 pr-6 py-1"
          placeholder="Password"
          required
        />
        <TextInput
          type="password"
          className="pl-4 pr-6 py-1 mb-8"
          placeholder="Confirm password"
          required
        />
        <div className="w-[100%] flex flex-col items-start">
          <label className="text-sm font-normal mb-2">Account Type</label>
          <Select defaultValue="1" className="mb-5">
            <SelectItem value="1">Staff</SelectItem>
            <SelectItem value="2">Admin</SelectItem>
          </Select>
          <Button variant="primary" className="mt-3 w-[100%] font-bold">
            Sign up
          </Button>
          <div className="flex justify-center w-[100%]">
            <p className="text-xs text-gray-600 mt-4 text-center">
              Already have an account?
              <Link to="/auth" className="underline cursor-pointer ml-1">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormSignUp;
