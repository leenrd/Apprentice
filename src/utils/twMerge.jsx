import { twMerge } from "tailwind-merge";

const cn = (def, custom) => {
  return twMerge(def, custom);
};

export default cn;
