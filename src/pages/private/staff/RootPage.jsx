import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <div>
      RootPage Staff <Outlet />
    </div>
  );
};

export default RootPage;
