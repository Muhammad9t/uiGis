import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowLeft, Trash2, Download, Map } from "lucide-react";
import { Link } from "react-router-dom";

const survey = {
  title: "Test",
  status: "Rejected",
  location: "Test",
  description: "test",
  uploadedAt: "2025-05-02 09:24:11",
};

const statusOptions = ["Approved", "Rejected", "Pending"];

const SurveyDetails = () => {
  const [status, setStatus] = React.useState(survey.status);

  return (
    <div className=" flex items-center justify-center bg-background w-full max-w-3xl mx-auto">
      <div className="w-full max-w-6xl bg-muted/60 dark:bg-muted/70 rounded-xl border border-border shadow-sm p-8 relative">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-2 text-foreground">
              {survey.title}
            </h1>
            <div className="mt-4 md:mt-0">
              <div className="text-lg font-semibold text-foreground">
                Description
              </div>
              <div className="text-base text-muted-foreground">
                {survey.description}
              </div>
            </div>
            <div className="mt-4">
              <div className="text-lg font-semibold text-foreground">
                Location
              </div>
              <div className="text-base text-muted-foreground">
                {survey.location}
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col md:items-end md:justify-between gap-4">
            <div className="text-right text-sm text-muted-foreground">
              Uploaded on {survey.uploadedAt}
            </div>
            <div className="flex items-center gap-3 mb-2 rounded">
              <span className="text-sm text-muted-foreground">Status</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="px-4">
                    {status}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {statusOptions.map((opt) => (
                    <DropdownMenuItem
                      key={opt}
                      onClick={() => setStatus(opt)}
                      className="capitalize"
                    >
                      {opt}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Badge
                variant="destructive"
                className="bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400 px-4 py-1 rounded-full font-semibold"
              >
                {status}
              </Badge>
            </div>
          </div>
        </div>
        {/* Processed Data */}
        <div className="mt-8">
          <div className="text-lg font-bold mb-3 text-foreground">
            Processed Data
          </div>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              size="sm"
            >
              <Download className="h-4 w-4" /> Download Processed File
            </Button>
            <Link to="/check-map">
              <Button
                variant="outline"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white"
                size="sm"
              >
                <Map className="h-4 w-4" /> View on Map
              </Button>
            </Link>
          </div>
        </div>
        {/* Footer Actions */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
          <Link to="/check-serveys">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              size="lg"
            >
              <ArrowLeft className="h-5 w-5" /> Back to Surveys
            </Button>
          </Link>

          <Button
            variant="destructive"
            className="flex items-center gap-2 px-8"
            size="lg"
          >
            <Trash2 className="h-5 w-5" /> Delete Survey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SurveyDetails;
