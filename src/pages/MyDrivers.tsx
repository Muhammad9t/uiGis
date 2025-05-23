import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, PlusCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  type ColumnFiltersState,
} from "@tanstack/react-table";

// Define the shape of your data
interface Driver {
  id: string;
  name: string;
  email: string;
  status: "Pending" | "Active" | "Blocked";
  createdAt: string;
}

// Dummy data for the table
const dummyData: Driver[] = [
  {
    id: "driver-1",
    name: "test",
    email: "amir@outscaler.com",
    status: "Blocked",
    createdAt: "2025-05-02",
  },
  {
    id: "driver-2",
    name: "Zee",
    email: "zeeshan@yl-solutions.de",
    status: "Active",
    createdAt: "2025-05-02",
  },
  // Add more dummy data as needed
];

function Mydrivers() {
  const [drivers, setDrivers] = useState(dummyData);
  const [deleteModal, setDeleteModal] = useState<null | {
    id: string;
    name: string;
  }>(null);

  // Define your columns (move this above useReactTable)
  const columns: ColumnDef<Driver>[] = [
    {
      accessorKey: "name",
      header: "NAME",
    },
    {
      accessorKey: "email",
      header: "EMAIL",
    },
    {
      accessorKey: "status",
      header: "STATUS",
      cell: ({ row }) => {
        const status = row.getValue("status") as Driver["status"];
        const badgeVariant =
          status === "Active"
            ? "default"
            : status === "Blocked"
            ? "destructive"
            : "secondary";
        return <Badge variant={badgeVariant as any}>{status}</Badge>;
      },
    },
    {
      accessorKey: "createdAt",
      header: "CREATED AT",
    },
    {
      id: "actions",
      header: "ACTIONS",
      cell: ({ row }) => {
        const driver = row.original;
        return (
          <div className="flex items-center space-x-2">
            {/* Change Status Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Change Status
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() =>
                    console.log("Change status to Active for", driver.id)
                  }
                >
                  Active
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    console.log("Change status to Pending for", driver.id)
                  }
                >
                  Pending
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    console.log("Change status to Blocked for", driver.id)
                  }
                >
                  Blocked
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Action Buttons */}
            <Link to="/check-serveys">
              <Button
                variant="outline"
                size="sm"
                onClick={() => console.log("Check Surveys for", driver.id)}
              >
                Check Surveys
              </Button>
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={() => console.log("Edit driver", driver.id)}
            >
              Edit
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() =>
                setDeleteModal({ id: driver.id, name: driver.name })
              }
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data: drivers,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    state: {
      columnFilters,
      globalFilter,
    },
  });

  const handleStatusFilter = (
    status: "Pending" | "Active" | "Blocked" | "All"
  ) => {
    if (status === "All") {
      table.setColumnFilters(columnFilters.filter((f) => f.id !== "status"));
    } else {
      table.setColumnFilters((prev) => {
        const filters = prev.filter((f) => f.id !== "status");
        filters.push({ id: "status", value: status });
        return filters;
      });
    }
  };

  function confirmDelete() {
    if (deleteModal) {
      setDrivers((prev) => prev.filter((d) => d.id !== deleteModal.id));
      setDeleteModal(null);
    }
  }

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {/* Search Input */}
          <Input
            placeholder="Search drivers..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          {/* Status Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                All Statuses <MoreHorizontal className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleStatusFilter("All")}>
                All
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleStatusFilter("Active")}>
                Active
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleStatusFilter("Blocked")}>
                Blocked
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleStatusFilter("Pending")}>
                Pending
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* Add Driver Button */}
        <Link to="/add-driver">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Add Driver
          </Button>
        </Link>
      </div>

      {/* Data Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {deleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-background rounded-xl shadow-xl p-8 w-full max-w-md flex flex-col gap-4 border border-border">
            <div className="flex items-center gap-3">
              <div className="bg-destructive/10 rounded-full p-2">
                <AlertTriangle className="text-destructive h-8 w-8" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Delete Driver</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Are you sure you want to delete{" "}
                  <span className="font-bold">{deleteModal.name}</span>? This
                  action cannot be undone.
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <Button variant="outline" onClick={() => setDeleteModal(null)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={confirmDelete}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mydrivers;
