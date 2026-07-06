import {
  ArrowLeft,
  ShieldAlert,
  Laptop,
  Server,
  Skull,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import CyberHeading from "../../components/CyberHeading";

function MitmUnauthorised() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-8 py-2 bg-[#020817]">

      <CyberHeading
        title="MITM (UNAUTHORISED)"
        subtitle="MAN-IN-THE-MIDDLE ATTACK"
      />

      <div className="mt-6 rounded-xl border border-slate-800 bg-[#08111F] p-6">

        {/* Overview */}

        <div className="mb-6">

          <h2 className="text-red-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Overview
          </h2>

          <p className="mt-3 text-[13px] leading-6 text-slate-400">
            In an unauthorized Man-in-the-Middle attack, an attacker secretly
            positions themselves between the sender and receiver. The attacker
            intercepts, reads and can even modify packets before forwarding
            them, while both legitimate parties remain unaware.
          </p>

        </div>

        {/* Architecture */}

        <div className="mb-6">

          <h2 className="text-red-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Attack Architecture
          </h2>

          <div className="flex justify-center items-center gap-10">

            <div className="flex flex-col items-center">
              <Laptop className="text-cyan-400" size={32}/>
              <p className="text-xs mt-2 text-slate-300">Sender</p>
            </div>

            <div className="flex flex-col items-center">
              <Skull className="text-red-500" size={34}/>
              <p className="text-xs mt-2 text-red-400">Attacker</p>
            </div>

            <div className="flex flex-col items-center">
              <Server className="text-green-400" size={32}/>
              <p className="text-xs mt-2 text-slate-300">Receiver</p>
            </div>

          </div>

        </div>

        {/* Working */}

        <div className="mb-6">

          <h2 className="text-red-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Attack Flow
          </h2>

          <ul className="mt-3 ml-6 list-disc space-y-2 text-[13px] text-slate-400">

            <li>Attacker performs ARP Spoofing.</li>

            <li>Victim devices update their ARP tables.</li>

            <li>Traffic begins flowing through attacker.</li>

            <li>Packets are captured and inspected.</li>

            <li>Attacker forwards modified/original packets.</li>

          </ul>

        </div>

        {/* Techniques */}

        <div className="mb-6">

          <h2 className="text-red-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Common Techniques
          </h2>

          <div className="grid grid-cols-2 gap-3 mt-3">

            <div className="rounded-lg border border-slate-800 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              ARP Spoofing
            </div>

            <div className="rounded-lg border border-slate-800 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              DNS Spoofing
            </div>

            <div className="rounded-lg border border-slate-800 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              Session Hijacking
            </div>

            <div className="rounded-lg border border-slate-800 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              SSL Stripping
            </div>

          </div>

        </div>

        {/* Consequences */}

        <div className="mb-6">

          <h2 className="text-red-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Consequences
          </h2>

          <ul className="mt-3 ml-6 list-disc space-y-2 text-[13px] text-slate-400">

            <li>Password theft.</li>

            <li>Financial fraud.</li>

            <li>Sensitive data leakage.</li>

            <li>Packet manipulation.</li>

            <li>Identity theft.</li>

          </ul>

        </div>

        {/* Protection */}

        <div className="mb-6">

          <h2 className="text-green-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Protection
          </h2>

          <ul className="mt-3 ml-6 list-disc space-y-2 text-[13px] text-slate-400">

            <li>Use VPN encryption.</li>

            <li>Enable HTTPS.</li>

            <li>Use Mutual Authentication.</li>

            <li>Deploy ARP Inspection.</li>

            <li>Monitor suspicious traffic.</li>

          </ul>

        </div>

        {/* Detection */}

        <div className="mb-6">

          <h2 className="text-orange-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Detection Methods
          </h2>

          <div className="flex gap-3 mt-3 flex-wrap">

            <span className="px-3 py-1 rounded border border-red-500 text-red-400 text-xs">
              IDS
            </span>

            <span className="px-3 py-1 rounded border border-cyan-500 text-cyan-400 text-xs">
              Wireshark
            </span>

            <span className="px-3 py-1 rounded border border-yellow-500 text-yellow-400 text-xs">
              arpwatch
            </span>

            <span className="px-3 py-1 rounded border border-green-500 text-green-400 text-xs">
              Dynamic ARP Inspection
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

export default MitmUnauthorised;