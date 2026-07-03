import sender from "../../assets/topology/sender.png";
import receiver from "../../assets/topology/receiver.png";
import attacker from "../../assets/topology/attacker.png";

import BackgroundGrid from "./BackgroundGrid";
import ConnectionLine from "./ConnectionLine";
import StatusIcon from "./StatusIcon";

function TopologyCanvas() {

  // Change this later according to selected scenario
  const mode = "mitm";

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

      {/* Sender */}

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
          drop-shadow-[0_0_30px_rgba(0,255,120,0.35)]
          "
        />

      </div>

      {/* Receiver */}

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
          drop-shadow-[0_0_30px_rgba(0,255,120,0.35)]
          "
        />

      </div>

      {/* Attacker */}

      <div
        className={`
        absolute
        left-1/2
        bottom-10
        -translate-x-1/2
        transition-all
        duration-500

        ${
          disconnected || vpn
            ? "opacity-50"
            : "opacity-100"
        }
        `}
      >

        <img
          src={attacker}
          alt="Attacker"
          className="
          w-[300px]
          object-contain
          select-none
          pointer-events-none
          drop-shadow-[0_0_40px_rgba(255,0,0,.35)]
          "
        />

      </div>
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

        <>

          <ConnectionLine
            x1={465}
            y1={380}
            x2={465}
            y2={160}
            color="#FF3232"
          />

        </>

      )}

      {/* ================= BREACH ================= */}

      {attackSuccess && (

        <>

          <StatusIcon success={false} />

          {/* Hide receiver half of green connection */}

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

      {attackFailed && (

        <StatusIcon success />

      )}
            {/* ================= LABELS ================= */}

      <div
        className="
        absolute
        left-[150px]
        top-[280px]
        text-center
        "
      >

        <h2 className="text-green-400 tracking-[0.25em] text-lg font-light">
          SENDER
        </h2>

      </div>

      <div
        className="
        absolute
        right-[150px]
        top-[280px]
        text-center
        "
      >

        <h2 className="text-green-400 tracking-[0.25em] text-lg font-light">
          RECEIVER
        </h2>

      </div>

      <div
        className={`
        absolute
        left-1/2
        bottom-30
        -translate-x-1/2
        text-center
        transition-all

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

      </div>
          </div>

  );

}

export default TopologyCanvas; 