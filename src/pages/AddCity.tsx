import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";

const countries = ["Germany", "United Kingdom", "France"];
const citiesByCountry: { [key: string]: string[] } = {
  Germany: ["Berlin", "Munich", "Hamburg"],
  "United Kingdom": ["London", "Manchester", "Liverpool"],
  France: ["Paris", "Lyon", "Marseille"],
};

const AddCity = () => {
  const [selectedCountry, setSelectedCountry] = React.useState(countries[0]);
  const [selectedCity, setSelectedCity] = React.useState(
    citiesByCountry[countries[0]][0]
  );
  const navigate = useNavigate();

  React.useEffect(() => {
    setSelectedCity(citiesByCountry[selectedCountry][0]);
  }, [selectedCountry]);

  return (
    <div className="flex justify-center items-start min-h-screen w-full max-w-3xl mx-auto">
      <form className="bg-background rounded-xl border border-border w-full p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium" htmlFor="country">
              Country
            </label>
            <select
              id="country"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="city">
              City
            </label>
            <select
              id="city"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {citiesByCountry[selectedCountry].map((city: string) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block mb-1 font-medium">Boundary KML File</label>
            <Input type="file" accept=".kml" className="max-w-xs" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Pipe Hal KML File</label>
            <Input type="file" accept=".kml" className="max-w-xs" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Val KML File</label>
            <Input type="file" accept=".kml" className="max-w-xs" />
          </div>
        </div>
        <hr />
        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
};

export default AddCity;
