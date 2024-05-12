import { useEffect, useState } from "react";
import { Button, Dialog, DialogPanel } from "@tremor/react";

// CommandMenu Prototype
const CommandMenu = () => {
  const [isOpen, setOpen] = useState(false);
  // Toggle the menu when CTRL+K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => setOpen(false)}
        static={true}
        className="z-[100]"
      >
        <DialogPanel className="max-w-sm">
          <h1 className="text-center mb-6">😌 Command Menu Prototype ✨</h1>
          <Button
            variant="light"
            className="mx-auto flex items-center"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default CommandMenu;
