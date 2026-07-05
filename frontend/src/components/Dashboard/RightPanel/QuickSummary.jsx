import {
  Monitor,
  Wifi,
  Shield,
  Package,
  Database,
  Clock,
} from "lucide-react";

import useCyberData from "../../../hooks/useCyberData";

function QuickSummary() {
  const {
    vpnStatus,
    scenario,
    sentPackets,
    bandwidth,
    uptime,
  } = useCyberData();

  const summary = [
    {
      icon: Monitor,
      label: "Total Hosts",
      value: "3",
      color: "text-cyan-400",
    },
    {
      icon: Wifi,
      label: "Active Connections",
      value: vpnStatus === "Connected" ? "1" : "0",
      color:
        vpnStatus === "Connected"
          ? "text-green-400"
          : "text-red-400",
    },
    {
      icon: Shield,
      label: "Threat Level",
      value: scenario === "MITM" ? "HIGH" : "LOW",
      color:
        scenario === "MITM"
          ? "text-red-400"
          : "text-green-400",
    },
    {
      icon: Package,
      label: "Packets/sec",
      value: sentPackets,
      color: "text-blue-400",
    },
    {
      icon: Database,
      label: "Bandwidth",
      value: `${bandwidth} Mbps`,
      color: "text-purple-400",
    },
    {
      icon: Clock,
      label: "Uptime",
      value: uptime,
      color: "text-yellow-400",
    },
    {
      icon: Shield,
      label: "Encryption",
      value: "ChaCha20-Poly1305",
      color: "text-green-400",
    },
    {
      icon: Monitor,
      label: "VPN Status",
      value: vpnStatus,
      color:
        vpnStatus === "Connected"
          ? "text-green-400"
          : vpnStatus === "Connecting"
          ? "text-yellow-400"
          : "text-red-400",
    },
  ];

  return (
    <div className="h-full rounded-xl border border-[#1A2430] bg-[#08111D] overflow-hidden">

      {/* Header */}
      <div className="px-4 py-1 border-b border-[#18222F]">
        <h2 className="text-[13px] uppercase tracking-[0.15em] font-semibold text-cyan-400">
          Quick Summary
        </h2>
      </div>

      {/* Summary */}
      <div className="h-[120px] overflow-y-auto">
        {summary.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-center justify-between px-4 py-2 border-b border-[#18222F] last:border-none"
            >
              <div className="flex items-center gap-2">
                <Icon
                  size={13}
                  className="text-gray-500"
                />

                <span className="text-[11px] text-gray-300">
                  {item.label}
                </span>
              </div>

              <span
                className={`text-[11px] font-medium ${item.color}`}
              >
                {item.value}
              </span>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default QuickSummary;