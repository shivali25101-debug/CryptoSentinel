import random
from datetime import datetime

PASSWORD_LOGS = [

    # ---------- Initialization (only once) ----------

    "[INIT] Loading rockyou.txt password dictionary...",
    "[OK] 14344392 passwords loaded.",
    "[NET] Connecting to 10.0.0.1:22...",
    "[OK] SSH service detected.",
    "[AUTH] Starting brute-force attack...",
    "[READY] Beginning password attempts...",

    # ---------- Continuous logs ----------

    "[AUTH] Trying password: admin",
    "[ERROR] Authentication failed.",
    "[AUTH] Trying password: password",
    "[ERROR] Authentication failed.",
    "[AUTH] Trying password: ubuntu",
    "[ERROR] Authentication failed.",
    "[AUTH] Trying password: qwerty123",
    "[ERROR] Authentication failed.",
    "[AUTH] Trying password: letmein123",
    "[OK] Password accepted.",
    "[OK] SSH session established.",
    "[TX] Downloading user credentials...",
    "[TX] Enumerating home directory...",
    "[TX] Reading authorized_keys...",
    "[TX] Collecting system information...",
    "[TX] Attempting privilege escalation...",
    "[TX] Uploading persistence payload...",
    "[TX] Opening reverse shell...",
    "[TX] Session active.",
]

ATTACKER_LOGS = [

    # ---------- Startup ----------

    "[INIT] hydra -l ubuntu -P rockyou.txt ssh://10.0.0.1",
    "[OK] Target reachable.",
    "[READY] Starting password attempts...",

    # ---------- Continuous ----------

    "[TX] Sending authentication request...",
    "[TX] Waiting for SSH response...",
    "[ERROR] Login failed.",
    "[TX] Trying next credential...",
    "[TX] Sending authentication request...",
    "[ERROR] Login failed.",
    "[TX] Trying next credential...",
    "[OK] Valid credentials discovered.",
    "[TX] Establishing shell...",
    "[TX] Reading passwd file...",
    "[TX] Dumping credentials...",
    "[TX] Monitoring victim activity...",
    "[TX] Reverse shell connected.",
]

vm1_index = 0
vm3_index = 0
VM1_INIT_COUNT = 6
VM3_INIT_COUNT = 3

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

        "source": "VM3",

        "destination": "VM1",

        "size": f"{random.randint(64,512)} Bytes",

        "encrypted": "No",

        "status": "Suspicious",

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

    packet = state_manager.get("simulation.packet")

    packet["id"] += 1
    packet["position"] = random.choice(["vm1", "vm2"])
    packet["status"] = "authentication"

    state_manager.update(
        "simulation.packet",
        packet,
    )

    update_packet_monitor(state_manager)

    if vm1_index < len(PASSWORD_LOGS):
         append_terminal(
            state_manager,
            "vm1.terminal",
            "[AUTH] " + PASSWORD_LOGS[vm1_index],
        )
         vm1_index += 1
    else:
        append_terminal(
           state_manager,
           "vm1.terminal",
           "[TX] Sending authentication packet..."
        )
    

    if vm3_index < len(ATTACKER_LOGS):
        append_terminal(
           state_manager,
           "vm3.terminal",
           "[HYDRA] " + ATTACKER_LOGS[vm3_index],
        )
        vm3_index += 1
    else:
        append_terminal(
           state_manager,
           "vm3.terminal",
           "[HYDRA] Trying next password..."
        )

    state_manager.update(
        "alerts",
        [
            {
                "severity": "warning",
                "message": "Weak password attack in progress.",
            }
        ],
    )

    flow = state_manager.get("trafficFlow")

    flow.append(
        {
            "time": datetime.now().strftime("%H:%M:%S"),
            "event": random.choice(
                [
                    "Credential Attempt",
                    "Authentication Failed",
                    "Password Found",
                    "Login Successful",
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