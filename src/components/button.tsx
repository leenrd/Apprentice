import { ButtonHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";

const buttonVariants = cva(
  "font-semibold rounded-md text-sm active:scale-95 text-white px-6 py-3",
  {
    variants: {
      variant: {
        default: "bg-blue-700 hover:bg-blue-600",
        long: "w-max bg-blue-700 hover:bg-blue-600",
        destructive: "bg-red-600 hover:bg-red-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({ className, variant, ...props }) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props} />
  );
};

export { Button, buttonVariants };
