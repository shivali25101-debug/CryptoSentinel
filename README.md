<div align="center">

# 🛡️ CryptoSentinel

### **A Real-Time Cybersecurity Visualization Platform**

*Interactive simulation of secure communication, cyber attacks, VPN tunneling, and post-quantum cryptography using real-time visualization.*

<br>

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF?style=for-the-badge&logo=vite)
![Python](https://img.shields.io/badge/Python-Backend-3776AB?style=for-the-badge&logo=python)
![WebSocket](https://img.shields.io/badge/WebSocket-Real--Time-000000?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)

</div>

---

# 📖 Overview

**CryptoSentinel** is a **full-stack cybersecurity visualization platform** developed to demonstrate secure communication protocols, attack simulations, and post-quantum cryptography through an interactive real-time dashboard.

The application combines a **React + Vite frontend** with a **Python backend** connected through **WebSockets**, enabling live synchronization of network statistics, packet transmission, terminal outputs, alerts, and attack events.

Rather than explaining cybersecurity concepts theoretically, CryptoSentinel allows users to **observe the entire communication lifecycle visually**, making complex networking and security concepts much easier to understand.

---

# ✨ Key Features

## 🔐 Secure Communication

- VPN Tunnel Simulation
- Secure Packet Transmission
- ChaCha20-Poly1305 Encryption
- X25519 Key Exchange
- Authentication Verification
- End-to-End Communication Flow

---

## ⚔ Cyber Attack Simulations

CryptoSentinel currently supports six interactive scenarios:

- 🔐 Normal VPN Communication
- 🔑 Weak Password Attack
- 🚨 Man-in-the-Middle (Unauthorized)
- 🛡️ Man-in-the-Middle (Authorized)
- ⚛️ Shor's Algorithm (Quantum Attack)
- 🔷 CRYSTALS-Kyber (Post-Quantum Cryptography)

Each scenario dynamically updates the entire application, including:

- Dashboard
- Network Visualization
- Virtual Machine Terminals
- Packet Flow
- Alerts
- Reports
- System Health
- Network Statistics

---

## 💻 Virtual Machine Simulation

The project simulates three independent machines:

### 🖥️ VM1 — Sender

- VPN Client
- Packet Encryption
- Session Information
- Connection Status
- Packet Queue
- Live Linux Terminal

### 🖥️ VM2 — Receiver

- Packet Reception
- Authentication Verification
- Packet Decryption
- Received Packet History
- Session Information
- Live Linux Terminal

### 🖥️ VM3 — Attacker

- Kali Linux Environment
- Attack Status
- Target Information
- Packet Capture
- Live Attack Terminal
- Captured Packet Analysis

---

## 📊 Monitoring Modules

The platform continuously monitors:

- 📦 Packet Statistics
- 🌐 Network Topology
- 📈 Traffic Flow
- ⚡ Live Network Visualization
- 📜 Attack Timeline
- 🚨 Security Alerts
- 📑 Reports
- ❤️ System Health
- 📡 VPN Status
- 🔄 Real-Time Metrics

---

# 🛠️ Tech Stack

## Frontend

- React 19
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React
- Context API
- Custom Hooks
- WebSocket API

---

## Backend

- Python
- asyncio
- websockets
- JSON
- Custom State Manager
- Event-Based Architecture

---

## Cybersecurity Concepts

- VPN
- Packet Routing
- Network Topology
- Authentication
- Encryption
- X25519 Key Exchange
- ChaCha20-Poly1305
- ARP Spoofing
- Man-in-the-Middle Attack
- Weak Password Attack
- Quantum Computing
- Shor's Algorithm
- CRYSTALS-Kyber
- Post-Quantum Cryptography

---

# ⭐ Highlights

- ✅ Real-Time WebSocket Communication
- ✅ Interactive Cybersecurity Demonstrations
- ✅ Live Linux Terminal Simulation
- ✅ Dynamic Network Visualization
- ✅ Modular React Component Architecture
- ✅ Scenario-Based Attack Simulation
- ✅ Modern Responsive UI
- ✅ Educational Cybersecurity Platform

---
# 📸 Application Walkthrough

The following screenshots provide a guided tour of CryptoSentinel. Each page is designed to demonstrate a different aspect of secure communication, cyber attack simulation, and real-time monitoring.

> **Note:** Replace the image paths with your actual screenshots. Store all screenshots inside a `screenshots/` folder in the project root.

---

# 🏠 Dashboard

<p align="center">
<img src="screenshots/Dashboard.png" width="90%">
</p>

The Dashboard acts as the command center of CryptoSentinel, providing a live overview of network activity and system status.

### Features
- Live packet statistics
- VPN connection status
- Real-time traffic monitoring
- Security alerts
- Key exchange information
- Connection topology
- Network metrics

---

# ⚔ Attack Scenarios

<p align="center">
<img src="screenshots/Scenarios.png" width="90%">
</p>

Select from six cybersecurity scenarios. Choosing any scenario immediately updates the backend state and synchronizes all application pages in real time.

### Available Scenarios

- Normal VPN Communication
- Weak Password Attack
- MITM (Unauthorized)
- MITM (Authorized)
- Shor's Algorithm
- CRYSTALS-Kyber

---

# 🔐 Normal VPN

<p align="center">
<img src="screenshots/NormalVPN.png" width="90%">
</p>

Demonstrates secure communication through an encrypted VPN tunnel using authenticated key exchange and modern encryption techniques.

### Demonstrates

- Secure VPN Tunnel
- Encrypted Communication
- Packet Authentication
- Secure Routing

---

# 🔑 Weak Password Attack

<p align="center">
<img src="screenshots/WeakPassword.png" width="90%">
</p>

Illustrates how weak credentials compromise system security and why strong authentication practices are essential.

### Demonstrates

- Weak Authentication
- Credential Compromise
- Security Risks
- Login Simulation

---

# 🚨 MITM (Unauthorized)

<p align="center">
<img src="screenshots/MitmUnauthorized.png" width="90%">
</p>

Simulates a malicious Man-in-the-Middle attack where packets are intercepted using ARP spoofing before being forwarded to the destination.

### Demonstrates

- ARP Spoofing
- Packet Interception
- Traffic Monitoring
- Attack Detection

---

# 🛡 MITM (Authorized)

<p align="center">
<img src="screenshots/MitmAuthorised.png" width="90%">
</p>

Represents legitimate traffic inspection performed by trusted enterprise security systems while maintaining secure communication.

### Demonstrates

- Authorized Inspection
- Enterprise Monitoring
- Secure Traffic Analysis
- Controlled Packet Inspection

---

# ⚛ Shor's Algorithm

<p align="center">
<img src="screenshots/ShorsAlgorithm.png" width="90%">
</p>

Demonstrates the theoretical impact of quantum computing on classical public-key cryptography and future cybersecurity challenges.

### Demonstrates

- Quantum Computing
- ECC Vulnerability
- Public Key Compromise
- Future Threats

---

# 🔷 CRYSTALS-Kyber

<p align="center">
<img src="screenshots/Kyber.png" width="90%">
</p>

Illustrates post-quantum secure communication using the CRYSTALS-Kyber Key Encapsulation Mechanism.

### Demonstrates

- Post-Quantum Cryptography
- Quantum Resistant Encryption
- Secure Key Exchange
- Future Secure Communication

---

# 🌐 Network Topology

<p align="center">
<img src="screenshots/NetworkTopology.png" width="90%">
</p>

Visualizes the logical network architecture consisting of the sender, receiver, attacker, and communication links.

### Features

- Interactive Topology
- Node Status
- Connection Lines
- Network Layout

---

# ⚡ Network Visualization

<p align="center">
<img src="screenshots/Visualization.png" width="90%">
</p>

Displays animated packet movement across the network while continuously updating latency, bandwidth, attack timeline, and traffic flow.

### Features

- Animated Packets
- Live Traffic Flow
- Attack Timeline
- Bandwidth Monitoring
- Latency Monitoring

---

# 💻 VM1 — Sender

<p align="center">
<img src="screenshots/Vm1.png" width="90%">
</p>

Represents the sender machine responsible for encrypting and transmitting packets through the VPN tunnel.

### Features

- Live Linux Terminal
- Connection Information
- Session Details
- Packet Queue

---

# 📥 VM2 — Receiver

<p align="center">
<img src="screenshots/Vm2.png" width="90%">
</p>

Represents the receiving machine responsible for authentication, integrity verification, and decryption of incoming packets.

### Features

- Live Terminal
- Receiver Status
- Packet History
- Session Information

---

# 🐉 VM3 — Attacker

<p align="center">
<img src="screenshots/Vm3.png" width="90%">
</p>

Represents the Kali Linux attacker machine performing packet interception and attack simulation.

### Features

- Attack Status
- Target Information
- Captured Packets
- Live Attack Terminal

---

# 📦 Packet Monitor

<p align="center">
<img src="screenshots/PacketMonitor.png" width="90%">
</p>

Displays detailed information for packets travelling across the simulated network, including protocol, status, and transmission history.

### Features

- Packet List
- Packet Details
- Protocol Information
- Transmission Status

---

# 📊 Reports

<p align="center">
<img src="screenshots/Reports.png" width="90%">
</p>

Summarizes network activity and security events through generated reports for easier analysis and monitoring.

### Features

- Report History
- Current Report
- Statistics
- Historical Data

---

# ❤️ System Health

<p align="center">
<img src="screenshots/SystemHealth.png" width="90%">
</p>

Continuously monitors system resources and virtual machine health during simulation.

### Features

- CPU Usage
- Memory Usage
- VPN Health
- VM Status

---

# ⚙ Settings

<p align="center">
<img src="screenshots/Settings.png" width="90%">
</p>

Provides application configuration options and simulation preferences for the user.

---

# ℹ About

<p align="center">
<img src="screenshots/About.png" width="90%">
</p>

Contains information about the project, objectives, technologies used, acknowledgements, and development details.

---
# 🏗️ System Architecture

CryptoSentinel follows a modular client-server architecture where the frontend and backend communicate continuously through WebSockets.

```
                    +-------------------------+
                    |      React Frontend     |
                    |-------------------------|
                    | Dashboard               |
                    | Scenario Pages          |
                    | Network Visualization   |
                    | VM1                     |
                    | VM2                     |
                    | VM3                     |
                    | Reports                 |
                    | Packet Monitor          |
                    | System Health           |
                    +-----------+-------------+
                                |
                          WebSocket API
                                |
                    +-----------v-------------+
                    |      Python Backend     |
                    |-------------------------|
                    | State Manager           |
                    | Action Handler          |
                    | Scenario Manager        |
                    | WebSocket Server        |
                    +-----------+-------------+
                                |
                         Shared Application State
                                |
      ---------------------------------------------------------
      |             |               |               |          |
      VM1          VM2            VM3         Dashboard   Visualization
```

---

# 🔄 Application Workflow

The entire application follows a real-time event-driven workflow.

```
User Selects Scenario
          │
          ▼
Frontend sends Action
          │
          ▼
Python WebSocket Server
          │
          ▼
Action Handler
          │
          ▼
State Manager Updates Global State
          │
          ▼
WebSocket Broadcast
          │
          ▼
React Context Receives Updated State
          │
          ▼
Every Page Updates Automatically
```

---

# ⚙ Real-Time Synchronization

Whenever a scenario is selected:

- Backend resets the previous simulation.
- Scenario-specific values are initialized.
- Packet statistics begin updating.
- Live terminals receive new log entries.
- Network visualization animates packets.
- Alerts are generated dynamically.
- Reports update automatically.
- Traffic flow changes instantly.
- System health reflects current activity.

All updates occur without refreshing the application.

---

# 📂 Frontend Structure

```
frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │
│   ├── context/
│   │     └── DataContext.jsx
│   │
│   ├── data/
│   │
│   ├── hooks/
│   │
│   ├── layouts/
│   │
│   ├── pages/
│   │     ├── Dashboard/
│   │     ├── Overview/
│   │     ├── Scenarios/
│   │     ├── Visualization/
│   │     ├── NetworkTopology/
│   │     ├── PacketMonitor/
│   │     ├── Reports/
│   │     ├── SystemHealth/
│   │     ├── Vm1/
│   │     ├── Vm2/
│   │     ├── Vm3/
│   │     ├── Settings/
│   │     └── About/
│   │
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── vite.config.js
```

---

# 📂 Backend Structure

```
backend/
│
├── scenarios/
│   ├── normal.py
│   ├── weak_password.py
│   ├── mitm_authorized.py
│   ├── mitm_unauthorized.py
│   ├── shor.py
│   └── kyber.py
│
├── action_handler.py
├── websocket_server.py
├── state_manager.py
├── state.py
├── models.py
├── config.py
├── main.py
└── requirements.txt
```

---

# 🧩 Major Frontend Modules

### Dashboard
Displays live network statistics, VPN status, traffic information, alerts, and connection topology.

### Scenario Engine
Allows users to switch between six cybersecurity simulations.

### Network Visualization
Animates packet transmission while displaying latency, bandwidth, attack timeline, and traffic flow.

### Virtual Machines
Simulates three Linux systems:

- VM1 (Sender)
- VM2 (Receiver)
- VM3 (Attacker)

Each VM maintains its own live terminal, session data, and packet information.

### Reports
Generates simulation summaries and historical reports.

### Packet Monitor
Tracks packet transmission, protocol, and status.

### System Health
Displays CPU usage, memory usage, VPN health, and virtual machine status.

---

# 🧠 Backend Modules

### State Manager

Maintains the application's global state and provides methods for updating nested values, counters, alerts, packet queues, and simulation data.

---

### Action Handler

Receives actions from the frontend and initializes the selected cybersecurity scenario.

---

### WebSocket Server

Provides continuous bidirectional communication between frontend and backend while broadcasting updated application state.

---

### Scenario Modules

Each attack scenario has its own implementation responsible for configuring:

- VPN Status
- Connection State
- Alerts
- Terminal Output
- Packet Behaviour
- Simulation Settings

---

# 📡 Data Flow

```
Frontend UI
      │
      ▼
User Interaction
      │
      ▼
WebSocket Message
      │
      ▼
Python Backend
      │
      ▼
Action Handler
      │
      ▼
State Manager
      │
      ▼
Updated Global State
      │
      ▼
WebSocket Broadcast
      │
      ▼
React Context API
      │
      ▼
Automatic UI Update
```

---

# 🎯 Design Goals

- Modular Architecture
- Real-Time Synchronization
- Interactive Learning Experience
- Modern Responsive Interface
- Easy Scenario Expansion
- Reusable React Components
- Clean Separation Between Frontend and Backend
- Educational Visualization of Cybersecurity Concepts

---
# 🚀 Installation & Setup

## Prerequisites

Before running CryptoSentinel, ensure the following software is installed on your system.

### Frontend

- Node.js (v18 or above)
- npm

### Backend

- Python 3.11+
- pip

### Recommended

- Visual Studio Code
- Git
- Modern Web Browser (Chrome / Edge / Firefox)

---

# 📥 Clone the Repository

```bash
git clone https://github.com/<your-username>/CryptoSentinel.git

cd CryptoSentinel
```

---

# 📦 Frontend Setup

Navigate to the frontend directory.

```bash
cd frontend
```

Install all dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

The frontend will be available at:

```
http://localhost:5173
```

---

# 🐍 Backend Setup

Open a second terminal.

Navigate to the backend folder.

```bash
cd backend
```

Install the required Python packages.

```bash
pip install -r requirements.txt
```

Start the backend server.

```bash
python main.py
```

The WebSocket server starts automatically.

```
ws://localhost:8765
```

---

# ▶ Running the Project

### Terminal 1

```bash
cd frontend

npm install

npm run dev
```

---

### Terminal 2

```bash
cd backend

pip install -r requirements.txt

python main.py
```

---

Open your browser.

```
http://localhost:5173
```

---

# 🎮 Using CryptoSentinel

### Step 1

Open the **Attack Scenarios** page.

---

### Step 2

Choose any one of the six available scenarios.

- Normal VPN
- Weak Password
- MITM (Unauthorized)
- MITM (Authorized)
- Shor's Algorithm
- CRYSTALS-Kyber

---

### Step 3

The frontend sends the selected action to the backend through WebSocket.

---

### Step 4

The backend initializes the selected simulation.

---

### Step 5

Every page updates automatically in real time.

You can now explore:

- Dashboard
- Network Visualization
- VM1
- VM2
- VM3
- Packet Monitor
- Reports
- System Health

---

# 📡 Real-Time Updates

The following data continuously updates while the simulation is running.

### Dashboard

- Packet Statistics
- VPN Status
- Connection Status
- Live Traffic
- Alerts

---

### Visualization

- Moving Packets
- Network Topology
- Traffic Flow
- Attack Timeline
- Latency
- Bandwidth

---

### VM1

- Connection Status
- Packet Queue
- Secure Terminal
- Session Information

---

### VM2

- Receiver Status
- Authentication
- Packet History
- Live Terminal

---

### VM3

- Kali Linux Terminal
- Attack Status
- Target Information
- Captured Packets

---

### Reports

- Current Report
- Report History
- Report Statistics

---

### System Health

- CPU Usage
- Memory Usage
- VPN Health
- VM Status

---

# 📁 Important Files

## Frontend

| File | Purpose |
|------|----------|
| `App.jsx` | Main application routing |
| `main.jsx` | React entry point |
| `DataContext.jsx` | Global WebSocket state |
| `useCyberData.js` | Shared data hook |
| `Visualization.jsx` | Network visualization page |
| `Vm1.jsx` | Sender VM |
| `Vm2.jsx` | Receiver VM |
| `Vm3.jsx` | Attacker VM |

---

## Backend

| File | Purpose |
|------|----------|
| `main.py` | Backend entry point |
| `websocket_server.py` | WebSocket communication |
| `action_handler.py` | Handles scenario selection |
| `state.py` | Global application state |
| `state_manager.py` | State management logic |
| `config.py` | Backend configuration |
| `models.py` | Shared backend models |

---

# ⚙ Configuration

Default WebSocket configuration:

```python
HOST = "localhost"
PORT = 8765
```

You can modify these values inside:

```
backend/config.py
```

---

# 🧪 Tested On

| Software | Version |
|-----------|----------|
| Windows | 11 |
| Python | 3.11+ |
| Node.js | 18+ |
| React | 19 |
| Vite | Latest |
| Chrome | Latest |
| VS Code | Latest |

---

# 💡 Tips

- Start the backend before opening the frontend.
- Ensure the WebSocket server is running on the configured port.
- Use separate terminals for frontend and backend.
- If dependencies are missing, rerun `npm install` or `pip install -r requirements.txt`.
- Refresh the browser after restarting the backend if needed.

---
# 🔮 Future Enhancements

CryptoSentinel has been designed with extensibility in mind. Some planned improvements include:

- 🔹 Integration with real packet capture using Wireshark
- 🔹 Docker-based deployment
- 🔹 User authentication and role management
- 🔹 Multi-user collaborative simulations
- 🔹 AI-powered anomaly detection
- 🔹 Interactive attack configuration panel
- 🔹 Real-time attack graph analytics
- 🔹 Exportable reports in PDF format
- 🔹 Database integration for historical analysis
- 🔹 Cloud deployment support
- 🔹 Support for additional cyber attack simulations
- 🔹 More post-quantum cryptographic algorithms
- 🔹 Performance monitoring dashboard
- 🔹 Dark/Light theme support
- 🔹 Interactive tutorials for beginners

---

# 🎓 Learning Outcomes

Developing CryptoSentinel provided practical experience in several areas of software engineering and cybersecurity, including:

### Software Development

- Full-Stack Web Development
- Component-Based Architecture
- Context API
- Custom React Hooks
- Responsive UI Design
- State Management
- Clean Code Practices

---

### Backend Development

- Python Programming
- WebSocket Communication
- Asynchronous Programming (`asyncio`)
- Event-Driven Architecture
- Real-Time State Synchronization

---

### Cybersecurity Concepts

- VPN Communication
- Packet Routing
- Encryption
- Authentication
- X25519 Key Exchange
- ChaCha20-Poly1305
- ARP Spoofing
- Man-in-the-Middle Attack
- Weak Password Attacks
- Packet Monitoring
- Network Visualization
- Quantum Computing
- Shor's Algorithm
- CRYSTALS-Kyber
- Post-Quantum Cryptography

---

# 🤝 Contributing

Contributions are always welcome.

If you would like to improve CryptoSentinel:

1. Fork the repository
2. Create a new feature branch

```bash
git checkout -b feature/YourFeature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature/YourFeature
```

5. Open a Pull Request

---

# 📝 License

This project is licensed under the **MIT License**.

Feel free to use, modify, and distribute this project for educational and research purposes.

---

# 👩‍💻 Author

## **Shivali Pandey**

**B.Tech Electronics & Communication Engineering**  
**IIIT Naya Raipur**

### Connect with me

- 💼 LinkedIn: *Add your LinkedIn profile*
- 🐙 GitHub: *Add your GitHub profile*
- 📧 Email: *Add your email*

---

# 🙏 Acknowledgements

Special thanks to the technologies and communities that made this project possible.

- React
- Vite
- Tailwind CSS
- Python
- WebSockets
- Lucide React
- Framer Motion
- Open Source Community

---

# ⭐ Support

If you found this project useful:

⭐ Star the repository

🍴 Fork the project

🛠️ Contribute improvements

📢 Share it with others

Your support helps improve the project and encourages future development.

---

<div align="center">

# 🛡️ CryptoSentinel

### *Visualizing Secure Communication. Understanding Cybersecurity.*

**Built with ❤️ using React, Python, WebSockets, and Modern Cybersecurity Concepts**

---

⭐ **If you enjoyed this project, don't forget to star the repository!** ⭐

</div>
