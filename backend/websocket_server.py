import asyncio
import json
import websockets

from state_manager import state_manager
from config import WS_HOST, WS_PORT, UPDATE_INTERVAL
from action_handler import handle_action

from scenarios import (
    normal,
    weak_password,
    mitm_unauthorized,
    mitm_authorized,
    shor,
    kyber,
)


async def update_state():

    uptime = 0

    while True:

        
        scenario = state_manager.get("scenario")
        print("Current Scenario:", scenario)

        if scenario == "normal":
            normal.update(state_manager)

        elif scenario == "weak_password":
            from scenarios import weak_password
            weak_password.update(state_manager)

        elif scenario == "mitm_unauthorized":
            from scenarios import mitm_unauthorized
            mitm_unauthorized.update(state_manager)

        elif scenario == "mitm_authorized":
            from scenarios import mitm_authorized
            mitm_authorized.update(state_manager)

        elif scenario == "shor":
            from scenarios import shor
            shor.update(state_manager)

        elif scenario == "kyber":
            from scenarios import kyber
            kyber.update(state_manager)

        uptime += 1

        hrs = uptime // 3600
        mins = (uptime % 3600) // 60
        secs = uptime % 60

        state_manager.update(
            "uptime",
            f"{hrs:02}:{mins:02}:{secs:02}",
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
                    handle_action(data["action"])

            except asyncio.TimeoutError:
                pass

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
        print(
            f"🚀 WebSocket running at ws://{WS_HOST}:{WS_PORT}"
        )
        await asyncio.Future()


if __name__ == "__main__":
    asyncio.run(main())
