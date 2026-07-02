import {
  ShieldCheck,
  Lock,
  Clock3,
  UserCircle2
} from "lucide-react";

function Navbar() {

  return (

    <header className="h-20 border-b border-gray-800 bg-[#08111D] px-8 flex items-center justify-between">

      <div>

        <h1 className="text-2xl font-semibold tracking-wide">
          Dashboard
        </h1>

        <p className="text-sm text-gray-400 mt-1">
          Current Scenario :
          <span className="text-green-400 ml-2">
            Normal VPN
          </span>
        </p>

      </div>

      <div className="flex items-center gap-8">

        <div className="flex items-center gap-2">

          <ShieldCheck
            size={18}
            className="text-green-400"
          />

          <span className="text-sm">
            Connected
          </span>

        </div>

        <div className="flex items-center gap-2">

          <Lock
            size={18}
            className="text-cyan-400"
          />

          <span className="text-sm">
            ChaCha20-Poly1305
          </span>

        </div>

        <div className="flex items-center gap-2">

          <Clock3
            size={18}
            className="text-yellow-400"
          />

          <span className="text-sm">

            {new Date().toLocaleTimeString()}

          </span>

        </div>

        <div className="flex items-center gap-2">

          <UserCircle2
            size={20}
          />

          <span className="text-sm">

            Admin

          </span>

        </div>

      </div>

    </header>

  );
}

export default Navbar;