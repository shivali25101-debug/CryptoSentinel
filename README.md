# 🛡️ CryptoSentinel

> **A Real-Time Cybersecurity Attack Simulation & Network Visualization Platform**

CryptoSentinel is a full-stack cybersecurity simulation platform that demonstrates secure communication, VPN tunneling, Man-in-the-Middle (MITM) attacks, password attacks, and post-quantum cryptography through an interactive real-time dashboard.

---

# 📌 Table of Contents

- Overview
- Features
- Attack Scenarios
- Project Architecture
- Technology Stack
- Project Structure
- Screenshots
- Installation
- Usage
- Future Scope
- License

---

# 📖 Overview

CryptoSentinel provides an interactive environment for understanding how modern secure communication works under different cybersecurity scenarios.

The application allows users to launch different attack simulations and instantly observe their effects across multiple pages including:

- Dashboard
- Network Visualization
- VM1 (Sender)
- VM2 (Receiver)
- VM3 (Attacker)
- Traffic Flow
- Attack Timeline

The backend continuously streams live data to the frontend using WebSockets, creating a real-time monitoring experience.

---

# 🚀 Features

- ✅ Real-Time Dashboard
- ✅ Live Network Visualization
- ✅ Interactive Attack Simulations
- ✅ WebSocket-Based Live Updates
- ✅ Three Interactive Virtual Machines
- ✅ Live Linux Terminal Simulation
- ✅ Packet Queue Visualization
- ✅ Packet Capture Monitoring
- ✅ Traffic Flow Monitoring
- ✅ Attack Timeline
- ✅ VPN Tunnel Simulation
- ✅ X25519 Key Exchange
- ✅ ChaCha20-Poly1305 Encryption
- ✅ Shor's Algorithm Simulation
- ✅ CRYSTALS-Kyber Post-Quantum Encryption

---

# 🎯 Attack Scenarios

## 🟢 Normal VPN

- Secure VPN tunnel established
- Direct communication between sender and receiver
- Encrypted packet transfer

---

## 🔑 Weak Password

- Simulates weak credential authentication
- Demonstrates password-based vulnerabilities

---

## 🔴 MITM (Unauthorized)

- ARP Spoofing
- Packet Interception
- Packet Forwarding
- Live Kali Linux Monitoring

---

## 🟠 MITM (Authorized)

- Controlled packet inspection
- Secure traffic analysis
- Network monitoring demonstration

---

## ⚛️ Shor Algorithm

- Demonstrates quantum attacks on classical cryptography
- Simulated ECC key recovery

---

## 🛡️ CRYSTALS-Kyber

- Post-Quantum Cryptography
- Secure communication against quantum attacks

---

# 🖥️ Dashboard

The dashboard displays live system information including:

- Packet Statistics
- Network Bandwidth
- Network Latency
- CPU Usage
- Memory Usage
- VPN Status
- Active Scenario
- Runtime
- Alerts

---

# 🌐 Network Visualization

Interactive network topology displaying

- VM1 (Sender)
- VM2 (Receiver)
- VM3 (Attacker)
- Animated Packet Flow
- VPN Tunnel
- Live Packet Movement
- Scenario-Based Connections

---

# 💻 Virtual Machines

## VM1 — Sender

- VPN Connection
- Session Information
- Live Linux Terminal
- Packet Queue
- Encryption Status
- X25519 Key Exchange

---

## VM2 — Receiver

- Receiver Status
- Authentication Verification
- Packet Reception
- Live Linux Terminal
- Packet Decryption

---

## VM3 — Attacker

- Attack Status
- Target Information
- Kali Linux Terminal
- Packet Capture
- Packet Forwarding
- MITM Monitoring

---

# 🏗️ Project Architecture

```text
                    React Frontend
                           │
                           │
                    WebSocket API
                           │
                           │
                    Python Backend
                           │
                    State Manager
                           │
     ┌──────────────┬──────────────┬──────────────┐
     │              │              │
 Dashboard     Visualization      VM Pages
```

---

# 🔄 Application Workflow

```text
User Selects Scenario
          │
          ▼
Frontend Sends Action
          │
          ▼
WebSocket Server
          │
          ▼
Action Handler
          │
          ▼
State Manager Updates
          │
          ▼
Live State Broadcast
          │
          ▼
Frontend Updates Instantly
```

---

# 🛠️ Technology Stack

## Frontend

- React
- Tailwind CSS
- React Router
- Framer Motion
- Context API
- Lucide React

## Backend

- Python
- AsyncIO
- WebSockets
- JSON

## Cryptography

- X25519
- ChaCha20-Poly1305
- CRYSTALS-Kyber
- Shor's Algorithm

---

# 📂 Project Structure

```text
CryptoSentinel
│
├── backend
│   ├── websocket_server.py
│   ├── action_handler.py
│   ├── state_manager.py
│   ├── state.py
│   ├── config.py
│   └── requirements.txt
│
├── frontend
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── context
│   │   ├── hooks
│   │   ├── pages
│   │   └── App.jsx
│   └── package.json
│
├── docs
│
└── README.md
```

---

# 📸 Screenshots

Replace these with your own screenshots.

## Dashboard

![Dashboard](docs/dashboard.png)

---

## Network Visualization

![Visualization](docs/network.png)

---

## VM1

![VM1](docs/vm1.png)

---

## VM2

![VM2](docs/vm2.png)

---

## VM3

![VM3](docs/vm3.png)

---

## Attack Scenarios

![Scenarios](docs/scenarios.png)

---

# ⚡ Live Features

- Live Packet Animation
- Real-Time Dashboard
- Dynamic Linux Terminal Updates
- WebSocket Communication
- Packet Queue
- Packet Capture
- Traffic Flow
- Attack Timeline
- Scenario Switching
- Live Statistics

---

# ⚙️ Installation

## Clone the repository

```bash
git clone https://github.com/yourusername/CryptoSentinel.git
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Backend

```bash
cd backend

pip install -r requirements.txt

python websocket_server.py
```

---

# ▶️ Usage

1. Start the backend server.
2. Start the frontend.
3. Open the application.
4. Navigate to **Attack Scenarios**.
5. Select any attack scenario.
6. Observe live updates across:
   - Dashboard
   - Network Visualization
   - VM1
   - VM2
   - VM3
   - Traffic Flow
   - Attack Timeline

---

# 🔮 Future Scope

- AI-Based Threat Detection
- Docker Deployment
- IDS/IPS Integration
- Packet Capture Export
- Cloud Deployment
- Multi-Client Support
- User Authentication
- Attack Replay Mode
- Multi-Attacker Simulation

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👩‍💻 Author

**Shivali Pandey**

Computer Science Student

Cybersecurity & Network Security Enthusiast

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
