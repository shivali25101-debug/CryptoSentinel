import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const areaData = [
  { time: "60s", cpu: 35, memory: 62 },
  { time: "50s", cpu: 38, memory: 70 },
  { time: "40s", cpu: 41, memory: 68 },
  { time: "30s", cpu: 34, memory: 63 },
  { time: "20s", cpu: 39, memory: 69 },
  { time: "10s", cpu: 36, memory: 66 },
  { time: "Now", cpu: 40, memory: 68 },
];

const pieData = [
  { name: "CPU", value: 40, color: "#22D3EE" },
  { name: "Memory", value: 30, color: "#A855F7" },
  { name: "Network", value: 20, color: "#F59E0B" },
  { name: "Disk", value: 10, color: "#EF4444" },
];

function ResourceUsage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

      {/* Area Chart */}
      <div className="bg-[#0F172A] border border-gray-800 rounded-xl p-6">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">
            Resource Usage
          </h2>

          <select className="bg-[#111827] border border-gray-700 rounded-lg px-3 py-2 text-gray-300">
            <option>Last 60 Seconds</option>
            <option>Last 5 Minutes</option>
            <option>Last Hour</option>
          </select>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={areaData}
            barGap={0}>
              <XAxis dataKey="time" stroke="#94A3B8" />
              <YAxis stroke="#94A3B8" />
              <Tooltip />

              <Area
                type="monotone"
                dataKey="cpu"
                stroke="#22D3EE"
                fill="#22D3EE33"
              />

              <Area
                type="monotone"
                dataKey="memory"
                stroke="#A855F7"
                fill="#A855F733"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* Pie Chart */}

      <div className="bg-[#0F172A] border border-gray-800 rounded-xl p-6">

        <h2 className="text-xl font-semibold text-cyan-400 mb-6">
          Resource Distribution
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

          <div className="w-72 h-72 -ml-10">

            <ResponsiveContainer width="100%" height="100%">
              <PieChart>

                <Pie
                  data={pieData}
                  dataKey="value"
                  innerRadius={25}
                  outerRadius={60}
                  paddingAngle={2}
                  
  cx="60%"   // Move left
  cy="50%"
  innerRadius={65}
  outerRadius={100}
  paddingAngle={2}

                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={entry.color}
                    />
                  ))}
                </Pie>

              </PieChart>
            </ResponsiveContainer>

          </div>

          <div className="space-y-5 w-48">

            {pieData.map((item) => (

              <div
                key={item.name}
                className="flex justify-between items-center"
              >
                <div className="flex items-center gap-3">

                  <div
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: item.color }}
                  />

                  <span className="text-gray-300">
                    {item.name}
                  </span>

                </div>

                <span className="text-white font-semibold">
                  {item.value}%
                </span>

              </div>

            ))}

            <div className="border-t border-gray-700 pt-5 flex justify-between">

              <span className="text-gray-400">
                Total Usage
              </span>

              <span className="text-white font-bold">
                100%
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ResourceUsage;