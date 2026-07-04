import sender from "../../assets/topology/sender.png";

import attacker from "../../assets/topology/attacker.png";

import receiver from "../../assets/topology/receiver.png";



import "./networkCanvas.css";



function NetworkCanvas() {

  return (

    <div className="relative w-full h-full min-h-[700px] bg-[#08111F] border border-slate-800 rounded-xl overflow-hidden">



      {/* ================= GRID BACKGROUND ================= */}



      <div className="absolute inset-0 grid-bg" />



      {/* ================= HEADER ================= */}



      <div className="relative z-20 flex items-center justify-between px-6 py-4 border-b border-slate-800">



        <div>



          <h2 className="text-cyan-400 uppercase tracking-[0.25em] text-sm font-bold">

            Network Visualization

          </h2>



          <p className="text-[11px] text-slate-500 mt-1">

            Live Secure Communication Monitor

          </p>



        </div>



        <div className="flex items-center gap-2">



          <span className="live-dot"></span>



          <span className="text-green-400 text-xs tracking-widest uppercase">

            LIVE

          </span>



        </div>



      </div>



      {/* ================= MAIN CANVAS ================= */}



      <div className="relative h-[620px]">



        {/* SVG will come in Part 2 */}

        <svg

  className="absolute inset-0 grid-bg z-0"

  viewBox="0 0 1200 620"

  preserveAspectRatio="none"

>



  {/* Left Connection */}



  



  {/* Glow */}



  



</svg>

<div className="packet packet1"></div>

<div className="packet packet2"></div>

<div className="packet packet3"></div>

<div className="packet packet4"></div>



        {/* ================= VM1 ================= */}



        <div

          className="

          absolute

          left-[8%]

          top-40

          -translate-y-1/2

          flex

          flex-col

          items-center

          z-20

        "

        >



          <div className="node-glow sender-glow">



            <img

              src={sender}

              alt="Sender"

              className="w-40 select-none pointer-events-none"

            />



          </div>



          <h3 className="mt-4 text-cyan-400 font-semibold tracking-wide">

            VM1

          </h3>



          <p className="text-xs text-slate-400">

            Sender

          </p>



          <span className="mt-2 text-[11px] text-slate-500">

            10.0.0.1

          </span>



        </div>



        {/* ================= VM3 ================= */}



        <div

          className="

          absolute

          left-1/2

          top-100

          -translate-x-1/2

          -translate-y-1/2

          flex

          flex-col

          items-center

          z-20

        "

        >



          <div className="node-glow attacker-glow">



            <img

              src={attacker}

              alt="Attacker"

              className="w-40 select-none pointer-events-none"

            />



          </div>



          <h3 className="mt-4 text-red-400 font-semibold tracking-wide">

            VM3

          </h3>



          <p className="text-xs text-slate-400">

            Kali Linux

          </p>



          <span className="mt-2 text-[11px] text-slate-500">

            10.0.0.3

          </span>



        </div>



        {/* ================= VM2 ================= */}



        <div

          className="

          absolute

          right-[8%]

          top-40

          -translate-y-1/2

          flex

          flex-col

          items-center

          z-20

        "

        >



          <div className="node-glow receiver-glow">



            <img

              src={receiver}

              alt="Receiver"

              className="w-40 select-none pointer-events-none"

            />



          </div>



          <h3 className="mt-4 text-green-400 font-semibold tracking-wide">

            VM2

          </h3>



          <p className="text-xs text-slate-400">

            Receiver

          </p>



          <span className="mt-2 text-[11px] text-slate-500">

            10.0.0.2

          </span>



        </div>



      </div>

      <div className="border-t border-slate-800 bg-[#0F172A]/90 px-6 py-3 flex justify-between">



  <div>



    <p className="text-[10px] uppercase tracking-widest text-slate-500">

      Scenario

    </p>



    <p className="text-sm text-red-400">

      MITM Attack

    </p>



  </div>



  <div>



    <p className="text-[10px] uppercase tracking-widest text-slate-500">

      Encryption

    </p>



    <p className="text-sm text-violet-400">

      ChaCha20-Poly1305

    </p>



  </div>



  <div>



    <p className="text-[10px] uppercase tracking-widest text-slate-500">

      Tunnel

    </p>



    <p className="text-sm text-cyan-400">

      ACTIVE

    </p>



  </div>



  <div>



    <p className="text-[10px] uppercase tracking-widest text-slate-500">

      Latency

    </p>



    <p className="text-sm text-white">

      14 ms

    </p>



  </div>



</div>



    </div>

  );

}



export default NetworkCanvas;