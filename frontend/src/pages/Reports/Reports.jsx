import { useState, useEffect } from "react";
import CyberHeading from "../../components/CyberHeading";
import ReportStats from "../../components/Reports/ReportStats";
import CurrentReport from "../../components/Reports/CurrentReport";
import ReportHistory from "../../components/Reports/ReportHistory";
import { useData } from "../../context/DataContext";

function Reports() {
  const { data } = useData();

  const [currentReport, setCurrentReport] = useState(null);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    if (!data) return;

    let threat = "LOW";

    if (data.scenario === "MITM") threat = "HIGH";
    else if (data.scenario === "Weak Password") threat = "MEDIUM";
    else if (data.scenario === "Shor") threat = "HIGH";
    else if (data.scenario === "Kyber") threat = "LOW";
    else if (data.scenario === "MITM_AUTH") threat = "LOW";

    const report = {
      scenario: data.scenario,
      started: new Date().toLocaleString(),
      duration: data.uptime,
      encryption: data.vm1.connection.encryption,
      keyExchange: data.vm1.connection.keyExchange,
      vpn: data.vpnStatus,
      threat,

      sent: data.sentPackets,
      intercepted: data.interceptedPackets,
      dropped: data.droppedPackets,
      forwarded: data.forwardedPackets,

      bytes:
        (data.bytesTransferred / 1024 / 1024).toFixed(2) +
        " MB",
    };

    setCurrentReport(report);

    setReports([
      {
        id: 1,
        scenario: report.scenario,
        date: new Date().toLocaleDateString(),
        threat: report.threat,
      },
    ]);
  }, [data]);

  if (!currentReport) return null;

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

        <CurrentReport report={currentReport} />

        <ReportHistory reports={reports} />
      </div>
    </div>
  );
}

export default Reports;