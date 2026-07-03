import { useState } from "react";
import { scenarios } from "../../data/scenarios";
import ScenarioCard from "./ScenarioCard";

function ScenarioGrid() {
  const [selectedScenario, setSelectedScenario] = useState(null);

  return (
    <div className="grid grid-cols-3 gap-10">

      {scenarios.map((scenario) => (

        <ScenarioCard
          key={scenario.id}
          scenario={scenario}
          selectedScenario={selectedScenario}
          setSelectedScenario={setSelectedScenario}
        />

      ))}

    </div>
  );
}

export default ScenarioGrid;