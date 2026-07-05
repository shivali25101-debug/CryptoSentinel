# websocket_server.py

import asyncio
import json
import random
import websockets

from state_manager import state_manager
from config import WS_HOST, WS_PORT, UPDATE_INTERVAL


async def update_state():
    count = 0

    while True:

        if count < 5:
            state_manager.update("vpnStatus", "Disconnected")
            state_manager.update("scenario", "Normal")

        elif count < 10:
            state_manager.update("vpnStatus", "Connecting")
            state_manager.update("scenario", "Normal")

        else:
            state_manager.update("vpnStatus", "Connected")
            state_manager.update("scenario", "MITM")

            # Packet Statistics
            state_manager.increment("sentPackets", random.randint(5, 10))
            state_manager.increment("receivedPackets", random.randint(4, 8))
            state_manager.increment("interceptedPackets", random.randint(0, 2))
            state_manager.increment("forwardedPackets", random.randint(3, 7))

            if random.random() < 0.2:
                state_manager.increment("droppedPackets")

            # Network Statistics
            current_bytes = state_manager.get_state()["bytesTransferred"]
            state_manager.update(
                "bytesTransferred",
                current_bytes + random.randint(800, 1800)
            )

            state_manager.update(
                "latency",
                random.randint(8, 20)
            )

            state_manager.update(
                "bandwidth",
                random.randint(80, 120)
            )

            # Random Alerts
            if random.random() < 0.15:
                state_manager.append_alert({
                    "time": count,
                    "message": "Packet Intercepted",
                    "severity": "warning"
                })

            if random.random() < 0.05:
                state_manager.append_alert({
                    "time": count,
                    "message": "MITM Attack Detected",
                    "severity": "critical"
                })

            # Keep only latest 15 alerts
            state_manager.trim_alerts()

        count += 1

        await asyncio.sleep(1)


async def send_state(websocket):
    print("✅ Frontend Connected")

    try:
        while True:
            await websocket.send(
                json.dumps(state_manager.get_state())
            )
            await asyncio.sleep(UPDATE_INTERVAL)

    except websockets.ConnectionClosed:
        print("❌ Frontend Disconnected")


async def main():

    asyncio.create_task(update_state())

    async with websockets.serve(
        send_state,
        WS_HOST,
        WS_PORT,
    ):
        print(f"🚀 WebSocket Server Running at ws://{WS_HOST}:{WS_PORT}")

        await asyncio.Future()


if __name__ == "__main__":
    asyncio.run(main())