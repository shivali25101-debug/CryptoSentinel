import {
  Cpu,
  MemoryStick,
  Globe,
  Clock3,
} from "lucide-react";

const cards = [
  {
    title: "CPU Usage",
    value: "32%",
    subtitle: "4 Cores",
    icon: <Cpu size={30} />,
    color: "text-cyan-400 bg-cyan-500/20",
  },
  {
    title: "Memory Usage",
    value: "4.8 / 8 GB",
    subtitle: "60%",
    icon: <MemoryStick size={30} />,
    color: "text-violet-400 bg-violet-500/20",
  },
  {
    title: "Network Status",
    value: "Healthy",
    subtitle: "Latency: 12 ms",
    icon: <Globe size={30} />,
    color: "text-green-400 bg-green-500/20",
  },
  {
    title: "Uptime",
    value: "02:15:42",
    subtitle: "HH : MM : SS",
    icon: <Clock3 size={30} />,
    color: "text-yellow-400 bg-yellow-500/20",
  },
];

function HealthCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-[#0F172A] border border-gray-800 rounded-lg p-4 hover:border-cyan-500 transition"
        >
          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-400">{card.title}</p>

              <h2 className="text-xl font-bold text-white mt-3">
                {card.value}
              </h2>

              <p className="text-gray-500 mt-2 text-sm">
                {card.subtitle}
              </p>
            </div>

            <div className={`${card.color} p-4 rounded-lg`}>
              {card.icon}
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default HealthCards;