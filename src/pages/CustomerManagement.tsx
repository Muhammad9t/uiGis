import React from "react";
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
import { MoreHorizontal, PlusCircle, Pencil, Trash2 } from "lucide-react";

const customers = [
  {
    name: "testingkhan",
    email: "testing@example.com",
    status: "Active",
    subscription: "None",
    createdAt: "2025-05-22",
  },
  {
    name: "Muhammad Hussnain",
    email: "tek.hussnain@gmail.com",
    status: "Pending",
    subscription: "None",
    createdAt: "2025-05-22",
  },
  {
    name: "Outscalers",
    email: "lovehumna@gmail.com",
    status: "Active",
    subscription: "None",
    createdAt: "2025-05-22",
  },
  {
    name: "Emily Davis",
    email: "emily@example.com",
    status: "Active",
    subscription: "Basic",
    createdAt: "2025-05-02",
  },
  {
    name: "Robert Wilson",
    email: "robert@example.com",
    status: "Active",
    subscription: "Premium",
    createdAt: "2025-05-02",
  },
  {
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
    subscription: "Premium",
    createdAt: "2025-05-02",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    status: "Active",
    subscription: "Basic",
    createdAt: "2025-05-02",
  },
];

const allStatuses = ["All Statuses", "Active", "Pending", "Blocked"];
const allSubscriptions = ["All Subscriptions", "None", "Basic", "Premium"];

function CustomerManagement() {
  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Statuses");
  const [subscriptionFilter, setSubscriptionFilter] =
    React.useState("All Subscriptions");

  const filteredCustomers = customers.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "All Statuses" || c.status === statusFilter;
    const matchesSubscription =
      subscriptionFilter === "All Subscriptions" ||
      c.subscription === subscriptionFilter;
    return matchesSearch && matchesStatus && matchesSubscription;
  });

  return (
    <div className="space-y-6 min-h-screen">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <Input
          placeholder="Search customers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="min-w-[180px] justify-between">
              {statusFilter}
              <MoreHorizontal className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Status</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {allStatuses.map((status) => (
              <DropdownMenuItem
                key={status}
                onClick={() => setStatusFilter(status)}
              >
                {status}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="min-w-[180px] justify-between">
              {subscriptionFilter}
              <MoreHorizontal className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Subscription</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {allSubscriptions.map((sub) => (
              <DropdownMenuItem
                key={sub}
                onClick={() => setSubscriptionFilter(sub)}
              >
                {sub}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="ml-auto">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Add Customer
          </Button>
        </div>
      </div>
      {/* Data Table */}
      <div className="bg-background rounded-xl border border-border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>NAME</TableHead>
              <TableHead>EMAIL</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead>SUBSCRIPTION</TableHead>
              <TableHead>CREATED AT</TableHead>
              <TableHead>ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCustomers.length ? (
              filteredCustomers.map((c) => (
                <TableRow key={c.email}>
                  <TableCell>{c.name}</TableCell>
                  <TableCell>{c.email}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        c.status === "Active"
                          ? "default"
                          : c.status === "Pending"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {c.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        c.subscription === "Premium" ? "outline" : "secondary"
                      }
                    >
                      {c.subscription}
                    </Badge>
                  </TableCell>
                  <TableCell>{c.createdAt}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          Change Status
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => {}}>
                          Active
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {}}>
                          Pending
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {}}>
                          Blocked
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button variant="outline" size="sm" className="ml-2">
                      <Pencil className="h-4 w-4" /> Edit
                    </Button>
                    <Button variant="destructive" size="sm" className="ml-2">
                      <Trash2 className="h-4 w-4" /> Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  No customers found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default CustomerManagement;
