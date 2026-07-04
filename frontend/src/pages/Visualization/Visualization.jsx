import CyberHeading from "../../components/CyberHeading";
import ScenarioCard from "../../components/Visualization/ScenarioCard";
import LiveStats from "../../components/Visualization/LiveStats";
import NetworkCanvas from "../../components/Visualization/NetworkCanvas";
import TrafficFlow from "../../components/Visualization/TrafficFlow";
import AttackTimeline from "../../components/Visualization/AttackTimeline";

function Visualization() {
  return (
    <div className="min-h-screen px-8 py-0 bg-[#020817]">

      <CyberHeading title="NETWORK VISUALIZATION" />

      {/* Top Cards */}
      <div className="grid grid-cols-12 gap-4 mt-6">

        <div className="col-span-6">
          <ScenarioCard />
        </div>

        <div className="col-span-6">
          <LiveStats />
        </div>

      </div>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-4 mt-4">

        {/* Network Canvas */}
        <div className="col-span-9">
          <NetworkCanvas />
        </div>

        {/* Right Panel */}
        <div className="col-span-3 flex flex-col gap-4">

          <div className="h-[330px]">
            <TrafficFlow />
          </div>

          <div className="h-[500px]">
            <AttackTimeline />
          </div>

        </div>

      </div>

    </div>
  );
}

export default Visualization;