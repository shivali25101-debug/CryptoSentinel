from state_manager import state_manager

state_manager.update("vpnStatus", "Connected")

state_manager.increment("sentPackets")
state_manager.increment("sentPackets")
state_manager.increment("receivedPackets", 2)

state_manager.append_alert({
    "type": "INFO",
    "message": "VPN Tunnel Established"
})

state = state_manager.get_state()

for key, value in state.items():
    print(f"{key}: {value}")