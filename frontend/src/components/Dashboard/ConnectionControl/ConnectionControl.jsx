import { useState } from "react";
import TopologyCanvas from "./TopologyCanvas";
import ConnectionButtons from "./ConnectionButtons";
import ConnectionStatus from "./ConnectionStatus";

function ConnectionControl() {
  const [scenario, setScenario] = useState("normal");

  return (
    <div className=" rounded-xl border border-[#1B2430] bg-[#08111D] overflow-hidden">

      {/* Header */}
      <div className="px-6 py-2 border-b border-[#18222F]">
        <h2 className="text-[15px] font-semibold tracking-[0.18em] uppercase text-cyan-400 bold ">
          Connection Control
        </h2>
      </div>

      <div className="flex flex-col h-[calc(100%-60px)]">

        <div className="flex-1 flex items-center justify-center">
          <TopologyCanvas />
        </div>

        <ConnectionStatus scenario={scenario} />

        <ConnectionButtons setScenario={setScenario} />

      </div>
    </div>
  );
}

export default ConnectionControl;