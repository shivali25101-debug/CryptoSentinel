import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "260px",
        background: "#111827",
        color: "white",
        padding: "20px",
        height: "100vh",
      }}
    >
      <h2>CryptoSentinel</h2>

      <hr />

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        <NavLink to="/">Dashboard</NavLink>

        <NavLink to="/overview">Overview</NavLink>

        <NavLink to="/scenarios">Scenario Manager</NavLink>

        <NavLink to="/visualization">Visualization</NavLink>

        <NavLink to="/network-topology">Network Topology</NavLink>

        <NavLink to="/packet-monitor">Packet Monitor</NavLink>

        <NavLink to="/logs">Logs</NavLink>

        <NavLink to="/reports">Reports</NavLink>

        <NavLink to="/vm1">VM1 Terminal</NavLink>

        <NavLink to="/vm2">VM2 Terminal</NavLink>

        <NavLink to="/vm3">VM3 Terminal</NavLink>

        <NavLink to="/system-health">System Health</NavLink>

        <NavLink to="/settings">Settings</NavLink>

        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;