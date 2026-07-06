import { ArrowLeft, Cpu, ShieldAlert, KeyRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CyberHeading from "../../components/CyberHeading";

function ShorsAlgorithm() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-8 py-2 bg-[#020817]">

      <CyberHeading
        title="SHOR'S ALGORITHM"
        subtitle="QUANTUM ATTACK AGAINST CLASSICAL CRYPTOGRAPHY"
      />

      <div className="mt-6 rounded-xl border border-slate-800 bg-[#08111F] p-6">

        {/* Overview */}
        <div className="mb-6">

          <h2 className="text-red-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Overview
          </h2>

          <p className="mt-3 text-[13px] leading-6 text-slate-400">
            Shor's Algorithm is a quantum computing algorithm capable of
            factoring extremely large integers exponentially faster than
            classical computers. Since RSA security depends on the difficulty
            of factorization, a sufficiently powerful quantum computer could
            completely break RSA and ECC encryption.
          </p>

        </div>

        {/* Diagram */}
        <div className="mb-6">

          <h2 className="text-red-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Quantum Attack Flow
          </h2>

          <div className="flex justify-center items-center gap-8">

            <div className="flex flex-col items-center">
              <KeyRound size={34} className="text-cyan-400" />
              <p className="text-xs mt-2 text-slate-300">
                RSA Key
              </p>
            </div>

            <div className="w-20 border-t-2 border-dashed border-red-400"></div>

            <div className="flex flex-col items-center">
              <Cpu size={34} className="text-red-400" />
              <p className="text-xs mt-2 text-slate-300">
                Quantum Computer
              </p>
            </div>

            <div className="w-20 border-t-2 border-dashed border-red-400"></div>

            <div className="flex flex-col items-center">
              <ShieldAlert size={34} className="text-orange-400" />
              <p className="text-xs mt-2 text-slate-300">
                Broken Encryption
              </p>
            </div>

          </div>

        </div>

        {/* Working */}
        <div className="mb-6">

          <h2 className="text-red-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Working
          </h2>

          <ul className="mt-3 space-y-2 text-[13px] text-slate-400 list-disc ml-6">
            <li>Public RSA key is collected.</li>
            <li>Quantum computer performs integer factorization.</li>
            <li>Private key is reconstructed.</li>
            <li>Encrypted messages become readable.</li>
            <li>Digital signatures can also be forged.</li>
          </ul>

        </div>

        {/* Impact */}
        <div className="mb-6">

          <h2 className="text-red-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Impact
          </h2>

          <div className="grid grid-cols-2 gap-3 mt-3">

            <div className="rounded-lg border border-red-700 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              Breaks RSA
            </div>

            <div className="rounded-lg border border-red-700 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              Breaks ECC
            </div>

            <div className="rounded-lg border border-red-700 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              Threatens VPNs
            </div>

            <div className="rounded-lg border border-red-700 bg-[#0F172A] p-3 text-[12px] text-slate-300">
              Compromises Digital Certificates
            </div>

          </div>

        </div>

        {/* Limitations */}
        <div className="mb-6">

          <h2 className="text-red-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Current Limitations
          </h2>

          <ul className="mt-3 space-y-2 text-[13px] text-slate-400 list-disc ml-6">
            <li>Requires large-scale fault-tolerant quantum computers.</li>
            <li>Current quantum hardware is still insufficient.</li>
            <li>Error correction remains a major challenge.</li>
          </ul>

        </div>

        {/* Defense */}
        <div className="mb-6">

          <h2 className="text-red-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Protection
          </h2>

          <div className="flex flex-wrap gap-3 mt-3">

            <span className="px-3 py-1 rounded border border-green-500 text-green-400 text-xs">
              Kyber
            </span>

            <span className="px-3 py-1 rounded border border-cyan-500 text-cyan-400 text-xs">
              Dilithium
            </span>

            <span className="px-3 py-1 rounded border border-violet-500 text-violet-400 text-xs">
              Post-Quantum Cryptography
            </span>

          </div>

        </div>

        <button
          onClick={() => navigate("/overview")}
          className="mt-2 flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
        >
          <ArrowLeft size={16} />
          <span className="text-sm">Back to Overview</span>
        </button>

      </div>

    </div>
  );
}

export default ShorsAlgorithm;