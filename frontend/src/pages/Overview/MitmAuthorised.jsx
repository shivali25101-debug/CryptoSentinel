import {
  ArrowLeft,
  ShieldCheck,
  Shield,
  Laptop,
  Server,
  Eye,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import CyberHeading from "../../components/CyberHeading";

function MitmAuthorised() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-8 py-2 bg-[#020817]">

      <CyberHeading
        title="MITM (AUTHORISED)"
        subtitle="CONTROLLED TRAFFIC INSPECTION"
      />

      <div className="mt-6 rounded-xl border border-slate-800 bg-[#08111F] p-6">

        {/* Overview */}

        <div className="mb-6">

          <h2 className="text-cyan-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Overview
          </h2>

          <p className="mt-3 text-[13px] leading-6 text-slate-400">
            Unlike a malicious MITM attack, an authorised Man-in-the-Middle
            operates with the knowledge and permission of both endpoints.
            It is commonly used in enterprise networks to inspect, monitor
            and secure encrypted traffic before forwarding it to its
            destination.
          </p>

        </div>

        {/* Architecture */}

        <div className="mb-6">

          <h2 className="text-cyan-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Inspection Architecture
          </h2>

          <div className="flex justify-center items-center gap-10">

            <div className="flex flex-col items-center">
              <Laptop className="text-cyan-400" size={32}/>
              <p className="text-xs mt-2 text-slate-300">
                Client
              </p>
            </div>

            <div className="flex items-center gap-2">

              <div className="w-20 border-t-2 border-dashed border-cyan-400"></div>

              <Eye
                size={20}
                className="text-cyan-400"
              />

              <div className="w-20 border-t-2 border-dashed border-cyan-400"></div>

            </div>

            <div className="flex flex-col items-center">
              <Server className="text-green-400" size={32}/>
              <p className="text-xs mt-2 text-slate-300">
                Server
              </p>
            </div>

          </div>

        </div>

        {/* Working */}

        <div className="mb-6">

          <h2 className="text-cyan-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Working
          </h2>

          <ul className="mt-3 space-y-2 text-[13px] text-slate-400 list-disc ml-6">

            <li>Client establishes an encrypted connection.</li>

            <li>Traffic is routed through an authorised inspection device.</li>

            <li>Packets are decrypted temporarily.</li>

            <li>Firewall/IDS checks for malware and threats.</li>

            <li>Traffic is re-encrypted before reaching the destination.</li>

          </ul>

        </div>

        {/* Uses */}

        <div className="mb-6">

          <h2 className="text-cyan-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Enterprise Uses
          </h2>

          <div className="grid grid-cols-2 gap-3 mt-3">

            <div className="rounded-lg border border-slate-800 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              SSL Inspection
            </div>

            <div className="rounded-lg border border-slate-800 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              Network Monitoring
            </div>

            <div className="rounded-lg border border-slate-800 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              Malware Detection
            </div>

            <div className="rounded-lg border border-slate-800 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              Data Loss Prevention
            </div>

          </div>

        </div>

        {/* Advantages */}

        <div className="mb-6">

          <h2 className="text-green-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Advantages
          </h2>

          <ul className="mt-3 space-y-2 text-[13px] text-slate-400 list-disc ml-6">

            <li>Detects malicious packets in real time.</li>

            <li>Prevents malware from spreading.</li>

            <li>Provides complete traffic visibility.</li>

            <li>Improves enterprise security compliance.</li>

            <li>Blocks suspicious encrypted traffic.</li>

          </ul>

        </div>

        {/* Limitations */}

        <div className="mb-6">

          <h2 className="text-orange-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Limitations
          </h2>

          <ul className="mt-3 space-y-2 text-[13px] text-slate-400 list-disc ml-6">

            <li>Introduces additional latency.</li>

            <li>Requires trusted certificates.</li>

            <li>Consumes more CPU resources.</li>

            <li>Can create privacy concerns if misconfigured.</li>

          </ul>

        </div>

        {/* Components */}

        <div className="mb-6">

          <h2 className="text-cyan-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Common Components
          </h2>

          <div className="flex gap-3 mt-3 flex-wrap">

            <span className="px-3 py-1 rounded border border-cyan-500 text-cyan-400 text-xs">
              Firewall
            </span>

            <span className="px-3 py-1 rounded border border-green-500 text-green-400 text-xs">
              IDS / IPS
            </span>

            <span className="px-3 py-1 rounded border border-violet-500 text-violet-400 text-xs">
              Proxy Server
            </span>

            <span className="px-3 py-1 rounded border border-yellow-500 text-yellow-400 text-xs">
              SSL Inspection
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

export default MitmAuthorised;