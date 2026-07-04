import CyberHeading from "../../components/CyberHeading";
import PacketList from "../../components/PacketMonitor/PacketList";
import PacketDetails from "../../components/PacketMonitor/PacketDetails";

function PacketMonitor() {
  return (
    <div className="min-h-screen px-8 py-0">
      <CyberHeading title="PACKET MONITOR" />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        <div className="xl:col-span-1">
          <PacketList />
        </div>

        <div className="xl:col-span-2">
          <PacketDetails />
        </div>

      </div>
    </div>
  );
}

export default PacketMonitor;