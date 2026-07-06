import {
  Eye,
  ArrowRight,
  ShieldCheck,
  Ban,
} from "lucide-react";

const badgeStyles = {
  Captured: {
    color: "text-red-400 bg-red-500/20",
    icon: <Eye size={16} />,
  },
  Forwarded: {
    color: "text-yellow-400 bg-yellow-500/20",
    icon: <ArrowRight size={16} />,
  },
  Blocked: {
    color: "text-green-400 bg-green-500/20",
    icon: <ShieldCheck size={16} />,
  },
  Failed: {
    color: "text-gray-400 bg-gray-700/30",
    icon: <Ban size={16} />,
  },
};

function CapturedPackets({ packets }) {
  return (
    <div className="bg-[#0F172A] border border-gray-800 rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-800 flex justify-between items-center">
        <h2 className="text-xl font-bold text-cyan-400">
          Captured Packets
        </h2>

        <span className="text-sm text-gray-400">
          {packets.length} Packets
        </span>
      </div>

      <table className="w-full">
        <thead className="bg-[#111827]">
          <tr>
            <th className="px-6 py-4 text-left text-gray-300">
              Packet ID
            </th>

            <th className="px-6 py-4 text-left text-gray-300">
              Protocol
            </th>

            <th className="px-6 py-4 text-center text-gray-300">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {packets.map((packet) => {
            const badge =
              badgeStyles[packet.action] ||
              badgeStyles.Failed;

            return (
              <tr
                key={packet.id}
                className="border-t border-gray-800 hover:bg-slate-800/40 transition"
              >
                <td className="px-6 py-4 text-white">
                  #{packet.id}
                </td>

                <td className="px-6 py-4 text-gray-300">
                  {packet.protocol}
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center">
                    <span
                      className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${badge.color}`}
                    >
                      {badge.icon}
                      {packet.action}
                    </span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="px-6 py-3 border-t border-gray-800 text-sm text-gray-400">
        Live Capture Queue
      </div>
    </div>
  );
}

export default CapturedPackets;