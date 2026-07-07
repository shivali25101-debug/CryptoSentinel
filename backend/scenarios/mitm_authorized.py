import random

VM1_LOGS = [
    "Encrypting packet...",
    "Sending packet to inspection gateway...",
]

VM2_LOGS = [
    "Receiving inspected packet...",
    "Integrity verified.",
    "Decrypting payload...",
    "Message delivered.",
]

VM3_LOGS = [
    "Authorized inspection enabled.",
    "Scanning packet...",
    "Checking malware signatures...",
    "No threats detected.",
    "Forwarding packet...",
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

    append_terminal(
        state_manager,
        "vm1.terminal",
        "[TX] " + VM1_LOGS[vm1_index],
    )

    vm1_index = (vm1_index + 1) % len(VM1_LOGS)

    append_terminal(
        state_manager,
        "vm2.terminal",
        "[RX] " + VM2_LOGS[vm2_index],
    )

    vm2_index = (vm2_index + 1) % len(VM2_LOGS)

    append_terminal(
        state_manager,
        "vm3.terminal",
        "[INSPECT] " + VM3_LOGS[vm3_index],
    )

    vm3_index = (vm3_index + 1) % len(VM3_LOGS)

    captured = state_manager.get("vm3.capturedPackets")

    captured.append(
        {
            "id": packet["id"],
            "protocol": "UDP",
            "action": "Inspected",
        }
    )

    if len(captured) > 10:
        captured = captured[-10:]

    state_manager.update(
        "vm3.capturedPackets",
        captured,
    )

    state_manager.update(
        "alerts",
        [
            {
                "severity": "info",
                "message": "Authorized traffic inspection active.",
            }
        ],
    )

    flow = state_manager.get("trafficFlow")

    flow.append(
        {
            "event": random.choice(
                [
                    "Packet Received",
                    "Traffic Inspection",
                    "Threat Scan",
                    "Packet Forwarded",
                ]
            )
        }
    )

    if len(flow) > 20:
        flow = flow[-20:]

    state_manager.update(
        "trafficFlow",
        flow,
    )

    timeline = state_manager.get("timeline")

    timeline.append(flow[-1])

    if len(timeline) > 20:
        timeline = timeline[-20:]

    state_manager.update(
        "timeline",
        timeline,
    )