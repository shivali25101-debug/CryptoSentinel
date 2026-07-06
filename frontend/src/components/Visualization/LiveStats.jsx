import {
  Activity,
  Shield,
  Wifi,
  Package,
} from "lucide-react";

import useCyberData from "../../hooks/useCyberData";

function LiveStats() {
  const {
    sentPackets,
    bandwidth,
    latency,
    scenario,
  } = useCyberData();

  let encrypted = "0%";

  if (
    scenario === "Normal VPN"
  )
    encrypted = "100%";

  else if (
    scenario === "Kyber Encryption"
  )
    encrypted = "PQC";

  else if (
    scenario === "MITM Authorized" ||
    scenario === "MITM Unauthorized"
  )
    encrypted = "62%";

  else if (
    scenario === "Replay Attack"
  )
    encrypted = "100%";

  else if (
    scenario === "Weak Password"
  )
    encrypted = "100%";

  else if (
    scenario === "Shor Algorithm"
  )
    encrypted = "Broken";

  const stats = [
    {
      title: "Packets",
      value: sentPackets,
      color: "text-cyan-400",
      icon: <Package size={16} />,
    },
    {
      title: "Encrypted",
      value: encrypted,
      color: "text-violet-400",
      icon: <Shield size={16} />,
    },
    {
      title: "Traffic",
      value: `${bandwidth} Mbps`,
      color: "text-green-400",
      icon: <Wifi size={16} />,
    },
    {
      title: "Latency",
      value: `${latency} ms`,
      color: "text-orange-400",
      icon: <Activity size={16} />,
    },
  ];

  return (
    <div className="bg-[#0F172A] border border-slate-800 rounded-xl px-5 py-4 h-24 flex justify-between items-center">
      {stats.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-center"
        >
          <div className={item.color}>
            {item.icon}
          </div>

          <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">
            {item.title}
          </p>

          <p className={`font-semibold mt-1 ${item.color}`}>
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default LiveStats;