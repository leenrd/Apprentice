// Tremor Raw RadioGroup [v0.0.0]

import React from "react";
import * as RadioGroupPrimitives from "@radix-ui/react-radio-group";

import { cx, focusRing } from "@/lib/utils";

const RadioGroup = React.forwardRef(({ className, ...props }, forwardedRef) => {
  return (
    <RadioGroupPrimitives.Root
      ref={forwardedRef}
      className={cx("grid gap-2", className)}
      {...props}
    />
  );
});
RadioGroup.displayName = "RadioGroup";

const RadioGroupIndicator = React.forwardRef(
  ({ className, ...props }, forwardedRef) => {
    return (
      <RadioGroupPrimitives.Indicator
        ref={forwardedRef}
        className={cx("flex items-center justify-center", className)}
        {...props}
      >
        <div
          className={cx(
            // base
            "size size-1.5 shrink-0 rounded-full",
            // indicator
            "bg-white",
            // disabled
            "group-data-[disabled]:bg-gray-400 group-data-[disabled]:dark:bg-gray-500"
          )}
        />
      </RadioGroupPrimitives.Indicator>
    );
  }
);
RadioGroupIndicator.displayName = "RadioGroupIndicator";

const RadioGroupItem = React.forwardRef(
  ({ className, ...props }, forwardedRef) => {
    return (
      <RadioGroupPrimitives.Item
        ref={forwardedRef}
        className={cx(
          "group relative flex size-4 appearance-none items-center justify-center outline-none",
          className
        )}
        {...props}
      >
        <div
          className={cx(
            // base
            "flex size-4 shrink-0 items-center justify-center rounded-full border shadow-sm",
            // border color
            " border-gray-300 dark:border-gray-800",
            // background color
            "bg-white dark:bg-gray-950",
            // checked
            "group-data-[state=checked]:border-0 group-data-[state=checked]:border-transparent group-data-[state=checked]:bg-blue-500",
            // disabled
            "group-data-[disabled]:border",
            "group-data-[disabled]:border-gray-300 group-data-[disabled]:bg-gray-100 group-data-[disabled]:text-gray-400",
            "group-data-[disabled]:dark:border-gray-700 group-data-[disabled]:dark:bg-gray-800",
            // focus
            focusRing
          )}
        >
          <RadioGroupIndicator />
        </div>
      </RadioGroupPrimitives.Item>
    );
  }
);
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };
