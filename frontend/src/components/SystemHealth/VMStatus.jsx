import { Monitor } from "lucide-react";

function VMStatus({
  vms,
}) {

  return (

    <div className="bg-[#0F172A] border border-gray-800 rounded-xl">

      {/* Header */}

      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">

        <div className="flex items-center gap-3">

          <Monitor className="text-cyan-400" />

          <h2 className="text-xl font-semibold text-cyan-400">
            Virtual Machines
          </h2>

        </div>

        <span className="text-sm text-gray-400">
          {vms.length} Running
        </span>

      </div>

      {/* VM List */}

      <div>

        {vms.map((vm) => {

          const online = vm.status === "Online";

          return (

            <div
              key={vm.id}
              className="flex justify-between items-center px-6 py-5 border-b border-gray-800 last:border-none hover:bg-slate-800/30 transition"
            >

              <div className="flex items-center gap-4">

                <span
                  className={`w-3 h-3 rounded-full ${
                    online
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                />

                <div>

                  <h3 className="text-white font-medium">
                    {vm.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {vm.ip}
                  </p>

                </div>

              </div>

              <div className="text-right">

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    online
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {vm.status}
                </span>

                <p className="text-gray-500 text-sm mt-2">
                  Uptime: {vm.uptime}
                </p>

              </div>

            </div>

          );

        })}

      </div>

    </div>

  );

}

export default VMStatus;