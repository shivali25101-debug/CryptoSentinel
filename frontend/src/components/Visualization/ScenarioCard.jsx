import {
  Shield,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";

import useCyberData from "../../hooks/useCyberData";

function ScenarioCard() {
  const { scenario, vpnStatus } = useCyberData();

  console.log("Scenario from backend:", scenario);

  const scenarios = {
    normal: {
      title: "Normal VPN",
      description:
        "Secure encrypted communication between VM1 and VM2.",
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/30",
      Icon: Shield,
    },

    weak_password: {
      title: "Weak Password",
      description:
        "Credential attack simulation running.",
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/30",
      Icon: ShieldAlert,
    },

    mitm_authorized: {
      title: "MITM (Authorized)",
      description:
        "Traffic interception performed for educational simulation.",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/30",
      Icon: ShieldAlert,
    },

    mitm_unauthorized: {
      title: "MITM (Unauthorized)",
      description:
        "Unauthorized attacker is intercepting packets.",
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/30",
      Icon: ShieldAlert,
    },

    replay: {
      title: "Replay Attack",
      description:
        "Captured packets are being retransmitted.",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/30",
      Icon: ShieldAlert,
    },

    shor: {
      title: "Shor Algorithm",
      description:
        "Quantum attack against classical cryptography.",
      color: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/30",
      Icon: ShieldAlert,
    },

    kyber: {
      title: "Kyber Encryption",
      description:
        "Post-Quantum VPN tunnel is active.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/30",
      Icon: ShieldCheck,
    },
  };

  const key = (scenario || "normal")
    .trim()
    .toLowerCase();

  const current = scenarios[key] || scenarios.normal;

  const Icon = current.Icon;

  return (
    <div className="bg-[#0F172A] border border-slate-800 rounded-xl px-5 py-4 h-28 flex items-center justify-between">

      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
          Current Scenario
        </p>

        <h2
          className={`mt-2 text-xl font-semibold ${current.color}`}
        >
          {current.title}
        </h2>

        <p className="text-xs text-slate-400 mt-1">
          {current.description}
        </p>

        <p className="mt-2 text-xs">
          VPN :
          <span
            className={`ml-2 font-semibold ${
              vpnStatus === "Connected"
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {vpnStatus}
          </span>
        </p>
      </div>

      <div
        className={`w-16 h-16 rounded-full border flex items-center justify-center ${current.bg} ${current.border}`}
      >
        <Icon
          size={30}
          className={current.color}
        />
      </div>

    </div>
  );
}

export default ScenarioCard;