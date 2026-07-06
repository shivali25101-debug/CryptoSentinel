import { useState } from "react";

import CyberHeading from "../../components/CyberHeading";
import HealthCards from "../../components/SystemHealth/HealthCards";
import VMStatus from "../../components/SystemHealth/VMStatus";
import VPNHealth from "../../components/SystemHealth/VPNHealth";
import ResourceUsage from "../../components/SystemHealth/ResourceUsage";

const health = {
  cpu: {
    usage: 32,
    cores: 4,
  },

  memory: {
    used: 4.8,
    total: 8,
    percentage: 60,
  },

  network: {
    status: "Healthy",
    latency: 12,
  },

  uptime: "02:15:42",
};

const vmStatus = [
  {
    id: 1,
    name: "VM1 (Ubuntu)",
    ip: "192.168.1.10",
    status: "Online",
    uptime: "02:15:42",
  },
  {
    id: 2,
    name: "VM2 (Ubuntu)",
    ip: "192.168.1.20",
    status: "Online",
    uptime: "02:15:37",
  },
  {
    id: 3,
    name: "Kali (VM3)",
    ip: "192.168.1.30",
    status: "Offline",
    uptime: "00:02:18",
  },
];

const vpn = {
  tunnel: "Active",
  encryption: "ChaCha20-Poly1305",
  keyExchange: "X25519",
  transferred: "18.6 MB",
};

const resourceHistory = [
  { time: "60s", cpu: 35, memory: 62 },
  { time: "50s", cpu: 38, memory: 70 },
  { time: "40s", cpu: 41, memory: 68 },
  { time: "30s", cpu: 34, memory: 63 },
  { time: "20s", cpu: 39, memory: 69 },
  { time: "10s", cpu: 36, memory: 66 },
  { time: "Now", cpu: 40, memory: 68 },
];

function SystemHealth() {

  const [systemHealth, setSystemHealth] =
    useState(health);

  const [vms, setVms] =
    useState(vmStatus);

  const [vpnHealth, setVpnHealth] =
    useState(vpn);

  const [history, setHistory] =
    useState(resourceHistory);

  /*
    BACKEND LATER

    useEffect(() => {
      fetch("/api/system-health")
        .then(res => res.json())
        .then(data => {
          setSystemHealth(data.health);
          setVms(data.vms);
          setVpnHealth(data.vpn);
          setHistory(data.history);
        });
    }, []);

  */

  return (

    <div className="min-h-screen px-8 py-0">

      <CyberHeading
        title="SYSTEM HEALTH"
        subtitle="LIVE MONITORING OF HOST AND VIRTUAL MACHINES"
      />

      <div className="space-y-6 mt-8">

        <HealthCards
          health={systemHealth}
        />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          <VMStatus
            vms={vms}
          />

          <VPNHealth
            vpn={vpnHealth}
          />

        </div>

        <ResourceUsage
          history={history}
          health={systemHealth}
        />

      </div>

    </div>

  );

}

export default SystemHealth;