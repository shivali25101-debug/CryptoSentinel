import { useEffect, useRef } from "react";
import { useData } from "../../context/DataContext";

function KaliTerminal() {
  const { data } = useData();

  const lines =
    data?.vm3?.terminal || [];

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [lines]);

  const getColor = (line) => {
    if (line.includes("[SUCCESS]"))
      return "text-green-400";

    if (line.includes("[ERROR]"))
      return "text-red-400";

    if (line.includes("[WARNING]"))
      return "text-orange-400";

    if (line.includes("[INFO]"))
      return "text-cyan-400";

    if (line.includes("[CAPTURE]"))
      return "text-red-400";

    if (line.includes("[FORWARD]"))
      return "text-yellow-400";

    return "text-green-300";
  };

  return (
    <div className="bg-[#0F172A] border border-red-900 rounded-xl overflow-hidden">

      <div className="bg-[#111827] border-b border-gray-800 px-5 py-3 flex justify-between">

        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>

        <span className="text-gray-400 text-sm">
          root@kali : Terminal
        </span>

        <div />

      </div>

      <div className="bg-black h-[420px] overflow-y-auto p-6 font-mono text-sm leading-7">

        {lines.map((line, index) => (
          <p
            key={index}
            className={getColor(line)}
          >
            {line}
          </p>
        ))}

        <div ref={bottomRef} />

      </div>

    </div>
  );
}

export default KaliTerminal;