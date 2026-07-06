import { motion } from "framer-motion";

import sender from "../../assets/topology/sender.png";
import attacker from "../../assets/topology/attacker.png";
import receiver from "../../assets/topology/receiver.png";

import "./networkCanvas.css";
import useCyberData from "../../hooks/useCyberData";

function NetworkCanvas() {
  const {
    scenario,
    vpnStatus,
    latency,
    packet,
  } = useCyberData();

  return (
    <div className="relative w-full h-full min-h-[700px] bg-[#08111F] border border-slate-800 rounded-xl overflow-hidden">

      <div className="absolute inset-0 grid-bg" />

      <div className="relative z-20 flex items-center justify-between px-6 py-4 border-b border-slate-800">

        <div>
          <h2 className="text-cyan-400 uppercase tracking-[0.25em] text-sm font-bold">
            Network Visualization
          </h2>

          <p className="text-[11px] text-slate-500 mt-1">
            Live Secure Communication Monitor
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="live-dot"></span>

          <span className="text-green-400 text-xs tracking-widest uppercase">
            LIVE
          </span>
        </div>

      </div>

      <div className="relative h-[620px]">

        <svg
          className="absolute inset-0 w-full h-full z-0"
          viewBox="0 0 1200 620"
          preserveAspectRatio="none"
        >

          <line
            x1="170"
            y1="140"
            x2="1030"
            y2="140"
            stroke="#22C55E"
            strokeWidth="3"
            strokeDasharray="10 8"
          />

          <line
            x1="220"
            y1="170"
            x2="600"
            y2="410"
            stroke="rgba(239,68,68,.25)"
            strokeWidth="3"
            strokeDasharray="10 8"
          />

          <line
            x1="980"
            y1="170"
            x2="600"
            y2="410"
            stroke="rgba(239,68,68,.25)"
            strokeWidth="3"
            strokeDasharray="10 8"
          />

        </svg>

        {/* Live Packet */}

        <motion.div
          className={`absolute w-5 h-5 rounded-full z-30 shadow-lg ${
            packet.status === "captured"
              ? "bg-red-500"
              : "bg-cyan-400"
          }`}
          animate={{
  x:
    packet.position === "vm1"
      ? 120
      : packet.position === "vm3"
      ? 520
      : 920,

  y:
    packet.position === "vm3"
      ? 330
      : 120,

  scale:
    packet.status === "captured"
      ? 1.4
      : 1,
}}
          transition={{
            duration: 0.8,
            ease: "linear",
          }}
        />

        {/* VM1 */}

        <div className="absolute left-[8%] top-40 -translate-y-1/2 flex flex-col items-center z-20">

          <div className="node-glow sender-glow">
            <img
              src={sender}
              alt="Sender"
              className="w-40"
            />
          </div>

          <h3 className="mt-4 text-cyan-400 font-semibold">
            VM1
          </h3>

          <p className="text-xs text-slate-400">
            Sender
          </p>

          <span className="text-[11px] text-slate-500">
            10.0.0.1
          </span>

        </div>

        {/* VM3 */}

        <div className="absolute left-1/2 top-100 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">

          <div className="node-glow attacker-glow">
            <img
              src={attacker}
              alt="Attacker"
              className="w-40"
            />
          </div>

          <h3 className="mt-4 text-red-400 font-semibold">
            VM3
          </h3>

          <p className="text-xs text-slate-400">
            Kali Linux
          </p>

          <span className="text-[11px] text-slate-500">
            10.0.0.3
          </span>

        </div>

        {/* VM2 */}

        <div className="absolute right-[8%] top-40 -translate-y-1/2 flex flex-col items-center z-20">

          <div className="node-glow receiver-glow">
            <img
              src={receiver}
              alt="Receiver"
              className="w-40"
            />
          </div>

          <h3 className="mt-4 text-green-400 font-semibold">
            VM2
          </h3>

          <p className="text-xs text-slate-400">
            Receiver
          </p>

          <span className="text-[11px] text-slate-500">
            10.0.0.2
          </span>

        </div>

      </div>

      <div className="border-t border-slate-800 bg-[#0F172A]/90 px-6 py-3 flex justify-between">

        <div>

          <p className="text-[10px] uppercase tracking-widest text-slate-500">
            Scenario
          </p>

          <p className="text-green-400">
            {scenario}
          </p>

        </div>

        <div>

          <p className="text-[10px] uppercase tracking-widest text-slate-500">
            Encryption
          </p>

          <p className="text-violet-400">
            ChaCha20-Poly1305
          </p>

        </div>

        <div>

          <p className="text-[10px] uppercase tracking-widest text-slate-500">
            Tunnel
          </p>

          <p
            className={`absolute w-5 h-5 rounded-full z-30 shadow-lg ${
  packet.status === "captured"
    ? "bg-red-500"
    : packet.status === "forwarded"
    ? "bg-yellow-400"
    : packet.status === "replayed"
    ? "bg-purple-500"
    : "bg-cyan-400"
}`}
          >
            {vpnStatus}
          </p>

        </div>

        <div>

          <p className="text-[10px] uppercase tracking-widest text-slate-500">
            Latency
          </p>

          <p className="text-white">
            {latency} ms
          </p>

        </div>

      </div>

    </div>
  );
}

export default NetworkCanvas;