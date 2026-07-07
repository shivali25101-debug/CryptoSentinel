import {
  Shield,
  KeyRound,
  Skull,
  ShieldCheck,
  Atom,
  LockKeyhole,
} from "lucide-react";

export const scenarios = [
  {
    id: 1,
    action: "normal",
    title: "Normal VPN Connection",
    description: "Establish a secure VPN connection using X25519 key exchange.",
    color: "#00D9FF",
    icon: Shield,
  },
  {
    id: 2,
    action: "weak_password",
    title: "Weak Password Attack",
    description: "Simulate brute-force attack on weak password authentication.",
    color: "#FF8A00",
    icon: KeyRound,
  },
  {
    id: 3,
    action: "mitm_unauthorized",
    title: "MITM (Unauthenticated)",
    description: "Perform a Man-in-the-Middle attack on an insecure channel.",
    color: "#FF3B3B",
    icon: Skull,
  },
  {
    id: 4,
    action: "mitm_authorized",
    title: "MITM Blocked",
    description: "Prevent MITM using digital signature verification.",
    color: "#A855F7",
    icon: ShieldCheck,
  },
  {
    id: 5,
    action: "shor",
    title: "Shor's Algorithm",
    description: "Simulate quantum attack against classical cryptography.",
    color: "#FFE600",
    icon: Atom,
  },
  {
    id: 6,
    action: "kyber",
    title: "Kyber Secure",
    description: "Protect communication using Kyber post-quantum cryptography.",
    color: "#39FF14",
    icon: LockKeyhole,
  },
];