import React from "react";

function CyberHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-10 font-mono">
      <h1
        className="
          text-4xl font-bold tracking-[0.25em]
          text-green-400
          drop-shadow-[0_0_12px_#00ff88]
        "
      >
        {title}
      </h1>

      {subtitle && (
        <p className="text-gray-500 mt-2 text-sm tracking-wide">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default CyberHeading;