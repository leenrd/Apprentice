import OutletFooter from "@/components/ui/shared/OutletFooter";
import UserTable from "@/features/admin/user-table/data-table";
import OutletHeader from "@components/ui/shared/OutletHeader";
import OutletWidthShell from "@components/ui/shared/OutletWidthShell";
import { useQuery } from "@tanstack/react-query";
import callAPI from "@/utils/axiosInstance";

const Users = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await callAPI.get("/api/users");
      return data;
    },
  });

  return (
    <article className="w-full flex flex-col min-h-screen justify-between">
      <div>
        <OutletHeader
          title={"User Management"}
          subText={"Manage users and organize permissions."}
          searchPlaceholder={"Search users..."}
        />
        <OutletWidthShell>
          {isPending ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>Error: {error.message}</div>
          ) : (
            <UserTable data={data} />
          )}
        </OutletWidthShell>
      </div>
      <OutletFooter />
    </article>
  );
};

export default Users;
