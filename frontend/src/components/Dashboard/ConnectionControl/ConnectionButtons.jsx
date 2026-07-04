import { Lock, Shield, AlertTriangle } from "lucide-react";

function ConnectionButtons({ setScenario }) {
  return (
    <div className="px-12 pb-10 space-y-2">

      <button
        onClick={() => setScenario("normal")}
        className="w-full h-14 rounded-lg border border-green-600 hover:bg-green-500/10 text-green-600 flex items-center justify-center gap-3"
      >
        <Lock size={18} />
        NORMAL CONNECTION
      </button>

      <button
        onClick={() => setScenario("secure")}
        className="w-full h-14 rounded-lg border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 flex items-center justify-center gap-3"
      >
        <Shield size={18} />
        SECURE MODE
      </button>

      <button
        onClick={() => setScenario("attack")}
        className="w-full h-14 rounded-lg border border-red-500 text-red-400 hover:bg-red-500/10 flex items-center justify-center gap-3"
      >
        <AlertTriangle size={18} />
        SIMULATE ATTACK
      </button>

    </div>
  );
}

export default ConnectionButtons;