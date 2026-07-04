import {
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const traffic = [
  {
    source: "VM1",
    destination: "VM3",
    status: "Encrypted",
    color: "text-cyan-400",
    icon: <ArrowRight size={14} />,
  },
  {
    source: "VM3",
    destination: "VM2",
    status: "Forwarded",
    color: "text-green-400",
    icon: <ArrowRight size={14} />,
  },
  {
    source: "VM2",
    destination: "VM1",
    status: "Reply",
    color: "text-violet-400",
    icon: <ArrowLeft size={14} />,
  },
];

function TrafficFlow() {
  return (
    <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-5 flex-1">

      <h2 className="text-cyan-400 text-sm uppercase tracking-widest font-semibold mb-5">
        Traffic Flow
      </h2>

      <div className="space-y-4">

        {traffic.map((item, index) => (

          <div
            key={index}
            className="border border-slate-800 rounded-lg p-3"
          >

            <div className="flex justify-between items-center">

              <span className="text-sm text-white">
                {item.source}
              </span>

              <div className={item.color}>
                {item.icon}
              </div>

              <span className="text-sm text-white">
                {item.destination}
              </span>

            </div>

            <p className={`mt-2 text-xs ${item.color}`}>
              {item.status}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TrafficFlow;