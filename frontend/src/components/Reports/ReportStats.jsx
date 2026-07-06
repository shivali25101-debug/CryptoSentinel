import {
  FileText,
  ShieldAlert,
  ShieldCheck,
  Network,
} from "lucide-react";

function StatCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <div
      className="
      bg-[#0F172A]
      border
      border-gray-800
      rounded-xl
      p-5
      flex
      items-center
      justify-between
      hover:border-cyan-500
      transition
      "
    >
      <div>

        <p className="text-gray-400 text-sm">
          {title}
        </p>

        <h2 className="text-3xl font-bold text-white mt-2">
          {value}
        </h2>

      </div>

      <div className={`${color} p-4 rounded-xl`}>

        {icon}

      </div>

    </div>
  );
}

function ReportStats({
  reports,
  currentReport,
}) {

  const highThreat =
    reports.filter(
      (report) => report.threat === "HIGH"
    ).length;

  const successful =
    reports.filter(
      (report) => report.threat === "LOW"
    ).length;

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      <StatCard
        title="Total Reports"
        value={reports.length}
        color="bg-cyan-500/20 text-cyan-400"
        icon={<FileText size={30} />}
      />

      <StatCard
        title="High Threat"
        value={highThreat}
        color="bg-red-500/20 text-red-400"
        icon={<ShieldAlert size={30} />}
      />

      <StatCard
        title="Successful Defenses"
        value={successful}
        color="bg-green-500/20 text-green-400"
        icon={<ShieldCheck size={30} />}
      />

      <StatCard
        title="Packets Processed"
        value={currentReport.sent}
        color="bg-purple-500/20 text-purple-400"
        icon={<Network size={30} />}
      />

    </div>

  );
}

export default ReportStats;