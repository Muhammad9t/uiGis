import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Trash2, AlertTriangle } from "lucide-react";

const surveyData = [
  {
    title: "Test",
    location: "Test",
    date: "2025-05-02",
    status: "Rejected",
  },
];

const SurveyManagement = () => {
  const [surveys, setSurveys] = useState(surveyData);
  const [deleteModal, setDeleteModal] = useState<null | { title: string }>(
    null
  );

  function handleDelete(survey: { title: string }) {
    setDeleteModal(survey);
  }

  function confirmDelete() {
    if (deleteModal) {
      setSurveys((prev) => prev.filter((s) => s.title !== deleteModal.title));
      setDeleteModal(null);
    }
  }

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
            {surveys.map((survey, idx) => (
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
                    onClick={() => handleDelete(survey)}
                  >
                    <Trash2 className="h-4 w-4" /> Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-background rounded-xl shadow-xl p-8 w-full max-w-md flex flex-col gap-4 border border-border">
            <div className="flex items-center gap-3">
              <div className="bg-destructive/10 rounded-full p-2">
                <AlertTriangle className="text-destructive h-8 w-8" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Delete Survey</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Are you sure you want to delete{" "}
                  <span className="font-bold">{deleteModal.title}</span>? This
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
};

export default SurveyManagement;
