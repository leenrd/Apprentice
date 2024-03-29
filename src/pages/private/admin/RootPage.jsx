import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <div>
      RootPage Admin <Outlet />
    </div>
  );
};

export default RootPage;
