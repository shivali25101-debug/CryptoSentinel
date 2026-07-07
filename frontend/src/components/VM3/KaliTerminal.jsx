import { useEffect, useRef } from "react";
import { useData } from "../../context/DataContext";

function KaliTerminal() {
  const { data } = useData();

  const lines = data?.vm3?.terminal || [];

  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop =
        terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const getColor = (line) => {

    if (line.includes("[ERROR]"))
      return "text-red-400";

    if (line.includes("[WARNING]"))
      return "text-yellow-400";

    if (line.includes("[OK]"))
      return "text-green-400";

    if (line.includes("[READY]"))
      return "text-green-400";

    if (line.includes("[INIT]"))
      return "text-gray-300";

    if (line.includes("[CAPTURE]"))
      return "text-red-400";

    if (line.includes("[FORWARD]"))
      return "text-yellow-300";

    if (line.includes("[MITM]"))
      return "text-red-300";

    if (line.includes("[INSPECT]"))
      return "text-cyan-300";

    if (line.includes("[HYDRA]"))
      return "text-orange-300";

    if (line.includes("[SHOR]"))
      return "text-purple-300";

    if (line.includes("[QUANTUM]"))
      return "text-blue-300";

    return "text-gray-200";
  };

  return (
    <div className="rounded-xl overflow-hidden border border-[#2D2D2D] shadow-xl">

      {/* Kali Header */}

      <div className="h-10 bg-[#2D2D2D] flex items-center justify-between px-4">

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>

        <span className="text-[12px] text-gray-300">
          root@kali:~
        </span>

        <div className="w-12"></div>

      </div>

      {/* Terminal */}

      <div
        ref={terminalRef}
        className="
          bg-[#111111]
          h-[430px]
          overflow-y-auto
          px-5
          py-4
          font-mono
          text-[12px]
          leading-5
          tracking-tight
        "
      >

        <div className="text-[#61FF61] mb-3">
          root@kali:~# python3 attack.py
        </div>

        {lines.map((line, index) => (
          <div
            key={index}
            className={`${getColor(line)} whitespace-pre-wrap`}
          >
            {line}
          </div>
        ))}

        <div className="flex items-center mt-2">

          <span className="text-[#61FF61]">
            root@kali:~#
          </span>

          <span className="ml-1 text-white animate-pulse">
            █
          </span>

        </div>

      </div>

    </div>
  );
}

export default KaliTerminal;