import { Button } from "@tremor/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/dropdown";
import { RiDeleteBin2Fill, RiMore2Fill, RiPencilFill } from "@remixicon/react";
import DeleteConfirmationModal from "@/components/ui/DeleteConfirmationModal";
import useToggle from "@/hooks/useToggle";

const DropdownActions = () => {
  const [value, setToggle] = useToggle(false);

  return (
    <>
      {!value ? null : (
        <DeleteConfirmationModal
          itemDeletion={"user"}
          toggle={setToggle}
          value={value}
        />
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="secondary"
            className="border-none hover:bg-tremor-background-muted"
          >
            <RiMore2Fill className="size-4 text-tremor-background-emphasis" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span className="flex items-center gap-x-2">
              <RiPencilFill className="size-5 text-tremor-label" />
              <span className="text-base font-semibold">Edit</span>
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={setToggle}>
            <span className="flex items-center gap-x-2">
              <RiDeleteBin2Fill className="size-5 text-red-500" />
              <span className="text-base text-red-500 font-semibold">
                Delete
              </span>
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default DropdownActions;
