import {
  Activity,
  Shield,
  Wifi,
  Package,
} from "lucide-react";

const stats = [
  {
    title: "Packets",
    value: "2,481",
    color: "text-cyan-400",
    icon: <Package size={16} />,
  },
  {
    title: "Encrypted",
    value: "98%",
    color: "text-violet-400",
    icon: <Shield size={16} />,
  },
  {
    title: "Traffic",
    value: "152 KB/s",
    color: "text-green-400",
    icon: <Wifi size={16} />,
  },
  {
    title: "Latency",
    value: "14 ms",
    color: "text-orange-400",
    icon: <Activity size={16} />,
  },
];

function LiveStats() {
  return (
    <div className="bg-[#0F172A] border border-slate-800 rounded-xl px-5 py-4 h-24 flex justify-between items-center">

      {stats.map((item) => (

        <div
          key={item.title}
          className="flex flex-col items-center"
        >

          <div className={`${item.color}`}>
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