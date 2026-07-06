import sender from "../../../assets/topology/sender.png";
import receiver from "../../../assets/topology/receiver.png";
import attacker from "../../../assets/topology/attacker.png";
import useCyberData from "../../../hooks/useCyberData";

function TopologyCanvas() {
  const { scenario } = useCyberData();

  const isNormal = scenario === "Normal";
  const isAttack = scenario === "MITM";
  const isSecure = scenario === "Secure";

  return (
    <div className="relative w-full h-[420px]">

      <svg className="absolute w-full h-full" viewBox="0 0 1000 500">

        {/* VM1 → VM2 */}
        <line
          x1="380"
          y1="-100"
          x2="650"
          y2="-100"
          stroke={
            isSecure ? "#39FF6A" :
            isAttack ? "#444" : "#39FF6A"
          }
          strokeWidth="2"
          strokeDasharray="6 6"
        />

        {/* VM1 → VM3 */}
        {isAttack && (
          <line
            x1="350"
            y1="10"
            x2="500"
            y2="360"
            stroke="#ff3b3b"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        )}

        {/* VM2 → VM3 */}
        {isAttack && (
          <line
            x1="625"
            y1="10"
            x2="500"
            y2="360"
            stroke="#ff3b3b"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        )}

        {/* Cross */}
        {isAttack && (
          <text
            x="500"
            y="-70"
            fill="#ff3b3b"
            fontSize="100"
            textAnchor="middle"
          >
            ✕
          </text>
        )}

        {/* Tick */}
        {isSecure && (
          <text
            x="500"
            y="-70"
            fill="#39FF6A"
            fontSize="100"
            textAnchor="middle"
          >
            ✓
          </text>
        )}

      </svg>

      {/* Sender */}
      <div className="absolute left-[10%] top-[-5%] text-center">
        <img src={sender} className="w-[120px]" />
        <p className="text-green-400 -mt-13 text-[14px]">VM1 (Client)</p>
        <p className="text-gray-400 text-[11px]">10.0.0.1</p>
        <p className="text-gray-500 text-[11px]">Ubuntu</p>
      </div>

      {/* Receiver */}
      <div className="absolute right-[10%] top-[-6%] text-center">
        <img src={receiver} className="w-[120px]" />
        <p className="text-green-400 -mt-12 text-[14px]">VM2 (Server)</p>
        <p className="text-gray-400 text-[11px]">10.0.0.2</p>
        <p className="text-gray-500 text-[11px]">Ubuntu</p>
      </div>

      {/* Attacker */}
      {1 && (
        <div className="absolute left-1/2 bottom-[20%] -translate-x-1/2 text-center">
          <img src={attacker} className="w-[110px]" />
          <p className="text-red-400 -mt-10 text-[14px]">VM3 (Attacker)</p>
          <p className="text-gray-400 text-[11px]">10.0.0.3</p>
          <p className="text-gray-500 text-[11px]">Kali Linux</p>
        </div>
      )}

    </div>
  );
}

export default TopologyCanvas;