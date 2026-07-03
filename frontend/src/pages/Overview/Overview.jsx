

import React, { useState } from "react";

function Overview() {
  const [activeMode, setActiveMode] = useState(null);

  const systemStatus = activeMode ? "ENABLED" : "DISABLED";

  const activeNodes = !activeMode
    ? "NONE"
    : activeMode === "normal_vpn" || activeMode === "kyber"
    ? "2 NODES"
    : "3 NODES";

  const threatLevel = () => {
    switch (activeMode) {
      case "normal_vpn":
      case "kyber":
      case "secure_mitm":
        return "SECURE";
      case "weak_password":
        return "LOW";
      case "mitm_unauth":
        return "MODERATE";
      case "shor":
        return "HIGH";
      default:
        return "UNKNOWN";
    }
  };

  const modes = [
    {
      id: "normal_vpn",
      title: "NORMAL VPN",
      desc: "Encrypted tunnel ensuring secure packet flow between nodes.",
      icon: "🔐",
    },
    {
      id: "weak_password",
      title: "WEAK PASSWORD",
      desc: "Highly vulnerable authentication system exposed to brute force.",
      icon: "⚠️",
    },
    {
      id: "mitm_unauth",
      title: "MITM (UNAUTHORISED)",
      desc: "Attacker silently intercepts packets using spoofing techniques.",
      icon: "🕵️",
    },
    {
      id: "secure_mitm",
      title: "MITM (AUTHORISED)",
      desc: "Controlled interception used for monitoring and analysis.",
      icon: "🛡️",
    },
    {
      id: "shor",
      title: "SHOR’S ALGORITHM",
      desc: "Quantum attack model breaking classical encryption systems.",
      icon: "⚛️",
    },
    {
      id: "kyber",
      title: "POST-QUANTUM (KYBER)",
      desc: "Quantum-resistant encryption designed for future security.",
      icon: "🧬",
    },
  ];

  return (
    <div className="min-h-screen bg-[#05070F] text-gray-300 px-6 py-8 font-mono">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="
          text-4xl font-bold tracking-[0.25em]
          text-green-400
          drop-shadow-[0_0_12px_#00ff88]
        ">
          SYSTEM OVERVIEW
        </h1>

        <p className="text-gray-500 mt-2 text-sm tracking-wide">
          LIVE SECURITY SIMULATION MATRIX
        </p>
      </div>

      {/* STATUS CARDS */}
      <div className="grid grid-cols-3 gap-5 mb-12">

        {[
          { label: "SYSTEM STATUS", value: systemStatus, icon: "🖥️" },
          { label: "ACTIVE NODES", value: activeNodes, icon: "🌐" },
          { label: "THREAT LEVEL", value: threatLevel(), icon: "🚨" },
        ].map((item, i) => (
          <div
            key={i}
            className="
              relative p-5 rounded-xl
              bg-[#0B1220]
              border border-gray-700
              shadow-[0_0_12px_rgba(0,255,150,0.05)]
              hover:shadow-[0_0_20px_rgba(0,180,255,0.25)]
              hover:border-blue-400
              transition-all duration-300
              group
            "
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
              <h2 className="text-xs tracking-widest text-gray-400 group-hover:text-blue-300">
                {item.label}
              </h2>
            </div>

            <p className="
              text-xl mt-4 font-bold tracking-wider
              text-gray-200
              group-hover:text-blue-300
            ">
              {item.value}
            </p>

            {/* glow edge */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_25px_rgba(0,180,255,0.15)]"></div>
          </div>
        ))}

      </div>

      {/* MODE HEADER */}
      <div className="text-center mb-6">
        <h2 className="
          text-green-400 text-xl tracking-[0.35em]
          drop-shadow-[0_0_10px_#00ff88]
        ">
          KNOW ABOUT THE MODES
        </h2>
      </div>

      {/* MODE BARS */}
      <div className="space-y-4">

        {modes.map((mode) => (
          <div
            key={mode.id}
            onClick={() => setActiveMode(mode.id)}
            className="
              relative cursor-pointer
              bg-[#0B1220]
              border border-gray-700
              rounded-xl p-5

              transition-all duration-300
              hover:scale-[1.03]
              hover:border-blue-400
              hover:shadow-[0_0_25px_rgba(0,170,255,0.3)]
              hover:text-blue-300
            "
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">{mode.icon}</span>

              <div className="flex-1">
                <h3 className="text-gray-200 tracking-wider font-semibold">
                  {mode.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1 leading-relaxed group-hover:text-blue-200">
                  {mode.desc}
                </p>
              </div>

              <span className="text-gray-600 text-sm">
                →
              </span>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Overview;