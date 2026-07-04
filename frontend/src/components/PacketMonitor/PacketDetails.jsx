import { Copy } from "lucide-react";

const packet = {
  id: 147,
  source: "VM3",
  destination: "VM1",
  protocol: "TCP",
  size: "512 Bytes",
  encrypted: "No",
  status: "Intercepted",
  timestamp: "10:42:38",
  payload: `4A F2 8B 91 C1 44 9A 02 3C D7 11 8F 9A E4 77 2D
0F 88 D2 3C B9 73 11 AA 44 F1 E0 9B C2 55 90 12
AF 1D 77 32 C8 E4 91 0A 1C B5 42 73 8D E0 11 FF
90 21 6C D8 2B 4F 19 A0 55 88 B2 73 6A F0 8D 1E`,
};

function DetailRow({ label, value }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-800 last:border-none">
      <span className="text-gray-400">{label}</span>
      <span className="text-white font-medium">{value}</span>
    </div>
  );
}

function PacketDetails() {
  return (
    <div className="bg-[#0F172A] border border-gray-800 rounded-xl h-[700px] flex flex-col">

      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-800">
        <h2 className="text-lg font-bold text-cyan-400 text-center">
          PACKET DETAILS
        </h2>
      </div>

      {/* Details */}
      <div className="px-6 py-2">

        <DetailRow label="Packet ID" value={`#${packet.id}`} />
        <DetailRow label="Source" value={packet.source} />
        <DetailRow label="Destination" value={packet.destination} />
        <DetailRow label="Protocol" value={packet.protocol} />
        <DetailRow label="Size" value={packet.size} />
        <DetailRow label="Encrypted" value={packet.encrypted} />
        <DetailRow label="Status" value={packet.status} />
        <DetailRow label="Timestamp" value={packet.timestamp} />

      </div>

      {/* Payload */}
      <div className="flex-1 px-6 pb-6 flex flex-col">

        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white font-semibold">
            Payload
          </h3>

          <button className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition">
            <Copy size={16} />
            Copy
          </button>
        </div>

        <div className="flex-1 bg-[#111827] border border-gray-800 rounded-lg p-4 overflow-auto">
          <pre className="text-green-400 text-sm leading-7 whitespace-pre-wrap font-mono">
            {packet.payload}
          </pre>
        </div>

      </div>
    </div>
  );
}

export default PacketDetails;