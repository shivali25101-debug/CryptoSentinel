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
                "scenario": "Normal VPN",
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
                "[MONITOR] No attack running.",
                "[OK] Secure VPN tunnel detected.",
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
            "vm3.attackStatus",
            {
                "scenario": "Weak Password Attack",
                "state": "Running",
                "intercepted": 0,
                "spoofing": "Dictionary Attack",
                "interface": "SSH",
            },
        )

        state_manager.update(
            "vm1.terminal",
            [
                "ubuntu@vm1:~$ login",
                "",
                "[AUTH] Username accepted.",
                "[AUTH] Password verification...",
                "[WARNING] Weak password detected.",
                "",
                "ubuntu@vm1:~$ █",
            ],
        )

        state_manager.update(
            "alerts",
            [
                {
                    "severity": "warning",
                    "message": "Weak password attack simulation started.",
                }
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
                "scenario": "MITM (Unauthorized)",
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
                "[MITM] Launching attack...",
                "[MITM] ARP spoofing started.",
                "[OK] Victim cache poisoned.",
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
                "scenario": "MITM (Authorized)",
                "state": "Running",
                "intercepted": 0,
                "spoofing": "Authorized",
                "interface": "Inspection Gateway",
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
                "scenario": "Shor's Algorithm",
                "state": "Running",
                "intercepted": 0,
                "spoofing": "Quantum",
                "interface": "Quantum Cluster",
            },
        )

        state_manager.update(
            "vm3.terminal",
            [
                "root@quantum:~# shor_attack",
                "",
                "[SHOR] Quantum processor initialized.",
                "[SHOR] Factoring public key...",
                "[OK] Private key recovered.",
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
            "CRYSTALS-Kyber-768",
        )

        state_manager.update(
            "vm1.connection.keyExchange",
            "Kyber KEM",
        )

        state_manager.update(
            "vm3.attackStatus",
            {
                "scenario": "CRYSTALS-Kyber",
                "state": "Protected",
                "intercepted": 0,
                "spoofing": "Blocked",
                "interface": "Kyber KEM",
            },
        )

        state_manager.update(
            "vm3.terminal",
            [
                "root@quantum:~# monitor.py",
                "",
                "[QUANTUM] Launching attack...",
                "[ERROR] Lattice attack failed.",
                "[OK] Kyber session remains secure.",
                "",
                "root@quantum:~# █",
            ],
        )

        state_manager.update(
            "alerts",
            [
                {
                    "severity": "success",
                    "message": "Quantum attack blocked. Kyber session remains secure.",
                }
            ],
        )