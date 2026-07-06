import { motion } from "framer-motion";

function BackgroundGrid() {
  return (
    <>
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#050B14]" />

      {/* Animated Grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,120,.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,120,.18) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "60px 60px"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Cyber Glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,255,136,0.18) 0%, transparent 70%)",
        }}
        animate={{
          opacity: [0.5, 0.9, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Scan Line */}
      <motion.div
        className="absolute left-0 w-full h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,255,136,.8), transparent)",
          boxShadow: "0 0 12px rgba(0,255,136,.6)",
        }}
        animate={{
          top: ["0%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 45%, rgba(0,0,0,.55) 100%)",
        }}
      />
    </>
  );
}

export default BackgroundGrid;