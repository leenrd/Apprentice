import { Button } from "@/components/button";

const SignInPage = () => {
  return (
    <div className="h-screen grid grid-cols-2">
      <div className="bg-[url('./public/bgauth.jpg')] bg-center bg-cover flex flex-col items-start justify-between p-6">
        <CreatorPill />
        <p className="text-white ">2023 Apprentice. | All rights reserved.</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-5 mb-10">
          <div>
            <img src="./public/favicon.png" alt="logo" />
          </div>
          <p className="font-bold text-3xl">Apprentice.</p>
        </div>
        <div className="flex flex-col gap-2 items-center w-[45%]">
          <input
            type="text"
            className="pl-5 pr-7 py-3 bg-gray-100 rounded-[5px] focus:ring text-sm w-[100%]"
            placeholder="Username"
          />
          <input
            type="password"
            className="pl-5 pr-7 py-3 bg-gray-100 rounded-[5px] focus:ring text-sm w-[100%] mb-8"
            placeholder="Password"
          />
          <input
            type="submit"
            className="font-semibold rounded-md text-sm active:scale-95 text-white px-6 py-2 w-[100%] bg-blue-700 hover:bg-blue-600"
            value="Sign in"
          />
          <Button variant={"ghost"} className="py-0 hover:text-blue-600">
            Use test account?
          </Button>
          <div className="my-8 border-[.6px] border-gray-200 w-[100%]" />
          <p className="text-sm text-gray-500">Don't have an account?</p>
          <Button variant={"outline"} className="w-[100%] py-2">
            Create account
          </Button>
        </div>
      </div>
    </div>
  );
};

const CreatorPill = () => {
  return (
    <div className="bg-white/30 rounded-full py-2 px-5 flex items-center justify-center">
      <p className="text-sm text-white font-semibold">By Leenard Zarate</p>
    </div>
  );
};

export default SignInPage;
