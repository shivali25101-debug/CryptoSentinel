import random
from datetime import datetime

VM1_LOGS = [
    "Interface eth0 initialized.",
    "VPN tunnel active.",
    "Destination gateway verified.",
    "Encrypting outgoing packet.",
    "Packet queued for transmission.",
]

VM2_LOGS = [
    "Listening on VPN interface.",
    "Incoming packet detected.",
    "Packet integrity verified.",
    "Decrypting payload.",
    "Forwarding to application.",
]

VM3_LOGS = [
    "Starting ARP spoofing...",
    "Gateway MAC address spoofed.",
    "Victim ARP cache poisoned.",
    "Intercepting encrypted traffic.",
    "Forwarding packets to victim.",
]

vm1_index = 0
vm2_index = 0
vm3_index = 0


def append_terminal(state_manager, path, message):

    terminal = state_manager.get(path)

    terminal.insert(-1, message)

    if len(terminal) > 100:
        terminal = terminal[-100:]

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
    state_manager.increment("forwardedPackets", 1)

    state_manager.update(
        "latency",
        random.randint(35, 60),
    )

    state_manager.update(
        "bandwidth",
        random.randint(250, 450),
    )

    state_manager.update(
        "bytesTransferred",
        state_manager.get("bytesTransferred")
        + random.randint(2000, 5000),
    )

    packet = state_manager.get("simulation.packet")

    if packet["position"] == "vm1":
        packet["position"] = "vm3"
        packet["status"] = "captured"

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

    if vm1_index < len(VM1_LOGS):

        append_terminal(
            state_manager,
            "vm1.terminal",
            "[INIT] " + VM1_LOGS[vm1_index],
        )

        vm1_index += 1

    else:

        append_terminal(
           state_manager,
           "vm1.terminal",
           random.choice([
              "[TX] Encrypting packet...",
              "[TX] Sending encrypted packet...",
              "[VPN] Packet sent via tunnel.",
              "[NET] Awaiting acknowledgement.",
            ]),
        )

        vm1_index = (vm1_index + 1) % len(VM1_LOGS)

    # =====================
    # VM2
    # =====================

    if vm2_index < len(VM2_LOGS):

      append_terminal(
        state_manager,
        "vm2.terminal",
        "[INIT] " + VM2_LOGS[vm2_index],
      )

      vm2_index += 1

    else:

      append_terminal(
        state_manager,
        "vm2.terminal",
        random.choice([
            "[RX] Packet received.",
            "[OK] Integrity check passed.",
            "[RX] Payload decrypted.",
            "[READY] Waiting for next packet.",
        ]),
      )
    # =====================
    # VM3
    # =====================

    if vm3_index < len(VM3_LOGS):

      append_terminal(
        state_manager,
        "vm3.terminal",
        "[MITM] " + VM3_LOGS[vm3_index],
      )

      vm3_index += 1

    else:

      append_terminal(
        state_manager,
        "vm3.terminal",
        random.choice([
            "[CAPTURE] Packet intercepted.",
            "[MITM] Reading packet headers...",
            "[FORWARD] Forwarding packet to VM2...",
            "[CAPTURE] Session token captured.",
            "[MITM] Monitoring victim traffic...",
        ]),
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
            "action": "Captured",
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
                "message": "Unauthorized MITM attack detected.",
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
                    "ARP Spoofing",
                    "Packet Intercepted",
                    "Credentials Captured",
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