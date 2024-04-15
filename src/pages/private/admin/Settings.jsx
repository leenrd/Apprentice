import OutletFooter from "@/components/ui/shared/OutletFooter";
import OutletHeader from "@components/ui/shared/OutletHeader";
import OutletWidthShell from "@components/ui/shared/OutletWidthShell";
import { Divider, TextInput, Button } from "@tremor/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signUpSchema } from "@/utils/validationSchemas";

const Settings = () => {
  return (
    <article className="w-full flex flex-col min-h-screen justify-between">
      <OutletHeader
        type={"settings"}
        title={"Settings"}
        subText={"Manage your account settings and set preferences."}
      />
      <OutletWidthShell>
        <SettingsForms />
      </OutletWidthShell>
      <OutletFooter />
    </article>
  );
};

const SettingsForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    await new Promise((thing) => setTimeout(thing, 3000));
    reset();
  };
  return (
    <div className="mb-14">
      <header>
        <h1 className="font-bold text-lg">Profile</h1>
        <p className="text-tremor-content">This is your credentials</p>
      </header>
      <Divider />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-2">
            <h6>Username</h6>
            <TextInput
              className="max-w-lg"
              placeholder="John Leenard"
              error={errors.username ? true : null}
              {...register("username")}
            />
            {errors.username ? (
              <p className="text-red-500 text-xs">Username is required</p>
            ) : null}
            <p className="text-sm text-tremor-content-emphasis">
              This is your public display name. It can be your real name or a
              pseudonym.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h6>Password</h6>
            <TextInput
              className="max-w-lg"
              type="password"
              placeholder="Must greater than 8 characters"
              error={errors.password ? true : null}
              {...register("password")}
            />
            {errors.password ? (
              <p className="text-red-500 text-xs">{`${
                errors.password.message.charAt(0).toUpperCase() +
                errors.password.message.slice(1)
              }`}</p>
            ) : null}
            <p className="text-sm text-tremor-content-emphasis">
              This is your public display name. It can be your real name or a
              pseudonym.
            </p>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <h6>Confirm Password</h6>
            <TextInput
              className="max-w-lg"
              type="password"
              placeholder="Confirm your password"
              error={errors.confirmPassword ? true : null}
              {...register("confirmPassword")}
            />
            {errors.confirmPassword ? (
              <p className="text-red-500 text-xs">Passwords must match</p>
            ) : null}
            <p className="text-sm text-tremor-content-emphasis">
              This is your public display name. It can be your real name or a
              pseudonym.
            </p>
          </div>
          <Button
            variant="primary"
            className="max-w-xs"
            type="submit"
            loading={isSubmitting}
          >
            Update Profile
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
