import {
  Activity,
  Package,
  ShieldAlert,
  Send,
  Database,
  Timer,
} from "lucide-react";

import useCyberData from "../../../hooks/useCyberData";

function TrafficStatistics() {
  const {
    sentPackets,
    receivedPackets,
    interceptedPackets,
    droppedPackets,
    forwardedPackets,
    bytesTransferred,
    latency,
  } = useCyberData();

  const totalPackets = sentPackets + receivedPackets;

  const interceptedPercent =
    totalPackets > 0
      ? ((interceptedPackets / totalPackets) * 100).toFixed(2)
      : "0.00";

  const droppedPercent =
    totalPackets > 0
      ? ((droppedPackets / totalPackets) * 100).toFixed(2)
      : "0.00";

  const forwardedPercent =
    totalPackets > 0
      ? ((forwardedPackets / totalPackets) * 100).toFixed(2)
      : "0.00";

  const stats = [
    {
      icon: Package,
      label: "Total Packets",
      value: totalPackets.toLocaleString(),
      color: "text-white",
    },
    {
      icon: ShieldAlert,
      label: "Intercepted",
      value: `${interceptedPackets} (${interceptedPercent}%)`,
      color: "text-red-400",
    },
    {
      icon: Activity,
      label: "Dropped",
      value: `${droppedPackets} (${droppedPercent}%)`,
      color: "text-orange-400",
    },
    {
      icon: Send,
      label: "Forwarded",
      value: `${forwardedPackets} (${forwardedPercent}%)`,
      color: "text-green-400",
    },
    {
      icon: Database,
      label: "Transferred",
      value: `${bytesTransferred.toLocaleString()} Bytes`,
      color: "text-cyan-400",
    },
    {
      icon: Timer,
      label: "Latency",
      value: `${latency} ms`,
      color: "text-yellow-300",
    },
  ];

  return (
    <div className="h-full rounded-xl border border-[#1A2430] bg-[#08111D] overflow-hidden">

      {/* Header */}

      <div className="px-4 py-1 border-b border-[#18222F]">
        <h2 className="text-[13px] font-semibold uppercase tracking-[0.15em] text-cyan-400">
          Traffic Statistics
        </h2>
      </div>

      {/* Body */}

      <div className="px-4 py-0">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-center justify-between py-2 border-b border-[#18222F] last:border-none"
            >
              <div className="flex items-center gap-2">
                <Icon
                  size={14}
                  className="text-gray-500"
                />

                <span className="text-[11px] text-gray-300">
                  {item.label}
                </span>
              </div>

              <span className={`text-[11px] font-medium ${item.color}`}>
                {item.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TrafficStatistics;