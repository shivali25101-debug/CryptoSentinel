function Workstation({
  label,
  active = true,
}) {
  const color = active ? "#41ff73" : "#2e5c41";

  return (
    <div className="flex flex-col items-center">

      <svg
        width="220"
        height="180"
        viewBox="0 0 220 180"
      >
        <defs>

          <filter id="glow">

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
          filter="url(#glow)"
        />

        {/* Screen */}

        <rect
          x="43"
          y="26"
          width="104"
          height="64"
          fill="#07131d"
          stroke={color}
          strokeWidth="1"
        />

        {/* Terminal Lines */}

        <line
          x1="55"
          y1="40"
          x2="120"
          y2="40"
          stroke={color}
          strokeWidth="2"
        />

        <line
          x1="55"
          y1="52"
          x2="135"
          y2="52"
          stroke={color}
          strokeWidth="2"
        />

        <line
          x1="55"
          y1="64"
          x2="110"
          y2="64"
          stroke={color}
          strokeWidth="2"
        />

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
          filter="url(#glow)"
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
        {label}
      </h2>

    </div>
  );
}

export default Workstation;