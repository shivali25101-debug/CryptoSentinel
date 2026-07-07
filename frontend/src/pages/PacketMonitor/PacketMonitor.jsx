import { useEffect, useState } from "react";

import CyberHeading from "../../components/CyberHeading";
import PacketList from "../../components/PacketMonitor/PacketList";
import PacketDetails from "../../components/PacketMonitor/PacketDetails";

import useCyberData from "../../hooks/useCyberData";

function PacketMonitor() {

  const { packets } = useCyberData();

  const [selectedPacket, setSelectedPacket] = useState(null);

  useEffect(() => {

    if (
      packets.length &&
      (
        !selectedPacket ||
        !packets.find(
          p => p.id === selectedPacket.id
        )
      )
    ) {
      setSelectedPacket(packets[0]);
    }

  }, [packets]);

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