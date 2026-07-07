import random
from datetime import datetime

# ===========================
# Scenario Sequences
# ===========================

VM1_LOGS = [
    "Generating X25519 key pair...",
    "Public key generated.",
    "Sending public key to VM2...",
    "Waiting for receiver response...",
    "Receiver public key received.",
    "Shared secret generated.",
    "Deriving ChaCha20-Poly1305 session key...",
    "VPN tunnel established.",
    "Encrypting packet...",
    "Packet transmitted."
]

VM2_LOGS = [
    "Incoming encrypted packet...",
    "Authenticating sender...",
    "Certificate verified.",
    "Shared secret confirmed.",
    "Decrypting packet...",
    "Integrity verified.",
    "Displaying payload...",
    "Waiting for next packet..."
]

VM3_LOGS = [
    "Monitoring traffic...",
    "No suspicious activity.",
    "Tunnel healthy.",
    "Idle..."
]

FLOW_EVENTS = [
    "Tunnel Established",
    "Packet Encrypted",
    "Packet Sent",
    "Packet Received",
    "Packet Decrypted",
    "Payload Delivered"
]

PACKET_ROUTE = [
    ("vm1", "encrypting"),
    ("vm2", "received"),
]

vm1_index = 0
vm2_index = 0
vm3_index = 0
flow_index = 0
packet_index = 0


def append_terminal(state_manager, path, message):

    terminal = state_manager.get(path)

    terminal.insert(-1, message)

    if len(terminal) > 25:
        terminal = terminal[-25:]

    state_manager.update(path, terminal)


def update_queue(state_manager):

    packet_id = state_manager.get("sentPackets")

    queue = state_manager.get("vm1.queue")

    queue.append(
        {
            "id": packet_id,
            "protocol": random.choice(["TCP", "UDP"]),
            "status": random.choice(
                [
                    "Encrypted",
                    "Queued",
                    "Sent"
                ]
            )
        }
    )

    if len(queue) > 10:
        queue = queue[-10:]

    state_manager.update("vm1.queue", queue)


def update_receiver(state_manager):

    packet_id = state_manager.get("receivedPackets")

    packets = state_manager.get("vm2.packets")

    packets.append(
        {
            "id": packet_id,
            "protocol": random.choice(["TCP", "UDP"]),
            "status": random.choice(
                [
                    "Received",
                    "Verified",
                    "Decrypted"
                ]
            )
        }
    )

    if len(packets) > 10:
        packets = packets[-10:]

    state_manager.update("vm2.packets", packets)


def update_packet(state_manager):

    global packet_index

    packet = state_manager.get("simulation.packet")

    packet["id"] += 1

    packet["position"], packet["status"] = PACKET_ROUTE[
        packet_index
    ]

    packet_index = (packet_index + 1) % len(PACKET_ROUTE)

    state_manager.update(
        "simulation.packet",
        packet,
    )


def update_packet_monitor(state_manager):

    packets = state_manager.get("packets")

    packet = state_manager.get("simulation.packet")

    packets.append(
        {
            "id": packet["id"],
            "protocol": random.choice(["TCP", "UDP"]),
            "source": "VM1",
            "destination": "VM2",
            "size": f"{random.randint(64,512)} Bytes",
            "encrypted": "Yes",
            "status": "Encrypted",
            "timestamp": datetime.now().strftime("%H:%M:%S"),
            "payload": " ".join(
                "".join(random.choice("0123456789ABCDEF") for _ in range(2))
                for _ in range(32)
            ),
        }
    )

    if len(packets) > 100:
        packets = packets[-100:]

    state_manager.update("packets", packets)


def update(state_manager):

    global vm1_index
    global vm2_index
    global vm3_index
    global flow_index

    # =====================
    # Packet
    # =====================

    update_packet(state_manager)
    update_packet_monitor(state_manager)

    # =====================
    # Statistics
    # =====================

    state_manager.increment("sentPackets", 1)
    state_manager.increment("receivedPackets", 1)
    state_manager.increment("forwardedPackets", 1)

    state_manager.update(
        "latency",
        random.randint(12, 22),
    )

    state_manager.update(
        "bandwidth",
        random.randint(900, 980),
    )

    state_manager.update(
        "cpuUsage",
        random.randint(12, 20),
    )

    state_manager.update(
        "memoryUsage",
        random.randint(20, 35),
    )

    state_manager.update(
        "bytesTransferred",
        state_manager.get("bytesTransferred")
        + random.randint(1500, 3500),
    )
        # =====================
    # VM1
    # =====================

    append_terminal(
        state_manager,
        "vm1.terminal",
        "[INFO] " + VM1_LOGS[vm1_index],
    )

    vm1_index = (vm1_index + 1) % len(VM1_LOGS)

    update_queue(state_manager)

    # =====================
    # VM2
    # =====================

    append_terminal(
        state_manager,
        "vm2.terminal",
        "[INFO] " + VM2_LOGS[vm2_index],
    )

    vm2_index = (vm2_index + 1) % len(VM2_LOGS)

    update_receiver(state_manager)

    # =====================
    # VM3
    # =====================

    append_terminal(
        state_manager,
        "vm3.terminal",
        "[INFO] " + VM3_LOGS[vm3_index],
    )

    vm3_index = (vm3_index + 1) % len(VM3_LOGS)

    # =====================
    # Alerts
    # =====================

    state_manager.update(
        "alerts",
        [
            {
                "severity": "info",
                "message": "Secure VPN tunnel established."
            }
        ]
    )

    # =====================
    # Traffic Flow
    # =====================

    flow = state_manager.get("trafficFlow")

    flow.append(
        {
            "time": datetime.now().strftime("%H:%M:%S"),
            "event": FLOW_EVENTS[flow_index]
        }
    )

    flow_index = (flow_index + 1) % len(FLOW_EVENTS)

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
            "event": FLOW_EVENTS[
                (flow_index - 1) % len(FLOW_EVENTS)
            ]
        }
    )

    if len(timeline) > 20:
        timeline = timeline[-20:]

    state_manager.update(
        "timeline",
        timeline,
    )