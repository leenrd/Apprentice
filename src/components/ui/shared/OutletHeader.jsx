import PropTypes from "prop-types";
import {
  RiSearchLine,
  RiAlarmWarningLine,
  RiCloseLine,
} from "@remixicon/react";
import {
  TextInput,
  Button,
  Dialog,
  DialogPanel,
  Callout,
  Select,
  SelectItem,
  NumberInput,
  Card,
} from "@tremor/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown";
import { RadioGroup, RadioGroupItem } from "@/components/radioGroup";
import {
  Blocks,
  ChevronDown,
  PackagePlus,
  User,
  Warehouse,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import AccountType from "@/utils/authRoleConstant";
import useToggle from "@/hooks/useToggle";
import useServerErrors from "@/hooks/useServerErrors";
import { signUpSchema, warehouseSchema } from "@/utils/validationSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useController } from "react-hook-form";
import callAPI from "@/utils/axiosInstance";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import queryProvider from "@/utils/queryProvider";

const OutletHeader = ({ title, subText, type, searchPlaceholder }) => {
  return (
    <div className="border-b-slate border-b-2 px-9 py-[0.7rem] ml-[15rem] flex items-center justify-between">
      <div>
        <h1 className="text-base font-bold">{title}</h1>
        <span className="text-sm text-tremor-content">{subText}</span>
      </div>
      <div>
        <div className="flex gap-2">
          {" "}
          {type !== "settings" ? (
            <SearchBar searchPlaceholder={searchPlaceholder} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

const SearchBar = ({ searchPlaceholder = "Search" }) => {
  const [isWarehouseOpen, setWarehouseToggle] = useToggle(false);
  const [isOpenUser, setIsOpenUser] = useToggle(false);
  const { userAuth } = useAuth();

  return (
    <>
      {isOpenUser && (
        <DialogAddUser isOpen={isOpenUser} setIsOpen={setIsOpenUser} />
      )}
      {isWarehouseOpen && (
        <DialogAddWarehouse
          isOpen={isWarehouseOpen}
          setIsOpen={setWarehouseToggle}
        />
      )}
      <TextInput icon={RiSearchLine} placeholder={searchPlaceholder} />{" "}
      {userAuth.role === AccountType.Admin ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              <span className="flex gap-3">
                <Blocks className="h-5 w-5" />
                <ChevronDown className="h-5 w-5" />
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={setIsOpenUser}>
              <span className="flex items-center gap-x-2">
                <User className="size-5 text-tremor-label" />
                <span className="text-base font-semibold">New User</span>
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={setWarehouseToggle}>
              <span className="flex items-center gap-x-2">
                <Warehouse className="size-5 " />
                <span className="text-base  font-semibold">New Warehouse</span>
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button>
          <PackagePlus className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};

const DialogAddUser = ({ isOpen, setIsOpen }) => {
  const [errFromServer, setErrFromServer] = useServerErrors();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const addUser = useMutation({
    mutationFn: async (data) => {
      return await callAPI.post("/api/users", data);
    },
    onSuccess: () => {
      setErrFromServer(null);
      setIsOpen(false);
    },
    onError: (error) => {
      setErrFromServer(error.response.data.desc);
    },
  });

  const { field } = useController({ control, name: "role" });

  const onSubmit = async (data) => {
    console.log(data);
    await addUser.mutateAsync(data);
    reset();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      static={true}
      className="z-[100]"
    >
      <DialogPanel className="max-w-sm">
        <div className="flex justify-between">
          <h1 className="text-tremor-title text-black font-bold">
            Add new User
          </h1>
          <div className="absolute right-0 top-0 pr-3 pt-3">
            <button
              type="button"
              className="rounded-tremor-small p-2 text-tremor-content-subtle hover:bg-tremor-background-subtle hover:text-tremor-content dark:text-dark-tremor-content-subtle hover:dark:bg-dark-tremor-background-subtle hover:dark:text-tremor-content"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              <RiCloseLine className="h-5 w-5 shrink-0" aria-hidden={true} />
            </button>
          </div>
        </div>

        {/* FORM------------- */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 items-center w-[100%] my-8"
        >
          {!errFromServer ? null : (
            <Callout
              className="my-5 w-full"
              title={errFromServer}
              icon={RiAlarmWarningLine}
              color="rose"
            />
          )}
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
              Add user
            </Button>
          </div>
        </form>
      </DialogPanel>
    </Dialog>
  );
};

const DialogAddWarehouse = ({ isOpen, setIsOpen }) => {
  const [errFromServer, setErrFromServer] = useServerErrors();
  // const [managerModal, setManagerModal] = useToggle(false);
  const [manager, setManager] = useState("Select");
  const [selectedOption, setSelectedOption] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(warehouseSchema),
  });

  const addWarehouse = useMutation({
    mutationFn: async (data) => {
      return await callAPI.post("/api/warehouses", data);
    },
    onSuccess: () => {
      setErrFromServer(null);
      setIsOpen(false);
    },
    onError: (error) => {
      setErrFromServer(error.response.data.desc);
    },
  });

  const users = queryProvider.getQueryData("users");

  const onSubmit = async (data) => {
    console.log(data);
    await addWarehouse.mutateAsync(data);
    reset();
  };

  return (
    <>
      {/* {!managerModal ? null : (
        <Dialog
          open={managerModal}
          onClose={() => setManagerModal(false)}
          static={true}
          className="z-[101]"
        >
          <DialogPanel className="max-w-sm">
            <div className="flex justify-between">
              <h1 className="text-tremor-title text-black font-bold">
                Unassigned users
              </h1>
              <div className="absolute right-0 top-0 pr-3 pt-3">
                <button
                  type="button"
                  className="rounded-tremor-small p-2 text-tremor-content-subtle hover:bg-tremor-background-subtle hover:text-tremor-content dark:text-dark-tremor-content-subtle hover:dark:bg-dark-tremor-background-subtle hover:dark:text-tremor-content"
                  onClick={() => setManagerModal(false)}
                  aria-label="Close"
                >
                  <RiCloseLine
                    className="h-5 w-5 shrink-0"
                    aria-hidden={true}
                  />
                </button>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      )} */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        static={true}
        className="z-[100] min-h-fit"
      >
        <DialogPanel>
          <div className="flex justify-between">
            <h1 className="text-tremor-title text-black font-bold">
              Add new Warehouse
            </h1>
            <div className="absolute right-0 top-0 pr-3 pt-3">
              <button
                type="button"
                className="rounded-tremor-small p-2 text-tremor-content-subtle hover:bg-tremor-background-subtle hover:text-tremor-content dark:text-dark-tremor-content-subtle hover:dark:bg-dark-tremor-background-subtle hover:dark:text-tremor-content"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                <RiCloseLine className="h-5 w-5 shrink-0" aria-hidden={true} />
              </button>
            </div>
          </div>

          {/* FORM-------------- */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="gap-2 w-[100%] my-8"
          >
            {!errFromServer ? null : (
              <Callout
                className="my-5 w-full"
                title={errFromServer}
                icon={RiAlarmWarningLine}
                color="rose"
              />
            )}
            <div className="w-full grid grid-cols-2 gap-4">
              <div className="span">
                <label className="text-sm font-normal">
                  Warehouse Information
                </label>
                <div className="mb-5">
                  <TextInput
                    type="text"
                    className="pl-4 pr-6 py-1 mt-2"
                    placeholder="Warehouse name"
                    error={errors.name ? true : null}
                    {...register("name")}
                  />
                  {errors.name ? (
                    <p className="text-red-500 text-xs">Name is required</p>
                  ) : null}
                </div>
              </div>
              <div>
                <label className="text-sm font-normal">Capacity</label>
                <div className="mb-5">
                  <NumberInput
                    className="mt-2 py-1"
                    min={1}
                    placeholder="Capacity"
                    error={errors.capacity ? true : null}
                    {...register("capacity")}
                  />
                  {errors.capacity ? (
                    <p className="text-red-500 text-xs">Capacity is required</p>
                  ) : null}
                </div>
              </div>
              <div className="col-span-2">
                <label className="text-sm font-normal">Primary Manager</label>
                <div>
                  <Card
                    className={`my-2 px-4 py-2  ${
                      errors.manager ? "border border-red-500" : null
                    }`}
                  >
                    {manager}
                  </Card>
                  <Card className="h-1000px">
                    <RadioGroup
                      value={selectedOption}
                      onValueChange={(value) => {
                        setSelectedOption(value);
                      }}
                    >
                      {users?.map((user) => (
                        <div
                          className="flex items-center gap-x-3"
                          key={user._id}
                        >
                          <RadioGroupItem value="1" id={user._id} />
                          <label htmlFor={user._id}>{user.username}</label>
                        </div>
                      ))}
                    </RadioGroup>
                  </Card>
                  {errors.manager ? (
                    <p className="text-red-500 text-xs">Manager is required</p>
                  ) : null}
                </div>
              </div>
              <Button
                variant="primary"
                className="mt-3 w-[100%]  font-bold col-span-2"
                type="submit"
                loading={isSubmitting}
              >
                Add Warehouse
              </Button>
            </div>
          </form>
        </DialogPanel>
      </Dialog>
    </>
  );
};

DialogAddWarehouse.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

DialogAddUser.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

SearchBar.propTypes = {
  searchPlaceholder: PropTypes.string,
  toggle: PropTypes.func,
  value: PropTypes.bool,
};

OutletHeader.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  searchPlaceholder: PropTypes.string,
  cmdToggle: PropTypes.func,
};

export default OutletHeader;
