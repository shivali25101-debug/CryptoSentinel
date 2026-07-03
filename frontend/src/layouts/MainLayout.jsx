import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

function MainLayout({ children }) {
  return (
    <div className="flex h-screen bg-[#050B14] text-white overflow-hidden">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Navbar />

        <main className="flex-1 overflow-y-auto px-6 py-5">

          {children}

        </main>

      </div>

    </div>
  );
}

export default MainLayout;