const lines = [
  "root@kali:~# python3 mitm.py",
  "",
  "[INFO] Initializing attack...",
  "[INFO] Enabling IP forwarding...",
  "[SUCCESS] IP forwarding enabled.",
  "[INFO] Starting ARP spoofing...",
  "[SUCCESS] Victim ARP cache poisoned.",
  "[CAPTURE] Packet #231 intercepted",
  "[CAPTURE] Packet #232 intercepted",
  "[FORWARD] Forwarding packet to VM2",
  "[INFO] Monitoring traffic...",
  "",
  "root@kali:~# █",
];

function KaliTerminal() {
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

      <div className="bg-black h-[420px] p-6 font-mono text-sm overflow-y-auto leading-7">

        {lines.map((line, index) => (
          <p
            key={index}
            className={
              line.includes("[SUCCESS]")
                ? "text-green-400"
                : line.includes("[INFO]")
                ? "text-cyan-400"
                : line.includes("[CAPTURE]")
                ? "text-red-400"
                : line.includes("[FORWARD]")
                ? "text-yellow-400"
                : "text-green-300"
            }
          >
            {line}
          </p>
        ))}

      </div>

    </div>
  );
}

export default KaliTerminal;