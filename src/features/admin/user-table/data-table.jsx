import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react";
import { columns } from "./columns";
import PropTypes from "prop-types";
import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UserTable({ data }) {
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      sorting: [
        {
          id: "username",
          desc: false,
        },
      ],
      columnFilters: columnFilters,
    },
  });

  return (
    <>
      <Table>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className="border-b border-tremor-border dark:border-dark-tremor-border"
            >
              {headerGroup.headers.map((header) => (
                <TableHeaderCell
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      header.column.getToggleSortingHandler()(event);
                    }
                  }}
                  className={classNames(
                    header.column.getCanSort()
                      ? "cursor-pointer select-none"
                      : "",
                    "px-0.5 py-1.5"
                  )}
                  tabIndex={header.column.getCanSort() ? 0 : -1}
                  aria-sort={header.column.getIsSorted()}
                >
                  <div
                    className={classNames(
                      header.column.columnDef.enableSorting === true
                        ? "flex items-center justify-between gap-2 hover:bg-tremor-background-muted hover:dark:bg-dark-tremor-background-muted"
                        : header.column.columnDef.meta.align,
                      " rounded-tremor-default px-3 py-1.5"
                    )}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getCanSort() ? (
                      <div className="-space-y-2">
                        <RiArrowUpSLine
                          className={classNames(
                            "h-4 w-4 text-tremor-content-strong dark:text-dark-tremor-content-strong",
                            header.column.getIsSorted() === "desc"
                              ? "opacity-30"
                              : ""
                          )}
                          aria-hidden={true}
                        />
                        <RiArrowDownSLine
                          className={classNames(
                            "h-4 w-4 text-tremor-content-strong dark:text-dark-tremor-content-strong",
                            header.column.getIsSorted() === "asc"
                              ? "opacity-30"
                              : ""
                          )}
                          aria-hidden={true}
                        />
                      </div>
                    ) : null}
                  </div>
                </TableHeaderCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  className={classNames(cell.column.columnDef.meta.align)}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
UserTable.propTypes = {
  data: PropTypes.array.isRequired,
};
