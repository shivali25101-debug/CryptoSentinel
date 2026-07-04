import ConnectionStepper from "./ConnectionStepper";
import KeyExchangeDetails from "./KeyExchangeDetails";
import ConnectionControl from "./ConnectionControl/ConnectionControl";
import RealTimeTraffic from "./RightPanel/RealTimeTraffic";
import TrafficStatistics from "./RightPanel/TrafficStatistics";
import Alerts from "./RightPanel/Alerts";
import QuickSummary from "./RightPanel/QuickSummary";
function DashboardGrid() {
  return (
    <div className="mt-4 flex gap-4 h-[640px]">

     {/* LEFT COLUMN */}

<div className="w-[23%] flex flex-col gap-4">

  <div className="h-[400 px]">
    <ConnectionStepper />
  </div>

  <div className="h-[270px]">
    <KeyExchangeDetails />
  </div>

  
  

</div>

      {/* CENTER COLUMN */}
      <div className="w-[46%]">

        {/* IMPORTANT:
            Center panel now fully self-managed */}
        <ConnectionControl />

      </div>

      {/* RIGHT COLUMN */}

      <div className="w-[31%] flex flex-col gap-4">

         <div className="h-[240px]">
        <RealTimeTraffic />
    </div>
    <div className="h-[240px]">
    <TrafficStatistics />
</div>
<div className="h-[150px]">
    <Alerts />
</div>
<div className="h-[200px]">
    <QuickSummary />
</div>



      </div>

    </div>
  );
}

export default DashboardGrid;