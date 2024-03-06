const FormAdminSignup = () => {
  return (
    <>
      <div className="flex flex-col items-center mb-10">
        <div className="mb-5">
          <img src={"/app_favicon.png"} alt="logo" />
        </div>
        <p className="font-bold text-3xl">Create an account</p>
        <p className="text-gray-400 text-sm">
          Enter your required info below to create your account.
        </p>
      </div>
      <form className="flex flex-col gap-2 items-center w-[45%]">
        <div className="w-[100%]">
          <label className="text-sm font-normal">Admin Information</label>
          <input
            type="text"
            className="pl-5 pr-7 py-3 bg-gray-100 rounded-[5px] focus:ring text-sm w-[100%] focus:outline-none focus:border-red-600 mt-2"
            placeholder="Name"
            required
          />
        </div>
        <input
          type="text"
          className="pl-5 pr-7 py-3 bg-gray-100 rounded-[5px] focus:ring text-sm w-[100%] focus:outline-none focus:border-red-600"
          placeholder="Staff ID"
          required
        />
        <input
          type="submit"
          className="cursor-pointer font-semibold rounded-md text-sm active:scale-95 text-white px-6 py-2 w-[100%] bg-red-600 hover:bg-red-600 mt-5"
          value="Sign in"
        />
      </form>
    </>
  );
};

export default FormAdminSignup;
