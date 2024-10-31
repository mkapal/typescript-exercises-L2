import { useState } from "react";
import { Select } from "./03-type-parameters/04-generic-component/task-solution.tsx";

type Country = {
  value: string;
  label: string;
  currency: string;
};

function App() {
  const countries: Country[] = [
    {
      value: "CZE",
      label: "Czech Republic",
      currency: "CZK",
    },
    {
      value: "SVK",
      label: "Slovakia",
      currency: "EUR",
    },
    {
      value: "HUN",
      label: "Hungary",
      currency: "HUF",
    },
  ];

  const [selectedCountry, setSelectedCountry] = useState<Country | null>(
    countries[0],
  );

  return (
    <div>
      <label>
        Country:
        <Select
          options={countries}
          selectedOption={selectedCountry}
          onChange={setSelectedCountry}
        />
      </label>
      <div>{selectedCountry && `Currency: ${selectedCountry.currency}`}</div>
    </div>
  );
}

export default App;
