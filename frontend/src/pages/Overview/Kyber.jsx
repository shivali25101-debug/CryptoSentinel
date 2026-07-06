import {
  ArrowLeft,
  Shield,
  Lock,
  Cpu,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import CyberHeading from "../../components/CyberHeading";

function Kyber() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-8 py-2 bg-[#020817]">

      <CyberHeading
        title="POST-QUANTUM (KYBER)"
        subtitle="QUANTUM-RESISTANT KEY ENCAPSULATION MECHANISM"
      />

      <div className="mt-6 rounded-xl border border-slate-800 bg-[#08111F] p-6">

        {/* Overview */}

        <div className="mb-6">

          <h2 className="text-green-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Overview
          </h2>

          <p className="mt-3 text-[13px] leading-6 text-slate-400">
            Kyber is a post-quantum Key Encapsulation Mechanism (KEM)
            selected by NIST for protecting communications against future
            quantum computers. Unlike RSA or ECC, Kyber is based on lattice
            mathematics, making it resistant to attacks using Shor's Algorithm.
          </p>

        </div>

        {/* Architecture */}

        <div className="mb-6">

          <h2 className="text-green-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Key Exchange
          </h2>

          <div className="flex justify-center items-center gap-10">

            <div className="flex flex-col items-center">
              <Cpu className="text-cyan-400" size={32} />
              <p className="text-xs mt-2 text-slate-300">
                Client
              </p>
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
              <p className="text-xs mt-2 text-slate-300">
                Server
              </p>
            </div>

          </div>

        </div>

        {/* Working */}

        <div className="mb-6">

          <h2 className="text-green-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Working
          </h2>

          <ul className="mt-3 space-y-2 text-[13px] text-slate-400 list-disc ml-6">

            <li>Client generates a public/private key pair.</li>

            <li>Public key is shared with the server.</li>

            <li>Server encapsulates a shared secret.</li>

            <li>Client decapsulates using its private key.</li>

            <li>Both parties derive the same session key.</li>

          </ul>

        </div>

        {/* Advantages */}

        <div className="mb-6">

          <h2 className="text-green-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Advantages
          </h2>

          <div className="grid grid-cols-2 gap-3 mt-3">

            <div className="rounded-lg border border-slate-800 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              Quantum Resistant
            </div>

            <div className="rounded-lg border border-slate-800 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              Fast Key Exchange
            </div>

            <div className="rounded-lg border border-slate-800 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              NIST Standardized
            </div>

            <div className="rounded-lg border border-slate-800 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              Suitable for VPNs
            </div>

          </div>

        </div>

        {/* Applications */}

        <div className="mb-6">

          <h2 className="text-green-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Applications
          </h2>

          <ul className="mt-3 space-y-2 text-[13px] text-slate-400 list-disc ml-6">

            <li>Next-generation VPNs.</li>

            <li>Secure messaging systems.</li>

            <li>TLS encryption.</li>

            <li>Government communication.</li>

            <li>Cloud infrastructure.</li>

          </ul>

        </div>

        {/* Comparison */}

        <div className="mb-6">

          <h2 className="text-green-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Comparison
          </h2>

          <div className="grid grid-cols-2 gap-3 mt-3">

            <div className="rounded-lg border border-red-500 bg-[#0F172A] p-3 text-[12px] text-red-300">
              RSA → Vulnerable to Quantum
            </div>

            <div className="rounded-lg border border-green-500 bg-[#0F172A] p-3 text-[12px] text-green-300">
              Kyber → Quantum Safe
            </div>

          </div>

        </div>

        {/* Features */}

        <div className="mb-6">

          <h2 className="text-green-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Key Features
          </h2>

          <div className="flex gap-3 mt-3 flex-wrap">

            <span className="px-3 py-1 rounded border border-green-500 text-green-400 text-xs">
              Lattice Based
            </span>

            <span className="px-3 py-1 rounded border border-cyan-500 text-cyan-400 text-xs">
              KEM
            </span>

            <span className="px-3 py-1 rounded border border-violet-500 text-violet-400 text-xs">
              NIST PQC
            </span>

            <span className="px-3 py-1 rounded border border-yellow-500 text-yellow-400 text-xs">
              High Performance
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

export default Kyber;