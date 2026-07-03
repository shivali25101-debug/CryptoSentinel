function ConnectionLine({
  x1,
  y1,
  x2,
  y2,
  color = "#00ff88",
}) {
  const length = Math.sqrt(
    (x2 - x1) ** 2 +
      (y2 - y1) ** 2
  );

  const angle =
    Math.atan2(
      y2 - y1,
      x2 - x1
    ) *
    (180 / Math.PI);

  return (
    <div
      className="absolute"
      style={{
        left: x1,
        top: y1,
        width: length,
        transform: `rotate(${angle}deg)`,
        transformOrigin: "0 0",
        borderTop: `4px dotted ${color}`,
        filter: `drop-shadow(0 0 6px ${color})`,
      }}
    />
  );
}

export default ConnectionLine;