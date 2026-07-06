import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import sender from "../../assets/topology/sender.png";
import receiver from "../../assets/topology/receiver.png";
import attacker from "../../assets/topology/attacker.png";

import BackgroundGrid from "./BackgroundGrid";
import ConnectionLine from "./ConnectionLine";
import StatusIcon from "./StatusIcon";

function TopologyCanvas() {

  /* ================= BACKEND STATE ================= */

  const [network, setNetwork] = useState({
    mode: "mitm",
    attack: "Man-in-the-Middle",
    status: "Running",
    sender: {
      ip: "192.168.56.101",
      online: true,
    },
    receiver: {
      ip: "192.168.56.102",
      online: true,
    },
    attacker: {
      ip: "192.168.56.103",
      active: true,
    },
    packets: 1256,
    encryption: "AES-256",
  });

  /*
    Later replace this useEffect with:

    fetch("http://localhost:5000/api/topology")
      .then(res => res.json())
      .then(setNetwork);

  */

  useEffect(() => {}, []);

  const mode = network.mode;

  const disconnected = mode === "disconnected";

  const vpn = mode === "vpn";

  const attackSuccess =
    mode === "weak-password" ||
    mode === "mitm" ||
    mode === "shor";

  const attackFailed =
    mode === "secure-mitm" ||
    mode === "kyber";

  return (

    <div
      className="
      relative
      mt-8
      h-[760px]
      w-full
      rounded-xl
      overflow-hidden
      border
      border-white/10
      bg-[#050B14]
      "
    >

      <BackgroundGrid />

      {/* ================= INFORMATION PANEL ================= */}

      <div
        className="
        absolute
        top-90
        right-4
        w-[290px]
        rounded-xl
        border
        border-cyan-500/20
        bg-[#08111E]/90
        backdrop-blur-md
        p-6
        z-30
        "
      >

        <h2 className="text-cyan-400 text-xl font-semibold mb-6">
          LIVE NETWORK STATUS
        </h2>

        <div className="space-y-4 text-sm">

          <div className="flex justify-between">
            <span className="text-gray-400">Attack</span>
            <span className="text-red-400">
              {network.attack}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Status</span>
            <span className="text-green-400">
              {network.status}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Packets</span>
            <span className="text-cyan-300">
              {network.packets}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Encryption</span>
            <span className="text-green-400">
              {network.encryption}
            </span>
          </div>

          <hr className="border-white/10" />

          <div className="space-y-3">

            <div>
              <p className="text-gray-400">Sender</p>
              <p className="text-green-400">
                {network.sender.ip}
              </p>
            </div>

            <div>
              <p className="text-gray-400">Receiver</p>
              <p className="text-green-400">
                {network.receiver.ip}
              </p>
            </div>

            <div>
              <p className="text-gray-400">Attacker</p>
              <p className="text-red-400">
                {network.attacker.ip}
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* ================= SENDER ================= */}

      <div
        className="
        absolute
        left-[6%]
        top-[-5%]
        "
      >

        <img
          src={sender}
          alt="Sender"
          className="
          w-[300px]
          object-contain
          select-none
          pointer-events-none
          drop-shadow-[0_0_30px_rgba(0,255,120,.35)]
          "
        />

      </div>

      {/* ================= RECEIVER ================= */}

      <div
        className="
        absolute
        right-[6%]
        top-[-7%]
        "
      >

        <img
          src={receiver}
          alt="Receiver"
          className="
          w-[300px]
          object-contain
          select-none
          pointer-events-none
          drop-shadow-[0_0_30px_rgba(0,255,120,.35)]
          "
        />

      </div>

      {/* ================= ATTACKER ================= */}

      <motion.div
        className={`
        absolute
        left-1/2
        bottom-10
        -translate-x-1/2

        ${
          disconnected || vpn
            ? "opacity-50"
            : "opacity-100"
        }
        `}
        animate={
          attackSuccess
            ? {
                scale: [1, 1.05, 1],
              }
            : {}
        }
        transition={{
          duration: 1.2,
          repeat: Infinity,
        }}
      >

        <img
          src={attacker}
          alt="Attacker"
          className="
          w-[300px]
          object-contain
          select-none
          pointer-events-none
          drop-shadow-[0_0_40px_rgba(255,0,0,.45)]
          "
        />

      </motion.div>

      {/* ---------- PART 2 STARTS FROM HERE ---------- */}
            {/* ================= CONNECTIONS ================= */}

      {(vpn || attackSuccess || attackFailed) && (
        <ConnectionLine
          x1={350}
          y1={150}
          x2={590}
          y2={150}
          color="#3CFF7B"
        />
      )}

      {/* ================= ATTACK PATH ================= */}

      {(attackSuccess || attackFailed) && (
        <ConnectionLine
          x1={465}
          y1={380}
          x2={465}
          y2={160}
          color="#FF3232"
        />
      )}

      {/* ================= BREACH ================= */}

      {attackSuccess && (
        <>
          <StatusIcon success={false} />

          <ConnectionLine
            x1={490}
            y1={150}
            x2={590}
            y2={150}
            color="#FF3232"
          />
        </>
      )}

      {/* ================= SECURE ================= */}

      {attackFailed && <StatusIcon success />}

      {/* ================= LABELS ================= */}

      {/* Sender */}

      <div
        className="
        absolute
        left-[140px]
        top-[280px]
        text-center
        "
      >
        <h2 className="text-green-400 tracking-[0.25em] text-lg font-light">
          SENDER
        </h2>

        <p className="text-gray-400 text-sm mt-2">
          {network.sender.ip}
        </p>

        <p className="text-green-500 text-xs tracking-widest mt-1">
          ONLINE
        </p>
      </div>

      {/* Receiver */}

      <div
        className="
        absolute
        right-[140px]
        top-[280px]
        text-center
        "
      >
        <h2 className="text-green-400 tracking-[0.25em] text-lg font-light">
          RECEIVER
        </h2>

        <p className="text-gray-400 text-sm mt-2">
          {network.receiver.ip}
        </p>

        <p className="text-green-500 text-xs tracking-widest mt-1">
          ONLINE
        </p>
      </div>

      {/* Attacker */}

      <div
        className={`
        absolute
        left-1/2
        bottom-20
        -translate-x-1/2
        text-center

        ${
          disconnected || vpn
            ? "opacity-50"
            : "opacity-100"
        }
        `}
      >
        <h2 className="text-red-500 tracking-[0.25em] text-lg font-light">
          ATTACKER
        </h2>

        <p className="text-gray-400 text-sm mt-2">
          {network.attacker.ip}
        </p>

        <p className="text-red-500 text-xs tracking-widest mt-1">
          ACTIVE
        </p>
      </div>

      {/* ================= LEGEND ================= */}

      <div
        className="
        absolute
        left-6
        bottom-6
        bg-[#08111E]/80
        border
        border-cyan-500/20
        rounded-xl
        px-5
        py-4
        backdrop-blur-md
        "
      >
        <h3 className="text-cyan-400 text-sm font-semibold mb-3">
          LEGEND
        </h3>

        <div className="space-y-2 text-xs">

          <div className="flex items-center gap-3">
            <div className="w-4 h-[3px] bg-green-400 rounded-full"></div>
            <span className="text-gray-300">
              Secure Communication
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-4 h-[3px] bg-red-500 rounded-full"></div>
            <span className="text-gray-300">
              Attack Path
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-gray-300">
              Online Device
            </span>
          </div>

        </div>
      </div>

    </div>
  );
}

export default TopologyCanvas;