import {
  Shield,
  Lock,
  Wifi,
  TriangleAlert,
  Bug,
  CheckCircle2,
} from "lucide-react";

const timeline = [
  {
    time: "14:02:11",
    title: "VPN Tunnel Established",
    icon: <Shield size={14} />,
    color: "text-cyan-400",
  },
  {
    time: "14:02:14",
    title: "ChaCha20 Key Exchange",
    icon: <Lock size={14} />,
    color: "text-violet-400",
  },
  {
    time: "14:02:21",
    title: "Traffic Flow Started",
    icon: <Wifi size={14} />,
    color: "text-green-400",
  },
  {
    time: "14:02:33",
    title: "MITM Activity Detected",
    icon: <TriangleAlert size={14} />,
    color: "text-red-400",
  },
  {
    time: "14:02:37",
    title: "Packets Intercepted",
    icon: <Bug size={14} />,
    color: "text-orange-400",
  },
  {
    time: "14:02:46",
    title: "Secure Connection Restored",
    icon: <CheckCircle2 size={14} />,
    color: "text-emerald-400",
  },
];

function AttackTimeline() {
  return (
    <div className="bg-[#0F172A] border border-slate-800 rounded-xl h-full p-5">

      <h2 className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-5">
        Attack Timeline
      </h2>

      <div className="space-y-5">

        {timeline.map((item, index) => (

          <div
            key={index}
            className="flex gap-3 items-start"
          >

            <div
              className={`w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center ${item.color}`}
            >
              {item.icon}
            </div>

            <div>

              <p className="text-[11px] text-slate-500">
                {item.time}
              </p>

              <p className={`text-sm ${item.color}`}>
                {item.title}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AttackTimeline;