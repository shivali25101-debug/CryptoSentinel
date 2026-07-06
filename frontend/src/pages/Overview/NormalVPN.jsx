import { ArrowLeft, Shield, Lock, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CyberHeading from "../../components/CyberHeading";

function NormalVPN() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-8 py-2 bg-[#020817]">

      <CyberHeading
        title="NORMAL VPN"
        subtitle="STANDARD SECURE VIRTUAL PRIVATE NETWORK"
      />

      <div className="mt-6 rounded-xl border border-slate-800 bg-[#08111F] p-6">

        {/* Introduction */}

        <div className="mb-6">

          <h2 className="text-cyan-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Overview
          </h2>

          <p className="mt-3 text-[13px] leading-6 text-slate-400">
            A Normal VPN creates an encrypted tunnel between two endpoints.
            All packets travel securely through the tunnel, preventing
            unauthorized users from reading or modifying the transmitted data.
          </p>

        </div>

        {/* Architecture */}

        <div className="mb-6">

          <h2 className="text-cyan-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Architecture
          </h2>

          <div className="flex justify-center items-center gap-10">

            <div className="flex flex-col items-center">
              <Globe className="text-cyan-400" size={32} />
              <p className="text-xs mt-2 text-slate-300">Client</p>
            </div>

            <div className="flex items-center gap-2">

              <div className="w-24 border-t-2 border-dashed border-green-400"></div>

              <Lock
                size={18}
                className="text-green-400"
              />

              <div className="w-24 border-t-2 border-dashed border-green-400"></div>

            </div>

            <div className="flex flex-col items-center">
              <Shield className="text-green-400" size={32} />
              <p className="text-xs mt-2 text-slate-300">VPN Server</p>
            </div>

          </div>

        </div>

        {/* Working */}

        <div className="mb-6">

          <h2 className="text-cyan-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Working
          </h2>

          <ul className="mt-3 space-y-2 text-[13px] text-slate-400 list-disc ml-6">

            <li>User connects to the VPN server.</li>

            <li>Authentication is completed.</li>

            <li>An encrypted tunnel is established.</li>

            <li>Packets travel securely through the tunnel.</li>

            <li>The destination decrypts the received packets.</li>

          </ul>

        </div>

        {/* Features */}

        <div className="mb-6">

          <h2 className="text-cyan-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Features
          </h2>

          <div className="grid grid-cols-2 gap-3 mt-3">

            <div className="rounded-lg border border-slate-800 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              AES / ChaCha20 Encryption
            </div>

            <div className="rounded-lg border border-slate-800 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              Secure Authentication
            </div>

            <div className="rounded-lg border border-slate-800 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              Data Integrity
            </div>

            <div className="rounded-lg border border-slate-800 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              Privacy Protection
            </div>

          </div>

        </div>

        {/* Advantages */}

        <div className="mb-6">

          <h2 className="text-cyan-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Advantages
          </h2>

          <ul className="mt-3 space-y-2 text-[13px] text-slate-400 list-disc ml-6">

            <li>Protects user privacy.</li>

            <li>Encrypts network traffic.</li>

            <li>Safe for public Wi-Fi.</li>

            <li>Prevents packet sniffing.</li>

          </ul>

        </div>

        {/* Limitations */}

        <div className="mb-6">

          <h2 className="text-cyan-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Limitations
          </h2>

          <ul className="mt-3 space-y-2 text-[13px] text-slate-400 list-disc ml-6">

            <li>Cannot stop endpoint compromise.</li>

            <li>Depends on strong authentication.</li>

            <li>May introduce slight latency.</li>

          </ul>

        </div>

        {/* Protocols */}

        <div className="mb-6">

          <h2 className="text-cyan-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Common Protocols
          </h2>

          <div className="flex gap-3 mt-3 flex-wrap">

            <span className="px-3 py-1 rounded border border-cyan-500 text-cyan-400 text-xs">
              WireGuard
            </span>

            <span className="px-3 py-1 rounded border border-green-500 text-green-400 text-xs">
              OpenVPN
            </span>

            <span className="px-3 py-1 rounded border border-violet-500 text-violet-400 text-xs">
              IPSec
            </span>

          </div>

        </div>

        {/* Back */}

        <button
          onClick={() => navigate("/overview")}
          className="mt-2 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
        >

          <ArrowLeft size={16} />

          <span className="text-sm">
            Back to Overview
          </span>

        </button>

      </div>

    </div>
  );
}

export default NormalVPN;