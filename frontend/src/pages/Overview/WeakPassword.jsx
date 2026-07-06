import { ArrowLeft, ShieldAlert, KeyRound, Laptop } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CyberHeading from "../../components/CyberHeading";

function WeakPassword() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-8 py-2 bg-[#020817]">

      <CyberHeading
        title="WEAK PASSWORD"
        subtitle="AUTHENTICATION VULNERABILITY"
      />

      <div className="mt-6 rounded-xl border border-slate-800 bg-[#08111F] p-6">

        {/* Overview */}

        <div className="mb-6">

          <h2 className="text-red-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Overview
          </h2>

          <p className="mt-3 text-[13px] leading-6 text-slate-400">
            Weak passwords are one of the most common causes of cyber attacks.
            Simple or reused passwords can easily be guessed using dictionary,
            brute-force or credential stuffing attacks, giving attackers
            unauthorized access to systems.
          </p>

        </div>

        {/* Architecture */}

        <div className="mb-6">

          <h2 className="text-red-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Authentication Flow
          </h2>

          <div className="flex justify-center items-center gap-10">

            <div className="flex flex-col items-center">
              <Laptop className="text-cyan-400" size={32}/>
              <p className="text-xs mt-2 text-slate-300">User</p>
            </div>

            <div className="flex items-center gap-2">

              <div className="w-24 border-t-2 border-dashed border-red-400"></div>

              <KeyRound
                size={18}
                className="text-red-400"
              />

              <div className="w-24 border-t-2 border-dashed border-red-400"></div>

            </div>

            <div className="flex flex-col items-center">
              <ShieldAlert className="text-red-400" size={32}/>
              <p className="text-xs mt-2 text-slate-300">Login Server</p>
            </div>

          </div>

        </div>

        {/* Working */}

        <div className="mb-6">

          <h2 className="text-red-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Attack Process
          </h2>

          <ul className="mt-3 space-y-2 text-[13px] text-slate-400 list-disc ml-6">

            <li>User chooses a predictable password.</li>
            <li>Attacker collects username.</li>
            <li>Password guessing begins.</li>
            <li>Dictionary or brute-force attack succeeds.</li>
            <li>Unauthorized access is obtained.</li>

          </ul>

        </div>

        {/* Features */}

        <div className="mb-6">

          <h2 className="text-red-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Characteristics
          </h2>

          <div className="grid grid-cols-2 gap-3 mt-3">

            <div className="rounded-lg border border-slate-800 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              Easy to Guess
            </div>

            <div className="rounded-lg border border-slate-800 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              Reused Credentials
            </div>

            <div className="rounded-lg border border-slate-800 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              Short Password Length
            </div>

            <div className="rounded-lg border border-slate-800 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              Low Complexity
            </div>

          </div>

        </div>

        {/* Risks */}

        <div className="mb-6">

          <h2 className="text-red-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Risks
          </h2>

          <ul className="mt-3 space-y-2 text-[13px] text-slate-400 list-disc ml-6">

            <li>Unauthorized account access.</li>

            <li>Credential theft.</li>

            <li>Identity impersonation.</li>

            <li>Privilege escalation.</li>

          </ul>

        </div>

        {/* Prevention */}

        <div className="mb-6">

          <h2 className="text-green-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Prevention
          </h2>

          <ul className="mt-3 space-y-2 text-[13px] text-slate-400 list-disc ml-6">

            <li>Use passwords longer than 12 characters.</li>

            <li>Enable Multi-Factor Authentication.</li>

            <li>Use password managers.</li>

            <li>Rotate passwords periodically.</li>

            <li>Avoid password reuse.</li>

          </ul>

        </div>

        {/* Common Attacks */}

        <div className="mb-6">

          <h2 className="text-orange-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Common Attack Methods
          </h2>

          <div className="flex gap-3 mt-3 flex-wrap">

            <span className="px-3 py-1 rounded border border-red-500 text-red-400 text-xs">
              Brute Force
            </span>

            <span className="px-3 py-1 rounded border border-orange-500 text-orange-400 text-xs">
              Dictionary
            </span>

            <span className="px-3 py-1 rounded border border-yellow-500 text-yellow-400 text-xs">
              Credential Stuffing
            </span>

            <span className="px-3 py-1 rounded border border-cyan-500 text-cyan-400 text-xs">
              Rainbow Tables
            </span>

          </div>

        </div>

        {/* Back */}

        <button
          onClick={() => navigate("/overview")}
          className="mt-2 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
        >

          <ArrowLeft size={16}/>

          <span className="text-sm">
            Back to Overview
          </span>

        </button>

      </div>

    </div>
  );
}

export default WeakPassword;