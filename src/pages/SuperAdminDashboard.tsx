import { SectionCards } from "@/components/section-cards";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Table } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const pendingApprovals = [
  {
    name: "Muhammad Hussnain",
    email: "tek.hussnain@gmail.com",
    registered: "2025-05-22",
  },
];

const SuperAdminDashboard = () => {
  return (
    <div className="space-y-6">
      <SectionCards />
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle>Pending Approvals</CardTitle>
            <CardDescription>
              Customers requiring approval to access the platform.
            </CardDescription>
          </div>
          <a
            href="#"
            className="text-primary text-sm font-medium hover:underline"
          >
            View all
          </a>
        </CardHeader>
        <CardContent>
          <div className="border border-border rounded-md overflow-hidden">
            <Table>
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-4 py-2">Name</th>
                  <th className="text-left px-4 py-2">Email</th>
                  <th className="text-left px-4 py-2">Registered</th>
                  <th className="text-left px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingApprovals.map((user) => (
                  <tr
                    key={user.email}
                    className="border-b border-border last:border-0"
                  >
                    <td className="font-semibold px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.registered}</td>
                    <td className="px-4 py-2">
                      <Button variant="outline" className="mr-2" size="sm">
                        Approve
                      </Button>
                      <Button variant="destructive" size="sm">
                        Block
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="py-6 text-center text-base">
            Welcome to the Admin Dashboard! You are logged in as an Admin.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuperAdminDashboard;
