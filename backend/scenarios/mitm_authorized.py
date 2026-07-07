import random
from datetime import datetime

VM1_LOGS = [
    "[INIT] Loading TLS inspection profile...",
    "[OK] Inspection certificate loaded.",
    "[VPN] Secure tunnel established.",
    "[READY] Inspection gateway online.",

    "[TX] Encrypting outbound packet...",
    "[TX] Sending packet to inspection gateway...",
    "[TX] Encrypting outbound packet...",
    "[TX] Sending packet to inspection gateway...",
]

VM2_LOGS = [
    "[INIT] Receiver service started.",
    "[OK] Inspection certificate verified.",
    "[READY] Secure receiver online.",

    "[RX] Receiving inspected packet...",
    "[RX] Verifying packet integrity...",
    "[RX] Decrypting payload...",
    "[OK] Packet accepted.",

    "[RX] Receiving inspected packet...",
    "[OK] Packet accepted.",
]

VM3_LOGS = [
    "[INIT] Inspection gateway starting...",
    "[OK] TLS interception enabled.",
    "[READY] Gateway operational.",

    "[INSPECT] Packet received.",
    "[INSPECT] Malware signature scan...",
    "[OK] No threats detected.",
    "[INSPECT] Forwarding packet...",

    "[INSPECT] Packet received.",
    "[OK] Clean traffic.",
    "[INSPECT] Forwarding packet...",
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

        "encrypted": "Yes",

        "status": "Normal",

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
    state_manager.increment("forwardedPackets", 1)

    state_manager.update(
        "latency",
        random.randint(18, 35),
    )

    state_manager.update(
        "bandwidth",
        random.randint(650, 900),
    )

    state_manager.update(
        "bytesTransferred",
        state_manager.get("bytesTransferred")
        + random.randint(2000, 4000),
    )

    packet = state_manager.get("simulation.packet")

    if packet["position"] == "vm1":
        packet["position"] = "vm3"
        packet["status"] = "inspection"

    elif packet["position"] == "vm3":
        packet["position"] = "vm2"
        packet["status"] = "forwarded"

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
        VM1_LOGS[vm1_index],
    )

    if vm1_index < len(VM1_LOGS) - 1:
       vm1_index += 1

    # =====================
    # VM2
    # =====================

    append_terminal(
        state_manager,
        "vm2.terminal",
        VM2_LOGS[vm2_index],
    )

    if vm2_index < len(VM2_LOGS) - 1:
       vm2_index += 1

    # =====================
    # VM3
    # =====================

    append_terminal(
        state_manager,
        "vm3.terminal",
        VM3_LOGS[vm3_index],
    )

    if vm3_index < len(VM3_LOGS) - 1:
       vm3_index += 1

    # =====================
    # Inspection Log
    # =====================

    captured = state_manager.get("vm3.capturedPackets")

    captured.append(
        {
            "id": packet["id"],
            "protocol": random.choice(["TCP", "UDP"]),
            "action": "Inspected",
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
                "severity": "success",
                "message": "Traffic inspected successfully. No threats detected.",
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
                    "Packet Received",
                    "Traffic Inspection",
                    "Threat Scan Passed",
                    "Packet Forwarded",
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