import useCyberData from "../../hooks/useCyberData";
import {
  Send,
  Download,
  ShieldAlert,
  Database,
  Lock,
  Fingerprint,
} from "lucide-react";

import MetricCard from "./MetricCard";

function MetricCards() {
  const {
  sentPackets,
  receivedPackets,
  interceptedPackets,
  bytesTransferred,
} = useCyberData();
  
  const cards = [
  {
    title: "Packets Sent",
    value: sentPackets.toLocaleString(),
    subtitle: "",
    icon: Send,
    color: "#39FF6A",
  },
  {
    title: "Packets Received",
    value: receivedPackets.toLocaleString(),
    subtitle: "",
    icon: Download,
    color: "#2EA8FF",
  },
  {
    title: "Packets Intercepted",
    value: interceptedPackets.toLocaleString(),
    subtitle: "",
    icon: ShieldAlert,
    color: "#FF3B30",
  },
  {
    title: "Bytes Transferred",
    value: `${bytesTransferred} Bytes`,
    subtitle: "",
    icon: Database,
    color: "#B65CFF",
  },
  {
    title: "Encryption",
    value: "ChaCha20-Poly1305",
    subtitle: "Active",
    icon: Lock,
    color: "#39FF6A",
  },
  {
    title: "Session ID",
    value: "9A71BB...",
    subtitle: "Tunnel ID",
    icon: Fingerprint,
    color: "#39FF6A",
  },
];

  return (
    <div className="grid grid-cols-6 gap-3">
      {cards.map((card) => (
        <MetricCard
          key={card.title}
          {...card}
        />
      ))}
    </div>
  );
}

export default MetricCards;