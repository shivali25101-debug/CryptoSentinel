import {
  Shield,
  TriangleAlert,
  Bug,
  CheckCircle2,
  Info,
} from "lucide-react";

import useCyberData from "../../hooks/useCyberData";

function AttackTimeline() {

  const {
    alerts,
    vpnStatus,
    scenario,
  } = useCyberData();

  const getIcon = (severity) => {

    switch (severity?.toLowerCase()) {

      case "critical":
        return <TriangleAlert size={14} />;

      case "warning":
        return <Bug size={14} />;

      case "success":
        return <CheckCircle2 size={14} />;

      default:
        return <Info size={14} />;

    }

  };

  const getColor = (severity) => {

    switch (severity?.toLowerCase()) {

      case "critical":
        return "text-red-400";

      case "warning":
        return "text-orange-400";

      case "success":
        return "text-green-400";

      default:
        return "text-cyan-400";

    }

  };

  const timeline = [...alerts];

  timeline.unshift({
    severity: "info",
    message: `Scenario : ${scenario}`,
    time: "Now",
  });

  if (vpnStatus === "Connected") {

    timeline.unshift({
      severity: "success",
      message: "VPN Tunnel Established",
      time: "Now",
    });

  }

  return (

    <div className="bg-[#0F172A] border border-slate-800 rounded-xl h-full p-5 flex flex-col">

      <h2 className="text-cyan-400 text-sm uppercase tracking-widest font-semibold mb-5">
        Attack Timeline
      </h2>

      <div className="flex-1 overflow-y-auto space-y-5">

        {[...timeline].reverse().map((item, index) => (

          <div
            key={index}
            className="flex gap-3"
          >

            <div className={`w-8 h-8 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center ${getColor(item.severity)}`}>
              {item.message.includes("VPN")
                ? <Shield size={14} />
                : getIcon(item.severity)}
            </div>

            <div>

              <p className="text-xs text-slate-500">
                {item.time}
              </p>

              <p className={`${getColor(item.severity)} text-sm`}>
                {item.message}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default AttackTimeline;