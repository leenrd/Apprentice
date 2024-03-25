import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import Modal from "@/components/ui/Modal-portal";
import { Button, TextInput } from "@tremor/react";

const FormLogIn = () => {
  const [TestAccountModal, setTestAccountModal] = useState(false);

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
          onClick={() => setTestAccountModal((prev) => !prev)}
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
        {TestAccountModal ? (
          <Modal>
            <div>
              <TestAccModal
                onClose={() => setTestAccountModal((prev) => !prev)}
              />
            </div>
          </Modal>
        ) : null}
      </div>
    </>
  );
};

export default FormLogIn;

const Form = () => {
  const { register, handleSubmit } = useForm();
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = useCallback(
    (e) => {
      setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
    },
    [setUser]
  );

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[100%]">
      <TextInput
        placeholder="Username"
        type="text"
        className="pl-4 pr-6 py-1 mb-2"
        name="username"
        value={user.username}
        onChange={handleChange}
        required
        {...register("username")}
      />
      <TextInput
        type="password"
        className="pl-4 pr-6 py-1 mb-8"
        placeholder="Password"
        value={user.password}
        name="password"
        onChange={handleChange}
        required
        {...register("password")}
      />
      <input
        type="submit"
        className="cursor-pointer font-semibold rounded-md text-sm active:scale-95 text-white px-6 py-2 w-[100%] bg-orange-600 hover:bg-orange-700 mb-2"
        value="Log in"
      />
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
            Access to stocks & staff, warehouse, and management.
          </p>
        </div>
        <div className="p-10 flex-col items-start justify-start border-[0.8px] border-slate-200 rounded-md hover:border-orange-600 transition-colors hover:shadow-lg cursor-pointer">
          <div className="flex gap-3 items-center mt-36">
            <div className="w-4 h-4 bg-orange-600 rounded-full "></div>
            <h2 className="font-bold text-xl mb-1">Admin</h2>
          </div>
          <p className="text-slate-500 w-52">
            Access to users: stocks & staff, warehouse, and arrays of items.
          </p>
        </div>
      </div>
    </>
  );
};

TestAccModal.propTypes = {
  onClose: PropTypes.func,
};
