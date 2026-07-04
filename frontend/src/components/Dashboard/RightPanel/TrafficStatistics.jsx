import {
  Activity,
  Package,
  ShieldAlert,
  Send,
  Database,
  Timer,
} from "lucide-react";

const stats = [
  {
    icon: Package,
    label: "Total Packets",
    value: "2,445",
    color: "text-white",
  },
  {
    icon: ShieldAlert,
    label: "Intercepted",
    value: "512 (20.94%)",
    color: "text-red-400",
  },
  {
    icon: Activity,
    label: "Dropped",
    value: "86 (3.52%)",
    color: "text-orange-400",
  },
  {
    icon: Send,
    label: "Forwarded",
    value: "1,197 (49.0%)",
    color: "text-green-400",
  },
  {
    icon: Database,
    label: "Transferred",
    value: "2.45 MB",
    color: "text-cyan-400",
  },
  {
    icon: Timer,
    label: "Latency",
    value: "12.43 ms",
    color: "text-yellow-300",
  },
];

function TrafficStatistics() {
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

export default TrafficStatistics;