import { ShieldAlert } from "lucide-react";

function ScenarioCard() {
  return (
    <div className="bg-[#0F172A] border border-slate-800 rounded-xl px-5 py-4 h-24 flex items-center justify-between">

      <div>

        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
          Attack Scenario
        </p>

        <h2 className="mt-2 text-xl font-semibold text-red-400">
          Man-in-the-Middle
        </h2>

        <p className="text-xs text-slate-400 mt-1">
          Kali intercepting encrypted traffic
        </p>

      </div>

      <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">

        <ShieldAlert
          size={28}
          className="text-red-400"
        />

      </div>

    </div>
  );
}

export default ScenarioCard;