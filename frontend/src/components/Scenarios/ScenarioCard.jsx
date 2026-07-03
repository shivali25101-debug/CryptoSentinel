import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Fingerprint,
  KeySquare,
  Radar,
  ShieldCheck,
  Cpu,
  ShieldEllipsis,
} from "lucide-react";

function ScenarioCard({
  scenario,
  selectedScenario,
  setSelectedScenario,
}) {
  const [flip, setFlip] = useState(false);

  const navigate = useNavigate();

  const audioRef = useRef(null);

  const iconMap = {
    1: Fingerprint,
    2: KeySquare,
    3: Radar,
    4: ShieldCheck,
    5: Cpu,
    6: ShieldEllipsis,
  };

  const statusMap = {
    1: "SECURE",
    2: "BRUTE FORCE",
    3: "INTERCEPT",
    4: "VERIFIED",
    5: "QUANTUM",
    6: "PQC",
  };

  const Icon = iconMap[scenario.id];

  const active =
    selectedScenario === null ||
    selectedScenario === scenario.id;

  const playClick = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0;

    audioRef.current.play().catch(() => {});
  };

  const handleClick = () => {
    playClick();

    setSelectedScenario(scenario.id);

    setTimeout(() => {
      navigate("/visualization");
    }, 700);
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setFlip(true)}
      onMouseLeave={() => setFlip(false)}
      className={`group
      h-[205px]
      cursor-pointer
      perspective-[1600px]
      transition-all
      duration-500

      ${
        active
          ? "opacity-100"
          : "opacity-35"
      }`}
    >

      <audio
        ref={audioRef}
        src="/sounds/card-flip.mp3"
      />

      <motion.div
        animate={{
          rotateY: flip ? 180 : 0,
          scale: flip ? 1.015 : 1,
          y: flip ? -4 : 0,
        }}
        transition={{
          duration: 0.55,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full"
      >

        {/* FRONT */}

        <div
          className="absolute inset-0 rounded-lg overflow-hidden border bg-[#081019]"
          style={{
            backfaceVisibility: "hidden",
            borderColor: scenario.color,
            boxShadow: `
            0 0 3px ${scenario.color},
            0 0 8px ${scenario.color},
            0 0 16px ${scenario.color}
            `,
          }}
        >

          {/* Background */}

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <motion.div
            animate={{
              opacity: [0.08,0.16,0.08],
            }}
            transition={{
              repeat:Infinity,
              duration:2.5,
            }}
            className="absolute inset-0"
            style={{
              background:`radial-gradient(circle,${scenario.color}33 0%,transparent 75%)`
            }}
          />

          <motion.div
            animate={{
              y:[-260,320]
            }}
            transition={{
              repeat:Infinity,
              duration:3,
              ease:"linear"
            }}
            className="absolute h-8 w-full bg-white/5 blur-md"
          />

          <div className="relative flex flex-col h-full justify-between p-4">

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-2">

                <span
                  className="h-2 w-2 rounded-full bg-green-400"
                  style={{
                    boxShadow:"0 0 8px #22ff66"
                  }}
                />

                <span className="text-[10px] tracking-[0.35em] text-gray-300">

                  {statusMap[scenario.id]}

                </span>

              </div>

            </div>

            <div className="flex justify-center">

              <motion.div
                animate={{
                  y:[-4,4,-4]
                }}
                transition={{
                  repeat:Infinity,
                  duration:3
                }}
              >

                <Icon
                  size={68}
                  strokeWidth={1.5}
                  style={{
                    color:scenario.color,
                    filter:`drop-shadow(0 0 8px ${scenario.color})`
                  }}
                />

              </motion.div>

            </div>

            <div>

              <h2
                className="text-lg font-bold uppercase leading-tight"
                style={{
                  color:scenario.color
                }}
              >
                {scenario.title}
              </h2>

              <p className="mt-3 text-xs text-gray-400 leading-6">

                {scenario.description}

              </p>

            </div>

          </div>

        </div>
                {/* BACK */}

        <div
          className="absolute inset-0 rounded-lg border bg-[#081019]"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            borderColor: scenario.color,
            boxShadow: `
              0 0 3px ${scenario.color},
              0 0 8px ${scenario.color},
              0 0 16px ${scenario.color}
            `,
          }}
        >
          <div className="relative flex h-full flex-col items-center justify-center overflow-hidden">

            {/* subtle animated glow */}
            <motion.div
              animate={{
                opacity: [0.08, 0.18, 0.08],
                scale: [1, 1.08, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
              }}
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle, ${scenario.color}22 0%, transparent 70%)`,
              }}
            />

            {/* corner brackets */}
            <div
              className="absolute left-4 top-4 h-5 w-5 border-l border-t"
              style={{ borderColor: scenario.color }}
            />

            <div
              className="absolute right-4 top-4 h-5 w-5 border-r border-t"
              style={{ borderColor: scenario.color }}
            />

            <div
              className="absolute bottom-4 left-4 h-5 w-5 border-l border-b"
              style={{ borderColor: scenario.color }}
            />

            <div
              className="absolute bottom-4 right-4 h-5 w-5 border-r border-b"
              style={{ borderColor: scenario.color }}
            />

            <motion.h1
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
              }}
              className="text-3xl font-black tracking-[0.35em]"
              style={{
                color: scenario.color,
                textShadow: `
                  0 0 8px ${scenario.color},
                  0 0 18px ${scenario.color}
                `,
              }}
            >
              LET'S
            </motion.h1>

            <motion.h1
              animate={{
                scale: [1.05, 1, 1.05],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
              }}
              className="mt-2 text-3xl font-black tracking-[0.35em]"
              style={{
                color: scenario.color,
                textShadow: `
                  0 0 8px ${scenario.color},
                  0 0 18px ${scenario.color}
                `,
              }}
            >
              START
            </motion.h1>

            <p className="mt-6 text-[10px] uppercase tracking-[0.4em] text-gray-500">
              Click To Launch
            </p>
          </div>
        </div>

      </motion.div>
    </div>
  );
}

export default ScenarioCard;