import { Crosshair } from "lucide-react";

function TargetInfo({
  target,
}) {

  return (

    <div className="bg-[#0F172A] border border-gray-800 rounded-xl p-6">

      {/* Header */}

      <div className="flex items-center gap-3 mb-6">

        <Crosshair className="text-cyan-400" />

        <h2 className="text-xl font-bold text-cyan-400">
          Target Information
        </h2>

      </div>

      {/* Details */}

      <div className="space-y-5">

        <div className="flex justify-between">

          <span className="text-gray-400">
            Target 1
          </span>

          <span className="text-white">
            {target.target1}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">
            Target 2
          </span>

          <span className="text-white">
            {target.target2}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">
            Gateway
          </span>

          <span className="text-white">
            {target.gateway}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">
            Tool
          </span>

          <span className="text-white">
            {target.tool}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">
            Privilege
          </span>

          <span
            className={
              target.privilege === "Root"
                ? "text-green-400"
                : "text-yellow-400"
            }
          >
            {target.privilege}
          </span>

        </div>

      </div>

    </div>

  );

}

export default TargetInfo;