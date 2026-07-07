import { useEffect, useRef } from "react";

function TerminalWindow({ lines }) {
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

    if (line.includes("[TX]"))
      return "text-white";

    if (line.includes("[RX]"))
      return "text-white";

    if (line.includes("[NET]"))
      return "text-blue-300";

    if (line.includes("[VPN]"))
      return "text-cyan-300";

    if (line.includes("[INIT]"))
      return "text-gray-300";

    if (line.includes("[MONITOR]"))
      return "text-gray-300";

    return "text-gray-200";
  };

  return (
    <div className="rounded-xl overflow-hidden border border-[#2D2D2D] shadow-xl">

      {/* Ubuntu Title Bar */}

      <div className="h-10 bg-[#2D2D2D] flex items-center justify-between px-4">

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>

        <span className="text-[12px] text-gray-300 select-none">
          ubuntu@vm1:~
        </span>

        <div className="w-12"></div>

      </div>

      {/* Terminal */}

      <div
        ref={terminalRef}
        className="
          bg-[#300A24]
          h-[430px]
          overflow-y-auto
          px-5
          py-4
          font-mono
          text-[12px]
          leading-5
          tracking-tight
          scrollbar-thin
        "
      >

        {/* Command */}

        <div className="text-[#4CE14C] mb-3">
          ubuntu@vm1:~$ ./sender
        </div>

        {/* Output */}

        {lines.map((line, index) => (

          <div
            key={index}
            className={`${getColor(line)} whitespace-pre-wrap`}
          >
            {line}
          </div>

        ))}

        {/* Prompt */}

        <div className="flex items-center mt-2">

          <span className="text-[#4CE14C]">
            ubuntu@vm1:~$
          </span>

          <span className="ml-1 text-white animate-pulse">
            █
          </span>

        </div>

      </div>

    </div>
  );
}

export default TerminalWindow;