from state_manager import state_manager


def handle_action(action):

    state_manager.reset()

    # =====================================================
    # NORMAL VPN
    # =====================================================

    if action == "normal":

        state_manager.update("scenario", "normal")
        state_manager.update("vpnStatus", "Connected")

        state_manager.update("senderConnected", True)
        state_manager.update("receiverConnected", True)
        state_manager.update("attackerConnected", False)

        state_manager.update("vm1.connection.vpn", "Active")
        state_manager.update("vm2.receiverStatus.vpn", "Connected")

        state_manager.update(
            "vm3.attackStatus",
            {
                "scenario": "Idle",
                "state": "Stopped",
                "intercepted": 0,
                "spoofing": "Disabled",
                "interface": "eth0",
            },
        )

        state_manager.update(
            "vm3.terminal",
            [
                "root@kali:~#",
                "",
                "[INFO] No attack running.",
                "[INFO] Network is secure.",
                "",
                "root@kali:~# █",
            ],
        )

        state_manager.update(
            "alerts",
            [
                {
                    "severity": "success",
                    "message": "Secure VPN communication started.",
                }
            ],
        )

    # =====================================================
    # WEAK PASSWORD
    # =====================================================

    elif action == "weak_password":

        state_manager.update("scenario", "weak_password")
        state_manager.update("vpnStatus", "Connected")

        state_manager.update("senderConnected", True)
        state_manager.update("receiverConnected", True)
        state_manager.update("attackerConnected", False)

        state_manager.update(
            "alerts",
            [
                {
                    "severity": "warning",
                    "message": "Weak password attack simulation started.",
                }
            ],
        )

        state_manager.update(
            "vm1.terminal",
            [
                "ubuntu@vm1:~$ login",
                "",
                "[INFO] Authenticating...",
                "[WARNING] Weak password detected.",
                "[INFO] Sending credentials...",
                "",
                "ubuntu@vm1:~$ █",
            ],
        )

    # =====================================================
    # MITM UNAUTHORIZED
    # =====================================================

    elif action == "mitm_unauthorized":

        state_manager.update("scenario", "mitm_unauthorized")
        state_manager.update("vpnStatus", "Connected")

        state_manager.update("senderConnected", True)
        state_manager.update("receiverConnected", True)
        state_manager.update("attackerConnected", True)

        state_manager.update(
            "vm3.attackStatus",
            {
                "scenario": "MITM Attack",
                "state": "Running",
                "intercepted": 0,
                "spoofing": "Enabled",
                "interface": "eth0",
            },
        )

        state_manager.update(
            "vm3.terminal",
            [
                "root@kali:~# python3 mitm.py",
                "",
                "[INFO] Starting attack...",
                "[INFO] ARP Spoofing...",
                "[SUCCESS] Victim poisoned.",
                "",
                "root@kali:~# █",
            ],
        )

        state_manager.update(
            "alerts",
            [
                {
                    "severity": "critical",
                    "message": "Unauthorized MITM attack detected.",
                }
            ],
        )

    # =====================================================
    # MITM AUTHORIZED
    # =====================================================

    elif action == "mitm_authorized":

        state_manager.update("scenario", "mitm_authorized")
        state_manager.update("vpnStatus", "Connected")

        state_manager.update("senderConnected", True)
        state_manager.update("receiverConnected", True)
        state_manager.update("attackerConnected", True)

        state_manager.update(
            "vm3.attackStatus",
            {
                "scenario": "Authorized Inspection",
                "state": "Running",
                "intercepted": 0,
                "spoofing": "Authorized",
                "interface": "eth0",
            },
        )

        state_manager.update(
            "alerts",
            [
                {
                    "severity": "info",
                    "message": "Authorized traffic inspection enabled.",
                }
            ],
        )

    # =====================================================
    # SHOR
    # =====================================================

    elif action == "shor":

        state_manager.update("scenario", "shor")
        state_manager.update("vpnStatus", "Connected")

        state_manager.update("senderConnected", True)
        state_manager.update("receiverConnected", True)
        state_manager.update("attackerConnected", True)

        state_manager.update(
            "vm3.attackStatus",
            {
                "scenario": "Quantum Attack",
                "state": "Running",
                "intercepted": 0,
                "spoofing": "Quantum",
                "interface": "Quantum",
            },
        )

        state_manager.update(
            "vm3.terminal",
            [
                "root@quantum:~# shor_attack",
                "",
                "[INFO] Initializing quantum computer...",
                "[INFO] Factoring ECC key...",
                "[SUCCESS] Private key recovered.",
                "",
                "root@quantum:~# █",
            ],
        )

        state_manager.update(
            "alerts",
            [
                {
                    "severity": "critical",
                    "message": "Shor algorithm compromised X25519.",
                }
            ],
        )

    # =====================================================
    # KYBER
    # =====================================================

    elif action == "kyber":

        state_manager.update("scenario", "kyber")
        state_manager.update("vpnStatus", "Connected")

        state_manager.update("senderConnected", True)
        state_manager.update("receiverConnected", True)
        state_manager.update("attackerConnected", False)

        state_manager.update(
             "vm1.connection.encryption",
              "CRYSTALS-Kyber-768"
        )

        state_manager.update(
             "vm1.connection.keyExchange",
             "Kyber KEM"
        )

        state_manager.update(
            "alerts",
            [
                {
                    "severity": "success",
                    "message": "Kyber secure tunnel established.",
                }
            ],
        )