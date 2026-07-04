import { FileText, ShieldAlert } from "lucide-react";

function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-[#0F172A] border border-gray-800 rounded-xl p-4 flex items-center justify-between hover:border-cyan-500 transition">

      <div>
        <p className="text-gray-400 text-sm">{title}</p>

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

function ReportStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <StatCard
        title="Total Simulations"
        value="24"
        color="bg-cyan-500/20 text-cyan-400"
        icon={<FileText size={30} />}
      />

      <StatCard
        title="Highest Threat Level"
        value="HIGH"
        color="bg-red-500/20 text-red-400"
        icon={<ShieldAlert size={30} />}
      />

    </div>
  );
}

export default ReportStats;