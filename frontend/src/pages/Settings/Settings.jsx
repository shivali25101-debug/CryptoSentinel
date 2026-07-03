import React, { useState } from "react";
import CyberHeading from "../../components/CyberHeading";

function Settings() {
  const [theme, setTheme] = useState("dark");
  const [logs, setLogs] = useState(true);
  const [alerts, setAlerts] = useState(true);

  return (
    <div className="min-h-screen px-8 py-8 bg-[#05070F] text-gray-300">

      <CyberHeading
        title="SYSTEM SETTINGS"
        subtitle="CONFIGURE SIMULATION PARAMETERS"
      />

      <div className="max-w-3xl mx-auto space-y-6">

        {/* Theme */}
        <div className="bg-[#0B1220] border border-gray-700 rounded-xl p-5 hover:border-blue-400 transition">
          <h3 className="text-gray-200 mb-2">Theme Mode</h3>

          <select
            className="w-full bg-[#0A0F1A] border border-gray-600 p-2 rounded text-gray-300"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="dark">Dark Cyber</option>
            <option value="vintage">Vintage Glow</option>
          </select>
        </div>

        {/* Logs */}
        <div className="bg-[#0B1220] border border-gray-700 rounded-xl p-5 hover:border-blue-400 transition flex justify-between items-center">
          <span>Enable System Logs</span>
          <input
            type="checkbox"
            checked={logs}
            onChange={() => setLogs(!logs)}
          />
        </div>

        {/* Alerts */}
        <div className="bg-[#0B1220] border border-gray-700 rounded-xl p-5 hover:border-blue-400 transition flex justify-between items-center">
          <span>Enable Threat Alerts</span>
          <input
            type="checkbox"
            checked={alerts}
            onChange={() => setAlerts(!alerts)}
          />
        </div>

      </div>
    </div>
  );
}

export default Settings;