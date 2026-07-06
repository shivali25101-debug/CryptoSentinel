import CyberHeading from "../../components/CyberHeading";
import ConnectionCard from "../../components/VM1/ConnectionCard";
import SessionCard from "../../components/VM1/SessionCard";
import TerminalWindow from "../../components/VM1/TerminalWindow";
import PacketQueue from "../../components/VM1/PacketQueue";
import { useData } from "../../context/DataContext";

function VM1() {
  const { data } = useData();

  if (!data) return null;

  return (
    <div className="min-h-screen px-8 py-4">
      <CyberHeading
        title="VM1 - SENDER TERMINAL"
        subtitle="LIVE STATUS OF THE SENDER VIRTUAL MACHINE"
      />

      <div className="space-y-6 mt-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <ConnectionCard
            connection={data.vm1.connection}
          />

          <SessionCard
            session={data.vm1.session}
          />
        </div>

        <TerminalWindow
          lines={data.vm1.terminal}
        />

        <PacketQueue
          packets={data.vm1.queue}
        />
      </div>
    </div>
  );
}

export default VM1;