import { Link } from "react-router-dom";
import { TextInput, Select, SelectItem, Button } from "@tremor/react";
import { useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "@/utils/validationSchemas";

const FormSignUp = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const { field } = useController({ control, name: "role" });

  const onSubmit = async (data) => {
    console.log(data);
    await new Promise((thing) => setTimeout(thing, 3000));
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
              error={errors.username ? true : null}
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
        <div className="mb-8 w-[100%]">
          <TextInput
            type="password"
            className="pl-4 pr-6 py-1"
            placeholder="Confirm password"
            error={errors.confirmPassword ? true : null}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword ? (
            <p className="text-red-500 text-xs">Passwords must match</p>
          ) : null}
        </div>
        <div className="w-[100%] flex flex-col items-start">
          <label className="text-sm font-normal mb-2">Account Type</label>
          <Select
            name="role"
            defaultValue={field.defaultValue}
            className="mb-1"
            value={field.value}
            onChange={field.onChange}
            error={errors.role ? true : null}
          >
            <SelectItem
              value="staff"
              onBlur={field.onBlur}
              name={field.name}
              ref={field.ref}
            >
              Staff
            </SelectItem>
            <SelectItem
              value="admin"
              onBlur={field.onBlur}
              name={field.name}
              ref={field.ref}
            >
              Admin
            </SelectItem>
          </Select>
          {errors.role ? (
            <p className="text-red-500 text-xs mb-5">Role is required</p>
          ) : null}
          <Button
            variant="primary"
            className="mt-3 w-[100%] font-bold"
            loading={isSubmitting}
            type="submit"
          >
            Sign up
          </Button>
        </div>
      </form>
      <div className="flex justify-center w-[100%]">
        <p className="text-xs text-gray-600 mt-4 text-center">
          Already have an account?
          <Link to="/" className="underline cursor-pointer ml-1">
            Log in
          </Link>
        </p>
      </div>
    </>
  );
};

export default FormSignUp;
