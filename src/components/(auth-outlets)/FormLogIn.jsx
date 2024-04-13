import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import Modal from "@/components/ui/Modal-portal";
import { Button, TextInput } from "@tremor/react";
import useToggle from "@/hooks/useToggle";
import * as y from "yup";

const FormLogIn = () => {
  const [value, setToggle] = useToggle(false);

  return (
    <>
      <div className="flex flex-col items-center gap-5 mb-10">
        <div>
          <img
            src="/auth_assets/app_favicon.png"
            alt="logo"
            className="w-11 h-11"
          />
        </div>
        <p className="font-bold text-3xl">Apprentice.</p>
      </div>
      <div className="flex flex-col items-center w-[45%]">
        <Form />
        <Button
          variant="light"
          className="hover:underline w-[100%]"
          onClick={setToggle}
        >
          Use test account?
        </Button>
        <div className="my-8 border-[.6px] border-gray-200 w-[100%]" />
        <p className="text-sm text-gray-500 mb-2">
          Don&apos;t have an account?
        </p>
        <Link
          to="signup"
          className="font-semibold text-center px-6 py-3 w-[100%] rounded-md text-sm bg-transparent active:scale-95 text-gray-600 border-2 border-gray-300"
        >
          Create account
        </Link>
        {value ? (
          <Modal>
            <div>
              <TestAccModal onClose={setToggle} />
            </div>
          </Modal>
        ) : null}
      </div>
    </>
  );
};

export default FormLogIn;

const Form = () => {
  const loginSchema = y.object().shape({
    username: y.string().required().min(3, "Invalid username"),
    password: y.string().required().min(8, "Must be at least 8 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    await new Promise((thing) => setTimeout(thing, 3000));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[100%]">
      <div className=" mb-2">
        <TextInput
          placeholder="Username"
          type="text"
          className="pl-4 pr-6 py-1"
          {...register("username")}
        />
        {errors.username ? (
          <p className="text-red-500 text-xs">Username required</p>
        ) : null}
      </div>
      <div className=" mb-8">
        <TextInput
          type="password"
          className="pl-4 pr-6 py-1"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password ? (
          <p className="text-red-500 text-xs">{`${
            errors.password.message.charAt(0).toUpperCase() +
            errors.password.message.slice(1)
          }`}</p>
        ) : null}
      </div>

      <button
        type="submit"
        className="cursor-pointer font-semibold rounded-md text-sm active:scale-95 disabled:opacity-80 disabled:cursor-not-allowed text-white px-6 py-2 w-[100%] bg-orange-600 hover:bg-orange-700 mb-2"
        disabled={isSubmitting}
      >
        Log in
      </button>
    </form>
  );
};

const TestAccModal = ({ onClose }) => {
  return (
    <>
      <div
        className="inset-0 flex justify-center items-center transition-colors h-full w-full z-10 bg-black opacity-25 absolute"
        onClick={onClose}
      ></div>
      <div className="p-5 z-50 bg-white rounded-md absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-5">
        <div className="p-10 flex-col items-start justify-start border-[0.8px] border-slate-200 rounded-md  hover:border-orange-600 transition-colors hover:shadow-lg cursor-pointer">
          <div className="flex gap-3 items-center mt-36">
            <div className="w-4 h-4 bg-orange-600 rounded-full "></div>
            <h2 className="font-bold text-xl mb-1">Staff</h2>
          </div>
          <p className="text-slate-500 w-52">
            Access to stocks, warehouse, and management.
          </p>
        </div>
        <div className="p-10 flex-col items-start justify-start border-[0.8px] border-slate-200 rounded-md hover:border-orange-600 transition-colors hover:shadow-lg cursor-pointer">
          <div className="flex gap-3 items-center mt-36">
            <div className="w-4 h-4 bg-orange-600 rounded-full "></div>
            <h2 className="font-bold text-xl mb-1">Admin</h2>
          </div>
          <p className="text-slate-500 w-52">
            Access to users: Accounts, warehouses, and arrays of management.
          </p>
        </div>
      </div>
    </>
  );
};

TestAccModal.propTypes = {
  onClose: PropTypes.func,
};
