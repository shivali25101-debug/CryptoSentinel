const terminalLines = [
  "ubuntu@vm2:~$ ./receiver",
  "",
  "[INFO] Waiting for encrypted packets...",
  "[INFO] Tunnel established.",
  "[RX] Packet #231 received.",
  "[INFO] Verifying authentication tag...",
  "[SUCCESS] Integrity verified.",
  "[INFO] Decrypting using ChaCha20-Poly1305...",
  "[SUCCESS] Message decrypted.",
  "[OUTPUT] Hello from VM1",
  "",
  "ubuntu@vm2:~$ █",
];

function TerminalWindow() {
  return (
    <div className="bg-[#0F172A] border border-gray-800 rounded-xl overflow-hidden">

      <div className="bg-[#111827] border-b border-gray-800 px-5 py-3 flex justify-between items-center">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>

        <span className="text-gray-400 text-sm">
          ubuntu@vm2 : Terminal
        </span>

        <div />
      </div>

      <div className="bg-black h-[420px] overflow-y-auto p-6 font-mono text-sm leading-7">

        {terminalLines.map((line, index) => (
          <p
            key={index}
            className={
              line.includes("[SUCCESS]")
                ? "text-green-400"
                : line.includes("[INFO]")
                ? "text-cyan-400"
                : line.includes("[RX]")
                ? "text-yellow-400"
                : line.includes("[OUTPUT]")
                ? "text-purple-400"
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

export default TerminalWindow;