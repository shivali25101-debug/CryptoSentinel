import CyberHeading from "../../components/CyberHeading";
import MetricCards from "../../components/Dashboard/MetricCards";
import DashboardGrid from "../../components/Dashboard/DashboardGrid";
import useCyberData from "../../hooks/useCyberData";

function Dashboard() {
  const { vpnStatus, sentPackets } = useCyberData();

console.log(vpnStatus, sentPackets);


  return (
    <div className="min-h-screen px-8 pt-0 py-8">

      <CyberHeading
        title="SECURE VPN DASHBOARD"
        subtitle="REAL-TIME MONITORING OF VPN CONNECTIONS"
      />
      

      {/* Top Metrics */}

      <div className="mt-0" mb="-5">
        <MetricCards />
      </div>

      {/* Main Dashboard */}

      <DashboardGrid />

    </div>
  );
}

export default Dashboard;