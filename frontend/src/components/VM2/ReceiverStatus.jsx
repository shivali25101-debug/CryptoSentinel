import { Download, ShieldCheck } from "lucide-react";

function ReceiverStatus() {
  return (
    <div className="bg-[#0F172A] border border-gray-800 rounded-xl p-6">

      <div className="flex items-center gap-3 mb-6">
        <Download className="text-cyan-400" />
        <h2 className="text-xl font-bold text-cyan-400">
          Receiver Status
        </h2>
      </div>

      <div className="space-y-5">

        <div className="flex justify-between">
          <span className="text-gray-400">Status</span>

          <span className="flex items-center gap-2 text-green-400 font-semibold">
            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
            Receiving
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">VPN Tunnel</span>
          <span className="text-cyan-400">Connected</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Listening Port</span>
          <span className="text-white">5000</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Integrity Check</span>
          <span className="text-green-400">Passed</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Authentication</span>
          <span className="text-white">Verified</span>
        </div>

      </div>

    </div>
  );
}

export default ReceiverStatus;