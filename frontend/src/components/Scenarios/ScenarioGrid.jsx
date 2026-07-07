import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { scenarios } from "../../data/scenarios";
import ScenarioCard from "./ScenarioCard";
import { useData } from "../../context/DataContext";

function ScenarioGrid() {
  const [selectedScenario, setSelectedScenario] = useState(null);

  const { socket } = useData();

  const navigate = useNavigate();

  function handleScenarioSelect(scenario) {
    setSelectedScenario(scenario.id);

    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(
        JSON.stringify({
          action: scenario.action,
        })
      );
    }

    setTimeout(() => {
      navigate("/visualization");
    }, 700);
  }

  return (
    <div className="grid grid-cols-3 gap-10">
      {scenarios.map((scenario) => (
        <ScenarioCard
          key={scenario.id}
          scenario={scenario}
          selectedScenario={selectedScenario}
          onSelect={handleScenarioSelect}
        />
      ))}
    </div>
  );
}

export default ScenarioGrid;