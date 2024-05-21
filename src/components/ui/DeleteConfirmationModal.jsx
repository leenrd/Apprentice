import { RiCloseLine } from "@remixicon/react";
import { Dialog, DialogPanel, TextInput } from "@tremor/react";
import PropTypes from "prop-types";

export default function DeleteConfirmationModal({
  itemDeletion,
  toggle,
  value,
}) {
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
                <h4 className="tracking-tight text-lg  text-black font-bold">
                  Delete {itemDeletion[0].toUpperCase() + itemDeletion.slice(1)}
                </h4>
                <p className="mt-2 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
                  All {itemDeletion} data will be permanently deleted. There is
                  no coming back after you press delete.
                </p>
                <label
                  htmlFor="delete-{itemDeletion}"
                  className="mt-6 block text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                >
                  Confirm password
                </label>
                <TextInput
                  id="delete-{itemDeletion}"
                  name="delete-{itemDeletion}"
                  type="password"
                  placeholder="Password"
                  className="mt-2"
                />
                <button
                  type="submit"
                  className="mt-4 w-full whitespace-nowrap rounded-tremor-default bg-red-500 px-4 py-2 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-red-600 dark:bg-red-500 dark:text-tremor-brand-inverted dark:shadow-dark-tremor-input hover:dark:bg-red-600"
                >
                  Delete {itemDeletion} permanently
                </button>
              </form>
            </DialogPanel>
          </Dialog>
        </>
      ) : null}
    </>
  );
}

DeleteConfirmationModal.propTypes = {
  itemDeletion: PropTypes.func,
  toggle: PropTypes.func,
  value: PropTypes.bool,
};
