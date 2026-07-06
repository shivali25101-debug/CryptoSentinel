app_state = {

    # ---------------------------------
    # Current Scenario
    # ---------------------------------

    "scenario": "Normal",

    # VPN

    "vpnStatus": "Disconnected",

    # Connection Status

    "senderConnected": False,
    "receiverConnected": False,
    "attackerConnected": False,

    "simulation": {
    "packet": {
        "id": 1,
        "position": "vm1",
        "status": "encrypted"
    }
},

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

    # Health

    "cpuUsage": 0,
    "memoryUsage": 0,

    # Runtime

    "uptime": "00:00:00",

    # Alerts

    "alerts": [],

    # =====================================================
    # VM1
    # =====================================================

    "vm1": {

        "connection": {

            "status": "Connected",
            "vpn": "Active",
            "ip": "10.0.0.1",
            "encryption": "ChaCha20-Poly1305",
            "keyExchange": "X25519"

        },

        "session": {

            "username": "ubuntu",
            "hostname": "vm1",
            "os": "Ubuntu 24.04",
            "kernel": "Linux 6.x",
            "started": "10:42:31"

        },

        "terminal": [

            "ubuntu@vm1:~$ ./vpn_client",
            "",
            "[INFO] Starting VPN client...",
            "[INFO] Initializing secure tunnel...",
            "[INFO] Performing X25519 key exchange...",
            "[SUCCESS] Shared secret established.",
            "[INFO] Initializing ChaCha20-Poly1305 session...",
            "[SUCCESS] Encryption enabled.",
            "",
            "[TX] Packet #231 encrypted.",
            "[TX] Packet #232 encrypted.",
            "[TX] Sending packet to 10.0.0.2...",
            "[SUCCESS] Packet delivered.",
            "",
            "ubuntu@vm1:~$ █"

        ],

        "queue": [

            {
                "id": 231,
                "protocol": "UDP",
                "status": "Encrypted"
            },

            {
                "id": 232,
                "protocol": "UDP",
                "status": "Sent"
            },

            {
                "id": 233,
                "protocol": "UDP",
                "status": "Waiting"
            },

            {
                "id": 234,
                "protocol": "TCP",
                "status": "Queued"
            }

        ]

    },

    # =====================================================
    # VM2
    # =====================================================

    "vm2": {

        "receiverStatus": {

            "status": "Receiving",
            "vpn": "Connected",
            "port": "5000",
            "integrity": "Passed",
            "authentication": "Verified"

        },

        "session": {

            "username": "ubuntu",
            "hostname": "vm2",
            "os": "Ubuntu 24.04",
            "kernel": "Linux 6.x",
            "started": "10:42:31"

        },

        "terminal": [

            "ubuntu@vm2:~$ ./receiver",
            "",
            "[INFO] Waiting for encrypted packets...",
            "[INFO] Tunnel established.",
            "[RX] Packet #231 received.",
            "[INFO] Verifying authentication tag...",
            "[SUCCESS] Integrity verified.",
            "[INFO] Decrypting using ChaCha20-Poly1305...",
            "[SUCCESS] Message decrypted.",
            "[OUTPUT] Hello from VM1",
            "",
            "ubuntu@vm2:~$ █"

        ],

        "packets": [

            {
                "id": 231,
                "protocol": "UDP",
                "status": "Decrypted"
            },

            {
                "id": 232,
                "protocol": "UDP",
                "status": "Verified"
            },

            {
                "id": 233,
                "protocol": "TCP",
                "status": "Received"
            }

        ]

    },

    # =====================================================
    # VM3
    # =====================================================

    "vm3": {

        "attackStatus": {

            "scenario": "MITM Attack",
            "state": "Running",
            "intercepted": 238,
            "spoofing": "Enabled",
            "interface": "eth0"

        },

        "targetInfo": {

            "target1": "10.0.0.1",
            "target2": "10.0.0.2",
            "gateway": "10.0.0.254",
            "tool": "Scapy",
            "privilege": "Root"

        },

        "terminal": [

            "root@kali:~# python3 mitm.py",
            "",
            "[INFO] Initializing attack...",
            "[INFO] Enabling IP forwarding...",
            "[SUCCESS] IP forwarding enabled.",
            "[INFO] Starting ARP spoofing...",
            "[SUCCESS] Victim ARP cache poisoned.",
            "[CAPTURE] Packet #231 intercepted",
            "[CAPTURE] Packet #232 intercepted",
            "[FORWARD] Forwarding packet to VM2",
            "[INFO] Monitoring traffic...",
            "",
            "root@kali:~# █"

        ],

        "capturedPackets": [

            {
                "id": 231,
                "protocol": "UDP",
                "action": "Captured"
            },

            {
                "id": 232,
                "protocol": "UDP",
                "action": "Forwarded"
            },

            {
                "id": 233,
                "protocol": "TCP",
                "action": "Captured"
            }

        ],
        "simulation": {
    "packet": {
        "id": 0,
        "position": "vm1",
        "status": "idle",
        "color": "cyan",
    }
},

    }

}