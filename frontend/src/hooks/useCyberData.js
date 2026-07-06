import { useData } from "../context/DataContext";

export default function useCyberData() {
  const { data, socket } = useData();

  return {
    socket,

    scenario: data?.scenario ?? "Normal",

    vpnStatus: data?.vpnStatus ?? "Disconnected",

    sentPackets: data?.sentPackets ?? 0,
    receivedPackets: data?.receivedPackets ?? 0,
    interceptedPackets: data?.interceptedPackets ?? 0,
    droppedPackets: data?.droppedPackets ?? 0,
    forwardedPackets: data?.forwardedPackets ?? 0,

    bytesTransferred: data?.bytesTransferred ?? 0,
    latency: data?.latency ?? 0,
    bandwidth: data?.bandwidth ?? 0,

    cpuUsage: data?.cpuUsage ?? 0,
    memoryUsage: data?.memoryUsage ?? 0,

    uptime: data?.uptime ?? "00:00:00",

    alerts: data?.alerts ?? [],

    senderConnected: data?.senderConnected ?? false,
    receiverConnected: data?.receiverConnected ?? false,
    attackerConnected: data?.attackerConnected ?? false,

    simulation: data?.simulation ?? {},

    packet: data?.simulation?.packet ?? {
      id: 0,
      position: "vm1",
      status: "idle",
      color: "cyan",
    },
  };
}