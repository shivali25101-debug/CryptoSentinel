import { Eye } from "lucide-react";

const reports = [
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

const threatColors = {
  LOW: "bg-green-500/20 text-green-400",
  MEDIUM: "bg-yellow-500/20 text-yellow-400",
  HIGH: "bg-red-500/20 text-red-400",
};

function ReportHistory() {
  return (
    <div className="bg-[#0F172A] border border-gray-800 rounded-xl overflow-hidden">

      {/* Header */}
      <div className="px-6 py-2 border-b border-gray-800">
        <h2 className="text-xl font-bold text-cyan-400">
          PREVIOUS REPORTS
        </h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-gray-300">
          <thead className="bg-[#111827]">
            <tr>
              <th className="px-6 py-2">Scenario</th>
              <th className="px-6 py-2">Date</th>
              <th className="px-6 py-2 text-center">Threat</th>
              <th className="px-6 py-2 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((report) => (
              <tr
                key={report.id}
                className="border-t border-gray-800 hover:bg-slate-800/40 transition"
              >
                <td className="px-6 py-2">{report.scenario}</td>

                <td className="px-6 py-2">{report.date}</td>

                <td className="px-6 py-2 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${threatColors[report.threat]}`}
                  >
                    {report.threat}
                  </span>
                </td>

                <td className="px-6 py-2 text-center">
                  <button className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition">
                    <Eye size={18} />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-6 py-2 border-t border-gray-800 text-sm text-gray-400">
        Showing {reports.length} Reports
      </div>
    </div>
  );
}

export default ReportHistory;