import { Activity } from "lucide-react";

function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon = Activity,
  color = "#39FF6A",
  graph,
}) {
  return (
    <div
      className="
      h-[76px]
      rounded-lg
      border
      border-[#1A2430]
      bg-[#08111D]
      px-3
      flex
      items-center
      justify-between
      transition-all
      duration-300
      hover:border-white/20
      "
    >
      <div className="flex gap-3">

        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center border"
          style={{
            borderColor: color + "55",
            background: color + "12",
            boxShadow: `0 0 18px ${color}22`,
          }}
        >
          <Icon
            size={14}
            color={color}
          />
        </div>

        <div>

          <p className="text-[10px] text-gray-400">
            {title}
          </p>

          <h2
            className="text-[15px] leading-none mt-1 font-semibold"
            style={{ color }}
          >
            {value}
          </h2>

          <p className="text-[10px] text-gray-500 mt-1">
            {subtitle}
          </p>

        </div>

      </div>

      {graph && (
        <img
          src={graph}
          className="w-36 object-contain opacity-90"
          alt=""
        />
      )}
    </div>
  );
}

export default MetricCard;