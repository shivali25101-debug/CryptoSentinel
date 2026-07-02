import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";

import Dashboard from "./pages/Dashboard/Dashboard";
import Overview from "./pages/Overview/Overview";
import Scenarios from "./pages/Scenarios/Scenarios";
import Visualization from "./pages/Visualization/Visualization";
import NetworkTopology from "./pages/NetworkTopology/NetworkTopology";
import PacketMonitor from "./pages/PacketMonitor/PacketMonitor";
import Logs from "./pages/Logs/Logs";
import Reports from "./pages/Reports/Reports";
import VM1 from "./pages/VM1/VM1";
import VM2 from "./pages/VM2/VM2";
import VM3 from "./pages/VM3/VM3";
import SystemHealth from "./pages/SystemHealth/SystemHealth";
import Settings from "./pages/Settings/Settings";
import About from "./pages/About/About";

function App() {
  return (
    <div className="flex h-screen bg-[#0B1220] text-white">

      <Sidebar />

      <main className="flex-1 overflow-y-auto p-8">

        <Routes>

          <Route path="/" element={<Dashboard />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/scenarios" element={<Scenarios />} />
          <Route path="/visualization" element={<Visualization />} />
          <Route path="/network-topology" element={<NetworkTopology />} />
          <Route path="/packet-monitor" element={<PacketMonitor />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/vm1" element={<VM1 />} />
          <Route path="/vm2" element={<VM2 />} />
          <Route path="/vm3" element={<VM3 />} />
          <Route path="/system-health" element={<SystemHealth />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />

        </Routes>

      </main>

    </div>
  );
}

export default App;