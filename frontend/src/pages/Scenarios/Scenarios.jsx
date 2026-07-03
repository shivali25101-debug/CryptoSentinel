import ScenarioGrid from "../../components/Scenarios/ScenarioGrid";
import CyberHeading from "../../components/CyberHeading";

function Scenarios() {
  return (
    <div className="min-h-screen px-8 py-8">

      <CyberHeading
        title="SELECT ATTACK SCENARIO"
        subtitle="CHOOSE ONE SCENARIO TO BEGIN THE SIMULATION"
      />

      <ScenarioGrid />

    </div>
  );
}

export default Scenarios;