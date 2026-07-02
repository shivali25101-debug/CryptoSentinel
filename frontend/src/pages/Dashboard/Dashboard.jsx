import MetricCard from "../../components/Dashboard/MetricCard";
import ConnectionStatus from "../../components/Dashboard/ConnectionStatus";
import KeyExchangeDetails from "../../components/Dashboard/KeyExchangeDetails";
import ConnectionControl from "../../components/Dashboard/ConnectionControl";
import RealTimeTraffic from "../../components/Dashboard/RealTimeTraffic";
import TrafficStatistics from "../../components/Dashboard/TrafficStatistics";
import Alerts from "../../components/Dashboard/Alerts";
import QuickSummary from "../../components/Dashboard/QuickSummary";

function Dashboard() {
  return (
    <div className="p-6 space-y-6">

      {/* Top Cards */}
      <div className="grid grid-cols-4 gap-5">
        <MetricCard />
        <MetricCard />
        <MetricCard />
        <MetricCard />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-5">

        <div className="col-span-8 space-y-5">
          <ConnectionStatus />
          <KeyExchangeDetails />
          <ConnectionControl />
        </div>

        <div className="col-span-4 space-y-5">
          <RealTimeTraffic />
          <TrafficStatistics />
          <Alerts />
          <QuickSummary />
        </div>

      </div>

    </div>
  );
}

export default Dashboard;