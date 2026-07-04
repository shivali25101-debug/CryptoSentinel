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
  const cards = [
    {
      title: "Packets Sent",
      value: "1,248",
      subtitle: "",
      icon: Send,
      color: "#39FF6A",
    },
    {
      title: "Packets Received",
      value: "1,197",
      subtitle: "",
      icon: Download,
      color: "#2EA8FF",
    },
    {
      title: "Packets Intercepted",
      value: "512",
      subtitle: "",
      icon: ShieldAlert,
      color: "#FF3B30",
    },
    {
      title: "Bytes Transferred",
      value: "2.45 MB",
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