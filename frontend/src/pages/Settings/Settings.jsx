import React, { useState } from "react";
import CyberHeading from "../../components/CyberHeading";

function ToggleSwitch({ checked, onChange }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={onChange}
      />

      <div className="w-11 h-6 bg-gray-700 rounded-full transition peer-checked:bg-cyan-500"></div>

      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
    </label>
  );
}

function Settings() {
  const [theme, setTheme] = useState("dark");
  const [refresh, setRefresh] = useState("1");

  const [logs, setLogs] = useState(true);
  const [alerts, setAlerts] = useState(true);
  const [sound, setSound] = useState(false);

  const [confirmLaunch, setConfirmLaunch] = useState(true);
  const [autoStop, setAutoStop] = useState(false);

  const handleSave = () => {
    alert("Settings Saved Successfully!");
  };

  const handleReset = () => {
    setTheme("dark");
    setRefresh("1");
    setLogs(true);
    setAlerts(true);
    setSound(false);
    setConfirmLaunch(true);
    setAutoStop(false);
  };

  return (
    <div className="min-h-screen bg-[#05070F] text-gray-300 px-8 py-8">

      <CyberHeading
        title="SYSTEM SETTINGS"
        subtitle="CONFIGURE SIMULATION PARAMETERS"
      />

      <div className="max-w-4xl mx-auto space-y-8">

        {/* GENERAL */}
        <div className="bg-[#0B1220] border border-gray-700 rounded-xl p-6">

          <h2 className="text-cyan-400 text-xl font-semibold mb-6">
            General
          </h2>

          <div className="space-y-6">

            <div>
              <label className="block mb-2 text-gray-200">
                Theme Mode
              </label>

              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="w-full bg-[#111827] border border-gray-600 rounded-lg p-3 focus:border-cyan-500 outline-none"
              >
                <option value="dark">Dark Cyber</option>
                <option value="vintage">Vintage Glow</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-gray-200">
                Refresh Interval
              </label>

              <select
                value={refresh}
                onChange={(e) => setRefresh(e.target.value)}
                className="w-full bg-[#111827] border border-gray-600 rounded-lg p-3 focus:border-cyan-500 outline-none"
              >
                <option value="1">1 Second</option>
                <option value="2">2 Seconds</option>
                <option value="5">5 Seconds</option>
              </select>
            </div>

          </div>

        </div>

        {/* MONITORING */}
        <div className="bg-[#0B1220] border border-gray-700 rounded-xl p-6">

          <h2 className="text-cyan-400 text-xl font-semibold mb-6">
            Monitoring
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between items-center">
              <span>Enable System Logs</span>
              <ToggleSwitch
                checked={logs}
                onChange={() => setLogs(!logs)}
              />
            </div>

            <div className="flex justify-between items-center">
              <span>Enable Threat Alerts</span>
              <ToggleSwitch
                checked={alerts}
                onChange={() => setAlerts(!alerts)}
              />
            </div>

            <div className="flex justify-between items-center">
              <span>Enable Sound Alerts</span>
              <ToggleSwitch
                checked={sound}
                onChange={() => setSound(!sound)}
              />
            </div>

          </div>

        </div>

        {/* SIMULATION */}
        <div className="bg-[#0B1220] border border-gray-700 rounded-xl p-6">

          <h2 className="text-cyan-400 text-xl font-semibold mb-6">
            Simulation
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between items-center">
              <span>Confirm Before Launching Attack</span>
              <ToggleSwitch
                checked={confirmLaunch}
                onChange={() => setConfirmLaunch(!confirmLaunch)}
              />
            </div>

            <div className="flex justify-between items-center">
              <span>Auto Stop Attack After Completion</span>
              <ToggleSwitch
                checked={autoStop}
                onChange={() => setAutoStop(!autoStop)}
              />
            </div>

          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-4">

          <button
            onClick={handleReset}
            className="px-6 py-3 border border-gray-600 rounded-lg hover:border-cyan-500 transition"
          >
            Reset
          </button>

          <button
            onClick={handleSave}
            className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition"
          >
            Save Settings
          </button>

        </div>

      </div>

    </div>
  );
}

export default Settings;