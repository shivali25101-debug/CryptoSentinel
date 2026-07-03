import React from "react";
import CyberHeading from "../../components/CyberHeading";

function About() {
  return (
    <div className="min-h-screen px-8 py-8 bg-[#05070F] text-gray-300">

      <CyberHeading
        title="ABOUT CRYPTOSENTINEL"
        subtitle="CYBER SECURITY SIMULATION FRAMEWORK"
      />

      <div className="max-w-4xl mx-auto space-y-6">

        <div className="bg-[#0B1220] border border-gray-700 rounded-xl p-6 hover:border-blue-400 transition">
          <h2 className="text-green-400 mb-2">SYSTEM PURPOSE</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            CryptoSentinel is a simulated cybersecurity environment designed to
            visualize network behavior, encryption systems, and attack scenarios
            such as MITM, weak authentication, and quantum-based threats.
          </p>
        </div>

        <div className="bg-[#0B1220] border border-gray-700 rounded-xl p-6 hover:border-blue-400 transition">
          <h2 className="text-green-400 mb-2">SIMULATION MODEL</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            The system replicates virtual nodes communicating over controlled
            networks. Each mode modifies encryption strength, attack surface,
            and threat classification in real-time.
          </p>
        </div>

        <div className="bg-[#0B1220] border border-gray-700 rounded-xl p-6 hover:border-blue-400 transition">
          <h2 className="text-green-400 mb-2">THREAT CLASSIFICATION</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Threat levels are dynamically calculated based on selected simulation
            mode, ranging from Secure (VPN / Kyber) to High (Quantum attack models).
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;