import { useData } from "../../context/DataContext";

import CyberHeading from "../../components/CyberHeading";
import AttackStatus from "../../components/VM3/AttackStatus";
import TargetInfo from "../../components/VM3/TargetInfo";
import KaliTerminal from "../../components/VM3/KaliTerminal";
import CapturedPackets from "../../components/VM3/CapturedPackets";

function VM3() {
  const { data } = useData();

  const attackStatus =
    data?.vm3?.attackStatus || {
      scenario: "MITM Attack",
      state: "Running",
      intercepted: 238,
      spoofing: "Enabled",
      interface: "eth0",
    };

  const targetInfo =
    data?.vm3?.targetInfo || {
      target1: "10.0.0.1",
      target2: "10.0.0.2",
      gateway: "10.0.0.254",
      tool: "Scapy",
      privilege: "Root",
    };

  const terminalLines =
    data?.vm3?.terminal || [
      "root@kali:~# python3 mitm.py",
      "",
      "[INFO] Initializing attack...",
      "[INFO] Enabling IP forwarding...",
      "[SUCCESS] IP forwarding enabled.",
      "[INFO] Starting ARP spoofing...",
      "[SUCCESS] Victim ARP cache poisoned.",
      "[CAPTURE] Packet #231 intercepted",
      "[CAPTURE] Packet #232 intercepted",
      "[FORWARD] Forwarding packet to VM2",
      "[INFO] Monitoring traffic...",
      "",
      "root@kali:~# █",
    ];

  const capturedPackets =
    data?.vm3?.capturedPackets || [
      {
        id: 231,
        protocol: "UDP",
        action: "Captured",
      },
      {
        id: 232,
        protocol: "UDP",
        action: "Forwarded",
      },
      {
        id: 233,
        protocol: "TCP",
        action: "Captured",
      },
    ];

  return (
    <div className="min-h-screen px-8 py-0">

      <CyberHeading
        title="VM3 - ATTACKER TERMINAL"
      />

      <div className="space-y-6 mt-8">

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          <AttackStatus attack={attackStatus} />

          <TargetInfo target={targetInfo} />

        </div>

        <KaliTerminal lines={terminalLines} />

        <CapturedPackets packets={capturedPackets} />

      </div>

    </div>
  );
}

export default VM3;