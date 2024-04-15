import OutletFooter from "@/components/ui/shared/OutletFooter";
import OutletHeader from "@components/ui/shared/OutletHeader";
import OutletWidthShell from "@components/ui/shared/OutletWidthShell";

const Users = () => {
  return (
    <article className="w-full flex flex-col min-h-screen justify-between">
      <OutletHeader
        title={"User Management"}
        subText={"Manage users and organize permissions."}
      />
      <OutletWidthShell>Users content</OutletWidthShell>
      <OutletFooter />
    </article>
  );
};

export default Users;
