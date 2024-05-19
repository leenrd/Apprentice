import { useState } from "react";

const useServerErrors = () => {
  const [errFromServer, setErrFromServer] = useState(null);

  return [errFromServer, setErrFromServer];
};

export default useServerErrors;
