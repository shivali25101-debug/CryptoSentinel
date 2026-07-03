function AttackerWorkstation({
  active = false,
}) {
  const color = active ? "#ff3b3b" : "#5a2222";

  return (
    <div className="flex flex-col items-center">

      <svg
        width="220"
        height="180"
        viewBox="0 0 220 180"
      >
        <defs>

          <filter id="redGlow">

            <feGaussianBlur
              stdDeviation="3"
              result="blur"
            />

            <feMerge>

              <feMergeNode in="blur"/>

              <feMergeNode in="SourceGraphic"/>

            </feMerge>

          </filter>

        </defs>

        {/* Monitor */}

        <rect
          x="35"
          y="18"
          width="120"
          height="80"
          rx="5"
          fill="none"
          stroke={color}
          strokeWidth="3"
          filter="url(#redGlow)"
        />

        {/* Screen */}

        <rect
          x="43"
          y="26"
          width="104"
          height="64"
          fill="#120707"
          stroke={color}
          strokeWidth="1"
        />

        {/* Hacker Prompt */}

        <text
          x="55"
          y="48"
          fill={color}
          fontSize="10"
          fontFamily="monospace"
        >
          root@kali
        </text>

        <text
          x="55"
          y="64"
          fill={color}
          fontSize="10"
          fontFamily="monospace"
        >
          exploit.sh
        </text>

        <text
          x="55"
          y="80"
          fill={color}
          fontSize="10"
          fontFamily="monospace"
        >
          ██████
        </text>

        {/* Stand */}

        <line
          x1="95"
          y1="98"
          x2="95"
          y2="118"
          stroke={color}
          strokeWidth="3"
        />

        <line
          x1="70"
          y1="118"
          x2="120"
          y2="118"
          stroke={color}
          strokeWidth="3"
        />

        {/* CPU */}

        <rect
          x="165"
          y="38"
          width="28"
          height="68"
          rx="3"
          fill="none"
          stroke={color}
          strokeWidth="3"
          filter="url(#redGlow)"
        />

        <circle
          cx="179"
          cy="54"
          r="3"
          fill={color}
        />

        <circle
          cx="179"
          cy="67"
          r="3"
          fill={color}
        />

        <circle
          cx="179"
          cy="80"
          r="3"
          fill={color}
        />

      </svg>

      <h2
        className="mt-6 text-2xl tracking-[0.3em] font-light"
        style={{
          color,
          textShadow: `0 0 10px ${color}`,
        }}
      >
        ATTACKER
      </h2>

    </div>
  );
}

export default AttackerWorkstation;