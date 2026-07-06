import asyncio
import json
import random
import websockets

from state_manager import state_manager
from config import WS_HOST, WS_PORT, UPDATE_INTERVAL
from action_handler import handle_action


async def update_state():

    uptime = 0

    while True:

        # =====================================================
        # Packet Statistics
        # =====================================================

        state_manager.increment(
            "sentPackets",
            random.randint(5, 10),
        )

        state_manager.increment(
            "receivedPackets",
            random.randint(4, 8),
        )

        state_manager.increment(
            "interceptedPackets",
            random.randint(0, 2),
        )

        state_manager.increment(
            "forwardedPackets",
            random.randint(3, 7),
        )

        if random.random() < 0.20:
            state_manager.increment(
                "droppedPackets"
            )

        # =====================================================
        # LIVE PACKET POSITION
        # =====================================================

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

        # =====================================================
        # Network
        # =====================================================

        current = state_manager.get(
            "bytesTransferred"
        )

        state_manager.update(
            "bytesTransferred",
            current + random.randint(1000, 3000),
        )

        state_manager.update(
            "latency",
            random.randint(8, 25),
        )

        state_manager.update(
            "bandwidth",
            random.randint(80, 120),
        )

        # =====================================================
        # Health
        # =====================================================

        state_manager.update(
            "cpuUsage",
            random.randint(15, 55),
        )

        state_manager.update(
            "memoryUsage",
            random.randint(30, 70),
        )

        uptime += 1

        hrs = uptime // 3600
        mins = (uptime % 3600) // 60
        secs = uptime % 60

        state_manager.update(
            "uptime",
            f"{hrs:02}:{mins:02}:{secs:02}",
        )

        # =====================================================
        # VM1
        # =====================================================

        if random.random() < 0.35:

            packet_id = state_manager.get(
                "sentPackets"
            )

            terminal = state_manager.get(
                "vm1.terminal"
            )

            terminal.insert(
                -1,
                f"[TX] Packet #{packet_id} encrypted."
            )

            if len(terminal) > 25:
                terminal = terminal[-25:]

            state_manager.update(
                "vm1.terminal",
                terminal,
            )

            queue = state_manager.get(
                "vm1.queue"
            )

            queue.append(
                {
                    "id": packet_id,
                    "protocol": random.choice(
                        ["UDP", "TCP"]
                    ),
                    "status": random.choice(
                        [
                            "Queued",
                            "Encrypted",
                            "Sent",
                        ]
                    ),
                }
            )

            if len(queue) > 10:
                queue = queue[-10:]

            state_manager.update(
                "vm1.queue",
                queue,
            )

        # =====================================================
        # VM2
        # =====================================================

        if random.random() < 0.35:

            packet_id = state_manager.get(
                "sentPackets"
            )

            terminal = state_manager.get(
                "vm2.terminal"
            )

            terminal.insert(
                -1,
                f"[RX] Packet #{packet_id} received."
            )

            if len(terminal) > 25:
                terminal = terminal[-25:]

            state_manager.update(
                "vm2.terminal",
                terminal,
            )

            packets = state_manager.get(
                "vm2.packets"
            )

            packets.append(
                {
                    "id": packet_id,
                    "protocol": random.choice(
                        ["UDP", "TCP"]
                    ),
                    "status": random.choice(
                        [
                            "Received",
                            "Verified",
                            "Decrypted",
                        ]
                    ),
                }
            )

            if len(packets) > 10:
                packets = packets[-10:]

            state_manager.update(
                "vm2.packets",
                packets,
            )

        # =====================================================
        # VM3
        # =====================================================

        if random.random() < 0.35:

            packet_id = state_manager.get(
                "interceptedPackets"
            )

            terminal = state_manager.get(
                "vm3.terminal"
            )

            terminal.insert(
                -1,
                f"[CAPTURE] Packet #{packet_id} intercepted"
            )

            terminal.insert(
                -1,
                "[FORWARD] Forwarding packet to VM2"
            )

            if len(terminal) > 25:
                terminal = terminal[-25:]

            state_manager.update(
                "vm3.terminal",
                terminal,
            )

            captured = state_manager.get(
                "vm3.capturedPackets"
            )

            captured.append(
                {
                    "id": packet_id,
                    "protocol": random.choice(
                        ["UDP", "TCP"]
                    ),
                    "action": random.choice(
                        [
                            "Captured",
                            "Forwarded",
                        ]
                    ),
                }
            )

            if len(captured) > 10:
                captured = captured[-10:]

            state_manager.update(
                "vm3.capturedPackets",
                captured,
            )

        # =====================================================
        # Alerts
        # =====================================================

        if random.random() < 0.10:

            state_manager.append(
                "alerts",
                {
                    "severity": "warning",
                    "message": "Packet Intercepted",
                },
            )

        if random.random() < 0.05:

            state_manager.append(
                "alerts",
                {
                    "severity": "critical",
                    "message": "MITM Attack Detected",
                },
            )

        state_manager.trim(
            "alerts",
            15,
        )

        await asyncio.sleep(1)

async def send_state(websocket):

    print("✅ Frontend Connected")

    try:

        while True:

            try:

                message = await asyncio.wait_for(
                    websocket.recv(),
                    timeout=0.01,
                )

                data = json.loads(message)

                if "action" in data:

                    handle_action(
                        data["action"]
                    )

            except asyncio.TimeoutError:

                pass

            await websocket.send(

                json.dumps(
                    state_manager.get_state()
                )

            )

            await asyncio.sleep(
                UPDATE_INTERVAL
            )

    except websockets.ConnectionClosed:

        print("❌ Frontend Disconnected")


async def main():

    asyncio.create_task(
        update_state()
    )

    async with websockets.serve(

        send_state,
        WS_HOST,
        WS_PORT,

    ):

        print(
            f"🚀 WebSocket running at ws://{WS_HOST}:{WS_PORT}"
        )

        await asyncio.Future()


if __name__ == "__main__":
    asyncio.run(main())