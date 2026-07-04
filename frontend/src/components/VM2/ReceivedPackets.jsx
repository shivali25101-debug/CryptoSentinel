import { CheckCircle2, Lock } from "lucide-react";

const packets = [
  {
    id: 231,
    protocol: "UDP",
    status: "Decrypted",
    icon: <Lock size={16} />,
    color: "text-cyan-400 bg-cyan-500/20",
  },
  {
    id: 232,
    protocol: "UDP",
    status: "Verified",
    icon: <CheckCircle2 size={16} />,
    color: "text-green-400 bg-green-500/20",
  },
  {
    id: 233,
    protocol: "TCP",
    status: "Received",
    icon: <CheckCircle2 size={16} />,
    color: "text-blue-400 bg-blue-500/20",
  },
];

function ReceivedPackets() {
  return (
    <div className="bg-[#0F172A] border border-gray-800 rounded-xl overflow-hidden">

      <div className="px-6 py-4 border-b border-gray-800">
        <h2 className="text-xl font-bold text-cyan-400">
          Received Packets
        </h2>
      </div>

      <table className="w-full">
        <thead className="bg-[#111827]">
          <tr>
            <th className="px-6 py-4 text-left">Packet ID</th>
            <th className="px-6 py-4 text-left">Protocol</th>
            <th className="px-6 py-4 text-center">Status</th>
          </tr>
        </thead>

        <tbody>
          {packets.map((packet) => (
            <tr
              key={packet.id}
              className="border-t border-gray-800 hover:bg-slate-800/40"
            >
              <td className="px-6 py-4 text-white">#{packet.id}</td>

              <td className="px-6 py-4 text-gray-300">
                {packet.protocol}
              </td>

              <td className="px-6 py-4 flex justify-center">
                <span className={`flex items-center gap-2 px-3 py-1 rounded-full ${packet.color}`}>
                  {packet.icon}
                  {packet.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default ReceivedPackets;