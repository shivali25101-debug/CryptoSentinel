from state_manager import state_manager


def handle_action(action):

    state_manager.reset()

    # ---------------- Normal VPN ----------------

    if action == "normal":

        state_manager.update(
            "scenario",
            "Normal VPN"
        )

        state_manager.update(
            "vpnStatus",
            "Connected"
        )

        state_manager.update(
            "senderConnected",
            True
        )

        state_manager.update(
            "receiverConnected",
            True
        )

        state_manager.update(
            "attackerConnected",
            False
        )

        state_manager.update(
            "vm1.connection.status",
            "Connected"
        )

        state_manager.update(
            "vm1.connection.vpn",
            "Active"
        )

        state_manager.append(
            "vm1.terminal",
            "[SUCCESS] Secure VPN tunnel established."
        )

    # ---------------- MITM Authorized ----------------

    elif action == "mitm_authorized":

        state_manager.update(
            "scenario",
            "MITM Authorized"
        )

        state_manager.update(
            "vpnStatus",
            "Connected"
        )

        state_manager.update(
            "senderConnected",
            True
        )

        state_manager.update(
            "receiverConnected",
            True
        )

        state_manager.update(
            "attackerConnected",
            True
        )

        state_manager.append(
            "alerts",
            {
                "severity": "info",
                "message": "Authorized MITM simulation started."
            }
        )

    # ---------------- MITM Unauthorized ----------------

    elif action == "mitm_unauthorized":

        state_manager.update(
            "scenario",
            "MITM Unauthorized"
        )

        state_manager.update(
            "vpnStatus",
            "Connected"
        )

        state_manager.update(
            "senderConnected",
            True
        )

        state_manager.update(
            "receiverConnected",
            True
        )

        state_manager.update(
            "attackerConnected",
            True
        )

        state_manager.append(
            "alerts",
            {
                "severity": "critical",
                "message": "Unauthorized MITM attack detected!"
            }
        )

    # ---------------- Replay ----------------

    elif action == "replay":

        state_manager.update(
            "scenario",
            "Replay Attack"
        )

        state_manager.append(
            "alerts",
            {
                "severity": "warning",
                "message": "Replay attack simulation started."
            }
        )

    # ---------------- Weak Password ----------------

    elif action == "weak_password":

        state_manager.update(
            "scenario",
            "Weak Password"
        )

        state_manager.append(
            "alerts",
            {
                "severity": "warning",
                "message": "Weak password attack started."
            }
        )

    # ---------------- Shor ----------------

    elif action == "shor":

        state_manager.update(
            "scenario",
            "Shor Algorithm"
        )

        state_manager.append(
            "alerts",
            {
                "severity": "critical",
                "message": "Quantum attack simulation started."
            }
        )

    # ---------------- Kyber ----------------

    elif action == "kyber":

        state_manager.update(
            "scenario",
            "Kyber Encryption"
        )

        state_manager.update(
            "vpnStatus",
            "Connected"
        )

        state_manager.append(
            "alerts",
            {
                "severity": "success",
                "message": "Kyber successfully resisted quantum attack."
            }
        )