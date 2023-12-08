import { ButtonHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";

const buttonVariants = cva(
  "font-semibold rounded-md text-sm active:scale-95 text-white px-6 py-3",
  {
    variants: {
      variant: {
        default: "bg-blue-600 hover:bg-blue-700",
        long: "w-[100%] bg-blue-700 hover:bg-blue-600",
        destructive: "bg-red-500 hover:bg-red-600",
        ghost: "bg-transparent underline text-gray-400",
        outline: "bg-transparent text-gray-600 border-2 border-gray-300",
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

export { Button };
