import CyberHeading from "../../components/CyberHeading";
import ReceiverStatus from "../../components/VM2/ReceiverStatus";
import SessionCard from "../../components/VM2/SessionCard";
import TerminalWindow from "../../components/VM2/TerminalWindow";
import ReceivedPackets from "../../components/VM2/ReceivedPackets";
import { useData } from "../../context/DataContext";

function VM2() {

  const { data } = useData();

  if (!data) return null;

  return (

    <div className="min-h-screen px-8 py-0">

      <CyberHeading
        title="VM2 - RECEIVER TERMINAL"
      />

      <div className="space-y-6 mt-8">

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          <ReceiverStatus
            status={data.vm2.receiverStatus}
          />

          <SessionCard
            session={data.vm2.session}
          />

        </div>

        <TerminalWindow
          lines={data.vm2.terminal}
        />

        <ReceivedPackets
          packets={data.vm2.packets}
        />

      </div>

    </div>

  );

}

export default VM2;