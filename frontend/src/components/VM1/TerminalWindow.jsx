const terminalLines = [
  "ubuntu@vm1:~$ ./vpn_client",
  "",
  "[INFO] Starting VPN client...",
  "[INFO] Initializing secure tunnel...",
  "[INFO] Performing X25519 key exchange...",
  "[SUCCESS] Shared secret established.",
  "[INFO] Initializing ChaCha20-Poly1305 session...",
  "[SUCCESS] Encryption enabled.",
  "",
  "[TX] Packet #231 encrypted.",
  "[TX] Packet #232 encrypted.",
  "[TX] Sending packet to 10.0.0.2...",
  "[SUCCESS] Packet delivered.",
  "",
  "ubuntu@vm1:~$ █",
];

function TerminalWindow() {
  return (
    <div className="bg-[#0F172A] border border-gray-800 rounded-xl overflow-hidden">

      {/* Terminal Header */}
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

      {/* Terminal Body */}
      <div className="bg-black h-[420px] overflow-y-auto p-6 font-mono text-sm leading-7">

        {terminalLines.map((line, index) => (
          <p
            key={index}
            className={
              line.includes("[SUCCESS]")
                ? "text-green-400"
                : line.includes("[INFO]")
                ? "text-cyan-400"
                : line.includes("[TX]")
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

export default TerminalWindow;