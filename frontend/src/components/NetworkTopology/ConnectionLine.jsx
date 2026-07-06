import { motion } from "framer-motion";

function ConnectionLine({
  x1,
  y1,
  x2,
  y2,
  color = "#00ff88",
  animated = true,
}) {
  const length = Math.sqrt(
    (x2 - x1) ** 2 + (y2 - y1) ** 2
  );

  const angle =
    Math.atan2(y2 - y1, x2 - x1) *
    (180 / Math.PI);

  return (
    <motion.div
      className="absolute overflow-hidden"
      style={{
        left: x1,
        top: y1,
        width: length,
        height: 4,
        transform: `rotate(${angle}deg)`,
        transformOrigin: "0 0",
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          borderTop: `4px dotted ${color}`,
          filter: `drop-shadow(0 0 8px ${color})`,
        }}
        animate={
          animated
            ? {
                x: [0, 20],
              }
            : {}
        }
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}

export default ConnectionLine;