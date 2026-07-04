import CyberHeading from "../../components/CyberHeading";
import ConnectionCard from "../../components/VM1/ConnectionCard";
import SessionCard from "../../components/VM1/SessionCard";
import TerminalWindow from "../../components/VM1/TerminalWindow";
import PacketQueue from "../../components/VM1/PacketQueue";

function VM1() {
  return (
    <div className="min-h-screen px-8 py-0">
      <CyberHeading title="VM1 - SENDER TERMINAL" />

      <div className="space-y-6 mt-8">

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <ConnectionCard />
          <SessionCard />
        </div>

        <TerminalWindow />

        <PacketQueue />

      </div>
    </div>
  );
}

export default VM1;