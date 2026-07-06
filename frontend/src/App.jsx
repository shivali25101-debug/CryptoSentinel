import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

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

import NormalVPN from "./pages/Overview/NormalVPN";
import WeakPassword from "./pages/Overview/WeakPassword";
import MitmUnauthorized from "./pages/Overview/MitmUnauthorized";
import MitmAuthorised from "./pages/Overview/MitmAuthorised";
import ShorsAlgorithm from "./pages/Overview/ShorsAlgorithm";
import Kyber from "./pages/Overview/Kyber";

function App() {
  return (
    <MainLayout>
      <Routes>
        {/* Dashboard */}
        <Route path="/" element={<Dashboard />} />

        {/* Overview */}
        <Route path="/overview" element={<Overview />} />
        <Route path="/overview/normal" element={<NormalVPN />} />
        <Route
          path="/overview/weak-password"
          element={<WeakPassword />}
        />
        <Route
          path="/overview/mitm"
          element={<MitmUnauthorized />}
        />
        <Route
          path="/overview/secure-mitm"
          element={<MitmAuthorised />}
        />
        <Route
          path="/overview/shor"
          element={<ShorsAlgorithm />}
        />
        <Route
          path="/overview/kyber"
          element={<Kyber />}
        />

        {/* Other Pages */}
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
    </MainLayout>
  );
}

export default App;