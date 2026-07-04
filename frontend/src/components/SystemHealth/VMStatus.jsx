import { Monitor } from "lucide-react";

const vms = [
  {
    name: "VM1 (Ubuntu)",
    ip: "192.168.1.10",
    status: "Online",
    uptime: "02:15:42",
    color: "bg-green-500",
  },
  {
    name: "VM2 (Ubuntu)",
    ip: "192.168.1.20",
    status: "Online",
    uptime: "02:15:37",
    color: "bg-green-500",
  },
  {
    name: "Kali (VM3)",
    ip: "192.168.1.30",
    status: "Offline",
    uptime: "00:02:18",
    color: "bg-red-500",
  },
];

function VMStatus() {
  return (
    <div className="bg-[#0F172A] border border-gray-800 rounded-xl">

      <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-800">
        <Monitor className="text-cyan-400" />
        <h2 className="text-xl font-semibold text-cyan-400">
          VM Status
        </h2>
      </div>

      <div>
        {vms.map((vm) => (
          <div
            key={vm.name}
            className="flex justify-between items-center px-6 py-5 border-b border-gray-800 last:border-none"
          >
            <div className="flex items-center gap-4">

              <span className={`w-3 h-3 rounded-full ${vm.color}`}></span>

              <div>
                <h3 className="text-white font-medium">{vm.name}</h3>
                <p className="text-gray-500 text-sm">{vm.ip}</p>
              </div>

            </div>

            <div className="text-right">
              <span className="px-3 py-1 rounded bg-green-500/20 text-green-400 text-sm">
                {vm.status}
              </span>

              <p className="text-gray-500 text-sm mt-2">
                {vm.uptime}
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default VMStatus;