function BackgroundGrid() {
  return (
    <>
      {/* Base */}
      <div className="absolute inset-0 bg-[#050B14]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,120,.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,120,.18) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center,#00ff8830 0%,transparent 70%)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle,transparent 45%,rgba(0,0,0,.55) 100%)",
        }}
      />
    </>
  );
}

export default BackgroundGrid;