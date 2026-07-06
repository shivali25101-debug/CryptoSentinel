import {
  Cpu,
  MemoryStick,
  Globe,
  Clock3,
} from "lucide-react";

function HealthCards({
  health,
}) {

  const cards = [
    {
      title: "CPU Usage",
      value: `${health.cpu.usage}%`,
      subtitle: `${health.cpu.cores} Cores`,
      icon: <Cpu size={30} />,
      color: "text-cyan-400 bg-cyan-500/20",
    },
    {
      title: "Memory Usage",
      value: `${health.memory.used} / ${health.memory.total} GB`,
      subtitle: `${health.memory.percentage}%`,
      icon: <MemoryStick size={30} />,
      color: "text-violet-400 bg-violet-500/20",
    },
    {
      title: "Network Status",
      value: health.network.status,
      subtitle: `Latency : ${health.network.latency} ms`,
      icon: <Globe size={30} />,
      color: "text-green-400 bg-green-500/20",
    },
    {
      title: "Uptime",
      value: health.uptime,
      subtitle: "HH : MM : SS",
      icon: <Clock3 size={30} />,
      color: "text-yellow-400 bg-yellow-500/20",
    },
  ];

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card) => (

        <div
          key={card.title}
          className="
            bg-[#0F172A]
            border
            border-gray-800
            rounded-xl
            p-5
            hover:border-cyan-500
            transition
          "
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-400">
                {card.title}
              </p>

              <h2 className="text-2xl font-bold text-white mt-3">
                {card.value}
              </h2>

              <p className="text-gray-500 mt-2 text-sm">
                {card.subtitle}
              </p>

            </div>

            <div
              className={`${card.color} p-4 rounded-xl`}
            >
              {card.icon}
            </div>

          </div>

        </div>

      ))}

    </div>

  );

}

export default HealthCards;