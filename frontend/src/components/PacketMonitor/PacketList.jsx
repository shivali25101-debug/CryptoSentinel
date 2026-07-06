import { useMemo, useState } from "react";
import { Search } from "lucide-react";

const badgeColors = {
  Encrypted: "bg-cyan-500/20 text-cyan-400",
  Normal: "bg-green-500/20 text-green-400",
  Suspicious: "bg-yellow-500/20 text-yellow-400",
  Intercepted: "bg-red-500/20 text-red-400",
};

function PacketList({
  packets,
  selectedPacket,
  setSelectedPacket,
}) {
  const [search, setSearch] = useState("");
  const [protocolFilter, setProtocolFilter] = useState("All");

  const filteredPackets = useMemo(() => {
    return packets.filter((packet) => {
      const matchesSearch =
        packet.id.toString().includes(search) ||
        packet.source
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        packet.destination
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesProtocol =
        protocolFilter === "All" ||
        packet.protocol === protocolFilter;

      return matchesSearch && matchesProtocol;
    });
  }, [packets, search, protocolFilter]);

  return (
    <div className="bg-[#0F172A] border border-gray-800 rounded-xl h-[700px] flex flex-col">

      {/* Header */}

      <div className="border-b border-gray-800 p-5">

        <div className="flex items-center justify-between">

          <h2 className="text-lg font-bold text-cyan-400">
            PACKET LIST
          </h2>

          <div className="flex items-center gap-2">

            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>

            <span className="text-green-400 text-sm">
              LIVE
            </span>

          </div>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-3 gap-3 mt-5">

          <div className="bg-[#111827] rounded-lg p-3 text-center">

            <p className="text-gray-400 text-xs">
              Captured
            </p>

            <p className="text-cyan-400 text-lg font-bold">
              {packets.length}
            </p>

          </div>

          <div className="bg-[#111827] rounded-lg p-3 text-center">

            <p className="text-gray-400 text-xs">
              Threats
            </p>

            <p className="text-red-400 text-lg font-bold">
              {
                packets.filter(
                  (p) =>
                    p.status === "Suspicious" ||
                    p.status === "Intercepted"
                ).length
              }
            </p>

          </div>

          <div className="bg-[#111827] rounded-lg p-3 text-center">

            <p className="text-gray-400 text-xs">
              Encrypted
            </p>

            <p className="text-green-400 text-lg font-bold">
              {
                packets.filter(
                  (p) => p.encrypted === "Yes"
                ).length
              }
            </p>

          </div>

        </div>

        {/* Search */}

        <div className="relative mt-5">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-500"
          />

          <input
            type="text"
            placeholder="Search packet..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full bg-[#111827] border border-gray-700 rounded-lg pl-10 pr-4 py-2 outline-none focus:border-cyan-400"
          />

        </div>

        {/* Filter */}

        <select
          value={protocolFilter}
          onChange={(e) =>
            setProtocolFilter(e.target.value)
          }
          className="w-full mt-4 bg-[#111827] border border-gray-700 rounded-lg p-2 outline-none focus:border-cyan-400"
        >
          <option>All</option>
          <option>TCP</option>
          <option>UDP</option>
          <option>ARP</option>
          <option>ICMP</option>
        </select>

      </div>

      {/* Packet List */}

      <div className="flex-1 overflow-y-auto">

        {filteredPackets.map((packet) => (

          <div
            key={packet.id}
            onClick={() =>
              setSelectedPacket(packet)
            }
            className={`border-b border-gray-800 px-5 py-3 cursor-pointer transition

            ${
              selectedPacket?.id === packet.id
                ? "bg-cyan-500/10 border-l-4 border-l-cyan-400"
                : "hover:bg-slate-800/40"
            }
            `}
          >

            <div className="flex justify-between">

              <div>

                <p className="text-white font-semibold">
                  #{packet.id}
                </p>

                <p className="text-sm text-cyan-400 mt-1">
                  {packet.protocol}
                </p>

                <p className="text-sm text-gray-400 mt-2">
                  {packet.source} → {packet.destination}
                </p>

                <p className="text-xs text-gray-500 mt-2">
                  {packet.timestamp}
                </p>

              </div>

              <span
                className={`h-fit px-3 py-1 rounded-full text-xs font-semibold ${badgeColors[packet.status]}`}
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