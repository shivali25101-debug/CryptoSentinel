function StatusIcon({
  success,
}) {
  return (
    <div
      className="absolute left-1/2 top-[255px] -translate-x-1/2"
    >
      <span
        className={`text-8xl font-bold ${
          success
            ? "text-green-400"
            : "text-red-500"
        }`}
        style={{
          textShadow: success
            ? "0 0 18px #00ff66"
            : "0 0 18px red",
        }}
      >
        {success ? "✔" : "✖"}
      </span>
    </div>
  );
}

export default StatusIcon;