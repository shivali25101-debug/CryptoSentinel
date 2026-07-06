import { Download, FileText } from "lucide-react";

function ReportItem({ label, value }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-800 last:border-none">
      <span className="text-gray-400">{label}</span>

      <span className="text-white font-medium">
        {value}
      </span>
    </div>
  );
}

const threatColors = {
  LOW: "bg-green-500/20 text-green-400",
  MEDIUM: "bg-yellow-500/20 text-yellow-400",
  HIGH: "bg-red-500/20 text-red-400",
};

function CurrentReport({ report }) {

  const generatePDF = () => {
    // Backend Later
    alert("PDF generation will be connected to the backend.");
  };

  const downloadReport = () => {

    const content = `
Simulation Report

Scenario : ${report.scenario}

Started : ${report.started}

Duration : ${report.duration}

Encryption : ${report.encryption}

Key Exchange : ${report.keyExchange}

VPN Tunnel : ${report.vpn}

Threat Level : ${report.threat}

Packets Sent : ${report.sent}

Packets Intercepted : ${report.intercepted}

Packets Dropped : ${report.dropped}

Packets Forwarded : ${report.forwarded}

Bytes Transferred : ${report.bytes}
`;

    const blob = new Blob([content], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "simulation_report.txt";

    link.click();

    URL.revokeObjectURL(url);

  };

  return (

    <div className="bg-[#0F172A] border border-gray-800 rounded-xl">

      {/* Header */}

      <div className="px-6 py-4 border-b border-gray-800">

        <h2 className="text-xl font-bold text-cyan-400">
          LATEST SIMULATION REPORT
        </h2>

      </div>

      {/* Report */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 py-4">

        <div>

          <ReportItem
            label="Scenario"
            value={report.scenario}
          />

          <ReportItem
            label="Started"
            value={report.started}
          />

          <ReportItem
            label="Duration"
            value={report.duration}
          />

          <ReportItem
            label="Encryption"
            value={report.encryption}
          />

          <ReportItem
            label="Key Exchange"
            value={report.keyExchange}
          />

          <ReportItem
            label="VPN Tunnel"
            value={report.vpn}
          />

        </div>

        <div>

          <ReportItem
            label="Threat Level"
            value={
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${threatColors[report.threat]}`}
              >
                {report.threat}
              </span>
            }
          />

          <ReportItem
            label="Packets Sent"
            value={report.sent}
          />

          <ReportItem
            label="Intercepted"
            value={report.intercepted}
          />

          <ReportItem
            label="Dropped"
            value={report.dropped}
          />

          <ReportItem
            label="Forwarded"
            value={report.forwarded}
          />

          <ReportItem
            label="Bytes Transferred"
            value={report.bytes}
          />

        </div>

      </div>

      {/* Footer */}

      <div className="px-6 py-4 border-t border-gray-800 flex flex-wrap gap-4">

        <button
          onClick={generatePDF}
          className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 transition px-5 py-2 rounded-lg text-white font-medium"
        >

          <FileText size={18} />

          Generate PDF

        </button>

        <button
          onClick={downloadReport}
          className="flex items-center gap-2 border border-gray-700 hover:border-cyan-500 transition px-5 py-2 rounded-lg text-gray-300 hover:text-white"
        >

          <Download size={18} />

          Download Report

        </button>

      </div>

    </div>

  );

}

export default CurrentReport;