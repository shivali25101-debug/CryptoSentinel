import random

VM1_LOGS = [
    "Initializing CRYSTALS-Kyber...",
    "Generating Kyber-768 keypair...",
    "Performing Key Encapsulation...",
    "Shared secret established.",
    "Encrypting packet...",
    "Sending packet...",
]

VM2_LOGS = [
    "Receiving Kyber packet...",
    "Decapsulating shared secret...",
    "Authentication verified.",
    "Decrypting packet...",
    "Payload delivered.",
]

VM3_LOGS = [
    "Launching quantum attack...",
    "Searching for private key...",
    "Attempting lattice reduction...",
    "Attack failed.",
    "Kyber KEM resisted attack.",
    "Monitoring secure traffic...",
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

    append_terminal(
        state_manager,
        "vm1.terminal",
        "[KYBER] " + VM1_LOGS[vm1_index],
    )

    vm1_index = (vm1_index + 1) % len(VM1_LOGS)

    append_terminal(
        state_manager,
        "vm2.terminal",
        "[KYBER] " + VM2_LOGS[vm2_index],
    )

    vm2_index = (vm2_index + 1) % len(VM2_LOGS)

    append_terminal(
        state_manager,
        "vm3.terminal",
        "[QUANTUM] " + VM3_LOGS[vm3_index],
    )

    vm3_index = (vm3_index + 1) % len(VM3_LOGS)

    state_manager.update(
        "alerts",
        [
            {
                "severity": "success",
                "message": "Kyber resisted quantum attack.",
            }
        ],
    )

    flow = state_manager.get("trafficFlow")

    flow.append(
        {
            "event": random.choice(
                [
                    "Kyber Key Exchange",
                    "Key Encapsulation",
                    "Quantum Attack Failed",
                    "Secure Packet Delivered",
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