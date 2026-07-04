import { Trash2 } from "lucide-react";

const alerts = [
  {
    time: "20:47:58",
    level: "WARN",
    message: "ARP spoofing attempt detected",
  },
  {
    time: "20:46:41",
    level: "INFO",
    message: "VPN tunnel established",
  },
  {
    time: "20:46:10",
    level: "INFO",
    message: "Key exchange completed",
  },
  {
    time: "20:45:51",
    level: "INFO",
    message: "Client authenticated",
  },
  {
    time: "20:45:12",
    level: "INFO",
    message: "System initialized",
  },
];

function levelColor(level) {
  switch (level) {
    case "WARN":
      return "text-yellow-400";

    case "ERROR":
      return "text-red-400";

    default:
      return "text-green-400";
  }
}

function Alerts() {
  return (
    <div className="h-full rounded-xl border border-[#1A2430] bg-[#08111D] overflow-hidden">

      {/* Header */}

      <div className="flex items-center justify-between px-4 py-1 border-b border-[#18222F]">

        <h2 className="text-[13px] uppercase tracking-[0.15em] font-semibold text-cyan-400">
          Alerts
        </h2>

        <button
          className="
          flex
          items-center
          gap-1
          text-[10px]
          text-red-400
          hover:text-red-300
          transition
          "
        >
          <Trash2 size={12} />
          Clear All
        </button>

      </div>

      {/* Logs */}

      <div className="h-[120px] overflow-y-auto">

        {alerts.map((alert, index) => (

          <div
            key={index}
            className="px-4 py-2 border-b border-[#18222F]"
          >

            <div className="flex gap-2 items-center font-mono text-[10px]">

              <span className="text-gray-500">
                {alert.time}
              </span>

              <span className={levelColor(alert.level)}>
                [{alert.level}]
              </span>

            </div>

            <p className="mt-1 ml-[58px] text-[11px] text-gray-300">
              {alert.message}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Alerts;