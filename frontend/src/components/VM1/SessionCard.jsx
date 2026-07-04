import { Monitor } from "lucide-react";

function SessionCard() {
  return (
    <div className="bg-[#0F172A] border border-gray-800 rounded-xl p-6">

      <div className="flex items-center gap-3 mb-6">
        <Monitor className="text-cyan-400" />
        <h2 className="text-xl font-bold text-cyan-400">
          Session Information
        </h2>
      </div>

      <div className="space-y-5">

        <div className="flex justify-between">
          <span className="text-gray-400">Username</span>
          <span className="text-white">ubuntu</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Hostname</span>
          <span className="text-white">vm1</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Operating System</span>
          <span className="text-white">Ubuntu 24.04</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Kernel</span>
          <span className="text-white">Linux 6.x</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Session Started</span>
          <span className="text-white">10:42:31</span>
        </div>

      </div>

    </div>
  );
}

export default SessionCard;