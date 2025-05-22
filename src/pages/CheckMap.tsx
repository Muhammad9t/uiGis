import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowLeft, FileDown, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Switch } from "@/components/ui/switch";

const survey = {
  title: "Test",
  location: "Test",
  uploadedAt: "2025-05-02 09:24:11",
  description: "test",
};

const toggleLabels = [
  "City",
  "Boundary",
  "Hal",
  "Val",
  "KMZ",
  "KML",
  "Address",
  "Report",
] as const;
type ToggleLabel = (typeof toggleLabels)[number];

const CheckMap = () => {
  const [toggles, setToggles] = React.useState<Record<ToggleLabel, boolean>>({
    City: true,
    Boundary: false,
    Hal: false,
    Val: false,
    KMZ: false,
    KML: false,
    Address: false,
    Report: false,
  });

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 flex flex-col gap-8">
      {/* Header Card */}
      <Card className="w-full max-w-6xl mx-auto p-6 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Survey Info */}
          <div className="flex-1 flex flex-col gap-2">
            <h1 className="text-2xl font-bold mb-1">{survey.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" /> {survey.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> {survey.uploadedAt}
              </span>
            </div>
            <div className="mt-2">
              <span className="font-semibold">Description:</span>{" "}
              {survey.description}
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link to="/survey-details">
              <Button
                variant="outline"
                className="flex items-center gap-2"
                size="sm"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Survey
              </Button>
            </Link>

            <Button
              variant="secondary"
              className="flex items-center gap-2"
              size="sm"
            >
              <FileDown className="h-4 w-4" /> View Raw Data
            </Button>
            <Button
              className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white"
              size="sm"
            >
              <Download className="h-4 w-4" /> Download GeoJSON
            </Button>
          </div>
        </div>
      </Card>
      <div className="grid grid-cols-12 w-full max-w-6xl mx-auto flex-col gap-6">
        <div className="col-span-2 rounded-xl border bg-card p-3 flex flex-col gap-4 items-stretch">
          {toggleLabels.map((label) => (
            <div key={label} className="flex items-center gap-3">
              <Switch
                checked={toggles[label]}
                onCheckedChange={(checked: boolean) =>
                  setToggles((prev) => ({ ...prev, [label]: checked }))
                }
                id={`switch-${label}`}
              />
              <label
                htmlFor={`switch-${label}`}
                className="text-sm text-foreground cursor-pointer select-none"
              >
                {label}
              </label>
            </div>
          ))}
        </div>
        {/* Map Section */}
        <Card className="w-full max-w-6xl mx-auto col-span-10 overflow-hidden flex flex-col">
          {/* Replace this div with your map component */}
          <div className="w-full h-[400px] md:h-[600px] bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">[Map goes here]</span>
          </div>
        </Card>
      </div>
      {/* Footer Note */}
      <div className="w-full max-w-6xl mx-auto text-xs text-muted-foreground text-left px-2">
        Map data for survey conducted by Zee
      </div>
    </div>
  );
};

export default CheckMap;
