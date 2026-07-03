import sender from "../../assets/topology/sender.png";
import receiver from "../../assets/topology/receiver.png";
import attacker from "../../assets/topology/attacker.png";

import BackgroundGrid from "./BackgroundGrid";
import ConnectionLine from "./ConnectionLine";
import StatusIcon from "./StatusIcon";

function TopologyCanvas() {

  // Change only this variable later
  const mode = "disconnected";
  // vpn
  // weak-password
  // mitm
  // secure-mitm
  // shor
  // kyber

  const disconnected = mode === "disconnected";

  const vpn = mode === "vpn";

  const attackSuccess =
    mode === "weak-password" ||
    mode === "mitm" ||
    mode === "shor";

  const attackFailed =
    mode === "secure-mitm" ||
    mode === "kyber";

  const title =
    disconnected
      ? "DISCONNECTED"
      : vpn
      ? "VPN CONNECTION ESTABLISHED"
      : mode === "weak-password"
      ? "WEAK PASSWORD ATTACK"
      : mode === "mitm"
      ? "MAN-IN-THE-MIDDLE ATTACK"
      : mode === "secure-mitm"
      ? "SECURE MITM PROTECTION"
      : mode === "shor"
      ? "SHOR'S ALGORITHM"
      : "KYBER POST-QUANTUM ENCRYPTION";

  return (

    <div className="relative w-full h-full overflow-hidden rounded-xl bg-[#050B14]">

      <BackgroundGrid />

      {/* Title */}

      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center">

        <h1 className="text-5xl font-light tracking-[0.35em] text-[#6BFF86]">

          NETWORK TOPOLOGY

        </h1>

        <div className="mx-auto mt-5 w-[420px] h-px bg-[#21422e]" />

        <p className="mt-6 text-xl tracking-[0.32em] text-[#7ee58e]">

          {title}

        </p>

      </div>

      {/* Sender */}

      <div className="absolute left-20 top-48">

        <img
          src={sender}
          alt="Sender"
          className="
          w-[360px]
          select-none
          pointer-events-none
          drop-shadow-[0_0_18px_#00ff66]
          "
        />

      </div>

      {/* Receiver */}

      <div className="absolute right-20 top-48">

        <img
          src={receiver}
          alt="Receiver"
          className="
          w-[360px]
          select-none
          pointer-events-none
          drop-shadow-[0_0_18px_#00ff66]
          "
        />

      </div>

      {/* Attacker */}

      <div
        className={`
        absolute
        left-1/2
        bottom-12
        -translate-x-1/2
        transition-all
        duration-500

        ${
          disconnected || vpn
            ? "opacity-20"
            : "opacity-100"
        }
      `}
      >

        <img
          src={attacker}
          alt="Attacker"
          className="
          w-[390px]
          select-none
          pointer-events-none
          drop-shadow-[0_0_22px_red]
          "
        />

      </div>

      {/* Main Connection */}

      {(vpn || attackSuccess || attackFailed) && (

        <ConnectionLine

          x1={360}
          y1={345}

          x2={1080}
          y2={345}

          color="#3CFF7B"

        />

      )}

      {/* Attack Lines */}

      {(attackSuccess || attackFailed) && (

        <>

          <ConnectionLine

            x1={640}
            y1={590}

            x2={520}
            y2={365}

            color="#ff3434"

          />

          <ConnectionLine

            x1={760}
            y1={590}

            x2={920}
            y2={365}

            color="#ff3434"

          />

        </>

      )}

      {/* Success */}

      {attackFailed && (

        <StatusIcon success />

      )}

      {/* Failed */}

      {attackSuccess && (

        <>

          <StatusIcon success={false} />

          {/* Break the green line after the cross */}

          <div

            className="
            absolute
            top-[342px]
            left-[760px]
            w-[360px]
            h-[8px]
            bg-[#050B14]
            "

          />

        </>

      )}

    </div>

  );

}

export default TopologyCanvas;