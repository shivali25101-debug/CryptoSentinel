import { ShieldAlert } from "lucide-react";

function AttackStatus() {
  return (
    <div className="bg-[#0F172A] border border-red-900 rounded-xl p-6">

      <div className="flex items-center gap-3 mb-6">
        <ShieldAlert className="text-red-400" />
        <h2 className="text-xl font-bold text-cyan-400">
          Attack Status
        </h2>
      </div>

      <div className="space-y-5">

        <div className="flex justify-between">
          <span className="text-gray-400">Scenario</span>
          <span className="text-red-400 font-semibold">
            MITM Attack
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Attack State</span>

          <span className="flex items-center gap-2 text-red-400">
            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
            Running
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Packets Intercepted</span>
          <span className="text-white">238</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Spoofing</span>
          <span className="text-white">Enabled</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Interface</span>
          <span className="text-white">eth0</span>
        </div>

      </div>

    </div>
  );
}

export default AttackStatus;