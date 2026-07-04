import {
  KeyRound,
  ShieldCheck,
  Lock,
} from "lucide-react";

function Field({ title, value, color = "#8FA3B8" }) {
  return (
    <div className="mb-4">

      <p className="text-[10px] uppercase tracking-[0.18em] text-gray-500 mb-1">
        {title}
      </p>

      <div
        className="rounded-md border border-[#1A2430] bg-[#0C1724] px-3 py-2"
      >
        <span
          className="font-mono text-[11px] break-all"
          style={{ color }}
        >
          {value}
        </span>
      </div>

    </div>
  );
}

function KeyExchangeDetails() {
  return (
    <div className="rounded-lg border border-[#1A2430] bg-[#08111D] overflow-hidden">

      {/* Header */}

      <div className="px-4 py-2 border-b border-[#18222F] flex justify-between items-center">

        <h2 className="text-[15px] uppercase tracking-[0.22em] text-cyan-400" align="center">
          Key Exchange Details
        </h2>

        <KeyRound
          size={15}
          className="text-cyan-400"
        />

      </div>

      <div className="p-2">

        <Field
          title="Public Key"
          value="A82F91C64E3D7A99..."
          color="#39FF6A"
        />

        <Field
          title="Private Key"
          value="••••••••••••••••••••"
          color="#F5C542"
        />

        <Field
          title="Shared Secret"
          value="7A91BC3DFF921AE7..."
          color="#2EA8FF"
        />

        <div className="grid grid-cols-2 gap-2 mt-2">

          <div className="rounded-md border border-[#1A2430] bg-[#0C1724] p-3">

            <div className="flex items-center gap-2 mb-2">

              <Lock
                size={14}
                className="text-cyan-400"
              />

              <span className="text-[10px] uppercase tracking-wider text-gray-500">
                Algorithm
              </span>

            </div>

            <p className="text-[12px] text-cyan-400 font-semibold">
              X25519
            </p>

          </div>

          <div className="rounded-md border border-[#1A2430] bg-[#0C1724] p-3">

            <div className="flex items-center gap-2 mb-2">

              <ShieldCheck
                size={14}
                className="text-green-400"
              />

              <span className="text-[10px] uppercase tracking-wider text-gray-500">
                Status
              </span>

            </div>

            <p className="text-[12px] text-green-400 font-semibold">
              VERIFIED
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default KeyExchangeDetails;