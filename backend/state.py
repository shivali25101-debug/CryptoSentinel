app_state = {

    # Current attack scenario
    "scenario": "Normal",

    # VPN
    "vpnStatus": "Disconnected",

    # Connection Status
    "senderConnected": False,
    "receiverConnected": False,
    "attackerConnected": False,

    # Packet Statistics
    "sentPackets": 0,
    "receivedPackets": 0,
    "interceptedPackets": 0,
    "droppedPackets": 0,
    "forwardedPackets": 0,

    # Network
    "bytesTransferred": 0,
    "latency": 0,
    "bandwidth": 0,

    # System Health
    "cpuUsage": 0,
    "memoryUsage": 0,

    # Runtime
    "uptime": "00:00:00",

    # Alerts
    "alerts": []
}