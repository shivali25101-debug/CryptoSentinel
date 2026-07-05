import { Lock, Shield, AlertTriangle } from "lucide-react";
import useCyberData from "../../../hooks/useCyberData";

function ConnectionButtons() {
  const { socket } = useCyberData();

  function sendAction(action) {
    if (!socket || socket.readyState !== WebSocket.OPEN) {
      console.log("Backend not connected");
      return;
    }

    socket.send(
      JSON.stringify({
        action,
      })
    );
  }

  return (
    <div className="px-12 pb-10 space-y-2">

      <button
        onClick={() => sendAction("normal")}
        className="w-full h-14 rounded-lg border border-green-600 hover:bg-green-500/10 text-green-600 flex items-center justify-center gap-3"
      >
        <Lock size={18} />
        NORMAL CONNECTION
      </button>

      <button
        onClick={() => sendAction("secure")}
        className="w-full h-14 rounded-lg border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 flex items-center justify-center gap-3"
      >
        <Shield size={18} />
        SECURE MODE
      </button>

      <button
        onClick={() => sendAction("attack")}
        className="w-full h-14 rounded-lg border border-red-500 text-red-400 hover:bg-red-500/10 flex items-center justify-center gap-3"
      >
        <AlertTriangle size={18} />
        SIMULATE ATTACK
      </button>

    </div>
  );
}

export default ConnectionButtons;