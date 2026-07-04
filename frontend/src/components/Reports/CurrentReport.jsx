import { Download, FileText } from "lucide-react";

const report = {
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

function ReportItem({ label, value }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-800 last:border-none">
      <span className="text-gray-400">{label}</span>
      <span className="text-white font-medium">{value}</span>
    </div>
  );
}

function CurrentReport() {
  return (
    <div className="bg-[#0F172A] border border-gray-800 rounded-xl">

      {/* Header */}
      <div className="px-6 py-2 border-b border-gray-800">
        <h2 className="text-xl font-bold text-cyan-400">
          LATEST SIMULATION REPORT
        </h2>
      </div>

      {/* Report Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 px-6 py-2">

        <div>
          <ReportItem label="Scenario" value={report.scenario} />
          <ReportItem label="Started" value={report.started} />
          <ReportItem label="Duration" value={report.duration} />
          <ReportItem label="Encryption" value={report.encryption} />
          <ReportItem label="Key Exchange" value={report.keyExchange} />
          <ReportItem label="VPN Tunnel" value={report.vpn} />
        </div>

        <div>
          <ReportItem
            label="Threat Level"
            value={
              <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm">
                {report.threat}
              </span>
            }
          />

          <ReportItem label="Packets Sent" value={report.sent} />
          <ReportItem label="Intercepted" value={report.intercepted} />
          <ReportItem label="Dropped" value={report.dropped} />
          <ReportItem label="Forwarded" value={report.forwarded} />
          <ReportItem label="Bytes Transferred" value={report.bytes} />
        </div>

      </div>

      {/* Buttons */}
      <div className="px-6 py-2 border-t border-gray-800 flex flex-wrap gap-4">

        <button className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 transition px-5 py-2 rounded-lg text-white font-medium">
          <FileText size={18} />
          Generate PDF
        </button>

        <button className="flex items-center gap-2 border border-gray-700 hover:border-cyan-500 transition px-5 py-2 rounded-lg text-gray-300 hover:text-white">
          <Download size={18} />
          Download Report
        </button>

      </div>

    </div>
  );
}

export default CurrentReport;