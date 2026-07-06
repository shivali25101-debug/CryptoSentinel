import { useState } from "react";

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

function ResourceUsage({
  history,
  health,
}) {

  const [range, setRange] =
    useState("60s");

  const pieData = [
    {
      name: "CPU",
      value: health.cpu.usage,
      color: "#22D3EE",
    },
    {
      name: "Memory",
      value: health.memory.percentage,
      color: "#A855F7",
    },
    {
      name: "Network",
      value: 100 - health.cpu.usage - health.memory.percentage > 0
        ? Math.floor(
            (100 -
              health.cpu.usage -
              health.memory.percentage) /
              2
          )
        : 5,
      color: "#F59E0B",
    },
    {
      name: "Disk",
      value: 100 - (
        health.cpu.usage +
        health.memory.percentage +
        (
          100 - health.cpu.usage - health.memory.percentage > 0
            ? Math.floor(
                (100 -
                  health.cpu.usage -
                  health.memory.percentage) /
                  2
              )
            : 5
        )
      ),
      color: "#EF4444",
    },
  ];

  return (

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

      {/* Area Chart */}

      <div className="bg-[#0F172A] border border-gray-800 rounded-xl p-6">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-semibold text-white">
            Resource Usage
          </h2>

          <select
            value={range}
            onChange={(e) =>
              setRange(e.target.value)
            }
            className="bg-[#111827] border border-gray-700 rounded-lg px-3 py-2 text-gray-300"
          >
            <option value="60s">
              Last 60 Seconds
            </option>

            <option value="5m">
              Last 5 Minutes
            </option>

            <option value="1h">
              Last Hour
            </option>

          </select>

        </div>

        <div className="h-80">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <AreaChart data={history}>

              <XAxis
                dataKey="time"
                stroke="#94A3B8"
              />

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

          <div className="w-72 h-72">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <PieChart>

                <Pie
                  data={pieData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={100}
                  paddingAngle={3}
                >

                  {pieData.map((item) => (

                    <Cell
                      key={item.name}
                      fill={item.color}
                    />

                  ))}

                </Pie>

              </PieChart>

            </ResponsiveContainer>

          </div>

          <div className="space-y-5 w-52">

            {pieData.map((item) => (

              <div
                key={item.name}
                className="flex justify-between items-center"
              >

                <div className="flex items-center gap-3">

                  <div
                    className="w-4 h-4 rounded"
                    style={{
                      backgroundColor:
                        item.color,
                    }}
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
                CPU + Memory
              </span>

              <span className="text-cyan-400 font-bold">
                {health.cpu.usage +
                  health.memory.percentage}
                %
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default ResourceUsage;