import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const UploadServey = () => {
  return (
    <div className="flex justify-center items-start min-h-screen w-full max-w-3xl mx-auto">
      <Card className="w-full p-8">
        <CardContent className="space-y-6 p-0">
          <div>
            <label className="block mb-1 font-medium" htmlFor="survey-title">
              Survey Title
            </label>
            <Input id="survey-title" placeholder="Enter survey title" />
          </div>
          <div>
            <label
              className="block mb-1 font-medium"
              htmlFor="survey-description"
            >
              Description
            </label>
            <textarea
              id="survey-description"
              placeholder="Enter description"
              rows={4}
              className="w-full rounded-md border border-input px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="survey-location">
              Location
            </label>
            <Input id="survey-location" placeholder="Enter location" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block mb-1 font-medium">Survey CSV File</label>
              <Input type="file" accept=".csv" className="max-w-xs" />
              <div className="text-sm text-muted-foreground mt-1">
                Upload a CSV file containing survey data (Max size: 10MB). The
                file will be processed before submission.
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium">KMZ File</label>
              <Input type="file" accept=".csv" className="max-w-xs" />
              <div className="text-sm text-muted-foreground mt-1">
                Upload a KMZ file containing survey data (Max size: 10MB). The
                file will be processed before submission.
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium">KML File</label>
              <Input type="file" accept=".csv" className="max-w-xs" />
              <div className="text-sm text-muted-foreground mt-1">
                Upload a KML file containing survey data (Max size: 10MB). The
                file will be processed before submission.
              </div>
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium">Photos</label>
            <Input type="file" accept="image/*" multiple className="max-w-xs" />
            <div className="text-sm text-muted-foreground mt-1">
              Each photo must be under 5MB. Total photos size cannot exceed
              20MB.
            </div>
          </div>
          <div>
            <Button type="submit" className="mt-4 w-40">
              Upload Survey
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UploadServey;
