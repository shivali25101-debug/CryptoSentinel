import CyberHeading from "../../components/CyberHeading";
import TopologyCanvas from "../../components/NetworkTopology/TopologyCanvas";

function NetworkTopology() {
  return (
    <div className="px-8 py-8 space-y-8">

      <CyberHeading
        title="NETWORK TOPOLOGY"
        subtitle="VISUAL REPRESENTATION OF THE COMMUNICATION CHANNEL"
      />

      <TopologyCanvas />

    </div>
  );
}

export default NetworkTopology;