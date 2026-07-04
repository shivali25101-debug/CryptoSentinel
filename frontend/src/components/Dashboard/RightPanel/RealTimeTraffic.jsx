import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { time: "20:45:30", sent: 280, received: 520, intercepted: 90 },
  { time: "20:46:00", sent: 260, received: 610, intercepted: 110 },
  { time: "20:46:30", sent: 330, received: 700, intercepted: 105 },
  { time: "20:47:00", sent: 360, received: 640, intercepted: 120 },
  { time: "20:47:30", sent: 340, received: 760, intercepted: 118 },
  { time: "20:48:00", sent: 395, received: 720, intercepted: 130 },
  { time: "20:48:30", sent: 380, received: 790, intercepted: 115 },
  { time: "20:49:00", sent: 420, received: 730, intercepted: 125 },
];

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
            data={data}
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