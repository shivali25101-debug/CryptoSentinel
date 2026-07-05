import { useEffect, useState } from "react";
import useCyberData from "../../../hooks/useCyberData";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";



function CustomTooltip({ active, payload }) {
  if (!active || !payload) return null;

  return (
    <div className="bg-[#101A27] border border-[#233041] rounded-md px-3 py-2 text-xs">
      <p className="text-gray-300">{payload[0].payload.time}</p>

      <p className="text-green-400">
        Sent : {payload[0].value}
      </p>

      <p className="text-blue-400">
        Received : {payload[1].value}
      </p>

      <p className="text-red-400">
        Intercepted : {payload[2].value}
      </p>
    </div>
  );
}

function RealTimeTraffic() {
    
    const {
  sentPackets,
  receivedPackets,
  interceptedPackets,
} = useCyberData();

const [chartData, setChartData] = useState([]);
console.log({
  sentPackets,
  receivedPackets,
  interceptedPackets,
});

useEffect(() => {
  const now = new Date();

  const time =
    now.getHours().toString().padStart(2, "0") +
    ":" +
    now.getMinutes().toString().padStart(2, "0") +
    ":" +
    now.getSeconds().toString().padStart(2, "0");

  setChartData((prev) => {
    const updated = [
      ...prev,
      {
        time,
        sent: sentPackets,
        received: receivedPackets,
        intercepted: interceptedPackets,
      },
    ];

    return updated.slice(-20); // Keep last 20 points
  });

}, [sentPackets, receivedPackets, interceptedPackets]);

  return (
    <div className="h-full rounded-xl border border-[#1A2430] bg-[#08111D]">

      <div className="px-5 pt-1">

        <h2 className="text-[15px] font-semibold tracking-[0.15em] uppercase text-cyan-400">
          REAL-TIME TRAFFIC
        </h2>

      </div>
      
    

      {/* Legend */}

      <div className="flex justify-center gap-7 mt-1 text-[11px]">

        <div className="flex items-center gap-2">

          <div className="w-3 h-[2px] bg-[#39FF6A]" />

          <span className="text-gray-400">
            Sent
          </span>

        </div>

        <div className="flex items-center gap-2">

          <div className="w-3 h-[2px] bg-[#2EA8FF]" />

          <span className="text-gray-400">
            Received
          </span>

        </div>

        <div className="flex items-center gap-2">

          <div className="w-3 h-[2px] bg-[#FF4040]" />

          <span className="text-gray-400">
            Intercepted
          </span>

        </div>

      </div>

      <div className="h-[120px] mt-2 pr-3">

        <ResponsiveContainer>

          <LineChart
            data={chartData}
            margin={{
              top: 20,
              right: 15,
              left: -20,
              bottom: 10,
            }}
          >

            <CartesianGrid
              stroke="#182430"
              vertical={false}
            />

            <XAxis
              dataKey="time"
              tick={{
                fill: "#677789",
                fontSize: 10,
              }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tick={{
                fill: "#677789",
                fontSize: 10,
              }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              content={<CustomTooltip />}
            />

            <Line
              type="monotone"
              dataKey="sent"
              stroke="#39FF6A"
              strokeWidth={1}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="received"
              stroke="#2EA8FF"
              strokeWidth={1}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="intercepted"
              stroke="#FF4040"
              strokeWidth={1}
              dot={false}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default RealTimeTraffic;