import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Trash2, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const surveyData = [
  {
    title: "Test",
    location: "Test",
    date: "2025-05-02",
    status: "Rejected",
  },
];

const statusOptions = ["All Statuses", "Approved", "Rejected", "Pending"];

const CheckServeys = () => {
  const [search, setSearch] = React.useState("");
  const [status, setStatus] = React.useState("All Statuses");
  const [dateFrom, setDateFrom] = React.useState("");
  const [dateTo, setDateTo] = React.useState("");

  // Filtering logic (simple demo)
  const filteredData = surveyData.filter((s) => {
    const matchesSearch =
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.location.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === "All Statuses" || s.status === status;
    // Date filtering omitted for brevity
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen  flex flex-col items-center p-8">
      {/* Toolbar */}
      <div className="w-full max-w-5xl bg-background rounded-xl mb-8 flex flex-wrap gap-4 items-center justify-between">
        <Input
          placeholder="Search title or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {statusOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <div className="flex gap-2 items-center">
          <div className="relative">
            <Input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="pr-10"
            />
            <Calendar className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
          <span className="mx-1 text-muted-foreground">to</span>
          <div className="relative">
            <Input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="pr-10"
            />
            <Calendar className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>
      </div>
      {/* Table */}
      <div className="w-full max-w-5xl bg-background rounded-xl border border-border overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-muted-foreground tracking-wider">
                SURVEY TITLE
              </th>
              <th className="px-6 py-4 text-left font-semibold text-muted-foreground tracking-wider">
                LOCATION
              </th>
              <th className="px-6 py-4 text-left font-semibold text-muted-foreground tracking-wider">
                DATE
              </th>
              <th className="px-6 py-4 text-left font-semibold text-muted-foreground tracking-wider">
                STATUS
              </th>
              <th className="px-6 py-4 text-left font-semibold text-muted-foreground tracking-wider">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length ? (
              filteredData.map((survey, idx) => (
                <tr key={idx} className="border-b border-border last:border-0">
                  <td className="px-6 py-4 font-bold">{survey.title}</td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {survey.location}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {survey.date}
                  </td>
                  <td className="px-6 py-4">
                    <Badge
                      variant="destructive"
                      className="bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400 px-4 py-1 rounded-full font-semibold"
                    >
                      {survey.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <Link to="/survey-details">
                      <Button
                        variant="outline"
                        className="border-primary text-primary flex items-center gap-1"
                        size="sm"
                      >
                        <Eye className="h-4 w-4" /> View
                      </Button>
                    </Link>
                    <Button
                      variant="destructive"
                      className="flex items-center gap-1"
                      size="sm"
                    >
                      <Trash2 className="h-4 w-4" /> Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-8">
                  No surveys found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckServeys;
