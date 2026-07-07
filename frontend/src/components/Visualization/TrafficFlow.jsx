import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

import useCyberData from "../../hooks/useCyberData";

function TrafficFlow() {
  const {
    scenario,
    sentPackets,
    receivedPackets,
    interceptedPackets,
  } = useCyberData();

  const [logs, setLogs] = useState([]);

  const scrollRef = useRef(null);

  useEffect(() => {

    const now = new Date();

    const time =
      now.getHours().toString().padStart(2, "0") +
      ":" +
      now.getMinutes().toString().padStart(2, "0") +
      ":" +
      now.getSeconds().toString().padStart(2, "0");

    let log;

    switch (scenario) {

      case "MITM Authorized":
      case "MITM Unauthorized":

        log = {
          time,
          source: "VM1",
          destination: "VM3",
          status: `Captured (${interceptedPackets})`,
          color: "text-red-400",
          direction: "right",
        };
        break;

      case "Replay Attack":

        log = {
          time,
          source: "VM3",
          destination: "VM2",
          status: "Replay",
          color: "text-orange-400",
          direction: "right",
        };
        break;

      case "Weak Password":

        log = {
          time,
          source: "VM3",
          destination: "VM1",
          status: "Credential Attempt",
          color: "text-yellow-400",
          direction: "left",
        };
        break;

      case "Shor Algorithm":

        log = {
          time,
          source: "Quantum",
          destination: "VPN",
          status: "Key Broken",
          color: "text-violet-400",
          direction: "right",
        };
        break;

      case "Kyber Secure":

        log = {
          time,
          source: "VM1",
          destination: "VM2",
          status: "Kyber Protected",
          color: "text-cyan-400",
          direction: "right",
        };
        break;

      default:

        log = {
          time,
          source: "VM1",
          destination: "VM2",
          status: `Encrypted (${sentPackets})`,
          color: "text-green-400",
          direction: "right",
        };
    }

    setLogs((prev) => [...prev.slice(-19), log]);

  }, [
    sentPackets,
    receivedPackets,
    interceptedPackets,
    scenario,
  ]);

  useEffect(() => {

    if (scrollRef.current) {
      scrollRef.current.scrollTop =
        scrollRef.current.scrollHeight;
    }

  }, [logs]);

  return (
    <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-5 h-full flex flex-col">

      <h2 className="text-cyan-400 text-sm uppercase tracking-widest font-semibold mb-4">
        Traffic Flow
      </h2>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto space-y-3 pr-1"
      >

        {logs.map((item, index) => (

          <div
            key={index}
            className="border border-slate-800 rounded-lg p-3 bg-[#101B2A]"
          >

            <div className="flex justify-between">

              <span className="text-xs text-slate-500">
                {item.time}
              </span>

              <span className={`text-xs font-semibold ${item.color}`}>
                {item.status}
              </span>

            </div>

            <div className="flex justify-between items-center mt-3">

              <span className="text-white text-sm">
                {item.source}
              </span>

              <div className={item.color}>
                {item.direction === "right"
                  ? <ArrowRight size={15} />
                  : <ArrowLeft size={15} />}
              </div>

              <span className="text-white text-sm">
                {item.destination}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TrafficFlow;