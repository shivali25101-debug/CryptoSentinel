import {
  CheckCircle2,
  Circle,
} from "lucide-react";

const steps = [
  {
    title: "Connection Established",
    status: "done",
  },
  {
    title: "VPN Tunnel Created",
    status: "done",
  },
  {
    title: "Key Exchange Completed",
    status: "done",
  },
  {
    title: "Encryption Active",
    status: "done",
  },
  {
    title: "Secure Channel Ready",
    status: "pending",
  },
];

function ConnectionStepper() {
  return (
    <div className="rounded-lg border border-[#1B2430] bg-[#08111D] overflow-hidden">

      {/* Header */}

      <div className="px-4 py-3 border-b border-[#18222F]">

        <h2 className="text-[12px] uppercase tracking-[0.22em]  text-cyan-400">

          Connection & Key Exchange Status

        </h2>

      </div>

      {/* Timeline */}

      <div className="px-6 py-4">

        {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative flex gap-2 pb-1 last:pb-0"
          >
            {/* Vertical Line */}

            {index !== steps.length - 1 && (
              <div
                className="
                absolute
                left-[10px]
                top-6
                w-[2px]
                h-full
                bg-[#233444]
                "
              />
            )}

            {/* Icon */}

            <div className="relative z-10">

              {step.status === "done" ? (
                <CheckCircle2
                  size={22}
                  className="text-green-400"
                />
              ) : (
                <Circle
                  size={22}
                  className="text-gray-500"
                />
              )}

            </div>

            {/* Text */}

            <div>

              <p className="text-[12px] text-white">

                {step.title}

              </p>

              <p className="text-[10px] text-gray-500 mt-1">

                {step.status === "done"
                  ? "Completed"
                  : "Waiting..."}

              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ConnectionStepper;