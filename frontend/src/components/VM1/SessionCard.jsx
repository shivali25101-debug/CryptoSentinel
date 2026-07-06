import { Monitor } from "lucide-react";

function SessionCard({
  session,
}) {

  return (

    <div className="bg-[#0F172A] border border-gray-800 rounded-xl p-6">

      {/* Header */}

      <div className="flex items-center gap-3 mb-6">

        <Monitor className="text-cyan-400" />

        <h2 className="text-xl font-bold text-cyan-400">
          Session Information
        </h2>

      </div>

      {/* Session Details */}

      <div className="space-y-5">

        <div className="flex justify-between">

          <span className="text-gray-400">
            Username
          </span>

          <span className="text-white">
            {session.username}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">
            Hostname
          </span>

          <span className="text-white">
            {session.hostname}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">
            Operating System
          </span>

          <span className="text-white">
            {session.os}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">
            Kernel
          </span>

          <span className="text-white">
            {session.kernel}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">
            Session Started
          </span>

          <span className="text-white">
            {session.started}
          </span>

        </div>

      </div>

    </div>

  );

}

export default SessionCard;