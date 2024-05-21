import { RiCloseLine } from "@remixicon/react";
import { Dialog, DialogPanel, TextInput } from "@tremor/react";
import PropTypes from "prop-types";
import { Divider, NumberInput, Select } from "@tremor/react";

export default function AddWarehouseModal({ toggle, value }) {
  return (
    <>
      {value ? (
        <>
          <Dialog
            open={value}
            onClose={() => toggle(false)}
            static={true}
            className="z-[100]"
          >
            <DialogPanel className="sm:max-w-md">
              <div className="absolute right-0 top-0 pr-3 pt-3">
                <button
                  type="button"
                  className="rounded-tremor-small p-2 text-tremor-content-subtle hover:bg-tremor-background-subtle hover:text-tremor-content dark:text-dark-tremor-content-subtle hover:dark:bg-dark-tremor-background-subtle hover:dark:text-tremor-content"
                  onClick={() => toggle(false)}
                  aria-label="Close"
                >
                  <RiCloseLine
                    className="h-5 w-5 shrink-0"
                    aria-hidden={true}
                  />
                </button>
              </div>
              <form>
                <h3 className="tracking-tight text-lg  text-black font-bold">
                  Add warehouse information
                </h3>
                <p className="mt-2 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content mb-9">
                  Take a few moments to register the warehouse information.
                </p>
                <div className="flex flex-col gap-x-4 gap-y-6">
                  <div>
                    <label
                      htmlFor="Name"
                      className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                    >
                      Warehouse Name
                      <span className="text-red-500"> *</span>
                    </label>
                    <TextInput
                      type="text"
                      id="first-name"
                      name="first-name"
                      autoComplete="first-name"
                      placeholder="wh_south_warehouse"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="Capacity"
                      className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                    >
                      {" "}
                      Capacity <span className="text-red-500"> *</span>
                    </label>
                    <NumberInput className="mt-2" />
                  </div>

                  <div>
                    <label
                      htmlFor="Manger"
                      className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                    >
                      Manager <span className="text-red-500"> *</span>
                    </label>
                    <Select
                      className="mt-2"
                      defaultValue="Select Manager"
                      required
                    />
                  </div>
                </div>
                <Divider />
                <div className="flex items-center justify-end space-x-4">
                  <button
                    type="button"
                    className="whitespace-nowrap rounded-tremor-small px-4 py-2.5 text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                    onClick={() => toggle(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="whitespace-nowrap rounded-tremor-default bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </DialogPanel>
          </Dialog>
        </>
      ) : null}
    </>
  );
}

AddWarehouseModal.propTypes = {
  itemDeletion: PropTypes.func,
  toggle: PropTypes.func,
  value: PropTypes.bool,
};
