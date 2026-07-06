import { Copy, Check } from "lucide-react";
import { useState } from "react";

function DetailRow({ label, value }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-800 last:border-none">
      <span className="text-gray-400">{label}</span>
      <span className="text-white font-medium">{value}</span>
    </div>
  );
}

const statusColor = {
  Normal: "text-green-400",
  Encrypted: "text-cyan-400",
  Suspicious: "text-yellow-400",
  Intercepted: "text-red-400",
};

function PacketDetails({ packet }) {

  const [copied, setCopied] = useState(false);

  if (!packet) {
    return (
      <div className="bg-[#0F172A] border border-gray-800 rounded-xl h-[700px] flex items-center justify-center">
        <p className="text-gray-500">
          Select a packet to inspect.
        </p>
      </div>
    );
  }

  const copyPayload = async () => {
    try {
      await navigator.clipboard.writeText(packet.payload);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-[#0F172A] border border-gray-800 rounded-xl h-[700px] flex flex-col">

      {/* Header */}

      <div className="px-6 py-4 border-b border-gray-800 flex justify-between items-center">

        <h2 className="text-lg font-bold text-cyan-400">
          PACKET DETAILS
        </h2>

        <span
          className={`font-semibold ${
            statusColor[packet.status]
          }`}
        >
          {packet.status}
        </span>

      </div>

      {/* Details */}

      <div className="px-6 py-2">

        <DetailRow
          label="Packet ID"
          value={`#${packet.id}`}
        />

        <DetailRow
          label="Source"
          value={packet.source}
        />

        <DetailRow
          label="Destination"
          value={packet.destination}
        />

        <DetailRow
          label="Protocol"
          value={packet.protocol}
        />

        <DetailRow
          label="Size"
          value={packet.size}
        />

        <DetailRow
          label="Encrypted"
          value={packet.encrypted}
        />

        <DetailRow
          label="Timestamp"
          value={packet.timestamp}
        />

      </div>

      {/* Payload */}

      <div className="flex-1 px-6 pb-6 flex flex-col">

        <div className="flex justify-between items-center mb-3">

          <h3 className="text-white font-semibold">
            Payload
          </h3>

          <button
            onClick={copyPayload}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
          >

            {copied ? (
              <>
                <Check size={16} />
                Copied
              </>
            ) : (
              <>
                <Copy size={16} />
                Copy
              </>
            )}

          </button>

        </div>

        <div className="flex-1 bg-[#111827] border border-gray-800 rounded-lg p-4 overflow-auto">

          <pre className="text-green-400 text-sm font-mono leading-7 whitespace-pre-wrap">
            {packet.payload}
          </pre>

        </div>

      </div>

    </div>
  );
}

export default PacketDetails;