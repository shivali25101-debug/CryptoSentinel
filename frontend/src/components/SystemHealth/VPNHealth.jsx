import {
  ShieldCheck,
  ShieldX,
  Lock,
  KeyRound,
  ArrowLeftRight,
} from "lucide-react";

function VPNHealth({
  vpn,
}) {

  const tunnelActive =
    vpn.tunnel === "Active";

  const details = [
    {
      icon: tunnelActive ? (
        <ShieldCheck
          size={20}
          className="text-green-400"
        />
      ) : (
        <ShieldX
          size={20}
          className="text-red-400"
        />
      ),

      label: "Tunnel Status",

      value: vpn.tunnel,

      color: tunnelActive
        ? "text-green-400"
        : "text-red-400",
    },

    {
      icon: (
        <Lock
          size={20}
          className="text-cyan-400"
        />
      ),

      label: "Encryption",

      value: vpn.encryption,

      color: "text-cyan-400",
    },

    {
      icon: (
        <KeyRound
          size={20}
          className="text-cyan-400"
        />
      ),

      label: "Key Exchange",

      value: vpn.keyExchange,

      color: "text-cyan-400",
    },

    {
      icon: (
        <ArrowLeftRight
          size={20}
          className="text-cyan-400"
        />
      ),

      label: "Data Transferred",

      value: vpn.transferred,

      color: "text-cyan-400",
    },
  ];

  return (

    <div className="bg-[#0F172A] border border-gray-800 rounded-xl">

      {/* Header */}

      <div className="px-6 py-4 border-b border-gray-800">

        <h2 className="text-xl font-semibold text-cyan-400">
          VPN Status
        </h2>

      </div>

      {/* Details */}

      <div>

        {details.map((item) => (

          <div
            key={item.label}
            className="flex justify-between items-center px-6 py-5 border-b border-gray-800 last:border-none hover:bg-slate-800/30 transition"
          >

            <div className="flex items-center gap-4">

              {item.icon}

              <span className="text-gray-300">
                {item.label}
              </span>

            </div>

            <span
              className={`font-semibold ${item.color}`}
            >
              {item.value}
            </span>

          </div>

        ))}

      </div>

    </div>

  );

}

export default VPNHealth;