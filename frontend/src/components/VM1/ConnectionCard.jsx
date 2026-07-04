import { Wifi, ShieldCheck } from "lucide-react";

function ConnectionCard() {
  return (
    <div className="bg-[#0F172A] border border-gray-800 rounded-xl p-6">

      <div className="flex items-center gap-3 mb-6">
        <Wifi className="text-cyan-400" />
        <h2 className="text-xl font-bold text-cyan-400">
          Connection Status
        </h2>
      </div>

      <div className="space-y-5">

        <div className="flex justify-between">
          <span className="text-gray-400">Status</span>

          <span className="flex items-center gap-2 text-green-400 font-semibold">
            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
            Connected
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">VPN Tunnel</span>
          <span className="text-cyan-400">Active</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">IP Address</span>
          <span className="text-white">10.0.0.1</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Encryption</span>
          <span className="text-white">ChaCha20-Poly1305</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Key Exchange</span>
          <span className="text-white">X25519</span>
        </div>

      </div>

    </div>
  );
}

export default ConnectionCard;