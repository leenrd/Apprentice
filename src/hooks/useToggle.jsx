import { useState } from "react";

const useToggle = () => {
  const [value, setValue] = useState();
  const setToggle = (params) => {
    setValue((prev) => (typeof params === "boolean" ? params : !prev));
  };

  return [value, setToggle];
};

export default useToggle;
