import {
  ShieldCheck,
  Lock,
  KeyRound,
  ArrowLeftRight,
} from "lucide-react";

const details = [
  {
    icon: <ShieldCheck size={20} className="text-green-400" />,
    label: "Tunnel Status",
    value: "Active",
    color: "text-green-400",
  },
  {
    icon: <Lock size={20} className="text-cyan-400" />,
    label: "Encryption",
    value: "ChaCha20-Poly1305",
    color: "text-cyan-400",
  },
  {
    icon: <KeyRound size={20} className="text-cyan-400" />,
    label: "Key Exchange",
    value: "X25519",
    color: "text-cyan-400",
  },
  {
    icon: <ArrowLeftRight size={20} className="text-cyan-400" />,
    label: "Data Transferred",
    value: "18.6 MB",
    color: "text-cyan-400",
  },
];

function VPNHealth() {
  return (
    <div className="bg-[#0F172A] border border-gray-800 rounded-xl">

      <div className="px-6 py-4 border-b border-gray-800">
        <h2 className="text-xl font-semibold text-cyan-400">
          VPN Status
        </h2>
      </div>

      <div>
        {details.map((item) => (
          <div
            key={item.label}
            className="flex justify-between items-center px-6 py-5 border-b border-gray-800 last:border-none"
          >
            <div className="flex items-center gap-4">
              {item.icon}

              <span className="text-gray-300">
                {item.label}
              </span>
            </div>

            <span className={`font-semibold ${item.color}`}>
              {item.value}
            </span>

          </div>
        ))}
      </div>

    </div>
  );
}

export default VPNHealth;