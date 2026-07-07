import random
from datetime import datetime

VM1_LOGS = [
    "Generating X25519 key pair...",
    "Sending public key...",
    "Waiting for receiver...",
]

VM2_LOGS = [
    "Receiving encrypted packet...",
    "Awaiting secure key...",
    "Decrypting message...",
]

VM3_LOGS = [
    "Initializing quantum computer...",
    "Running Shor's algorithm...",
    "Factoring public key...",
    "Private key recovered.",
    "Decrypting intercepted packet...",
    "Reading plaintext...",
]

vm1_index = 0
vm2_index = 0
vm3_index = 0


def append_terminal(state_manager, path, message):

    terminal = state_manager.get(path)

    terminal.insert(-1, message)

    if len(terminal) > 25:
        terminal = terminal[-25:]

    state_manager.update(path, terminal)


def update_packet_monitor(state_manager):

    packets = state_manager.get("packets")

    packet = state_manager.get("simulation.packet")

    packets.append({

        "id": packet["id"],

        "protocol": random.choice(["TCP", "UDP"]),

        "source": "VM1",

        "destination": "VM2",

        "size": f"{random.randint(64,512)} Bytes",

        "encrypted": "No",

        "status": "Intercepted",

        "timestamp": datetime.now().strftime("%H:%M:%S"),

        "payload": " ".join(
            "".join(random.choice("0123456789ABCDEF") for _ in range(2))
            for _ in range(32)
        ),

    })

    if len(packets) > 100:
        packets = packets[-100:]

    state_manager.update("packets", packets)


def update(state_manager):

    global vm1_index
    global vm2_index
    global vm3_index

    state_manager.increment("sentPackets", 1)
    state_manager.increment("receivedPackets", 1)
    state_manager.increment("interceptedPackets", 1)

    state_manager.update(
        "latency",
        random.randint(40, 80),
    )

    state_manager.update(
        "bandwidth",
        random.randint(200, 500),
    )

    state_manager.update(
        "cpuUsage",
        random.randint(70, 95),
    )

    state_manager.update(
        "memoryUsage",
        random.randint(60, 90),
    )

    state_manager.update(
        "bytesTransferred",
        state_manager.get("bytesTransferred")
        + random.randint(3000, 7000),
    )

    packet = state_manager.get("simulation.packet")

    if packet["position"] == "vm1":
        packet["position"] = "vm3"
        packet["status"] = "quantum_attack"

    elif packet["position"] == "vm3":
        packet["position"] = "vm2"
        packet["status"] = "decrypted"

    else:
        packet["position"] = "vm1"
        packet["status"] = "encrypted"

    packet["id"] += 1

    state_manager.update(
        "simulation.packet",
        packet,
    )

    update_packet_monitor(state_manager)
        # =====================
    # VM1
    # =====================

    append_terminal(
        state_manager,
        "vm1.terminal",
        "[TX] " + VM1_LOGS[vm1_index],
    )

    vm1_index = (vm1_index + 1) % len(VM1_LOGS)

    # =====================
    # VM2
    # =====================

    append_terminal(
        state_manager,
        "vm2.terminal",
        "[RX] " + VM2_LOGS[vm2_index],
    )

    vm2_index = (vm2_index + 1) % len(VM2_LOGS)

    # =====================
    # VM3
    # =====================

    append_terminal(
        state_manager,
        "vm3.terminal",
        "[SHOR] " + VM3_LOGS[vm3_index],
    )

    vm3_index = (vm3_index + 1) % len(VM3_LOGS)

    # =====================
    # Captured Packets
    # =====================

    captured = state_manager.get("vm3.capturedPackets")

    captured.append(
        {
            "id": packet["id"],
            "protocol": random.choice(["TCP", "UDP"]),
            "action": "Quantum Decrypted",
        }
    )

    if len(captured) > 10:
        captured = captured[-10:]

    state_manager.update(
        "vm3.capturedPackets",
        captured,
    )

    # =====================
    # Alerts
    # =====================

    state_manager.update(
        "alerts",
        [
            {
                "severity": "critical",
                "message": "Quantum attack detected. X25519 compromised.",
            }
        ],
    )

    # =====================
    # Traffic Flow
    # =====================

    flow = state_manager.get("trafficFlow")

    flow.append(
        {
            "time": datetime.now().strftime("%H:%M:%S"),
            "event": random.choice(
                [
                    "Quantum Attack Started",
                    "Factoring Public Key",
                    "Private Key Recovered",
                    "Packet Decrypted",
                ]
            ),
        }
    )

    if len(flow) > 20:
        flow = flow[-20:]

    state_manager.update(
        "trafficFlow",
        flow,
    )
        # =====================
    # Timeline
    # =====================

    timeline = state_manager.get("timeline")

    timeline.append(
        {
            "time": datetime.now().strftime("%H:%M:%S"),
            "event": flow[-1]["event"],
        }
    )

    if len(timeline) > 20:
        timeline = timeline[-20:]

    state_manager.update(
        "timeline",
        timeline,
    )