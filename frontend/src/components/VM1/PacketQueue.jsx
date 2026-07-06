import {
  Send,
  Clock3,
  CheckCircle2,
  Lock,
  AlertTriangle,
} from "lucide-react";

function PacketQueue({
  packets,
}) {

  const statusMap = {
    Encrypted: {
      icon: <Lock size={16} />,
      color: "text-cyan-400 bg-cyan-500/20",
    },

    Sent: {
      icon: <CheckCircle2 size={16} />,
      color: "text-green-400 bg-green-500/20",
    },

    Waiting: {
      icon: <Clock3 size={16} />,
      color: "text-yellow-400 bg-yellow-500/20",
    },

    Queued: {
      icon: <Send size={16} />,
      color: "text-purple-400 bg-purple-500/20",
    },

    Failed: {
      icon: <AlertTriangle size={16} />,
      color: "text-red-400 bg-red-500/20",
    },
  };

  return (

    <div className="bg-[#0F172A] border border-gray-800 rounded-xl overflow-hidden">

      {/* Header */}

      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">

        <h2 className="text-xl font-bold text-cyan-400">
          Packet Queue
        </h2>

        <span className="text-sm text-gray-400">
          {packets.length} Packets
        </span>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-[#111827]">

            <tr className="text-gray-400 text-sm">

              <th className="px-6 py-4 text-left">
                Packet ID
              </th>

              <th className="px-6 py-4 text-left">
                Protocol
              </th>

              <th className="px-6 py-4 text-center">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {packets.map((packet) => {

              const status =
                statusMap[packet.status] ||
                statusMap.Waiting;

              return (

                <tr
                  key={packet.id}
                  className="border-t border-gray-800 hover:bg-slate-800/40 transition"
                >

                  <td className="px-6 py-4 text-white font-medium">
                    #{packet.id}
                  </td>

                  <td className="px-6 py-4 text-gray-300">
                    {packet.protocol}
                  </td>

                  <td className="px-6 py-4">

                    <div className="flex justify-center">

                      <span
                        className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${status.color}`}
                      >

                        {status.icon}

                        {packet.status}

                      </span>

                    </div>

                  </td>

                </tr>

              );

            })}

            {packets.length === 0 && (

              <tr>

                <td
                  colSpan={3}
                  className="text-center py-8 text-gray-500"
                >
                  No packets in queue.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default PacketQueue;