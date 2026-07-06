import {
  Wifi,
  WifiOff,
} from "lucide-react";

function ConnectionCard({
  connection,
}) {

  const connected =
    connection.status === "Connected";

  return (

    <div className="bg-[#0F172A] border border-gray-800 rounded-xl p-6">

      {/* Header */}

      <div className="flex items-center gap-3 mb-6">

        {connected ? (
          <Wifi className="text-cyan-400" />
        ) : (
          <WifiOff className="text-red-400" />
        )}

        <h2 className="text-xl font-bold text-cyan-400">
          Connection Status
        </h2>

      </div>

      {/* Details */}

      <div className="space-y-5">

        <div className="flex justify-between">

          <span className="text-gray-400">
            Status
          </span>

          <span
            className={`flex items-center gap-2 font-semibold ${
              connected
                ? "text-green-400"
                : "text-red-400"
            }`}
          >

            <span
              className={`w-3 h-3 rounded-full ${
                connected
                  ? "bg-green-400 animate-pulse"
                  : "bg-red-500"
              }`}
            />

            {connection.status}

          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">
            VPN Tunnel
          </span>

          <span
            className={
              connection.vpn === "Active"
                ? "text-cyan-400"
                : "text-red-400"
            }
          >
            {connection.vpn}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">
            IP Address
          </span>

          <span className="text-white">
            {connection.ip}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">
            Encryption
          </span>

          <span className="text-white">
            {connection.encryption}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">
            Key Exchange
          </span>

          <span className="text-white">
            {connection.keyExchange}
          </span>

        </div>

      </div>

    </div>

  );

}

export default ConnectionCard;