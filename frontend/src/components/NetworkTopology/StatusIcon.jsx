import { motion } from "framer-motion";

function StatusIcon({ success }) {
  return (
    <motion.div
      className="absolute left-1/2 top-[90px] -translate-x-1/2 flex flex-col items-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: [1, 1.08, 1],
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {/* Icon */}
      <span
        className={`text-8xl font-bold ${
          success ? "text-green-400" : "text-red-500"
        }`}
        style={{
          textShadow: success
            ? "0 0 18px #00ff88"
            : "0 0 18px #ff3333",
        }}
      >
        {success ? "✔" : "✖"}
      </span>

      {/* Status Text */}
      <h2
        className={`mt-4 text-xl font-semibold tracking-[0.2em] ${
          success ? "text-green-400" : "text-red-500"
        }`}
      >
        {success ? "ATTACK BLOCKED" : "SYSTEM COMPROMISED"}
      </h2>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-400 tracking-wider text-center max-w-xs">
        {success
          ? "The communication channel remains secure."
          : "Malicious traffic has intercepted the communication."}
      </p>
    </motion.div>
  );
}

export default StatusIcon;