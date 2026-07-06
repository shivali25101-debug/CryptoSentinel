function TerminalWindow({
  lines,
}) {

  const getColor = (line) => {

    if (line.includes("[SUCCESS]"))
      return "text-green-400";

    if (line.includes("[ERROR]"))
      return "text-red-400";

    if (line.includes("[WARNING]"))
      return "text-orange-400";

    if (line.includes("[INFO]"))
      return "text-cyan-400";

    if (
      line.includes("[TX]") ||
      line.includes("[RX]")
    )
      return "text-yellow-400";

    return "text-green-300";

  };

  return (

    <div className="bg-[#0F172A] border border-gray-800 rounded-xl overflow-hidden">

      {/* Header */}

      <div className="bg-[#111827] border-b border-gray-800 px-5 py-3 flex items-center justify-between">

        <div className="flex items-center gap-2">

          <span className="w-3 h-3 rounded-full bg-red-500"></span>

          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>

          <span className="w-3 h-3 rounded-full bg-green-500"></span>

        </div>

        <span className="text-gray-400 text-sm font-medium">
          ubuntu@vm1 : Terminal
        </span>

        <div />

      </div>

      {/* Terminal */}

      <div className="bg-black h-[420px] overflow-y-auto p-6 font-mono text-sm leading-7">

        {lines.map((line, index) => (

          <p
            key={index}
            className={getColor(line)}
          >
            {line}
          </p>

        ))}

      </div>

    </div>

  );

}

export default TerminalWindow;