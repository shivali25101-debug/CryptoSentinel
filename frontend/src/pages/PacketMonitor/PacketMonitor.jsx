import { useState } from "react";
import CyberHeading from "../../components/CyberHeading";
import PacketList from "../../components/PacketMonitor/PacketList";
import PacketDetails from "../../components/PacketMonitor/PacketDetails";

const dummyPackets = [
  {
    id: 145,
    protocol: "UDP",
    source: "VM1",
    destination: "VM2",
    size: "128 Bytes",
    encrypted: "Yes",
    status: "Encrypted",
    timestamp: "10:41:20",
    payload: `AB 2D F1 22 8C 91 73 AA
23 89 FF 10 77 A4 B1 91`,
  },
  {
    id: 146,
    protocol: "UDP",
    source: "VM2",
    destination: "VM1",
    size: "128 Bytes",
    encrypted: "Yes",
    status: "Encrypted",
    timestamp: "10:41:32",
    payload: `91 FF 34 82 AA 73 18 C2
4B 8D 91 22 E4 1A 7C 10`,
  },
  {
    id: 147,
    protocol: "TCP",
    source: "VM3",
    destination: "VM1",
    size: "512 Bytes",
    encrypted: "No",
    status: "Intercepted",
    timestamp: "10:42:38",
    payload: `4A F2 8B 91 C1 44 9A 02
3C D7 11 8F 9A E4 77 2D
0F 88 D2 3C B9 73 11 AA
44 F1 E0 9B C2 55 90 12`,
  },
  {
    id: 148,
    protocol: "UDP",
    source: "VM1",
    destination: "VM2",
    size: "256 Bytes",
    encrypted: "No",
    status: "Normal",
    timestamp: "10:43:01",
    payload: `12 34 56 78 90 AB CD EF`,
  },
];

function PacketMonitor() {

  // Later this will come from the backend.
  const [packets, setPackets] = useState(dummyPackets);

  // Selected packet.
  const [selectedPacket, setSelectedPacket] = useState(dummyPackets[0]);

  /*
    BACKEND (Later)

    useEffect(() => {
      fetch("http://localhost:5000/api/packets")
        .then(res => res.json())
        .then(data => {
          setPackets(data);
          setSelectedPacket(data[0]);
        });
    }, []);

  */

  return (
    <div className="min-h-screen px-8 py-4">

      <CyberHeading
        title="PACKET MONITOR"
        subtitle="LIVE NETWORK TRAFFIC INSPECTION"
      />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        <div className="xl:col-span-1">

          <PacketList
            packets={packets}
            selectedPacket={selectedPacket}
            setSelectedPacket={setSelectedPacket}
          />

        </div>

        <div className="xl:col-span-2">

          <PacketDetails
            packet={selectedPacket}
          />

        </div>

      </div>

    </div>
  );
}

export default PacketMonitor;