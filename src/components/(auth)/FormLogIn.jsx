import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import Modal from "@/components/ui/Modal-portal";
import { Button, TextInput, Callout } from "@tremor/react";
import useToggle from "@/hooks/useToggle";
import { loginSchema } from "@/utils/validationSchemas";
import { useMutation } from "@tanstack/react-query";
import { LoginHelperFn } from "@/features/auth/auth-client-helpers";
import { useAuth } from "@/hooks/useAuth";
import { RiAlarmWarningLine } from "@remixicon/react";
import useServerErrors from "@/hooks/useServerErrors";

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
        <Form testAccModal={value} toggleTestAccModal={setToggle} />
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
      </div>
    </>
  );
};

export default FormLogIn;

const Form = ({ testAccModal, toggleTestAccModal }) => {
  const [errFromServer, setErrFromServer] = useServerErrors();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const logInMutation = useMutation({
    mutationKey: ["accessToken"],
    mutationFn: LoginHelperFn,
    staleTime: 600000,
    onSuccess: (data) => {
      setErrFromServer(null);
      login(data.data);
    },
    onError: (error) => {
      setErrFromServer(error.response.data.desc);
    },
  });

  const onSubmit = async (data) => {
    await logInMutation.mutateAsync(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-[100%]">
        {!errFromServer ? null : (
          <Callout
            className="my-5"
            title={errFromServer}
            icon={RiAlarmWarningLine}
            color="rose"
          />
        )}
        <div className=" mb-2">
          <TextInput
            placeholder="Username"
            type="text"
            className="pl-4 pr-6 py-1"
            error={errors.username ? true : null}
            {...register("username")}
          />
          {errors.username ? (
            <p className="text-red-500 text-xs">Username is required</p>
          ) : null}
        </div>
        <div className=" mb-8">
          <TextInput
            type="password"
            className="pl-4 pr-6 py-1"
            placeholder="Password"
            error={errors.password ? true : null}
            {...register("password")}
          />
          {errors.password ? (
            <p className="text-red-500 text-xs">{`${
              errors.password.message.charAt(0).toUpperCase() +
              errors.password.message.slice(1)
            }`}</p>
          ) : null}
        </div>

        <Button
          type="submit"
          className="cursor-pointer font-semibold rounded-md text-sm active:scale-95  text-white px-6 py-2 w-[100%] bg-tremor-brand hover:bg-tremor-brand-emphasis mb-2"
          loading={isSubmitting}
        >
          Log in
        </Button>
      </form>
      {testAccModal ? (
        <Modal>
          <div>
            <TestAccModal
              onClose={toggleTestAccModal}
              onSubmission={onSubmit}
            />
          </div>
        </Modal>
      ) : null}
    </>
  );
};

Form.propTypes = {
  testAccModal: PropTypes.bool,
  toggleTestAccModal: PropTypes.func,
};

const TestAccModal = ({ onClose, onSubmission }) => {
  const TestData = {
    staff: {
      username: "userFromAdmin",
      password: "wally090",
    },
    admin: {
      username: "Leenrd",
      password: "finalpass",
    },
  };

  const handleTestAcc = (data) => {
    onClose();
    onSubmission(data);
  };

  return (
    <>
      <div
        className="inset-0 flex justify-center items-center transition-colors min-h-full w-full z-10 bg-black opacity-25 absolute"
        onClick={onClose}
      ></div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          handleTestAcc(TestData.staff);
        }}
        className="p-5 z-50 bg-white rounded-md absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-5"
      >
        <div className="p-10 flex-col items-start justify-start border-[0.8px] border-slate-200 rounded-md  hover:border-tremor-brand transition-colors hover:shadow-lg cursor-pointer">
          <div className="flex gap-3 items-center mt-36">
            <div className="w-4 h-4 bg-tremor-brand rounded-full "></div>
            <h2 className="font-bold text-xl mb-1">Staff</h2>
          </div>
          <p className="text-slate-500 w-52">
            Access to stocks, warehouse, and management.
          </p>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleTestAcc(TestData.admin);
          }}
          className="p-10 flex-col items-start justify-start border-[0.8px] border-slate-200 rounded-md hover:border-tremor-brand transition-colors hover:shadow-lg cursor-pointer"
        >
          <div className="flex gap-3 items-center mt-36">
            <div className="w-4 h-4 bg-tremor-brand rounded-full "></div>
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
  onSubmission: PropTypes.func,
};
