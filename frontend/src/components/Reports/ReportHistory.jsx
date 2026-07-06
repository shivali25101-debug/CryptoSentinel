import {
  Eye,
  Download,
} from "lucide-react";

const threatColors = {
  LOW: "bg-green-500/20 text-green-400",
  MEDIUM: "bg-yellow-500/20 text-yellow-400",
  HIGH: "bg-red-500/20 text-red-400",
};

function ReportHistory({
  reports,
}) {

  const downloadReport = (report) => {

    const content = `
Simulation Report

Scenario : ${report.scenario}

Date : ${report.date}

Threat Level : ${report.threat}
`;

    const blob = new Blob([content], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = `${report.scenario
      .replace(/\s+/g, "_")
      .toLowerCase()}_report.txt`;

    link.click();

    URL.revokeObjectURL(url);

  };

  const viewReport = (report) => {
    // Backend later
    alert(`Viewing ${report.scenario} report.`);
  };

  return (

    <div className="bg-[#0F172A] border border-gray-800 rounded-xl overflow-hidden">

      {/* Header */}

      <div className="px-6 py-4 border-b border-gray-800 flex justify-between items-center">

        <h2 className="text-xl font-bold text-cyan-400">
          PREVIOUS REPORTS
        </h2>

        <span className="text-gray-400 text-sm">
          {reports.length} Reports
        </span>

      </div>

      {/* Table */}

      <div className="max-h-[450px] overflow-y-auto">

        <table className="w-full text-left text-gray-300">

          <thead className="sticky top-0 bg-[#111827] border-b border-gray-800">

            <tr>

              <th className="px-6 py-4">
                Scenario
              </th>

              <th className="px-6 py-4">
                Date
              </th>

              <th className="px-6 py-4 text-center">
                Threat
              </th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {reports.map((report) => (

              <tr
                key={report.id}
                className="border-b border-gray-800 hover:bg-slate-800/40 transition"
              >

                <td className="px-6 py-4 font-medium">
                  {report.scenario}
                </td>

                <td className="px-6 py-4">
                  {report.date}
                </td>

                <td className="px-6 py-4 text-center">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${threatColors[report.threat]}`}
                  >
                    {report.threat}
                  </span>

                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-4">

                    <button
                      onClick={() =>
                        viewReport(report)
                      }
                      className="text-cyan-400 hover:text-cyan-300 transition"
                    >

                      <Eye size={20} />

                    </button>

                    <button
                      onClick={() =>
                        downloadReport(report)
                      }
                      className="text-green-400 hover:text-green-300 transition"
                    >

                      <Download size={20} />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

            {reports.length === 0 && (

              <tr>

                <td
                  colSpan={4}
                  className="text-center py-10 text-gray-500"
                >
                  No reports available.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

      {/* Footer */}

      <div className="px-6 py-4 border-t border-gray-800 text-gray-400 text-sm">

        Showing

        <span className="text-cyan-400 font-semibold mx-2">
          {reports.length}
        </span>

        reports

      </div>

    </div>

  );

}

export default ReportHistory;