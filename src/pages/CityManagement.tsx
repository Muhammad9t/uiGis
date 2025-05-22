import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

const cities = [
  { city: "Berlin", file: "berlin.csv" },
  { city: "London", file: "london.csv" },
  { city: "Paris", file: "paris.csv" },
];

const CityManagement = () => {
  const [search, setSearch] = React.useState("");
  const filteredCities = cities.filter((c) =>
    c.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 min-h-screen p-6">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <Input
          placeholder="Search cities..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
        <div className="ml-auto">
          <Link to="/add-city">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" /> Add City
            </Button>
          </Link>
        </div>
      </div>
      {/* Data Table */}
      <div className="bg-background rounded-xl border border-border overflow-x-auto w-full">
        <table className="w-full text-sm border border-border rounded-md overflow-hidden">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-4 text-left font-semibold text-muted-foreground tracking-wider border-b border-border">
                CITY
              </th>
              <th className="px-6 py-4 text-left font-semibold text-muted-foreground tracking-wider border-b border-border">
                VIEW FILE
              </th>
              <th></th>
              <th className="px-6 py-4 text-left font-semibold text-muted-foreground tracking-wider border-b border-border">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCities.length ? (
              filteredCities.map((c, idx) => (
                <tr key={idx} className="border-b border-border last:border-0">
                  <td className="px-6 py-4 font-bold">{c.city}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <Button
                      variant="outline"
                      className="border-primary text-primary flex items-center gap-1"
                      size="sm"
                    >
                      <Eye className="h-4 w-4" /> View HAL File
                    </Button>
                    <Button
                      variant="outline"
                      className="border-primary text-primary flex items-center gap-1"
                      size="sm"
                    >
                      <Eye className="h-4 w-4" /> View boundary KML File
                    </Button>
                    <Button
                      variant="outline"
                      className="border-primary text-primary flex items-center gap-1"
                      size="sm"
                    >
                      <Eye className="h-4 w-4" /> View VAL File
                    </Button>
                  </td>
                  <td></td>
                  <td className="px-6 py-4 flex gap-2">
                    <Button variant="outline" size="sm">
                      Change Status
                    </Button>
                    <Button variant="outline" size="sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a4 4 0 01-1.414.828l-4.243 1.414 1.414-4.243a4 4 0 01.828-1.414z"
                        />
                      </svg>
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      className="flex items-center gap-1"
                      size="sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center py-8">
                  No cities found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CityManagement;
