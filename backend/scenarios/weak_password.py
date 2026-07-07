import random

PASSWORD_LOGS = [
    "Loading password dictionary...",
    "Dictionary loaded (12000 passwords).",
    "Starting brute-force attack...",
    "Trying password: admin",
    "Authentication failed.",
    "Trying password: password123",
    "Authentication failed.",
    "Trying password: qwerty123",
    "Authentication failed.",
    "Trying password: letmein123",
    "Password accepted.",
    "Login successful.",
    "Privilege escalation complete.",
]

ATTACKER_LOGS = [
    "Hydra initialized.",
    "Connecting to SSH service...",
    "Username: ubuntu",
    "Attempting password...",
    "Access granted.",
    "Collecting credentials...",
]

vm1_index = 0
vm3_index = 0


def append_terminal(state_manager, path, message):
    terminal = state_manager.get(path)
    terminal.insert(-1, message)

    if len(terminal) > 25:
        terminal = terminal[-25:]

    state_manager.update(path, terminal)


def update(state_manager):

    global vm1_index
    global vm3_index

    state_manager.increment("sentPackets", random.randint(1, 3))
    state_manager.increment("receivedPackets", random.randint(1, 3))

    state_manager.update(
        "latency",
        random.randint(20, 35),
    )

    state_manager.update(
        "bandwidth",
        random.randint(400, 650),
    )

    append_terminal(
        state_manager,
        "vm1.terminal",
        "[AUTH] " + PASSWORD_LOGS[vm1_index],
    )

    vm1_index = (vm1_index + 1) % len(PASSWORD_LOGS)

    append_terminal(
        state_manager,
        "vm3.terminal",
        "[HYDRA] " + ATTACKER_LOGS[vm3_index],
    )

    vm3_index = (vm3_index + 1) % len(ATTACKER_LOGS)

    alerts = [
        {
            "severity": "warning",
            "message": "Weak password attack in progress.",
        }
    ]

    state_manager.update("alerts", alerts)

    packet = state_manager.get("simulation.packet")

    packet["id"] += 1
    packet["position"] = random.choice(["vm1", "vm2"])
    packet["status"] = "authentication"

    state_manager.update(
        "simulation.packet",
        packet,
    )

    flow = state_manager.get("trafficFlow")

    flow.append(
        {
            "event": random.choice(
                [
                    "Credential Attempt",
                    "Authentication Failed",
                    "Password Found",
                    "Login Successful",
                ]
            )
        }
    )

    if len(flow) > 20:
        flow = flow[-20:]

    state_manager.update("trafficFlow", flow)

    timeline = state_manager.get("timeline")

    timeline.append(
        {
            "event": flow[-1]["event"]
        }
    )

    if len(timeline) > 20:
        timeline = timeline[-20:]

    state_manager.update("timeline", timeline)