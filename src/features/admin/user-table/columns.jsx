import { Badge } from "@tremor/react";
import DropdownActions from "./dropdown-actions";

export const columns = [
  {
    accessorKey: "username",
    header: "Username",
    enableSorting: true,
    meta: {
      align: "text-left",
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    enableSorting: false,
    meta: {
      align: "text-left",
    },
    cell: ({ row }) => {
      const role = row.getValue("role");
      return (
        <Badge
          color={
            role === "admin" ? "orange" : role === "user" ? "green" : "blue"
          }
          className="uppercase"
        >
          {role}
        </Badge>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Joined At",
    enableSorting: true,
    meta: {
      align: "text-left",
    },
  },
  {
    id: "actions",
    header: "Actions",
    meta: {
      align: "text-right",
    },
    cell: () => {
      return <DropdownActions />;
    },
  },
];
