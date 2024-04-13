import Sidebar from "@/components/ui/Sidebar";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <main className="flex font-general">
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default RootPage;
