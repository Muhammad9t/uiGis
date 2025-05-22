import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Trash2 } from "lucide-react";

const surveyData = [
  {
    title: "Test",
    location: "Test",
    date: "2025-05-02",
    status: "Rejected",
  },
];

const SurveyManagement = () => {
  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="bg-background rounded-xl border border-border overflow-x-auto w-full">
        <table className="w-full text-sm border border-border rounded-md overflow-hidden">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-4 text-left font-semibold text-muted-foreground tracking-wider border-b border-border">
                SURVEY TITLE
              </th>
              <th className="px-6 py-4 text-left font-semibold text-muted-foreground tracking-wider border-b border-border">
                LOCATION
              </th>
              <th className="px-6 py-4 text-left font-semibold text-muted-foreground tracking-wider border-b border-border">
                DATE
              </th>
              <th className="px-6 py-4 text-left font-semibold text-muted-foreground tracking-wider border-b border-border">
                STATUS
              </th>
              <th className="px-6 py-4 text-left font-semibold text-muted-foreground tracking-wider border-b border-border">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {surveyData.map((survey, idx) => (
              <tr key={idx} className="border-b border-border last:border-0">
                <td className="px-6 py-4 font-bold border-b border-border">
                  {survey.title}
                </td>
                <td className="px-6 py-4 text-muted-foreground border-b border-border">
                  {survey.location}
                </td>
                <td className="px-6 py-4 text-muted-foreground border-b border-border">
                  {survey.date}
                </td>
                <td className="px-6 py-4 border-b border-border">
                  <Badge
                    variant="destructive"
                    className="bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400 px-4 py-1 rounded-full font-semibold"
                  >
                    {survey.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 flex gap-2 border-b border-border">
                  <Button
                    variant="outline"
                    className="border-primary text-primary flex items-center gap-1"
                    size="sm"
                  >
                    <Eye className="h-4 w-4" /> View
                  </Button>
                  <Button
                    variant="destructive"
                    className="flex items-center gap-1"
                    size="sm"
                  >
                    <Trash2 className="h-4 w-4" /> Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SurveyManagement;
