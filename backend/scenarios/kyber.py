import random
from datetime import datetime

VM1_LOGS = [

    "[INIT] Loading CRYSTALS-Kyber library...",
    "[INIT] Generating Kyber-768 keypair...",
    "[OK] Public key generated.",
    "[NET] Sending public key...",
    "[OK] Ciphertext received.",
    "[OK] Shared secret established.",

    "[KYBER] Encrypting application packet...",
    "[TX] Sending encrypted packet...",
    "[OK] Packet transmitted.",
    "[TX] Waiting for acknowledgement...",
    "[KYBER] Encrypting application packet...",
    "[TX] Sending encrypted packet...",
    "[OK] Packet transmitted.",
    "[TX] Waiting for acknowledgement...",
]

VM2_LOGS = [

    "[INIT] Receiver online.",
    "[OK] Public key received.",
    "[KYBER] Decapsulating shared secret...",
    "[OK] Secure session established.",

    "[RX] Encrypted packet received.",
    "[KYBER] Decrypting packet...",
    "[OK] Payload verified.",
    "[OK] Payload delivered.",
    "[RX] Waiting for next packet...",
    "[RX] Encrypted packet received.",
    "[KYBER] Decrypting packet...",
    "[OK] Payload delivered.",
]

VM3_LOGS = [

    "[INIT] Quantum cluster initialized...",
    "[QUANTUM] Capturing Kyber public key...",
    "[QUANTUM] Running lattice reduction...",
    "[QUANTUM] Searching secret vector...",
    "[ERROR] Attack failed.",
    "[OK] Kyber KEM resisted attack.",

    "[QUANTUM] Monitoring encrypted traffic...",
    "[QUANTUM] Retrying lattice attack...",
    "[ERROR] No private key recovered.",
    "[QUANTUM] Monitoring encrypted traffic...",
    "[QUANTUM] Retrying lattice attack...",
    "[ERROR] Attack failed.",
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

        "status": "Quantum Safe",

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
        random.randint(10, 18),
    )

    state_manager.update(
        "bandwidth",
        random.randint(850, 980),
    )

    state_manager.update(
        "cpuUsage",
        random.randint(18, 30),
    )

    state_manager.update(
        "memoryUsage",
        random.randint(25, 40),
    )

    state_manager.update(
        "bytesTransferred",
        state_manager.get("bytesTransferred")
        + random.randint(2500, 5000),
    )

    packet = state_manager.get("simulation.packet")

    if packet["position"] == "vm1":
        packet["position"] = "vm2"
        packet["status"] = "kyber_encrypted"

    else:
        packet["position"] = "vm1"
        packet["status"] = "secure"

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
        "[KYBER] " + VM1_LOGS[vm1_index],
    )

    vm1_index = (vm1_index + 1) % len(VM1_LOGS)

    # =====================
    # VM2
    # =====================

    append_terminal(
        state_manager,
        "vm2.terminal",
        "[KYBER] " + VM2_LOGS[vm2_index],
    )

    vm2_index = (vm2_index + 1) % len(VM2_LOGS)

    # =====================
    # VM3
    # =====================

    append_terminal(
        state_manager,
        "vm3.terminal",
        "[QUANTUM] " + VM3_LOGS[vm3_index],
    )

    vm3_index = (vm3_index + 1) % len(VM3_LOGS)

    # =====================
    # Alerts
    # =====================

    state_manager.update(
        "alerts",
        [
            {
                "severity": "success",
                "message": "Quantum attack blocked. CRYSTALS-Kyber session remains secure.",
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
                    "Kyber Key Exchange",
                    "Key Encapsulation",
                    "Quantum Attack Failed",
                    "Secure Packet Delivered",
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