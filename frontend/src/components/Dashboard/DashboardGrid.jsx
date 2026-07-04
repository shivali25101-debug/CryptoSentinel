import ConnectionStepper from "./ConnectionStepper";
import KeyExchangeDetails from "./KeyExchangeDetails";
import ConnectionControl from "./ConnectionControl/ConnectionControl";
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

        <div className="flex-[1.15] rounded-lg border border-[#1A2430] bg-[#08111D]" />

        <div className="flex-1 rounded-lg border border-[#1A2430] bg-[#08111D]" />

        <div className="flex-[0.55] rounded-lg border border-[#1A2430] bg-[#08111D]" />

        <div className="flex-[0.65] rounded-lg border border-[#1A2430] bg-[#08111D]" />

      </div>

    </div>
  );
}

export default DashboardGrid;