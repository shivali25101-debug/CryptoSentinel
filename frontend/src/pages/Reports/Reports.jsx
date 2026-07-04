import CyberHeading from "../../components/CyberHeading";
import ReportStats from "../../components/Reports/ReportStats";
import CurrentReport from "../../components/Reports/CurrentReport";
import ReportHistory from "../../components/Reports/ReportHistory";

function Reports() {
  return (
    <div className="min-h-screen px-8 py-0">
      <CyberHeading title="SIMULATION REPORTS" />

      <div className="space-y-6 mt-8">

        <ReportStats />

        <CurrentReport />

        <ReportHistory />

      </div>
    </div>
  );
}

export default Reports;