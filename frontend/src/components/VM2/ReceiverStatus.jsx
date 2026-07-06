import { Download } from "lucide-react";

function ReceiverStatus({
  status,
}) {

  const isReceiving =
    status.status === "Receiving";

  return (

    <div className="bg-[#0F172A] border border-gray-800 rounded-xl p-6">

      {/* Header */}

      <div className="flex items-center gap-3 mb-6">

        <Download className="text-cyan-400" />

        <h2 className="text-xl font-bold text-cyan-400">
          Receiver Status
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
              isReceiving
                ? "text-green-400"
                : "text-red-400"
            }`}
          >

            <span
              className={`w-3 h-3 rounded-full animate-pulse ${
                isReceiving
                  ? "bg-green-400"
                  : "bg-red-400"
              }`}
            />

            {status.status}

          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">
            VPN Tunnel
          </span>

          <span className="text-cyan-400">
            {status.vpn}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">
            Listening Port
          </span>

          <span className="text-white">
            {status.port}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">
            Integrity Check
          </span>

          <span
            className={
              status.integrity === "Passed"
                ? "text-green-400"
                : "text-red-400"
            }
          >
            {status.integrity}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">
            Authentication
          </span>

          <span className="text-white">
            {status.authentication}
          </span>

        </div>

      </div>

    </div>

  );

}

export default ReceiverStatus;