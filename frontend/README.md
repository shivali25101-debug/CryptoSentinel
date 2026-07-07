# 🛡️ CryptoSentinel

<p align="center">

### Real-Time Cybersecurity Attack Simulation & Network Visualization Platform

A full-stack cybersecurity simulation platform that demonstrates secure communication, VPN tunneling, Man-in-the-Middle (MITM) attacks, password attacks, and post-quantum cryptography through an interactive real-time dashboard.

</p>

---

## 📸 Preview

<p align="center">
<img src="docs/dashboard.png" width="900">
</p>

---

## 🚀 Features

- 🔴 Real-Time Network Visualization
- 🔐 Secure VPN Communication Simulation
- ⚡ Live Packet Transmission
- 🖥️ Interactive VM Terminals
- 📊 Real-Time Dashboard
- 📡 Live WebSocket Communication
- 📦 Dynamic Packet Statistics
- 📈 Network Traffic Monitoring
- ⚠️ Attack Timeline
- 👨‍💻 Three Interactive Virtual Machines
- 🔒 X25519 Key Exchange
- 🔐 ChaCha20-Poly1305 Encryption
- ⚛️ Shor's Algorithm Demonstration
- 🛡️ CRYSTALS-Kyber Post Quantum Encryption
- 🎯 Multiple Cybersecurity Attack Scenarios

---

# 📖 Overview

CryptoSentinel is a real-time cybersecurity visualization platform built to demonstrate how modern communication protocols behave under different network conditions and attack scenarios.

The platform provides an interactive environment where users can launch different cyber attack simulations and observe their effects through live dashboards, packet visualizations, Linux terminals, traffic monitoring, and network statistics.

The application uses a Python backend with WebSockets to continuously stream live data to a React frontend, providing a realistic monitoring experience.

---

# 🎯 Attack Scenarios

| Scenario | Description |
|-----------|-------------|
| 🟢 Normal VPN | Secure communication between sender and receiver |
| 🔑 Weak Password | Demonstrates authentication vulnerabilities |
| 🔴 MITM Unauthorized | Simulates malicious Man-in-the-Middle attack |
| 🟠 MITM Authorized | Demonstrates controlled packet inspection |
| ⚛️ Shor Algorithm | Simulates quantum attack on classical cryptography |
| 🛡️ Kyber | Demonstrates post-quantum secure communication |

---

# 🖥️ Dashboard

The dashboard provides live monitoring of the simulated network.

### Features

- Live Packet Statistics
- CPU Usage
- Memory Usage
- Network Latency
- Bandwidth Usage
- VPN Status
- Active Scenario
- Attack Timeline
- Traffic Flow
- Runtime Statistics

---

# 🌐 Network Visualization

The visualization page displays the complete network topology.

Features include:

- Sender (VM1)
- Receiver (VM2)
- Attacker (VM3)
- Animated Packet Flow
- Dynamic Connection Paths
- VPN Tunnel Status
- Live Network Statistics
- Attack Visualization
- Scenario Based Animations

---

# 💻 Virtual Machines

## VM1 — Sender

Features

- VPN Connection Status
- Session Information
- Live Linux Terminal
- Packet Queue
- X25519 Key Exchange
- ChaCha20 Encryption

---

## VM2 — Receiver

Features

- Receiver Status
- Authentication Verification
- Integrity Verification
- Live Packet Reception
- Live Linux Terminal
- Packet Decryption

---

## VM3 — Attacker

Features

- Attack Status
- Target Information
- Live Kali Linux Terminal
- Packet Capture
- Packet Forwarding
- MITM Monitoring

---

# ⚙️ Architecture

```
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
 Dashboard       Visualization      VM Pages
```

---

# 🔄 Application Workflow

```
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

# ⚙️ Technology Stack

## Frontend

- React
- Tailwind CSS
- Framer Motion
- React Router
- Lucide Icons
- Context API

---

## Backend

- Python
- AsyncIO
- WebSockets
- JSON
- State Management

---

## Cryptography Concepts

- VPN
- X25519 Key Exchange
- ChaCha20-Poly1305
- CRYSTALS-Kyber
- Shor's Algorithm

---

# 📂 Project Structure

```
CryptoSentinel/

│
├── frontend/
│   ├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   └── App.jsx
│
├── backend/
│   ├── websocket_server.py
│   ├── state.py
│   ├── state_manager.py
│   ├── action_handler.py
│   ├── config.py
│   └── requirements.txt
│
├── docs/
│
└── README.md
```

---

# 📷 Screenshots

## Dashboard

<img src="docs/dashboard.png">

---

## Network Visualization

<img src="docs/network.png">

---

## VM1

<img src="docs/vm1.png">

---

## VM2

<img src="docs/vm2.png">

---

## VM3

<img src="docs/vm3.png">

---

## Attack Scenarios

<img src="docs/scenarios.png">

---

# 📊 Live Features

✔ Live Packet Animation

✔ Real-Time Dashboard

✔ Dynamic Linux Terminals

✔ WebSocket Communication

✔ Live Network Statistics

✔ Packet Queue

✔ Packet Capture

✔ Traffic Monitoring

✔ Attack Timeline

✔ Scenario Switching

---

# 🔧 Installation

## Clone Repository

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

# 🎮 Usage

1. Start the backend server.
2. Launch the React frontend.
3. Open the dashboard.
4. Navigate to the **Attack Scenarios** page.
5. Select any attack scenario.
6. Observe real-time updates across:
   - Dashboard
   - Network Visualization
   - VM1
   - VM2
   - VM3
   - Traffic Flow
   - Attack Timeline

---

# 🚀 Future Improvements

- AI-Based Threat Detection
- Docker Deployment
- Multi-Client Simulation
- IDS/IPS Integration
- Packet Capture Export
- Cloud Deployment
- User Authentication
- Performance Analytics
- Attack Replay Mode
- Multi-Attacker Simulation

---

# 🤝 Contributing

Contributions, feature requests, and improvements are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

---

# 📜 License

This project is licensed under the MIT License.

---

# 👩‍💻 Author

**Shivali Pandey**

Computer Science Student

Cybersecurity & Network Security Enthusiast

---

# 🙏 Acknowledgements

- React
- Tailwind CSS
- Python
- AsyncIO
- WebSockets
- Framer Motion
- Lucide Icons

---

<p align="center">

⭐ If you found this project useful, consider giving it a star!

</p>