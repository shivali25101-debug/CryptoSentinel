import CyberHeading from "../../components/CyberHeading";
import AttackStatus from "../../components/VM3/AttackStatus";
import TargetInfo from "../../components/VM3/TargetInfo";
import KaliTerminal from "../../components/VM3/KaliTerminal";
import CapturedPackets from "../../components/VM3/CapturedPackets";

function VM3() {
  return (
    <div className="min-h-screen px-8 py-0">
      <CyberHeading title="VM3 - ATTACKER TERMINAL" />

      <div className="space-y-6 mt-8">

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <AttackStatus />
          <TargetInfo />
        </div>

        <KaliTerminal />

        <CapturedPackets />

      </div>
    </div>
  );
}

export default VM3;