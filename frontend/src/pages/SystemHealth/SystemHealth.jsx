import CyberHeading from "../../components/CyberHeading";
import HealthCards from "../../components/SystemHealth/HealthCards";
import VMStatus from "../../components/SystemHealth/VMStatus";
import VPNHealth from "../../components/SystemHealth/VPNHealth";
import ResourceUsage from "../../components/SystemHealth/ResourceUsage";

function SystemHealth() {
  return (
    <div className="min-h-screen px-8 py-0">
      <CyberHeading title="SYSTEM HEALTH" />

      <div className="space-y-6 mt-8">

        <HealthCards />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <VMStatus />
          <VPNHealth />
        </div>

        <ResourceUsage />

      </div>
    </div>
  );
}

export default SystemHealth;