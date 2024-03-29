import { Link } from "react-router-dom";
import { TextInput, Select, SelectItem, Button } from "@tremor/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as y from "yup";

const FormSignUp = () => {
  const signUpSchema = y.object().shape({
    username: y.string().required().min(3, "Invalid username"),
    password: y.string().required().min(8, "Must be at least 8 characters"),
    confirmPassword: y
      .string()
      .required()
      .oneOf([y.ref("password"), null]),
  });

  // TODO: error states
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 items-center w-[45%]"
      >
        <div className="w-[100%]">
          <label className="text-sm font-normal">User Information</label>
          <div>
            <TextInput
              type="text"
              className="pl-4 pr-6 py-1 mt-2"
              placeholder="Username"
              {...register("username")}
            />
            {errors.username ? (
              <p className="text-red-500 text-xs">Username is required</p>
            ) : null}
          </div>
        </div>
        <div className="w-[100%]">
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
        <div className="mb-8 w-[100%]">
          <TextInput
            type="password"
            className="pl-4 pr-6 py-1"
            placeholder="Confirm password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword ? (
            <p className="text-red-500 text-xs">Passwords must match</p>
          ) : null}
        </div>
        <div className="w-[100%] flex flex-col items-start">
          <label className="text-sm font-normal mb-2">Account Type</label>
          <Select defaultValue="1" className="mb-5">
            <SelectItem value="1">Staff</SelectItem>
            <SelectItem value="2">Admin</SelectItem>
          </Select>
          <Button
            variant="primary"
            className="mt-3 w-[100%] font-bold disabled:bg-orange-200 disabled:cursor-not-allowed"
            disabled={isSubmitting}
            type="submit"
          >
            Sign up
          </Button>
        </div>
      </form>
      <div className="flex justify-center w-[100%]">
        <p className="text-xs text-gray-600 mt-4 text-center">
          Already have an account?
          <Link to="/auth" className="underline cursor-pointer ml-1">
            Log in
          </Link>
        </p>
      </div>
    </>
  );
};

export default FormSignUp;
