import { ShieldAlert } from "lucide-react";

function AttackStatus({
  attack,
}) {

  const isRunning =
    attack.state === "Running";

  return (

    <div className="bg-[#0F172A] border border-red-900 rounded-xl p-6">

      {/* Header */}

      <div className="flex items-center gap-3 mb-6">

        <ShieldAlert className="text-red-400" />

        <h2 className="text-xl font-bold text-cyan-400">
          Attack Status
        </h2>

      </div>

      {/* Details */}

      <div className="space-y-5">

        <div className="flex justify-between">

          <span className="text-gray-400">
            Scenario
          </span>

          <span className="text-red-400 font-semibold">
            {attack.scenario}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">
            Attack State
          </span>

          <span
            className={`flex items-center gap-2 font-semibold ${
              isRunning
                ? "text-red-400"
                : "text-green-400"
            }`}
          >

            <span
              className={`w-3 h-3 rounded-full animate-pulse ${
                isRunning
                  ? "bg-red-500"
                  : "bg-green-500"
              }`}
            />

            {attack.state}

          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">
            Packets Intercepted
          </span>

          <span className="text-white">
            {attack.intercepted}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">
            Spoofing
          </span>

          <span className="text-white">
            {attack.spoofing}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">
            Interface
          </span>

          <span className="text-white">
            {attack.interface}
          </span>

        </div>

      </div>

    </div>

  );

}

export default AttackStatus;