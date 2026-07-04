const packets = [
  {
    id: 145,
    protocol: "UDP",
    source: "VM1",
    destination: "VM2",
    status: "Encrypted",
  },
  {
    id: 146,
    protocol: "UDP",
    source: "VM2",
    destination: "VM1",
    status: "Encrypted",
  },
  {
    id: 147,
    protocol: "TCP",
    source: "VM3",
    destination: "VM1",
    status: "Suspicious",
  },
  {
    id: 148,
    protocol: "UDP",
    source: "VM1",
    destination: "VM2",
    status: "Normal",
  },
  {
    id: 149,
    protocol: "TCP",
    source: "VM3",
    destination: "VM2",
    status: "Intercepted",
  },
  {
    id: 150,
    protocol: "UDP",
    source: "VM2",
    destination: "VM1",
    status: "Encrypted",
  },
];

const badgeColors = {
  Encrypted: "bg-cyan-500/20 text-cyan-400",
  Normal: "bg-green-500/20 text-green-400",
  Suspicious: "bg-yellow-500/20 text-yellow-400",
  Intercepted: "bg-red-500/20 text-red-400",
};

function PacketList() {
  return (
    <div className="bg-[#0F172A] border border-gray-800 rounded-xl h-[700px] flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
        <h2 className="text-lg font-bold text-cyan-400 text-center">
          PACKET LIST
        </h2>

        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-green-400 text-sm">LIVE</span>
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto">

        {packets.map((packet) => (
          <div
            key={packet.id}
            className="border-b border-gray-800 px-5 py-2 hover:bg-slate-800/40 transition cursor-pointer"
          >
            <div className="flex justify-between items-start">

              <div>
                <p className="text-white font-medium">
                  #{packet.id}
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  {packet.protocol}
                </p>

                <p className="text-gray-500 text-sm mt-2">
                  {packet.source} → {packet.destination}
                </p>
              </div>

              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${badgeColors[packet.status]}`}
              >
                {packet.status}
              </span>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default PacketList;