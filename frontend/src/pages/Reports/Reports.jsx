import { useState } from "react";

import CyberHeading from "../../components/CyberHeading";
import ReportStats from "../../components/Reports/ReportStats";
import CurrentReport from "../../components/Reports/CurrentReport";
import ReportHistory from "../../components/Reports/ReportHistory";

const latestReport = {
  scenario: "MITM Attack",
  started: "04 Jul 2026, 10:42 AM",
  duration: "05m 32s",
  encryption: "ChaCha20-Poly1305",
  keyExchange: "X25519",
  vpn: "Active",
  threat: "HIGH",
  sent: 1425,
  intercepted: 238,
  dropped: 18,
  forwarded: 1169,
  bytes: "18.6 MB",
};

const reportHistory = [
  {
    id: 1,
    scenario: "MITM Attack",
    date: "04 Jul 2026",
    threat: "HIGH",
  },
  {
    id: 2,
    scenario: "Replay Attack",
    date: "03 Jul 2026",
    threat: "MEDIUM",
  },
  {
    id: 3,
    scenario: "ARP Spoofing",
    date: "03 Jul 2026",
    threat: "HIGH",
  },
  {
    id: 4,
    scenario: "Secure VPN",
    date: "02 Jul 2026",
    threat: "LOW",
  },
  {
    id: 5,
    scenario: "Weak Password",
    date: "02 Jul 2026",
    threat: "MEDIUM",
  },
];

function Reports() {

  const [currentReport, setCurrentReport] =
    useState(latestReport);

  const [reports, setReports] =
    useState(reportHistory);

  /*
    BACKEND LATER

    useEffect(() => {
      fetch("http://localhost:5000/api/reports")
        .then(res => res.json())
        .then(data => {
          setCurrentReport(data.latest);
          setReports(data.history);
        });
    }, []);

  */

  return (

    <div className="min-h-screen px-8 py-0">

      <CyberHeading
        title="SIMULATION REPORTS"
        subtitle="GENERATED ANALYSIS OF SECURITY SIMULATIONS"
      />

      <div className="space-y-6 mt-8">

        <ReportStats
          reports={reports}
          currentReport={currentReport}
        />

        <CurrentReport
          report={currentReport}
        />

        <ReportHistory
          reports={reports}
        />

      </div>

    </div>

  );

}

export default Reports;