import { Button } from "@/components/button";

const FormSignIn = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-5 mb-10">
        <div>
          <img src="/favicon.png" alt="logo" />
        </div>
        <p className="font-bold text-3xl">Apprentice.</p>
      </div>
      <form className="flex flex-col gap-2 items-center w-[45%]">
        <input
          type="text"
          className="pl-5 pr-7 py-3 bg-gray-100 rounded-[5px] focus:ring text-sm w-[100%] focus:outline-none focus:border-blue-700"
          placeholder="Username"
          required
        />
        <input
          type="password"
          className="pl-5 pr-7 py-3 bg-gray-100 rounded-[5px] focus:ring text-sm w-[100%] focus:outline-none focus:border-blue-700 mb-8"
          placeholder="Password"
          required
        />
        <input
          type="submit"
          className="cursor-pointer font-semibold rounded-md text-sm active:scale-95 text-white px-6 py-2 w-[100%] bg-blue-700 hover:bg-blue-600 mb-2"
          value="Sign in"
        />
        <Button variant={"ghost"} className="py-0 hover:text-blue-600">
          Use test account?
        </Button>
        <div className="my-8 border-[.6px] border-gray-200 w-[100%]" />
        <p className="text-sm text-gray-500 mb-2">Don't have an account?</p>
        <Button variant={"outline"} className="w-[100%] py-2">
          Create account
        </Button>
      </form>
    </>
  );
};

export default FormSignIn;
