import { Outlet } from "react-router-dom";
import Sidebar from "@/components/ui/shared/Sidebar";

const RootPage = () => {
  return (
    <main className="flex font-general tracking-tight">
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default RootPage;
