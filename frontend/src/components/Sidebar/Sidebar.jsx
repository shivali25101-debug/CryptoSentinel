import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  ShieldAlert,
  PlayCircle,
  Network,
  Package,
  ScrollText,
  BarChart3,
  HeartPulse,
  Settings,
  Info,
  Monitor,
} from "lucide-react";

const sections = [
  {
    title: "MAIN",
    items: [
      { name: "Dashboard", icon: LayoutDashboard, path: "/" },
      { name: "Overview", icon: FileText, path: "/overview" },
      { name: "Attacks", icon: ShieldAlert, path: "/scenarios" },
      { name: "Visualization", icon: PlayCircle, path: "/visualization" },
      { name: "Network Topology", icon: Network, path: "/network-topology" },
      { name: "Packet Monitor", icon: Package, path: "/packet-monitor" },
      { name: "Logs", icon: ScrollText, path: "/logs" },
      { name: "Reports", icon: BarChart3, path: "/reports" },
      { name: "System Health", icon: HeartPulse, path: "/system-health" },
    ],
  },
  {
    title: "TOOLS",
    items: [
      { name: "Settings", icon: Settings, path: "/settings" },
      { name: "About", icon: Info, path: "/about" },
    ],
  },
  {
    title: "LIVE TERMINALS",
    items: [
      { name: "VM1 Terminal", icon: Monitor, path: "/vm1" },
      { name: "VM2 Terminal", icon: Monitor, path: "/vm2" },
      { name: "VM3 Terminal", icon: Monitor, path: "/vm3" },
    ],
  },
];

function Sidebar() {
  return (
    <aside className="w-[230px] h-screen bg-[#08111D] border-r border-white/10 flex flex-col">

      {/* Logo */}

      <div className="px-4 py-4 border-b border-white/10">

        <h1 className="text-xl font-bold tracking-wide">
          <span className="text-white">Crypto</span>
          <span className="text-green-400">Sentinel</span>
        </h1>

      </div>

      {/* Menu */}

      <div className="flex-1 overflow-y-auto px-2 py-3">

        {sections.map((section) => (
          <div key={section.title} className="mb-5">

            <div className="border-t border-white/10 mb-2"></div>

            <p className="px-3 mb-2 text-[8px] uppercase tracking-[0.35em] text-gray-500 font-semibold">
              {section.title}
            </p>

            {section.items.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `group flex items-center gap-2
                    px-3 py-2
                    text-[11px]
                    font-medium
                    rounded-md
                    border-l-[3px]
                    transition-colors duration-200
                    ${
                      isActive
                        ? "border-green-400 bg-green-500/10 text-white"
                        : "border-transparent text-gray-400 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        size={14}
                        strokeWidth={2.25}
                        className={
                          isActive
                            ? "text-green-400"
                            : "text-gray-500 group-hover:text-green-400"
                        }
                      />

                      <span>{item.name}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        ))}

      </div>

    </aside>
  );
}

export default Sidebar;