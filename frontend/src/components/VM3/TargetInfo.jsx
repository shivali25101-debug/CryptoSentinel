import { Crosshair } from "lucide-react";

function TargetInfo() {
  return (
    <div className="bg-[#0F172A] border border-gray-800 rounded-xl p-6">

      <div className="flex items-center gap-3 mb-6">
        <Crosshair className="text-cyan-400" />
        <h2 className="text-xl font-bold text-cyan-400">
          Target Information
        </h2>
      </div>

      <div className="space-y-5">

        <div className="flex justify-between">
          <span className="text-gray-400">Target 1</span>
          <span className="text-white">10.0.0.1</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Target 2</span>
          <span className="text-white">10.0.0.2</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Gateway</span>
          <span className="text-white">10.0.0.254</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Tool</span>
          <span className="text-white">Scapy</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Privilege</span>
          <span className="text-green-400">Root</span>
        </div>

      </div>

    </div>
  );
}

export default TargetInfo;